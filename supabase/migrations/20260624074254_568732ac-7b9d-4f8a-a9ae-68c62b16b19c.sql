-- Trilha anual: calendário escolar fixo por série
CREATE TABLE public.trilha_anual (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ano text NOT NULL,
  semana integer NOT NULL CHECK (semana BETWEEN 1 AND 40),
  dia integer NOT NULL CHECK (dia BETWEEN 1 AND 5),
  ordem_no_dia integer NOT NULL DEFAULT 1,
  codigo_bncc text NOT NULL REFERENCES public.bncc_habilidades(codigo_bncc) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (ano, semana, dia, ordem_no_dia)
);

CREATE INDEX trilha_anual_ano_semana_idx ON public.trilha_anual (ano, semana, dia);
CREATE INDEX trilha_anual_codigo_idx ON public.trilha_anual (codigo_bncc);

GRANT SELECT ON public.trilha_anual TO authenticated, anon;
GRANT ALL ON public.trilha_anual TO service_role;

ALTER TABLE public.trilha_anual ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Trilha anual leitura pública"
  ON public.trilha_anual FOR SELECT
  USING (true);

-- Cache das aulas geradas por IA (uma por habilidade BNCC)
CREATE TABLE public.aulas_geradas_ia (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc text NOT NULL UNIQUE REFERENCES public.bncc_habilidades(codigo_bncc) ON DELETE CASCADE,
  ano text NOT NULL,
  disciplina text,
  titulo text NOT NULL,
  screens jsonb NOT NULL,
  modelo text NOT NULL DEFAULT 'google/gemini-2.5-flash',
  versao integer NOT NULL DEFAULT 1,
  aprovada boolean NOT NULL DEFAULT false,
  gerada_em timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX aulas_geradas_ia_ano_idx ON public.aulas_geradas_ia (ano);

GRANT SELECT ON public.aulas_geradas_ia TO authenticated, anon;
GRANT ALL ON public.aulas_geradas_ia TO service_role;

ALTER TABLE public.aulas_geradas_ia ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Aulas IA leitura pública"
  ON public.aulas_geradas_ia FOR SELECT
  USING (true);

CREATE TRIGGER aulas_geradas_ia_updated_at
  BEFORE UPDATE ON public.aulas_geradas_ia
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();