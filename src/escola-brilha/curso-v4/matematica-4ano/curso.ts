import type { Curso } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";

/**
 * Curso: Matemática 4º Ano — "O Reino dos Números"
 * -------------------------------------------------
 *  U1 · O Reino até 10.000                                (EF04MA01–03)
 *  U2 · Somar e subtrair com reagrupamento                (EF04MA03–05, 13)  [em construção]
 *  U3 · Multiplicação (2/3 dígitos)                       (EF04MA06, 07, 26) [em construção]
 *  U4 · Divisão (chave, resto, problemas)                 (EF04MA07, 26, 27) [em construção]
 *  U5 · Frações e decimais                                (EF04MA09, 10, 25) [em construção]
 *  U6 · Medidas (m/cm/mm, kg/g, L/mL, tempo, R$, perímetro) (EF04MA20–24)    [em construção]
 *  U7 · Geometria + Estatística/Prob + Missão do Reino    (EF04MA14–19, 25–28) [em construção]
 *
 * Continuidade com o 3º Ano: a Cidade dos Números virou REINO. Brilha vira
 * aprendiz de mestre e agora trabalha em milhares (UM), com números até
 * 10.000, frações, decimais, régua/balança e figuras geométricas com
 * vértices rotulados.
 */
const curso: Curso = {
  slug: "matematica-4ano",
  disciplina: "Matemática",
  ano: "4º Ano",
  titulo: "O Reino dos Números",
  descricao:
    "A Cidade cresceu e virou REINO. Brilha vira aprendiz de mestre: dez cidades formam o reino (dez mil), moedas e balanças ficam mais finas, aparecem frações, decimais e a régua de verdade. Culmina em ser Matemático do Reino.",
  corPrimaria: "#7c3aed",
  corSecundaria: "#1e1b4b",
  tipoAula: "matematica",
  unidades: [unidade1, unidade2],
};

export default curso;
