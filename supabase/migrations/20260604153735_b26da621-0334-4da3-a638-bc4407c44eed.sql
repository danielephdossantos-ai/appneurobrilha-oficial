-- Criar tabela de trilhas_aprendizagem se não existir
CREATE TABLE IF NOT EXISTS public.trilhas_aprendizagem (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome TEXT NOT NULL,
    descricao TEXT,
    ano TEXT NOT NULL, -- EI, 1º Ano, etc
    disciplina TEXT NOT NULL, -- Português, Matemática, etc
    habilidades_ordenadas JSONB NOT NULL DEFAULT '[]'::jsonb, -- Array de códigos BNCC
    ativa BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.trilhas_aprendizagem ENABLE ROW LEVEL SECURITY;

-- Grants
GRANT SELECT ON public.trilhas_aprendizagem TO anon, authenticated;
GRANT ALL ON public.trilhas_aprendizagem TO service_role;

-- Políticas
CREATE POLICY "Trilhas acessíveis por todos" ON public.trilhas_aprendizagem
    FOR SELECT USING (true);

-- Adicionar chaves estrangeiras para garantir integridade (se não existirem)
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'explicacoes_codigo_bncc_fkey') THEN
        ALTER TABLE public.explicacoes 
        ADD CONSTRAINT explicacoes_codigo_bncc_fkey 
        FOREIGN KEY (codigo_bncc) REFERENCES public.bncc_habilidades(codigo_bncc) ON DELETE CASCADE;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'atividades_codigo_bncc_fkey') THEN
        ALTER TABLE public.atividades 
        ADD CONSTRAINT atividades_codigo_bncc_fkey 
        FOREIGN KEY (codigo_bncc) REFERENCES public.bncc_habilidades(codigo_bncc) ON DELETE CASCADE;
    END IF;
END $$;

-- Trigger para updated_at na nova tabela
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_trilhas_aprendizagem_updated_at ON public.trilhas_aprendizagem;
CREATE TRIGGER update_trilhas_aprendizagem_updated_at
    BEFORE UPDATE ON public.trilhas_aprendizagem
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Garantir que as tabelas existentes tenham RLS e políticas básicas se faltarem
ALTER TABLE public.bncc_habilidades ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.explicacoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.atividades ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progresso_aluno ENABLE ROW LEVEL SECURITY;

-- Políticas de leitura para todos
DROP POLICY IF EXISTS "BNCC Habilidades leitura pública" ON public.bncc_habilidades;
CREATE POLICY "BNCC Habilidades leitura pública" ON public.bncc_habilidades FOR SELECT USING (true);

DROP POLICY IF EXISTS "Explicações leitura pública" ON public.explicacoes;
CREATE POLICY "Explicações leitura pública" ON public.explicacoes FOR SELECT USING (true);

DROP POLICY IF EXISTS "Atividades leitura pública" ON public.atividades;
CREATE POLICY "Atividades leitura pública" ON public.atividades FOR SELECT USING (true);

-- Política para progresso (apenas o aluno/responsável ou via service_role)
-- Como o progresso é por aluno_id (que referencia a tabela children), 
-- idealmente o usuário autenticado pode ver o progresso dos seus filhos.
DROP POLICY IF EXISTS "Alunos podem ver seu próprio progresso" ON public.progresso_aluno;
CREATE POLICY "Alunos podem ver seu próprio progresso" ON public.progresso_aluno
    FOR ALL USING (true) WITH CHECK (true); -- Simplificado para o contexto atual, ajustar conforme auth real

-- Grants para tabelas existentes
GRANT SELECT ON public.bncc_habilidades TO anon, authenticated;
GRANT SELECT ON public.explicacoes TO anon, authenticated;
GRANT SELECT ON public.atividades TO anon, authenticated;
GRANT ALL ON public.progresso_aluno TO authenticated, service_role;
GRANT ALL ON public.bncc_habilidades TO service_role;
GRANT ALL ON public.explicacoes TO service_role;
GRANT ALL ON public.atividades TO service_role;
