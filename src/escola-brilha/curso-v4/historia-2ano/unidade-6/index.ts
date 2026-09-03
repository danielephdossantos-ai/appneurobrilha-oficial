import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-costumes-que-mudaram";
import { aula02 } from "./aula-02-trabalho-ambiente";

export const unidade6: UnidadeGeoV1 = {
  slug: "unidade-6",
  numero: 6,
  titulo: "Costumes que Mudaram",
  subtitulo: "Viagem no Tempo dos Costumes",
  descricao:
    "Analisar como o jeito de vestir, brincar e se locomover se transformou com as tecnologias.",
  corTema: "#b45309",
  aulas: [aula01, aula02],
};
