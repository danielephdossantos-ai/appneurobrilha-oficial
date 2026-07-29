import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-o-que-e-frase";
import { aula02 } from "./aula-02-ordem-das-palavras";
import { aula03 } from "./aula-03-pontinho-final";
import { aula04 } from "./aula-04-lendo-frases";

/**
 * Unidade 3 — Palavras Viram Frases
 * Escrevendo e lendo as primeiras frases com sentido e pontuação.
 */
export const unidade3: UnidadePortugues = {
  slug: "unidade-3-palavras-viram-frases",
  numero: 3,
  titulo: "Palavras Viram Frases",
  subtitulo: "Escrevendo minhas primeiras frases",
  descricao:
    "A criança descobre que palavras soltas viram FRASE quando têm ordem e sentido, aprende ponto, interrogação e exclamação, e lê frases inteiras entendendo o que dizem.",
  corTema: "#3b82f6",
  aulas: [aula01, aula02, aula03, aula04],
};
