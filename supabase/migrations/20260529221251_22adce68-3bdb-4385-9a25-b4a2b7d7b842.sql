-- 1. TABELAS DE SUPORTE LGPD
CREATE TABLE IF NOT EXISTS public.user_privacy_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
    terms_accepted BOOLEAN DEFAULT FALSE,
    marketing_consent BOOLEAN DEFAULT FALSE,
    analytics_consent BOOLEAN DEFAULT FALSE,
    data_usage_consent BOOLEAN DEFAULT FALSE,
    parental_consent_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    action TEXT NOT NULL,
    module TEXT NOT NULL,
    ip_address TEXT,
    user_agent TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 2. ATIVAR RLS EM MASSA
DO $$ 
DECLARE 
    r RECORD;
BEGIN
    FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') 
    LOOP
        EXECUTE 'ALTER TABLE public.' || quote_ident(r.tablename) || ' ENABLE ROW LEVEL SECURITY;';
    END LOOP;
END $$;

-- 3. PERMISSÕES DE ROLE
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM anon;
GRANT SELECT ON public.activities TO authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;

-- 4. POLÍTICAS DE SEGURANÇA (USANDO NOMES ÚNICOS PARA EVITAR CONFLITOS)

-- Profiles
DROP POLICY IF EXISTS "brilha_profiles_select_own" ON public.profiles;
CREATE POLICY "brilha_profiles_select_own" ON public.profiles FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "brilha_profiles_update_own" ON public.profiles;
CREATE POLICY "brilha_profiles_update_own" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Children (Gestão Parental)
DROP POLICY IF EXISTS "brilha_children_all_own" ON public.children;
CREATE POLICY "brilha_children_all_own" ON public.children FOR ALL USING (auth.uid() = user_id);

-- Anamnese (Dados Sensíveis)
DROP POLICY IF EXISTS "brilha_anamnesis_all_own" ON public.child_anamnesis;
CREATE POLICY "brilha_anamnesis_all_own" ON public.child_anamnesis FOR ALL USING (
    EXISTS (
        SELECT 1 FROM public.children 
        WHERE children.id = child_anamnesis.child_id 
        AND children.user_id = auth.uid()
    )
);

-- Logs de Atividade
DROP POLICY IF EXISTS "brilha_activity_logs_all_own" ON public.activity_logs;
CREATE POLICY "brilha_activity_logs_all_own" ON public.activity_logs FOR ALL USING (
    EXISTS (
        SELECT 1 FROM public.children 
        WHERE children.id = activity_logs.child_id 
        AND children.user_id = auth.uid()
    )
);

-- Privacidade
DROP POLICY IF EXISTS "brilha_privacy_all_own" ON public.user_privacy_settings;
CREATE POLICY "brilha_privacy_all_own" ON public.user_privacy_settings FOR ALL USING (auth.uid() = user_id);

-- Auditoria
DROP POLICY IF EXISTS "brilha_audit_select_own" ON public.audit_logs;
CREATE POLICY "brilha_audit_select_own" ON public.audit_logs FOR SELECT USING (auth.uid() = user_id);

-- 5. FUNÇÕES DE SUPORTE
CREATE OR REPLACE FUNCTION public.get_auth_user_id() 
RETURNS UUID AS $$
  SELECT auth.uid();
$$ LANGUAGE sql STABLE;
