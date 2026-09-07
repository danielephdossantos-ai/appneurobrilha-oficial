-- Área do Professor · Perfil Pedagógico e Funcional consentido.
-- Registra observações e apoios educacionais; não é prontuário e não produz diagnóstico.

ALTER TABLE public.teacher_student_links
  ADD COLUMN IF NOT EXISTS pedagogical_profile_consented_at timestamptz,
  ADD COLUMN IF NOT EXISTS pedagogical_profile_revoked_at timestamptz;

CREATE TABLE IF NOT EXISTS public.teacher_student_support_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  link_id uuid NOT NULL UNIQUE REFERENCES public.teacher_student_links(id) ON DELETE CASCADE,
  learning_strengths text[] NOT NULL DEFAULT '{}',
  support_needs text[] NOT NULL DEFAULT '{}',
  effective_strategies text[] NOT NULL DEFAULT '{}',
  avoided_strategies text[] NOT NULL DEFAULT '{}',
  preferred_response_modes text[] NOT NULL DEFAULT '{}',
  communication_supports text[] NOT NULL DEFAULT '{}',
  sensory_environment_supports text[] NOT NULL DEFAULT '{}',
  routine_and_attention_supports text[] NOT NULL DEFAULT '{}',
  literacy_supports text[] NOT NULL DEFAULT '{}',
  mathematics_supports text[] NOT NULL DEFAULT '{}',
  observation_context text,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active','archived')),
  reviewed_at timestamptz NOT NULL DEFAULT now(),
  reviewed_by uuid NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (observation_context IS NULL OR char_length(observation_context) <= 240),
  CHECK (cardinality(learning_strengths) <= 20 AND cardinality(support_needs) <= 20),
  CHECK (cardinality(effective_strategies) <= 20 AND cardinality(avoided_strategies) <= 20),
  CHECK (cardinality(preferred_response_modes) <= 20 AND cardinality(communication_supports) <= 20),
  CHECK (cardinality(sensory_environment_supports) <= 20 AND cardinality(routine_and_attention_supports) <= 20),
  CHECK (cardinality(literacy_supports) <= 20 AND cardinality(mathematics_supports) <= 20)
);

CREATE TABLE IF NOT EXISTS public.teacher_student_support_profile_revisions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid NOT NULL REFERENCES public.teacher_student_support_profiles(id) ON DELETE CASCADE,
  actor_user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
  action text NOT NULL CHECK (action IN ('created','updated','archived','consent_revoked')),
  changed_fields text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS teacher_student_support_profiles_link_idx
  ON public.teacher_student_support_profiles(link_id,status);
CREATE INDEX IF NOT EXISTS teacher_student_support_profile_revisions_profile_idx
  ON public.teacher_student_support_profile_revisions(profile_id,created_at DESC);

ALTER TABLE public.teacher_student_support_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teacher_student_support_profile_revisions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Consented parties read pedagogical profile" ON public.teacher_student_support_profiles;
CREATE POLICY "Consented parties read pedagogical profile" ON public.teacher_student_support_profiles
  FOR SELECT TO authenticated USING (
    public.has_role(auth.uid(),'admin') OR EXISTS (
      SELECT 1 FROM public.teacher_student_links l
      WHERE l.id=link_id AND l.status='active' AND l.valid_until>=current_date
        AND l.pedagogical_profile_consented_at IS NOT NULL
        AND l.pedagogical_profile_revoked_at IS NULL
        AND (l.teacher_user_id=auth.uid() OR l.guardian_user_id=auth.uid())
    )
  );

DROP POLICY IF EXISTS "Consented parties read profile revision metadata" ON public.teacher_student_support_profile_revisions;
CREATE POLICY "Consented parties read profile revision metadata" ON public.teacher_student_support_profile_revisions
  FOR SELECT TO authenticated USING (
    public.has_role(auth.uid(),'admin') OR EXISTS (
      SELECT 1 FROM public.teacher_student_support_profiles p
      JOIN public.teacher_student_links l ON l.id=p.link_id
      WHERE p.id=profile_id AND l.status='active' AND l.valid_until>=current_date
        AND l.pedagogical_profile_consented_at IS NOT NULL
        AND l.pedagogical_profile_revoked_at IS NULL
        AND (l.teacher_user_id=auth.uid() OR l.guardian_user_id=auth.uid())
    )
  );

CREATE OR REPLACE FUNCTION public.guardian_set_teacher_profile_consent(selected_link_id uuid, allow_profile boolean)
RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE profile_row public.teacher_student_support_profiles%ROWTYPE;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'AUTH_REQUIRED'; END IF;
  IF NOT EXISTS (SELECT 1 FROM public.teacher_student_links l WHERE l.id=selected_link_id AND l.guardian_user_id=auth.uid() AND l.status='active' AND l.valid_until>=current_date) THEN
    RAISE EXCEPTION 'ACTIVE_GUARDIAN_LINK_REQUIRED';
  END IF;
  UPDATE public.teacher_student_links SET
    pedagogical_profile_consented_at=CASE WHEN allow_profile THEN now() ELSE pedagogical_profile_consented_at END,
    pedagogical_profile_revoked_at=CASE WHEN allow_profile THEN NULL ELSE now() END,
    updated_at=now()
  WHERE id=selected_link_id;
  IF NOT allow_profile THEN
    UPDATE public.teacher_student_support_profiles SET status='archived',updated_at=now() WHERE link_id=selected_link_id RETURNING * INTO profile_row;
    IF FOUND THEN INSERT INTO public.teacher_student_support_profile_revisions(profile_id,actor_user_id,action,changed_fields) VALUES(profile_row.id,auth.uid(),'consent_revoked',ARRAY['status']); END IF;
  END IF;
  RETURN allow_profile;
END;
$$;

CREATE OR REPLACE FUNCTION public.teacher_save_student_support_profile(
  selected_link_id uuid,
  new_learning_strengths text[] DEFAULT '{}', new_support_needs text[] DEFAULT '{}',
  new_effective_strategies text[] DEFAULT '{}', new_avoided_strategies text[] DEFAULT '{}',
  new_preferred_response_modes text[] DEFAULT '{}', new_communication_supports text[] DEFAULT '{}',
  new_sensory_environment_supports text[] DEFAULT '{}', new_routine_and_attention_supports text[] DEFAULT '{}',
  new_literacy_supports text[] DEFAULT '{}', new_mathematics_supports text[] DEFAULT '{}',
  new_observation_context text DEFAULT NULL
) RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE saved_id uuid; existed boolean;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'AUTH_REQUIRED'; END IF;
  IF NOT EXISTS (SELECT 1 FROM public.teacher_student_links l JOIN public.teacher_profiles t ON t.user_id=l.teacher_user_id WHERE l.id=selected_link_id AND l.teacher_user_id=auth.uid() AND l.status='active' AND l.valid_until>=current_date AND l.pedagogical_profile_consented_at IS NOT NULL AND l.pedagogical_profile_revoked_at IS NULL AND t.status='active' AND t.access_expires_at>=now()) THEN
    RAISE EXCEPTION 'CONSENTED_ACTIVE_LINK_REQUIRED';
  END IF;
  IF char_length(coalesce(new_observation_context,''))>240 OR
     cardinality(coalesce(new_learning_strengths,'{}'))>20 OR cardinality(coalesce(new_support_needs,'{}'))>20 OR
     cardinality(coalesce(new_effective_strategies,'{}'))>20 OR cardinality(coalesce(new_avoided_strategies,'{}'))>20 OR
     cardinality(coalesce(new_preferred_response_modes,'{}'))>20 OR cardinality(coalesce(new_communication_supports,'{}'))>20 OR
     cardinality(coalesce(new_sensory_environment_supports,'{}'))>20 OR cardinality(coalesce(new_routine_and_attention_supports,'{}'))>20 OR
     cardinality(coalesce(new_literacy_supports,'{}'))>20 OR cardinality(coalesce(new_mathematics_supports,'{}'))>20 THEN RAISE EXCEPTION 'PROFILE_LIMIT_EXCEEDED'; END IF;
  existed:=EXISTS(SELECT 1 FROM public.teacher_student_support_profiles WHERE link_id=selected_link_id);
  INSERT INTO public.teacher_student_support_profiles(link_id,learning_strengths,support_needs,effective_strategies,avoided_strategies,preferred_response_modes,communication_supports,sensory_environment_supports,routine_and_attention_supports,literacy_supports,mathematics_supports,observation_context,status,reviewed_at,reviewed_by)
  VALUES(selected_link_id,coalesce(new_learning_strengths,'{}'),coalesce(new_support_needs,'{}'),coalesce(new_effective_strategies,'{}'),coalesce(new_avoided_strategies,'{}'),coalesce(new_preferred_response_modes,'{}'),coalesce(new_communication_supports,'{}'),coalesce(new_sensory_environment_supports,'{}'),coalesce(new_routine_and_attention_supports,'{}'),coalesce(new_literacy_supports,'{}'),coalesce(new_mathematics_supports,'{}'),nullif(btrim(new_observation_context),''),'active',now(),auth.uid())
  ON CONFLICT(link_id) DO UPDATE SET learning_strengths=EXCLUDED.learning_strengths,support_needs=EXCLUDED.support_needs,effective_strategies=EXCLUDED.effective_strategies,avoided_strategies=EXCLUDED.avoided_strategies,preferred_response_modes=EXCLUDED.preferred_response_modes,communication_supports=EXCLUDED.communication_supports,sensory_environment_supports=EXCLUDED.sensory_environment_supports,routine_and_attention_supports=EXCLUDED.routine_and_attention_supports,literacy_supports=EXCLUDED.literacy_supports,mathematics_supports=EXCLUDED.mathematics_supports,observation_context=EXCLUDED.observation_context,status='active',reviewed_at=now(),reviewed_by=auth.uid(),updated_at=now()
  RETURNING id INTO saved_id;
  INSERT INTO public.teacher_student_support_profile_revisions(profile_id,actor_user_id,action,changed_fields) VALUES(saved_id,auth.uid(),CASE WHEN existed THEN 'updated' ELSE 'created' END,ARRAY['learning_strengths','support_needs','effective_strategies','avoided_strategies','preferred_response_modes','communication_supports','sensory_environment_supports','routine_and_attention_supports','literacy_supports','mathematics_supports','observation_context']);
  RETURN saved_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.teacher_get_student_support_profile(selected_link_id uuid)
RETURNS SETOF public.teacher_student_support_profiles LANGUAGE sql SECURITY DEFINER SET search_path=public AS $$
  SELECT p.* FROM public.teacher_student_support_profiles p JOIN public.teacher_student_links l ON l.id=p.link_id JOIN public.teacher_profiles t ON t.user_id=l.teacher_user_id
  WHERE p.link_id=selected_link_id AND p.status='active' AND l.teacher_user_id=auth.uid() AND l.status='active' AND l.valid_until>=current_date AND l.pedagogical_profile_consented_at IS NOT NULL AND l.pedagogical_profile_revoked_at IS NULL AND t.status='active' AND t.access_expires_at>=now();
$$;

CREATE OR REPLACE FUNCTION public.guardian_list_teacher_profile_consents(selected_child_id uuid)
RETURNS TABLE(link_id uuid, profile_consented boolean, profile_consented_at timestamptz)
LANGUAGE sql SECURITY DEFINER SET search_path=public AS $$
  SELECT l.id,
    (l.pedagogical_profile_consented_at IS NOT NULL AND l.pedagogical_profile_revoked_at IS NULL),
    l.pedagogical_profile_consented_at
  FROM public.teacher_student_links l
  WHERE l.child_id=selected_child_id AND l.guardian_user_id=auth.uid()
    AND EXISTS (SELECT 1 FROM public.children c WHERE c.id=selected_child_id AND c.user_id=auth.uid());
$$;

CREATE OR REPLACE FUNCTION public.teacher_student_profile_access_status(selected_link_id uuid)
RETURNS TABLE(allowed boolean, reason text)
LANGUAGE sql SECURITY DEFINER SET search_path=public AS $$
  SELECT
    (l.status='active' AND l.valid_until>=current_date AND t.status='active' AND t.access_expires_at>=now()
      AND l.pedagogical_profile_consented_at IS NOT NULL AND l.pedagogical_profile_revoked_at IS NULL),
    CASE
      WHEN l.status<>'active' OR l.valid_until<current_date THEN 'LINK_INACTIVE'
      WHEN t.status<>'active' OR t.access_expires_at<now() THEN 'TEACHER_ACCESS_INACTIVE'
      WHEN l.pedagogical_profile_consented_at IS NULL OR l.pedagogical_profile_revoked_at IS NOT NULL THEN 'PROFILE_CONSENT_REQUIRED'
      ELSE 'ALLOWED'
    END
  FROM public.teacher_student_links l JOIN public.teacher_profiles t ON t.user_id=l.teacher_user_id
  WHERE l.id=selected_link_id AND l.teacher_user_id=auth.uid();
$$;

REVOKE ALL ON public.teacher_student_support_profiles FROM anon,authenticated;
REVOKE ALL ON public.teacher_student_support_profile_revisions FROM anon,authenticated;
GRANT SELECT ON public.teacher_student_support_profiles,public.teacher_student_support_profile_revisions TO authenticated;
REVOKE ALL ON FUNCTION public.guardian_set_teacher_profile_consent(uuid,boolean) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.teacher_save_student_support_profile(uuid,text[],text[],text[],text[],text[],text[],text[],text[],text[],text[],text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.teacher_get_student_support_profile(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.guardian_list_teacher_profile_consents(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.teacher_student_profile_access_status(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.guardian_set_teacher_profile_consent(uuid,boolean) TO authenticated;
GRANT EXECUTE ON FUNCTION public.teacher_save_student_support_profile(uuid,text[],text[],text[],text[],text[],text[],text[],text[],text[],text[],text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.teacher_get_student_support_profile(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.guardian_list_teacher_profile_consents(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.teacher_student_profile_access_status(uuid) TO authenticated;

COMMENT ON TABLE public.teacher_student_support_profiles IS 'Observações funcionais e apoios pedagógicos consentidos; não é prontuário e não produz diagnóstico.';
COMMENT ON COLUMN public.teacher_student_support_profiles.observation_context IS 'Contexto escolar breve e objetivo; proibido registrar diagnóstico, medicação ou relato íntimo.';
