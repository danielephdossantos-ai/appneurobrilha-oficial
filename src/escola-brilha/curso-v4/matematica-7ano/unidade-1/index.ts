import type { Unidade } from "../../types";
import { aula01_inteirosReta } from "./aula-01-inteiros-reta";
import { aula02_somaInteiros } from "./aula-02-soma-inteiros";
import { aula03_subtracaoInteiros } from "./aula-03-subtracao-inteiros";
import { aula04_multiplicacaoInteiros } from "./aula-04-multiplicacao-inteiros";
import { aula05_potenciasExpressoes } from "./aula-05-potencias-expressoes";

export const unidade1: Unidade = {
  slug: "unidade-1-numeros-inteiros",
  numero: 1,
  titulo: "Números Inteiros",
  subtitulo: "O mundo abaixo do zero",
  descricao:
    "Brilha desce abaixo do zero. Reta numérica, módulo e oposto, as quatro operações com sinais e potências de base negativa — a base de toda a álgebra do 7º ano.",
  corTema: "#6366f1",
  aulas: [
    aula01_inteirosReta,
    aula02_somaInteiros,
    aula03_subtracaoInteiros,
    aula04_multiplicacaoInteiros,
    aula05_potenciasExpressoes,
  ],
};
