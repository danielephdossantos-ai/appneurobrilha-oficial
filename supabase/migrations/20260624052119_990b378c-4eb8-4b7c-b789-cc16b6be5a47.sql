-- Recreate critical automatic setup functions with safe conflict handling
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    NEW.raw_user_meta_data->>'avatar_url'
  )
  ON CONFLICT (id) DO UPDATE
  SET
    display_name = COALESCE(public.profiles.display_name, EXCLUDED.display_name),
    avatar_url = COALESCE(public.profiles.avatar_url, EXCLUDED.avatar_url),
    updated_at = now();

  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.give_pip_to_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.user_mascots (user_id, mascot_id, is_active)
  VALUES (NEW.id, '00000000-0000-0000-0000-000000000001', true)
  ON CONFLICT DO NOTHING;

  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.handle_anamnese_completion()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  IF (NEW.anamnese_completa = true AND COALESCE(OLD.anamnese_completa, false) = false) THEN
    INSERT INTO public.child_journey (child_id)
    VALUES (NEW.id)
    ON CONFLICT (child_id) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$$;

-- Backfill any existing account/profile rows that are missing their required pairings
INSERT INTO public.profiles (id, display_name, avatar_url)
SELECT
  u.id,
  COALESCE(u.raw_user_meta_data->>'full_name', split_part(u.email, '@', 1)),
  u.raw_user_meta_data->>'avatar_url'
FROM auth.users u
LEFT JOIN public.profiles p ON p.id = u.id
WHERE p.id IS NULL;

INSERT INTO public.user_mascots (user_id, mascot_id, is_active)
SELECT p.id, '00000000-0000-0000-0000-000000000001', true
FROM public.profiles p
LEFT JOIN public.user_mascots um
  ON um.user_id = p.id AND um.mascot_id = '00000000-0000-0000-0000-000000000001'
WHERE um.id IS NULL;

INSERT INTO public.child_journey (child_id)
SELECT c.id
FROM public.children c
LEFT JOIN public.child_journey cj ON cj.child_id = c.id
WHERE c.anamnese_completa = true AND cj.id IS NULL;

-- Reattach missing triggers. These were absent, so new accounts were not initialized consistently.
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

DROP TRIGGER IF EXISTS on_profile_created_give_pip ON public.profiles;
CREATE TRIGGER on_profile_created_give_pip
  AFTER INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.give_pip_to_new_user();

DROP TRIGGER IF EXISTS on_children_anamnese_completed ON public.children;
CREATE TRIGGER on_children_anamnese_completed
  AFTER UPDATE OF anamnese_completa ON public.children
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_anamnese_completion();