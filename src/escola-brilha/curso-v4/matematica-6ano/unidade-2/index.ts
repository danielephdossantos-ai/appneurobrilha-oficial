import type { Unidade } from "../../types";
import { aula01_somaSubtracao } from "./aula-01-soma-subtracao";
import { aula02_multiplicacao } from "./aula-02-multiplicacao";
import { aula03_divisao } from "./aula-03-divisao";
import { aula04_expressoes } from "./aula-04-expressoes";
import { aula05_potenciasRaiz } from "./aula-05-potencias-raiz";
import { aula06_missao } from "./aula-06-missao";

export const unidade2: Unidade = {
  slug: "unidade-2-operacoes",
  numero: 2,
  titulo: "Investigando as Operações",
  subtitulo: "+ − × ÷, expressões, potências e raiz",
  descricao:
    "Brilha domina as 4 operações com números grandes, aprende a ordem correta em expressões e descobre potências e raiz quadrada.",
  corTema: "#7c3aed",
  aulas: [
    aula01_somaSubtracao,
    aula02_multiplicacao,
    aula03_divisao,
    aula04_expressoes,
    aula05_potenciasRaiz,
    aula06_missao,
  ],
};
