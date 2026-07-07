import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-portal-biblioteca";
import { aula02 } from "./aula-02-semente-curiosa";

/**
 * Unidade 1 — A Biblioteca Encantada
 * Tema: Descobrindo o prazer da leitura.
 *
 * Ao concluir esta unidade o estudante deverá ser capaz de:
 *  - desenvolver maior fluência na leitura;
 *  - compreender informações explícitas em pequenos textos;
 *  - fazer previsões antes da leitura;
 *  - localizar personagens, lugares e acontecimentos;
 *  - ampliar o vocabulário;
 *  - ler com confiança.
 *
 * Ao final da unidade (após todas as aulas) o estudante recebe:
 *  ⭐ 500 XP · 🪙 300 moedas · 🏅 Medalha "Guardião da Primeira Página"
 *  🎁 Item desbloqueado: 📖 Página Dourada da Biblioteca
 */
export const unidade1: UnidadePortugues = {
  slug: "unidade-1",
  numero: 1,
  titulo: "A Biblioteca Encantada",
  subtitulo: "Descobrindo o prazer da leitura",
  descricao:
    "Brilha atravessa o portal de uma antiga biblioteca esquecida. Pra despertar cada livro adormecido, precisa cumprir missões de leitura — observando, prevendo, lendo e explicando as histórias.",
  corTema: "#a855f7",
  aulas: [aula01, aula02],
};
