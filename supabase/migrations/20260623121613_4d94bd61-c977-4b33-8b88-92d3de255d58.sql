
-- rb_tags
CREATE TABLE public.rb_tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.rb_tags TO anon, authenticated;
GRANT ALL ON public.rb_tags TO service_role;
ALTER TABLE public.rb_tags ENABLE ROW LEVEL SECURITY;
CREATE POLICY "rb_tags leitura publica" ON public.rb_tags FOR SELECT USING (true);
CREATE POLICY "rb_tags admin gerencia" ON public.rb_tags FOR ALL
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- rb_habilidade_tags (junção)
CREATE TABLE public.rb_habilidade_tags (
  habilidade_id UUID NOT NULL REFERENCES public.rb_habilidades(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES public.rb_tags(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (habilidade_id, tag_id)
);
GRANT SELECT ON public.rb_habilidade_tags TO anon, authenticated;
GRANT ALL ON public.rb_habilidade_tags TO service_role;
ALTER TABLE public.rb_habilidade_tags ENABLE ROW LEVEL SECURITY;
CREATE POLICY "rb_habilidade_tags leitura publica" ON public.rb_habilidade_tags FOR SELECT USING (true);
CREATE POLICY "rb_habilidade_tags admin gerencia" ON public.rb_habilidade_tags FOR ALL
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE INDEX idx_rb_habilidade_tags_tag ON public.rb_habilidade_tags(tag_id);
CREATE INDEX idx_rb_habilidade_tags_habilidade ON public.rb_habilidade_tags(habilidade_id);

-- Seed catálogo de tags iniciais
INSERT INTO public.rb_tags (nome, slug) VALUES
  ('Troca de letras', 'troca-de-letras'),
  ('Leitura', 'leitura'),
  ('Escrita', 'escrita'),
  ('Atenção', 'atencao'),
  ('Memória', 'memoria'),
  ('Tabuada', 'tabuada'),
  ('Coordenação motora', 'coordenacao-motora'),
  ('Alfabetização', 'alfabetizacao')
ON CONFLICT (slug) DO NOTHING;
