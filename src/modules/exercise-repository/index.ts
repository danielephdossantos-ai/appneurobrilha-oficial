/**
 * ExerciseRepository — banco de exercícios INDEPENDENTES de aulas.
 * Cada exercício é uma unidade autocontida. BNCC é apenas metadado.
 * Nada gerado em runtime: leitura direta do banco.
 */

import { supabase } from "@/integrations/supabase/client";

export type ExerciseTipo =
  | "multipla_escolha"
  | "verdadeiro_falso"
  | "ligar_colunas"
  | "arrastar_soltar"
  | "sequencia_logica"
  | "preencher_lacunas"
  | "completar_palavras"
  | "interpretacao"
  | "producao_escrita"
  | "calculo"
  | "desenho"
  | "experimento"
  | "leitura"
  | string;

export type ExerciseDificuldade = "facil" | "medio" | "dificil" | string;

export type NivelPedagogico =
  | "muito_facil"
  | "facil"
  | "medio"
  | "dificil"
  | "avancado";

export const NIVEIS_PEDAGOGICOS: { value: NivelPedagogico; label: string }[] = [
  { value: "muito_facil", label: "Muito Fácil" },
  { value: "facil", label: "Fácil" },
  { value: "medio", label: "Médio" },
  { value: "dificil", label: "Difícil" },
  { value: "avancado", label: "Avançado" },
];

export interface Exercise {
  id: string;
  titulo: string;
  tipo: ExerciseTipo;
  enunciado: string;
  imagem: string | null;
  alternativas: string[];
  resposta: string;
  explicacao: string;
  dificuldade: ExerciseDificuldade;
  tempo: number; // segundos
  pontuacao: number;
  competencia: string;
  codigoBncc: string | null;
  metadata: Record<string, unknown>;
}

const db = supabase as any;

function map(r: any): Exercise {
  return {
    id: r.id,
    titulo: r.titulo,
    tipo: r.tipo,
    enunciado: r.enunciado,
    imagem: r.imagem ?? null,
    alternativas: Array.isArray(r.alternativas) ? r.alternativas : [],
    resposta: r.resposta ?? "",
    explicacao: r.explicacao ?? "",
    dificuldade: r.dificuldade ?? "medio",
    tempo: r.tempo_segundos ?? 0,
    pontuacao: r.pontuacao ?? 0,
    competencia: r.competencia ?? "",
    codigoBncc: r.codigo_bncc ?? null,
    metadata: (r.metadata as Record<string, unknown>) ?? {},
  };
}

const COLS =
  "id,titulo,tipo,enunciado,imagem,alternativas,resposta,explicacao,dificuldade,tempo_segundos,pontuacao,competencia,codigo_bncc,metadata";

export const ExerciseRepository = {
  async getById(id: string): Promise<Exercise | null> {
    const { data, error } = await db
      .from("exercises")
      .select(COLS)
      .eq("id", id)
      .maybeSingle();
    if (error || !data) return null;
    return map(data);
  },

  async listByBNCC(codigoBncc: string): Promise<Exercise[]> {
    const key = (codigoBncc || "").trim().toUpperCase();
    if (!key) return [];
    const { data, error } = await db
      .from("exercises")
      .select(COLS)
      .eq("codigo_bncc", key)
      .order("dificuldade");
    if (error || !data) return [];
    return (data as any[]).map(map);
  },

  async listByTipo(tipo: ExerciseTipo): Promise<Exercise[]> {
    const { data, error } = await db
      .from("exercises")
      .select(COLS)
      .eq("tipo", tipo);
    if (error || !data) return [];
    return (data as any[]).map(map);
  },

  async listByDificuldade(d: ExerciseDificuldade): Promise<Exercise[]> {
    const { data, error } = await db
      .from("exercises")
      .select(COLS)
      .eq("dificuldade", d);
    if (error || !data) return [];
    return (data as any[]).map(map);
  },
};
