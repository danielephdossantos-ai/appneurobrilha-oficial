ALTER TABLE public.school_support_sessions
  ADD COLUMN IF NOT EXISTS lesson_pages jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS resource_query text;

ALTER TABLE public.school_support_sessions
  DROP CONSTRAINT IF EXISTS school_support_sessions_lesson_pages_check;

ALTER TABLE public.school_support_sessions
  ADD CONSTRAINT school_support_sessions_lesson_pages_check
  CHECK (jsonb_typeof(lesson_pages) = 'array');
