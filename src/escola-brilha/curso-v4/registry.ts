import type {
  Curso,
  CursoPortugues,
  CursoAny,
  AulaV4,
  AulaPortuguesV4,
  CursoGeoV1,
  AulaGeoV1,
  CursoArteV1,
  AulaArteV1,
} from "./types";

/**
 * Auto-registro de cursos v4.1 (Matemática + Português).
 * Cada curso vive em src/escola-brilha/curso-v4/<slug>/curso.ts e faz
 *   export default { ... } satisfies Curso | CursoPortugues;
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
function isGeoV1(c: CursoAny): c is CursoGeoV1 {
  return c.tipoAula === "geo-v1";
}

export function getCursoGeoV1(slug: string): CursoGeoV1 | undefined {
  const c = registry[slug];
  return c && isGeoV1(c) ? c : undefined;
}

export function getAulaGeoV1FromCurso(
  cursoSlug: string,
  aulaSlug: string,
): { curso: CursoGeoV1; aula: AulaGeoV1; unidadeIdx: number; aulaIdx: number } | undefined {
  const curso = getCursoGeoV1(cursoSlug);
  if (!curso) return undefined;
  for (let u = 0; u < curso.unidades.length; u++) {
    const unidade = curso.unidades[u];
    const idx = unidade.aulas.findIndex((a) => a.slug === aulaSlug);
    if (idx >= 0) return { curso, aula: unidade.aulas[idx], unidadeIdx: u, aulaIdx: idx };
  }
  return undefined;
}

/**
 * Retorna a próxima aula GeoV1 na ordem oficial (unidade → aula).
 * `undefined` significa que era a última aula do curso.
 */
export function getProximaAulaGeoV1(
  cursoSlug: string,
  aulaSlug: string,
): { aula: AulaGeoV1; unidadeIdx: number; aulaIdx: number } | undefined {
  const curso = getCursoGeoV1(cursoSlug);
  if (!curso) return undefined;
  const flat: Array<{ aula: AulaGeoV1; unidadeIdx: number; aulaIdx: number }> = [];
  curso.unidades.forEach((u, ui) => u.aulas.forEach((a, ai) => flat.push({ aula: a, unidadeIdx: ui, aulaIdx: ai })));
  const i = flat.findIndex((x) => x.aula.slug === aulaSlug);
  if (i < 0 || i + 1 >= flat.length) return undefined;
  return flat[i + 1];
}



export function getCurso(slug: string): Curso | undefined {
  const c = registry[slug];
  return c && isMatematica(c) ? c : undefined;
}

export function getCursoPortugues(slug: string): CursoPortugues | undefined {
  const c = registry[slug];
  return c && isPortugues(c) ? c : undefined;
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

/**
 * Retorna a lista PLANA de aulas na ordem oficial (para trilha e progresso).
 * Para cursos de Português, retorna AulaPortuguesV4[]; para Matemática, AulaV4[].
 */
export function listAulasFlat(cursoSlug: string): Array<{ slug: string; titulo: string; iconeTrilha: string }> {
  const curso = registry[cursoSlug];
  if (!curso) return [];
  return curso.unidades.flatMap((u) =>
    u.aulas.map((a) => ({ slug: a.slug, titulo: a.titulo, iconeTrilha: a.iconeTrilha })),
  );
}
