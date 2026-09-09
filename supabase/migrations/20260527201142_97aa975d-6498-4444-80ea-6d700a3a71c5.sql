-- Grant permissions to authenticated users and service role
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_privacy_settings TO authenticated;
GRANT ALL ON public.user_privacy_settings TO service_role;

-- Ensure RLS is enabled
ALTER TABLE public.user_privacy_settings ENABLE ROW LEVEL SECURITY;

-- Re-verify or create policies if missing (safety check)
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Users can insert their own privacy settings') THEN
        CREATE POLICY "Users can insert their own privacy settings" 
        ON public.user_privacy_settings FOR INSERT 
        TO authenticated 
        WITH CHECK (auth.uid() = user_id);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Users can update their own privacy settings') THEN
        CREATE POLICY "Users can update their own privacy settings" 
        ON public.user_privacy_settings FOR UPDATE 
        TO authenticated 
        USING (auth.uid() = user_id);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Users can view their own privacy settings') THEN
        CREATE POLICY "Users can view their own privacy settings" 
        ON public.user_privacy_settings FOR SELECT 
        TO authenticated 
        USING (auth.uid() = user_id);
    END IF;
END $$;
