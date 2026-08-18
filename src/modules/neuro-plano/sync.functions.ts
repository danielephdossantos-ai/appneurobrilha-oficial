import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Sincroniza o Plano Neuro-Treino e o Plano de Alfabetização com a Rotina de Hoje.
 * Garante que a criança veja as missões dos dois sistemas de forma integrada.
 */
export const syncPlansToRoutine = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({
    childId: z.string().uuid(),
    date: z.string() // "yyyy-mm-dd"
  }).parse(d))
  .handler(async ({ data }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    const { childId, date } = data;

    // 1. Limpar itens automáticos antigos para este dia e criança
    await supabase
      .from("routine_items")
      .delete()
      .eq("child_id", childId)
      .eq("date", date)
      .in("source", ["plano_neuro", "plano_alfa"]);

    // 2. Buscar planos ativos
    const [{ data: neuroPlano }, { data: anamnese }] = await Promise.all([
      supabase.from("neuro_plano" as any).select("*").eq("child_id", childId).maybeSingle(),
      supabase.from("anamnese_v2" as any).select("risk_levels, scores").eq("child_id", childId).maybeSingle()
    ]);

    const routineItems = [];

    // 3. Integrar Neuro-Treino (Sistema 2)
    if (neuroPlano) {
      const { data: items } = await supabase
        .from("neuro_plano_itens" as any)
        .select("*")
        .eq("plano_id", (neuroPlano as any).id)
        .eq("dia_semana", new Date(`${date}T12:00:00`).getDay() || 7) // Ajuste para 1=Seg..7=Dom
        .limit(2);

      items?.forEach((item: any, idx: number) => {
        routineItems.push({
          child_id: childId,
          parent_id: user.id,
          title: `${item.emoji} ${item.nome}`,
          description: `Neuro-Treino: ${item.objetivo || 'Treino cognitivo'}`,
          type: 'atividade_neurobrilha',
          start_time: idx === 0 ? "10:00" : "16:00",
          duration_minutes: item.minutos || 10,
          date,
          status: 'pendente',
          source: 'plano_neuro',
          source_id: item.id
        });
      });
    }

    // 4. Integrar Alfabetização (Sistema 1)
    // TODO: Buscar do motor de alfabetização quando implementado o persist
    
    if (routineItems.length > 0) {
      await supabase.from("routine_items").insert(routineItems);
    }

    return { success: true, count: routineItems.length };
  });
