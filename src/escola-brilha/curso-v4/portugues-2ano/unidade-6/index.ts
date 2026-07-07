import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-detetive-do-sentido";
import { aula02 } from "./aula-02-tom-da-voz";
import { aula03 } from "./aula-03-ligando-os-pontos";
import { aula04 } from "./aula-04-meu-palpite-de-leitor";
import { aula05 } from "./aula-05-formatura-na-academia";

/**
 * Unidade 6 — A Academia dos Grandes Leitores
 * Fecho do curso 2º ano: inferência, tom, causa/efeito, opinião leitora.
 * BNCC integrada: EF02LP26, EF02LP27, EF02LP28, EF02LP01.
 *
 * Ao final da unidade o estudante recebe:
 *  ⭐ 850 XP · 🪙 600 moedas · 🏅 Medalha "Grande Leitor(a) da Biblioteca Encantada"
 *  🎁 Item desbloqueado: 🎓 Diploma da Academia
 */
export const unidade6: UnidadePortugues = {
  slug: "unidade-6",
  numero: 6,
  titulo: "A Academia dos Grandes Leitores",
  subtitulo: "Pistas, tom, causa/efeito e palpite de leitor",
  descricao:
    "Brilha entra na ala mais alta da Biblioteca Encantada: a Academia dos Grandes Leitores. Aqui ela aprende a descobrir o que o texto não diz, escutar o tom da voz da história, ligar causa e resultado e formar palpite de leitor com motivo. Ao final, formatura!",
  corTema: "#8b5cf6",
  aulas: [aula01, aula02, aula03, aula04, aula05],
};
