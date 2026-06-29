import { supabase } from "@/integrations/supabase/client";

export interface EducationalGame {
  id: string;
  codigo_bncc: string;
  titulo: string;
  descricao: string | null;
  dificuldade: string;
  objetivo: string;
  pontuacao_maxima: number;
  url: string | null;
  tipo: string | null;
  ordem: number;
}

export const EducationalGamesRepository = {
  async list(codigoBncc: string): Promise<EducationalGame[]> {
    const { data, error } = await supabase
      .from("educational_games" as any)
      .select("*")
      .eq("codigo_bncc", codigoBncc)
      .order("ordem", { ascending: true });
    if (error) throw error;
    return (data ?? []) as unknown as EducationalGame[];
  },

  async listByDifficulty(codigoBncc: string, dificuldade: string): Promise<EducationalGame[]> {
    const { data, error } = await supabase
      .from("educational_games" as any)
      .select("*")
      .eq("codigo_bncc", codigoBncc)
      .eq("dificuldade", dificuldade)
      .order("ordem", { ascending: true });
    if (error) throw error;
    return (data ?? []) as unknown as EducationalGame[];
  },

  async get(id: string): Promise<EducationalGame | null> {
    const { data, error } = await supabase
      .from("educational_games" as any)
      .select("*")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    return (data as unknown as EducationalGame) ?? null;
  },
};
