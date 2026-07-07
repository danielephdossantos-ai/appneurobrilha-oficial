import type { Unidade } from "../../types";
import { aula01_comoResolver } from "./aula-01-como-resolver";
import { aula02_problemasSubtracao } from "./aula-02-problemas-subtracao";
import { aula03_qualOperacao } from "./aula-03-qual-operacao";
import { aula04_duasEtapas } from "./aula-04-duas-etapas";
import { aula05_missaoFinal } from "./aula-05-missao-final";

/**
 * Unidade 5 — "O Mercado dos Problemas Matemáticos"
 * ---------------------------------------------------
 * Progressão: 4 passos → problemas de subtração →
 *             escolher a operação → duas etapas → missão final.
 * BNCC integrada: EF02MA06, EF02MA07.
 * 5 aulas fechadas.
 */
export const unidade5: Unidade = {
  slug: "unidade-5-mercado-dos-problemas",
  numero: 5,
  titulo: "O Mercado dos Problemas Matemáticos",
  subtitulo: "Ler, decidir, resolver e conferir",
  descricao:
    "Brilha chega ao Mercado da Vila Encantada. Cada comerciante traz um problema real — e a criança aprende a LER, escolher a operação e conferir se a resposta faz sentido.",
  corTema: "#22c55e",
  aulas: [
    aula01_comoResolver,
    aula02_problemasSubtracao,
    aula03_qualOperacao,
    aula04_duasEtapas,
    aula05_missaoFinal,
  ],
};
