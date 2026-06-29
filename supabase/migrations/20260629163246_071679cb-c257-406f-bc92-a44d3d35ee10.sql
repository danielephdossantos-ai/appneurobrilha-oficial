
DO $$ BEGIN
  CREATE TYPE public.teaching_strategy_kind AS ENUM (
    'visual','concreta','jogos','investigativa','colaborativa',
    'auditiva','cinestesica','projetos','resolucao_problemas','narrativa'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE public.teaching_strategies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc text NOT NULL,
  kind public.teaching_strategy_kind NOT NULL,
  titulo text NOT NULL,
  descricao text NOT NULL,
  passos jsonb NOT NULL DEFAULT '[]'::jsonb,
  materiais jsonb NOT NULL DEFAULT '[]'::jsonb,
  nivel text,
  observacoes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX teaching_strategies_codigo_idx ON public.teaching_strategies(codigo_bncc);
CREATE INDEX teaching_strategies_kind_idx ON public.teaching_strategies(kind);

GRANT SELECT ON public.teaching_strategies TO authenticated;
GRANT ALL ON public.teaching_strategies TO service_role;

ALTER TABLE public.teaching_strategies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can read teaching strategies"
  ON public.teaching_strategies FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins manage teaching strategies"
  ON public.teaching_strategies FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER teaching_strategies_updated_at
  BEFORE UPDATE ON public.teaching_strategies
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
