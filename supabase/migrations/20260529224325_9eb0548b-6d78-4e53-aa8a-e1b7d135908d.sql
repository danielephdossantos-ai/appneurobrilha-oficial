-- Tabelas de Controle Parental e Notificações
CREATE TABLE public.parental_controls (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id UUID REFERENCES public.children(id) ON DELETE CASCADE NOT NULL UNIQUE,
    daily_time_limit_minutes INTEGER DEFAULT 60,
    enforce_mandatory_breaks BOOLEAN DEFAULT true,
    break_interval_minutes INTEGER DEFAULT 20,
    break_duration_minutes INTEGER DEFAULT 5,
    allowed_hours_start TIME DEFAULT '08:00:00',
    allowed_hours_end TIME DEFAULT '20:00:00',
    blocked_days INTEGER[] DEFAULT '{}', -- 0=Sunday, 1=Monday...
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE public.parent_notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    child_id UUID REFERENCES public.children(id) ON DELETE CASCADE NOT NULL,
    type TEXT NOT NULL, -- progress, security, emotional, achievement
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    metadata Json DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Permissões
GRANT SELECT, INSERT, UPDATE, DELETE ON public.parental_controls TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.parent_notifications TO authenticated;

GRANT ALL ON public.parental_controls TO service_role;
GRANT ALL ON public.parent_notifications TO service_role;

-- RLS
ALTER TABLE public.parental_controls ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parent_notifications ENABLE ROW LEVEL SECURITY;

-- Políticas
CREATE POLICY "Parents can manage their child's parental controls" ON public.parental_controls
    FOR ALL USING (auth.uid() IN (SELECT user_id FROM public.children WHERE id = child_id));

CREATE POLICY "Parents can view their own notifications" ON public.parent_notifications
    FOR SELECT USING (auth.uid() = parent_id);

CREATE POLICY "Parents can update their own notifications" ON public.parent_notifications
    FOR UPDATE USING (auth.uid() = parent_id);

-- Trigger
CREATE TRIGGER update_parental_controls_updated_at BEFORE UPDATE ON public.parental_controls FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
