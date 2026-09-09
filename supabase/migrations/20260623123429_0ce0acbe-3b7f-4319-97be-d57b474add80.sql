
-- 1) Colunas novas na Matriz Pedagógica
ALTER TABLE public.rb_habilidades
  ADD COLUMN IF NOT EXISTS subcategoria TEXT,
  ADD COLUMN IF NOT EXISTS faixa_etaria TEXT,
  ADD COLUMN IF NOT EXISTS ano_escolar TEXT,
  ADD COLUMN IF NOT EXISTS nivel_dificuldade TEXT
    CHECK (nivel_dificuldade IS NULL OR nivel_dificuldade IN ('facil','medio','dificil'));

CREATE INDEX IF NOT EXISTS idx_rb_habilidades_ano ON public.rb_habilidades(ano_escolar);
CREATE INDEX IF NOT EXISTS idx_rb_habilidades_subcategoria ON public.rb_habilidades(subcategoria);

-- 2) Pré-requisitos
CREATE TABLE public.rb_habilidade_prerequisitos (
  habilidade_id UUID NOT NULL REFERENCES public.rb_habilidades(id) ON DELETE CASCADE,
  pre_requisito_id UUID NOT NULL REFERENCES public.rb_habilidades(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (habilidade_id, pre_requisito_id),
  CHECK (habilidade_id <> pre_requisito_id)
);
GRANT SELECT ON public.rb_habilidade_prerequisitos TO anon, authenticated;
GRANT ALL ON public.rb_habilidade_prerequisitos TO service_role;
ALTER TABLE public.rb_habilidade_prerequisitos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "rb_prereq leitura publica" ON public.rb_habilidade_prerequisitos FOR SELECT USING (true);
CREATE POLICY "rb_prereq admin gerencia" ON public.rb_habilidade_prerequisitos FOR ALL
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE INDEX idx_rb_prereq_hab ON public.rb_habilidade_prerequisitos(habilidade_id);
CREATE INDEX idx_rb_prereq_pre ON public.rb_habilidade_prerequisitos(pre_requisito_id);

-- 3) Habilidades relacionadas (livre)
CREATE TABLE public.rb_habilidade_relacionadas (
  habilidade_id UUID NOT NULL REFERENCES public.rb_habilidades(id) ON DELETE CASCADE,
  relacionada_id UUID NOT NULL REFERENCES public.rb_habilidades(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (habilidade_id, relacionada_id),
  CHECK (habilidade_id <> relacionada_id)
);
GRANT SELECT ON public.rb_habilidade_relacionadas TO anon, authenticated;
GRANT ALL ON public.rb_habilidade_relacionadas TO service_role;
ALTER TABLE public.rb_habilidade_relacionadas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "rb_rel leitura publica" ON public.rb_habilidade_relacionadas FOR SELECT USING (true);
CREATE POLICY "rb_rel admin gerencia" ON public.rb_habilidade_relacionadas FOR ALL
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE INDEX idx_rb_rel_hab ON public.rb_habilidade_relacionadas(habilidade_id);

-- 4) Status de domínio por usuário
CREATE TABLE public.rb_dominio_habilidade (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  habilidade_id UUID NOT NULL REFERENCES public.rb_habilidades(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'nao_iniciado'
    CHECK (status IN ('nao_iniciado','em_desenvolvimento','dominado')),
  percentual INTEGER NOT NULL DEFAULT 0 CHECK (percentual BETWEEN 0 AND 100),
  ultima_atualizacao TIMESTAMPTZ NOT NULL DEFAULT now(),
  observacoes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, habilidade_id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.rb_dominio_habilidade TO authenticated;
GRANT ALL ON public.rb_dominio_habilidade TO service_role;
ALTER TABLE public.rb_dominio_habilidade ENABLE ROW LEVEL SECURITY;
CREATE POLICY "rb_dominio owner" ON public.rb_dominio_habilidade FOR ALL
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX idx_rb_dominio_user ON public.rb_dominio_habilidade(user_id);
CREATE INDEX idx_rb_dominio_hab ON public.rb_dominio_habilidade(habilidade_id);

CREATE TRIGGER trg_rb_dominio_updated BEFORE UPDATE ON public.rb_dominio_habilidade
  FOR EACH ROW EXECUTE FUNCTION public.rb_set_updated_at();
