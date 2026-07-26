import type { Unidade } from "../../types";
import { aula01_razaoProporcaoSemelhanca } from "./aula-01-razao-proporcao-semelhanca";
import { aula02_teoremaDeTales } from "./aula-02-teorema-de-tales";
import { aula03_semelhancaDeTriangulos } from "./aula-03-semelhanca-de-triangulos";
import { aula04_aplicacoesDeSemelhanca } from "./aula-04-aplicacoes-de-semelhanca";
import { aula05_missaoTopografo } from "./aula-05-missao-topografo";

export const unidade4: Unidade = {
  slug: "unidade-4-semelhanca",
  numero: 4,
  titulo: "Semelhança: a Matemática das Proporções",
  subtitulo: "De razões e proporções ao Teorema de Tales e à missão do topógrafo",
  descricao:
    "Nesta unidade você descobre como a Matemática mede o que os olhos não alcançam: razões, proporções, o Teorema de Tales, semelhança de triângulos e, na missão final, você vira topógrafo e mede alturas e distâncias usando sombra e escala de mapa.",
  corTema: "#f59e0b",
  aulas: [
    aula01_razaoProporcaoSemelhanca,
    aula02_teoremaDeTales,
    aula03_semelhancaDeTriangulos,
    aula04_aplicacoesDeSemelhanca,
    aula05_missaoTopografo,
  ],
};
