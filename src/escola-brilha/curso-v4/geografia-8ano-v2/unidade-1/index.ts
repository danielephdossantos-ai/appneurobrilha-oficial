import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-formacao-mundo";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Formação do Mundo Contemporâneo",
  subtitulo: "Colonização, Revolução Industrial e Independências",
  descricao:
    "Como o mundo virou o que é? Do colonialismo europeu à Revolução Industrial, das independências latinas à descolonização da África e da Ásia.",
  corTema: "#7c3aed",
  aulas: [aula01],
};
