import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade5: UnidadeGeoV1 = {
  slug: "unidade-5",
  numero: 5,
  titulo: "Matéria e Transformações",
  subtitulo: "Departamento 5 · Química Básica",
  descricao:
    "Átomos, moléculas, estados da matéria. Transformações físicas vs. químicas. Substâncias puras e misturas.",
  corTema: "#f59e0b",
  aulas: [aula01],
};
