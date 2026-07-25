import type { Unidade } from "../../types";
import { aula01_poligonos } from "./aula-01-poligonos";
import { aula02_angulos } from "./aula-02-angulos";
import { aula03_simetria } from "./aula-03-simetria";
import { aula04_graficosBarras } from "./aula-04-graficos-barras";
import { aula05_tabelas } from "./aula-05-tabelas";
import { aula06_probabilidade } from "./aula-06-probabilidade";
import { aula07_missaoFinalReino } from "./aula-07-missao-final-reino";

export const unidade7: Unidade = {
  slug: "unidade-7-geometria-dados-missao-do-reino",
  numero: 7,
  titulo: "Geometria, Dados e a Missão do Reino",
  subtitulo: "Polígonos, ângulos, simetria, gráficos, tabelas, probabilidade e a prova final",
  descricao:
    "Última unidade do 4º ano. Brilha percorre geometria (formas, ângulos e simetria) e estatística/probabilidade, culminando na Missão do Reino que fecha a série.",
  corTema: "#ea580c",
  aulas: [
    aula01_poligonos,
    aula02_angulos,
    aula03_simetria,
    aula04_graficosBarras,
    aula05_tabelas,
    aula06_probabilidade,
    aula07_missaoFinalReino,
  ],
};
