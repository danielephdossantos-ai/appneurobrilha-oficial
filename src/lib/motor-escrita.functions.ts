import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export type EscritaNivel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type TipoLetra = "imprensa" | "cursiva" | "ambas";

export interface EscritaStatus {
  child_id: string;
  nivel_atual: EscritaNivel;
  etapa_atual: number; // 1..40 dentro do nível
  pref_letra: TipoLetra;
  progresso_imprensa: number; // 0..100
  progresso_cursiva: number; // 0..100
  pontos_dominio: number;
}

export const getEscritaStatus = createServerFn({ method: "GET" })
  .inputValidator((d) => z.object({ childId: z.string() }).parse(d))
  .handler(async ({ data }) => {
    const { data: status, error } = await supabase
      .from("child_escrita_status")
      .select("*")
      .eq("child_id", data.childId)
      .maybeSingle();

    if (error) throw error;
    
    if (!status) {
      return {
        child_id: data.childId,
        nivel_atual: 1 as EscritaNivel,
        etapa_atual: 1,
        pref_letra: "imprensa" as TipoLetra,
        progresso_imprensa: 0,
        progresso_cursiva: 0,
        pontos_dominio: 0,
      };
    }

    return status as EscritaStatus;
  });

export const updateEscritaProgresso = createServerFn({ method: "POST" })
  .inputValidator((d) => z.object({
    childId: z.string(),
    acerto: z.boolean(),
    tipoLetra: z.enum(["imprensa", "cursiva"])
  }).parse(d))
  .handler(async ({ data }) => {
    // Lógica de motor pedagógico: 
    // O domínio é estimado pelo desempenho, não apenas conclusão.
    // Aqui faríamos o cálculo de pontos e possível subida de nível.
    const { data: current } = await supabase
      .from("child_escrita_status")
      .select("*")
      .eq("child_id", data.childId)
      .maybeSingle();

    const pontos = data.acerto ? 5 : -2;
    const newPoints = Math.max(0, (current?.pontos_dominio || 0) + pontos);
    
    const payload = {
      child_id: data.childId,
      pontos_dominio: newPoints,
      updated_at: new Date().toISOString()
    };

    const { error } = await supabase
      .from("child_escrita_status")
      .upsert(payload);

    if (error) throw error;
    return { success: true, newPoints };
  });
