-- Create tables for lessons and steps
CREATE TABLE IF NOT EXISTS public.lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    bncc_field TEXT,
    skill_bncc TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.lesson_steps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
    step_id_internal TEXT NOT NULL, -- The internal ID like 'v1', 'm1'
    phase TEXT NOT NULL,
    type TEXT NOT NULL,
    mascot TEXT NOT NULL,
    display_text TEXT,
    speech_text TEXT NOT NULL,
    elements JSONB DEFAULT '[]'::jsonb,
    interaction JSONB DEFAULT '{}'::jsonb,
    order_index INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_steps ENABLE ROW LEVEL SECURITY;

-- Create policies (Read-only for public/authenticated users for now)
CREATE POLICY "Allow public read access on lessons" ON public.lessons FOR SELECT USING (true);
CREATE POLICY "Allow public read access on lesson_steps" ON public.lesson_steps FOR SELECT USING (true);

-- Grant permissions
GRANT SELECT ON public.lessons TO anon, authenticated;
GRANT SELECT ON public.lesson_steps TO anon, authenticated;
GRANT ALL ON public.lessons TO service_role;
GRANT ALL ON public.lesson_steps TO service_role;

-- Insert some initial data (Seed)
DO $$
DECLARE
    new_lesson_id UUID;
BEGIN
    -- Lesson 1: Cidade das Letras (Vogais)
    INSERT INTO public.lessons (title, category, bncc_field, skill_bncc)
    VALUES ('Cidade das Letras - Vogais', 'portugues', 'escuta_fala', 'EI03EF01')
    RETURNING id INTO new_lesson_id;

    INSERT INTO public.lesson_steps (lesson_id, step_id_internal, phase, type, mascot, display_text, speech_text, elements, interaction, order_index)
    VALUES 
    (new_lesson_id, 'v1', 'practice', 'interaction', 'pipa', 'ENCONTRE A LETRA A', 'Olá amiguinho! Encontre para mim a letra A, de abelha!', '[{"id": "a1", "type": "text", "content": "🍎 A", "position": {"x": -80, "y": 0}, "animation": "pop", "delay": 0.2}]', '{"type": "click", "correctAnswer": "🍎 A", "options": ["🍎 A", "🐶 P", "🚗 O"]}', 1);

    -- Lesson 2: Vale dos Números (Contagem)
    INSERT INTO public.lessons (title, category, bncc_field, skill_bncc)
    VALUES ('Vale dos Números - Contagem', 'matematica', 'espacos_tempos', 'EI03ET07')
    RETURNING id INTO new_lesson_id;

    INSERT INTO public.lesson_steps (lesson_id, step_id_internal, phase, type, mascot, display_text, speech_text, elements, interaction, order_index)
    VALUES 
    (new_lesson_id, 'n1', 'practice', 'interaction', 'pip', 'QUANTAS MAÇÃS?', 'Hum, que maçãs deliciosas! Quantas maçãs existem na tela?', '[{"id": "m1", "type": "text", "content": "maça", "position": {"x": -60, "y": 0}, "animation": "pop", "delay": 0.2}]', '{"type": "click", "correctAnswer": "3", "options": ["1", "3", "5"]}', 1);
END $$;
