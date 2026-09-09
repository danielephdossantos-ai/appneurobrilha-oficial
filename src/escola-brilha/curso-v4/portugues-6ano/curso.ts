import type { CursoPortugues, UnidadePortugues } from "../types";

/**
 * Curso: Língua Portuguesa 6º Ano — "O Labirinto da Linguagem"
 * ---------------------------------------------------------------
 * Faixa de 11 anos: Transição para o Fundamental II. 
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
  slug: "portugues-6ano",
  disciplina: "Língua Portuguesa",
  ano: "6º Ano",
  titulo: "O Labirinto da Linguagem",
  descricao:
    "Assuma o controle: decodifique mensagens, analise a estrutura da informação e domine a comunicação em um mundo saturado de dados.",
  corPrimaria: "#06b6d4", // Ciano neon
  corSecundaria: "#020617", // Slate 950 (Dark)
  tipoAula: "portugues",
  unidades,
};

export default curso;
