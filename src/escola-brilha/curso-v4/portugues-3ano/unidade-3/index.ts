import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-substantivo";
import { aula02 } from "./aula-02-adjetivo";
import { aula03 } from "./aula-03-verbo";
import { aula04 } from "./aula-04-pontuacao-muda-tudo";

/**
 * Unidade 3 — Frases Sob Suspeita
 * Curso: Língua Portuguesa 3º Ano — O Clube dos Detetives da Palavra
 *
 * Foco: reconhecer classes de palavras (substantivo, adjetivo, verbo)
 * e o papel da pontuação na construção do sentido das frases.
 *
 * BNCC: EF03LP07, EF35LP12
 */
export const unidade3: UnidadePortugues = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Frases Sob Suspeita",
  subtitulo: "Cada palavra tem uma função na frase",
  descricao:
    "Os detetives da palavra viram investigadores de frases: descobrem que substantivos nomeiam as pessoas e coisas do caso, adjetivos revelam suas características, verbos contam as ações no tempo certo, e a pontuação decide o sentido final de cada pista escrita.",
  corTema: "#f59e0b",
  aulas: [aula01, aula02, aula03, aula04],
};
