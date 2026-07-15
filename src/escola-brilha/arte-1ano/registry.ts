import type { UnidadeArte, AulaArte } from "./types";
import { unidade1 } from "./unidade-1";

export const CURSO_ARTE_1ANO = {
  slug: "arte-1ano",
  titulo: "Estúdio Brilha — Arte",
  serie: "1º Ano",
  descricao:
    "Uma experiência de Arte completa: cores, formas, música, teatro, dança, natureza e uma exposição digital no fim do ano.",
  unidades: [unidade1] as UnidadeArte[],
};

export function getUnidade(slug: string): UnidadeArte | undefined {
  return CURSO_ARTE_1ANO.unidades.find((u) => u.slug === slug);
}

export function getAula(unidadeSlug: string, aulaSlug: string): { unidade: UnidadeArte; aula: AulaArte } | undefined {
  const u = getUnidade(unidadeSlug);
  if (!u) return undefined;
  const a = u.aulas.find((x) => x.slug === aulaSlug);
  return a ? { unidade: u, aula: a } : undefined;
}
