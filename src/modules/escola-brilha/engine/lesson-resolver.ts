import { ActivityLesson } from "../types/activity-lesson";
import type { NeuroProfile } from "@/engines/neuro-engine/types";
import {
  VOGAIS_1ANO_LESSON,
  ALFABETO_1ANO_LESSON,
  RIMAS_1ANO_LESSON,
  SILABAS_1ANO_LESSON,
} from "../data/activity-lessons";
import { VOGAIS_TDAH, VOGAIS_TEA, VOGAIS_DISLEXIA } from "../data/adapted/vogais-1ano.adapted";
import { ALFABETO_TDAH, ALFABETO_TEA, ALFABETO_DISLEXIA } from "../data/adapted/alfabeto-1ano.adapted";
import { RIMAS_TDAH, RIMAS_TEA, RIMAS_DISLEXIA } from "../data/adapted/rimas-1ano.adapted";
import { SILABAS_TDAH, SILABAS_TEA, SILABAS_DISLEXIA } from "../data/adapted/silabas-1ano.adapted";

type ProfileVariants = Partial<Record<NeuroProfile, ActivityLesson>> & { Tipico: ActivityLesson };

const REGISTRY: Record<string, ProfileVariants> = {
  vogais_1ano: {
    Tipico: VOGAIS_1ANO_LESSON,
    TDAH: VOGAIS_TDAH,
    TEA: VOGAIS_TEA,
    Dislexia: VOGAIS_DISLEXIA,
  },
  alfabeto_1ano: {
    Tipico: ALFABETO_1ANO_LESSON,
    TDAH: ALFABETO_TDAH,
    TEA: ALFABETO_TEA,
    Dislexia: ALFABETO_DISLEXIA,
  },
  rimas_1ano: {
    Tipico: RIMAS_1ANO_LESSON,
    TDAH: RIMAS_TDAH,
    TEA: RIMAS_TEA,
    Dislexia: RIMAS_DISLEXIA,
  },
  silabas_1ano: {
    Tipico: SILABAS_1ANO_LESSON,
    TDAH: SILABAS_TDAH,
    TEA: SILABAS_TEA,
    Dislexia: SILABAS_DISLEXIA,
  },
};

/**
 * Retorna a aula adaptada para o perfil neuro da criança.
 * Cai em "Tipico" se não houver variante para o perfil.
 * Retorna null se o baseId não estiver registrado (caller decide o fallback).
 */
export function resolveLesson(
  baseId: string,
  profile: NeuroProfile,
): ActivityLesson | null {
  const variants = REGISTRY[baseId];
  if (!variants) return null;
  return variants[profile] ?? variants.Tipico;
}

export function hasAdaptedVariants(baseId: string): boolean {
  return baseId in REGISTRY;
}
