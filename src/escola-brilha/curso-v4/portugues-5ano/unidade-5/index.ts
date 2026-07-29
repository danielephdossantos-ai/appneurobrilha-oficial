import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-planejamento-do-texto";
import { aula2 } from "./aula-02-paragrafo-argumentativo";
import { aula3 } from "./aula-03-coesao-e-coerencia";
import { aula4 } from "./aula-04-revisao-e-reescrita";

/**
 * Unidade 5 — Oficina de Escrita
 * -------------------------------------------------------------
 * Unidade do curso de Português do 5º ano. A jornada leva o
 * investigador da linguagem a planejar um texto antes de escrever,
 * construir parágrafos argumentativos, garantir coesão e coerência
 * entre as ideias e, por fim, revisar e reescrever seu próprio texto.
 */
export const unidade5: UnidadePortugues = {
  slug: "unidade-5",
  numero: 5,
  titulo: "Oficina de Escrita",
  subtitulo: "Escrever é planejar, testar e reescrever",
  descricao:
    "Nesta unidade, o investigador da linguagem entra na oficina de escrita: aprende a planejar um texto antes de escrever, a construir parágrafos argumentativos convincentes, a garantir coesão e coerência entre as ideias e, por fim, a revisar e reescrever seu próprio texto como um verdadeiro escritor faz.",
  corTema: "#2dd4bf",
  aulas: [aula1, aula2, aula3, aula4],
};
