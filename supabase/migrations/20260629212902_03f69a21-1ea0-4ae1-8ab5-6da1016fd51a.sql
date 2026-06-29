CREATE UNIQUE INDEX IF NOT EXISTS lesson_drafts_one_pending_per_code
  ON public.lesson_drafts (codigo_bncc)
  WHERE status = 'pending';