import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-bilhete-sem-assinatura";
import { aula02 } from "./aula-02-ideia-principal";
import { aula03 } from "./aula-03-palavra-desconhecida-contexto";
import { aula04 } from "./aula-04-conclusao-do-caso";

/**
 * Unidade 1 — A Primeira Pista
 * Curso: Língua Portuguesa 3º Ano — O Clube dos Detetives da Palavra
 *
 * Foco: localizar informação explícita, ideia principal, inferência
 * e vocabulário por contexto.
 *
 * BNCC: EF35LP03, EF35LP04, EF35LP05, EF03LP26
 */
export const unidade1: UnidadePortugues = {
  slug: "unidade-1",
  numero: 1,
  titulo: "A Primeira Pista",
  subtitulo: "Ler é procurar pistas no texto",
  descricao:
    "O Clube dos Detetives da Palavra abre suas portas. Aurora e Brilha ensinam a criança a caçar pistas escondidas nos textos: informações explícitas, a ideia principal, o que fica nas entrelinhas e o significado de palavras difíceis pelo contexto.",
  corTema: "#22d3ee",
  aulas: [aula01, aula02, aula03, aula04],
};
