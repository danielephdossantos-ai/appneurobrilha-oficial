
ALTER TABLE public.lesson_content
  ADD COLUMN IF NOT EXISTS is_complete boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS missing_sections text[] NOT NULL DEFAULT ARRAY[]::text[],
  ADD COLUMN IF NOT EXISTS audited_at timestamptz,
  ADD COLUMN IF NOT EXISTS audit_report jsonb NOT NULL DEFAULT '{}'::jsonb;

CREATE INDEX IF NOT EXISTS lesson_content_is_complete_idx
  ON public.lesson_content (is_complete);
