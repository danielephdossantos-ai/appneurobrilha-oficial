import type { Unidade } from "../../types";
import { aula01_valor } from "./aula-01-valor";
import { aula02_monomios } from "./aula-02-monomios";
import { aula03_polinomios } from "./aula-03-polinomios";
import { aula04_quadrados } from "./aula-04-quadrados";
import { aula05_somaDiferenca } from "./aula-05-soma-diferenca";
import { aula06_missao } from "./aula-06-missao";

export const unidade2: Unidade = {
  slug: "unidade-2-expressoes-e-produtos-notaveis",
  numero: 2,
  titulo: "Expressões Algébricas e Produtos Notáveis",
  subtitulo: "Valor numérico, monômios, polinômios e produtos notáveis",
  descricao:
    "Brilha começa a manipular expressões com letras. Calcula valor numérico, opera monômios e polinômios e desvenda três produtos notáveis que servem para o resto da vida matemática.",
  corTema: "#0ea5e9",
  aulas: [
    aula01_valor,
    aula02_monomios,
    aula03_polinomios,
    aula04_quadrados,
    aula05_somaDiferenca,
    aula06_missao,
  ],
};
