-- Create the bridge table using BNCC code
CREATE TABLE public.habilidade_tecnica (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    codigo_bncc TEXT NOT NULL,
    tecnica_id UUID NOT NULL REFERENCES public.tecnicas_pedagogicas(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(codigo_bncc, tecnica_id)
);

-- Add an index for faster lookups on BNCC code
CREATE INDEX idx_habilidade_tecnica_codigo_bncc ON public.habilidade_tecnica(codigo_bncc);

-- Grant permissions
GRANT SELECT ON public.habilidade_tecnica TO anon, authenticated;
GRANT ALL ON public.habilidade_tecnica TO service_role;

-- Enable RLS
ALTER TABLE public.habilidade_tecnica ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Permitir leitura para todos os usuários" ON public.habilidade_tecnica
    FOR SELECT USING (true);