import type { Unidade } from "../../types";
import { aula01_ideiaDeDividir } from "./aula-01-ideia-de-dividir";
import { aula02_divisaoNaChave } from "./aula-02-divisao-na-chave";
import { aula03_divisaoComResto } from "./aula-03-divisao-com-resto";
import { aula04_divisaoPor10E100 } from "./aula-04-divisao-por-10-e-100";
import { aula05_metadeTercaQuarta } from "./aula-05-metade-terca-quarta";
import { aula06_problemasDivisao } from "./aula-06-problemas-divisao";
import { aula07_missaoFinalU4 } from "./aula-07-missao-final";

export const unidade4: Unidade = {
  slug: "unidade-4-divisao",
  numero: 4,
  titulo: "Dividindo no Reino",
  subtitulo: "Divisão exata, com resto e na chave",
  descricao:
    "Brilha vira Repartidor(a) do Reino: aprende dividir exato, com resto, na chave, por 10/100/1000, metade/terça/quarta parte e problemas.",
  corTema: "#059669",
  aulas: [
    aula01_ideiaDeDividir,
    aula02_divisaoNaChave,
    aula03_divisaoComResto,
    aula04_divisaoPor10E100,
    aula05_metadeTercaQuarta,
    aula06_problemasDivisao,
    aula07_missaoFinalU4,
  ],
};
