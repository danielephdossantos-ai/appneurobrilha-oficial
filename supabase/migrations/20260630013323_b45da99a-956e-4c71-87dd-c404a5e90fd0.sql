
REVOKE EXECUTE ON FUNCTION public.publish_lesson_with_version(uuid, text) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.restore_lesson_version(uuid, text)     FROM PUBLIC, anon;
