/**
 * AssessmentRepository
 *
 * Repositório único de avaliações por habilidade BNCC.
 * Cada habilidade pode possuir, independentes entre si:
 *   - pré-teste
 *   - avaliação diagnóstica
 *   - avaliação formativa
 *   - avaliação final
 *   - simulado
 *   - recuperação
 *
 * Fonte: public.assessment_repository. Nada é gerado em runtime.
 */

import { supabase } from "@/integrations/supabase/client";

export type AssessmentKind =
  | "pre_teste"
  | "diagnostica"
  | "formativa"
  | "final"
  | "simulado"
  | "recuperacao";

export const ASSESSMENT_KINDS: AssessmentKind[] = [
  "pre_teste",
  "diagnostica",
  "formativa",
  "final",
  "simulado",
  "recuperacao",
];

export interface AssessmentAlternativa {
  texto: string;
  correta: boolean;
  comentario?: string;
}

export interface AssessmentQuestao {
  enunciado: string;
  tipo?: string;
  alternativas?: AssessmentAlternativa[];
  resposta?: string;
  explicacao?: string;
  pontuacao?: number;
}

export interface Assessment {
  id: string;
  codigoBncc: string;
  tipo: AssessmentKind;
  titulo: string;
  descricao: string;
  instrucoes: string;
  tempoMinutos: number;
  pontuacaoTotal: number;
  nivel: string;
  ordem: number;
  questoes: AssessmentQuestao[];
  criterios: Record<string, unknown>;
}

type Row = {
  id: string;
  codigo_bncc: string;
  tipo: AssessmentKind;
  titulo: string | null;
  descricao: string | null;
  instrucoes: string | null;
  tempo_minutos: number | null;
  pontuacao_total: number | null;
  nivel: string | null;
  ordem: number | null;
  questoes: unknown;
  criterios: unknown;
};

function mapRow(r: Row): Assessment {
  return {
    id: r.id,
    codigoBncc: r.codigo_bncc,
    tipo: r.tipo,
    titulo: r.titulo ?? "",
    descricao: r.descricao ?? "",
    instrucoes: r.instrucoes ?? "",
    tempoMinutos: r.tempo_minutos ?? 0,
    pontuacaoTotal: r.pontuacao_total ?? 0,
    nivel: r.nivel ?? "medio",
    ordem: r.ordem ?? 0,
    questoes: Array.isArray(r.questoes) ? (r.questoes as AssessmentQuestao[]) : [],
    criterios: (r.criterios as Record<string, unknown>) ?? {},
  };
}

const COLS =
  "id, codigo_bncc, tipo, titulo, descricao, instrucoes, tempo_minutos, pontuacao_total, nivel, ordem, questoes, criterios";

export const AssessmentRepository = {
  /** Todas as avaliações de uma habilidade BNCC (todos os tipos). */
  async listByBNCC(codigoBncc: string): Promise<Assessment[]> {
    const { data, error } = await supabase
      .from("assessment_repository" as never)
      .select(COLS)
      .eq("codigo_bncc", codigoBncc)
      .order("tipo", { ascending: true })
      .order("ordem", { ascending: true });

    if (error || !data) return [];
    return (data as unknown as Row[]).map(mapRow);
  },

  /** Avaliações de uma habilidade filtradas por tipo. */
  async listByKind(codigoBncc: string, tipo: AssessmentKind): Promise<Assessment[]> {
    const { data, error } = await supabase
      .from("assessment_repository" as never)
      .select(COLS)
      .eq("codigo_bncc", codigoBncc)
      .eq("tipo", tipo)
      .order("ordem", { ascending: true });

    if (error || !data) return [];
    return (data as unknown as Row[]).map(mapRow);
  },

  async get(id: string): Promise<Assessment | null> {
    const { data, error } = await supabase
      .from("assessment_repository" as never)
      .select(COLS)
      .eq("id", id)
      .maybeSingle();

    if (error || !data) return null;
    return mapRow(data as unknown as Row);
  },

  // Atalhos por tipo
  getPreTeste: (b: string) => AssessmentRepository.listByKind(b, "pre_teste"),
  getDiagnostica: (b: string) => AssessmentRepository.listByKind(b, "diagnostica"),
  getFormativa: (b: string) => AssessmentRepository.listByKind(b, "formativa"),
  getFinal: (b: string) => AssessmentRepository.listByKind(b, "final"),
  getSimulado: (b: string) => AssessmentRepository.listByKind(b, "simulado"),
  getRecuperacao: (b: string) => AssessmentRepository.listByKind(b, "recuperacao"),
};
