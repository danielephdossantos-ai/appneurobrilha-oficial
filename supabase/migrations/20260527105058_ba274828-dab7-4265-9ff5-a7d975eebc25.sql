-- Fix search_path for functions
ALTER FUNCTION public.handle_updated_at() SET search_path = public;
ALTER FUNCTION public.handle_new_user() SET search_path = public;

-- Revoke execute on security definer function
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM public;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM authenticated;