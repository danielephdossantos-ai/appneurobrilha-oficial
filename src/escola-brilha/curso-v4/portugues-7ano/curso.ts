import type { CursoPortugues, UnidadePortugues } from "../types";

/**
 * Curso: Língua Portuguesa 7º Ano — "O Observatório da Linguagem"
 * ---------------------------------------------------------------
 * Faixa de 12 anos: Consolidação do Fundamental II.
 * Interface Dark Sci-Fi para adolescentes.
 */
const mods = import.meta.glob<Record<string, UnidadePortugues>>("./unidade-*/index.ts", {
  eager: true,
});

const unidades: UnidadePortugues[] = Object.values(mods)
  .flatMap((m) => Object.values(m))
  .filter((u): u is UnidadePortugues => !!u && typeof (u as UnidadePortugues).numero === "number")
  .sort((a, b) => a.numero - b.numero);

const curso: CursoPortugues = {
  slug: "portugues-7ano",
  disciplina: "Língua Portuguesa",
  ano: "7º Ano",
  titulo: "O Observatório da Linguagem",
  descricao:
    "Amplie seu alcance: analise discursos, desconstrua argumentos e domine a retórica no Observatório da Linguagem.",
  corPrimaria: "#8b5cf6", // Violeta neon
  corSecundaria: "#020617", // Slate 950 (Dark)
  tipoAula: "portugues",
  unidades,
};

export default curso;
