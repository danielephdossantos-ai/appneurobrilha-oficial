import { supabase } from "@/integrations/supabase/client";

export interface TeacherLessonPlan {
  id: string;
  codigo_bncc: string;
  objetivos: unknown | null;
  competencias: unknown | null;
  habilidades: unknown | null;
  recursos: unknown | null;
  metodologia: unknown | null;
  desenvolvimento: unknown | null;
  fechamento: unknown | null;
  avaliacao: unknown | null;
  adaptacoes: unknown | null;
}

export const TeacherLessonPlanService = {
  async get(codigoBncc: string): Promise<TeacherLessonPlan | null> {
    const { data, error } = await supabase
      .from("teacher_lesson_plans")
      .select("*")
      .eq("codigo_bncc", codigoBncc)
      .maybeSingle();
    if (error) throw error;
    return (data as TeacherLessonPlan) ?? null;
  },

  async getObjetivos(c: string) { return (await this.get(c))?.objetivos ?? null; },
  async getCompetencias(c: string) { return (await this.get(c))?.competencias ?? null; },
  async getHabilidades(c: string) { return (await this.get(c))?.habilidades ?? null; },
  async getRecursos(c: string) { return (await this.get(c))?.recursos ?? null; },
  async getMetodologia(c: string) { return (await this.get(c))?.metodologia ?? null; },
  async getDesenvolvimento(c: string) { return (await this.get(c))?.desenvolvimento ?? null; },
  async getFechamento(c: string) { return (await this.get(c))?.fechamento ?? null; },
  async getAvaliacao(c: string) { return (await this.get(c))?.avaliacao ?? null; },
  async getAdaptacoes(c: string) { return (await this.get(c))?.adaptacoes ?? null; },
};
