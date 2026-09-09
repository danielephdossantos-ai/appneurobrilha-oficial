
CREATE TABLE public.anamnese_v2 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  current_step INT NOT NULL DEFAULT 1,
  responses JSONB NOT NULL DEFAULT '{}'::jsonb,
  scores JSONB NOT NULL DEFAULT '{}'::jsonb,
  risk_levels JSONB NOT NULL DEFAULT '{}'::jsonb,
  completed BOOLEAN NOT NULL DEFAULT false,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(child_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.anamnese_v2 TO authenticated;
GRANT ALL ON public.anamnese_v2 TO service_role;

ALTER TABLE public.anamnese_v2 ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own children anamnese_v2"
ON public.anamnese_v2 FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE TRIGGER trg_anamnese_v2_updated_at
BEFORE UPDATE ON public.anamnese_v2
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_anamnese_v2_child ON public.anamnese_v2(child_id);
CREATE INDEX idx_anamnese_v2_user ON public.anamnese_v2(user_id);
