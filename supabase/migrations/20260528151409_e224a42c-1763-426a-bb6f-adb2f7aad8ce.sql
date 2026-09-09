-- Create the child_anamnesis table
CREATE TABLE public.child_anamnesis (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
    responses JSONB NOT NULL,
    internal_profile JSONB NOT NULL,
    edit_count INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add edit count and status to children table
ALTER TABLE public.children 
ADD COLUMN IF NOT EXISTS anamnesis_id UUID REFERENCES public.child_anamnesis(id) ON DELETE SET NULL,
ADD COLUMN IF NOT EXISTS anamnesis_edit_count INTEGER DEFAULT 0;

-- Grant permissions
GRANT SELECT, INSERT, UPDATE, DELETE ON public.child_anamnesis TO authenticated;
GRANT ALL ON public.child_anamnesis TO service_role;

-- Enable RLS
ALTER TABLE public.child_anamnesis ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view anamnesis of their own children" 
ON public.child_anamnesis 
FOR SELECT 
USING (
    EXISTS (
        SELECT 1 FROM public.children 
        WHERE public.children.id = public.child_anamnesis.child_id 
        AND public.children.user_id = auth.uid()
    )
);

CREATE POLICY "Users can insert anamnesis for their own children" 
ON public.child_anamnesis 
FOR INSERT 
WITH CHECK (
    EXISTS (
        SELECT 1 FROM public.children 
        WHERE public.children.id = child_id 
        AND public.children.user_id = auth.uid()
    )
);

CREATE POLICY "Users can update anamnesis for their own children" 
ON public.child_anamnesis 
FOR UPDATE 
USING (
    EXISTS (
        SELECT 1 FROM public.children 
        WHERE public.children.id = public.child_anamnesis.child_id 
        AND public.children.user_id = auth.uid()
    )
);

-- Trigger for updated_at
CREATE TRIGGER update_child_anamnesis_updated_at
BEFORE UPDATE ON public.child_anamnesis
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
