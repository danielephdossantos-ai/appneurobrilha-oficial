-- Benefício docente por alunos pagantes e códigos gratuitos administráveis.

ALTER TABLE public.teacher_profiles
  ADD COLUMN IF NOT EXISTS professional_id text,
  ADD COLUMN IF NOT EXISTS subjects text[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS access_source text NOT NULL DEFAULT 'code'
    CHECK (access_source IN ('code','admin_code','referral','paid'));

CREATE TABLE IF NOT EXISTS public.child_access_entitlements (
  child_id uuid PRIMARY KEY REFERENCES public.children(id) ON DELETE CASCADE,
  status text NOT NULL CHECK (status IN ('active','past_due','expired','cancelled')),
  source text NOT NULL CHECK (source IN ('paid','admin_code','trial')),
  active_until timestamptz NOT NULL,
  provider_reference text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.child_free_access_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code_hash text NOT NULL UNIQUE,
  batch_id uuid NOT NULL,
  duration_days integer NOT NULL CHECK (duration_days BETWEEN 1 AND 730),
  expires_at timestamptz NOT NULL,
  redeemed_child_id uuid REFERENCES public.children(id) ON DELETE SET NULL,
  redeemed_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  redeemed_at timestamptz,
  revoked_at timestamptz,
  created_by uuid NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.teacher_referral_benefits (
  teacher_user_id uuid NOT NULL REFERENCES public.teacher_profiles(user_id) ON DELETE CASCADE,
  school_year integer NOT NULL,
  reached_four_at timestamptz,
  active_paid_students integer NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','active','inactive')),
  last_nonzero_at timestamptz,
  notified_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (teacher_user_id, school_year)
);

ALTER TABLE public.child_access_entitlements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.child_free_access_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teacher_referral_benefits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Families read child entitlement" ON public.child_access_entitlements
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM public.children c WHERE c.id = child_id AND c.user_id = auth.uid())
    OR public.has_role(auth.uid(), 'admin')
  );
CREATE POLICY "Admins manage child entitlements" ON public.child_access_entitlements
  FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins manage child free codes" ON public.child_free_access_codes
  FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Teachers read own benefit" ON public.teacher_referral_benefits
  FOR SELECT TO authenticated USING (
    teacher_user_id = auth.uid() OR public.has_role(auth.uid(), 'admin')
  );
CREATE POLICY "Admins manage teacher benefits" ON public.teacher_referral_benefits
  FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.admin_generate_child_free_codes(
  code_count integer DEFAULT 100, duration_days integer DEFAULT 365
)
RETURNS TABLE(code text, expires_at timestamptz, batch_id uuid)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, extensions AS $$
DECLARE
  generated_code text; generated_batch uuid := gen_random_uuid();
  generated_expiry timestamptz := now() + interval '1 year'; i integer;
BEGIN
  IF auth.uid() IS NULL OR NOT public.has_role(auth.uid(), 'admin') THEN RAISE EXCEPTION 'FORBIDDEN'; END IF;
  IF code_count < 1 OR code_count > 500 OR duration_days < 1 OR duration_days > 730 THEN RAISE EXCEPTION 'INVALID_ARGUMENT'; END IF;
  FOR i IN 1..code_count LOOP
    generated_code := 'NBALUNOGRATIS' || upper(encode(gen_random_bytes(8), 'hex'));
    INSERT INTO public.child_free_access_codes(code_hash,batch_id,duration_days,expires_at,created_by)
    VALUES (encode(digest(generated_code,'sha256'),'hex'),generated_batch,duration_days,generated_expiry,auth.uid());
    code := generated_code; expires_at := generated_expiry; batch_id := generated_batch; RETURN NEXT;
  END LOOP;
END; $$;

CREATE OR REPLACE FUNCTION public.guardian_redeem_child_free_code(raw_code text, selected_child_id uuid)
RETURNS timestamptz
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, extensions AS $$
DECLARE
  code_row public.child_free_access_codes%ROWTYPE;
  normalized text := upper(regexp_replace(coalesce(raw_code,''),'[^A-Z0-9]','','g'));
  entitlement_end timestamptz;
BEGIN
  IF auth.uid() IS NULL OR NOT EXISTS (
    SELECT 1 FROM public.children c WHERE c.id=selected_child_id AND c.user_id=auth.uid()
  ) THEN RAISE EXCEPTION 'CHILD_NOT_OWNED'; END IF;
  SELECT * INTO code_row FROM public.child_free_access_codes
  WHERE code_hash=encode(digest(normalized,'sha256'),'hex') FOR UPDATE;
  IF NOT FOUND OR code_row.revoked_at IS NOT NULL OR code_row.redeemed_at IS NOT NULL OR code_row.expires_at<now()
    THEN RAISE EXCEPTION 'INVALID_OR_EXPIRED_CODE'; END IF;
  entitlement_end := now() + make_interval(days => code_row.duration_days);
  INSERT INTO public.child_access_entitlements(child_id,status,source,active_until)
  VALUES(selected_child_id,'active','admin_code',entitlement_end)
  ON CONFLICT(child_id) DO UPDATE SET status='active',source='admin_code',active_until=entitlement_end,updated_at=now();
  UPDATE public.child_free_access_codes SET redeemed_child_id=selected_child_id,redeemed_by=auth.uid(),redeemed_at=now()
  WHERE id=code_row.id;
  RETURN entitlement_end;
END; $$;

CREATE OR REPLACE FUNCTION public.recalculate_teacher_referral_benefit(target_teacher uuid)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  current_school_year integer := extract(year from current_date)::integer;
  paid_count integer; prior_reached timestamptz; prior_notified timestamptz; new_status text;
BEGIN
  SELECT count(DISTINCT l.child_id)::integer INTO paid_count
  FROM public.teacher_student_links l
  JOIN public.child_access_entitlements e ON e.child_id=l.child_id
  WHERE l.teacher_user_id=target_teacher AND l.status='active' AND l.valid_until>=current_date
    AND e.status='active' AND e.source='paid' AND e.active_until>=now();

  SELECT reached_four_at,notified_at INTO prior_reached,prior_notified
  FROM public.teacher_referral_benefits WHERE teacher_user_id=target_teacher AND school_year=current_school_year;
  IF paid_count>=4 AND prior_reached IS NULL THEN prior_reached:=now(); END IF;
  new_status := CASE WHEN prior_reached IS NULL THEN 'pending' WHEN paid_count>0 THEN 'active' ELSE 'inactive' END;

  INSERT INTO public.teacher_referral_benefits
    (teacher_user_id,school_year,reached_four_at,active_paid_students,status,last_nonzero_at,notified_at)
  VALUES(target_teacher,current_school_year,prior_reached,paid_count,new_status,
    CASE WHEN paid_count>0 THEN now() END,prior_notified)
  ON CONFLICT(teacher_user_id,school_year) DO UPDATE SET
    reached_four_at=excluded.reached_four_at,active_paid_students=paid_count,status=new_status,
    last_nonzero_at=CASE WHEN paid_count>0 THEN now() ELSE teacher_referral_benefits.last_nonzero_at END,updated_at=now();

  IF new_status='active' AND prior_reached IS NOT NULL THEN
    UPDATE public.teacher_profiles SET status='active',access_source='referral',
      access_expires_at=make_timestamptz(current_school_year+1,1,31,23,59,59),updated_at=now()
    WHERE user_id=target_teacher AND (access_source='referral' OR access_expires_at<now());
    IF prior_notified IS NULL THEN
      INSERT INTO public.notifications(user_id,title,message,type)
      VALUES(target_teacher,'Você desbloqueou o acesso gratuito! 🎉',
        'Quatro alunos assinantes já estão aprendendo com você. Obrigado por fazer parte da rede NeuroBrilha Kids e ajudar a tornar o ensino mais inclusivo e acolhedor.','amigo');
      UPDATE public.teacher_referral_benefits SET notified_at=now()
      WHERE teacher_user_id=target_teacher AND school_year=current_school_year;
    END IF;
  ELSIF new_status='inactive' THEN
    UPDATE public.teacher_profiles SET status='expired',updated_at=now()
    WHERE user_id=target_teacher AND access_source='referral';
  END IF;
END; $$;

CREATE OR REPLACE FUNCTION public.teacher_access_summary()
RETURNS TABLE(active_paid_students integer,reached_four boolean,benefit_status text,school_year integer)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  PERFORM public.recalculate_teacher_referral_benefit(auth.uid());
  RETURN QUERY SELECT b.active_paid_students,b.reached_four_at IS NOT NULL,b.status,b.school_year
  FROM public.teacher_referral_benefits b
  WHERE b.teacher_user_id=auth.uid() AND b.school_year=extract(year from current_date)::integer;
END; $$;

CREATE OR REPLACE FUNCTION public.refresh_teacher_benefit_from_link()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
BEGIN
  PERFORM public.recalculate_teacher_referral_benefit(coalesce(NEW.teacher_user_id,OLD.teacher_user_id));
  RETURN coalesce(NEW,OLD);
END; $$;

CREATE OR REPLACE FUNCTION public.refresh_teacher_benefits_from_entitlement()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE teacher_id uuid;
BEGIN
  FOR teacher_id IN SELECT DISTINCT teacher_user_id FROM public.teacher_student_links
    WHERE child_id=coalesce(NEW.child_id,OLD.child_id)
  LOOP PERFORM public.recalculate_teacher_referral_benefit(teacher_id); END LOOP;
  RETURN coalesce(NEW,OLD);
END; $$;

DROP TRIGGER IF EXISTS teacher_link_refresh_benefit ON public.teacher_student_links;
CREATE TRIGGER teacher_link_refresh_benefit AFTER INSERT OR UPDATE OR DELETE ON public.teacher_student_links
FOR EACH ROW EXECUTE FUNCTION public.refresh_teacher_benefit_from_link();
DROP TRIGGER IF EXISTS child_entitlement_refresh_teacher_benefit ON public.child_access_entitlements;
CREATE TRIGGER child_entitlement_refresh_teacher_benefit AFTER INSERT OR UPDATE OR DELETE ON public.child_access_entitlements
FOR EACH ROW EXECUTE FUNCTION public.refresh_teacher_benefits_from_entitlement();

REVOKE ALL ON public.child_free_access_codes FROM anon,authenticated;
REVOKE ALL ON FUNCTION public.admin_generate_child_free_codes(integer,integer) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.guardian_redeem_child_free_code(text,uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.recalculate_teacher_referral_benefit(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.teacher_access_summary() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.admin_generate_child_free_codes(integer,integer) TO authenticated;
GRANT EXECUTE ON FUNCTION public.guardian_redeem_child_free_code(text,uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.teacher_access_summary() TO authenticated;
GRANT SELECT ON public.child_access_entitlements,public.teacher_referral_benefits TO authenticated;
