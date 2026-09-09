ALTER TABLE public.aulas_geradas 
ADD COLUMN IF NOT EXISTS total_usos INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS total_criancas INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS total_conclusoes INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS desempenho_medio NUMERIC DEFAULT 0,
ADD COLUMN IF NOT EXISTS primeira_utilizacao TIMESTAMP WITH TIME ZONE DEFAULT now(),
ADD COLUMN IF NOT EXISTS ultima_utilizacao TIMESTAMP WITH TIME ZONE DEFAULT now();

COMMENT ON COLUMN public.aulas_geradas.total_usos IS 'Quantidade total de vezes que a aula foi iniciada.';
COMMENT ON COLUMN public.aulas_geradas.total_criancas IS 'Número de crianças distintas que utilizaram esta aula.';
COMMENT ON COLUMN public.aulas_geradas.total_conclusoes IS 'Quantidade de vezes que a aula foi finalizada com sucesso.';
