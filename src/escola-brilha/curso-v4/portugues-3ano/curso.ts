import type { CursoPortugues, UnidadePortugues } from "../types";

/**
 * Curso: Língua Portuguesa 3º Ano — "O Clube dos Detetives da Palavra"
 * --------------------------------------------------------------------
 * Faixa de 8 anos: a criança já decodifica — agora precisa COMPREENDER,
 * ESCREVER com regra e REVISAR o próprio texto.
 *
 * Visual: skin "tween" do PlayerPortuguesV4 (grafite + neon).
 *
 * As unidades são carregadas por glob (unidade-N/index.ts) e ordenadas
 * pelo campo `numero`, para o curso continuar válido enquanto novas
 * unidades vão sendo publicadas.
 */
const mods = import.meta.glob<Record<string, UnidadePortugues>>("./unidade-*/index.ts", {
  eager: true,
});

const unidades: UnidadePortugues[] = Object.values(mods)
  .flatMap((m) => Object.values(m))
  .filter((u): u is UnidadePortugues => !!u && typeof (u as UnidadePortugues).numero === "number")
  .sort((a, b) => a.numero - b.numero);

const curso: CursoPortugues = {
  slug: "portugues-3ano",
  disciplina: "Língua Portuguesa",
  ano: "3º Ano",
  titulo: "O Clube dos Detetives da Palavra",
  descricao:
    "Aurora abre as portas de um clube secreto de investigação. Cada caso só é resolvido com leitura atenta, ortografia precisa e uma boa redação — quem lê bem, descobre tudo.",
  corPrimaria: "#22d3ee",
  corSecundaria: "#0b1020",
  tipoAula: "portugues",
  unidades,
};

export default curso;
