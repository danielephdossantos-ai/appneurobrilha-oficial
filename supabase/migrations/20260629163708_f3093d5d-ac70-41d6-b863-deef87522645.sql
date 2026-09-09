
DO $$ BEGIN
  CREATE TYPE public.didactic_level AS ENUM (
    'muito_facil','facil','intermediario','dificil','avancado'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE public.didactic_sequences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc text NOT NULL,
  titulo text NOT NULL,
  descricao text NOT NULL,
  nivel public.didactic_level NOT NULL,
  objetivos jsonb NOT NULL DEFAULT '[]'::jsonb,
  etapas jsonb NOT NULL DEFAULT '[]'::jsonb,
  duracao_minutos integer,
  recursos jsonb NOT NULL DEFAULT '[]'::jsonb,
  avaliacao jsonb NOT NULL DEFAULT '[]'::jsonb,
  observacoes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX didactic_seq_codigo_idx ON public.didactic_sequences(codigo_bncc);
CREATE INDEX didactic_seq_nivel_idx ON public.didactic_sequences(nivel);

GRANT SELECT ON public.didactic_sequences TO authenticated;
GRANT ALL ON public.didactic_sequences TO service_role;

ALTER TABLE public.didactic_sequences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can read didactic sequences"
  ON public.didactic_sequences FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins manage didactic sequences"
  ON public.didactic_sequences FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER didactic_seq_updated_at
  BEFORE UPDATE ON public.didactic_sequences
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
