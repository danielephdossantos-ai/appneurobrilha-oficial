import type { Unidade } from "../../types";
import { aula01_ideiaDividir } from "./aula-01-ideia-de-dividir";
import { aula02_inversoMult } from "./aula-02-inverso-da-multiplicacao";
import { aula03_divisaoExata } from "./aula-03-divisao-exata";
import { aula04_divisaoComResto } from "./aula-04-divisao-com-resto";
import { aula05_problemasDivisao } from "./aula-05-problemas-de-divisao";
import { aula06_partesFrac } from "./aula-06-metade-terca-quarta";
import { aula07_missaoFinalU4 } from "./aula-07-missao-final";

export const unidade4: Unidade = {
  slug: "unidade-4-divisao",
  numero: 4,
  titulo: "Dividir e Repartir",
  subtitulo: "Divisão exata, com resto e partes iguais",
  descricao:
    "Brilha aprende a repartir com justiça: divisão exata, com resto, fração como parte e problemas do dia.",
  corTema: "#2563eb",
  aulas: [
    aula01_ideiaDividir,
    aula02_inversoMult,
    aula03_divisaoExata,
    aula04_divisaoComResto,
    aula05_problemasDivisao,
    aula06_partesFrac,
    aula07_missaoFinalU4,
  ],
};
