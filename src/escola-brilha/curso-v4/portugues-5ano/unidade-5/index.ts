import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-planejar-o-texto";
import { aula2 } from "./aula-02-paragrafo-e-topico-frasal";
import { aula3 } from "./aula-03-conectivos-e-coesao";
import { aula4 } from "./aula-04-revisar-e-publicar";

/**
 * Unidade 5 — Diário de Escritor
 * -------------------------------------------------------------
 * Do planejamento à publicação: aqui o aluno aprende a escrever
 * com autoria, passando por planejar o texto, organizar parágrafos
 * com tópico frasal, usar conectivos para dar coesão às ideias, e
 * finalmente revisar e publicar sua própria produção textual.
 */
export const unidade5: UnidadePortugues = {
  slug: "unidade-5",
  numero: 5,
  titulo: "Diário de Escritor",
  subtitulo: "Escrever com autoria, do rascunho à versão final",
  descricao:
    "Nesta unidade o aluno aprende o passo a passo de quem escreve de verdade: planejar o texto pensando em público e objetivo, organizar parágrafos com um tópico frasal claro, usar conectivos para ligar as ideias com coesão, e por fim revisar e publicar sua própria produção textual.",
  corTema: "#f59e0b",
  aulas: [aula1, aula2, aula3, aula4],
};
