import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-lugares-onde-vivemos";
import { aula02 } from "./aula-02-convivencia-no-lugar";
import { aula03 } from "./aula-03-trabalho-campo-cidade";
import { aula04 } from "./aula-04-riscos-e-cuidados";

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
    "Brilha vira Investigador de Moradias com Aurora. Descobre por que cada família mora de um jeito, como as pessoas convivem no bairro, quem trabalha no campo e na cidade e como se cuidar dos riscos do lugar onde vive.",
  corTema: "#0EA5E9",
  aulas: [aula01, aula02, aula03, aula04],
};
