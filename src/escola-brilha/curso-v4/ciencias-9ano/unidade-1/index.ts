import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Genética, Evolução e Biodiversidade",
  subtitulo: "Instituto 1 · Instituto de Genética",
  descricao:
    "DNA, genes, cromossomos, hereditariedade, Leis de Mendel, evolução, seleção natural e biodiversidade.",
  corTema: "#6d28d9",
  aulas: [aula01],
};
