import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-primeira-guerra-russa";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Trincheiras e Revolução",
  subtitulo: "1ª Guerra Mundial e Revolução Russa (1914–1917)",
  descricao:
    "A primeira guerra industrial da história e a queda do Império Russo. Sarajevo, trincheiras, bolcheviques e o Tratado de Versalhes que planta o rancor da 2ª Guerra.",
  corTema: "#0f766e",
  aulas: [aula01],
};
