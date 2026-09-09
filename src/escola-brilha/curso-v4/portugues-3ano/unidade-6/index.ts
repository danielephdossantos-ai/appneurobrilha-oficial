import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-verso-estrofe-rima";
import { aula02 } from "./aula-02-sentido-figurado";
import { aula03 } from "./aula-03-cordel-do-clube";
import { aula04 } from "./aula-04-piada-trava-lingua-adivinha";

/**
 * Unidade 6 — Palavras com Ritmo
 * -------------------------------------------------------------
 * Última unidade do curso "O Clube dos Detetives da Palavra" (3º
 * ano). O clube investiga a sonoridade e o jogo de sentido da
 * língua: verso, estrofe e rima; sentido figurado (comparação e
 * metáfora); cordel popular; e o humor por duplo sentido em
 * piadas, trava-línguas e adivinhas.
 *
 * BNCC: EF35LP23, EF35LP28, EF03LP24, EF35LP31, EF15LP16.
 */
export const unidade6: UnidadePortugues = {
  slug: "unidade-6",
  numero: 6,
  titulo: "Palavras com Ritmo",
  subtitulo: "Poema, cordel e humor: brincar com a língua",
  descricao:
    "O clube encerra suas investigações descobrindo o lado sonoro e brincalhão da língua: como poemas e cordéis constroem ritmo e rima, como o sentido figurado esconde significados por trás das palavras, e como piadas e trava-línguas usam o duplo sentido para fazer rir.",
  corTema: "#fb923c",
  aulas: [aula01, aula02, aula03, aula04],
};
