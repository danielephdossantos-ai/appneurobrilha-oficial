import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-ideia-principal-e-detalhes";
import { aula2 } from "./aula-02-inferencia-o-que-o-texto-nao-diz";
import { aula3 } from "./aula-03-ordem-e-causa";
import { aula04 } from "./aula-04-resumo-do-explorador";

/**
 * Unidade 1 — Mapa da Leitura
 * -------------------------------------------------------------
 * Primeira unidade do curso de Português do 4º ano. A jornada leva o
 * explorador a enxergar o que está além das palavras soltas: a ideia
 * principal de um texto, o que fica implícito nas entrelinhas, a
 * corrente de causas e consequências entre os fatos, e por fim como
 * transformar tudo isso num resumo próprio, sem copiar frases prontas.
 */
export const unidade1: UnidadePortugues = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Mapa da Leitura",
  subtitulo: "Ler não é só decifrar: é entender o que está nas entrelinhas",
  descricao:
    "Nesta unidade, o explorador aprende a ler além das palavras: encontrar a ideia principal de um texto, descobrir o que está implícito nas entrelinhas, seguir a corrente de causas e consequências entre os fatos e, por fim, resumir uma história com suas próprias palavras — sem nunca copiar frases prontas.",
  corTema: "#38bdf8",
  aulas: [aula1, aula2, aula3, aula04],
};
