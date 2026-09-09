import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-cuidado-vida";
import { aula02 } from "./aula-02-vida-nas-midias";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "O Cuidado com a Vida",
  subtitulo: "Cuidado da vida e análise crítica das mídias (EF09ER01–EF09ER02)",
  descricao:
    "Toda tradição religiosa e ética coloca o cuidado com a vida como valor central. Investigar como esses princípios se traduzem em atitudes concretas.",
  corTema: "#10b981",
  aulas: [aula01, aula02],
};
