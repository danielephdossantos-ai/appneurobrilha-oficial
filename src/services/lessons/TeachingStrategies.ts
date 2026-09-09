import { supabase } from "@/integrations/supabase/client";

export type TeachingStrategyKind =
  | "visual"
  | "concreta"
  | "jogos"
  | "investigativa"
  | "colaborativa"
  | "auditiva"
  | "cinestesica"
  | "projetos"
  | "resolucao_problemas"
  | "narrativa";

export interface TeachingStrategy {
  id: string;
  codigo_bncc: string;
  kind: TeachingStrategyKind;
  titulo: string;
  descricao: string;
  passos: unknown[];
  materiais: unknown[];
  nivel: string | null;
  observacoes: string | null;
}

export const TeachingStrategies = {
  async list(codigoBncc: string): Promise<TeachingStrategy[]> {
    const { data, error } = await supabase
      .from("teaching_strategies")
      .select("id, codigo_bncc, kind, titulo, descricao, passos, materiais, nivel, observacoes")
      .eq("codigo_bncc", codigoBncc)
      .order("kind", { ascending: true });
    if (error) throw error;
    return (data ?? []) as TeachingStrategy[];
  },

  async byKind(codigoBncc: string, kind: TeachingStrategyKind): Promise<TeachingStrategy[]> {
    const { data, error } = await supabase
      .from("teaching_strategies")
      .select("id, codigo_bncc, kind, titulo, descricao, passos, materiais, nivel, observacoes")
      .eq("codigo_bncc", codigoBncc)
      .eq("kind", kind);
    if (error) throw error;
    return (data ?? []) as TeachingStrategy[];
  },

  async get(id: string): Promise<TeachingStrategy | null> {
    const { data, error } = await supabase
      .from("teaching_strategies")
      .select("id, codigo_bncc, kind, titulo, descricao, passos, materiais, nivel, observacoes")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    return (data as TeachingStrategy) ?? null;
  },
};
