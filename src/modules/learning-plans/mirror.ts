import { supabase } from "@/database/supabase/client";
import type { LearningPlanType } from "./types";

const PLANS = "learning_plans";
const ITEMS = "learning_plan_items";

type MirrorBase = {
  childId: string;
  planType: LearningPlanType;
  legacyPlanId: string;
  legacySource: string;
  weeksTotal: number;
  minutesPerDay: number;
  daysPerWeek: number;
  grade?: string | null;
  stage?: string | null;
  profileSnapshot?: unknown;
  items: Array<{
    legacyItemId: string | null;
    week: number;
    day: number;
    sequenceOrder: number;
    itemRole: "teach" | "guided_practice" | "practice" | "review" | "reinforcement" | "assessment" | "cognitive_training" | "support";
    source: string;
    sourceId: string;
    title: string;
    route: string;
    subject?: string | null;
    bnccCode?: string | null;
    estimatedMinutes?: number;
    status?: string;
    selectionReason?: string | null;
    metadata?: Record<string, unknown>;
  }>;
};

/**
 * Espelha o plano legado na camada Premium. A UI pode migrar gradualmente,
 * sem perder histórico nem exigir uma troca "big bang" de todas as telas.
 */
export async function mirrorLegacyPlan(input: MirrorBase): Promise<string> {
  const { data: existing } = await supabase
    .from(PLANS)
    .select("id")
    .eq("child_id", input.childId)
    .eq("plan_type", input.planType)
    .in("status", ["draft", "active", "paused", "needs_review"])
    .maybeSingle();

  if (existing) {
    // Preserva histórico do ciclo anterior. O plano aberto deixa de competir
    // com o novo, mas seus itens/conclusões continuam disponíveis para relatório.
    await supabase.from(PLANS).update({
      status: "cancelled",
      updated_at: new Date().toISOString(),
      generation_reason: `Substituído por nova geração a partir de ${input.legacySource}`,
    }).eq("id", (existing as any).id);
  }

  const now = new Date();
  const ends = new Date(now);
  ends.setDate(ends.getDate() + Math.max(1, input.weeksTotal) * 7 - 1);

  const { data: plan, error } = await supabase
    .from(PLANS)
    .insert({
      child_id: input.childId,
      plan_type: input.planType,
      status: "active",
      academic_year: now.getFullYear(),
      stage: input.stage ?? null,
      grade: input.grade ?? null,
      starts_at: now.toISOString().slice(0, 10),
      ends_at: ends.toISOString().slice(0, 10),
      weeks_total: input.weeksTotal,
      minutes_per_day: input.minutesPerDay,
      days_per_week: input.daysPerWeek,
      generation_reason: `Migrado de ${input.legacySource}`,
      profile_snapshot: (input.profileSnapshot ?? null) as any,
      rules_version: "premium-v1",
      content_map_version: "premium-v1",
    })
    .select("id")
    .single();
    
  if (error || !plan) throw error ?? new Error("Falha ao criar espelho Premium do plano.");

  const rows = input.items.map((item) => ({
    plan_id: (plan as any).id,
    child_id: input.childId,
    week: item.week,
    day: item.day,
    sequence_order: item.sequenceOrder,
    item_role: item.itemRole,
    source: item.source,
    source_id: item.sourceId,
    title: item.title,
    route: item.route,
    subject: item.subject ?? null,
    bncc_code: item.bnccCode ?? null,
    estimated_minutes: item.estimatedMinutes ?? 10,
    status: item.status ?? "available",
    selection_reason: item.selectionReason ?? null,
    legacy_source: input.legacySource,
    legacy_item_id: item.legacyItemId,
    metadata: item.metadata ?? {},
  }));

  for (let i = 0; i < rows.length; i += 500) {
    const { error: itemError } = await supabase.from(ITEMS).insert(rows.slice(i, i + 500) as any);
    if (itemError) {
      await supabase.from(PLANS).delete().eq("id", (plan as any).id);
      throw itemError;
    }
  }
  return (plan as any).id;
}

export async function syncPremiumCompletion(legacySource: string, legacyItemId: string, completed: boolean) {
  const completedAt = completed ? new Date().toISOString() : null;
  const { data, error } = await supabase
    .from(ITEMS)
    .update({ status: completed ? "completed" : "available", completed_at: completedAt })
    .eq("legacy_source", legacySource)
    .eq("legacy_item_id", legacyItemId)
    .select("plan_id");
  if (error) return;
  const planIds = [...new Set(((data as any[]) ?? []).map((r) => r.plan_id).filter(Boolean))];
  for (const planId of planIds) await finalizePremiumPlanIfDone(planId);
}

export async function finalizePremiumPlanIfDone(planId: string) {
  const { count: remaining } = await supabase
    .from(ITEMS)
    .select("id", { count: "exact", head: true })
    .eq("plan_id", planId)
    .not("status", "in", '("completed","skipped","cancelled")');
  if ((remaining ?? 0) > 0) return false;
  await supabase
    .from(PLANS)
    .update({ status: "completed", completed_at: new Date().toISOString(), updated_at: new Date().toISOString() })
    .eq("id", planId);
  return true;
}