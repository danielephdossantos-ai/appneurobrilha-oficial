CREATE TABLE public.jornada_unificada (
    id uuid primary key default gen_random_uuid(),
    child_id uuid references public.children(id) on delete cascade not null,
    source text not null,
    source_id text not null,
    activity_type text,
    title text not null,
    skill_id text,
    bncc_code text,
    priority_score integer default 50,
    priority_reason text,
    scheduled_date date,
    week integer,
    sequence_order integer,
    duration integer,
    status text not null default 'pending',
    metadata jsonb default '{}'::jsonb,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now(),
    unique(child_id, source, source_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.jornada_unificada TO authenticated;
GRANT ALL ON public.jornada_unificada TO service_role;

ALTER TABLE public.jornada_unificada ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can see their children's journey"
ON public.jornada_unificada
FOR SELECT
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.children
        WHERE public.children.id = public.jornada_unificada.child_id
        AND public.children.user_id = auth.uid()
    )
);

CREATE POLICY "Users can manage their children's journey"
ON public.jornada_unificada
FOR ALL
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.children
        WHERE public.children.id = public.jornada_unificada.child_id
        AND public.children.user_id = auth.uid()
    )
);

CREATE INDEX idx_jornada_child ON public.jornada_unificada(child_id);
CREATE INDEX idx_jornada_date ON public.jornada_unificada(scheduled_date);
CREATE INDEX idx_jornada_status ON public.jornada_unificada(status);
CREATE INDEX idx_jornada_source ON public.jornada_unificada(source, source_id);