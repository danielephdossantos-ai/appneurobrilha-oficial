-- Preservar dados legados
ALTER TABLE public.lessons RENAME TO lessons_legacy;

-- Nova tabela única
CREATE TABLE public.lessons (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc     text NOT NULL UNIQUE,
  ano             text NOT NULL,
  etapa           text NOT NULL,
  disciplina      text NOT NULL,
  titulo          text NOT NULL,
  objetivo        text NOT NULL DEFAULT '',
  missao          text NOT NULL DEFAULT '',
  introducao      text NOT NULL DEFAULT '',
  explicacao      text NOT NULL DEFAULT '',
  contextualizacao text NOT NULL DEFAULT '',
  resumo          text NOT NULL DEFAULT '',
  tempo_estimado  integer NOT NULL DEFAULT 20,
  nivel           text NOT NULL DEFAULT 'fundamental',
  conteudo_json   jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX lessons_codigo_bncc_idx ON public.lessons (codigo_bncc);
CREATE INDEX lessons_ano_disciplina_idx ON public.lessons (ano, disciplina);
CREATE INDEX lessons_conteudo_json_gin ON public.lessons USING gin (conteudo_json);

GRANT SELECT ON public.lessons TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.lessons TO authenticated;
GRANT ALL ON public.lessons TO service_role;

ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "lessons_read_all" ON public.lessons FOR SELECT USING (true);
CREATE POLICY "lessons_admin_insert" ON public.lessons FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "lessons_admin_update" ON public.lessons FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "lessons_admin_delete" ON public.lessons FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER lessons_set_updated_at
  BEFORE UPDATE ON public.lessons
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();