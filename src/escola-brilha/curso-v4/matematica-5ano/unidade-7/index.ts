import type { Unidade } from "../../types";
import { aula01_planoCartesiano } from "./aula-01-plano-cartesiano";
import { aula02_ampliacaoReducao } from "./aula-02-ampliacao-reducao";
import { aula03_angulosTransferidor } from "./aula-03-angulos-transferidor";
import { aula04_poligonosRegulares } from "./aula-04-poligonos-regulares";
import { aula05_graficos } from "./aula-05-graficos";
import { aula06_probabilidade } from "./aula-06-probabilidade";
import { aula07_missaoFinalMestre } from "./aula-07-missao-final-mestre";

export const unidade7: Unidade = {
  slug: "unidade-7-geometria-dados-missao",
  numero: 7,
  titulo: "Geometria, Dados e Missão Final",
  subtitulo: "Plano cartesiano, ângulos, gráficos, probabilidade e formatura",
  descricao:
    "Brilha fecha o 5º ano: usa plano cartesiano, mede ângulos com transferidor, lê gráficos reais e faz a Missão Final para virar Mestre do Império.",
  corTema: "#0e7490",
  aulas: [
    aula01_planoCartesiano,
    aula02_ampliacaoReducao,
    aula03_angulosTransferidor,
    aula04_poligonosRegulares,
    aula05_graficos,
    aula06_probabilidade,
    aula07_missaoFinalMestre,
  ],
};
