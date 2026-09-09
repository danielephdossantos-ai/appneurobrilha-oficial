DO $$
DECLARE
  _admin uuid := 'ea57964b-08f8-4ea8-ab61-f4a8a3f36668';
  _draft_id uuid;
  _ok int := 0;
  _fail int := 0;
BEGIN
  PERFORM set_config('request.jwt.claims', json_build_object('sub', _admin::text, 'role','authenticated')::text, true);
  FOR _draft_id IN SELECT id FROM public.lesson_drafts WHERE status='pending' ORDER BY created_at LOOP
    BEGIN
      PERFORM public.approve_lesson_draft(_draft_id);
      _ok := _ok + 1;
    EXCEPTION WHEN OTHERS THEN
      _fail := _fail + 1;
      RAISE WARNING 'fail % : %', _draft_id, SQLERRM;
    END;
  END LOOP;
  RAISE NOTICE 'published=% failed=%', _ok, _fail;
END $$;