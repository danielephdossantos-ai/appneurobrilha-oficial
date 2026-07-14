import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "A Célula e a Continuidade da Vida",
  subtitulo: "Setor 1 · Laboratório de Biologia Celular",
  descricao:
    "Teoria celular, célula animal e vegetal, organelas, divisão celular, DNA, genes e microrganismos.",
  corTema: "#8b5cf6",
  aulas: [aula01],
};
