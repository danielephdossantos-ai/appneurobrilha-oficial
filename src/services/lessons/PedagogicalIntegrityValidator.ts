import { supabase } from "@/integrations/supabase/client";

export type IntegrityItem =
  | "objetivo"
  | "explicacao"
  | "exemplos"
  | "atividades"
  | "quiz"
  | "resumo"
  | "avaliacao"
  | "recuperacao";

export interface IntegrityReport {
  codigoBncc: string;
  complete: boolean;
  missing: IntegrityItem[];
  present: IntegrityItem[];
  status: "completa" | "incompleta";
}

async function exists(table: string, codigoBncc: string): Promise<boolean> {
  const { count, error } = await supabase
    .from(table as never)
    .select("id", { count: "exact", head: true })
    .eq("codigo_bncc", codigoBncc);
  if (error) return false;
  return (count ?? 0) > 0;
}

export const PedagogicalIntegrityValidator = {
  async validate(codigoBncc: string): Promise<IntegrityReport> {
    const checks: Array<[IntegrityItem, Promise<boolean>]> = [
      ["objetivo", exists("learning_objectives", codigoBncc)],
      ["explicacao", exists("lesson_explanations", codigoBncc)],
      ["exemplos", exists("lesson_examples", codigoBncc)],
      ["atividades", exists("lesson_activities", codigoBncc)],
      ["quiz", exists("lesson_quizzes", codigoBncc)],
      ["resumo", exists("lesson_reviews_full", codigoBncc)],
      ["avaliacao", exists("assessment_repository", codigoBncc)],
      ["recuperacao", exists("recovery_lessons", codigoBncc)],
    ];

    const results = await Promise.all(checks.map(([, p]) => p));
    const present: IntegrityItem[] = [];
    const missing: IntegrityItem[] = [];
    checks.forEach(([item], i) => (results[i] ? present : missing).push(item));

    const complete = missing.length === 0;
    return {
      codigoBncc,
      complete,
      missing,
      present,
      status: complete ? "completa" : "incompleta",
    };
  },

  async isPublishable(codigoBncc: string): Promise<boolean> {
    return (await this.validate(codigoBncc)).complete;
  },
};
