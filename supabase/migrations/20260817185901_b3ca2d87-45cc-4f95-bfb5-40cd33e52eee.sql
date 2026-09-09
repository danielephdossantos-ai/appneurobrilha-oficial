ALTER TABLE public.aulas_geradas ADD COLUMN IF NOT EXISTS hiperfoco text;
ALTER TABLE public.aulas_geradas ADD COLUMN IF NOT EXISTS compatibilidade_hiperfoco boolean DEFAULT false;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.aulas_geradas TO authenticated;
GRANT ALL ON public.aulas_geradas TO service_role;

-- Tabela para registrar o uso de aulas por criança (evitar repetição)
CREATE TABLE IF NOT EXISTS public.historico_uso_aulas (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id uuid REFERENCES public.children_profiles(id) ON DELETE CASCADE NOT NULL,
    aula_id uuid REFERENCES public.aulas_geradas(id) ON DELETE CASCADE NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    UNIQUE(child_id, aula_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.historico_uso_aulas TO authenticated;
GRANT ALL ON public.historico_uso_aulas TO service_role;

ALTER TABLE public.historico_uso_aulas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários podem ver o histórico dos seus filhos" ON public.historico_uso_aulas
    FOR SELECT TO authenticated USING (auth.uid() IN (SELECT parent_id FROM public.children_profiles WHERE id = child_id));

CREATE POLICY "Usuários podem inserir o histórico dos seus filhos" ON public.historico_uso_aulas
    FOR INSERT TO authenticated WITH CHECK (auth.uid() IN (SELECT parent_id FROM public.children_profiles WHERE id = child_id));
