import type { Unidade } from "../../types";
import { aula01_fracaoEquivalencia } from "./aula-01-fracao-equivalencia";
import { aula02_comparar } from "./aula-02-comparar-fracoes";
import { aula03_somaSub } from "./aula-03-soma-sub-fracoes";
import { aula04_multDivFracoes } from "./aula-04-mult-div-fracoes";
import { aula05_missao } from "./aula-05-missao";

export const unidade4: Unidade = {
  slug: "unidade-4-fracoes",
  numero: 4,
  titulo: "Frações no Laboratório",
  subtitulo: "Equivalência, comparação, fração de quantidade, adição e subtração",
  descricao: "Brilha aprende a representar, simplificar e comparar frações, calcular frações de quantidades e resolver adições e subtrações.",
  corTema: "#7c3aed",
  aulas: [aula01_fracaoEquivalencia, aula02_comparar, aula03_somaSub, aula04_multDivFracoes, aula05_missao],
};
