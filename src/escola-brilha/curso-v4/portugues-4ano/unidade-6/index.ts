import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-narrador-1a-3a-pessoa";
import { aula02 } from "./aula-02-linguagem-figurada";
import { aula03 } from "./aula-03-texto-teatral";
import { aula04 } from "./aula-04-falar-em-publico";

/**
 * Unidade 6 — Vozes do Caminho
 * -------------------------------------------------------------
 * Última unidade do curso de Português do 4º ano. Os Exploradores
 * mergulham na literatura, no teatro e na oralidade: descobrem quem
 * conta a história (narrador em 1ª e 3ª pessoa), aprendem as
 * ferramentas da linguagem figurada, exploram a estrutura de um
 * texto teatral e, por fim, aprendem a planejar e apresentar uma
 * fala em público — encerrando a jornada como verdadeiros contadores
 * de histórias.
 */
export const unidade6: UnidadePortugues = {
  slug: "unidade-6",
  numero: 6,
  titulo: "Vozes do Caminho",
  subtitulo: "Literatura, teatro e a voz de quem conta a história",
  descricao:
    "Nesta unidade, o explorador descobre as diferentes vozes que contam uma história: o narrador em 1ª e 3ª pessoa, a linguagem figurada que dá mais sentido às palavras, a estrutura do texto teatral com cenas, rubricas e diálogos, e por fim aprende a planejar e apresentar sua própria fala em público, com voz, ritmo e escuta atenta.",
  corTema: "#a855f7",
  aulas: [aula01, aula02, aula03, aula04],
};
