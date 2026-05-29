-- 1. REVOGAÇÃO DEFINITIVA DE ACESSO ANÔNIMO (ANON)
DO $$ 
DECLARE 
    r RECORD;
BEGIN
    FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') 
    LOOP
        EXECUTE 'REVOKE ALL ON public.' || quote_ident(r.tablename) || ' FROM anon;';
    END LOOP;
END $$;

-- 2. REFORÇO DE POLÍTICAS COM ROLE EXPLICITA

-- Perfis (Profiles)
DROP POLICY IF EXISTS "brilha_profiles_select_own" ON public.profiles;
CREATE POLICY "brilha_profiles_select_own" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);

DROP POLICY IF EXISTS "brilha_profiles_update_own" ON public.profiles;
CREATE POLICY "brilha_profiles_update_own" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id);

-- Crianças (Children)
DROP POLICY IF EXISTS "brilha_children_all_own" ON public.children;
CREATE POLICY "brilha_children_all_own" ON public.children FOR ALL TO authenticated USING (auth.uid() = user_id);

-- Anamnese
DROP POLICY IF EXISTS "brilha_anamnesis_all_own" ON public.child_anamnesis;
CREATE POLICY "brilha_anamnesis_all_own" ON public.child_anamnesis FOR ALL TO authenticated USING (
    EXISTS (
        SELECT 1 FROM public.children 
        WHERE children.id = child_anamnesis.child_id 
        AND children.user_id = auth.uid()
    )
);

-- Configurações de Privacidade (LGPD)
DROP POLICY IF EXISTS "brilha_privacy_all_own" ON public.user_privacy_settings;
CREATE POLICY "brilha_privacy_all_own" ON public.user_privacy_settings FOR ALL TO authenticated USING (auth.uid() = user_id);

-- Auditoria (Security)
DROP POLICY IF EXISTS "brilha_audit_select_own" ON public.audit_logs;
CREATE POLICY "brilha_audit_select_own" ON public.audit_logs FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- 3. PERMISSÕES DE EXECUÇÃO EM FUNÇÕES
-- Revogar execução pública de funções críticas
REVOKE EXECUTE ON FUNCTION public.get_auth_user_id() FROM public;
GRANT EXECUTE ON FUNCTION public.get_auth_user_id() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_auth_user_id() TO service_role;
