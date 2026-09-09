
CREATE TABLE IF NOT EXISTS public.rb_aulas_geradas_ia (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    dificuldade_original TEXT NOT NULL,
    conteudo JSONB NOT NULL,
    tags TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT now()
);

GRANT SELECT, INSERT ON public.rb_aulas_geradas_ia TO authenticated;
GRANT ALL ON public.rb_aulas_geradas_ia TO service_role;

ALTER TABLE public.rb_aulas_geradas_ia ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated select" ON public.rb_aulas_geradas_ia FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated insert" ON public.rb_aulas_geradas_ia FOR INSERT TO authenticated WITH CHECK (true);
