
-- 1. Biblioteca central de mídias
CREATE TABLE IF NOT EXISTS public.rb_midias (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tipo TEXT NOT NULL CHECK (tipo IN ('imagem','video','audio')),
  titulo TEXT,
  descricao TEXT,
  url TEXT NOT NULL,
  thumbnail_url TEXT,
  duracao_seg INTEGER,
  largura INTEGER,
  altura INTEGER,
  tamanho_bytes BIGINT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.rb_midias TO anon, authenticated;
GRANT ALL ON public.rb_midias TO service_role;

ALTER TABLE public.rb_midias ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Mídias do Reforço Brilha são públicas para leitura"
  ON public.rb_midias FOR SELECT USING (true);

CREATE INDEX IF NOT EXISTS idx_rb_midias_tipo ON public.rb_midias(tipo);
CREATE INDEX IF NOT EXISTS idx_rb_midias_tags ON public.rb_midias USING gin(tags);
CREATE INDEX IF NOT EXISTS idx_rb_midias_titulo_trgm ON public.rb_midias USING gin(titulo gin_trgm_ops);

CREATE TRIGGER rb_midias_set_updated_at
  BEFORE UPDATE ON public.rb_midias
  FOR EACH ROW EXECUTE FUNCTION public.rb_set_updated_at();

-- 2. Vínculo polimórfico de mídia a entidades
CREATE TABLE IF NOT EXISTS public.rb_midia_vinculos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  midia_id UUID NOT NULL REFERENCES public.rb_midias(id) ON DELETE CASCADE,
  entidade_tipo TEXT NOT NULL CHECK (entidade_tipo IN ('habilidade','aula','pagina','atividade')),
  entidade_id UUID NOT NULL,
  ordem INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (midia_id, entidade_tipo, entidade_id)
);

GRANT SELECT ON public.rb_midia_vinculos TO anon, authenticated;
GRANT ALL ON public.rb_midia_vinculos TO service_role;

ALTER TABLE public.rb_midia_vinculos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Vínculos de mídia são públicos para leitura"
  ON public.rb_midia_vinculos FOR SELECT USING (true);

CREATE INDEX IF NOT EXISTS idx_rb_midiavinc_entidade
  ON public.rb_midia_vinculos(entidade_tipo, entidade_id, ordem);
CREATE INDEX IF NOT EXISTS idx_rb_midiavinc_midia
  ON public.rb_midia_vinculos(midia_id);

-- 3. Capa e vídeo direto na aula (acesso rápido sem JOIN)
ALTER TABLE public.rb_aulas
  ADD COLUMN IF NOT EXISTS imagem_capa_url TEXT,
  ADD COLUMN IF NOT EXISTS video_url TEXT;

-- 4. Índices de busca e listagem para escala
CREATE INDEX IF NOT EXISTS rb_habilidades_descricao_trgm
  ON public.rb_habilidades USING gin(descricao gin_trgm_ops);

CREATE INDEX IF NOT EXISTS rb_habilidades_cat_ordem
  ON public.rb_habilidades(categoria_id, ordem);

CREATE INDEX IF NOT EXISTS rb_aulas_habilidade_ordem
  ON public.rb_aulas(habilidade_id, ordem);

CREATE INDEX IF NOT EXISTS rb_atividades_rel_hab_ordem
  ON public.rb_atividades_relacionadas(habilidade_id, ordem);

CREATE INDEX IF NOT EXISTS rb_dicas_hab_idx
  ON public.rb_dicas(habilidade_id);

CREATE INDEX IF NOT EXISTS rb_sinais_hab_idx
  ON public.rb_sinais_alerta(habilidade_id);
