import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-primarias";
import { aula02 } from "./aula-02-mistura";
import { aula03 } from "./aula-03-quentes-frias";
import { aula04 } from "./aula-04-arco-iris";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Descobrindo o Mundo das Cores",
  subtitulo: "Primárias, misturas, quentes/frias e arco-íris",
  descricao: "As cores estão em toda parte — vamos descobri-las e devolvê-las à caixa mágica.",
  corTema: "#a855f7",
  aulas: [aula01, aula02, aula03, aula04],
};
