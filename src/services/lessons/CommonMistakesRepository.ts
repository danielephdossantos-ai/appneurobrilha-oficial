import { supabase } from "@/integrations/supabase/client";

export interface CommonMistake {
  id: string;
  codigo_bncc: string;
  erro: string;
  causas: string[];
  estrategias_correcao: string[];
  atividades_indicadas: string[];
  severidade: string | null;
  ordem: number;
}

export const CommonMistakesRepository = {
  async list(codigoBncc: string): Promise<CommonMistake[]> {
    const { data, error } = await supabase
      .from("common_mistakes" as any)
      .select("*")
      .eq("codigo_bncc", codigoBncc)
      .order("ordem", { ascending: true });
    if (error) throw error;
    return (data ?? []) as unknown as CommonMistake[];
  },

  async get(id: string): Promise<CommonMistake | null> {
    const { data, error } = await supabase
      .from("common_mistakes" as any)
      .select("*")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    return (data as unknown as CommonMistake) ?? null;
  },

  async causas(codigoBncc: string): Promise<string[]> {
    const itens = await this.list(codigoBncc);
    return Array.from(new Set(itens.flatMap((i) => i.causas ?? [])));
  },

  async estrategias(codigoBncc: string): Promise<string[]> {
    const itens = await this.list(codigoBncc);
    return Array.from(new Set(itens.flatMap((i) => i.estrategias_correcao ?? [])));
  },

  async atividadesIndicadas(codigoBncc: string): Promise<string[]> {
    const itens = await this.list(codigoBncc);
    return Array.from(new Set(itens.flatMap((i) => i.atividades_indicadas ?? [])));
  },
};
