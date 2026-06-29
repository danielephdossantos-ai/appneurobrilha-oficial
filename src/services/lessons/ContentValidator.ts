import { supabase } from "@/integrations/supabase/client";

export interface ContentValidationResult {
  ok: boolean;
  missing: Array<"explicacao" | "atividade" | "quiz" | "resumo">;
  message: string;
}

export const CONTENT_PLACEHOLDER = "Conteúdo em desenvolvimento.";

async function exists(table: string, codigoBncc: string): Promise<boolean> {
  const { count, error } = await supabase
    .from(table as never)
    .select("id", { count: "exact", head: true })
    .eq("codigo_bncc", codigoBncc);
  if (error) return false;
  return (count ?? 0) > 0;
}

export const ContentValidator = {
  async validate(codigoBncc: string): Promise<ContentValidationResult> {
    const [hasExpl, hasAtiv, hasQuiz, hasResumo] = await Promise.all([
      exists("lesson_explanations", codigoBncc),
      exists("lesson_activities", codigoBncc),
      exists("lesson_quizzes", codigoBncc),
      exists("lesson_reviews_full", codigoBncc),
    ]);

    const missing: ContentValidationResult["missing"] = [];
    if (!hasExpl) missing.push("explicacao");
    if (!hasAtiv) missing.push("atividade");
    if (!hasQuiz) missing.push("quiz");
    if (!hasResumo) missing.push("resumo");

    return {
      ok: missing.length === 0,
      missing,
      message: missing.length === 0 ? "" : CONTENT_PLACEHOLDER,
    };
  },
};
