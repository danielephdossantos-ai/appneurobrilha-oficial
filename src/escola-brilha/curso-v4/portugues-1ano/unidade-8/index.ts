import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-curiosidade-do-dia";
import { aula02 } from "./aula-02-a-entrevista-do-reporter";
import { aula03 } from "./aula-03-o-diagrama-que-explica";

/**
 * Unidade 8 — Repórter Brilha (campo investigativo)
 * Curiosidade, entrevista e diagrama: descobrir o que é verdade e
 * contar para os outros no formato certo.
 *
 * BNCC coberta: EF01LP22, EF01LP23, EF01LP24.
 */
export const unidade8: UnidadePortugues = {
  slug: "unidade-8-reporter-brilha",
  numero: 8,
  titulo: "Repórter Brilha",
  subtitulo: "Curiosidade, entrevista e diagrama",
  descricao:
    "A criança vira repórter: descobre fatos verdadeiros, escreve curiosidades, planeja perguntas de entrevista para gravar em áudio e monta diagramas com setas e rótulos.",
  corTema: "#0ea5e9",
  aulas: [aula01, aula02, aula03],
};
