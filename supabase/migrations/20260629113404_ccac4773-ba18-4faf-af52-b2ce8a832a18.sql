
CREATE TABLE public.lesson_adaptations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid NOT NULL REFERENCES public.lesson_content(id) ON DELETE CASCADE,
  codigo_bncc text NOT NULL,
  perfil text NOT NULL CHECK (perfil IN ('tdah','tea','dislexia','deficiencia_intelectual','altas_habilidades')),
  objetivo text NOT NULL DEFAULT '',
  estrategias jsonb NOT NULL DEFAULT '[]'::jsonb,
  recursos jsonb NOT NULL DEFAULT '[]'::jsonb,
  ajustes_atividade jsonb NOT NULL DEFAULT '[]'::jsonb,
  orientacoes_familia text NOT NULL DEFAULT '',
  observacoes text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (lesson_id, perfil)
);

CREATE INDEX lesson_adaptations_lesson_idx ON public.lesson_adaptations (lesson_id);
CREATE INDEX lesson_adaptations_bncc_idx ON public.lesson_adaptations (codigo_bncc);
CREATE INDEX lesson_adaptations_perfil_idx ON public.lesson_adaptations (perfil);

GRANT SELECT ON public.lesson_adaptations TO authenticated, anon;
GRANT ALL ON public.lesson_adaptations TO service_role;

ALTER TABLE public.lesson_adaptations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read lesson adaptations"
  ON public.lesson_adaptations FOR SELECT
  USING (true);

CREATE POLICY "Admins manage lesson adaptations"
  ON public.lesson_adaptations FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER lesson_adaptations_updated_at
  BEFORE UPDATE ON public.lesson_adaptations
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
