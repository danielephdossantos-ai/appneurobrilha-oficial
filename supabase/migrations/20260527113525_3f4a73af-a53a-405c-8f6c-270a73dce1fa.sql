-- Update function with search_path and revoke public access
ALTER FUNCTION public.handle_anamnese_completion() SET search_path = public;
REVOKE EXECUTE ON FUNCTION public.handle_anamnese_completion() FROM public;
GRANT EXECUTE ON FUNCTION public.handle_anamnese_completion() TO authenticated, service_role;
