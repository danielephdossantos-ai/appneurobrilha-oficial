import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-noticia-e-reportagem";
import { aula2 } from "./aula-02-artigo-de-opiniao";
import { aula3 } from "./aula-03-resenha-critica";
import { aula4 } from "./aula-04-texto-digital-e-fake-news";

/**
 * Unidade 4 — Arquivo dos Gêneros
 * -------------------------------------------------------------
 * Investiga quatro gêneros textuais essenciais: a notícia (fatos e
 * fontes), o artigo de opinião (tese e argumentos), a resenha crítica
 * (resumo e avaliação) e os textos digitais (posts, comentários e a
 * checagem de fake news).
 */
export const unidade4: UnidadePortugues = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Arquivo dos Gêneros",
  subtitulo: "Cada texto tem uma missão e uma forma",
  descricao:
    "Nesta unidade, o investigador da linguagem abre quatro casos: como uma notícia relata fatos com fontes confiáveis, como um artigo de opinião defende uma tese com argumentos, como uma resenha crítica resume e avalia uma obra, e como reconhecer e checar textos digitais para não cair em fake news.",
  corTema: "#06b6d4",
  aulas: [aula1, aula2, aula3, aula4],
};
