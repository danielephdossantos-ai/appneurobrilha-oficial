import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-materiais";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Do que são feitas as coisas?",
  subtitulo: "Materiais e suas propriedades",
  descricao:
    "Recuperar o Cristal dos Materiais: madeira, vidro, metal e plástico e o que cada um faz de melhor.",
  corTema: "#f59e0b",
  aulas: [aula01],
};
