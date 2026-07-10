import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-terra-no-espaco";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "A Terra no Espaço",
  subtitulo: "Rotação, translação e estações",
  descricao: "Brilha viaja pelo espaço para entender por que temos dia, noite e estações do ano.",
  corTema: "#6366f1",
  aulas: [aula01],
};
