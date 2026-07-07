import type { UnidadeGeografia } from "../../types";
import { aula01 } from "./aula-01-quem-mora-comigo";
import { aula02 } from "./aula-02-minha-casa";
import { aula03 } from "./aula-03-caminho-escola";
import { aula04 } from "./aula-04-minha-escola";
import { aula05 } from "./aula-05-minha-sala-de-aula";

/**
 * Unidade 1 — Meu Lugar no Mundo
 * Tema: eu, minha família, minha casa, meu caminho, minha escola,
 * minha sala. Primeira página do Grande Atlas da Terra.
 *
 * Ao final da unidade:
 *   ⭐ 590 XP · 🪙 300 moedas
 *   🏅 5 medalhas de explorador
 *   🎁 Item: 1ª PÁGINA do Grande Atlas restaurada
 */
export const unidade1: UnidadeGeografia = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Meu Lugar no Mundo",
  subtitulo: "Eu, minha família, minha casa e minha escola",
  descricao:
    "A primeira aventura de Brilha explorador: descobrir quem cuida de você, os cômodos da casa, o caminho até a escola e o seu lugar na sala.",
  corTema: "#22c55e",
  aulas: [aula01, aula02, aula03, aula04, aula05],
};
