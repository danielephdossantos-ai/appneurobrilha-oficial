-- Make anamnese completion trigger safe for both new and updated child rows
CREATE OR REPLACE FUNCTION public.handle_anamnese_completion()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  IF NEW.anamnese_completa = true AND (
    TG_OP = 'INSERT' OR COALESCE(OLD.anamnese_completa, false) = false
  ) THEN
    INSERT INTO public.child_journey (child_id)
    VALUES (NEW.id)
    ON CONFLICT (child_id) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$$;

-- Keep one trigger per responsibility
DROP TRIGGER IF EXISTS on_children_anamnese_completed ON public.children;
DROP TRIGGER IF EXISTS on_anamnese_completion ON public.children;
DROP TRIGGER IF EXISTS on_child_creation_anamnese ON public.children;

CREATE TRIGGER on_children_anamnese_completed
  AFTER INSERT OR UPDATE OF anamnese_completa ON public.children
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_anamnese_completion();

DROP TRIGGER IF EXISTS on_profile_created_give_pip ON public.profiles;
DROP TRIGGER IF EXISTS tr_give_pip_on_profile_creation ON public.profiles;

CREATE TRIGGER on_profile_created_give_pip
  AFTER INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.give_pip_to_new_user();

-- Internal trigger functions should not be directly callable from the public API roles
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.give_pip_to_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_anamnese_completion() FROM PUBLIC, anon, authenticated;