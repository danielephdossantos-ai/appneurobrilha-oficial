import type { Unidade } from "../../types";
import { aula01_contagemAteMilhao } from "./aula-01-contagem-ate-milhao";
import { aula02_classesNumericas } from "./aula-02-classes-numericas";
import { aula03_compararOrdenar } from "./aula-03-comparar-ordenar";
import { aula04_arredondar } from "./aula-04-arredondar";
import { aula05_sequencias } from "./aula-05-sequencias";
import { aula06_revisao } from "./aula-06-revisao";
import { aula07_missaoFinal } from "./aula-07-missao-final";

export const unidade1: Unidade = {
  slug: "unidade-1-imperio-dos-milhoes",
  numero: 1,
  titulo: "Bem-vindo(a) ao Império dos Milhões",
  subtitulo: "Ler, comparar e organizar números até 1.000.000",
  descricao:
    "O Reino cresceu e virou IMPÉRIO: cem reinos formam um milhão. Brilha aprende as CLASSES: unidades simples e milhares — e o que muda quando aparece a Centena de Milhar.",
  corTema: "#0e7490",
  aulas: [
    aula01_contagemAteMilhao,
    aula02_classesNumericas,
    aula03_compararOrdenar,
    aula04_arredondar,
    aula05_sequencias,
    aula06_revisao,
    aula07_missaoFinal,
  ],
};
