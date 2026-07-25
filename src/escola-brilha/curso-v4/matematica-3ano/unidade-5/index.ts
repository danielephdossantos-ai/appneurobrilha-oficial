import type { Unidade } from "../../types";
import { aula01_comprimento } from "./aula-01-comprimento";
import { aula02_massa } from "./aula-02-massa";
import { aula03_capacidade } from "./aula-03-capacidade";
import { aula04_tempo } from "./aula-04-tempo";
import { aula05_dinheiro } from "./aula-05-dinheiro";
import { aula06_problemasMedidas } from "./aula-06-problemas-com-medidas";
import { aula07_missaoFinalU5 } from "./aula-07-missao-final";

export const unidade5: Unidade = {
  slug: "unidade-5-medidas",
  numero: 5,
  titulo: "Medir o Mundo",
  subtitulo: "Comprimento, massa, capacidade, tempo e dinheiro",
  descricao:
    "Brilha vira Engenheiro da Cidade: aprende a medir comprimentos, massa, capacidade, tempo e dinheiro.",
  corTema: "#2563eb",
  aulas: [
    aula01_comprimento,
    aula02_massa,
    aula03_capacidade,
    aula04_tempo,
    aula05_dinheiro,
    aula06_problemasMedidas,
    aula07_missaoFinalU5,
  ],
};
