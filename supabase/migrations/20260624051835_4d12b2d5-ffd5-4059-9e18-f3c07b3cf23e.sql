-- Backfill profile rows for any existing auth.users that don't have one yet
INSERT INTO public.profiles (id, display_name, avatar_url)
SELECT u.id, u.raw_user_meta_data->>'full_name', u.raw_user_meta_data->>'avatar_url'
FROM auth.users u
LEFT JOIN public.profiles p ON p.id = u.id
WHERE p.id IS NULL;

-- Ensure trigger on auth.users to auto-create profile (and downstream pip mascot via existing trigger on profiles)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();