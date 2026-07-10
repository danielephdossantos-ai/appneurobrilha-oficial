import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-coordenadas-geograficas";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Cartografia e Coordenadas",
  subtitulo: "Latitudes, longitudes e GPS",
  descricao: "Navegando o planeta com a rede geográfica: paralelos, meridianos e coordenadas exatas.",
  corTema: "#0891b2",
  aulas: [aula01],
};
