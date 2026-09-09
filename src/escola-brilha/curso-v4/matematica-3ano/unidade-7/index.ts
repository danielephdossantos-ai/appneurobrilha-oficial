import type { Unidade } from "../../types";
import { aula01_coletaDados } from "./aula-01-coleta-de-dados";
import { aula02_graficoBarras } from "./aula-02-grafico-de-barras";
import { aula03_tabelas } from "./aula-03-lendo-tabelas";
import { aula04_probabilidade } from "./aula-04-probabilidade";
import { aula05_frequencia } from "./aula-05-frequencia";
import { aula06_analiseDados } from "./aula-06-analise-de-dados";
import { aula07_missaoFinalCidade } from "./aula-07-missao-final-cidade";

export const unidade7: Unidade = {
  slug: "unidade-7-estatistica",
  numero: 7,
  titulo: "Dados, Gráficos e Chance",
  subtitulo: "Coletar, ler, analisar e prever",
  descricao:
    "Brilha vira Matemático Oficial: coleta, organiza e interpreta dados; entende gráficos, tabelas, frequência e probabilidade. Fecha a Cidade dos Números com a Missão Final.",
  corTema: "#2563eb",
  aulas: [
    aula01_coletaDados,
    aula02_graficoBarras,
    aula03_tabelas,
    aula04_probabilidade,
    aula05_frequencia,
    aula06_analiseDados,
    aula07_missaoFinalCidade,
  ],
};
