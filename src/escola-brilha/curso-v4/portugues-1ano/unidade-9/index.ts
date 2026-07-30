import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-nossos-combinados-da-turma";
import { aula02 } from "./aula-02-guardando-a-parlenda";
import { aula03 } from "./aula-03-eu-reconto-a-historia";

/**
 * Unidade 9 — Combinados e Histórias
 * Fecho do curso: escrever regras da vida em comum, registrar a
 * cultura oral (parlendas) e recontar histórias com escriba.
 *
 * BNCC coberta: EF01LP21, EF01LP18, EF01LP25, EF01LP26.
 */
export const unidade9: UnidadePortugues = {
  slug: "unidade-9-combinados-e-historias",
  numero: 9,
  titulo: "Combinados e Histórias",
  subtitulo: "Regras da turma, parlendas e reconto",
  descricao:
    "A criança escreve com a turma a lista de combinados que organiza a vida em comum, registra parlendas para não se perderem e reconta histórias cuidando de personagem, lugar, tempo e enredo.",
  corTema: "#a855f7",
  aulas: [aula01, aula02, aula03],
};
