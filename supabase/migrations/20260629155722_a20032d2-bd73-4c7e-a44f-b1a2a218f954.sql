
DO $$ BEGIN
  CREATE TYPE public.assessment_kind AS ENUM (
    'pre_teste','diagnostica','formativa','final','simulado','recuperacao'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE public.assessment_repository (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc text NOT NULL,
  tipo public.assessment_kind NOT NULL,
  titulo text NOT NULL DEFAULT '',
  descricao text NOT NULL DEFAULT '',
  instrucoes text NOT NULL DEFAULT '',
  tempo_minutos int NOT NULL DEFAULT 0,
  pontuacao_total int NOT NULL DEFAULT 0,
  nivel text NOT NULL DEFAULT 'medio',
  questoes jsonb NOT NULL DEFAULT '[]'::jsonb,
  criterios jsonb NOT NULL DEFAULT '{}'::jsonb,
  ordem int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_assessment_repository_bncc ON public.assessment_repository(codigo_bncc, tipo);
CREATE INDEX idx_assessment_repository_tipo ON public.assessment_repository(tipo);

GRANT SELECT ON public.assessment_repository TO anon, authenticated;
GRANT ALL ON public.assessment_repository TO service_role;

ALTER TABLE public.assessment_repository ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read assessment_repository"
  ON public.assessment_repository FOR SELECT USING (true);

CREATE POLICY "Admins manage assessment_repository"
  ON public.assessment_repository FOR ALL
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER trg_assessment_repository_updated
  BEFORE UPDATE ON public.assessment_repository
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
