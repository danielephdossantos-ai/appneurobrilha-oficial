import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-planejando-meu-livro";
import { aula02 } from "./aula-02-escrevendo-meu-livro";
import { aula03 } from "./aula-03-revisando-como-autor";
import { aula04 } from "./aula-04-ilustrando-e-apresentando";
import { aula05 } from "./aula-05-grande-festival-dos-autores";

/**
 * Unidade 7 — Festival dos Autores (FECHAMENTO do curso de 2º ano)
 * Produção autoral completa: planejar → escrever → revisar → ilustrar
 * → apresentar → publicar. Integra tudo que foi trabalhado no curso.
 *
 * Recompensas somadas das 5 aulas:
 *   ⭐ 1.000 XP · 🪙 800 moedas
 * 👑 Troféu final: "Grande Autor(a) da Biblioteca Encantada"
 * 🎁 Desbloqueia: 📚 Certificado · ✒️ Pena de Ouro · 🎓 Avatar Guardião · 📖 Álbum permanente
 */
export const unidade7: UnidadePortugues = {
  slug: "unidade-7",
  numero: 7,
  titulo: "Festival dos Autores",
  subtitulo: "Planejar, escrever, revisar, ilustrar e publicar seu livro",
  descricao:
    "Brilha entra no grande salão. Aurora aponta uma estante VAZIA: é pra guardar os livros das crianças que chegaram até aqui. Hoje é o Festival dos Autores — cada criança vira autora do próprio livro.",
  corTema: "#f43f5e",
  aulas: [aula01, aula02, aula03, aula04, aula05],
};
