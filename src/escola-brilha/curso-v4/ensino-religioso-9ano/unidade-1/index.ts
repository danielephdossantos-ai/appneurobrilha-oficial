import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-cuidado-vida";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "O Cuidado com a Vida",
  subtitulo: "Princípios do cuidado da vida (EF09ER01)",
  descricao:
    "Toda tradição religiosa e ética coloca o cuidado com a vida como valor central. Investigar como esses princípios se traduzem em atitudes concretas.",
  corTema: "#10b981",
  aulas: [aula01],
};
