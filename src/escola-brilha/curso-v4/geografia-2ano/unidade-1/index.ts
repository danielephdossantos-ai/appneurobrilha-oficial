import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-lugares-onde-vivemos";
import { aula02 } from "./aula-02-convivencia-no-lugar";

/**
 * Geografia 2º Ano — Unidade 1
 * "Os Lugares Onde Vivemos"
 *
 * Usa o contrato AulaPortuguesV4 (mesmo player de Português 2º ano)
 * pra manter o padrão visual único do app.
 */
export const unidade1: UnidadePortugues = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Os Lugares Onde Vivemos",
  subtitulo: "Missão do Investigador de Moradias",
  descricao:
    "Brilha vira Investigador de Moradias com Aurora. Vai descobrir por que cada família mora de um jeito — no prédio, no campo, à beira do rio ou na aldeia — e como as pessoas convivem no bairro.",
  corTema: "#0EA5E9",
  aulas: [aula01, aula02],
};
