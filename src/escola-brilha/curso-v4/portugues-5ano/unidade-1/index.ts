import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-tema-e-tese";
import { aula2 } from "./aula-02-inferencia-avancada";
import { aula3 } from "./aula-03-fato-e-opiniao";
import { aula04 } from "./aula-04-sintese-e-esquema";

/**
 * Unidade 1 — Leitura Investigativa
 * -------------------------------------------------------------
 * Primeira unidade do curso "A Central de Investigação da Linguagem"
 * (5º ano). A jornada leva o agente a investigar textos como provas:
 * descobrir tema, ideia global e intenção do autor; juntar pistas
 * espalhadas ao longo de textos longos para inferir o implícito;
 * separar fatos comprováveis de opiniões pessoais; e, por fim,
 * organizar tudo num esquema-síntese com palavras próprias.
 */
export const unidade1: UnidadePortugues = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Leitura Investigativa",
  subtitulo: "Ler é procurar pistas, não só decifrar palavras",
  descricao:
    "Nesta unidade, o agente aprende a investigar um texto como uma prova: descobrir o tema, a ideia global e a intenção de quem escreveu; juntar pistas espalhadas em textos longos para concluir o que está implícito; separar fatos comprováveis de opiniões pessoais; e organizar as descobertas num esquema-síntese com palavras próprias.",
  corTema: "#22d3ee",
  aulas: [aula1, aula2, aula3, aula04],
};
