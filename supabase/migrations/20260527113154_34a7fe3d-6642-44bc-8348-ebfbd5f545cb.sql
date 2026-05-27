-- Activities catalog
CREATE TABLE public.activities (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('neuro-treino', 'escola-brilha')),
    subcategory TEXT,
    bncc_code TEXT,
    min_age INTEGER,
    max_age INTEGER,
    content JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Child Journey state
CREATE TABLE public.child_journey (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE UNIQUE,
    current_day INTEGER NOT NULL DEFAULT 1,
    last_completed_day INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Logs of completed activities
CREATE TABLE public.activity_logs (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
    activity_id UUID REFERENCES public.activities(id) ON DELETE SET NULL,
    day_number INTEGER NOT NULL,
    score FLOAT,
    duration_ms INTEGER,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Permissions
GRANT SELECT ON public.activities TO authenticated;
GRANT ALL ON public.activities TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.child_journey TO authenticated;
GRANT ALL ON public.child_journey TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.activity_logs TO authenticated;
GRANT ALL ON public.activity_logs TO service_role;

-- RLS
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.child_journey ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Activities are viewable by all authenticated users" ON public.activities
    FOR SELECT TO authenticated USING (true);

CREATE POLICY "Users can manage their children's journey" ON public.child_journey
    FOR ALL TO authenticated USING (
        EXISTS (SELECT 1 FROM public.children WHERE children.id = child_id AND children.user_id = auth.uid())
    );

CREATE POLICY "Users can manage their children's activity logs" ON public.activity_logs
    FOR ALL TO authenticated USING (
        EXISTS (SELECT 1 FROM public.children WHERE children.id = child_id AND children.user_id = auth.uid())
    );

-- Seed some activities
INSERT INTO public.activities (name, category, subcategory) VALUES
('Sons Iniciais', 'neuro-treino', 'Fala e Som'),
('Motorzinho dos Sons', 'neuro-treino', 'Fala e Som'),
('Rimas', 'neuro-treino', 'Fala e Som'),
('Pedacinhos da Palavra', 'neuro-treino', 'Fala e Som'),
('Onde Está', 'neuro-treino', 'Funções Executivas'),
('Sequência e Padrão', 'neuro-treino', 'Funções Executivas'),
('Cadê o Par', 'neuro-treino', 'Funções Executivas'),
('Foco Total', 'neuro-treino', 'Funções Executivas'),
('Labirinto do Som', 'neuro-treino', 'Funções Executivas'),
('Foco Sustentado', 'neuro-treino', 'Atenção Avançada'),
('Rastreamento Sacádico', 'neuro-treino', 'Atenção Avançada'),
('Respira Flor', 'neuro-treino', 'Regulação Emocional'),
('Termômetro dos Sentimentos', 'neuro-treino', 'Regulação Emocional'),
('Cantinho da Calma', 'neuro-treino', 'Regulação Emocional'),
('Como Eu Estou', 'neuro-treino', 'Regulação Emocional'),
('Português BNCC', 'escola-brilha', 'Linguagens'),
('Matemática BNCC', 'escola-brilha', 'Raciocínio'),
('Ciências BNCC', 'escola-brilha', 'Natureza'),
('História BNCC', 'escola-brilha', 'Sociedade'),
('Geografia BNCC', 'escola-brilha', 'Espaço');
