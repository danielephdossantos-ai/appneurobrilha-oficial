import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-urbanizacao";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "A Urbanização e as Grandes Cidades",
  subtitulo: "Do êxodo rural às metrópoles",
  descricao:
    "Como o Brasil virou um país urbano, o que é êxodo rural e quais desafios enfrentam as cidades gigantes.",
  corTema: "#f97316",
  aulas: [aula01],
};
