import type { CursoIng, AulaIng } from "./types";
import { cursoInglesMaternal } from "./ingles-maternal";
import { cursoInglesPre1 } from "./ingles-pre1";
import { cursoInglesPre2 } from "./ingles-pre2";

export const cursosInglesEI: CursoIng[] = [cursoInglesMaternal, cursoInglesPre1, cursoInglesPre2];

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
