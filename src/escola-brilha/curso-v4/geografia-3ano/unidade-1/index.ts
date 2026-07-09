import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-nosso-municipio";
import { aula02 } from "./aula-02-marcas-dos-vovos";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Nosso Município",
  subtitulo: "Cidade + Campo formam um só lugar",
  descricao:
    "Brilha vira cartógrafo com Aurora e descobre que o município é feito de zona urbana e zona rural, com fronteiras próprias — e cheio de marcas deixadas por diferentes grupos de vovôs.",
  corTema: "#22c55e",
  aulas: [aula01, aula02],
};

