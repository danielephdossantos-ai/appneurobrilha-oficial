import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";
import { aula02 } from "./aula-02";
import { aula03 } from "./aula-03";

export const unidade4: UnidadeGeoV1 = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Laboratório de Transformações",
  subtitulo: "Matéria, estados e reações químicas",
  descricao:
    "Programa 4: matéria e suas mudanças. Estados físicos, transformações físicas × químicas, Lei de Lavoisier.",
  corTema: "#f59e0b",
  aulas: [aula01, aula02, aula03],
};
