import type { Unidade } from "../../types";
import { aula01_contagemAte1000 } from "./aula-01-contagem-ate-1000";
import { aula02_valorPosicional } from "./aula-02-valor-posicional";
import { aula03_aCentena } from "./aula-03-a-centena";
import { aula04_lerNumeros } from "./aula-04-ler-numeros";
import { aula05_compararNumeros } from "./aula-05-comparar-numeros";
import { aula06_ordenarNumeros } from "./aula-06-ordenar-numeros";
import { aula07_arredondar } from "./aula-07-arredondar";
import { aula08_sequenciasNumericas } from "./aula-08-sequencias-numericas";
import { aula09_revisaoUnidade } from "./aula-09-revisao-unidade";
import { aula10_missaoFinal } from "./aula-10-missao-final";

/**
 * Unidade 1 — "Bem-vindo à Cidade dos Números"
 * ---------------------------------------------
 * Progressão: contar até 1.000 → valor posicional (C/D/U) → centena →
 *             ler/escrever → comparar → ordenar → arredondar →
 *             sequências → revisão → missão final.
 * 10 aulas fechadas. BNCC: EF03MA01, EF03MA02, EF03MA03.
 */
export const unidade1: Unidade = {
  slug: "unidade-1-cidade-dos-numeros",
  numero: 1,
  titulo: "Bem-vindo à Cidade dos Números",
  subtitulo: "Contar, ler e organizar números até 1.000",
  descricao:
    "A Vila virou CIDADE: prédios são centenas, ruas são dezenas e moradores são unidades. Brilha aprende a se localizar em qualquer número até 1.000.",
  corTema: "#2563eb",
  aulas: [
    aula01_contagemAte1000,
    aula02_valorPosicional,
    aula03_aCentena,
    aula04_lerNumeros,
    aula05_compararNumeros,
    aula06_ordenarNumeros,
    aula07_arredondar,
    aula08_sequenciasNumericas,
    aula09_revisaoUnidade,
    aula10_missaoFinal,
  ],
};
