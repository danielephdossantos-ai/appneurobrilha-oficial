import type { CursoPortugues, UnidadePortugues } from "../types";

const mods = import.meta.glob<Record<string, UnidadePortugues>>("./unidade-*/index.ts", {
  eager: true,
});

const unidades: UnidadePortugues[] = Object.values(mods)
  .flatMap((m) => Object.values(m))
  .filter((u): u is UnidadePortugues => !!u && typeof (u as UnidadePortugues).numero === "number")
  .sort((a, b) => a.numero - b.numero);

const curso: CursoPortugues = {
  slug: "portugues-especial",
  disciplina: "Língua Portuguesa",
  ano: "Aulão Especial",
  titulo: "Super Aulão: Dificuldades",
  descricao:
    "Focado nas maiores dificuldades da escola: Verbos, Porquês, Acentos e Virgulas. Ensino real com explicação passo a passo.",
  corPrimaria: "#7c2d8f", // Roxo vibrante
  corSecundaria: "#1b1035", // Dark purple
  tipoAula: "portugues",
  unidades,
};

export default curso;
