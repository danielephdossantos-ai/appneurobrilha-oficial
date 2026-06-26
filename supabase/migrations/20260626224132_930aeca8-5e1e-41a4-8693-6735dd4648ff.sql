
CREATE OR REPLACE FUNCTION public.grant_first_admin()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid uuid := auth.uid();
  v_existing_admin uuid;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'NOT_AUTHENTICATED';
  END IF;

  SELECT user_id INTO v_existing_admin FROM public.user_roles WHERE role = 'admin' LIMIT 1;

  IF v_existing_admin IS NOT NULL AND v_existing_admin <> v_uid THEN
    RAISE EXCEPTION 'ADMIN_ALREADY_EXISTS';
  END IF;

  INSERT INTO public.user_roles (user_id, role)
  VALUES (v_uid, 'admin')
  ON CONFLICT (user_id, role) DO NOTHING;

  RETURN 'ok';
END;
$$;

GRANT EXECUTE ON FUNCTION public.grant_first_admin() TO authenticated;
