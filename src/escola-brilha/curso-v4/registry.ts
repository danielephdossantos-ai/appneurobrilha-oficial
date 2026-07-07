import type {
  Curso,
  CursoPortugues,
  CursoGeografia,
  CursoAny,
  AulaV4,
  AulaPortuguesV4,
  AulaGeografiaV4,
} from "./types";

/**
 * Auto-registro de cursos v4.1 (Matemática + Português + Geografia).
 * Cada curso vive em src/escola-brilha/curso-v4/<slug>/curso.ts e faz
 *   export default { ... } satisfies Curso | CursoPortugues | CursoGeografia;
 */
const modules = import.meta.glob<{ default: CursoAny }>("./*/curso.ts", { eager: true });

const registry: Record<string, CursoAny> = {};
for (const path in modules) {
  const curso = modules[path].default;
  if (curso && curso.slug) registry[curso.slug] = curso;
}

function isMatematica(c: CursoAny): c is Curso {
  return (c.tipoAula ?? "matematica") === "matematica";
}
function isPortugues(c: CursoAny): c is CursoPortugues {
  return c.tipoAula === "portugues";
}
function isGeografia(c: CursoAny): c is CursoGeografia {
  return c.tipoAula === "geografia";
}

export function getCurso(slug: string): Curso | undefined {
  const c = registry[slug];
  return c && isMatematica(c) ? c : undefined;
}

export function getCursoPortugues(slug: string): CursoPortugues | undefined {
  const c = registry[slug];
  return c && isPortugues(c) ? c : undefined;
}

export function getCursoGeografia(slug: string): CursoGeografia | undefined {
  const c = registry[slug];
  return c && isGeografia(c) ? c : undefined;
}

export function getCursoAny(slug: string): CursoAny | undefined {
  return registry[slug];
}

export function listCursos(): CursoAny[] {
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

export function getAulaPortuguesFromCurso(
  cursoSlug: string,
  aulaSlug: string,
): { curso: CursoPortugues; aula: AulaPortuguesV4; unidadeIdx: number; aulaIdx: number } | undefined {
  const curso = getCursoPortugues(cursoSlug);
  if (!curso) return undefined;
  for (let u = 0; u < curso.unidades.length; u++) {
    const unidade = curso.unidades[u];
    const idx = unidade.aulas.findIndex((a) => a.slug === aulaSlug);
    if (idx >= 0) return { curso, aula: unidade.aulas[idx], unidadeIdx: u, aulaIdx: idx };
  }
  return undefined;
}

export function getAulaGeografiaFromCurso(
  cursoSlug: string,
  aulaSlug: string,
): { curso: CursoGeografia; aula: AulaGeografiaV4; unidadeIdx: number; aulaIdx: number } | undefined {
  const curso = getCursoGeografia(cursoSlug);
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
export function listAulasFlat(cursoSlug: string): Array<{ slug: string; titulo: string; iconeTrilha: string }> {
  const curso = registry[cursoSlug];
  if (!curso) return [];
  return curso.unidades.flatMap((u) =>
    u.aulas.map((a) => ({ slug: a.slug, titulo: a.titulo, iconeTrilha: a.iconeTrilha })),
  );
}

