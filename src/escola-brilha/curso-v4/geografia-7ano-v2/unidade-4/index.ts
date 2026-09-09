import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-complexo-centro-sul";

export const unidade4: UnidadeGeoV1 = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Complexo Centro-Sul",
  subtitulo: "Sudeste, Sul e Centro-Oeste",
  descricao:
    "O coração econômico do Brasil: indústria do ABC, agronegócio do Cerrado, hidrelétricas gigantes e o porto de Santos.",
  corTema: "#0891b2",
  aulas: [aula01],
};
