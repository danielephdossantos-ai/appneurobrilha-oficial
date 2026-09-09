-- Create audit logs table
CREATE TABLE public.audit_logs (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id),
    action TEXT NOT NULL,
    module TEXT NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user privacy settings for LGPD
CREATE TABLE public.user_privacy_settings (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) UNIQUE NOT NULL,
    terms_accepted BOOLEAN DEFAULT false,
    marketing_consent BOOLEAN DEFAULT false,
    analytics_consent BOOLEAN DEFAULT false,
    data_usage_consent BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_privacy_settings ENABLE ROW LEVEL SECURITY;

-- Grants
GRANT SELECT, INSERT ON public.audit_logs TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.user_privacy_settings TO authenticated;
GRANT ALL ON public.audit_logs TO service_role;
GRANT ALL ON public.user_privacy_settings TO service_role;

-- Policies
CREATE POLICY "Users can view their own audit logs"
ON public.audit_logs FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own audit logs"
ON public.audit_logs FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own privacy settings"
ON public.user_privacy_settings FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own privacy settings"
ON public.user_privacy_settings FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own privacy settings"
ON public.user_privacy_settings FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Trigger for updated_at
CREATE TRIGGER update_user_privacy_settings_updated_at
BEFORE UPDATE ON public.user_privacy_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
