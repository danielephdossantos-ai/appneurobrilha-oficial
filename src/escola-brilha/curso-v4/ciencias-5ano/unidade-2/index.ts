import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Vida nos Ecossistemas",
  subtitulo: "Cadeias, teias alimentares e biomas do Brasil",
  descricao:
    "Como os seres vivos se relacionam num ecossistema: produtores, consumidores, decompositores e o fluxo de energia entre eles.",
  corTema: "#059669",
  aulas: [aula01],
};
