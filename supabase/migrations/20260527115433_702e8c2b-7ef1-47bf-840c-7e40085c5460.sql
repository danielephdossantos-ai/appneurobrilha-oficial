-- Função para atualizar o timestamp de updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Criação do banco pedagógico base
CREATE TABLE public.pedagogical_activities_base (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titulo TEXT NOT NULL,
    serie TEXT,
    faixa_etaria TEXT,
    materia TEXT NOT NULL,
    habilidade_bncc TEXT,
    micro_habilidade TEXT,
    nivel_dificuldade TEXT CHECK (nivel_dificuldade IN ('simples', 'intermediario', 'complexo')),
    neuro_perfil JSONB DEFAULT '[]'::jsonb,
    tipo_sensorial JSONB DEFAULT '[]'::jsonb,
    tempo_medio INTEGER, -- em minutos
    objetivo_pedagogico TEXT,
    estrategia_pedagogica TEXT,
    pre_requisitos TEXT[] DEFAULT '{}'::text[],
    nivel_cognitivo TEXT,
    reforco_positivo TEXT,
    reforco_erro TEXT,
    variacoes JSONB DEFAULT '[]'::jsonb,
    tipo_resposta TEXT,
    adaptacoes JSONB DEFAULT '{}'::jsonb,
    tags TEXT[] DEFAULT '{}'::text[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Permissões
GRANT SELECT, INSERT, UPDATE, DELETE ON public.pedagogical_activities_base TO authenticated;
GRANT ALL ON public.pedagogical_activities_base TO service_role;

-- Ativar RLS
ALTER TABLE public.pedagogical_activities_base ENABLE ROW LEVEL SECURITY;

-- Políticas de acesso
CREATE POLICY "Permitir leitura para usuários autenticados" 
ON public.pedagogical_activities_base 
FOR SELECT 
TO authenticated 
USING (true);

-- Trigger para atualizar updated_at
CREATE TRIGGER update_pedagogical_activities_base_updated_at
BEFORE UPDATE ON public.pedagogical_activities_base
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Inserir alguns dados de exemplo
INSERT INTO public.pedagogical_activities_base (
    titulo, serie, faixa_etaria, materia, habilidade_bncc, micro_habilidade, 
    nivel_dificuldade, neuro_perfil, tipo_sensorial, tempo_medio, 
    objetivo_pedagogico, estrategia_pedagogica, nivel_cognitivo, 
    reforco_positivo, reforco_erro, tipo_resposta, tags
) VALUES 
(
    'Tabuada Divertida - Nível 1', '2º Ano', '7-8 anos', 'Matemática', 'EF02MA09', 'Multiplicação Simples',
    'simples', '["TDAH", "TEA"]', '["visual", "cinestesico"]', 10,
    'Compreender o conceito de soma de parcelas iguais', 'Uso de representações visuais e manipulação de objetos virtuais',
    'Compreensão', 'Muito bem! Você está dominando os números!', 'Não se preocupe, tente contar de 2 em 2 agora.',
    'multipla_escolha', '{"matematica", "tabuada", "fundamental-1"}'
),
(
    'Desafio dos Verbos', '3º Ano', '8-9 anos', 'Português', 'EF03LP08', 'Identificação de Tempos Verbais',
    'intermediario', '["Dislexia"]', '["auditivo", "visual"]', 15,
    'Identificar verbos no presente, passado e futuro', 'Contextualização em pequenas frases do cotidiano',
    'Aplicação', 'Incrível! Suas frases ficaram ótimas!', 'Dica: Pense se a ação já aconteceu ou vai acontecer.',
    'arrastar_e_soltar', '{"portugues", "gramatica", "verbos"}'
);
