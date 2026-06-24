CREATE TABLE public.aulas_semana (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  user_id uuid NOT NULL,
  data date NOT NULL,
  habilidade_bncc text,
  materia text,
  titulo text NOT NULL,
  steps jsonb NOT NULL DEFAULT '[]'::jsonb,
  midias jsonb NOT NULL DEFAULT '[]'::jsonb,
  perfil_neuro text,
  agenda_horario time,
  concluida boolean NOT NULL DEFAULT false,
  editavel boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(child_id, data)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.aulas_semana TO authenticated;
GRANT ALL ON public.aulas_semana TO service_role;

ALTER TABLE public.aulas_semana ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Pais gerenciam aulas das próprias crianças"
  ON public.aulas_semana FOR ALL
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE INDEX idx_aulas_semana_child_data ON public.aulas_semana(child_id, data);

CREATE TRIGGER set_updated_at_aulas_semana
  BEFORE UPDATE ON public.aulas_semana
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();