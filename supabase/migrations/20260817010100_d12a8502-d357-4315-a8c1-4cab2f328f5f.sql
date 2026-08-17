CREATE TYPE public.aula_status AS ENUM ('draft', 'validating', 'approved', 'rejected', 'archived');

CREATE TABLE public.aulas_geradas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titulo TEXT NOT NULL,
    serie TEXT NOT NULL,
    faixa_etaria TEXT,
    disciplina TEXT NOT NULL,
    unidade TEXT,
    habilidade_bncc TEXT,
    codigo_bncc TEXT NOT NULL,
    objetivo_pedagogico TEXT,
    nivel INTEGER DEFAULT 1,
    tipo_aula TEXT,
    conteudo JSONB NOT NULL DEFAULT '[]'::jsonb,
    atividades JSONB DEFAULT '[]'::jsonb,
    exemplos JSONB DEFAULT '[]'::jsonb,
    avaliacao JSONB DEFAULT '[]'::jsonb,
    respostas_corretas JSONB DEFAULT '[]'::jsonb,
    aula_origem_id UUID REFERENCES public.aulas_geradas(id),
    relacao_anterior TEXT,
    gerada_por_ia BOOLEAN DEFAULT true,
    modelo_ia TEXT,
    versao TEXT DEFAULT '1.0',
    status public.aula_status DEFAULT 'draft',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Grants
GRANT SELECT ON public.aulas_geradas TO authenticated;
GRANT ALL ON public.aulas_geradas TO service_role;

-- RLS
ALTER TABLE public.aulas_geradas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Aulas aprovadas são públicas para usuários logados"
ON public.aulas_geradas FOR SELECT
TO authenticated
USING (status = 'approved');

CREATE POLICY "Admins podem tudo"
ON public.aulas_geradas FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Trigger para updated_at (assumindo que public.update_updated_at_column já existe no projeto)
CREATE TRIGGER update_aulas_geradas_updated_at
BEFORE UPDATE ON public.aulas_geradas
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Índices para busca rápida de duplicidade
CREATE INDEX idx_aulas_geradas_duplicidade ON public.aulas_geradas (serie, disciplina, codigo_bncc, nivel, status);
