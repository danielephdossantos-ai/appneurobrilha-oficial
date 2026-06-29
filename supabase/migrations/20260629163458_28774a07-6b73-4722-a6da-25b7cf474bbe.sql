
DO $$ BEGIN
  CREATE TYPE public.inclusive_condition AS ENUM (
    'tea','tdah','dislexia','discalculia',
    'deficiencia_intelectual','deficiencia_auditiva','deficiencia_visual',
    'altas_habilidades'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE public.inclusive_education_adaptations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc text NOT NULL,
  condition public.inclusive_condition NOT NULL,
  titulo text NOT NULL,
  descricao text NOT NULL,
  estrategias jsonb NOT NULL DEFAULT '[]'::jsonb,
  recursos jsonb NOT NULL DEFAULT '[]'::jsonb,
  ajustes_avaliacao jsonb NOT NULL DEFAULT '[]'::jsonb,
  observacoes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX inclusive_adapt_codigo_idx ON public.inclusive_education_adaptations(codigo_bncc);
CREATE INDEX inclusive_adapt_condition_idx ON public.inclusive_education_adaptations(condition);

GRANT SELECT ON public.inclusive_education_adaptations TO authenticated;
GRANT ALL ON public.inclusive_education_adaptations TO service_role;

ALTER TABLE public.inclusive_education_adaptations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can read inclusive adaptations"
  ON public.inclusive_education_adaptations FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins manage inclusive adaptations"
  ON public.inclusive_education_adaptations FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER inclusive_adapt_updated_at
  BEFORE UPDATE ON public.inclusive_education_adaptations
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
