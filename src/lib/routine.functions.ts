import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const routineItemSchema = z.object({
  id: z.string().uuid().optional(),
  childId: z.string().uuid(),
  title: z.string().min(1),
  description: z.string().optional().nullable(),
  type: z.enum([
    "estudo",
    "atividade_neurobrilha",
    "escola",
    "alimentacao",
    "higiene",
    "sono",
    "lazer",
    "compromisso",
    "outro",
  ]),
  startTime: z.string(),
  durationMinutes: z.number().int().min(1).default(30),
  date: z.string().optional().nullable(),
  recurrenceDays: z.array(z.number().min(0).max(6)).optional().nullable(),
  reminderEnabled: z.boolean().default(false),
  reminderMinutesBefore: z.number().int().min(0).default(0),
  notifyParentOnComplete: z.boolean().default(false),
  status: z.enum(["pendente", "concluido", "atrasado", "cancelado"]).default("pendente"),
  source: z.string().default("manual"),
  sourceId: z.string().optional().nullable(),
  route: z.string().optional().nullable(),
  premiumItemId: z.string().uuid().optional().nullable(),
});

export type RoutineItem = z.infer<typeof routineItemSchema>;

type TemplateItem = Pick<RoutineItem, "title" | "type" | "startTime" | "durationMinutes"> & {
  description?: string | null;
  reminderMinutesBefore?: number;
};

async function authOwnedChild(childId: string) {
  const { supabase } = await import("@/integrations/supabase/client");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data: child, error } = await supabase
    .from("children")
    .select("id,user_id,nome")
    .eq("id", childId)
    .eq("user_id", user.id)
    .maybeSingle();
  if (error) throw error;
  if (!child) throw new Error("Criança não encontrada para este responsável.");
  return { supabase, user, child };
}

export const getRoutineItems = createServerFn({ method: "GET" })
  .validator((d: unknown) => z.object({ childId: z.string().uuid(), date: z.string() }).parse(d))
  .handler(async ({ data }) => {
    const { supabase } = await authOwnedChild(data.childId);
    const dayOfWeek = new Date(`${data.date}T12:00:00`).getDay();

    const { data: rows, error } = await supabase
      .from("routine_items")
      .select("*")
      .eq("child_id", data.childId)
      .or(`date.eq.${data.date},date.is.null`)
      .order("start_time", { ascending: true });
    if (error) throw error;

    const visible = (rows ?? []).filter((item: any) => {
      if (item.date === data.date) return true;
      if (!item.date && Array.isArray(item.recurrence_days)) return item.recurrence_days.includes(dayOfWeek);
      return false;
    });

    const ids = visible.map((i: any) => i.id);
    const { data: occurrences } = ids.length
      ? await supabase.from("routine_item_occurrences" as any).select("routine_item_id,status").in("routine_item_id", ids).eq("occurrence_date", data.date)
      : { data: [] as any[] };
    const occurrenceStatus = new Map(((occurrences as any[]) ?? []).map((o) => [o.routine_item_id, o.status]));

    return visible
      .map((item: any) => ({
        id: item.id,
        childId: item.child_id,
        title: item.title,
        description: item.description,
        type: item.type as RoutineItem["type"],
        startTime: String(item.start_time).slice(0, 5),
        durationMinutes: item.duration_minutes || 30,
        date: item.date,
        recurrenceDays: item.recurrence_days as number[] | null,
        reminderEnabled: item.reminder_enabled,
        reminderMinutesBefore: item.reminder_minutes_before ?? 0,
        notifyParentOnComplete: item.notify_parent_on_complete ?? false,
        status: (occurrenceStatus.get(item.id) ?? item.status) as RoutineItem["status"],
        source: item.source || "manual",
        sourceId: item.source_id,
        route: item.route ?? null,
        premiumItemId: item.premium_item_id ?? null,
      }))
      .filter((item: RoutineItem) => item.status !== "cancelado");
  });

export const saveRoutineItem = createServerFn({ method: "POST" })
  .validator((d: unknown) => routineItemSchema.parse(d))
  .handler(async ({ data }) => {
    const { supabase, user } = await authOwnedChild(data.childId);
    const payload = {
      child_id: data.childId,
      parent_id: user.id,
      title: data.title,
      description: data.description,
      type: data.type,
      start_time: data.startTime,
      duration_minutes: data.durationMinutes,
      date: data.date,
      recurrence_days: data.recurrenceDays,
      reminder_enabled: data.reminderEnabled,
      reminder_minutes_before: data.reminderMinutesBefore,
      notify_parent_on_complete: data.notifyParentOnComplete,
      status: data.status,
      source: data.source,
      source_id: data.sourceId,
      route: data.route,
      premium_item_id: data.premiumItemId,
    };

    if (data.id) {
      const { data: updated, error } = await supabase
        .from("routine_items")
        .update(payload as any)
        .eq("id", data.id)
        .eq("child_id", data.childId)
        .select()
        .single();
      if (error) throw error;
      return updated;
    }

    const { data: inserted, error } = await supabase.from("routine_items").insert(payload as any).select().single();
    if (error) throw error;
    return inserted;
  });

export const applyRoutineTemplate = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({
    childId: z.string().uuid(),
    items: z.array(z.object({
      title: z.string().min(1),
      description: z.string().optional().nullable(),
      type: z.enum(["estudo", "atividade_neurobrilha", "escola", "alimentacao", "higiene", "sono", "lazer", "compromisso", "outro"]),
      startTime: z.string(),
      durationMinutes: z.number().int().min(1),
      reminderMinutesBefore: z.number().int().min(0).optional(),
    })).min(1).max(20),
  }).parse(d))
  .handler(async ({ data }) => {
    const { supabase, user } = await authOwnedChild(data.childId);
    const weekdays = [1, 2, 3, 4, 5];
    const payload = (data.items as TemplateItem[]).map((item) => ({
      child_id: data.childId,
      parent_id: user.id,
      title: item.title,
      description: item.description ?? null,
      type: item.type,
      start_time: item.startTime,
      duration_minutes: item.durationMinutes,
      date: null,
      recurrence_days: weekdays,
      reminder_enabled: true,
      reminder_minutes_before: item.reminderMinutesBefore ?? 5,
      notify_parent_on_complete: false,
      status: "pendente",
      source: "manual",
    }));
    const { error } = await supabase.from("routine_items").insert(payload as any);
    if (error) throw error;
    return { success: true, count: payload.length };
  });

export const deleteRoutineItem = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({ id: z.string().uuid(), childId: z.string().uuid() }).parse(d))
  .handler(async ({ data }) => {
    const { supabase } = await authOwnedChild(data.childId);
    const { error } = await supabase.from("routine_items").delete().eq("id", data.id).eq("child_id", data.childId);
    if (error) throw error;
    return { success: true };
  });

export const cancelRoutineOccurrence = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({ id: z.string().uuid(), childId: z.string().uuid(), date: z.string() }).parse(d))
  .handler(async ({ data }) => {
    const { supabase } = await authOwnedChild(data.childId);
    const { error } = await supabase.from("routine_item_occurrences" as any).upsert({
      routine_item_id: data.id,
      child_id: data.childId,
      occurrence_date: data.date,
      status: "cancelado",
      completed_at: null,
      updated_at: new Date().toISOString(),
    } as any, { onConflict: "routine_item_id,occurrence_date" });
    if (error) throw error;
    return { success: true };
  });

export const toggleRoutineItemStatus = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({
    id: z.string().uuid(),
    childId: z.string().uuid(),
    date: z.string(),
    status: z.enum(["pendente", "concluido", "atrasado", "cancelado"]),
  }).parse(d))
  .handler(async ({ data }) => {
    const { supabase, user, child } = await authOwnedChild(data.childId);
    const { data: item, error: itemError } = await supabase
      .from("routine_items")
      .select("id,title,date,recurrence_days,child_id,notify_parent_on_complete")
      .eq("id", data.id)
      .eq("child_id", data.childId)
      .single();
    if (itemError) throw itemError;

    if (!item.date && Array.isArray(item.recurrence_days)) {
      const { error } = await supabase.from("routine_item_occurrences" as any).upsert({
        routine_item_id: data.id,
        child_id: data.childId,
        occurrence_date: data.date,
        status: data.status,
        completed_at: data.status === "concluido" ? new Date().toISOString() : null,
        updated_at: new Date().toISOString(),
      } as any, { onConflict: "routine_item_id,occurrence_date" });
      if (error) throw error;
    } else {
      const { error } = await supabase.from("routine_items").update({ status: data.status }).eq("id", data.id).eq("child_id", data.childId);
      if (error) throw error;
    }

    if (data.status === "concluido") {
      // Afinidade cresce por hábitos reais da jornada, sem transformar rotina em moeda infinita.
      try {
        await supabase.rpc("reward_child_journey" as any, { p_child_id: data.childId, p_coins: 0, p_mascot_xp: 2, p_affinity: 1 });
      } catch (err) {
        console.warn("Não foi possível atualizar vínculo com mascote:", err);
      }
    }

    if (data.status === "concluido" && (item as any).notify_parent_on_complete) {
      const { error: logError } = await supabase.from("routine_completion_log" as any).insert({
        routine_item_id: data.id,
        child_id: data.childId,
        occurrence_date: data.date,
      } as any);
      // 23505 = já avisado nesta ocorrência. Não duplica inbox nem push.
      if (!logError) {
        const title = `${child.nome} concluiu uma rotina ✓`;
        const message = `${child.nome} marcou “${item.title}” como concluído.`;
        await supabase.from("notifications").insert({
          user_id: user.id,
          child_id: data.childId,
          title,
          message,
          type: "rotina",
          read: false,
          scheduled_for: new Date().toISOString(),
        });
        try {
          await supabase.functions.invoke("send-routine-completion", { body: { childId: data.childId, title, message } });
        } catch (err) {
          console.warn("Push de conclusão não enviado:", err);
        }
      } else if ((logError as any).code !== "23505") {
        console.warn("Não foi possível registrar aviso de conclusão:", logError);
      }
    }
    return { success: true };
  });
