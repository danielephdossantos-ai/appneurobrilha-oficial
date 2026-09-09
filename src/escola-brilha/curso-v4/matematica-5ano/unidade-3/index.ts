import type { Unidade } from "../../types";
import { aula01_multPor1Digito } from "./aula-01-mult-por-1-digito";
import { aula02_multPor10100 } from "./aula-02-mult-por-10-100-1000";
import { aula03_multPor2Digitos } from "./aula-03-mult-por-2-digitos";
import { aula04_multPor3Digitos } from "./aula-04-mult-por-3-digitos";
import { aula05_propriedades } from "./aula-05-propriedades";
import { aula06_missaoFinal } from "./aula-06-missao-final";

export const unidade3: Unidade = {
  slug: "unidade-3-multiplicando",
  numero: 3,
  titulo: "Multiplicando no Império",
  subtitulo: "Multiplicação por 1, 2 e 3 dígitos + propriedades",
  descricao:
    "Brilha aprende o algoritmo formal da multiplicação com números grandes, usa multiplicação por 10/100/1000 e domina propriedades (comutativa, associativa, distributiva).",
  corTema: "#0e7490",
  aulas: [
    aula01_multPor1Digito,
    aula02_multPor10100,
    aula03_multPor2Digitos,
    aula04_multPor3Digitos,
    aula05_propriedades,
    aula06_missaoFinal,
  ],
};
