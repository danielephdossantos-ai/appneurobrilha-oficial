import type { CursoIng, NivelIng, UnidadeIng, AulaIng } from "./types";
import { cursoInglesMaternal } from "./ingles-maternal";
import { cursoInglesPre1 } from "./ingles-pre1";
import { cursoInglesPre2 } from "./ingles-pre2";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";

/**
 * English Kids (4–6 anos) · plano de 2 anos.
 *
 * NÃO cria aulas novas. Reaproveita 100% do conteúdo dos cursos
 * Maternal, Pré I e Pré II — só reorganiza em Ano 1 / Ano 2.
 *
 *  - Ano 1 (4 anos): Maternal (N1→N4) + Pré I (N1→N4)
 *  - Ano 2 (5 anos): Pré II (N1→N4)
 *
 * Os slugs das aulas são prefixados para não colidir com os cursos
 * originais no roteamento (`serie === "kids"` filtra o lookup).
 */

const prefixarAulas = (prefixo: string, aulas: AulaIng[]): AulaIng[] =>
  aulas.map((a) => ({ ...a, slug: `${prefixo}-${a.slug}` }));

const prefixarUnidades = (prefixo: string, unidades: UnidadeIng[]): UnidadeIng[] =>
  unidades.map((u) => ({
    ...u,
    slug: `${prefixo}-${u.slug}`,
    aulas: prefixarAulas(prefixo, u.aulas),
  }));

/** Achata os 4 níveis de um curso em uma lista única de unidades,
 *  prefixando cada unidade com o rótulo do nível de origem no título. */
function flatUnidadesDeCurso(curso: CursoIng, prefixoOrigem: string): UnidadeIng[] {
  const niveis = curso.niveis ?? [];
  return niveis.flatMap((n) =>
    prefixarUnidades(
      `${prefixoOrigem}-${n.slug}`,
      n.unidades.map((u) => ({
        ...u,
        titulo: `${n.titulo} · ${u.titulo}`,
      })),
    ),
  );
}

const unidadesAno1: UnidadeIng[] = [
  ...flatUnidadesDeCurso(cursoInglesMaternal, "mat"),
  ...flatUnidadesDeCurso(cursoInglesPre1, "p1"),
];

const unidadesAno2: UnidadeIng[] = [
  ...flatUnidadesDeCurso(cursoInglesPre2, "p2"),
];

const ano1: NivelIng = {
  slug: "ano-1",
  numero: 1,
  titulo: "Ano 1 · 4 anos",
  subtitulo: `Primeiro contato com o inglês — ${unidadesAno1.reduce((s, u) => s + u.aulas.length, 0)} aulas em 8 blocos.`,
  destravado: true,
  unidades: unidadesAno1,
};

const ano2: NivelIng = {
  slug: "ano-2",
  numero: 2,
  titulo: "Ano 2 · 5 anos",
  subtitulo: `Frases maiores, perguntas e mini-histórias — ${unidadesAno2.reduce((s, u) => s + u.aulas.length, 0)} aulas em 4 blocos.`,
  destravado: true,
  unidades: unidadesAno2,
};

export const cursoInglesKids: CursoIng = {
  slug: "ingles-ei-kids",
  serie: "kids",
  serieLabel: "Kids (4–6 anos)",
  titulo: "English Kids — Plano de 2 anos",
  descricao:
    "As mesmas aulas do Maternal, Pré I e Pré II reorganizadas em um plano contínuo de 2 anos para crianças de 4 a 6 anos.",
  corPrimaria: "#0d9488",
  corSecundaria: "#ccfbf1",
  mascoteUrl: buddy,
  unidades: [],
  niveis: [ano1, ano2],
};
