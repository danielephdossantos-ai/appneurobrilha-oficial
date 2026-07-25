import type { Unidade } from "../../types";
import { aula01_revisaoTabuadas } from "./aula-01-revisao-tabuadas";
import { aula02_multPor10E100 } from "./aula-02-mult-por-10-e-100";
import { aula03_multPor1Digito } from "./aula-03-mult-por-1-digito";
import { aula04_multPor2Digitos } from "./aula-04-mult-por-2-digitos";
import { aula05_dobroTriploQuadruplo } from "./aula-05-dobro-triplo-quadruplo";
import { aula06_problemasMultiplicacao } from "./aula-06-problemas-multiplicacao";
import { aula07_missaoFinalU3 } from "./aula-07-missao-final";

export const unidade3: Unidade = {
  slug: "unidade-3-multiplicacao",
  numero: 3,
  titulo: "Multiplicando no Reino",
  subtitulo: "Multiplicação por 1 e 2 dígitos",
  descricao:
    "Brilha vira Mestre da Multiplicação: domina tabuadas, ×10/100/1000, algoritmo por 1 e por 2 dígitos, dobro/triplo/quádruplo e problemas de grupos iguais.",
  corTema: "#f97316",
  aulas: [
    aula01_revisaoTabuadas,
    aula02_multPor10E100,
    aula03_multPor1Digito,
    aula04_multPor2Digitos,
    aula05_dobroTriploQuadruplo,
    aula06_problemasMultiplicacao,
    aula07_missaoFinalU3,
  ],
};
