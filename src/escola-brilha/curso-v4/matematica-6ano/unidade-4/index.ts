import type { Unidade } from "../../types";
import { aula01_fracaoEquivalencia } from "./aula-01-fracao-equivalencia";
import { aula02_comparar } from "./aula-02-comparar-fracoes";
import { aula03_somaSub } from "./aula-03-soma-sub-fracoes";
import { aula04_multDiv } from "./aula-04-mult-div-fracoes";
import { aula05_missao } from "./aula-05-missao";

export const unidade4: Unidade = {
  slug: "unidade-4-fracoes",
  numero: 4,
  titulo: "Frações no Laboratório",
  subtitulo: "Equivalência, comparação e as 4 operações",
  descricao: "Brilha domina frações: representar, simplificar, comparar, somar, subtrair, multiplicar e dividir.",
  corTema: "#7c3aed",
  aulas: [aula01_fracaoEquivalencia, aula02_comparar, aula03_somaSub, aula04_multDiv, aula05_missao],
};
