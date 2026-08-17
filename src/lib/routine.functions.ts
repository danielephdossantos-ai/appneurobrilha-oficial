import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const routineItemSchema = z.object({
  id: z.string().uuid().optional(),
  childId: z.string().uuid(),
  title: z.string().min(1),
  description: z.string().optional().nullable(),
  type: z.enum([
    'estudo', 
    'atividade_neurobrilha', 
    'terapia', 
    'escola', 
    'alimentacao', 
    'higiene', 
    'sono', 
    'lazer', 
    'compromisso', 
    'outro'
  ]),
  startTime: z.string(), // "HH:mm"
  durationMinutes: z.number().int().min(1).default(30),
  date: z.string().optional().nullable(), // "yyyy-mm-dd"
  recurrenceDays: z.array(z.number().min(0).max(6)).optional().nullable(),
  reminderEnabled: z.boolean().default(false),
  reminderMinutesBefore: z.number().int().min(0).default(0),
  status: z.enum(['pendente', 'concluido', 'atrasado', 'cancelado']).default('pendente'),
  source: z.string().default('manual'),
  sourceId: z.string().optional().nullable(),
});

export type RoutineItem = z.infer<typeof routineItemSchema>;

export const getRoutineItems = createServerFn({ method: "GET" })
  .validator((d: unknown) => z.object({
    childId: z.string().uuid(),
    date: z.string() // "yyyy-mm-dd"
  }).parse(d))
  .handler(async ({ data }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    const dayOfWeek = new Date(`${data.date}T12:00:00`).getDay();

    const { data: manualItems, error } = await supabase
      .from("routine_items")
      .select("*")
      .eq("child_id", data.childId)
      .or(`date.eq.${data.date},date.is.null`)
      .order("start_time", { ascending: true });

    if (error) throw error;

    const filteredManual = manualItems?.filter(item => {
      if (item.date === data.date) return true;
      if (!item.date && item.recurrence_days) {
        return (item.recurrence_days as number[]).includes(dayOfWeek);
      }
      return false;
    }) || [];

    return filteredManual.map(item => ({
      id: item.id,
      childId: item.child_id,
      title: item.title,
      description: item.description,
      type: item.type as RoutineItem['type'],
      startTime: item.start_time.slice(0, 5),
      durationMinutes: item.duration_minutes || 30,
      date: item.date,
      recurrenceDays: item.recurrence_days as number[] | null,
      reminderEnabled: item.reminder_enabled,
      reminderMinutesBefore: item.reminder_minutes_before,
      status: item.status as RoutineItem['status'],
      source: item.source || 'manual',
      sourceId: item.source_id,
    }));
  });

export const saveRoutineItem = createServerFn({ method: "POST" })
  .validator((d: unknown) => routineItemSchema.parse(d))
  .handler(async ({ data }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    const payload = {
      child_id: data.childId,
      title: data.title,
      description: data.description,
      type: data.type,
      start_time: data.startTime,
      duration_minutes: data.durationMinutes,
      date: data.date,
      recurrence_days: data.recurrenceDays,
      reminder_enabled: data.reminderEnabled,
      reminder_minutes_before: data.reminderMinutesBefore,
      status: data.status,
      source: data.source,
      source_id: data.sourceId,
    };

    if (data.id) {
      const { data: updated, error } = await supabase
        .from("routine_items")
        .update(payload)
        .eq("id", data.id)
        .select()
        .single();
      if (error) throw error;
      return updated;
    } else {
      const { data: inserted, error } = await supabase
        .from("routine_items")
        .insert(payload)
        .select()
        .single();
      if (error) throw error;
      return inserted;
    }
  });

export const deleteRoutineItem = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    const { error } = await supabase
      .from("routine_items")
      .delete()
      .eq("id", data.id);
    if (error) throw error;
    return { success: true };
  });

export const toggleRoutineItemStatus = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({
    id: z.string().uuid(),
    status: z.enum(['pendente', 'concluido', 'atrasado', 'cancelado'])
  }).parse(d))
  .handler(async ({ data }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    const { error } = await supabase
      .from("routine_items")
      .update({ status: data.status })
      .eq("id", data.id);
    if (error) throw error;
    return { success: true };
  });
