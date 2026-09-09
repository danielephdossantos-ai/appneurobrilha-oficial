
CREATE EXTENSION IF NOT EXISTS pg_trgm;

DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin','moderator','user');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  CREATE POLICY "user_roles self read" ON public.user_roles
    FOR SELECT TO authenticated USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

-- CATEGORIAS
CREATE TABLE public.rb_categorias (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL UNIQUE,
  descricao text,
  ordem int NOT NULL DEFAULT 0,
  icone text,
  cor text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.rb_categorias TO authenticated;
GRANT ALL ON public.rb_categorias TO service_role;
ALTER TABLE public.rb_categorias ENABLE ROW LEVEL SECURITY;
CREATE POLICY "rb_categorias read" ON public.rb_categorias FOR SELECT TO authenticated USING (true);
CREATE POLICY "rb_categorias admin write" ON public.rb_categorias FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- HABILIDADES
CREATE TABLE public.rb_habilidades (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  categoria_id uuid NOT NULL REFERENCES public.rb_categorias(id) ON DELETE CASCADE,
  nome text NOT NULL,
  descricao text,
  palavras_chave text[] NOT NULL DEFAULT '{}',
  ordem int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX rb_habilidades_categoria_idx ON public.rb_habilidades(categoria_id);
CREATE INDEX rb_habilidades_nome_trgm ON public.rb_habilidades USING gin (nome gin_trgm_ops);
CREATE INDEX rb_habilidades_palavras_idx ON public.rb_habilidades USING gin (palavras_chave);
GRANT SELECT ON public.rb_habilidades TO authenticated;
GRANT ALL ON public.rb_habilidades TO service_role;
ALTER TABLE public.rb_habilidades ENABLE ROW LEVEL SECURITY;
CREATE POLICY "rb_habilidades read" ON public.rb_habilidades FOR SELECT TO authenticated USING (true);
CREATE POLICY "rb_habilidades admin write" ON public.rb_habilidades FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- AULAS
CREATE TABLE public.rb_aulas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  habilidade_id uuid NOT NULL REFERENCES public.rb_habilidades(id) ON DELETE CASCADE,
  titulo text NOT NULL,
  objetivo text,
  faixa_etaria text,
  nivel text NOT NULL DEFAULT 'basico' CHECK (nivel IN ('basico','intermediario','avancado')),
  ordem int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX rb_aulas_habilidade_idx ON public.rb_aulas(habilidade_id);
CREATE INDEX rb_aulas_nivel_idx ON public.rb_aulas(nivel);
GRANT SELECT ON public.rb_aulas TO authenticated;
GRANT ALL ON public.rb_aulas TO service_role;
ALTER TABLE public.rb_aulas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "rb_aulas read" ON public.rb_aulas FOR SELECT TO authenticated USING (true);
CREATE POLICY "rb_aulas admin write" ON public.rb_aulas FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- PÁGINAS DA AULA
CREATE TABLE public.rb_paginas_aula (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  aula_id uuid NOT NULL REFERENCES public.rb_aulas(id) ON DELETE CASCADE,
  ordem int NOT NULL DEFAULT 0,
  tipo text NOT NULL DEFAULT 'explicacao'
    CHECK (tipo IN ('explicacao','exemplo','exercicio','dica','video','imagem','passo_a_passo')),
  titulo text,
  conteudo jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (aula_id, ordem)
);
CREATE INDEX rb_paginas_aula_aula_idx ON public.rb_paginas_aula(aula_id, ordem);
GRANT SELECT ON public.rb_paginas_aula TO authenticated;
GRANT ALL ON public.rb_paginas_aula TO service_role;
ALTER TABLE public.rb_paginas_aula ENABLE ROW LEVEL SECURITY;
CREATE POLICY "rb_paginas_aula read" ON public.rb_paginas_aula FOR SELECT TO authenticated USING (true);
CREATE POLICY "rb_paginas_aula admin write" ON public.rb_paginas_aula FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- DICAS
CREATE TABLE public.rb_dicas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  habilidade_id uuid NOT NULL REFERENCES public.rb_habilidades(id) ON DELETE CASCADE,
  texto text NOT NULL,
  publico text NOT NULL DEFAULT 'pais' CHECK (publico IN ('pais','professores','responsaveis','todos')),
  ordem int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX rb_dicas_habilidade_idx ON public.rb_dicas(habilidade_id);
GRANT SELECT ON public.rb_dicas TO authenticated;
GRANT ALL ON public.rb_dicas TO service_role;
ALTER TABLE public.rb_dicas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "rb_dicas read" ON public.rb_dicas FOR SELECT TO authenticated USING (true);
CREATE POLICY "rb_dicas admin write" ON public.rb_dicas FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- SINAIS DE ALERTA
CREATE TABLE public.rb_sinais_alerta (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  habilidade_id uuid NOT NULL REFERENCES public.rb_habilidades(id) ON DELETE CASCADE,
  descricao text NOT NULL,
  severidade text NOT NULL DEFAULT 'media' CHECK (severidade IN ('baixa','media','alta')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX rb_sinais_alerta_habilidade_idx ON public.rb_sinais_alerta(habilidade_id);
GRANT SELECT ON public.rb_sinais_alerta TO authenticated;
GRANT ALL ON public.rb_sinais_alerta TO service_role;
ALTER TABLE public.rb_sinais_alerta ENABLE ROW LEVEL SECURITY;
CREATE POLICY "rb_sinais_alerta read" ON public.rb_sinais_alerta FOR SELECT TO authenticated USING (true);
CREATE POLICY "rb_sinais_alerta admin write" ON public.rb_sinais_alerta FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- ATIVIDADES RELACIONADAS
CREATE TABLE public.rb_atividades_relacionadas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  habilidade_id uuid NOT NULL REFERENCES public.rb_habilidades(id) ON DELETE CASCADE,
  atividade_id uuid NOT NULL,
  modulo text,
  rota text,
  titulo text,
  ordem int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (habilidade_id, atividade_id)
);
CREATE INDEX rb_atividades_relacionadas_habilidade_idx ON public.rb_atividades_relacionadas(habilidade_id);
CREATE INDEX rb_atividades_relacionadas_atividade_idx ON public.rb_atividades_relacionadas(atividade_id);
GRANT SELECT ON public.rb_atividades_relacionadas TO authenticated;
GRANT ALL ON public.rb_atividades_relacionadas TO service_role;
ALTER TABLE public.rb_atividades_relacionadas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "rb_atividades_relacionadas read" ON public.rb_atividades_relacionadas FOR SELECT TO authenticated USING (true);
CREATE POLICY "rb_atividades_relacionadas admin write" ON public.rb_atividades_relacionadas FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- TRIGGERS updated_at
CREATE OR REPLACE FUNCTION public.rb_set_updated_at()
RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END $$;

CREATE TRIGGER rb_categorias_updated BEFORE UPDATE ON public.rb_categorias FOR EACH ROW EXECUTE FUNCTION public.rb_set_updated_at();
CREATE TRIGGER rb_habilidades_updated BEFORE UPDATE ON public.rb_habilidades FOR EACH ROW EXECUTE FUNCTION public.rb_set_updated_at();
CREATE TRIGGER rb_aulas_updated BEFORE UPDATE ON public.rb_aulas FOR EACH ROW EXECUTE FUNCTION public.rb_set_updated_at();
CREATE TRIGGER rb_paginas_aula_updated BEFORE UPDATE ON public.rb_paginas_aula FOR EACH ROW EXECUTE FUNCTION public.rb_set_updated_at();
CREATE TRIGGER rb_dicas_updated BEFORE UPDATE ON public.rb_dicas FOR EACH ROW EXECUTE FUNCTION public.rb_set_updated_at();
CREATE TRIGGER rb_sinais_alerta_updated BEFORE UPDATE ON public.rb_sinais_alerta FOR EACH ROW EXECUTE FUNCTION public.rb_set_updated_at();
CREATE TRIGGER rb_atividades_relacionadas_updated BEFORE UPDATE ON public.rb_atividades_relacionadas FOR EACH ROW EXECUTE FUNCTION public.rb_set_updated_at();
