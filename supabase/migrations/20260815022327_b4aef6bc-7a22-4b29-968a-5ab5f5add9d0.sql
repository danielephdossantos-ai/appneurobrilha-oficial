ALTER TABLE public.reports DROP CONSTRAINT IF EXISTS reports_child_id_fkey;
DELETE FROM public.reports r WHERE NOT EXISTS (SELECT 1 FROM public.children c WHERE c.id = r.child_id);
ALTER TABLE public.reports
  ALTER COLUMN child_id SET NOT NULL,
  ADD CONSTRAINT reports_child_id_fkey FOREIGN KEY (child_id) REFERENCES public.children(id) ON DELETE CASCADE;

ALTER TABLE public.reports DROP CONSTRAINT IF EXISTS reports_type_check;
ALTER TABLE public.reports
  ADD CONSTRAINT reports_type_check CHECK (type = ANY (ARRAY['pedagogical','cognitive','neuro','complete','therapeutic']));

ALTER TABLE public.reports ADD COLUMN IF NOT EXISTS title text;
ALTER TABLE public.reports ADD COLUMN IF NOT EXISTS summary text;
ALTER TABLE public.reports ADD COLUMN IF NOT EXISTS created_by uuid;

CREATE INDEX IF NOT EXISTS idx_reports_child_generated ON public.reports (child_id, generated_at DESC);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.reports TO authenticated;
GRANT ALL ON public.reports TO service_role;

ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "reports_select_own" ON public.reports;
CREATE POLICY "reports_select_own" ON public.reports FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = reports.child_id AND c.user_id = auth.uid()));
CREATE POLICY "reports_insert_own" ON public.reports FOR INSERT TO authenticated
  WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = reports.child_id AND c.user_id = auth.uid()));
CREATE POLICY "reports_update_own" ON public.reports FOR UPDATE TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = reports.child_id AND c.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = reports.child_id AND c.user_id = auth.uid()));
CREATE POLICY "reports_delete_own" ON public.reports FOR DELETE TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = reports.child_id AND c.user_id = auth.uid()));