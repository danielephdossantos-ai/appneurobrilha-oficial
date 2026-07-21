import type { CursoIng, AulaIng } from "./types";
import { cursoInglesMaternal } from "./ingles-maternal";

export const cursosInglesEI: CursoIng[] = [cursoInglesMaternal];

export function getCursoInglesEI(slug: string): CursoIng | undefined {
  return cursosInglesEI.find((c) => c.slug === slug);
}

export function getCursoInglesEIBySerie(serie: string): CursoIng | undefined {
  return cursosInglesEI.find((c) => c.serie === serie);
}

export function getAulaInglesEI(
  serie: string,
  aulaSlug: string,
): { curso: CursoIng; aula: AulaIng } | undefined {
  const curso = getCursoInglesEIBySerie(serie);
  if (!curso) return undefined;
  for (const u of curso.unidades) {
    const aula = u.aulas.find((a) => a.slug === aulaSlug);
    if (aula) return { curso, aula };
  }
  return undefined;
}
