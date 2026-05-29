-- Políticas RLS Adicionais para Segurança Granular
-- Projeto: Brilha Mente Kids (Neurobrilha-Kids)

DO $$
BEGIN
    -- 1. Dados de Saúde/Cognitivos (Apenas Pais e o Próprio se possível)
    -- Neuro Profiles
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Parents view children neuro profiles' AND tablename = 'neuro_profiles') THEN
        CREATE POLICY "Parents view children neuro profiles" ON public.neuro_profiles FOR SELECT 
        USING (child_id IN (SELECT id FROM public.children_profiles WHERE parent_id IN (SELECT id FROM public.parent_profiles WHERE profile_id = auth.uid())));
    END IF;

    -- Cognitive Profiles
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Parents view children cognitive profiles' AND tablename = 'cognitive_profiles') THEN
        CREATE POLICY "Parents view children cognitive profiles" ON public.cognitive_profiles FOR SELECT 
        USING (child_id IN (SELECT id FROM public.children_profiles WHERE parent_id IN (SELECT id FROM public.parent_profiles WHERE profile_id = auth.uid())));
    END IF;

    -- Sensory Profiles
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Parents view children sensory profiles' AND tablename = 'sensory_profiles') THEN
        CREATE POLICY "Parents view children sensory profiles" ON public.sensory_profiles FOR SELECT 
        USING (child_id IN (SELECT id FROM public.children_profiles WHERE parent_id IN (SELECT id FROM public.parent_profiles WHERE profile_id = auth.uid())));
    END IF;

    -- Anamnesis
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Parents view children anamnesis' AND tablename = 'anamnesis') THEN
        CREATE POLICY "Parents view children anamnesis" ON public.anamnesis FOR SELECT 
        USING (child_id IN (SELECT id FROM public.children_profiles WHERE parent_id IN (SELECT id FROM public.parent_profiles WHERE profile_id = auth.uid())));
    END IF;

    -- 2. Execução e Resultados
    -- Activities
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Children view assigned activities' AND tablename = 'activities') THEN
        CREATE POLICY "Children view assigned activities" ON public.activities FOR SELECT 
        USING (true); -- Permitir ver, mas o app filtra por child_id logado
    END IF;

    -- Activity Results
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Parents view children results' AND tablename = 'activity_results') THEN
        CREATE POLICY "Parents view children results" ON public.activity_results FOR SELECT 
        USING (child_id IN (SELECT id FROM public.children_profiles WHERE parent_id IN (SELECT id FROM public.parent_profiles WHERE profile_id = auth.uid())));
    END IF;

    -- Progression
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Parents view children progression' AND tablename = 'progression') THEN
        CREATE POLICY "Parents view children progression" ON public.progression FOR SELECT 
        USING (child_id IN (SELECT id FROM public.children_profiles WHERE parent_id IN (SELECT id FROM public.parent_profiles WHERE profile_id = auth.uid())));
    END IF;

    -- Daily Sessions
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Parents view children sessions' AND tablename = 'daily_sessions') THEN
        CREATE POLICY "Parents view children sessions" ON public.daily_sessions FOR SELECT 
        USING (child_id IN (SELECT id FROM public.children_profiles WHERE parent_id IN (SELECT id FROM public.parent_profiles WHERE profile_id = auth.uid())));
    END IF;

    -- 3. Métricas Neuroadaptativas
    -- Attention Metrics
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Parents view children attention' AND tablename = 'attention_metrics') THEN
        CREATE POLICY "Parents view children attention" ON public.attention_metrics FOR SELECT 
        USING (session_id IN (SELECT id FROM public.daily_sessions WHERE child_id IN (SELECT id FROM public.children_profiles WHERE parent_id IN (SELECT id FROM public.parent_profiles WHERE profile_id = auth.uid()))));
    END IF;

    -- Fatigue Metrics
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Parents view children fatigue' AND tablename = 'fatigue_metrics') THEN
        CREATE POLICY "Parents view children fatigue" ON public.fatigue_metrics FOR SELECT 
        USING (session_id IN (SELECT id FROM public.daily_sessions WHERE child_id IN (SELECT id FROM public.children_profiles WHERE parent_id IN (SELECT id FROM public.parent_profiles WHERE profile_id = auth.uid()))));
    END IF;

    -- Adaptation Logs
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Parents view adaptation logs' AND tablename = 'adaptation_logs') THEN
        CREATE POLICY "Parents view adaptation logs" ON public.adaptation_logs FOR SELECT 
        USING (child_id IN (SELECT id FROM public.children_profiles WHERE parent_id IN (SELECT id FROM public.parent_profiles WHERE profile_id = auth.uid())));
    END IF;

    -- 4. Tabelas Públicas/Read-only (BNCC e Templates)
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Everyone can view BNCC' AND tablename = 'bncc_skills') THEN
        CREATE POLICY "Everyone can view BNCC" ON public.bncc_skills FOR SELECT USING (true);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Everyone can view levels' AND tablename = 'bncc_levels') THEN
        CREATE POLICY "Everyone can view levels" ON public.bncc_levels FOR SELECT USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Everyone can view templates' AND tablename = 'activity_templates') THEN
        CREATE POLICY "Everyone can view templates" ON public.activity_templates FOR SELECT USING (true);
    END IF;

    -- 5. Controle e Notificações
    -- Reports
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Parents view their children reports' AND tablename = 'reports') THEN
        CREATE POLICY "Parents view their children reports" ON public.reports FOR SELECT 
        USING (child_id IN (SELECT id FROM public.children_profiles WHERE parent_id IN (SELECT id FROM public.parent_profiles WHERE profile_id = auth.uid())));
    END IF;

    -- Parental Controls
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Parents can update controls' AND tablename = 'parental_controls') THEN
        CREATE POLICY "Parents can update controls" ON public.parental_controls FOR ALL 
        USING (child_id IN (SELECT id FROM public.children_profiles WHERE parent_id IN (SELECT id FROM public.parent_profiles WHERE profile_id = auth.uid())));
    END IF;

    -- Notifications
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Users view their own notifications' AND tablename = 'notifications') THEN
        CREATE POLICY "Users view their own notifications" ON public.notifications FOR SELECT USING (user_id = auth.uid());
    END IF;

END
$$;
