import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-urbanizacao";
import { aula02 } from "./aula-02-campo-cidade-conectados";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "A Urbanização e as Grandes Cidades",
  subtitulo: "Do êxodo rural às metrópoles",
  descricao:
    "Como o Brasil virou um país urbano, os desafios das metrópoles e a corrente invisível que conecta campo e cidade.",
  corTema: "#f97316",
  aulas: [aula01, aula02],
};
