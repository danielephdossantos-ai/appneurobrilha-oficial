import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-nosso-municipio";
import { aula02 } from "./aula-02-marcas-dos-vovos";
import { aula03 } from "./aula-03-modos-de-vida";
import { aula04 } from "./aula-04-paisagens-em-transformacao";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Nosso Município",
  subtitulo: "Cidade + Campo formam um só lugar",
  descricao:
    "Brilha vira cartógrafo com Aurora e descobre o município: zonas urbana e rural, marcas de vários grupos, diferentes modos de vida e paisagens em transformação.",
  corTema: "#22c55e",
  aulas: [aula01, aula02, aula03, aula04],
};
