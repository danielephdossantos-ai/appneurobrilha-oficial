import type { CursoPortugues, UnidadePortugues } from "../types";

/**
 * Curso: Língua Portuguesa 8º Ano — "O Laboratório de Argumentação"
 * ---------------------------------------------------------------
 * Faixa de 13 anos: Desenvolvimento do pensamento crítico e retórica.
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
  slug: "portugues-8ano",
  disciplina: "Língua Portuguesa",
  ano: "8º Ano",
  titulo: "Laboratório de Argumentação",
  descricao:
    "Domine o poder das palavras. No Laboratório de Argumentação, você aprenderá a estruturar ideias, debater com lógica e influenciar o futuro.",
  corPrimaria: "#f43f5e", // Rose neon
  corSecundaria: "#020617", // Slate 950 (Dark)
  tipoAula: "portugues",
  unidades,
};

export default curso;
