import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-rimas";
import { aula02 } from "./aula-02-parlenda";
import { aula03 } from "./aula-03-trava-lingua";
import { aula04 } from "./aula-04-meu-poeminha";

/**
 * Unidade 6 — Poesia, Cantiga e Trava-Língua
 * Brincando com o som das palavras e criando o primeiro poeminha.
 */
export const unidade6: UnidadePortugues = {
  slug: "unidade-6-poesia-cantiga-trava-lingua",
  numero: 6,
  titulo: "Poesia, Cantiga e Trava-Língua",
  subtitulo: "Brincando com o som das palavras",
  descricao:
    "Fecho do curso: a criança reconhece rimas, canta parlendas, treina trava-línguas e, por fim, escreve o próprio poeminha com versos que rimam.",
  corTema: "#14b8a6",
  aulas: [aula01, aula02, aula03, aula04],
};
