import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-dinamica-demografica";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Dinâmica Demográfica do Brasil",
  subtitulo: "Natalidade, envelhecimento e pirâmide etária",
  descricao:
    "Por que o Brasil está envelhecendo? Aprenda taxa de natalidade, expectativa de vida e a transição demográfica em curso.",
  corTema: "#0891b2",
  aulas: [aula01],
};
