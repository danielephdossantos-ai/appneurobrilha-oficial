
CREATE OR REPLACE FUNCTION public.grant_admin_to_neurobrilha()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF lower(NEW.email) = 'neurobrilha@gmail.com' THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin'::app_role)
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created_neurobrilha_admin ON auth.users;
CREATE TRIGGER on_auth_user_created_neurobrilha_admin
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.grant_admin_to_neurobrilha();

DROP TRIGGER IF EXISTS on_auth_user_updated_neurobrilha_admin ON auth.users;
CREATE TRIGGER on_auth_user_updated_neurobrilha_admin
AFTER UPDATE OF email, email_confirmed_at ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.grant_admin_to_neurobrilha();

-- Promove imediatamente se a conta já existe
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role FROM auth.users
WHERE lower(email) = 'neurobrilha@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;
