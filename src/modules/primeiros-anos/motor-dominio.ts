import { supabase } from "@/database/supabase/client";
import { EtapaPrimeirosAnos } from "./builder";

/**
 * Motor de Domínio para Alfabetização.
 * Decide se a criança avança de fase ou precisa de reforço.
 */
export async function avaliarProgressoAlfabetizacao(childId: string, faseAtual: number) {
  const { data: mastery } = await supabase
    .from("child_skill_mastery" as any)
    .select("mastery_score")
    .eq("child_id", childId)
    .eq("skill_slug", `alfa-fase-${faseAtual}`)
    .maybeSingle();

  const score = (mastery as any)?.mastery_score ?? 0;
  
  if (score >= 85) {
    return { acao: "avancar", fase: faseAtual + 1 };
  } else if (score < 40) {
    return { acao: "reforcar", fase: faseAtual };
  }
  
  return { acao: "manter", fase: faseAtual };
}
