import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-concordancia";
import { aula02 } from "./aula-02-tempos-verbais";
import { aula03 } from "./aula-03-pronomes";
import { aula04 } from "./aula-04-conectivos";

/**
 * Unidade 3 — Engrenagem da Frase
 * -------------------------------------------------------------
 * Terceira unidade do curso de Português do 4º ano. A expedição
 * abre a frase como uma engrenagem e observa como cada peça precisa
 * encaixar: a concordância entre as palavras, os tempos verbais que
 * situam a ação no tempo, os pronomes que evitam repetição e, por
 * fim, os conectivos que ligam ideias e revelam a relação entre elas.
 */
export const unidade3: UnidadePortugues = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Engrenagem da Frase",
  subtitulo: "Cada palavra é uma peça: veja como elas se encaixam",
  descricao:
    "Nesta unidade, o explorador abre a frase como quem abre uma engrenagem: descobre como as palavras precisam concordar entre si, como os verbos mudam para marcar o tempo da ação, como os pronomes evitam repetição sem perder o sentido e, por fim, como os conectivos ligam ideias — mudando o significado da frase conforme a palavrinha escolhida.",
  corTema: "#f97316",
  aulas: [aula01, aula02, aula03, aula04],
};
