import type { Unidade } from "../../types";
import { aula01_pesquisaAmostragem } from "./aula-01-pesquisa-amostragem";
import { aula02_medidasTendenciaCentral } from "./aula-02-medidas-tendencia-central";
import { aula03_graficosLeituraCritica } from "./aula-03-graficos-leitura-critica";
import { aula04_probabilidadeSucessiva } from "./aula-04-probabilidade-sucessiva";
import { aula05_missaoFinal } from "./aula-05-missao-final";

export const unidade7: Unidade = {
  slug: "unidade-7-estatistica-probabilidade",
  numero: 7,
  titulo: "Estatística, Probabilidade e Missão Final",
  subtitulo: "Pesquisar, resumir, representar e prever com os pés no chão",
  descricao:
    "Nesta unidade você vira pesquisador: planeja uma pesquisa, coleta e resume dados com média, mediana e moda, lê gráficos com olhar crítico, calcula probabilidades de eventos sucessivos e encerra o 9º ano com a Missão Final do Instituto de Pesquisa, reunindo tudo o que aprendeu.",
  corTema: "#a855f7",
  aulas: [
    aula01_pesquisaAmostragem,
    aula02_medidasTendenciaCentral,
    aula03_graficosLeituraCritica,
    aula04_probabilidadeSucessiva,
    aula05_missaoFinal,
  ],
};
