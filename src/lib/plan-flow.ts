import { useNavigationStore, type NavigationContext } from "@/lib/navigation-context";
import { supabase } from "@/database/supabase/client";
import { syncPremiumCompletion } from "@/modules/learning-plans/mirror";

type LegacyPlanTable =
  | "curriculo_anual_itens"
  | "primeiros_anos_itens"
  | "neuro_plano_itens"
  | "plano_anual_itens";

function tableFromContext(ctx: NavigationContext | null | undefined): LegacyPlanTable | null {
  if (!ctx?.isPlanFlow) return null;
  if (ctx.planType === "school" || ctx.originRoute === "/curriculo-anual") return "curriculo_anual_itens";
  if (ctx.planType === "literacy" || ctx.originRoute === "/primeiros-anos") return "primeiros_anos_itens";
  if (ctx.planType === "support" || ctx.originRoute === "/plano-neuro") return "neuro_plano_itens";
  if (ctx.originRoute === "/plano-anual") return "plano_anual_itens";
  return null;
}

export function currentPlanItemId(ctx: NavigationContext | null | undefined): string | null {
  if (!ctx) return null;
  if (ctx.sessionPlanItemIds?.length) {
    const idx = Math.max(0, Math.min(ctx.sessionIndex ?? 0, ctx.sessionPlanItemIds.length - 1));
    return ctx.sessionPlanItemIds[idx] || ctx.lessonId || null;
  }
  return ctx.lessonId ?? null;
}

export function currentPremiumItemId(ctx: NavigationContext | null | undefined): string | null {
  if (!ctx) return null;
  if (ctx.sessionPremiumItemIds?.length) {
    const idx = Math.max(0, Math.min(ctx.sessionIndex ?? 0, ctx.sessionPremiumItemIds.length - 1));
    return ctx.sessionPremiumItemIds[idx] || ctx.premiumItemId || null;
  }
  return ctx.premiumItemId ?? null;
}

/**
 * Avança uma fila diária Premium que pode atravessar módulos diferentes
 * (ex.: leitura -> matemática -> Neuro-Treino) sem devolver a criança ao
 * catálogo entre uma atividade e outra. Retorna a próxima rota, se houver.
 */
export function advancePlanFlow(ctx: NavigationContext | null | undefined): string | null {
  if (!ctx?.sessionRoutes?.length) return null;
  const nextIdx = (ctx.sessionIndex ?? 0) + 1;
  const nextRoute = ctx.sessionRoutes[nextIdx];
  if (!nextRoute) return null;

  const nextContext: NavigationContext = {
    ...ctx,
    sessionIndex: nextIdx,
    lessonId: ctx.sessionPlanItemIds?.[nextIdx] ?? undefined,
    premiumItemId: ctx.sessionPremiumItemIds?.[nextIdx] || undefined,
    planType: ctx.sessionPlanTypes?.[nextIdx] ?? ctx.planType,
    originModule: ctx.sessionPlanTypes?.[nextIdx] === "support" ? "neuro-treino" : ctx.sessionPlanTypes?.[nextIdx] === "school" ? "escola-brilha" : "alfabetizacao",
    timestamp: Date.now(),
  };
  useNavigationStore.getState().setContext(nextContext);
  return nextRoute;
}

/**
 * Sincroniza a conclusão da aula/atividade com o item que a abriu no plano.
 * A função é tolerante a rotas antigas para permitir migração gradual.
 */
export async function completePlanItem(ctx: NavigationContext | null | undefined): Promise<boolean> {
  const itemId = currentPlanItemId(ctx);
  const premiumItemId = currentPremiumItemId(ctx);
  const table = tableFromContext(ctx);
  const completedAt = new Date().toISOString();
  let completed = false;

  // Novo contrato Premium: permite concluir itens que não possuem equivalente legado
  // (ex.: apoio do Brilha Vida) e acelera a migração das telas.
  if (premiumItemId) {
    const { data: premiumRow, error: premiumError } = await supabase
      .from("learning_plan_items" as any)
      .update({ status: "completed", completed_at: completedAt } as any)
      .eq("id", premiumItemId)
      .select("plan_id")
      .maybeSingle();
    if (!premiumError) {
      completed = true;
      if ((premiumRow as any)?.plan_id) {
        const { finalizePremiumPlanIfDone } = await import("@/modules/learning-plans/mirror");
        await finalizePremiumPlanIfDone((premiumRow as any).plan_id).catch(() => undefined);
      }
    }
  }

  if (itemId && table && itemId !== premiumItemId) {
    const { error } = await supabase
      .from(table as any)
      .update({ concluido: true, concluido_em: completedAt } as any)
      .eq("id", itemId);

    if (error) {
      console.error("[plan-flow] falha ao concluir item do plano", { table, itemId, error });
    } else {
      completed = true;
      await syncPremiumCompletion(table, itemId, true).catch(() => undefined);
    }
  }

  if (!completed) return false;

  // Mantém a camada diária em sincronia.
  let q = supabase.from("routine_items" as any).update({ status: "concluido", updated_at: completedAt } as any);
  if (premiumItemId) q = q.eq("premium_item_id", premiumItemId);
  else if (itemId) q = q.eq("source_id", itemId);
  await (q as any).then(() => undefined).catch(() => undefined);

  return true;
}
