import type { Unidade } from "../../types";
import { aula01_ideiaMultiplicar } from "./aula-01-ideia-de-multiplicar";
import { aula02_tabuadaDo2 } from "./aula-02-tabuada-do-2";
import { aula03_tabuadaDo3 } from "./aula-03-tabuada-do-3";
import { aula04_tabuadas4e5 } from "./aula-04-tabuadas-4-e-5";
import { aula05_tabuadas6a9 } from "./aula-05-tabuadas-6-a-9";
import { aula06_dobrosMetades } from "./aula-06-dobros-e-metades";
import { aula07_missaoFinalU3 } from "./aula-07-missao-final";

export const unidade3: Unidade = {
  slug: "unidade-3-multiplicacao",
  numero: 3,
  titulo: "Multiplicar e Agrupar",
  subtitulo: "Ideia de multiplicação, tabuadas e dobros",
  descricao:
    "Brilha entra na Fábrica dos Grupos: aprende que multiplicar é somar parcelas iguais, treina tabuadas de 2 a 9 e domina dobros e metades.",
  corTema: "#2563eb",
  aulas: [
    aula01_ideiaMultiplicar,
    aula02_tabuadaDo2,
    aula03_tabuadaDo3,
    aula04_tabuadas4e5,
    aula05_tabuadas6a9,
    aula06_dobrosMetades,
    aula07_missaoFinalU3,
  ],
};
