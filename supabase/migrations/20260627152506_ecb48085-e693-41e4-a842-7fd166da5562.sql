
CREATE TABLE public.homework_tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  user_id uuid NOT NULL,
  titulo text NOT NULL,
  materia text,
  due_date date NOT NULL DEFAULT CURRENT_DATE,
  foto_url text,
  foto_texto text,
  enunciado text,
  ia_resumo jsonb,
  dicas_ia jsonb DEFAULT '[]'::jsonb,
  dica_revelada int NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'pendente' CHECK (status IN ('pendente','em_andamento','concluida')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX homework_tasks_child_due_idx ON public.homework_tasks(child_id, due_date DESC);
CREATE INDEX homework_tasks_user_idx ON public.homework_tasks(user_id);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.homework_tasks TO authenticated;
GRANT ALL ON public.homework_tasks TO service_role;

ALTER TABLE public.homework_tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Pais gerenciam tarefas das próprias crianças"
  ON public.homework_tasks
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE TRIGGER homework_tasks_updated_at
  BEFORE UPDATE ON public.homework_tasks
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
