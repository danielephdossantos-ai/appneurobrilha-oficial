import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-nome-magico";
import { aula02 } from "./aula-02-alfabeto-completo";
import { aula03 } from "./aula-03-vogais";
import { aula04 } from "./aula-04-consoantes-encontro";

/**
 * Unidade 1 — O Alfabeto Mágico
 * Aurora, a Guardiã das Letras, apresenta o alfabeto: do nome próprio
 * (a palavra mais importante do mundo para a criança) até a descoberta
 * de que consoante + vogal formam sílabas legíveis.
 */
export const unidade1: UnidadePortugues = {
  slug: "unidade-1-alfabeto-magico",
  numero: 1,
  titulo: "O Alfabeto Mágico",
  subtitulo: "Do meu nome até as primeiras sílabas",
  descricao:
    "Aurora abre o Livro das Letras: a criança escreve e reconhece o próprio nome, aprende a sequência do alfabeto, conhece as 5 vogais e descobre a chave da leitura — consoante + vogal = sílaba.",
  corTema: "#f59e0b",
  aulas: [aula01, aula02, aula03, aula04],
};
