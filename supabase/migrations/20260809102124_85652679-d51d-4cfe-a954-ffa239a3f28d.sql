-- 1. search_path fixo
ALTER FUNCTION public.calcular_nivel_dominio(integer, integer) SET search_path = public;
ALTER FUNCTION public.reset_daily_coins() SET search_path = public;
ALTER FUNCTION public.update_updated_at_column() SET search_path = public;

-- 2. views com security_invoker
ALTER VIEW public.vw_sequencia_oficial_bncc SET (security_invoker = on);
ALTER VIEW public.vw_biblioteca_nacional_missoes SET (security_invoker = on);

-- 3. escritas restritas a admin/service_role
DROP POLICY IF EXISTS "Aulas IA insert autenticado" ON public.aulas_geradas_ia;
DROP POLICY IF EXISTS "Aulas IA update autenticado" ON public.aulas_geradas_ia;
CREATE POLICY "Aulas IA insert admin" ON public.aulas_geradas_ia
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Aulas IA update admin" ON public.aulas_geradas_ia
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
GRANT ALL ON public.aulas_geradas_ia TO service_role;

DROP POLICY IF EXISTS "rb_aulas_ia insert authenticated" ON public.rb_aulas_ia;
CREATE POLICY "rb_aulas_ia insert admin" ON public.rb_aulas_ia
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
GRANT ALL ON public.rb_aulas_ia TO service_role;

DROP POLICY IF EXISTS "Auth users can create templates" ON public.plano_anual_templates;
DROP POLICY IF EXISTS "Auth users can bump template usage" ON public.plano_anual_templates;
CREATE POLICY "Templates insert admin" ON public.plano_anual_templates
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Templates update admin" ON public.plano_anual_templates
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
GRANT ALL ON public.plano_anual_templates TO service_role;

-- 4. funções SECURITY DEFINER: fora do alcance de anônimos
DO $$
DECLARE r record; sig text;
BEGIN
  FOR r IN
    SELECT p.oid, p.proname, pg_get_function_identity_arguments(p.oid) AS args
    FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace
    WHERE n.nspname = 'public' AND p.prokind = 'f' AND p.prosecdef
      AND NOT EXISTS (
        SELECT 1 FROM pg_depend d JOIN pg_extension e ON e.oid = d.refobjid
        WHERE d.objid = p.oid
      )
  LOOP
    sig := format('public.%I(%s)', r.proname, r.args);
    EXECUTE format('REVOKE ALL ON FUNCTION %s FROM PUBLIC', sig);
    EXECUTE format('REVOKE ALL ON FUNCTION %s FROM anon', sig);
    EXECUTE format('REVOKE ALL ON FUNCTION %s FROM authenticated', sig);
    EXECUTE format('GRANT EXECUTE ON FUNCTION %s TO service_role', sig);
  END LOOP;
END $$;

-- funções realmente chamadas pelo app / usadas em policies
GRANT EXECUTE ON FUNCTION public.activate_user_mascot(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.add_brilhocoins(uuid, integer) TO authenticated;
GRANT EXECUTE ON FUNCTION public.approve_lesson_draft(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.dominio_habilidade(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.gain_active_mascot_xp(integer) TO authenticated;
GRANT EXECUTE ON FUNCTION public.pode_avancar_habilidade(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.pre_requisitos_pendentes(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.publish_lesson_with_version(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.recomendar_revisoes(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.recomendar_revisoes_auto(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.registrar_conclusao_aula(uuid, text, integer, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.registrar_conclusao_aula(uuid, text, integer, text, integer, integer, integer, jsonb) TO authenticated;
GRANT EXECUTE ON FUNCTION public.registrar_missao_pendente(text, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.restore_lesson_version(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.proxima_habilidade_oficial(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.rb_etapas_faltantes(uuid) TO authenticated;
