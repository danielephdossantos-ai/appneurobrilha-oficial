-- Console administrativo da Área do Professor.
-- Mantém códigos legíveis apenas na resposta da geração; no banco fica somente o hash.

ALTER TABLE public.teacher_access_codes
  ADD COLUMN IF NOT EXISTS duration_days integer NOT NULL DEFAULT 365
    CHECK (duration_days BETWEEN 1 AND 730);

CREATE OR REPLACE FUNCTION public.redeem_teacher_access_code(raw_code text)
RETURNS timestamptz
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  code_row public.teacher_access_codes%ROWTYPE;
  normalized text := upper(regexp_replace(coalesce(raw_code, ''), '[^A-Z0-9]', '', 'g'));
  new_expiry timestamptz;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'AUTH_REQUIRED'; END IF;
  IF length(normalized) < 12 THEN RAISE EXCEPTION 'INVALID_CODE'; END IF;

  SELECT * INTO code_row
  FROM public.teacher_access_codes
  WHERE code_hash = encode(digest(normalized, 'sha256'), 'hex')
  FOR UPDATE;

  IF NOT FOUND OR code_row.revoked_at IS NOT NULL OR code_row.redeemed_at IS NOT NULL
     OR code_row.expires_at < now() THEN
    RAISE EXCEPTION 'INVALID_OR_EXPIRED_CODE';
  END IF;

  new_expiry := now() + make_interval(days => code_row.duration_days);

  UPDATE public.teacher_access_codes
  SET redeemed_by = auth.uid(), redeemed_at = now()
  WHERE id = code_row.id;

  INSERT INTO public.teacher_profiles(user_id, status, access_source, access_expires_at)
  VALUES (auth.uid(), 'active', 'admin_code', new_expiry)
  ON CONFLICT (user_id) DO UPDATE SET
    status = 'active', access_source = 'admin_code',
    access_expires_at = new_expiry, updated_at = now();

  RETURN new_expiry;
END;
$$;

CREATE OR REPLACE FUNCTION public.admin_generate_teacher_free_codes(
  code_count integer, duration_days integer
)
RETURNS TABLE(code text, expires_at timestamptz, batch_id uuid)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  generated_code text;
  generated_batch uuid := gen_random_uuid();
  generated_expiry timestamptz := now() + interval '1 year';
  i integer;
BEGIN
  IF auth.uid() IS NULL OR NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'FORBIDDEN';
  END IF;
  IF code_count < 1 OR code_count > 500 OR duration_days < 1 OR duration_days > 730 THEN
    RAISE EXCEPTION 'INVALID_ARGUMENT';
  END IF;

  FOR i IN 1..code_count LOOP
    generated_code := 'NBPROF' || upper(encode(gen_random_bytes(9), 'hex'));
    INSERT INTO public.teacher_access_codes
      (code_hash, batch_id, duration_days, expires_at, created_by)
    VALUES
      (encode(digest(generated_code, 'sha256'), 'hex'), generated_batch,
       duration_days, generated_expiry, auth.uid());
    code := generated_code;
    expires_at := generated_expiry;
    batch_id := generated_batch;
    RETURN NEXT;
  END LOOP;
END;
$$;

CREATE OR REPLACE FUNCTION public.admin_list_teacher_accounts()
RETURNS TABLE(
  user_id uuid,
  email text,
  display_name text,
  school_name text,
  professional_id text,
  status text,
  access_source text,
  access_expires_at timestamptz,
  active_paid_students integer,
  reached_four boolean,
  benefit_status text
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
  IF auth.uid() IS NULL OR NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'FORBIDDEN';
  END IF;

  RETURN QUERY
  SELECT p.user_id, u.email::text, p.display_name, p.school_name, p.professional_id,
    p.status, p.access_source, p.access_expires_at,
    coalesce(b.active_paid_students, 0)::integer,
    (b.reached_four_at IS NOT NULL), coalesce(b.status, 'pending')::text
  FROM public.teacher_profiles p
  LEFT JOIN auth.users u ON u.id = p.user_id
  LEFT JOIN public.teacher_referral_benefits b
    ON b.teacher_user_id = p.user_id
   AND b.school_year = extract(year from current_date)::integer
  ORDER BY p.updated_at DESC, p.created_at DESC;
END;
$$;

CREATE OR REPLACE FUNCTION public.admin_set_teacher_access(
  target_user_id uuid, requested_action text, duration_days integer DEFAULT 365
)
RETURNS timestamptz
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE new_expiry timestamptz;
BEGIN
  IF auth.uid() IS NULL OR NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'FORBIDDEN';
  END IF;
  IF requested_action NOT IN ('suspend', 'renew') OR duration_days < 1 OR duration_days > 730 THEN
    RAISE EXCEPTION 'INVALID_ARGUMENT';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM public.teacher_profiles WHERE user_id = target_user_id) THEN
    RAISE EXCEPTION 'TEACHER_NOT_FOUND';
  END IF;

  IF requested_action = 'suspend' THEN
    new_expiry := now();
    UPDATE public.teacher_profiles
      SET status = 'suspended', access_source = 'admin_code',
          access_expires_at = new_expiry, updated_at = now()
      WHERE user_id = target_user_id;
  ELSE
    new_expiry := now() + make_interval(days => duration_days);
    UPDATE public.teacher_profiles
      SET status = 'active', access_source = 'admin_code',
          access_expires_at = new_expiry, updated_at = now()
      WHERE user_id = target_user_id;
  END IF;

  RETURN new_expiry;
END;
$$;

REVOKE ALL ON FUNCTION public.admin_generate_teacher_free_codes(integer, integer) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.admin_list_teacher_accounts() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.admin_set_teacher_access(uuid, text, integer) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.admin_generate_teacher_free_codes(integer, integer) TO authenticated;
GRANT EXECUTE ON FUNCTION public.admin_list_teacher_accounts() TO authenticated;
GRANT EXECUTE ON FUNCTION public.admin_set_teacher_access(uuid, text, integer) TO authenticated;

