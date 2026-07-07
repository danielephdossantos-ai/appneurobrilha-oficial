import type { Unidade } from "../../types";
import { aula01_oQueETirar } from "./aula-01-o-que-e-tirar";
import { aula02_simboloMenos } from "./aula-02-simbolo-menos";
import { aula03_comparando } from "./aula-03-comparando";
import { aula04_contaArmada } from "./aula-04-conta-armada";
import { aula05_missaoFinal } from "./aula-05-missao-final";

/**
 * Unidade 3 — "O Reino das Subtrações"
 * ------------------------------------
 * Progressão: tirar → símbolo − → comparar → conta armada →
 *             missão final.
 * BNCC integrada: EF02MA05, EF02MA06, EF02MA07.
 * 5 aulas fechadas.
 */
export const unidade3: Unidade = {
  slug: "unidade-3-reino-das-subtracoes",
  numero: 3,
  titulo: "O Reino das Subtrações",
  subtitulo: "Tirar, comparar, descobrir quanto falta",
  descricao:
    "O vento espalhou tudo no Reino das Subtrações. Brilha ajuda os moradores a descobrir quanto sobrou, quanto falta e quanto um grupo tem a mais que outro.",
  corTema: "#a78bfa",
  aulas: [
    aula01_oQueETirar,
    aula02_simboloMenos,
    aula03_comparando,
    aula04_contaArmada,
    aula05_missaoFinal,
  ],
};
