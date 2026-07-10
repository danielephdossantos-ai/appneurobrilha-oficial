import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-agua-conservacao";

export const unidade5: UnidadeGeoV1 = {
  slug: "unidade-5",
  numero: 5,
  titulo: "O Uso da Água e a Conservação",
  subtitulo: "O tesouro mais valioso do planeta",
  descricao:
    "Quem gasta mais água (não é sua casa!), por que a irrigação lidera o consumo e como cuidar do que ainda temos.",
  corTema: "#0284c7",
  aulas: [aula01],
};
