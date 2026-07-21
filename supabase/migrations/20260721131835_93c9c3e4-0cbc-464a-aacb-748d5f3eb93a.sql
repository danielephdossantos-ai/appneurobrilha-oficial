
CREATE TABLE public.aurora_progresso (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  fase_atual smallint NOT NULL DEFAULT 1,
  missoes_concluidas jsonb NOT NULL DEFAULT '[]'::jsonb,
  ultima_missao_slug text,
  ultima_data date,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (child_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.aurora_progresso TO authenticated;
GRANT ALL ON public.aurora_progresso TO service_role;

ALTER TABLE public.aurora_progresso ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Responsável gerencia progresso Aurora da própria criança"
  ON public.aurora_progresso
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = aurora_progresso.child_id
        AND c.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = aurora_progresso.child_id
        AND c.user_id = auth.uid()
    )
  );

CREATE OR REPLACE FUNCTION public.tg_aurora_progresso_touch()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER aurora_progresso_touch
  BEFORE UPDATE ON public.aurora_progresso
  FOR EACH ROW EXECUTE FUNCTION public.tg_aurora_progresso_touch();
