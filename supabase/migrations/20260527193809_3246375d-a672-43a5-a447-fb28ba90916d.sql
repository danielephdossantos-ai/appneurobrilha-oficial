-- Re-create policies with TO authenticated
DROP POLICY IF EXISTS "Users can view their own audit logs" ON public.audit_logs;
DROP POLICY IF EXISTS "Users can insert their own audit logs" ON public.audit_logs;
DROP POLICY IF EXISTS "Users can view their own privacy settings" ON public.user_privacy_settings;
DROP POLICY IF EXISTS "Users can update their own privacy settings" ON public.user_privacy_settings;
DROP POLICY IF EXISTS "Users can insert their own privacy settings" ON public.user_privacy_settings;

CREATE POLICY "Users can view their own audit logs"
ON public.audit_logs FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own audit logs"
ON public.audit_logs FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own privacy settings"
ON public.user_privacy_settings FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own privacy settings"
ON public.user_privacy_settings FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own privacy settings"
ON public.user_privacy_settings FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);
