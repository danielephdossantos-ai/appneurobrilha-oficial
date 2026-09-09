import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-antes-de-escrever";
import { aula02 } from "./aula-02-frases-completas";
import { aula03 } from "./aula-03-revisar-como-autor";
import { aula04 } from "./aula-04-escrever-para-pessoas";
import { aula05 } from "./aula-05-meu-primeiro-livro";

/**
 * Unidade 5 — Pequenos Escritores
 * Planejar, escrever, revisar e publicar pequenos textos.
 * BNCC integrada: EF02LP21, EF02LP22, EF02LP23, EF02LP24, EF02LP25.
 *
 * Ao final da unidade o estudante recebe:
 *  ⭐ 800 XP · 🪙 500 moedas · 🏅 Medalha "Pequeno Autor da Biblioteca Encantada"
 *  🎁 Item desbloqueado: 🪶 Pena Dourada do Escritor
 */
export const unidade5: UnidadePortugues = {
  slug: "unidade-5",
  numero: 5,
  titulo: "Pequenos Escritores",
  subtitulo: "Planejar, escrever, revisar e publicar",
  descricao:
    "Brilha e Aurora chegam à Sala dos Escritores. Há livros com páginas em branco esperando serem escritas. Cada texto produzido ganha uma PENA DOURADA — ao reunir cinco, um novo livro nasce na Biblioteca Encantada.",
  corTema: "#f59e0b",
  aulas: [aula01, aula02, aula03, aula04, aula05],
};
