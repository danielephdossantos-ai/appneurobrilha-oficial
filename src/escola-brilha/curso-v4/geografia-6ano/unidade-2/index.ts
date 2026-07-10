import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-coordenadas-geograficas";
import { aula02 } from "./aula-02-escala-e-projecoes";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Cartografia e Coordenadas",
  subtitulo: "Latitudes, longitudes e GPS",
  descricao: "Navegando o planeta com a rede geográfica: paralelos, meridianos e coordenadas exatas.",
  corTema: "#0891b2",
  aulas: [aula01, aula02],
};
