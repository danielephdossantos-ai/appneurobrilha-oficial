-- Tabelas de Gamificação
CREATE TABLE public.gamification_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id UUID REFERENCES public.children(id) ON DELETE CASCADE NOT NULL UNIQUE,
    coins INTEGER DEFAULT 0 CHECK (coins >= 0),
    total_stars INTEGER DEFAULT 0 CHECK (total_stars >= 0),
    level INTEGER DEFAULT 1 CHECK (level >= 1),
    xp INTEGER DEFAULT 0 CHECK (xp >= 0),
    streak_days INTEGER DEFAULT 0,
    last_activity_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TYPE mascot_emotion AS ENUM ('happy', 'calm', 'sleepy', 'excited', 'focused', 'proud');

CREATE TABLE public.mascot_states (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id UUID REFERENCES public.children(id) ON DELETE CASCADE NOT NULL UNIQUE,
    name TEXT NOT NULL DEFAULT 'Brilhante',
    type TEXT NOT NULL DEFAULT 'star', 
    evolution_stage INTEGER DEFAULT 1,
    current_emotion mascot_emotion DEFAULT 'happy',
    energy_level INTEGER DEFAULT 100 CHECK (energy_level >= 0 AND energy_level <= 100),
    affinity_points INTEGER DEFAULT 0,
    last_interaction_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE public.achievements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL,
    points INTEGER DEFAULT 10,
    icon_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE public.child_achievements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id UUID REFERENCES public.children(id) ON DELETE CASCADE NOT NULL,
    achievement_id UUID REFERENCES public.achievements(id) ON DELETE CASCADE NOT NULL,
    unlocked_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE(child_id, achievement_id)
);

CREATE TABLE public.inventory (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id UUID REFERENCES public.children(id) ON DELETE CASCADE NOT NULL,
    item_type TEXT NOT NULL,
    item_code TEXT NOT NULL,
    is_equipped BOOLEAN DEFAULT false,
    unlocked_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE(child_id, item_code)
);

CREATE TABLE public.daily_routines (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id UUID REFERENCES public.children(id) ON DELETE CASCADE NOT NULL,
    routine_code TEXT NOT NULL,
    completed_at DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE(child_id, routine_code, completed_at)
);

-- Permissões
GRANT SELECT, UPDATE ON public.gamification_profiles TO authenticated;
GRANT SELECT, UPDATE ON public.mascot_states TO authenticated;
GRANT SELECT ON public.achievements TO authenticated;
GRANT SELECT, INSERT ON public.child_achievements TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.inventory TO authenticated;
GRANT SELECT, INSERT ON public.daily_routines TO authenticated;

GRANT ALL ON public.gamification_profiles TO service_role;
GRANT ALL ON public.mascot_states TO service_role;
GRANT ALL ON public.achievements TO service_role;
GRANT ALL ON public.child_achievements TO service_role;
GRANT ALL ON public.inventory TO service_role;
GRANT ALL ON public.daily_routines TO service_role;

-- RLS
ALTER TABLE public.gamification_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mascot_states ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.child_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_routines ENABLE ROW LEVEL SECURITY;

-- Políticas
CREATE POLICY "Users can view their child gamification profile" ON public.gamification_profiles
    FOR SELECT USING (auth.uid() IN (SELECT user_id FROM public.children WHERE id = child_id));

CREATE POLICY "Users can update their child gamification profile" ON public.gamification_profiles
    FOR UPDATE USING (auth.uid() IN (SELECT user_id FROM public.children WHERE id = child_id));

CREATE POLICY "Users can view their child mascot" ON public.mascot_states
    FOR SELECT USING (auth.uid() IN (SELECT user_id FROM public.children WHERE id = child_id));

CREATE POLICY "Users can update their child mascot" ON public.mascot_states
    FOR UPDATE USING (auth.uid() IN (SELECT user_id FROM public.children WHERE id = child_id));

CREATE POLICY "Anyone authenticated can view achievements" ON public.achievements
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Users can view their child achievements" ON public.child_achievements
    FOR SELECT USING (auth.uid() IN (SELECT user_id FROM public.children WHERE id = child_id));

CREATE POLICY "Users can view their child inventory" ON public.inventory
    FOR SELECT USING (auth.uid() IN (SELECT user_id FROM public.children WHERE id = child_id));

CREATE POLICY "Users can view their child routines" ON public.daily_routines
    FOR SELECT USING (auth.uid() IN (SELECT user_id FROM public.children WHERE id = child_id));

-- Triggers
CREATE TRIGGER update_gamification_profiles_updated_at BEFORE UPDATE ON public.gamification_profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_mascot_states_updated_at BEFORE UPDATE ON public.mascot_states FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
