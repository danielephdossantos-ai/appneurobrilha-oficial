
CREATE TYPE public.routine_item_type AS ENUM (
  'estudo', 
  'atividade_neurobrilha', 
  'terapia', 
  'escola', 
  'alimentacao', 
  'higiene', 
  'sono', 
  'lazer', 
  'compromisso', 
  'outro'
);

CREATE TYPE public.routine_item_status AS ENUM (
  'pendente', 
  'concluido', 
  'atrasado', 
  'cancelado'
);

CREATE TABLE public.routine_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
    parent_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    type public.routine_item_type NOT NULL DEFAULT 'outro',
    start_time TIME NOT NULL,
    duration_minutes INTEGER DEFAULT 30,
    date DATE, -- NULL means it's a template for recurring items or a "general" routine
    recurrence_days INTEGER[], -- 0-6 (Sunday-Saturday)
    reminder_enabled BOOLEAN DEFAULT FALSE,
    reminder_minutes_before INTEGER DEFAULT 0,
    status public.routine_item_status DEFAULT 'pendente',
    source TEXT DEFAULT 'manual', -- manual, minha_jornada, etc
    source_id TEXT, -- ID of the activity or external reference
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Access grants
GRANT SELECT, INSERT, UPDATE, DELETE ON public.routine_items TO authenticated;
GRANT ALL ON public.routine_items TO service_role;

-- RLS
ALTER TABLE public.routine_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage routine items for their children" 
ON public.routine_items
FOR ALL
TO authenticated
USING (
    parent_id = auth.uid() OR 
    child_id IN (SELECT id FROM public.children WHERE parent_id = auth.uid())
);

-- Index for performance
CREATE INDEX idx_routine_items_child_date ON public.routine_items(child_id, date);
CREATE INDEX idx_routine_items_parent ON public.routine_items(parent_id);

-- Add notification settings to children_profiles if not exists (or metadata)
-- For now, we'll use a JSONB column in children_profiles if we need to store preferences.
