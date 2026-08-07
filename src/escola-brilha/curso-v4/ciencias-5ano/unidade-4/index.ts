import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";
import { aula02 } from "./aula-02-consumo-consciente";

export const unidade4: UnidadeGeoV1 = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Matéria em Transformação",
  subtitulo: "Misturas, separação e mudanças de estado",
  descricao:
    "Como a matéria muda: mistura água+óleo, filtração, evaporação, fusão. Estados físicos e o ciclo da água.",
  corTema: "#0891b2",
  aulas: [aula01, aula02],
};
