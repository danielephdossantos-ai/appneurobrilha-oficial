import type { CursoPortugues, UnidadePortugues } from "../types";

/**
 * Curso: Língua Portuguesa 5º Ano — "A Central de Investigação da Linguagem"
 * --------------------------------------------------------------------------
 * Faixa de 10–11 anos: fecha o Fundamental 1. O aluno investiga textos
 * longos, separa fato de opinião, domina ortografia e gramática em uso
 * e produz textos argumentativos revisados.
 *
 * Visual: skin "teen" do PlayerPortuguesV4 — grafite quase preto,
 * acento ciano, tipografia sóbria, sem elementos infantis.
 */
const mods = import.meta.glob<Record<string, UnidadePortugues>>("./unidade-*/index.ts", {
  eager: true,
});

const unidades: UnidadePortugues[] = Object.values(mods)
  .flatMap((m) => Object.values(m))
  .filter((u): u is UnidadePortugues => !!u && typeof (u as UnidadePortugues).numero === "number")
  .sort((a, b) => a.numero - b.numero);

const curso: CursoPortugues = {
  slug: "portugues-5ano",
  disciplina: "Língua Portuguesa",
  ano: "5º Ano",
  titulo: "A Central de Investigação da Linguagem",
  descricao:
    "Seis setores de investigação: ler nas entrelinhas, dominar a ortografia, montar frases sólidas, reconhecer gêneros, escrever com argumento e defender ideias em voz alta.",
  corPrimaria: "#22d3ee",
  corSecundaria: "#020617",
  tipoAula: "portugues",
  unidades,
};

export default curso;
