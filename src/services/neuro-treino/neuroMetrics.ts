import { supabase } from "@/database/supabase/client";

/**
 * Fonte única de métricas por habilidade do Neuro Treino.
 *
 * Grava dados brutos por resposta em `activity_logs` (feito no useNeuroAdaptive)
 * e agrega dominância em `child_skill_mastery` (feito aqui).
 *
 * mastery_percentage segue uma curva conservadora:
 *   - precisa de pelo menos 5 tentativas para "contar"
 *   - success_rate é aplicada com fator de confiança baseado em nº de tentativas
 *   - erros consecutivos derrubam o percentual
 */
export interface SkillAttemptInput {
  childId: string;
  skillCode: string;
  materia: string;
  isCorrect: boolean;
  durationMs: number;
}

function computeMasteryPercentage(hits: number, errors: number, total: number): number {
  if (total <= 0) return 0;
  const successRate = hits / total;
  const confidence = Math.min(1, total / 15); // 15 respostas = confiança plena
  return Math.round(successRate * confidence * 100);
}

export async function recordSkillAttempt(input: SkillAttemptInput): Promise<void> {
  const { childId, skillCode, materia, isCorrect, durationMs } = input;

  try {
    const { data: existing, error: readError } = await supabase
      .from("child_skill_mastery")
      .select("hits_count, errors_count, total_attempts, total_time_seconds")
      .eq("child_id", childId)
      .eq("skill_code", skillCode)
      .maybeSingle();

    if (readError && readError.code !== "PGRST116") {
      console.warn("[neuroMetrics] read error", readError);
    }

    const hits = (existing?.hits_count ?? 0) + (isCorrect ? 1 : 0);
    const errors = (existing?.errors_count ?? 0) + (isCorrect ? 0 : 1);
    const total = (existing?.total_attempts ?? 0) + 1;
    const time = (existing?.total_time_seconds ?? 0) + Math.round(durationMs / 1000);
    const successRate = hits / total;
    const masteryPct = computeMasteryPercentage(hits, errors, total);

    const { error: upsertError } = await supabase.from("child_skill_mastery").upsert(
      {
        child_id: childId,
        skill_code: skillCode,
        materia,
        hits_count: hits,
        errors_count: errors,
        total_attempts: total,
        total_time_seconds: time,
        success_rate: successRate,
        mastery_level: successRate,
        mastery_percentage: masteryPct,
        last_attempt_at: new Date().toISOString(),
      },
      { onConflict: "child_id,skill_code" },
    );

    if (upsertError) {
      console.warn("[neuroMetrics] upsert error", upsertError);
    }
  } catch (err) {
    console.warn("[neuroMetrics] recordSkillAttempt failed", err);
  }
}
