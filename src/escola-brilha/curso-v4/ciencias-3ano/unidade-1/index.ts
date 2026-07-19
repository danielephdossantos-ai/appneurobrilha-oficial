import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-composicao-solo";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "A Terra sob Nossos Pés",
  subtitulo: "A Composição do Solo",
  descricao:
    "Os Guardiões da Biosfera investigam do que o solo é feito, por que a permeabilidade importa e por que a minhoca é a maior aliada dos agricultores.",
  corTema: "#059669",
  aulas: [aula01],
};
