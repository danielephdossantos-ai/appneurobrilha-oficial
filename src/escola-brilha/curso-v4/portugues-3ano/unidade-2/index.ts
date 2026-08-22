import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-r-rr";
import { aula2 } from "./aula-02-s-ss-c-ç";
import { aula3 } from "./aula-03-m-antes-p-b";
import { aula04 } from "./aula-04-sons-do-nariz";

/**
 * Unidade 2 — Laboratório da Ortografia
 * Curso: Língua Portuguesa 3º Ano — O Clube dos Detetives da Palavra
 *
 * Foco: regras de ortografia investigadas como "casos" — o som que se
 * ouve nem sempre revela sozinho a letra certa; existe lógica por trás
 * de cada escolha (R/RR, S/SS/C/Ç, M antes de P/B, e os sons nasais
 * marcados por til, -ÃO e -AM).
 *
 * BNCC: EF03LP01, EF03LP02, EF03LP03, EF03LP05, EF03LP06
 */
export const unidade2: UnidadePortugues = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Laboratório da Ortografia",
  subtitulo: "Toda escrita tem regra — e regra tem lógica",
  descricao:
    "O clube vira um laboratório: Aurora e Brilha investigam por que certas palavras se escrevem de um jeito e não de outro. Cada aula resolve um caso de ortografia — R e RR, S, SS, C e Ç, o M antes de P e B, e os sons nasais com til, -ÃO e -AM — sempre mostrando a regra por trás do som.",
  corTema: "#818cf8",
  aulas: [aula1, aula2, aula3, aula04],
};
