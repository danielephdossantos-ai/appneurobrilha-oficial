import type { CursoPortugues, UnidadePortugues } from "../types";

/**
 * Curso: Língua Portuguesa 4º Ano — "A Redação dos Exploradores"
 * ---------------------------------------------------------------
 * Faixa de 9 anos: a criança lê com fluência e agora precisa
 * INTERPRETAR com profundidade, DOMINAR a gramática em uso e
 * PRODUZIR textos longos com coesão e revisão.
 *
 * Visual: skin "tween" do PlayerPortuguesV4 (grafite + neon).
 *
 * As unidades são carregadas por glob (unidade-N/index.ts) e ordenadas
 * pelo campo `numero`.
 */
const mods = import.meta.glob<Record<string, UnidadePortugues>>("./unidade-*/index.ts", {
  eager: true,
});

const unidades: UnidadePortugues[] = Object.values(mods)
  .flatMap((m) => Object.values(m))
  .filter((u): u is UnidadePortugues => !!u && typeof (u as UnidadePortugues).numero === "number")
  .sort((a, b) => a.numero - b.numero);

const curso: CursoPortugues = {
  slug: "portugues-4ano",
  disciplina: "Língua Portuguesa",
  ano: "4º Ano",
  titulo: "A Redação dos Exploradores",
  descricao:
    "Uma expedição de escrita: cada unidade é um território a explorar — textos longos, gramática em ação e redações que convencem, informam e emocionam.",
  corPrimaria: "#38bdf8",
  corSecundaria: "#0b1020",
  tipoAula: "portugues",
  unidades,
};

export default curso;
