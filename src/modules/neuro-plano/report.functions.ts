import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Gera um relatório consolidado da integridade dos sistemas de planejamento.
 */
export const getPlanningIntegrityReport = createServerFn({ method: "GET" })
  .validator((d: unknown) => z.object({
    childId: z.string().uuid()
  }).parse(d))
  .handler(async ({ data }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    
    const [
      { data: neuroPlano },
      { data: anamnese },
      { count: routineCount }
    ] = await Promise.all([
      supabase.from("neuro_plano" as any).select("*").eq("child_id", data.childId).maybeSingle(),
      supabase.from("anamnese_v2" as any).select("risk_levels").eq("child_id", data.childId).maybeSingle(),
      supabase.from("routine_items").select("*", { count: 'exact', head: true }).eq("child_id", data.childId)
    ]);

    return {
      neuroTreino: {
        active: !!neuroPlano,
        config: neuroPlano || null
      },
      anamnese: {
        completed: !!anamnese,
        riskLevels: (anamnese as any)?.risk_levels || null
      },
      routine: {
        totalItems: routineCount || 0
      },
      status: (neuroPlano && anamnese) ? "READY" : "PENDING_CONFIG"
    };
  });
