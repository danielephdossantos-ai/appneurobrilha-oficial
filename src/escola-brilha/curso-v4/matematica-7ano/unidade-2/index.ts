import type { Unidade } from "../../types";
import { aula01_racionais } from "./aula-01-racionais";
import { aula02_compararRacionais } from "./aula-02-comparar-racionais";
import { aula03_somaRacionais } from "./aula-03-soma-racionais";
import { aula04_multiplicacaoRacionais } from "./aula-04-multiplicacao-racionais";
import { aula05_dizimas } from "./aula-05-dizimas";

export const unidade2: Unidade = {
  slug: "unidade-2-racionais",
  numero: 2,
  titulo: "Números Racionais",
  subtitulo: "Frações, decimais e dízimas",
  descricao:
    "Fração, decimal e porcentagem como três roupas do mesmo número. Comparar, somar, subtrair, multiplicar, dividir e transformar dízimas periódicas em fração geratriz.",
  corTema: "#0ea5e9",
  aulas: [
    aula01_racionais,
    aula02_compararRacionais,
    aula03_somaRacionais,
    aula04_multiplicacaoRacionais,
    aula05_dizimas,
  ],
};
