import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-poesia-ritmo-e-rima";
import { aula2 } from "./aula-02-texto-teatral";
import { aula3 } from "./aula-03-falar-em-publico";
import { aula4 } from "./aula-04-missao-final-sarau-da-conquista";

/**
 * Unidade 6 — Vozes do Mundo
 * -------------------------------------------------------------
 * Da poesia ao teatro, passando pela fala em público, até a
 * missão final: o aluno cria e apresenta sua própria obra num
 * sarau, retomando tudo o que aprendeu ao longo do curso.
 */
export const unidade6: UnidadePortugues = {
  slug: "unidade-6",
  numero: 6,
  titulo: "Vozes do Mundo",
  subtitulo: "Poesia, teatro e a força da própria voz",
  descricao:
    "Nesta unidade final o aluno explora o ritmo e a rima da poesia, descobre a estrutura do texto teatral, aprende a falar em público com confiança e, na missão final, cria sua própria obra — um poema, uma cena teatral ou uma fala — para apresentar num sarau, celebrando toda a jornada de Português do 5º ano.",
  corTema: "#a78bfa",
  aulas: [aula1, aula2, aula3, aula4],
};
