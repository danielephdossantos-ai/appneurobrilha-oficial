import type { CursoPortugues, UnidadePortugues } from "../types";

/**
 * Curso: Língua Portuguesa 5º Ano — "O Códice da Linguagem"
 * ---------------------------------------------------------------
 * Faixa de 10 anos: o aluno já lê com fluência e agora precisa
 * ANALISAR criticamente, ARGUMENTAR com evidência e DOMINAR a
 * estrutura da frase.
 *
 * Visual: skin "tween" do PlayerPortuguesV4 (grafite + neon).
 *
 * As unidades são carregadas por glob (unidade-N/index.ts) e
 * ordenadas pelo campo `numero`.
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
  titulo: "O Códice da Linguagem",
  descricao:
    "Sete territórios da língua: acentuação, imprensa, verbete, argumentação, narrativa longa, poesia e a engenharia da frase. Ler com olhos críticos e escrever com precisão.",
  corPrimaria: "#f59e0b",
  corSecundaria: "#0b1020",
  tipoAula: "portugues",
  unidades,
};

export default curso;
