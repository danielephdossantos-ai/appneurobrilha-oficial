import type { Unidade } from "../../types";
import { aula01_comprimento } from "./aula-01-comprimento";
import { aula02_massa } from "./aula-02-massa";
import { aula03_capacidade } from "./aula-03-capacidade";
import { aula04_tempo } from "./aula-04-tempo";
import { aula05_area } from "./aula-05-area";
import { aula06_volume } from "./aula-06-volume";
import { aula07_missaoFinal } from "./aula-07-missao-final";

export const unidade6: Unidade = {
  slug: "unidade-6-medidas",
  numero: 6,
  titulo: "Grandezas e Medidas do Império",
  subtitulo: "Comprimento, massa, capacidade, tempo, área e volume",
  descricao:
    "Brilha mede tudo no Império: régua real, balança de precisão, relógio, área em m² e cm², volume em cm³ e transformações entre unidades.",
  corTema: "#0e7490",
  aulas: [
    aula01_comprimento,
    aula02_massa,
    aula03_capacidade,
    aula04_tempo,
    aula05_area,
    aula06_volume,
    aula07_missaoFinal,
  ],
};
