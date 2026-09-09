import type { CursoEI, AulaEI } from "../curso-portugues-ei/types";
import { cursoMatematicaMaternal } from "./matematica-maternal";
import { cursoMatematicaPre1 } from "./matematica-pre1";
import { cursoMatematicaPre2 } from "./matematica-pre2";

export const cursosMatematicaEI: CursoEI[] = [
  cursoMatematicaMaternal,
  cursoMatematicaPre1,
  cursoMatematicaPre2,
];

export function getCursoMatEI(slug: string): CursoEI | undefined {
  return cursosMatematicaEI.find((c) => c.slug === slug);
}

export function getCursoMatEIBySerie(serie: string): CursoEI | undefined {
  return cursosMatematicaEI.find((c) => c.serie === serie);
}

export function getAulaMatEI(
  cursoSlug: string,
  aulaSlug: string,
): { curso: CursoEI; aula: AulaEI } | undefined {
  const curso = getCursoMatEI(cursoSlug);
  if (!curso) return undefined;
  for (const u of curso.unidades) {
    const aula = u.aulas.find((a) => a.slug === aulaSlug);
    if (aula) return { curso, aula };
  }
  return undefined;
}
