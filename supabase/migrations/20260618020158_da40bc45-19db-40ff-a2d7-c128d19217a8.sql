-- ============================================================
-- PEI (Plano Educacional Individualizado) — Jornada 365
-- Fase 1: schema + RLS + grants
-- ============================================================

-- 1) PEI_PLANOS — um plano por trimestre por criança
CREATE TABLE public.pei_planos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  anamnese_id UUID, -- id da anamnese que originou (nullable: primeira execução pode não ter v2)
  trimestre_inicio DATE NOT NULL,
  trimestre_fim DATE NOT NULL,            -- inicio + 90 dias
  perfil_snapshot JSONB NOT NULL DEFAULT '{}'::jsonb, -- idade, série, cognitivo, sensorial no momento da geração
  tempo_aula_min INTEGER NOT NULL DEFAULT 15,         -- duração-alvo por aula (adaptado ao perfil)
  status TEXT NOT NULL DEFAULT 'ativo'
    CHECK (status IN ('ativo', 'expirado', 'substituido')),
  total_aulas INTEGER NOT NULL DEFAULT 0,
  aulas_concluidas INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_pei_planos_child ON public.pei_planos(child_id);
CREATE INDEX idx_pei_planos_status ON public.pei_planos(child_id, status);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.pei_planos TO authenticated;
GRANT ALL ON public.pei_planos TO service_role;

ALTER TABLE public.pei_planos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Pais gerenciam planos das próprias crianças"
  ON public.pei_planos FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = pei_planos.child_id AND c.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = pei_planos.child_id AND c.user_id = auth.uid()
    )
  );

CREATE TRIGGER trg_pei_planos_updated_at
  BEFORE UPDATE ON public.pei_planos
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================================
-- 2) PEI_AULAS — aulas diárias geradas dentro do plano
-- ============================================================
CREATE TABLE public.pei_aulas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  plano_id UUID NOT NULL REFERENCES public.pei_planos(id) ON DELETE CASCADE,
  child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  data_prevista DATE NOT NULL,           -- dia em que a aula deve ser liberada
  ordem INTEGER NOT NULL,                -- 1..90
  titulo TEXT NOT NULL,
  objetivo TEXT,
  bncc_codigos TEXT[] NOT NULL DEFAULT '{}',
  atividades JSONB NOT NULL DEFAULT '[]'::jsonb,
  -- estrutura: [{ tipo:'neuro-treino'|'alfabetizacao'|'matematica'|...,
  --              slug:'consciencia-silabica', payload:{...}, tempo_min:5 }]
  tempo_total_min INTEGER NOT NULL DEFAULT 15,
  status TEXT NOT NULL DEFAULT 'bloqueada'
    CHECK (status IN ('bloqueada', 'disponivel', 'em_andamento', 'concluida', 'pulada')),
  concluida_em TIMESTAMPTZ,
  desempenho JSONB,
  -- { acertos, tentativas, tempoGastoSeg, recompensas:[...] }
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (plano_id, ordem)
);

CREATE INDEX idx_pei_aulas_child_data ON public.pei_aulas(child_id, data_prevista);
CREATE INDEX idx_pei_aulas_plano_status ON public.pei_aulas(plano_id, status);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.pei_aulas TO authenticated;
GRANT ALL ON public.pei_aulas TO service_role;

ALTER TABLE public.pei_aulas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Pais gerenciam aulas das próprias crianças"
  ON public.pei_aulas FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = pei_aulas.child_id AND c.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = pei_aulas.child_id AND c.user_id = auth.uid()
    )
  );

CREATE TRIGGER trg_pei_aulas_updated_at
  BEFORE UPDATE ON public.pei_aulas
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================================
-- 3) PEI_RELATORIOS — relatório trimestral gerado pros pais
-- ============================================================
CREATE TABLE public.pei_relatorios (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  plano_id UUID NOT NULL REFERENCES public.pei_planos(id) ON DELETE CASCADE,
  periodo_inicio DATE NOT NULL,
  periodo_fim DATE NOT NULL,
  resumo JSONB NOT NULL DEFAULT '{}'::jsonb,
  -- { aulasConcluidas, aulasPrevistas, precisaoMedia, diasAtivos, streakMax,
  --   tempoTotalMin, badgesGanhas:[...] }
  evolucao JSONB NOT NULL DEFAULT '{}'::jsonb,
  -- { competencias:{atencao:{antes,depois,delta}, ...},
  --   bnccDominadas:[...], bnccEmProgresso:[...] }
  pontos_fortes TEXT[] NOT NULL DEFAULT '{}',
  pontos_atencao TEXT[] NOT NULL DEFAULT '{}',
  recomendacoes TEXT,
  visualizado_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_pei_relatorios_child ON public.pei_relatorios(child_id, created_at DESC);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.pei_relatorios TO authenticated;
GRANT ALL ON public.pei_relatorios TO service_role;

ALTER TABLE public.pei_relatorios ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Pais leem relatórios das próprias crianças"
  ON public.pei_relatorios FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = pei_relatorios.child_id AND c.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = pei_relatorios.child_id AND c.user_id = auth.uid()
    )
  );

CREATE TRIGGER trg_pei_relatorios_updated_at
  BEFORE UPDATE ON public.pei_relatorios
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();