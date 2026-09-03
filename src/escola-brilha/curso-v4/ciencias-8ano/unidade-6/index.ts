import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";
import { aula02, aula03 } from "./aulas-sol-terra-lua-clima";

export const unidade6: UnidadeGeoV1 = {
  slug: "unidade-6",
  numero: 6,
  titulo: "Terra, Clima e Universo",
  subtitulo: "Setor 6 · Observatório Planetário",
  descricao:
    "Estrutura da Terra, placas tectônicas, vulcanismo, terremotos, atmosfera, clima e universo.",
  corTema: "#0ea5e9",
  aulas: [aula01, aula02, aula03],
};
