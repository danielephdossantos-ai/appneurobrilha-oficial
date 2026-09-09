import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade5: UnidadeGeoV1 = {
  slug: "unidade-5",
  numero: 5,
  titulo: "Energia e Tecnologia",
  subtitulo: "Fontes de energia e consumo consciente",
  descricao:
    "De onde vem a energia da sua casa: hidrelétrica, solar, eólica. Como economizar e por que isso importa pro planeta.",
  corTema: "#f59e0b",
  aulas: [aula01],
};
