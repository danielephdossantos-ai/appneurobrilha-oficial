-- Tabela de categorias de hiperfoco
CREATE TABLE public.hiperfocos (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    label TEXT NOT NULL,
    emoji TEXT,
    som TEXT,
    forma_pontilhado TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela de elementos/personagens ilustrados para cada hiperfoco
CREATE TABLE public.hiperfoco_elementos (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    hiperfoco_id UUID REFERENCES public.hiperfocos(id) ON DELETE CASCADE,
    nome TEXT NOT NULL,
    image_url TEXT NOT NULL, -- Caminho para o asset premium
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Grants
GRANT SELECT ON public.hiperfocos TO anon, authenticated;
GRANT ALL ON public.hiperfocos TO service_role;

GRANT SELECT ON public.hiperfoco_elementos TO anon, authenticated;
GRANT ALL ON public.hiperfoco_elementos TO service_role;

-- RLS
ALTER TABLE public.hiperfocos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hiperfoco_elementos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Hiperfocos visíveis por todos" ON public.hiperfocos FOR SELECT USING (true);
CREATE POLICY "Elementos de hiperfoco visíveis por todos" ON public.hiperfoco_elementos FOR SELECT USING (true);
