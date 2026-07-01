
-- 1) Histórico de revisões / evolução ao longo do tempo
CREATE TABLE IF NOT EXISTS public.escola_revisoes_historico (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  codigo_bncc text NOT NULL,
  desempenho integer NOT NULL CHECK (desempenho BETWEEN 0 AND 100),
  tipo text NOT NULL DEFAULT 'aula' CHECK (tipo IN ('aula','revisao','diagnostico')),
  registrado_em timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.escola_revisoes_historico TO authenticated;
GRANT ALL ON public.escola_revisoes_historico TO service_role;

ALTER TABLE public.escola_revisoes_historico ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Família vê o histórico das próprias crianças"
  ON public.escola_revisoes_historico FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = escola_revisoes_historico.child_id AND c.user_id = auth.uid()
    )
  );

CREATE POLICY "Família registra histórico das próprias crianças"
  ON public.escola_revisoes_historico FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = escola_revisoes_historico.child_id AND c.user_id = auth.uid()
    )
  );

CREATE INDEX IF NOT EXISTS idx_escola_revisoes_child_bncc_data
  ON public.escola_revisoes_historico (child_id, codigo_bncc, registrado_em DESC);

-- 2) Registrar conclusão de uma aula e programar próxima revisão
CREATE OR REPLACE FUNCTION public.registrar_conclusao_aula(
  _child_id uuid,
  _codigo_bncc text,
  _desempenho integer,
  _tipo text DEFAULT 'aula'
) RETURNS timestamptz
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _owner uuid;
  _prev  public.spaced_repetition_schedule;
  _novo_intervalo int;
  _ease numeric;
  _prox timestamptz;
BEGIN
  -- Autorização: a criança precisa pertencer ao usuário autenticado
  SELECT user_id INTO _owner FROM public.children WHERE id = _child_id;
  IF _owner IS NULL OR _owner <> auth.uid() THEN
    RAISE EXCEPTION 'FORBIDDEN';
  END IF;

  _desempenho := GREATEST(0, LEAST(100, COALESCE(_desempenho, 0)));

  -- Registra o desempenho no histórico
  INSERT INTO public.escola_revisoes_historico (child_id, codigo_bncc, desempenho, tipo)
  VALUES (_child_id, _codigo_bncc, _desempenho, COALESCE(_tipo, 'aula'));

  -- Marca a conclusão em escola_progresso
  UPDATE public.escola_progresso
     SET concluida = true,
         concluida_em = COALESCE(concluida_em, now()),
         ultima_visita_em = now(),
         percentual = GREATEST(COALESCE(percentual,0), _desempenho),
         updated_at = now()
   WHERE child_id = _child_id AND codigo_bncc = _codigo_bncc;

  -- Calcula próximo intervalo (SM-2 simplificado)
  SELECT * INTO _prev FROM public.spaced_repetition_schedule
   WHERE child_id = _child_id AND skill_code = _codigo_bncc
   LIMIT 1;

  _ease := COALESCE(_prev.ease_factor, 2.5);
  IF _desempenho < 70 THEN
    _novo_intervalo := 1;
    _ease := GREATEST(1.3, _ease - 0.2);
  ELSIF _prev.id IS NULL THEN
    _novo_intervalo := 1;
  ELSE
    _novo_intervalo := CASE COALESCE(_prev.interval_days, 0)
      WHEN 0 THEN 1
      WHEN 1 THEN 3
      WHEN 3 THEN 7
      WHEN 7 THEN 15
      ELSE 30
    END;
    _ease := LEAST(2.8, _ease + 0.05);
  END IF;

  _prox := now() + make_interval(days => _novo_intervalo);

  IF _prev.id IS NULL THEN
    INSERT INTO public.spaced_repetition_schedule
      (child_id, skill_code, next_review_at, interval_days, ease_factor, last_performance_score)
    VALUES (_child_id, _codigo_bncc, _prox, _novo_intervalo, _ease, _desempenho);
  ELSE
    UPDATE public.spaced_repetition_schedule
       SET next_review_at = _prox,
           interval_days = _novo_intervalo,
           ease_factor = _ease,
           last_performance_score = _desempenho,
           updated_at = now()
     WHERE id = _prev.id;
  END IF;

  RETURN _prox;
END;
$$;

REVOKE ALL ON FUNCTION public.registrar_conclusao_aula(uuid, text, integer, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.registrar_conclusao_aula(uuid, text, integer, text) TO authenticated;

-- 3) Recomendar revisões — data chegou OU desempenho caiu 15 pts
CREATE OR REPLACE FUNCTION public.recomendar_revisoes(_child_id uuid)
RETURNS TABLE(
  codigo_bncc text,
  motivo text,
  ultimo_desempenho integer,
  variacao integer,
  proxima_revisao timestamptz
)
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _owner uuid;
BEGIN
  SELECT user_id INTO _owner FROM public.children WHERE id = _child_id;
  IF _owner IS NULL OR _owner <> auth.uid() THEN
    RAISE EXCEPTION 'FORBIDDEN';
  END IF;

  RETURN QUERY
  WITH ranked AS (
    SELECT h.codigo_bncc, h.desempenho, h.registrado_em,
           ROW_NUMBER() OVER (PARTITION BY h.codigo_bncc ORDER BY h.registrado_em DESC) AS rn
      FROM public.escola_revisoes_historico h
     WHERE h.child_id = _child_id
  ),
  ult AS (
    SELECT r1.codigo_bncc,
           r1.desempenho AS ultimo,
           r2.desempenho AS anterior
      FROM ranked r1
      LEFT JOIN ranked r2
        ON r2.codigo_bncc = r1.codigo_bncc AND r2.rn = 2
     WHERE r1.rn = 1
  )
  SELECT s.skill_code,
         CASE
           WHEN u.anterior IS NOT NULL AND (u.ultimo - u.anterior) <= -15 THEN 'desempenho_caiu'
           WHEN s.next_review_at <= now() THEN 'data_programada'
           ELSE 'ok'
         END AS motivo,
         u.ultimo,
         COALESCE(u.ultimo - u.anterior, 0) AS variacao,
         s.next_review_at
    FROM public.spaced_repetition_schedule s
    LEFT JOIN ult u ON u.codigo_bncc = s.skill_code
   WHERE s.child_id = _child_id
     AND (
       s.next_review_at <= now()
       OR (u.anterior IS NOT NULL AND (u.ultimo - u.anterior) <= -15)
     )
   ORDER BY s.next_review_at ASC;
END;
$$;

REVOKE ALL ON FUNCTION public.recomendar_revisoes(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.recomendar_revisoes(uuid) TO authenticated;
