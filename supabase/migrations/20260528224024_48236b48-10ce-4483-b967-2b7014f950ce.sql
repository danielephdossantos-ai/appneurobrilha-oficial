CREATE TABLE public.child_security_alerts (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    reason TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.child_security_alerts TO authenticated;
GRANT ALL ON public.child_security_alerts TO service_role;

ALTER TABLE public.child_security_alerts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view alerts for their children" 
ON public.child_security_alerts 
FOR SELECT 
USING (
    EXISTS (
        SELECT 1 FROM public.children 
        WHERE children.id = child_security_alerts.child_id 
        AND children.user_id = auth.uid()
    )
);

CREATE POLICY "Users can update status of alerts for their children" 
ON public.child_security_alerts 
FOR UPDATE 
USING (
    EXISTS (
        SELECT 1 FROM public.children 
        WHERE children.id = child_security_alerts.child_id 
        AND children.user_id = auth.uid()
    )
);