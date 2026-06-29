
CREATE TABLE public.lesson_assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid NOT NULL REFERENCES public.lesson_content(id) ON DELETE CASCADE,
  codigo_bncc text NOT NULL,
  tipo text NOT NULL CHECK (tipo IN ('diagnostica','formativa','final')),
  titulo text NOT NULL DEFAULT '',
  descricao text NOT NULL DEFAULT '',
  questoes jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (lesson_id, tipo)
);

CREATE INDEX lesson_assessments_bncc_idx ON public.lesson_assessments (codigo_bncc);
CREATE INDEX lesson_assessments_lesson_idx ON public.lesson_assessments (lesson_id);

GRANT SELECT ON public.lesson_assessments TO authenticated, anon;
GRANT ALL ON public.lesson_assessments TO service_role;

ALTER TABLE public.lesson_assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read lesson assessments"
  ON public.lesson_assessments FOR SELECT
  USING (true);

CREATE POLICY "Admins manage lesson assessments"
  ON public.lesson_assessments FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER lesson_assessments_updated_at
  BEFORE UPDATE ON public.lesson_assessments
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
