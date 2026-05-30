-- Create mascots table
CREATE TABLE public.mascots (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    category TEXT NOT NULL DEFAULT 'store', -- 'primary' or 'store'
    base_stats JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user_mascots table
CREATE TABLE public.user_mascots (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    mascot_id UUID NOT NULL REFERENCES public.mascots(id) ON DELETE CASCADE,
    is_active BOOLEAN NOT NULL DEFAULT false,
    level INTEGER NOT NULL DEFAULT 1,
    affinity INTEGER NOT NULL DEFAULT 0,
    experience INTEGER NOT NULL DEFAULT 0,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(user_id, mascot_id)
);

-- Grants
GRANT SELECT ON public.mascots TO authenticated, anon;
GRANT ALL ON public.user_mascots TO authenticated;
GRANT ALL ON public.user_mascots TO service_role;
GRANT ALL ON public.mascots TO service_role;

-- Enable RLS
ALTER TABLE public.mascots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_mascots ENABLE ROW LEVEL SECURITY;

-- Policies for mascots
CREATE POLICY "Mascots are viewable by everyone" 
ON public.mascots FOR SELECT USING (true);

-- Policies for user_mascots
CREATE POLICY "Users can view their own mascots" 
ON public.user_mascots FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own mascots" 
ON public.user_mascots FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own mascots" 
ON public.user_mascots FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Function to handle mascot activation (ensure only one is active)
CREATE OR REPLACE FUNCTION public.handle_mascot_activation()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.is_active = true THEN
        UPDATE public.user_mascots 
        SET is_active = false 
        WHERE user_id = NEW.user_id AND id <> NEW.id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER tr_ensure_single_active_mascot
BEFORE INSERT OR UPDATE OF is_active ON public.user_mascots
FOR EACH ROW
WHEN (NEW.is_active = true)
EXECUTE FUNCTION public.handle_mascot_activation();

-- Insert the primary mascot: Pip
INSERT INTO public.mascots (id, name, description, category, image_url)
VALUES (
    '00000000-0000-0000-0000-000000000001', 
    'Pip', 
    'Seu primeiro amigo e guia no Brilha Mente Kids!', 
    'primary',
    'https://api.dicebear.com/7.x/bottts/svg?seed=Pip'
);

-- Function to give Pip to new users
CREATE OR REPLACE FUNCTION public.give_pip_to_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.user_mascots (user_id, mascot_id, is_active)
    VALUES (NEW.id, '00000000-0000-0000-0000-000000000001', true);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Trigger on auth.users (requires a profile trigger or direct auth trigger)
-- Since we usually have a profiles table that syncs with auth.users, let's trigger on profiles if it exists
CREATE TRIGGER tr_give_pip_on_profile_creation
AFTER INSERT ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.give_pip_to_new_user();

-- Also ensure current users get Pip if they don't have it
INSERT INTO public.user_mascots (user_id, mascot_id, is_active)
SELECT id, '00000000-0000-0000-0000-000000000001', true
FROM public.profiles
ON CONFLICT (user_id, mascot_id) DO NOTHING;
