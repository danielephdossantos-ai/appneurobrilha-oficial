import type { Unidade } from "../../types";
import { aula01_pensandoAntes } from "./aula-01-pensando-antes";
import { aula02_decompondo } from "./aula-02-decompondo";
import { aula03_completandoDezena } from "./aula-03-completando-dezena";
import { aula04_escolhendoEstrategia } from "./aula-04-escolhendo-estrategia";
import { aula05_missaoFinal } from "./aula-05-missao-final";

/**
 * Unidade 4 — "A Oficina das Estratégias de Cálculo"
 * ---------------------------------------------------
 * Progressão: cálculo mental → decomposição → completar dezena →
 *             escolher estratégia → missão final.
 * BNCC integrada: EF02MA05, EF02MA06, EF02MA07.
 * 5 aulas fechadas.
 */
export const unidade4: Unidade = {
  slug: "unidade-4-oficina-das-estrategias",
  numero: 4,
  titulo: "A Oficina das Estratégias de Cálculo",
  subtitulo: "Pensar rápido, decompor, escolher a ferramenta",
  descricao:
    "Brilha chega à Oficina do Inventor dos Números. Cada máquina consertada libera uma ferramenta matemática — cálculo mental, decomposição, completar a dezena e escolha de estratégia.",
  corTema: "#f97316",
  aulas: [
    aula01_pensandoAntes,
    aula02_decompondo,
    aula03_completandoDezena,
    aula04_escolhendoEstrategia,
    aula05_missaoFinal,
  ],
};
