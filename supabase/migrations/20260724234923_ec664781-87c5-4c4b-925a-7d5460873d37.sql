
-- 1. Cache de templates reutilizáveis por perfil (idade+série+risco).
CREATE TABLE IF NOT EXISTS public.plano_anual_templates (
  hash TEXT PRIMARY KEY,
  idade INTEGER NOT NULL,
  serie TEXT NOT NULL,
  payload JSONB NOT NULL,
  usos INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE ON public.plano_anual_templates TO authenticated;
GRANT ALL ON public.plano_anual_templates TO service_role;

ALTER TABLE public.plano_anual_templates ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Auth users can read templates" ON public.plano_anual_templates;
CREATE POLICY "Auth users can read templates"
  ON public.plano_anual_templates FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Auth users can create templates" ON public.plano_anual_templates;
CREATE POLICY "Auth users can create templates"
  ON public.plano_anual_templates FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "Auth users can bump template usage" ON public.plano_anual_templates;
CREATE POLICY "Auth users can bump template usage"
  ON public.plano_anual_templates FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP TRIGGER IF EXISTS trg_plano_anual_templates_updated_at ON public.plano_anual_templates;
CREATE TRIGGER trg_plano_anual_templates_updated_at
  BEFORE UPDATE ON public.plano_anual_templates
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 2. Vincular cada plano ao template de origem.
ALTER TABLE public.plano_anual
  ADD COLUMN IF NOT EXISTS template_hash TEXT REFERENCES public.plano_anual_templates(hash);

CREATE INDEX IF NOT EXISTS idx_plano_anual_template_hash
  ON public.plano_anual(template_hash);

-- 3. Índice pra buscar rápido o dia atual da criança.
CREATE INDEX IF NOT EXISTS idx_plano_anual_itens_child_day
  ON public.plano_anual_itens(child_id, semana, dia_semana, ordem);
