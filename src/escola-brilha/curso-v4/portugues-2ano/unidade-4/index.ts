import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-procurando-pistas";
import { aula02 } from "./aula-02-ideia-principal";
import { aula03 } from "./aula-03-perfil-personagens";
import { aula04 } from "./aula-04-mistero-entrelinhas";
import { aula05 } from "./aula-05-grande-caso";

/**
 * Unidade 4 — Detetives da Leitura
 * Compreensão, inferência, ideia principal, personagens e entrelinhas.
 * BNCC integrada: EF02LP16, EF02LP17, EF02LP18, EF02LP19, EF02LP20.
 *
 * Ao final da unidade o estudante recebe:
 *  ⭐ 700 XP · 🪙 450 moedas · 🏅 Medalha "Detetive da Biblioteca Encantada"
 *  🎁 Item desbloqueado: 🔎 Lupa Mágica da Leitura
 */
export const unidade4: UnidadePortugues = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Detetives da Leitura",
  subtitulo: "Pistas, ideia principal e entrelinhas",
  descricao:
    "Alguns livros da Biblioteca continuam trancados por um cadeado mágico. Aurora entrega a LUPA MÁGICA. Brilha vira detetive: acha pistas, descobre a ideia principal, investiga personagens e lê nas entrelinhas pra abrir o último livro.",
  corTema: "#0ea5e9",
  aulas: [aula01, aula02, aula03, aula04, aula05],
};
