import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-complexo-nordeste";

export const unidade5: UnidadeGeoV1 = {
  slug: "unidade-5",
  numero: 5,
  titulo: "Complexo Nordeste",
  subtitulo: "Sertão, litoral, agreste e polo agrícola",
  descricao:
    "Do sertão semiárido ao litoral turístico. Sub-regiões, seca, transposição do São Francisco e agricultura irrigada em Petrolina.",
  corTema: "#0891b2",
  aulas: [aula01],
};
