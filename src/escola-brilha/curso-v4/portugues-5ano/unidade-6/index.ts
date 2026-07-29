import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-narrador-e-ponto-de-vista";
import { aula2 } from "./aula-02-poema-e-linguagem-figurada";
import { aula3 } from "./aula-03-cronica-e-humor";
import { aula4 } from "./aula-04-debate-e-seminario";

/**
 * Unidade 6 — Sala de Literatura e Voz
 * -------------------------------------------------------------
 * Unidade final do curso de Português do 5º ano. A jornada leva o
 * investigador da linguagem a explorar o texto literário por dentro
 * (narrador, ponto de vista, linguagem figurada, humor e ironia) e a
 * desenvolver a própria voz na oralidade formal, argumentando com
 * clareza e escutando o outro com atenção.
 */
export const unidade6: UnidadePortugues = {
  slug: "unidade-6",
  numero: 6,
  titulo: "Sala de Literatura e Voz",
  subtitulo: "Ler arte e falar com convicção",
  descricao:
    "Nesta unidade, o investigador da linguagem mergulha no texto literário: descobre quem narra uma história e como isso muda o efeito no leitor, investiga metáforas e o ritmo dos poemas, flagra o humor e a ironia das crônicas do cotidiano e, por fim, desenvolve a própria voz em debates e seminários, argumentando com clareza e escutando o outro com respeito.",
  corTema: "#818cf8",
  aulas: [aula1, aula2, aula3, aula4],
};
