import type { Curso } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Matemática 4º Ano — "O Reino dos Números"
 * -------------------------------------------------
 *  U1 · Bem-vindo(a) ao Reino dos Números              (EF04MA01–03, 11)
 *  U2 · Somar, Subtrair e Igualdade                    (EF04MA03, 05, 13–15)
 *  U3 · Multiplicando no Reino                         (EF04MA04, 06, 08)
 *  U4 · Dividindo e Padrões de Restos                  (EF04MA07, 12)
 *  U5 · Frações e Decimais                             (EF04MA09, 10, 25)
 *  U6 · Medidas do Reino                               (EF04MA20–25)
 *  U7 · Geometria, Localização, Dados e Probabilidade  (EF04MA16–19, 26–28)
 *
 * Fecha a série do 4º ano. Culmina em Matemático(a) do Reino.
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
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
