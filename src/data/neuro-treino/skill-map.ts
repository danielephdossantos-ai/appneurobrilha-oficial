import { GRUPOS } from "./variations";
import type { CategoriaSlug } from "./variations";

// Índice reverso: slug -> nome do grupo cognitivo (usado como "materia" em child_skill_mastery)
const SLUG_TO_GRUPO: Partial<Record<CategoriaSlug, string>> = (() => {
  const map: Partial<Record<CategoriaSlug, string>> = {};
  for (const g of GRUPOS) {
    for (const s of g.slugs) {
      // primeiro grupo vence (discriminacao-auditiva aparece em 2, fica em Fono Clínico)
      if (!map[s]) map[s] = g.nome;
    }
  }
  return map;
})();

export interface NeuroSkillInfo {
  skillCode: string;
  materia: string;
}

export function getNeuroSkillInfo(slug: string): NeuroSkillInfo {
  const materia = SLUG_TO_GRUPO[slug as CategoriaSlug] ?? "Neuro Treino";
  return {
    skillCode: `NT:${slug}`,
    materia,
  };
}
