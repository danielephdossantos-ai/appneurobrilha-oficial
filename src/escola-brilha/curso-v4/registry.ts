import type { Curso, AulaV4 } from "./types";

/**
 * Auto-registro de cursos v4.1.
 * Cada curso vive em src/escola-brilha/curso-v4/<slug>/curso.ts e faz
 *   export default { ... } satisfies Curso;
 */
const modules = import.meta.glob<{ default: Curso }>("./*/curso.ts", { eager: true });

const registry: Record<string, Curso> = {};
for (const path in modules) {
  const curso = modules[path].default;
  if (curso && curso.slug) registry[curso.slug] = curso;
}

export function getCurso(slug: string): Curso | undefined {
  return registry[slug];
}

export function listCursos(): Curso[] {
  return Object.values(registry).sort((a, b) => a.slug.localeCompare(b.slug));
}

export function getAulaFromCurso(
  cursoSlug: string,
  aulaSlug: string,
): { curso: Curso; aula: AulaV4; unidadeIdx: number; aulaIdx: number } | undefined {
  const curso = getCurso(cursoSlug);
  if (!curso) return undefined;
  for (let u = 0; u < curso.unidades.length; u++) {
    const unidade = curso.unidades[u];
    const idx = unidade.aulas.findIndex((a) => a.slug === aulaSlug);
    if (idx >= 0) return { curso, aula: unidade.aulas[idx], unidadeIdx: u, aulaIdx: idx };
  }
  return undefined;
}

/**
 * Retorna a lista PLANA de aulas na ordem oficial (para trilha e progresso).
 */
export function listAulasFlat(cursoSlug: string): AulaV4[] {
  const curso = getCurso(cursoSlug);
  if (!curso) return [];
  return curso.unidades.flatMap((u) => u.aulas);
}
