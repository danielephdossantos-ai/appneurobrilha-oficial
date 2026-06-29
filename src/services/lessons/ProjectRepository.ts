import { supabase } from "@/integrations/supabase/client";

export interface BnccProject {
  id: string;
  codigo_bncc: string;
  titulo: string;
  descricao: string;
  objetivo: string;
  cronograma: unknown[];
  materiais: unknown[];
  atividades: unknown[];
  avaliacao: unknown[];
  produto_final: string;
  duracao_dias: number | null;
  observacoes: string | null;
}

const COLS =
  "id, codigo_bncc, titulo, descricao, objetivo, cronograma, materiais, atividades, avaliacao, produto_final, duracao_dias, observacoes";

export const ProjectRepository = {
  async list(codigoBncc: string): Promise<BnccProject[]> {
    const { data, error } = await supabase
      .from("bncc_projects")
      .select(COLS)
      .eq("codigo_bncc", codigoBncc)
      .order("titulo", { ascending: true });
    if (error) throw error;
    return (data ?? []) as BnccProject[];
  },

  async get(id: string): Promise<BnccProject | null> {
    const { data, error } = await supabase
      .from("bncc_projects")
      .select(COLS)
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    return (data as BnccProject) ?? null;
  },

  async hasAny(codigoBncc: string): Promise<boolean> {
    const { count, error } = await supabase
      .from("bncc_projects")
      .select("id", { count: "exact", head: true })
      .eq("codigo_bncc", codigoBncc);
    if (error) throw error;
    return (count ?? 0) > 0;
  },
};
