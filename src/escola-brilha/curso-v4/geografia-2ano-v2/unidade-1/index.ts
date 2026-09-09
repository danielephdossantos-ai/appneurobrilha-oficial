import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-lugares-onde-vivemos";
import { aula02 } from "./aula-02-convivencia-no-lugar";
import { aula03 } from "./aula-03-trabalho-campo-cidade";
import { aula04 } from "./aula-04-riscos-e-cuidados";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Os Lugares Onde Vivemos",
  subtitulo: "Missão do Pequeno Cartógrafo",
  descricao:
    "Brilha vira Pequeno Cartógrafo com Aurora. Descobre como é o lugar onde vive, como as pessoas convivem, quem trabalha no campo e na cidade e como cuidar dos riscos.",
  corTema: "#22c55e",
  aulas: [aula01, aula02, aula03, aula04],
};
