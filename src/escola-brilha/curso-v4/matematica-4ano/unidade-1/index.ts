import type { Unidade } from "../../types";
import { aula01_contagemAte10000 } from "./aula-01-contagem-ate-10000";
import { aula02_valorPosicionalUM } from "./aula-02-valor-posicional-um";
import { aula03_aUnidadeDeMilhar } from "./aula-03-a-unidade-de-milhar";
import { aula04_lerEscreverAte10000 } from "./aula-04-ler-escrever-ate-10000";
import { aula05_compararAte10000 } from "./aula-05-comparar-ate-10000";
import { aula06_ordenarAte10000 } from "./aula-06-ordenar-ate-10000";
import { aula07_arredondar } from "./aula-07-arredondar";
import { aula08_sequenciasRegularidades } from "./aula-08-sequencias-regularidades";
import { aula09_revisaoUnidade } from "./aula-09-revisao-unidade";
import { aula10_missaoFinal } from "./aula-10-missao-final";

/**
 * Unidade 1 — "Bem-vindo(a) ao Reino dos Números"
 * ------------------------------------------------
 * Progressão: contar de 100 e 1.000 → valor posicional UM/C/D/U →
 *             unidade de milhar → ler/escrever até 10.000 → comparar →
 *             ordenar → arredondar (dez/cem/mil) → sequências → revisão →
 *             missão final "Guardião do Milhar".
 * 10 aulas. BNCC: EF04MA01, EF04MA02, EF04MA03.
 */
export const unidade1: Unidade = {
  slug: "unidade-1-reino-dos-numeros",
  numero: 1,
  titulo: "Bem-vindo(a) ao Reino dos Números",
  subtitulo: "Contar, ler e organizar números até 10.000",
  descricao:
    "A Cidade virou REINO: dez cidades formam um reino (dez mil habitantes). Brilha aprende a se localizar em qualquer número até 10.000 usando a Unidade de Milhar.",
  corTema: "#7c3aed",
  aulas: [
    aula01_contagemAte10000,
    aula02_valorPosicionalUM,
    aula03_aUnidadeDeMilhar,
    aula04_lerEscreverAte10000,
    aula05_compararAte10000,
    aula06_ordenarAte10000,
    aula07_arredondar,
    aula08_sequenciasRegularidades,
    aula09_revisaoUnidade,
    aula10_missaoFinal,
  ],
};
