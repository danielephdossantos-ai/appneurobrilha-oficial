
CREATE TABLE public.exercises (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo text NOT NULL,
  tipo text NOT NULL,
  enunciado text NOT NULL,
  imagem text,
  alternativas jsonb NOT NULL DEFAULT '[]'::jsonb,
  resposta text NOT NULL DEFAULT '',
  explicacao text NOT NULL DEFAULT '',
  dificuldade text NOT NULL DEFAULT 'medio',
  tempo_segundos integer NOT NULL DEFAULT 60,
  pontuacao integer NOT NULL DEFAULT 10,
  competencia text NOT NULL DEFAULT '',
  codigo_bncc text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX exercises_codigo_bncc_idx ON public.exercises(codigo_bncc);
CREATE INDEX exercises_tipo_idx ON public.exercises(tipo);
CREATE INDEX exercises_dificuldade_idx ON public.exercises(dificuldade);

GRANT SELECT ON public.exercises TO authenticated;
GRANT ALL ON public.exercises TO service_role;

ALTER TABLE public.exercises ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can read exercises"
  ON public.exercises FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "Service role manages exercises"
  ON public.exercises FOR ALL
  TO service_role USING (true) WITH CHECK (true);

CREATE TRIGGER update_exercises_updated_at
  BEFORE UPDATE ON public.exercises
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
