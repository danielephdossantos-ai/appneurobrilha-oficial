-- Create study_agenda table
CREATE TABLE public.study_agenda (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
    topic TEXT NOT NULL,
    description TEXT,
    exam_date DATE,
    type TEXT DEFAULT 'estudo' CHECK (type IN ('prova', 'trabalho', 'exercicio', 'estudo', 'outro')),
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Index for performance
CREATE INDEX idx_study_agenda_child_id ON public.study_agenda(child_id);

-- Grants
GRANT SELECT, INSERT, UPDATE, DELETE ON public.study_agenda TO authenticated;
GRANT ALL ON public.study_agenda TO service_role;

-- Enable RLS
ALTER TABLE public.study_agenda ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can manage study agenda for their children"
ON public.study_agenda
FOR ALL
USING (
    EXISTS (
        SELECT 1 FROM public.children
        WHERE public.children.id = public.study_agenda.child_id
        AND public.children.user_id = auth.uid()
    )
)
WITH CHECK (
    EXISTS (
        SELECT 1 FROM public.children
        WHERE public.children.id = public.study_agenda.child_id
        AND public.children.user_id = auth.uid()
    )
);

-- Trigger for updated_at
CREATE TRIGGER update_study_agenda_updated_at
BEFORE UPDATE ON public.study_agenda
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();