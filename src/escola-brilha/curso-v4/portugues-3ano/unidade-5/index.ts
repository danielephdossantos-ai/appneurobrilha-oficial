import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-comeco-conflito-desfecho";
import { aula02 } from "./aula-02-paragrafo";
import { aula03 } from "./aula-03-personagem-que-fala";
import { aula04 } from "./aula-04-revisar-e-reescrever";

/**
 * Unidade 5 — Escrevendo o Mistério
 * -------------------------------------------------------------
 * O clube deixa de só INVESTIGAR histórias prontas e passa a
 * ESCREVER as suas próprias: estrutura narrativa (começo, conflito
 * e desfecho), organização em parágrafos, diálogo com discurso
 * direto e o hábito essencial de revisar o próprio texto.
 *
 * BNCC: EF35LP25, EF35LP26, EF03LP24, EF35LP07, EF35LP08
 */
export const unidade5: UnidadePortugues = {
  slug: "unidade-5",
  numero: 5,
  titulo: "Escrevendo o Mistério",
  subtitulo: "Uma história boa tem conflito, ritmo e final",
  descricao:
    "O clube vira oficina de escritores-detetives: aprender a montar uma história com começo, conflito e desfecho, organizar as ideias em parágrafos, dar voz aos personagens com discurso direto e revisar o próprio texto até ele ficar redondo.",
  corTema: "#e879f9",
  aulas: [aula01, aula02, aula03, aula04],
};
