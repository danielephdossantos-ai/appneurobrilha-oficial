-- Update bncc_skills
ALTER TABLE public.bncc_skills ADD COLUMN IF NOT EXISTS grade TEXT;
ALTER TABLE public.bncc_skills ADD COLUMN IF NOT EXISTS field TEXT;

-- Create Pedagogical Explanations
CREATE TABLE IF NOT EXISTS public.pedagogical_explanations (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    skill_code TEXT NOT NULL REFERENCES public.bncc_skills(code),
    content JSONB NOT NULL, -- Array of strings (narrations) or objects (text/image)
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create Pedagogical Activities (Replacing or extending current activities)
CREATE TABLE IF NOT EXISTS public.pedagogical_activities (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    skill_code TEXT NOT NULL REFERENCES public.bncc_skills(code),
    title TEXT NOT NULL,
    demonstration JSONB NOT NULL, -- Step-by-step visuals
    guided_training JSONB NOT NULL, -- Exercises with immediate help
    practice JSONB NOT NULL, -- Independent exercises
    challenge JSONB NOT NULL, -- Final hard task
    assessment JSONB NOT NULL, -- Final test for mastery
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Refine child_skill_mastery for the Mastery Motor
ALTER TABLE public.child_skill_mastery ADD COLUMN IF NOT EXISTS hits_count INTEGER DEFAULT 0;
ALTER TABLE public.child_skill_mastery ADD COLUMN IF NOT EXISTS errors_count INTEGER DEFAULT 0;
ALTER TABLE public.child_skill_mastery ADD COLUMN IF NOT EXISTS total_time_seconds INTEGER DEFAULT 0;
ALTER TABLE public.child_skill_mastery ADD COLUMN IF NOT EXISTS mastery_percentage INTEGER DEFAULT 0;

-- Learning Trails
-- table learning_trails already exists (checked via pg_tables)

-- Grants
GRANT SELECT, INSERT, UPDATE, DELETE ON public.pedagogical_explanations TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.pedagogical_activities TO authenticated;
GRANT ALL ON public.pedagogical_explanations TO service_role;
GRANT ALL ON public.pedagogical_activities TO service_role;

-- RLS
ALTER TABLE public.pedagogical_explanations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pedagogical_activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read explanations for all" ON public.pedagogical_explanations FOR SELECT USING (true);
CREATE POLICY "Read activities for all" ON public.pedagogical_activities FOR SELECT USING (true);

-- Trigger for updated_at
CREATE TRIGGER update_pedagogical_explanations_at BEFORE UPDATE ON public.pedagogical_explanations FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_pedagogical_activities_at BEFORE UPDATE ON public.pedagogical_activities FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
