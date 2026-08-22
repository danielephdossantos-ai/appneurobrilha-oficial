-- FASE J.1 — Rotina Premium
ALTER TABLE public.routine_items
  ADD COLUMN IF NOT EXISTS notify_parent_on_complete boolean NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS routine_items_child_start_idx
  ON public.routine_items(child_id, start_time);

-- Evita avisar o responsável várias vezes pela mesma conclusão no mesmo dia.
CREATE TABLE IF NOT EXISTS public.routine_completion_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  routine_item_id uuid NOT NULL REFERENCES public.routine_items(id) ON DELETE CASCADE,
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  occurrence_date date NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (routine_item_id, occurrence_date)
);
ALTER TABLE public.routine_completion_log ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.routine_completion_log TO authenticated;
GRANT ALL ON public.routine_completion_log TO service_role;
DROP POLICY IF EXISTS "own routine completion logs" ON public.routine_completion_log;
CREATE POLICY "own routine completion logs" ON public.routine_completion_log FOR SELECT TO authenticated
USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = routine_completion_log.child_id AND c.user_id = auth.uid()));

-- A interface Premium não usa "terapia" como categoria. Preserva o texto informado pela família,
-- mas normaliza o tipo técnico antigo para compromisso.
UPDATE public.routine_items SET type = 'compromisso' WHERE type::text = 'terapia';
