CREATE TABLE public.thematic_units (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  disciplina TEXT NOT NULL,
  nome TEXT NOT NULL,
  descricao TEXT,
  ordem INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (disciplina, nome)
);

CREATE INDEX idx_thematic_units_disciplina ON public.thematic_units(disciplina);

GRANT SELECT ON public.thematic_units TO authenticated, anon;
GRANT ALL ON public.thematic_units TO service_role;

ALTER TABLE public.thematic_units ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Thematic units are readable by everyone"
  ON public.thematic_units FOR SELECT USING (true);

CREATE POLICY "Only service role modifies thematic units"
  ON public.thematic_units FOR ALL TO service_role
  USING (true) WITH CHECK (true);

CREATE TRIGGER update_thematic_units_updated_at
  BEFORE UPDATE ON public.thematic_units
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

ALTER TABLE public.lesson_content
  ADD COLUMN IF NOT EXISTS unidade_tematica_id UUID REFERENCES public.thematic_units(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_lesson_content_unidade ON public.lesson_content(unidade_tematica_id);