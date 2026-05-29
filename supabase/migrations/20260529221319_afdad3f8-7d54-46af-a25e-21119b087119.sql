-- 1. LIMPEZA DE POLÍTICAS LEGADAS (ANON)
-- Removemos as políticas que o linter identificou como inseguras
DROP POLICY IF EXISTS "Activities are viewable by all authenticated users" ON public.activities;
DROP POLICY IF EXISTS "Users can manage their children's activity logs" ON public.activity_logs;
DROP POLICY IF EXISTS "Users can view their own audit logs" ON public.audit_logs;
DROP POLICY IF EXISTS "Users can update anamnesis for their own children" ON public.child_anamnesis;
DROP POLICY IF EXISTS "Users can view anamnesis of their own children" ON public.child_anamnesis;
DROP POLICY IF EXISTS "Users can manage their children's journey" ON public.child_journey;
DROP POLICY IF EXISTS "Users can manage their child's progression stats" ON public.child_progression_stats;
DROP POLICY IF EXISTS "Users can update status of alerts for their children" ON public.child_security_alerts;
DROP POLICY IF EXISTS "Users can view alerts for their children" ON public.child_security_alerts;
DROP POLICY IF EXISTS "Users can manage their child's skill mastery" ON public.child_skill_mastery;
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;

-- 2. REFORÇO DAS NOVAS POLÍTICAS (IDENTIDADE ÚNICA)

-- Atividades: Somente leitura para autenticados
DROP POLICY IF EXISTS "brilha_activities_select" ON public.activities;
CREATE POLICY "brilha_activities_select" ON public.activities 
FOR SELECT TO authenticated USING (true);

-- Jornada da Criança
DROP POLICY IF EXISTS "brilha_journey_all_own" ON public.child_journey;
CREATE POLICY "brilha_journey_all_own" ON public.child_journey 
FOR ALL TO authenticated USING (
    EXISTS (
        SELECT 1 FROM public.children 
        WHERE children.id = child_journey.child_id 
        AND children.user_id = auth.uid()
    )
);

-- Estatísticas de Progressão
DROP POLICY IF EXISTS "brilha_progression_all_own" ON public.child_progression_stats;
CREATE POLICY "brilha_progression_all_own" ON public.child_progression_stats 
FOR ALL TO authenticated USING (
    EXISTS (
        SELECT 1 FROM public.children 
        WHERE children.id = child_progression_stats.child_id 
        AND children.user_id = auth.uid()
    )
);

-- Alertas de Segurança
DROP POLICY IF EXISTS "brilha_alerts_all_own" ON public.child_security_alerts;
CREATE POLICY "brilha_alerts_all_own" ON public.child_security_alerts 
FOR ALL TO authenticated USING (
    EXISTS (
        SELECT 1 FROM public.children 
        WHERE children.id = child_security_alerts.child_id 
        AND children.user_id = auth.uid()
    )
);

-- Maestria de Habilidades
DROP POLICY IF EXISTS "brilha_mastery_all_own" ON public.child_skill_mastery;
CREATE POLICY "brilha_mastery_all_own" ON public.child_skill_mastery 
FOR ALL TO authenticated USING (
    EXISTS (
        SELECT 1 FROM public.children 
        WHERE children.id = child_skill_mastery.child_id 
        AND children.user_id = auth.uid()
    )
);

-- Perfil Cognitivo
DROP POLICY IF EXISTS "brilha_cognitive_all_own" ON public.cognitive_profile;
CREATE POLICY "brilha_cognitive_all_own" ON public.cognitive_profile 
FOR ALL TO authenticated USING (
    EXISTS (
        SELECT 1 FROM public.children 
        WHERE children.id = cognitive_profile.child_id 
        AND children.user_id = auth.uid()
    )
);

-- 3. SEGURANÇA DE ESCOPO DE FUNÇÃO
ALTER FUNCTION public.get_auth_user_id() SET search_path = public;
