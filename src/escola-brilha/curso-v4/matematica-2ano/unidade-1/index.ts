import type { Unidade } from "../../types";
import { aula01_feiraDasFrutas } from "./aula-01-feira-das-frutas";
import { aula02_somasAte10 } from "./aula-02-somas-ate-10";
import { aula03_subtracoesAte10 } from "./aula-03-subtracoes-ate-10";
import { aula04_compararQuantidades } from "./aula-04-comparar-quantidades";
import { aula05_agruparDe10 } from "./aula-05-agrupar-de-10";
import { aula06_somandoNaFeira } from "./aula-06-somando-na-feira";
import { aula07_somandoComDezenas } from "./aula-07-somando-com-dezenas";
import { aula08_problemasDaFeira } from "./aula-08-problemas-da-feira";
import { aula09_revisaoUnidade } from "./aula-09-revisao-unidade";
import { aula10_missaoFinal } from "./aula-10-missao-final";

/**
 * Unidade 1 — "A Feira dos Números"
 * ----------------------------------
 * Progressão: contar → comparar → agrupar em dezenas → somar →
 *             problemas → revisão → missão final.
 * 10 aulas fechadas.
 */
export const unidade1: Unidade = {
  slug: "unidade-1-feira-dos-numeros",
  numero: 1,
  titulo: "A Feira dos Números",
  subtitulo: "Contar, comparar, agrupar, somar",
  descricao:
    "Brilha visita a Feira da Vila e descobre que existe muito mais em um número do que parece.",
  corTema: "#f59e0b",
  aulas: [
    aula01_feiraDasFrutas,
    aula02_somasAte10,
    aula03_subtracoesAte10,
    aula04_compararQuantidades,
    aula05_agruparDe10,
    aula06_somandoNaFeira,
    aula07_somandoComDezenas,
    aula08_problemasDaFeira,
    aula09_revisaoUnidade,
    aula10_missaoFinal,
  ],
};

