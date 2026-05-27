-- Table for persistent cognitive profile
CREATE TABLE public.cognitive_profile (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE UNIQUE,
    frequent_errors JSONB DEFAULT '[]'::jsonb,
    mastered_skills TEXT[] DEFAULT '{}'::text[],
    fragile_skills TEXT[] DEFAULT '{}'::text[],
    avg_focus_time NUMERIC DEFAULT 0,
    preferred_stimuli TEXT[] DEFAULT '{}'::text[],
    sensory_difficulty_level NUMERIC DEFAULT 1,
    emotional_behavior_patterns JSONB DEFAULT '{}'::jsonb,
    avg_response_speed NUMERIC DEFAULT 0,
    pedagogical_evolution_score NUMERIC DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table for longitudinal history of developmental scores
CREATE TABLE public.longitudinal_scores (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
    attention_score NUMERIC DEFAULT 0,
    self_regulation_score NUMERIC DEFAULT 0,
    autonomy_score NUMERIC DEFAULT 0,
    language_score NUMERIC DEFAULT 0,
    memory_score NUMERIC DEFAULT 0,
    coordination_score NUMERIC DEFAULT 0,
    reading_score NUMERIC DEFAULT 0,
    math_score NUMERIC DEFAULT 0,
    recorded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for longitudinal analysis
CREATE INDEX idx_longitudinal_scores_child_recorded ON public.longitudinal_scores(child_id, recorded_at);

-- Grants
GRANT SELECT, INSERT, UPDATE, DELETE ON public.cognitive_profile TO authenticated;
GRANT ALL ON public.cognitive_profile TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.longitudinal_scores TO authenticated;
GRANT ALL ON public.longitudinal_scores TO service_role;

-- Enable RLS
ALTER TABLE public.cognitive_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.longitudinal_scores ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can manage their child's cognitive profile" 
ON public.cognitive_profile 
FOR ALL 
TO authenticated
USING (EXISTS (SELECT 1 FROM public.children WHERE children.id = cognitive_profile.child_id AND children.user_id = auth.uid()));

CREATE POLICY "Users can manage their child's longitudinal scores" 
ON public.longitudinal_scores 
FOR ALL 
TO authenticated
USING (EXISTS (SELECT 1 FROM public.children WHERE children.id = longitudinal_scores.child_id AND children.user_id = auth.uid()));

-- Trigger for updated_at
CREATE TRIGGER update_cognitive_profile_updated_at
BEFORE UPDATE ON public.cognitive_profile
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
