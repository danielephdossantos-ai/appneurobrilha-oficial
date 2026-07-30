import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-silabas-simples";
import { aula02 } from "./aula-02-contar-silabas";
import { aula03 } from "./aula-03-familia-silabica";
import { aula04 } from "./aula-04-palavras-tres-silabas";

/**
 * Unidade 2 — A Fábrica de Sílabas
 * Da junção consoante + vogal até palavras de três sílabas.
 */
export const unidade2: UnidadePortugues = {
  slug: "unidade-2-fabrica-de-silabas",
  numero: 3,
  titulo: "A Fábrica de Sílabas",
  subtitulo: "Juntando pedacinhos para formar palavras",
  descricao:
    "Na Fábrica de Sílabas, a criança junta consoante + vogal, bate palma para contar sílabas, conhece a família silábica e monta palavras compridas de três sílabas.",
  corTema: "#22c55e",
  aulas: [aula01, aula02, aula03, aula04],
};
