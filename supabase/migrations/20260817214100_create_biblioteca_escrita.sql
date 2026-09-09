CREATE TABLE IF NOT EXISTS public.biblioteca_escrita (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titulo TEXT NOT NULL,
    conteudo TEXT NOT NULL,
    comando TEXT NOT NULL,
    tipo TEXT NOT NULL,
    dica_pedagogica TEXT,
    habilidade_foco TEXT NOT NULL,
    audio_instrucao TEXT,
    nivel INTEGER NOT NULL,
    etapa_titulo TEXT NOT NULL,
    idade_min INTEGER,
    idade_max INTEGER,
    serie TEXT,
    tipo_letra TEXT DEFAULT 'bastao', -- bastao, imprensa, cursiva
    objetivo TEXT,
    metodologia TEXT,
    bncc_codes TEXT[], -- Array de códigos BNCC
    hiperfoco_compativel TEXT[], -- Tags de hiperfoco
    versao INTEGER DEFAULT 1,
    status_validacao TEXT DEFAULT 'aprovada', -- pendente, aprovada, rejeitada
    uso_contagem INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    hash_conteudo TEXT UNIQUE -- Para evitar duplicidade
);

-- Grants
GRANT SELECT, INSERT, UPDATE ON public.biblioteca_escrita TO authenticated;
GRANT ALL ON public.biblioteca_escrita TO service_role;

-- RLS
ALTER TABLE public.biblioteca_escrita ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer usuario autenticado pode ler a biblioteca" 
ON public.biblioteca_escrita FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins e IA podem inserir na biblioteca" 
ON public.biblioteca_escrita FOR INSERT TO authenticated WITH CHECK (true);
