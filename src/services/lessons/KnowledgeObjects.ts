import { supabase } from "@/integrations/supabase/client";

export interface KnowledgeObject {
  id: string;
  codigo_bncc: string;
  unidade_tematica: string | null;
  objeto_conhecimento: string;
  descricao: string | null;
  palavras_chave: string[] | null;
  ordem: number | null;
}

export const KnowledgeObjectsService = {
  async getByCodigoBncc(codigoBncc: string): Promise<KnowledgeObject | null> {
    const { data } = await supabase
      .from("knowledge_objects")
      .select("*")
      .eq("codigo_bncc", codigoBncc)
      .maybeSingle();
    return (data as KnowledgeObject) ?? null;
  },

  async listByUnidade(unidadeTematica: string): Promise<KnowledgeObject[]> {
    const { data } = await supabase
      .from("knowledge_objects")
      .select("*")
      .eq("unidade_tematica", unidadeTematica)
      .order("ordem");
    return (data ?? []) as KnowledgeObject[];
  },

  async list(): Promise<KnowledgeObject[]> {
    const { data } = await supabase
      .from("knowledge_objects")
      .select("*")
      .order("codigo_bncc");
    return (data ?? []) as KnowledgeObject[];
  },
};

export default KnowledgeObjectsService;
