
CREATE TYPE public.lesson_explanation_nivel AS ENUM ('infantil','intermediaria','detalhada');

CREATE TABLE public.lesson_explanations (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lesson_id uuid NOT NULL REFERENCES public.lesson_content(id) ON DELETE CASCADE,
  codigo_bncc text NOT NULL,
  nivel public.lesson_explanation_nivel NOT NULL,
  titulo text NOT NULL DEFAULT '',
  conteudo text NOT NULL,
  exemplos jsonb NOT NULL DEFAULT '[]'::jsonb,
  ordem integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (lesson_id, nivel)
);

CREATE INDEX lesson_explanations_lesson_id_idx ON public.lesson_explanations(lesson_id);
CREATE INDEX lesson_explanations_codigo_bncc_idx ON public.lesson_explanations(codigo_bncc);

GRANT SELECT ON public.lesson_explanations TO authenticated;
GRANT ALL ON public.lesson_explanations TO service_role;

ALTER TABLE public.lesson_explanations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can read explanations"
  ON public.lesson_explanations FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "Service role manages explanations"
  ON public.lesson_explanations FOR ALL
  TO service_role USING (true) WITH CHECK (true);

CREATE TRIGGER update_lesson_explanations_updated_at
  BEFORE UPDATE ON public.lesson_explanations
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
