-- Update policies to be explicit for 'authenticated' role
-- Children table
DROP POLICY IF EXISTS "Users can view their own children" ON public.children;
CREATE POLICY "Users can view their own children" ON public.children FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own children" ON public.children;
CREATE POLICY "Users can update their own children" ON public.children FOR UPDATE TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete their own children" ON public.children;
CREATE POLICY "Users can delete their own children" ON public.children FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Profiles table
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id);

-- Audit logs
DROP POLICY IF EXISTS "Users can view their own audit logs" ON public.audit_logs;
CREATE POLICY "Users can view their own audit logs" ON public.audit_logs FOR SELECT TO authenticated USING (auth.uid() = (metadata->>'userId')::uuid);

-- Activity logs
DROP POLICY IF EXISTS "Users can manage their children's activity logs" ON public.activity_logs;
CREATE POLICY "Users can manage their children's activity logs" ON public.activity_logs FOR ALL TO authenticated USING (EXISTS (SELECT 1 FROM children WHERE children.id = activity_logs.child_id AND children.user_id = auth.uid()));

-- Child Journey
DROP POLICY IF EXISTS "Users can manage their children's journey" ON public.child_journey;
CREATE POLICY "Users can manage their children's journey" ON public.child_journey FOR ALL TO authenticated USING (EXISTS (SELECT 1 FROM children WHERE children.id = child_journey.child_id AND children.user_id = auth.uid()));

-- Cognitive Profile
DROP POLICY IF EXISTS "Users can manage their child's cognitive profile" ON public.cognitive_profile;
CREATE POLICY "Users can manage their child's cognitive profile" ON public.cognitive_profile FOR ALL TO authenticated USING (EXISTS (SELECT 1 FROM children WHERE children.id = cognitive_profile.child_id AND children.user_id = auth.uid()));
