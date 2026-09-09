CREATE TABLE public.bncc_conteudo (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo TEXT NOT NULL UNIQUE,
  titulo TEXT,
  explicacao TEXT,
  objetivos JSONB DEFAULT '[]'::jsonb,
  aula_ilustrada JSONB DEFAULT '[]'::jsonb,
  exemplos JSONB DEFAULT '[]'::jsonb,
  exercicios_faceis JSONB DEFAULT '[]'::jsonb,
  exercicios_medios JSONB DEFAULT '[]'::jsonb,
  exercicios_dificeis JSONB DEFAULT '[]'::jsonb,
  atividade_imprimir TEXT,
  gabarito JSONB DEFAULT '[]'::jsonb,
  video_url TEXT,
  criterios_avaliacao JSONB DEFAULT '[]'::jsonb,
  habilidades_relacionadas JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT ON public.bncc_conteudo TO anon, authenticated;
GRANT ALL ON public.bncc_conteudo TO service_role;

ALTER TABLE public.bncc_conteudo ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read bncc_conteudo"
  ON public.bncc_conteudo FOR SELECT
  USING (true);

CREATE POLICY "Admins manage bncc_conteudo"
  ON public.bncc_conteudo FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE INDEX idx_bncc_conteudo_codigo ON public.bncc_conteudo(codigo);

CREATE TRIGGER update_bncc_conteudo_updated_at
  BEFORE UPDATE ON public.bncc_conteudo
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();