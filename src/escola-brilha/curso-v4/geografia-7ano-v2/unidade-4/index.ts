import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-centro-sul";

export const unidade4: UnidadeGeoV1 = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Complexo Centro-Sul",
  subtitulo: "O motor econômico do Brasil",
  descricao:
    "SP, RJ, MG, Sul + Centro-Oeste: onde se concentra a indústria, o agronegócio, o dinheiro e a maior rede urbana do país.",
  corTema: "#7c3aed",
  aulas: [aula01],
};
