-- Tabela para rastrear o domínio de habilidades específicas
CREATE TABLE public.child_skill_mastery (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
    skill_code TEXT NOT NULL, -- Código BNCC ou Micro-habilidade
    materia TEXT NOT NULL,
    mastery_level NUMERIC NOT NULL DEFAULT 0, -- 0 a 100
    total_attempts INTEGER NOT NULL DEFAULT 0,
    success_rate NUMERIC NOT NULL DEFAULT 0,
    last_attempt_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(child_id, skill_code)
);

-- Tabela para trilhas de aprendizagem
CREATE TABLE public.learning_trails (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    materia TEXT NOT NULL,
    serie TEXT,
    difficulty_level TEXT,
    steps JSONB NOT NULL DEFAULT '[]', -- Lista de IDs de atividades ou temas
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela para repetição espaçada (Revisão Automática)
CREATE TABLE public.spaced_repetition_schedule (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
    activity_id UUID REFERENCES public.pedagogical_activities_base(id) ON DELETE CASCADE,
    skill_code TEXT,
    next_review_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    interval_days INTEGER NOT NULL DEFAULT 1,
    ease_factor NUMERIC NOT NULL DEFAULT 2.5,
    last_performance_score INTEGER, -- 1 a 5 (facilidade)
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(child_id, activity_id)
);

-- Tabela para estatísticas gerais de progressão
CREATE TABLE public.child_progression_stats (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
    materia TEXT NOT NULL,
    evolution_percentage NUMERIC NOT NULL DEFAULT 0,
    activities_completed INTEGER NOT NULL DEFAULT 0,
    current_streak INTEGER NOT NULL DEFAULT 0,
    last_activity_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(child_id, materia)
);

-- Habilitar RLS
ALTER TABLE public.child_skill_mastery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learning_trails ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.spaced_repetition_schedule ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.child_progression_stats ENABLE ROW LEVEL SECURITY;

-- Grants
GRANT SELECT, INSERT, UPDATE, DELETE ON public.child_skill_mastery TO authenticated;
GRANT ALL ON public.child_skill_mastery TO service_role;

GRANT SELECT ON public.learning_trails TO authenticated;
GRANT ALL ON public.learning_trails TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.spaced_repetition_schedule TO authenticated;
GRANT ALL ON public.spaced_repetition_schedule TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.child_progression_stats TO authenticated;
GRANT ALL ON public.child_progression_stats TO service_role;

-- Políticas
CREATE POLICY "Users can manage their child's skill mastery" ON public.child_skill_mastery
    FOR ALL TO authenticated USING (
        EXISTS (SELECT 1 FROM public.children WHERE id = child_skill_mastery.child_id AND user_id = auth.uid())
    );

CREATE POLICY "Anyone authenticated can view learning trails" ON public.learning_trails
    FOR SELECT TO authenticated USING (true);

CREATE POLICY "Users can manage their child's review schedule" ON public.spaced_repetition_schedule
    FOR ALL TO authenticated USING (
        EXISTS (SELECT 1 FROM public.children WHERE id = spaced_repetition_schedule.child_id AND user_id = auth.uid())
    );

CREATE POLICY "Users can manage their child's progression stats" ON public.child_progression_stats
    FOR ALL TO authenticated USING (
        EXISTS (SELECT 1 FROM public.children WHERE id = child_progression_stats.child_id AND user_id = auth.uid())
    );

-- Triggers para updated_at
CREATE TRIGGER update_child_skill_mastery_updated_at BEFORE UPDATE ON public.child_skill_mastery FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_learning_trails_updated_at BEFORE UPDATE ON public.learning_trails FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_spaced_repetition_schedule_updated_at BEFORE UPDATE ON public.spaced_repetition_schedule FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_child_progression_stats_updated_at BEFORE UPDATE ON public.child_progression_stats FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
