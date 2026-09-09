import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade3: UnidadeGeoV1 = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Física do Cotidiano",
  subtitulo: "Setor 3 · Laboratório de Física",
  descricao:
    "Movimento, velocidade, força, trabalho, máquinas simples, pressão e energia.",
  corTema: "#f59e0b",
  aulas: [aula01],
};
