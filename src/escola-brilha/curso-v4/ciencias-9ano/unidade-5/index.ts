import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";
import { aula02, aula03, aula04 } from "./aulas-astronomia";

export const unidade5: UnidadeGeoV1 = {
  slug: "unidade-5",
  numero: 5,
  titulo: "Terra, Universo e Tecnologia",
  subtitulo: "Instituto 5 · Observatório Espacial",
  descricao:
    "Origem do Universo, galáxias, Sistema Solar, exploração espacial, satélites e mudanças climáticas.",
  corTema: "#1e40af",
  aulas: [aula01, aula02, aula03, aula04],
};
