import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-concordancia-nominal-e-verbal";
import { aula2 } from "./aula-02-registro-formal-e-informal";
import { aula3 } from "./aula-03-pronomes-que-evitam-repeticao";
import { aula4 } from "./aula-04-tempos-verbais-passado-presente-futuro";

/**
 * Unidade 3 — A Engrenagem da Frase
 * -------------------------------------------------------------
 * Do encaixe certo entre as palavras (concordância) ao tom da fala
 * (registro formal e informal), passando pelos pronomes que evitam
 * repetição, até os tempos verbais que marcam quando cada ação
 * acontece: aqui o aluno entende como a frase gira como uma engrenagem.
 */
export const unidade3: UnidadePortugues = {
  slug: "unidade-3",
  numero: 3,
  titulo: "A Engrenagem da Frase",
  subtitulo: "Cada peça no lugar certo faz a frase girar",
  descricao:
    "Nesta unidade o aluno aprende a fazer as palavras concordarem entre si, a escolher o tom certo para cada situação (formal ou informal), a usar pronomes para evitar repetição e a dominar os tempos verbais que marcam quando cada ação acontece.",
  corTema: "#a78bfa",
  aulas: [aula1, aula2, aula3, aula4],
};
