-- A conta proprietária pode usar Administração, Família e Professor sem código,
-- assinatura ou vencimento. A autorização é aplicada no banco, não no cliente.

CREATE OR REPLACE FUNCTION public.ensure_neurobrilha_owner_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
  IF lower(coalesce(NEW.email, '')) = 'neurobrilha@gmail.com' THEN
    INSERT INTO public.user_roles(user_id, role)
    VALUES (NEW.id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;

    INSERT INTO public.teacher_profiles(
      user_id, display_name, school_name, status, access_expires_at, access_source
    ) VALUES (
      NEW.id, 'NeuroBrilha', 'NeuroBrilha Kids', 'active', '2099-12-31 23:59:59+00', 'admin_code'
    )
    ON CONFLICT (user_id) DO UPDATE SET
      status = 'active',
      access_expires_at = '2099-12-31 23:59:59+00',
      updated_at = now();
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS ensure_neurobrilha_owner_access_trigger ON auth.users;
CREATE TRIGGER ensure_neurobrilha_owner_access_trigger
AFTER INSERT OR UPDATE OF email ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.ensure_neurobrilha_owner_access();

-- Corrige imediatamente a conta caso ela já exista antes desta migration.
INSERT INTO public.user_roles(user_id, role)
SELECT id, 'admin'::public.app_role
FROM auth.users
WHERE lower(email) = 'neurobrilha@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;

INSERT INTO public.teacher_profiles(
  user_id, display_name, school_name, status, access_expires_at, access_source
)
SELECT id, 'NeuroBrilha', 'NeuroBrilha Kids', 'active',
       '2099-12-31 23:59:59+00', 'admin_code'
FROM auth.users
WHERE lower(email) = 'neurobrilha@gmail.com'
ON CONFLICT (user_id) DO UPDATE SET
  status = 'active',
  access_expires_at = '2099-12-31 23:59:59+00',
  updated_at = now();

REVOKE ALL ON FUNCTION public.ensure_neurobrilha_owner_access() FROM PUBLIC;

