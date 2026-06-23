-- 1) tipo na agenda
ALTER TABLE public.exam_missions
  ADD COLUMN IF NOT EXISTS tipo text NOT NULL DEFAULT 'prova'
  CHECK (tipo IN ('prova','trabalho'));

-- 2) tabela de trabalhos
CREATE TABLE public.rb_trabalhos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  titulo text NOT NULL,
  tema text NOT NULL,
  materia text,
  data_entrega date,
  blocos jsonb NOT NULL DEFAULT '[]'::jsonb,
  fontes jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.rb_trabalhos TO authenticated;
GRANT ALL ON public.rb_trabalhos TO service_role;

ALTER TABLE public.rb_trabalhos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "trabalhos own child select" ON public.rb_trabalhos
  FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = child_id AND c.user_id = auth.uid()));

CREATE POLICY "trabalhos own child insert" ON public.rb_trabalhos
  FOR INSERT TO authenticated
  WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = child_id AND c.user_id = auth.uid()));

CREATE POLICY "trabalhos own child update" ON public.rb_trabalhos
  FOR UPDATE TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = child_id AND c.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = child_id AND c.user_id = auth.uid()));

CREATE POLICY "trabalhos own child delete" ON public.rb_trabalhos
  FOR DELETE TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = child_id AND c.user_id = auth.uid()));

CREATE TRIGGER rb_trabalhos_updated_at
  BEFORE UPDATE ON public.rb_trabalhos
  FOR EACH ROW EXECUTE FUNCTION public.rb_set_updated_at();