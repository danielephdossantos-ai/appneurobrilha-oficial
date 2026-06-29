import { supabase } from "@/integrations/supabase/client";

export type InclusiveCondition =
  | "tea"
  | "tdah"
  | "dislexia"
  | "discalculia"
  | "deficiencia_intelectual"
  | "deficiencia_auditiva"
  | "deficiencia_visual"
  | "altas_habilidades";

export interface InclusiveAdaptation {
  id: string;
  codigo_bncc: string;
  condition: InclusiveCondition;
  titulo: string;
  descricao: string;
  estrategias: unknown[];
  recursos: unknown[];
  ajustes_avaliacao: unknown[];
  observacoes: string | null;
}

const COLS =
  "id, codigo_bncc, condition, titulo, descricao, estrategias, recursos, ajustes_avaliacao, observacoes";

export const InclusiveEducationRepository = {
  async list(codigoBncc: string): Promise<InclusiveAdaptation[]> {
    const { data, error } = await supabase
      .from("inclusive_education_adaptations")
      .select(COLS)
      .eq("codigo_bncc", codigoBncc)
      .order("condition", { ascending: true });
    if (error) throw error;
    return (data ?? []) as InclusiveAdaptation[];
  },

  async byCondition(
    codigoBncc: string,
    condition: InclusiveCondition,
  ): Promise<InclusiveAdaptation[]> {
    const { data, error } = await supabase
      .from("inclusive_education_adaptations")
      .select(COLS)
      .eq("codigo_bncc", codigoBncc)
      .eq("condition", condition);
    if (error) throw error;
    return (data ?? []) as InclusiveAdaptation[];
  },

  async get(id: string): Promise<InclusiveAdaptation | null> {
    const { data, error } = await supabase
      .from("inclusive_education_adaptations")
      .select(COLS)
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    return (data as InclusiveAdaptation) ?? null;
  },
};
