import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export type EscritaNivel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type TipoLetra = "imprensa" | "cursiva" | "ambas";

export interface EscritaStatus {
  child_id: string;
  nivel_atual: EscritaNivel;
  etapa_atual: number;
  pref_letra: TipoLetra;
  progresso_imprensa: number;
  progresso_cursiva: number;
  pontos_dominio: number;
}

export const getEscritaStatus = createServerFn({ method: "GET" })
  .inputValidator((d) => z.object({ childId: z.string() }).parse(d))
  .handler(async ({ data }) => {
    // Usamos query genérica para evitar erros de tipo até a migração rodar
    const { data: status, error } = await (supabase as any)
      .from("child_escrita_status")
      .select("*")
      .eq("child_id", data.childId)
      .maybeSingle();

    if (error) {
      console.error("Erro ao buscar status de escrita:", error);
    }
    
    if (!status) {
      return {
        child_id: data.childId,
        nivel_atual: 1 as EscritaNivel,
        etapa_atual: 1,
        pref_letra: "imprensa" as TipoLetra,
        progresso_imprensa: 0,
        progresso_cursiva: 0,
        pontos_dominio: 0,
      } as EscritaStatus;
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
    const { data: current } = await (supabase as any)
      .from("child_escrita_status")
      .select("*")
      .eq("child_id", data.childId)
      .maybeSingle();

    const currentPoints = current?.pontos_dominio || 0;
    const currentNivel = current?.nivel_atual || 1;
    
    const pontosGanhos = data.acerto ? 5 : -2;
    let newPoints = Math.max(0, currentPoints + pontosGanhos);
    let newNivel = currentNivel;

    // Lógica de avanço/retrocesso de nível (Motor Pedagógico)
    if (newPoints >= 100 && currentNivel < 8) {
      newNivel = currentNivel + 1;
      newPoints = 0; // Reseta pontos ao subir de nível
    } else if (newPoints === 0 && currentNivel > 1 && !data.acerto) {
      // Opcional: retroceder se errar muito no zero? 
      // Por enquanto vamos apenas travar no zero.
    }
    
    const payload = {
      child_id: data.childId,
      pontos_dominio: newPoints,
      nivel_atual: newNivel,
      updated_at: new Date().toISOString()
    };

    const { error } = await (supabase as any)
      .from("child_escrita_status")
      .upsert(payload);

    if (error) throw error;
    return { success: true, newPoints, newNivel };
  });
