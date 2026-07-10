import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-dinamica-demografica";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Dinâmica Demográfica",
  subtitulo: "Quem é o povo brasileiro e onde ele vive",
  descricao:
    "Brilha e Aurora investigam 215 milhões de brasileiros: pirâmide etária, migrações, IDH e onde a população se concentra.",
  corTema: "#0ea5e9",
  aulas: [aula01],
};
