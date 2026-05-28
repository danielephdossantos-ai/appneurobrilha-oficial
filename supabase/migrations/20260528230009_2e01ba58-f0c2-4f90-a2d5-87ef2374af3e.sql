-- Tabela de notificações
CREATE TABLE public.notifications (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id),
    child_id UUID REFERENCES public.children(id),
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('estudo', 'rotina', 'seguranca', 'reforco', 'amigo')),
    read BOOLEAN DEFAULT false,
    scheduled_for TIMESTAMP WITH TIME ZONE DEFAULT now(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Permissões
GRANT SELECT, INSERT, UPDATE, DELETE ON public.notifications TO authenticated;
GRANT ALL ON public.notifications TO service_role;

-- RLS
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Pais podem ver notificações de seus usuários (as deles e dos filhos)
CREATE POLICY "Users can see their own notifications"
ON public.notifications
FOR SELECT
USING (auth.uid() = user_id);

-- Pais podem inserir notificações
CREATE POLICY "Users can insert notifications"
ON public.notifications
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Pais podem atualizar (marcar como lido)
CREATE POLICY "Users can update their own notifications"
ON public.notifications
FOR UPDATE
USING (auth.uid() = user_id);

-- Index para performance
CREATE INDEX idx_notifications_user_id ON public.notifications(user_id);
CREATE INDEX idx_notifications_child_id ON public.notifications(child_id);
CREATE INDEX idx_notifications_scheduled_for ON public.notifications(scheduled_for);
