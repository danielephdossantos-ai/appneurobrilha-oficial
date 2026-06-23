
CREATE TABLE public.rb_recursos_externos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  query_normalizada TEXT NOT NULL,
  fonte TEXT NOT NULL,
  titulo TEXT NOT NULL,
  descricao TEXT,
  url TEXT NOT NULL,
  thumbnail TEXT,
  conteudo TEXT,
  idioma TEXT DEFAULT 'pt',
  habilidade_id UUID REFERENCES public.rb_habilidades(id) ON DELETE SET NULL,
  ordem INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL DEFAULT (now() + interval '30 days')
);

CREATE INDEX idx_rb_recursos_query ON public.rb_recursos_externos (query_normalizada, fonte);
CREATE INDEX idx_rb_recursos_expires ON public.rb_recursos_externos (expires_at);
CREATE INDEX idx_rb_recursos_query_trgm ON public.rb_recursos_externos USING gin (query_normalizada gin_trgm_ops);

GRANT SELECT ON public.rb_recursos_externos TO anon, authenticated;
GRANT ALL ON public.rb_recursos_externos TO service_role;

ALTER TABLE public.rb_recursos_externos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Recursos externos são públicos para leitura"
  ON public.rb_recursos_externos FOR SELECT
  USING (true);
