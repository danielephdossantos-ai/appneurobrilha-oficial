import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-mapas-tematicos";
import { aula02 } from "./aula-02-escala-e-legenda";

export const unidade3: UnidadeGeoV1 = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Mapas Temáticos e Diferenças Regionais",
  subtitulo: "Ler o mapa é ler o país",
  descricao:
    "Legendas de cores, mapas de calor, escala, rosa dos ventos e tipos de mapa — as ferramentas do cartógrafo mestre.",
  corTema: "#8b5cf6",
  aulas: [aula01, aula02],
};
