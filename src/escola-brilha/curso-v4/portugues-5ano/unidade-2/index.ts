import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-acentuacao";
import { aula2 } from "./aula-02-os-porques";
import { aula3 } from "./aula-03-mau-mal-ha-a";
import { aula4 } from "./aula-04-s-z-x-ss-c";

/**
 * Unidade 2 — Laboratório da Ortografia
 * -------------------------------------------------------------
 * Segunda unidade do curso de Português do 5º ano ("A Central de
 * Investigação da Linguagem"). A investigadora leva a turma a
 * enxergar a lógica por trás da ortografia: por que uma palavra tem
 * acento, quando usar cada "porquê", como não se confundir com
 * parônimos e homônimos e como decifrar grafias difíceis usando a
 * família de palavras como pista principal.
 */
export const unidade2: UnidadePortugues = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Laboratório da Ortografia",
  subtitulo: "Toda palavra tem uma regra por trás",
  descricao:
    "Nesta unidade, a investigação muda de foco: da leitura de textos para a lógica escondida dentro das próprias palavras. A turma aprende a localizar a sílaba tônica e aplicar as regras de acentuação, a diferenciar os quatro porquês, a desmascarar parônimos e homônimos como mau/mal e onde/aonde, e a resolver grafias difíceis com S, Z, X, SS e Ç usando o truque da família de palavras.",
  corTema: "#38bdf8",
  aulas: [aula1, aula2, aula3, aula4],
};
