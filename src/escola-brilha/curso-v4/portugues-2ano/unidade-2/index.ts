import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-bilhete-misterioso";
import { aula02 } from "./aula-02-convites-festa";
import { aula03 } from "./aula-03-listas-organizam";
import { aula04 } from "./aula-04-cartazes-avisos";
import { aula05 } from "./aula-05-missao-final-exploradores";

/**
 * Unidade 2 — Exploradores dos Textos
 * Tema: Descobrindo que existem diferentes tipos de textos e que
 * cada um tem uma função no dia a dia.
 *
 * BNCC integrada: EF02LP09, EF02LP10, EF02LP11, EF02LP12, EF02LP13.
 *
 * Ao concluir esta unidade o estudante deverá ser capaz de:
 *  - reconhecer diferentes gêneros textuais;
 *  - identificar a finalidade de cada texto;
 *  - localizar informações importantes;
 *  - compreender textos do cotidiano;
 *  - produzir pequenos textos com apoio.
 *
 * Ao final da unidade o estudante recebe:
 *  ⭐ 550 XP · 🪙 350 moedas · 🏅 Medalha "Explorador dos Textos"
 *  🎁 Item desbloqueado: 📚 Pasta dos Gêneros Textuais
 */
export const unidade2: UnidadePortugues = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Exploradores dos Textos",
  subtitulo: "Cada texto tem sua função",
  descricao:
    "Brilha entra na Sala dos Exploradores dos Textos e descobre que nem todo texto é história. Bilhete, convite, lista, cartaz — cada gênero tem um jeito próprio e uma finalidade no dia a dia.",
  corTema: "#3b82f6",
  aulas: [aula01, aula02, aula03, aula04, aula05],
};
