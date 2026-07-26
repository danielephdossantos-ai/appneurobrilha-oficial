import type { Unidade } from "../../types";
import { aula01_pesquisaTabelas } from "./aula-01-pesquisa-tabelas";
import { aula02_mediaModaMediana } from "./aula-02-media-moda-mediana";
import { aula03_graficoSetores } from "./aula-03-grafico-setores";
import { aula04_probabilidade } from "./aula-04-probabilidade";
import { aula05_missaoEstatistica } from "./aula-05-missao-estatistica";

export const unidade7: Unidade = {
  slug: "unidade-7-estatistica-probabilidade",
  numero: 7,
  titulo: "Estatística e Probabilidade",
  subtitulo: "Pesquisa, gráficos e chances",
  descricao:
    "Planejamento de pesquisa, tabelas de frequência, média, moda, mediana e amplitude, gráfico de setores com ângulos e cálculo de probabilidade em experimentos aleatórios.",
  corTema: "#6366f1",
  aulas: [
    aula01_pesquisaTabelas,
    aula02_mediaModaMediana,
    aula03_graficoSetores,
    aula04_probabilidade,
    aula05_missaoEstatistica,
  ],
};
