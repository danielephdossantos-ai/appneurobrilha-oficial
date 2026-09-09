DO $$ BEGIN
  CREATE TYPE public.bncc_relation_kind AS ENUM (
    'similar','anterior','futuro','competencia','objeto_conhecimento','unidade_tematica'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE public.bncc_relationships (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo_bncc TEXT NOT NULL,
  related_codigo_bncc TEXT NOT NULL,
  kind public.bncc_relation_kind NOT NULL,
  peso INT NOT NULL DEFAULT 1,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (codigo_bncc, related_codigo_bncc, kind)
);
CREATE INDEX bncc_relationships_codigo_idx ON public.bncc_relationships(codigo_bncc);
CREATE INDEX bncc_relationships_kind_idx ON public.bncc_relationships(kind);
GRANT SELECT ON public.bncc_relationships TO authenticated;
GRANT ALL ON public.bncc_relationships TO service_role;
ALTER TABLE public.bncc_relationships ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated can read bncc relationships" ON public.bncc_relationships FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins manage bncc relationships" ON public.bncc_relationships FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER update_bncc_relationships_updated_at BEFORE UPDATE ON public.bncc_relationships FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();