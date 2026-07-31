/**
 * Registro de sondagens iniciais por curso.
 * Cada curso pode ter um conjunto próprio de itens, calibrado à idade.
 */
import {
  ITENS_SONDAGEM,
  avaliarSondagem,
  type ItemSondagem,
  type ResultadoSondagem,
} from "./sondagem-inicial";
import { ITENS_SONDAGEM_2ANO, avaliarSondagem2ano } from "./sondagem-2ano";
import { ITENS_SONDAGEM_3ANO, avaliarSondagem3ano } from "./sondagem-3ano";

export type ConjuntoSondagem = {
  itens: ItemSondagem[];
  avaliar: (respostas: number[]) => Omit<ResultadoSondagem, "feitoEm">;
  chamada: string;
};

export const SONDAGENS: Record<string, ConjuntoSondagem> = {
  "portugues-1ano": {
    itens: ITENS_SONDAGEM,
    avaliar: avaliarSondagem,
    chamada:
      "São 8 perguntinhas faladas, de 2 minutinhos. Ninguém reprova — é só para a Aurora saber qual é o melhor ponto de partida.",
  },
  "portugues-2ano": {
    itens: ITENS_SONDAGEM_2ANO,
    avaliar: avaliarSondagem2ano,
    chamada:
      "São 8 perguntas faladas, de uns 3 minutinhos. Ninguém reprova — é só para saber em qual ala da Biblioteca você começa.",
  },
  "portugues-3ano": {
    itens: ITENS_SONDAGEM_3ANO,
    avaliar: avaliarSondagem3ano,
    chamada:
      "São 8 perguntas faladas, de uns 3 minutos. Ninguém reprova — é só para o clube saber por qual caso você começa a investigar.",
  },
};

export function getSondagem(cursoSlug: string): ConjuntoSondagem | undefined {
  return SONDAGENS[cursoSlug];
}
