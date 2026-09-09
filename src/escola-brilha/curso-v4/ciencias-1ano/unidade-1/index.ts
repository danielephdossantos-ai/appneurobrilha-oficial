import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-objetos";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Cristal dos Materiais",
  subtitulo: "Do que são feitas as coisas",
  descricao: "Descobrir os materiais que formam os objetos do dia a dia: madeira, vidro, metal, tecido e plástico.",
  corTema: "#a855f7",
  aulas: [aula01],
};
