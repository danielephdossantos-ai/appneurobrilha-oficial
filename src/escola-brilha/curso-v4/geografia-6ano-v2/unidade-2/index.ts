import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-cartografia-coordenadas";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Cartografia e Coordenadas",
  subtitulo: "Latitude, longitude, escala e legenda",
  descricao: "Como o GPS localiza qualquer ponto do planeta usando duas coordenadas.",
  corTema: "#0ea5e9",
  aulas: [aula01],
};
