REVOKE ALL ON FUNCTION public.sync_child_from_anamnese_v2() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.sync_child_from_anamnese_v2() FROM anon;
REVOKE ALL ON FUNCTION public.sync_child_from_anamnese_v2() FROM authenticated;
GRANT EXECUTE ON FUNCTION public.sync_child_from_anamnese_v2() TO service_role;