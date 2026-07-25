import type { Unidade } from "../../types";
import { aula01_comprimento } from "./aula-01-comprimento";
import { aula02_massa } from "./aula-02-massa";
import { aula03_capacidade } from "./aula-03-capacidade";
import { aula04_tempo } from "./aula-04-tempo";
import { aula05_dinheiro } from "./aula-05-dinheiro";
import { aula06_perimetro } from "./aula-06-perimetro";
import { aula07_missaoFinalU6 } from "./aula-07-missao-final";

export const unidade6: Unidade = {
  slug: "unidade-6-medidas",
  numero: 6,
  titulo: "Medidas do Reino",
  subtitulo: "Comprimento, massa, capacidade, tempo, dinheiro e perímetro",
  descricao:
    "Brilha vira Medidor(a) do Reino: régua, balança, jarra, relógio e cédulas. Aprende a converter e a operar com medidas reais.",
  corTema: "#0891b2",
  aulas: [
    aula01_comprimento,
    aula02_massa,
    aula03_capacidade,
    aula04_tempo,
    aula05_dinheiro,
    aula06_perimetro,
    aula07_missaoFinalU6,
  ],
};
