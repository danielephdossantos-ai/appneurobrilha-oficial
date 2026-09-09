import { supabase } from "@/database/supabase/client";
import {
  nextPromptState,
  recordIndependentAttempt,
  type PromptLevel,
  type PromptState,
} from "./promptingEngine";

/**
 * Fonte única de métricas por habilidade do Neuro Treino.
 *
 * - `activity_logs` recebe o log bruto (feito no useNeuroAdaptive).
 * - `child_skill_mastery` recebe o agregado + estado de prompting ABA aqui.
 *
 * Cada resposta:
 *  1) atualiza hits/errors/total/tempo/mastery_percentage
 *  2) recalcula prompt_level e consec_correct (hierarquia de ajuda com fading)
 *  3) se a resposta ocorreu no nível independente, acumula em indep_sessions
 */

export interface SkillAttemptInput {
  childId: string;
  skillCode: string;
  materia: string;
  isCorrect: boolean;
  durationMs: number;
}

function computeMasteryPercentage(hits: number, total: number): number {
  if (total <= 0) return 0;
  const successRate = hits / total;
  const confidence = Math.min(1, total / 15);
  return Math.round(successRate * confidence * 100);
}

export interface SkillMasteryRow {
  hits_count: number;
  errors_count: number;
  total_attempts: number;
  total_time_seconds: number;
  prompt_level: number;
  consec_correct: number;
  indep_sessions: { hits: number; total: number; at: string }[];
}

/** Carrega o estado atual (ou defaults) para uma habilidade da criança. */
export async function loadSkillState(
  childId: string,
  skillCode: string,
): Promise<SkillMasteryRow | null> {
  const { data, error } = await supabase
    .from("child_skill_mastery")
    .select(
      "hits_count, errors_count, total_attempts, total_time_seconds, prompt_level, consec_correct, indep_sessions",
    )
    .eq("child_id", childId)
    .eq("skill_code", skillCode)
    .maybeSingle();
  if (error && error.code !== "PGRST116") {
    console.warn("[neuroMetrics] loadSkillState error", error);
  }
  return (data as SkillMasteryRow) ?? null;
}

export async function recordSkillAttempt(input: SkillAttemptInput): Promise<PromptState | null> {
  const { childId, skillCode, materia, isCorrect, durationMs } = input;
  try {
    const existing = await loadSkillState(childId, skillCode);

    const hits = (existing?.hits_count ?? 0) + (isCorrect ? 1 : 0);
    const errors = (existing?.errors_count ?? 0) + (isCorrect ? 0 : 1);
    const total = (existing?.total_attempts ?? 0) + 1;
    const time = (existing?.total_time_seconds ?? 0) + Math.round(durationMs / 1000);
    const successRate = hits / total;
    const masteryPct = computeMasteryPercentage(hits, total);

    const prevState: PromptState = {
      level: (existing?.prompt_level as PromptLevel) ?? 4,
      consecCorrect: existing?.consec_correct ?? 0,
      indepSessions: existing?.indep_sessions ?? [],
    };
    const nextState = nextPromptState(prevState, isCorrect);
    // Só conta pro critério de mastery quando a tentativa acontece em nível 4
    const indepSessions =
      prevState.level === 4
        ? recordIndependentAttempt(prevState.indepSessions, isCorrect)
        : prevState.indepSessions;

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
        prompt_level: nextState.level,
        consec_correct: nextState.consecCorrect,
        indep_sessions: indepSessions,
        last_attempt_at: new Date().toISOString(),
      },
      { onConflict: "child_id,skill_code" },
    );

    if (upsertError) {
      console.warn("[neuroMetrics] upsert error", upsertError);
    }

    return { ...nextState, indepSessions };
  } catch (err) {
    console.warn("[neuroMetrics] recordSkillAttempt failed", err);
    return null;
  }
}
