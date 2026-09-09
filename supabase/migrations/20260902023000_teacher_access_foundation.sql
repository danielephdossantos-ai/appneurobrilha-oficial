-- Área do Professor: identidade, ativação por código e vínculo consentido com alunos.
-- Códigos nunca são armazenados em texto puro. O valor legível só é devolvido
-- ao administrador no momento da geração.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.teacher_profiles (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text,
  school_name text,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'expired')),
  access_expires_at timestamptz NOT NULL DEFAULT (now() + interval '1 year'),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.teacher_access_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code_hash text NOT NULL UNIQUE,
  batch_id uuid NOT NULL,
  expires_at timestamptz NOT NULL,
  redeemed_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  redeemed_at timestamptz,
  revoked_at timestamptz,
  created_by uuid NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
  created_at timestamptz NOT NULL DEFAULT now(),
  CHECK ((redeemed_by IS NULL) = (redeemed_at IS NULL))
);

CREATE TABLE IF NOT EXISTS public.teacher_student_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_user_id uuid NOT NULL REFERENCES public.teacher_profiles(user_id) ON DELETE CASCADE,
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  guardian_user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'revoked', 'expired')),
  valid_until date NOT NULL DEFAULT ((current_date + interval '1 year')::date),
  consented_at timestamptz NOT NULL DEFAULT now(),
  revoked_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (teacher_user_id, child_id),
  CHECK (valid_until <= ((current_date + interval '1 year')::date))
);

CREATE TABLE IF NOT EXISTS public.teacher_student_invite_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code_hash text NOT NULL UNIQUE,
  teacher_user_id uuid NOT NULL REFERENCES public.teacher_profiles(user_id) ON DELETE CASCADE,
  batch_id uuid NOT NULL,
  expires_at timestamptz NOT NULL,
  redeemed_child_id uuid REFERENCES public.children(id) ON DELETE SET NULL,
  redeemed_guardian_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  redeemed_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  CHECK ((redeemed_child_id IS NULL AND redeemed_guardian_id IS NULL AND redeemed_at IS NULL)
      OR (redeemed_child_id IS NOT NULL AND redeemed_guardian_id IS NOT NULL AND redeemed_at IS NOT NULL))
);

CREATE INDEX IF NOT EXISTS teacher_access_codes_batch_idx
  ON public.teacher_access_codes(batch_id);
CREATE INDEX IF NOT EXISTS teacher_student_links_teacher_idx
  ON public.teacher_student_links(teacher_user_id, status, valid_until);
CREATE INDEX IF NOT EXISTS teacher_student_links_guardian_idx
  ON public.teacher_student_links(guardian_user_id, status);

ALTER TABLE public.teacher_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teacher_access_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teacher_student_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teacher_student_invite_codes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Teachers read own profile" ON public.teacher_profiles;
CREATE POLICY "Teachers read own profile" ON public.teacher_profiles
  FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Teachers update own basic profile" ON public.teacher_profiles;
CREATE POLICY "Teachers update own basic profile" ON public.teacher_profiles
  FOR UPDATE TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'))
  WITH CHECK (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins manage teacher profiles" ON public.teacher_profiles;
CREATE POLICY "Admins manage teacher profiles" ON public.teacher_profiles
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- A tabela de códigos é deliberadamente invisível para usuários comuns.
DROP POLICY IF EXISTS "Admins manage teacher access codes" ON public.teacher_access_codes;
CREATE POLICY "Admins manage teacher access codes" ON public.teacher_access_codes
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Teachers read consented students" ON public.teacher_student_links;
CREATE POLICY "Teachers read consented students" ON public.teacher_student_links
  FOR SELECT TO authenticated
  USING (
    public.has_role(auth.uid(), 'admin')
    OR guardian_user_id = auth.uid()
    OR (
      teacher_user_id = auth.uid()
      AND status = 'active'
      AND valid_until >= current_date
    )
  );

DROP POLICY IF EXISTS "Guardians create student links" ON public.teacher_student_links;
CREATE POLICY "Guardians create student links" ON public.teacher_student_links
  FOR INSERT TO authenticated
  WITH CHECK (
    public.has_role(auth.uid(), 'admin')
    OR (
      guardian_user_id = auth.uid()
      AND EXISTS (
        SELECT 1 FROM public.children c
        WHERE c.id = child_id AND c.user_id = auth.uid()
      )
    )
  );

DROP POLICY IF EXISTS "Guardians renew or revoke student links" ON public.teacher_student_links;
CREATE POLICY "Guardians renew or revoke student links" ON public.teacher_student_links
  FOR UPDATE TO authenticated
  USING (guardian_user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'))
  WITH CHECK (guardian_user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Guardians delete student links" ON public.teacher_student_links;
CREATE POLICY "Guardians delete student links" ON public.teacher_student_links
  FOR DELETE TO authenticated
  USING (guardian_user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins manage student invite codes" ON public.teacher_student_invite_codes;
CREATE POLICY "Admins manage student invite codes" ON public.teacher_student_invite_codes
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.redeem_teacher_access_code(raw_code text)
RETURNS timestamptz
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  code_row public.teacher_access_codes%ROWTYPE;
  normalized text := upper(regexp_replace(coalesce(raw_code, ''), '[^A-Z0-9]', '', 'g'));
  new_expiry timestamptz := now() + interval '1 year';
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

  UPDATE public.teacher_access_codes
  SET redeemed_by = auth.uid(), redeemed_at = now()
  WHERE id = code_row.id;

  INSERT INTO public.teacher_profiles(user_id, status, access_expires_at)
  VALUES (auth.uid(), 'active', new_expiry)
  ON CONFLICT (user_id) DO UPDATE SET
    status = 'active', access_expires_at = new_expiry, updated_at = now();

  RETURN new_expiry;
END;
$$;

CREATE OR REPLACE FUNCTION public.admin_generate_teacher_codes(code_count integer DEFAULT 100)
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
  IF code_count < 1 OR code_count > 500 THEN RAISE EXCEPTION 'INVALID_COUNT'; END IF;

  FOR i IN 1..code_count LOOP
    generated_code := 'NBPROF' || upper(encode(gen_random_bytes(9), 'hex'));
    INSERT INTO public.teacher_access_codes(code_hash, batch_id, expires_at, created_by)
    VALUES (encode(digest(generated_code, 'sha256'), 'hex'), generated_batch, generated_expiry, auth.uid());
    code := generated_code;
    expires_at := generated_expiry;
    batch_id := generated_batch;
    RETURN NEXT;
  END LOOP;
END;
$$;

CREATE OR REPLACE FUNCTION public.teacher_generate_student_invites(code_count integer DEFAULT 1)
RETURNS TABLE(code text, expires_at timestamptz, batch_id uuid)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  generated_code text;
  generated_batch uuid := gen_random_uuid();
  generated_expiry timestamptz := now() + interval '30 days';
  i integer;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'AUTH_REQUIRED'; END IF;
  IF code_count < 1 OR code_count > 100 THEN RAISE EXCEPTION 'INVALID_COUNT'; END IF;
  IF NOT public.has_role(auth.uid(), 'admin') AND NOT EXISTS (
    SELECT 1 FROM public.teacher_profiles p
    WHERE p.user_id = auth.uid() AND p.status = 'active' AND p.access_expires_at >= now()
  ) THEN RAISE EXCEPTION 'TEACHER_ACCESS_REQUIRED'; END IF;

  FOR i IN 1..code_count LOOP
    generated_code := 'NBALUNO' || upper(encode(gen_random_bytes(8), 'hex'));
    INSERT INTO public.teacher_student_invite_codes
      (code_hash, teacher_user_id, batch_id, expires_at)
    VALUES
      (encode(digest(generated_code, 'sha256'), 'hex'), auth.uid(), generated_batch, generated_expiry);
    code := generated_code;
    expires_at := generated_expiry;
    batch_id := generated_batch;
    RETURN NEXT;
  END LOOP;
END;
$$;

CREATE OR REPLACE FUNCTION public.guardian_redeem_student_invite(raw_code text, selected_child_id uuid)
RETURNS TABLE(teacher_name text, link_valid_until date)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  invite_row public.teacher_student_invite_codes%ROWTYPE;
  normalized text := upper(regexp_replace(coalesce(raw_code, ''), '[^A-Z0-9]', '', 'g'));
  new_valid_until date := ((current_date + interval '1 year')::date);
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'AUTH_REQUIRED'; END IF;
  IF NOT EXISTS (
    SELECT 1 FROM public.children c
    WHERE c.id = selected_child_id AND c.user_id = auth.uid()
  ) THEN RAISE EXCEPTION 'CHILD_NOT_OWNED'; END IF;

  SELECT * INTO invite_row FROM public.teacher_student_invite_codes
  WHERE code_hash = encode(digest(normalized, 'sha256'), 'hex') FOR UPDATE;
  IF NOT FOUND OR invite_row.revoked_at IS NOT NULL OR invite_row.redeemed_at IS NOT NULL
     OR invite_row.expires_at < now() THEN RAISE EXCEPTION 'INVALID_OR_EXPIRED_CODE'; END IF;
  IF NOT EXISTS (
    SELECT 1 FROM public.teacher_profiles p
    WHERE p.user_id = invite_row.teacher_user_id AND p.status = 'active' AND p.access_expires_at >= now()
  ) THEN RAISE EXCEPTION 'TEACHER_ACCESS_INACTIVE'; END IF;

  INSERT INTO public.teacher_student_links
    (teacher_user_id, child_id, guardian_user_id, status, valid_until)
  VALUES
    (invite_row.teacher_user_id, selected_child_id, auth.uid(), 'active', new_valid_until)
  ON CONFLICT (teacher_user_id, child_id) DO UPDATE SET
    guardian_user_id = auth.uid(), status = 'active', valid_until = new_valid_until,
    consented_at = now(), revoked_at = NULL, updated_at = now();

  UPDATE public.teacher_student_invite_codes SET
    redeemed_child_id = selected_child_id, redeemed_guardian_id = auth.uid(), redeemed_at = now()
  WHERE id = invite_row.id;

  RETURN QUERY SELECT coalesce(p.display_name, 'Professor(a)'), new_valid_until
  FROM public.teacher_profiles p WHERE p.user_id = invite_row.teacher_user_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.teacher_list_students()
RETURNS TABLE(link_id uuid, child_id uuid, child_name text, school_year text, valid_until date)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT l.id, c.id, c.nome, c.serie, l.valid_until
  FROM public.teacher_student_links l JOIN public.children c ON c.id = l.child_id
  WHERE l.teacher_user_id = auth.uid() AND l.status = 'active' AND l.valid_until >= current_date
  ORDER BY c.nome;
$$;

CREATE OR REPLACE FUNCTION public.guardian_list_teacher_links(selected_child_id uuid)
RETURNS TABLE(link_id uuid, teacher_name text, status text, valid_until date)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT l.id, coalesce(p.display_name, 'Professor(a)'), l.status, l.valid_until
  FROM public.teacher_student_links l JOIN public.teacher_profiles p ON p.user_id = l.teacher_user_id
  WHERE l.child_id = selected_child_id AND l.guardian_user_id = auth.uid()
    AND EXISTS (SELECT 1 FROM public.children c WHERE c.id = selected_child_id AND c.user_id = auth.uid())
  ORDER BY l.created_at DESC;
$$;

REVOKE ALL ON public.teacher_access_codes FROM anon, authenticated;
REVOKE ALL ON public.teacher_student_invite_codes FROM anon, authenticated;
REVOKE ALL ON FUNCTION public.admin_generate_teacher_codes(integer) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.redeem_teacher_access_code(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.admin_generate_teacher_codes(integer) TO authenticated;
GRANT EXECUTE ON FUNCTION public.redeem_teacher_access_code(text) TO authenticated;
REVOKE ALL ON FUNCTION public.teacher_generate_student_invites(integer) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.guardian_redeem_student_invite(text, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.teacher_list_students() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.guardian_list_teacher_links(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.teacher_generate_student_invites(integer) TO authenticated;
GRANT EXECUTE ON FUNCTION public.guardian_redeem_student_invite(text, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.teacher_list_students() TO authenticated;
GRANT EXECUTE ON FUNCTION public.guardian_list_teacher_links(uuid) TO authenticated;
GRANT SELECT, INSERT, DELETE ON public.teacher_profiles TO authenticated;
GRANT UPDATE(display_name, school_name) ON public.teacher_profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.teacher_student_links TO authenticated;
