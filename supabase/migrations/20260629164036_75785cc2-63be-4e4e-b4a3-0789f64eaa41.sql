
CREATE TABLE public.bncc_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc text NOT NULL,
  titulo text NOT NULL,
  descricao text NOT NULL,
  objetivo text NOT NULL,
  cronograma jsonb NOT NULL DEFAULT '[]'::jsonb,
  materiais jsonb NOT NULL DEFAULT '[]'::jsonb,
  atividades jsonb NOT NULL DEFAULT '[]'::jsonb,
  avaliacao jsonb NOT NULL DEFAULT '[]'::jsonb,
  produto_final text NOT NULL,
  duracao_dias integer,
  observacoes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX bncc_projects_codigo_idx ON public.bncc_projects(codigo_bncc);

GRANT SELECT ON public.bncc_projects TO authenticated;
GRANT ALL ON public.bncc_projects TO service_role;

ALTER TABLE public.bncc_projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can read bncc projects"
  ON public.bncc_projects FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins manage bncc projects"
  ON public.bncc_projects FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER bncc_projects_updated_at
  BEFORE UPDATE ON public.bncc_projects
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
