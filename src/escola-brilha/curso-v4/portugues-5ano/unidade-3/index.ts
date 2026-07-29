import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-classes-de-palavras";
import { aula2 } from "./aula-02-concordancia";
import { aula3 } from "./aula-03-tempos-e-modos-verbais";
import { aula4 } from "./aula-04-conectivos-e-periodos";

/**
 * Unidade 3 — Engenharia da Frase
 * -------------------------------------------------------------
 * Terceira unidade do curso de Português do 5º ano ("A Central de
 * Investigação da Linguagem"). O investigador aprende a desmontar e
 * remontar frases: identificar o cargo de cada palavra (substantivo,
 * adjetivo, verbo, advérbio), ajustar as peças que precisam se encaixar
 * (concordância nominal e verbal), organizar a linha do tempo dos
 * verbos (tempos e modos) e, por fim, unir frases soltas em períodos
 * compostos coesos usando conectivos.
 */
export const unidade3: UnidadePortugues = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Engenharia da Frase",
  subtitulo: "Gramática é a estrutura que sustenta o sentido",
  descricao:
    "Nesta unidade, o investigador aprende a enxergar a estrutura por trás de cada frase: o cargo de cada classe de palavra, o encaixe da concordância nominal e verbal, a linha do tempo dos verbos e os conectivos que unem ideias soltas em períodos compostos coesos.",
  corTema: "#0ea5e9",
  aulas: [aula1, aula2, aula3, aula4],
};
