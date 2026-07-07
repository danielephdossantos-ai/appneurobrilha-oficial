import type { Unidade } from "../../types";
import { aula01_juntandoColecoes } from "./aula-01-juntando-colecoes";
import { aula02_simboloMais } from "./aula-02-simbolo-mais";
import { aula03_diferentesJeitos } from "./aula-03-diferentes-jeitos";
import { aula04_contaArmada } from "./aula-04-conta-armada";
import { aula05_missaoFinal } from "./aula-05-missao-final";

/**
 * Unidade 2 — "A Cidade das Adições"
 * -----------------------------------
 * Progressão: juntar → símbolo + → estratégias → conta armada →
 *             missão final.
 * BNCC integrada: EF02MA05, EF02MA06.
 * 5 aulas fechadas.
 */
export const unidade2: Unidade = {
  slug: "unidade-2-cidade-das-adicoes",
  numero: 2,
  titulo: "A Cidade das Adições",
  subtitulo: "Juntar, acrescentar, completar",
  descricao:
    "Brilha visita a Cidade das Adições e ajuda os moradores a preparar a Festa da Amizade — juntando quantidades e descobrindo a mágica do '+'.",
  corTema: "#38bdf8",
  aulas: [
    aula01_juntandoColecoes,
    aula02_simboloMais,
    aula03_diferentesJeitos,
    aula04_contaArmada,
    aula05_missaoFinal,
  ],
};
