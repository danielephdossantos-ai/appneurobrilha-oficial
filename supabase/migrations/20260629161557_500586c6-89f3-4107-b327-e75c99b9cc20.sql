CREATE TABLE public.knowledge_objects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo_bncc TEXT NOT NULL UNIQUE,
  unidade_tematica TEXT,
  objeto_conhecimento TEXT NOT NULL,
  descricao TEXT,
  palavras_chave TEXT[] DEFAULT '{}',
  ordem INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_knowledge_objects_codigo_bncc ON public.knowledge_objects(codigo_bncc);
CREATE INDEX idx_knowledge_objects_unidade ON public.knowledge_objects(unidade_tematica);

GRANT SELECT ON public.knowledge_objects TO authenticated, anon;
GRANT ALL ON public.knowledge_objects TO service_role;

ALTER TABLE public.knowledge_objects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Knowledge objects are readable by everyone"
  ON public.knowledge_objects FOR SELECT
  USING (true);

CREATE POLICY "Only service role can modify knowledge objects"
  ON public.knowledge_objects FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

CREATE TRIGGER update_knowledge_objects_updated_at
  BEFORE UPDATE ON public.knowledge_objects
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();