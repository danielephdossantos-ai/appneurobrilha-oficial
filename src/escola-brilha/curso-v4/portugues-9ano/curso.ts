import type { CursoPortugues, UnidadePortugues } from "../types";

/**
 * Curso: Língua Portuguesa 9º Ano — "O Epicentro da Linguagem"
 * ---------------------------------------------------------------
 * Faixa de 14 anos: Preparação para o Ensino Médio, análise crítica profunda e produção autoral.
 * Interface Dark Sci-Fi / Glitch para adolescentes.
 */
const mods = import.meta.glob<Record<string, UnidadePortugues>>("./unidade-*/index.ts", {
  eager: true,
});

const unidades: UnidadePortugues[] = Object.values(mods)
  .flatMap((m) => Object.values(m))
  .filter((u): u is UnidadePortugues => !!u && typeof (u as UnidadePortugues).numero === "number")
  .sort((a, b) => a.numero - b.numero);

const curso: CursoPortugues = {
  slug: "portugues-9ano",
  disciplina: "Língua Portuguesa",
  ano: "9º Ano",
  titulo: "Epicentro da Linguagem",
  descricao:
    "A fase final. No Epicentro, você refina sua voz, domina a análise crítica e prepara-se para os grandes desafios do Ensino Médio.",
  corPrimaria: "#06b6d4", // Cyan neon
  corSecundaria: "#020617", // Slate 950
  tipoAula: "portugues",
  unidades,
};

export default curso;
