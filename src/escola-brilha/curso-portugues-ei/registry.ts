import type { CursoEI, AulaEI } from "./types";
import { cursoMaternal } from "./portugues-maternal";
import { cursoPre1 } from "./portugues-pre1";
import { cursoPre2 } from "./portugues-pre2";

export const cursosEI: CursoEI[] = [cursoMaternal, cursoPre1, cursoPre2];

export function getCursoEI(slug: string): CursoEI | undefined {
  return cursosEI.find((c) => c.slug === slug);
}

export function getCursoEIBySerie(serie: string): CursoEI | undefined {
  return cursosEI.find((c) => c.serie === serie);
}

export function getAulaEI(
  cursoSlug: string,
  aulaSlug: string,
): { curso: CursoEI; aula: AulaEI } | undefined {
  const curso = getCursoEI(cursoSlug);
  if (!curso) return undefined;
  for (const u of curso.unidades) {
    const aula = u.aulas.find((a) => a.slug === aulaSlug);
    if (aula) return { curso, aula };
  }
  return undefined;
}
