import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-tema-e-ideia-central";
import { aula2 } from "./aula-02-inferencia-pistas-do-texto";
import { aula3 } from "./aula-03-fato-e-opiniao";
import { aula4 } from "./aula-04-resumo-do-detetive";

/**
 * Unidade 1 — O Detetive da Leitura
 * -------------------------------------------------------------
 * Primeira unidade do curso de Português do 5º ano. O aluno veste
 * o chapéu de detetive e aprende, caso a caso, a decifrar as
 * pistas que todo texto deixa: qual é o assunto e a ideia central
 * (aula 1), como usar pistas explícitas e o conhecimento próprio
 * para inferir o que não está escrito (aula 2), como separar o
 * que é fato do que é opinião (aula 3) e, por fim, como fechar um
 * caso resumindo o texto com as próprias palavras (aula 4).
 */
export const unidade1: UnidadePortugues = {
  slug: "unidade-1",
  numero: 1,
  titulo: "O Detetive da Leitura",
  subtitulo: "Todo texto deixa pistas — o leitor esperto sabe achar",
  descricao:
    "Nesta unidade, o aluno investiga textos como um verdadeiro detetive: descobre o tema e a ideia central, aprende a inferir o que as pistas do texto sugerem, separa fatos de opiniões e, por fim, treina a habilidade de resumir uma história com as próprias palavras, sem perder o essencial.",
  corTema: "#22d3ee",
  aulas: [aula1, aula2, aula3, aula4],
};
