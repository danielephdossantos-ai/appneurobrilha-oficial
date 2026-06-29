
CREATE TABLE public.lesson_experiments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc text NOT NULL,
  titulo text NOT NULL,
  objetivo text NOT NULL,
  materiais jsonb NOT NULL DEFAULT '[]'::jsonb,
  passos jsonb NOT NULL DEFAULT '[]'::jsonb,
  resultado_esperado text NOT NULL,
  cuidados jsonb NOT NULL DEFAULT '[]'::jsonb,
  nivel text,
  ordem int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_lesson_experiments_bncc ON public.lesson_experiments(codigo_bncc);

GRANT SELECT ON public.lesson_experiments TO anon, authenticated;
GRANT ALL ON public.lesson_experiments TO service_role;

ALTER TABLE public.lesson_experiments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Experiments are readable by everyone"
  ON public.lesson_experiments FOR SELECT
  USING (true);

CREATE POLICY "Admins manage experiments"
  ON public.lesson_experiments FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER trg_lesson_experiments_updated_at
  BEFORE UPDATE ON public.lesson_experiments
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
