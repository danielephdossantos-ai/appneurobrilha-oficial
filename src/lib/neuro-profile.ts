import type { Diagnostico } from "@/core/store";
import type { NeuroProfile } from "@/engines/neuro-engine/types";

/** Mapeamento canônico Diagnostico (anamnese) → NeuroProfile (engine). */
export function diagnosticoToNeuroProfile(d: Diagnostico | null | undefined): NeuroProfile {
  switch (d) {
    case "tea":
      return "TEA";
    case "tdah":
      return "TDAH";
    case "dislexia":
      return "Dislexia";
    case "deficiencia_intelectual":
      return "DeficienciaIntelectual";
    default:
      return "Tipico";
  }
}

export const NEURO_PROFILE_LABEL: Record<NeuroProfile, string> = {
  TEA: "Adaptado para TEA",
  TDAH: "Adaptado para TDAH",
  Dislexia: "Adaptado para Dislexia",
  DeficienciaIntelectual: "Adaptado para DI",
  AtrasoAprendizagem: "Adaptado",
  Tipico: "Versão padrão",
};
