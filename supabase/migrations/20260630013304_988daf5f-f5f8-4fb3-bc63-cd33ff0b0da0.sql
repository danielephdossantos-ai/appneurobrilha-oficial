
-- 1) Tabela de histórico de versões publicadas
CREATE TABLE IF NOT EXISTS public.lesson_versions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc text NOT NULL,
  version integer NOT NULL,
  titulo text,
  ano text,
  disciplina text,
  payload jsonb NOT NULL,
  draft_id uuid REFERENCES public.lesson_drafts(id) ON DELETE SET NULL,
  lesson_id uuid REFERENCES public.lesson_content(id) ON DELETE SET NULL,
  author uuid,
  reviewer uuid,
  change_reason text,
  is_current boolean NOT NULL DEFAULT true,
  published_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (codigo_bncc, version)
);

CREATE INDEX IF NOT EXISTS lesson_versions_codigo_bncc_idx
  ON public.lesson_versions (codigo_bncc, version DESC);
CREATE INDEX IF NOT EXISTS lesson_versions_current_idx
  ON public.lesson_versions (codigo_bncc) WHERE is_current = true;

GRANT SELECT ON public.lesson_versions TO authenticated;
GRANT ALL ON public.lesson_versions TO service_role;

ALTER TABLE public.lesson_versions ENABLE ROW LEVEL SECURITY;

-- Admins veem tudo
CREATE POLICY "lesson_versions_admin_all"
  ON public.lesson_versions
  FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Usuários autenticados só leem a versão atual
CREATE POLICY "lesson_versions_read_current"
  ON public.lesson_versions
  FOR SELECT
  TO authenticated
  USING (is_current = true);

CREATE TRIGGER lesson_versions_set_updated_at
  BEFORE UPDATE ON public.lesson_versions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


-- 2) Publicar com versionamento (não altera approve_lesson_draft;
--    apenas o invoca e registra a versão histórica).
CREATE OR REPLACE FUNCTION public.publish_lesson_with_version(
  _draft_id uuid,
  _change_reason text DEFAULT NULL
) RETURNS TABLE(version integer, version_id uuid, lesson_id uuid)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _draft      public.lesson_drafts;
  _lesson_id  uuid;
  _next_ver   integer;
  _version_id uuid;
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'FORBIDDEN';
  END IF;

  SELECT * INTO _draft FROM public.lesson_drafts WHERE id = _draft_id;
  IF _draft.id IS NULL THEN RAISE EXCEPTION 'DRAFT_NOT_FOUND'; END IF;

  -- Publica usando o fluxo oficial (não modificar).
  _lesson_id := public.approve_lesson_draft(_draft_id);

  -- Calcula próxima versão para o codigo_bncc.
  SELECT COALESCE(MAX(version), 0) + 1
    INTO _next_ver
    FROM public.lesson_versions
   WHERE codigo_bncc = _draft.codigo_bncc;

  -- Marca versões anteriores como não-atuais.
  UPDATE public.lesson_versions
     SET is_current = false, updated_at = now()
   WHERE codigo_bncc = _draft.codigo_bncc AND is_current = true;

  -- Snapshot completo da nova versão atual.
  INSERT INTO public.lesson_versions (
    codigo_bncc, version, titulo, ano, disciplina, payload,
    draft_id, lesson_id, author, reviewer, change_reason, is_current
  ) VALUES (
    _draft.codigo_bncc,
    _next_ver,
    _draft.titulo,
    _draft.ano,
    _draft.disciplina,
    _draft.payload,
    _draft.id,
    _lesson_id,
    _draft.generated_by,
    auth.uid(),
    _change_reason,
    true
  ) RETURNING id INTO _version_id;

  RETURN QUERY SELECT _next_ver, _version_id, _lesson_id;
END;
$$;


-- 3) Restaurar uma versão antiga: cria NOVO draft pendente com o snapshot.
--    Não sobrescreve nada; admin precisa aprovar para virar versão atual.
CREATE OR REPLACE FUNCTION public.restore_lesson_version(
  _version_id uuid,
  _change_reason text DEFAULT 'restore'
) RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _v        public.lesson_versions;
  _draft_id uuid;
  _pending  uuid;
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'FORBIDDEN';
  END IF;

  SELECT * INTO _v FROM public.lesson_versions WHERE id = _version_id;
  IF _v.id IS NULL THEN RAISE EXCEPTION 'VERSION_NOT_FOUND'; END IF;

  -- Nunca sobrescrever draft pendente
  SELECT id INTO _pending
    FROM public.lesson_drafts
   WHERE codigo_bncc = _v.codigo_bncc AND status = 'pending'
   LIMIT 1;
  IF _pending IS NOT NULL THEN
    RAISE EXCEPTION 'DRAFT_PENDING_EXISTS: % ', _pending;
  END IF;

  INSERT INTO public.lesson_drafts (
    codigo_bncc, ano, disciplina, titulo, payload, status,
    generated_by, notes
  ) VALUES (
    _v.codigo_bncc, _v.ano, _v.disciplina, _v.titulo, _v.payload, 'pending',
    auth.uid(),
    'restore from v' || _v.version || ' | reason: ' || COALESCE(_change_reason, '')
  ) RETURNING id INTO _draft_id;

  RETURN _draft_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.publish_lesson_with_version(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.restore_lesson_version(uuid, text)     TO authenticated;
