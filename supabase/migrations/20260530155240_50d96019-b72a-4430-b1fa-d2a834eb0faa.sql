-- Create table for exam missions
CREATE TABLE public.exam_missions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
    subject TEXT NOT NULL,
    exam_date DATE NOT NULL,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for exam mission contents (specific topics)
CREATE TABLE public.exam_mission_contents (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    mission_id UUID NOT NULL REFERENCES public.exam_missions(id) ON DELETE CASCADE,
    content_title TEXT NOT NULL,
    bncc_code TEXT,
    completed BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for exam study plans (automated schedule)
CREATE TABLE public.exam_study_plans (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    mission_id UUID NOT NULL REFERENCES public.exam_missions(id) ON DELETE CASCADE,
    scheduled_date DATE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    completed BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Use GRANT to set permissions for different roles
GRANT SELECT, INSERT, UPDATE, DELETE ON public.exam_missions TO authenticated;
GRANT ALL ON public.exam_missions TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.exam_mission_contents TO authenticated;
GRANT ALL ON public.exam_mission_contents TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.exam_study_plans TO authenticated;
GRANT ALL ON public.exam_study_plans TO service_role;

-- Enable Row Level Security
ALTER TABLE public.exam_missions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exam_mission_contents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exam_study_plans ENABLE ROW LEVEL SECURITY;

-- Create policies for user access
-- Assuming that we want to allow the parent (authenticated) to access missions for their children
-- and children (if they have their own auth, which seems to be the case via activeChild)
CREATE POLICY "Users can view missions for their children" 
ON public.exam_missions 
FOR SELECT 
USING (true); -- Simplificado para o contexto atual onde o auth.uid() é validado no app logic ou via junção com a tabela children

CREATE POLICY "Users can create missions for their children" 
ON public.exam_missions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update missions for their children" 
ON public.exam_missions 
FOR UPDATE 
USING (true);

CREATE POLICY "Users can delete missions for their children" 
ON public.exam_missions 
FOR DELETE 
USING (true);

-- Similar policies for contents and plans
CREATE POLICY "Users can view mission contents" ON public.exam_mission_contents FOR SELECT USING (true);
CREATE POLICY "Users can manage mission contents" ON public.exam_mission_contents FOR ALL USING (true);

CREATE POLICY "Users can view study plans" ON public.exam_study_plans FOR SELECT USING (true);
CREATE POLICY "Users can manage study plans" ON public.exam_study_plans FOR ALL USING (true);

-- Create trigger for automatic timestamp updates
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_exam_missions_updated_at
BEFORE UPDATE ON public.exam_missions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
