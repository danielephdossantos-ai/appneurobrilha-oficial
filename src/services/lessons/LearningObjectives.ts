import { supabase } from "@/integrations/supabase/client";

export interface LearningObjective {
  id: string;
  codigo_bncc: string;
  objetivo: string;
  descricao: string | null;
  tipo: string | null;
  ordem: number | null;
}

export const LearningObjectivesService = {
  async listByCodigoBncc(codigoBncc: string): Promise<LearningObjective[]> {
    const { data } = await supabase
      .from("learning_objectives")
      .select("*")
      .eq("codigo_bncc", codigoBncc)
      .order("ordem");
    return (data ?? []) as LearningObjective[];
  },

  async listByTipo(codigoBncc: string, tipo: string) {
    const { data } = await supabase
      .from("learning_objectives")
      .select("*")
      .eq("codigo_bncc", codigoBncc)
      .eq("tipo", tipo)
      .order("ordem");
    return (data ?? []) as LearningObjective[];
  },
};

export default LearningObjectivesService;
