CREATE TABLE public.learning_objectives (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo_bncc TEXT NOT NULL,
  objetivo TEXT NOT NULL,
  descricao TEXT,
  tipo TEXT DEFAULT 'conceitual',
  ordem INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (codigo_bncc, objetivo)
);

CREATE INDEX idx_learning_objectives_codigo_bncc ON public.learning_objectives(codigo_bncc);

GRANT SELECT ON public.learning_objectives TO authenticated, anon;
GRANT ALL ON public.learning_objectives TO service_role;

ALTER TABLE public.learning_objectives ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Learning objectives are readable by everyone"
  ON public.learning_objectives FOR SELECT USING (true);

CREATE POLICY "Only service role modifies learning objectives"
  ON public.learning_objectives FOR ALL TO service_role
  USING (true) WITH CHECK (true);

CREATE TRIGGER update_learning_objectives_updated_at
  BEFORE UPDATE ON public.learning_objectives
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();