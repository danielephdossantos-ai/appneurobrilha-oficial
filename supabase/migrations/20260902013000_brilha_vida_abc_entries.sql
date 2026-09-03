CREATE TABLE IF NOT EXISTS public.brilha_vida_abc_entries (
  id uuid PRIMARY KEY,
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  antecedent text NOT NULL,
  observed_behavior text NOT NULL,
  consequence text NOT NULL DEFAULT '',
  family_hypothesis text NOT NULL DEFAULT 'nao_sei',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS brilha_vida_abc_child_created_idx
  ON public.brilha_vida_abc_entries(child_id, created_at DESC);

ALTER TABLE public.brilha_vida_abc_entries ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Families manage own ABC entries" ON public.brilha_vida_abc_entries;
CREATE POLICY "Families manage own ABC entries"
ON public.brilha_vida_abc_entries FOR ALL TO authenticated
USING (EXISTS (
  SELECT 1 FROM public.children c
  WHERE c.id = brilha_vida_abc_entries.child_id AND c.user_id = auth.uid()
))
WITH CHECK (EXISTS (
  SELECT 1 FROM public.children c
  WHERE c.id = brilha_vida_abc_entries.child_id AND c.user_id = auth.uid()
));
