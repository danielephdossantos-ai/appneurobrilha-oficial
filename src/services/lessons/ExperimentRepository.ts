import { supabase } from "@/integrations/supabase/client";

export interface LessonExperiment {
  id: string;
  codigo_bncc: string;
  titulo: string;
  objetivo: string;
  materiais: string[];
  passos: string[];
  resultado_esperado: string;
  cuidados: string[];
  nivel: string | null;
  ordem: number;
}

export const ExperimentRepository = {
  async list(codigoBncc: string): Promise<LessonExperiment[]> {
    const { data, error } = await supabase
      .from("lesson_experiments" as any)
      .select("*")
      .eq("codigo_bncc", codigoBncc)
      .order("ordem", { ascending: true });
    if (error) throw error;
    return (data ?? []) as unknown as LessonExperiment[];
  },

  async get(id: string): Promise<LessonExperiment | null> {
    const { data, error } = await supabase
      .from("lesson_experiments" as any)
      .select("*")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    return (data as unknown as LessonExperiment) ?? null;
  },

  async hasAny(codigoBncc: string): Promise<boolean> {
    const { count, error } = await supabase
      .from("lesson_experiments" as any)
      .select("id", { count: "exact", head: true })
      .eq("codigo_bncc", codigoBncc);
    if (error) throw error;
    return (count ?? 0) > 0;
  },
};
