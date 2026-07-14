import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade4: UnidadeGeoV1 = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Ecologia",
  subtitulo: "Departamento 4 · Rede da Vida",
  descricao:
    "Produtores, consumidores, decompositores. Cadeias, ciclos e cascata trófica. Como energia flui e matéria cicla nos ecossistemas.",
  corTema: "#22c55e",
  aulas: [aula01],
};
