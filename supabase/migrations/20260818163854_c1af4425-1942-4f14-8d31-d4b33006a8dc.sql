-- Tabela para registrar o aceite dos termos de ciência
CREATE TABLE public.parental_science_accepts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
    version TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'accepted', -- 'accepted', 'revoked'
    metadata JSONB DEFAULT '{}'::jsonb, -- Armazena user_agent, etc.
    accepted_at TIMESTAMPTZ DEFAULT now(),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Permissões
GRANT SELECT, INSERT ON public.parental_science_accepts TO authenticated;
GRANT ALL ON public.parental_science_accepts TO service_role;

-- RLS
ALTER TABLE public.parental_science_accepts ENABLE ROW LEVEL SECURITY;

-- Políticas
CREATE POLICY "Users can insert their own accepts" 
ON public.parental_science_accepts FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own accepts" 
ON public.parental_science_accepts FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

-- Índice para performance
CREATE INDEX idx_parental_science_user_child ON public.parental_science_accepts(user_id, child_id, version);
