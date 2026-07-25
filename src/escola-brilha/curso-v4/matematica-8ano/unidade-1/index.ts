import type { Unidade } from "../../types";
import { aula01_dizimas } from "./aula-01-dizimas";
import { aula02_potencias } from "./aula-02-potencias";
import { aula03_notacaoGrande } from "./aula-03-notacao-grande";
import { aula04_notacaoPequeno } from "./aula-04-notacao-pequeno";
import { aula05_operacoesNC } from "./aula-05-operacoes-nc";
import { aula06_comparar } from "./aula-06-comparar";
import { aula07_missao } from "./aula-07-missao";

export const unidade1: Unidade = {
  slug: "unidade-1-reais-na-oficina",
  numero: 1,
  titulo: "Números Reais na Oficina",
  subtitulo: "Dízimas, potências e notação científica",
  descricao:
    "Brilha abre a Oficina. Aprende a transformar dízimas em fração, escreve potências com expoente negativo e usa notação científica para lidar com números gigantes e minúsculos.",
  corTema: "#0ea5e9",
  aulas: [
    aula01_dizimas,
    aula02_potencias,
    aula03_notacaoGrande,
    aula04_notacaoPequeno,
    aula05_operacoesNC,
    aula06_comparar,
    aula07_missao,
  ],
};
