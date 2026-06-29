import { supabase } from "@/integrations/supabase/client";

export interface ThematicUnit {
  id: string;
  disciplina: string;
  nome: string;
  descricao: string | null;
  ordem: number | null;
}

export const UnitRepository = {
  async listByDisciplina(disciplina: string): Promise<ThematicUnit[]> {
    const { data } = await supabase
      .from("thematic_units")
      .select("*")
      .eq("disciplina", disciplina)
      .order("ordem");
    return (data ?? []) as ThematicUnit[];
  },

  async get(id: string): Promise<ThematicUnit | null> {
    const { data } = await supabase
      .from("thematic_units")
      .select("*")
      .eq("id", id)
      .maybeSingle();
    return (data as ThematicUnit) ?? null;
  },

  async listLessons(unidadeTematicaId: string) {
    const { data } = await supabase
      .from("lesson_content")
      .select("*")
      .eq("unidade_tematica_id", unidadeTematicaId)
      .order("ordem");
    return data ?? [];
  },
};

export default UnitRepository;
