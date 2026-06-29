import { supabase } from "@/integrations/supabase/client";

export type DidacticLevel =
  | "muito_facil"
  | "facil"
  | "intermediario"
  | "dificil"
  | "avancado";

export interface DidacticSequence {
  id: string;
  codigo_bncc: string;
  titulo: string;
  descricao: string;
  nivel: DidacticLevel;
  objetivos: unknown[];
  etapas: unknown[];
  duracao_minutos: number | null;
  recursos: unknown[];
  avaliacao: unknown[];
  observacoes: string | null;
}

const COLS =
  "id, codigo_bncc, titulo, descricao, nivel, objetivos, etapas, duracao_minutos, recursos, avaliacao, observacoes";

const LEVEL_ORDER: Record<DidacticLevel, number> = {
  muito_facil: 1,
  facil: 2,
  intermediario: 3,
  dificil: 4,
  avancado: 5,
};

export const DidacticSequenceRepository = {
  async list(codigoBncc: string): Promise<DidacticSequence[]> {
    const { data, error } = await supabase
      .from("didactic_sequences")
      .select(COLS)
      .eq("codigo_bncc", codigoBncc);
    if (error) throw error;
    const rows = (data ?? []) as DidacticSequence[];
    return rows.sort((a, b) => LEVEL_ORDER[a.nivel] - LEVEL_ORDER[b.nivel]);
  },

  async byLevel(codigoBncc: string, nivel: DidacticLevel): Promise<DidacticSequence[]> {
    const { data, error } = await supabase
      .from("didactic_sequences")
      .select(COLS)
      .eq("codigo_bncc", codigoBncc)
      .eq("nivel", nivel);
    if (error) throw error;
    return (data ?? []) as DidacticSequence[];
  },

  async get(id: string): Promise<DidacticSequence | null> {
    const { data, error } = await supabase
      .from("didactic_sequences")
      .select(COLS)
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    return (data as DidacticSequence) ?? null;
  },
};
