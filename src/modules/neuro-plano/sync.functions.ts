import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const DAY_MS = 86400000;
function weekFrom(start: string | null | undefined, date: string, max: number) {
  if (!start) return 1;
  const a = new Date(`${String(start).slice(0, 10)}T12:00:00`).getTime();
  const b = new Date(`${date}T12:00:00`).getTime();
  const w = Math.floor(Math.max(0, b - a) / (7 * DAY_MS)) + 1;
  return Math.max(1, Math.min(Math.max(1, max), w));
}

const ROLE_LABEL: Record<string, string> = {
  teach: "Ensino",
  guided_practice: "Prática guiada",
  practice: "Prática",
  review: "Revisão",
  reinforcement: "Reforço",
  assessment: "Verificação",
  cognitive_training: "Treino complementar",
  support: "Apoio",
};

/**
 * Espelha o que deve ser feito hoje na Rotina.
 * Preferência: learning_plans Premium. Fallback: planos legados para crianças
 * que ainda não foram regeneradas após a migração.
 */
export const syncPlansToRoutine = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({ childId: z.string().uuid(), date: z.string() }).parse(d))
  .handler(async ({ data }) => {
    // Valida ownership com a sessão do responsável ANTES de usar Service Role.
    const { supabase: userSupabase } = await import("@/integrations/supabase/client");
    const { data: { user } } = await userSupabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");
    const { data: ownedChild } = await userSupabase.from("children").select("id").eq("id", data.childId).eq("user_id", user.id).maybeSingle();
    if (!ownedChild?.id) throw new Error("Acesso não autorizado ao perfil da criança.");

    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );
    const { data: child } = await supabase.from("children").select("user_id").eq("id", data.childId).single();
    if (!child?.user_id) throw new Error("Criança não encontrada.");

    const jsDay = new Date(`${data.date}T12:00:00`).getDay();
    const dia = jsDay === 0 ? 7 : jsDay;
    const routineItems: any[] = [];
    const defaultTimes = ["15:00", "15:25", "15:50", "16:15", "16:40"];

    // 1) Contrato Premium: o árbitro central decide a carga de hoje.
    const { buildDailyPremiumQueue } = await import("@/modules/learning-plans/premium-engine.server");
    const premiumQueue = await buildDailyPremiumQueue(supabase, data.childId, data.date);
    for (const item of premiumQueue) {
      routineItems.push({
        title: item.title,
        description: `${ROLE_LABEL[item.itemRole] ?? "Plano"}${item.subject ? ` · ${item.subject}` : ""}${item.selectionReason ? ` · ${item.selectionReason}` : ""}`,
        type: item.planType === "support" ? "atividade_neurobrilha" : item.planType === "school" ? "escola" : "estudo",
        duration_minutes: item.estimatedMinutes,
        source_id: item.legacyItemId ?? null,
        premium_item_id: item.id,
        route: item.route,
      });
    }

    // 2) Fallback legado: necessário somente para crianças cujos planos ainda
    // não foram espelhados no contrato Premium.
    if (routineItems.length === 0) {
      const { data: alfa } = await supabase.from("primeiros_anos_plano").select("id,gerado_em,semanas_totais").eq("child_id", data.childId).maybeSingle();
      if (alfa) {
        const wk = weekFrom(alfa.gerado_em, data.date, alfa.semanas_totais ?? 40);
        const { data: itens } = await supabase.from("primeiros_anos_itens").select("*")
          .eq("plano_id", alfa.id).eq("semana", wk).eq("dia_semana", dia).eq("concluido", false).order("ordem").limit(2);
        for (const item of itens ?? []) routineItems.push({
          title: item.titulo, description: `Alfabetização · ${item.trilha_label}`, type: "estudo",
          duration_minutes: item.minutos ?? 10, source_id: item.id, premium_item_id: null, route: item.rota,
        });
      }

      const { data: cur } = await supabase.from("curriculo_anual").select("id,gerado_em,semanas_por_semestre").eq("child_id", data.childId).maybeSingle();
      if (cur) {
        const perSem = cur.semanas_por_semestre ?? 20;
        const globalWeek = weekFrom(cur.gerado_em, data.date, perSem * 2);
        const semestre = globalWeek > perSem ? 2 : 1;
        const wk = globalWeek > perSem ? globalWeek - perSem : globalWeek;
        const { data: itens } = await supabase.from("curriculo_anual_itens").select("*")
          .eq("curriculo_id", cur.id).eq("semestre", semestre).eq("semana", wk).eq("dia_semana", dia).eq("concluido", false).order("ordem").limit(2);
        for (const item of itens ?? []) routineItems.push({
          title: item.titulo, description: `Escola Brilha · ${item.disciplina}`, type: "escola",
          duration_minutes: item.minutos ?? 20, source_id: item.id, premium_item_id: null, route: item.rota,
        });
      }

      const { data: neuro } = await supabase.from("neuro_plano").select("id,gerado_em,semanas").eq("child_id", data.childId).maybeSingle();
      if (neuro) {
        const wk = weekFrom(neuro.gerado_em, data.date, neuro.semanas ?? 12);
        const { data: itens } = await supabase.from("neuro_plano_itens").select("*")
          .eq("plano_id", neuro.id).eq("semana", wk).eq("dia_semana", dia).eq("concluido", false).order("ordem").limit(1);
        for (const item of itens ?? []) routineItems.push({
          title: `${item.emoji ?? "🧠"} ${item.nome}`, description: item.por_que ?? item.objetivo ?? "Treino complementar",
          type: "atividade_neurobrilha", duration_minutes: item.minutos ?? 10, source_id: item.id, premium_item_id: null, route: item.rota,
        });
      }
    }

    // Preserva horários e lembretes que a mãe já editou. Sincronizar o plano
    // não pode apagar uma preferência configurada na Rotina.
    const { data: existing } = await supabase.from("routine_items")
      .select("id,source_id,premium_item_id,start_time,reminder_enabled,reminder_minutes_before,status")
      .eq("child_id", data.childId)
      .eq("date", data.date)
      .eq("source", "learning_plan");
    const byPremium = new Map((existing ?? []).filter((x: any) => x.premium_item_id).map((x: any) => [x.premium_item_id, x]));
    const bySource = new Map((existing ?? []).filter((x: any) => x.source_id).map((x: any) => [x.source_id, x]));

    const keepIds: string[] = [];
    for (let idx = 0; idx < routineItems.slice(0, 5).length; idx++) {
      const item = routineItems[idx];
      const previous: any = (item.premium_item_id && byPremium.get(item.premium_item_id)) || bySource.get(item.source_id);
      const payload = {
        child_id: data.childId,
        parent_id: child.user_id,
        title: item.title,
        description: item.description,
        type: item.type,
        start_time: previous?.start_time ?? defaultTimes[idx] ?? "17:00",
        duration_minutes: item.duration_minutes,
        date: data.date,
        status: previous?.status === "concluido" ? "concluido" : "pendente",
        source: "learning_plan",
        source_id: item.source_id,
        premium_item_id: item.premium_item_id,
        route: item.route,
        reminder_enabled: previous?.reminder_enabled ?? true,
        reminder_minutes_before: previous?.reminder_minutes_before ?? 0,
      };

      if (previous?.id) {
        const { error } = await supabase.from("routine_items").update(payload).eq("id", previous.id);
        if (error) throw error;
        keepIds.push(previous.id);
      } else {
        const { data: inserted, error } = await supabase.from("routine_items").insert(payload).select("id").single();
        if (error) throw error;
        if (inserted?.id) keepIds.push(inserted.id);
      }
    }

    // Remove somente itens automáticos que deixaram de fazer parte da fila do
    // dia. Rotinas manuais nunca são tocadas por esta sincronização.
    const stale = (existing ?? []).map((x: any) => x.id).filter((id: string) => !keepIds.includes(id));
    if (stale.length) await supabase.from("routine_items").delete().in("id", stale);

    return { success: true, count: keepIds.length };
  });
