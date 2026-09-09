import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-partes-planta";

export const unidade6: UnidadeGeoV1 = {
  slug: "unidade-6",
  numero: 6,
  titulo: "Partes da Planta",
  subtitulo: "Cada parte, uma função",
  descricao: "Recuperar o Cristal da Planta: raiz, caule, folhas, flor e fruto.",
  corTema: "#ec4899",
  aulas: [aula01],
};
