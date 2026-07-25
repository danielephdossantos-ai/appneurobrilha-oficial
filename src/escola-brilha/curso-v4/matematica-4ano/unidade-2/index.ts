import type { Unidade } from "../../types";
import { aula01_somarSemReagrupar } from "./aula-01-somar-sem-reagrupar";
import { aula02_somarComReagrupar } from "./aula-02-somar-com-reagrupar";
import { aula03_somarVariosVaiUm } from "./aula-03-somar-varios-vai-um";
import { aula04_subtrairSemTrocar } from "./aula-04-subtrair-sem-trocar";
import { aula05_subtrairComTrocar } from "./aula-05-subtrair-com-trocar";
import { aula06_problemasMaisMenos } from "./aula-06-problemas-mais-menos";
import { aula07_missaoFinalU2 } from "./aula-07-missao-final";

/**
 * Unidade 2 — "Somar e Subtrair até 10.000"
 * Progressão: soma direta → 'vai 1' → múltiplos 'vai 1' → subtração direta →
 * subtração com troca (incl. cascata pelos zeros) → problemas → missão final.
 * BNCC: EF04MA03, EF04MA05, EF04MA13.
 */
export const unidade2: Unidade = {
  slug: "unidade-2-somar-subtrair-10000",
  numero: 2,
  titulo: "Somar e Subtrair até 10.000",
  subtitulo: "Adição e subtração com reagrupamento até UM",
  descricao:
    "Brilha vira Contador(a) Oficial do Reino: aprende a somar com 'vai 1' até a Unidade de Milhar, subtrair com empréstimo em cascata e escolher + ou − a partir da história.",
  corTema: "#7c3aed",
  aulas: [
    aula01_somarSemReagrupar,
    aula02_somarComReagrupar,
    aula03_somarVariosVaiUm,
    aula04_subtrairSemTrocar,
    aula05_subtrairComTrocar,
    aula06_problemasMaisMenos,
    aula07_missaoFinalU2,
  ],
};
