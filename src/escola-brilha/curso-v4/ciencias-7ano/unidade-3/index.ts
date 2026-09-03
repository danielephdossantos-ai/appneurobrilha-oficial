import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";
import { aula02 } from "./aula-02-indicadores-saude";

export const unidade3: UnidadeGeoV1 = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Corpo Humano",
  subtitulo: "Departamento 3 · Máquina Humana",
  descricao:
    "Digestório, circulatório e respiratório integrados. Do pão à energia celular (ATP). Fisiologia em ação.",
  corTema: "#ef4444",
  aulas: [aula01, aula02],
};
