import { supabase } from "@/integrations/supabase/client";

export interface RecoveryLesson {
  id: string;
  codigo_bncc: string;
  aula_simplificada: unknown | null;
  atividade_simplificada: unknown | null;
  explicacao_alternativa: unknown | null;
  novo_exemplo: unknown | null;
  nova_revisao: unknown | null;
  novo_quiz: unknown | null;
}

export const RecoveryLessonsService = {
  async get(codigoBncc: string): Promise<RecoveryLesson | null> {
    const { data, error } = await supabase
      .from("recovery_lessons")
      .select("*")
      .eq("codigo_bncc", codigoBncc)
      .maybeSingle();
    if (error) throw error;
    return (data as RecoveryLesson) ?? null;
  },

  async list(codigoBncc: string): Promise<RecoveryLesson[]> {
    const { data, error } = await supabase
      .from("recovery_lessons")
      .select("*")
      .eq("codigo_bncc", codigoBncc)
      .order("created_at", { ascending: true });
    if (error) throw error;
    return (data as RecoveryLesson[]) ?? [];
  },

  async getAulaSimplificada(codigoBncc: string) {
    return (await this.get(codigoBncc))?.aula_simplificada ?? null;
  },
  async getAtividadeSimplificada(codigoBncc: string) {
    return (await this.get(codigoBncc))?.atividade_simplificada ?? null;
  },
  async getExplicacaoAlternativa(codigoBncc: string) {
    return (await this.get(codigoBncc))?.explicacao_alternativa ?? null;
  },
  async getNovoExemplo(codigoBncc: string) {
    return (await this.get(codigoBncc))?.novo_exemplo ?? null;
  },
  async getNovaRevisao(codigoBncc: string) {
    return (await this.get(codigoBncc))?.nova_revisao ?? null;
  },
  async getNovoQuiz(codigoBncc: string) {
    return (await this.get(codigoBncc))?.novo_quiz ?? null;
  },
};
