-- Criação do enum para tipo de letra
DO $$ BEGIN
    CREATE TYPE public.tipo_letra_escrita AS ENUM ('imprensa', 'cursiva', 'ambas');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Tabela de status de escrita por criança
CREATE TABLE IF NOT EXISTS public.child_escrita_status (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id UUID REFERENCES public.children(id) ON DELETE CASCADE NOT NULL,
    nivel_atual SMALLINT DEFAULT 1 NOT NULL,
    etapa_atual SMALLINT DEFAULT 1 NOT NULL,
    pref_letra tipo_letra_escrita DEFAULT 'imprensa' NOT NULL,
    pontos_dominio INTEGER DEFAULT 0 NOT NULL,
    progresso_imprensa SMALLINT DEFAULT 0 NOT NULL,
    progresso_cursiva SMALLINT DEFAULT 0 NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(child_id)
);

-- Permissões
GRANT SELECT, INSERT, UPDATE ON public.child_escrita_status TO authenticated;
GRANT ALL ON public.child_escrita_status TO service_role;

-- RLS
ALTER TABLE public.child_escrita_status ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view and update their children's writing status"
ON public.child_escrita_status
FOR ALL
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.children
        WHERE children.id = child_escrita_status.child_id
        AND children.user_id = auth.uid()
    )
);
