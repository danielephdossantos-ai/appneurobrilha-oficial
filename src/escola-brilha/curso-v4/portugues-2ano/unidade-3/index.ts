import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-construtor-palavras";
import { aula02 } from "./aula-02-trem-alfabeto";
import { aula03 } from "./aula-03-palavras-parecidas";
import { aula04 } from "./aula-04-caca-erros";
import { aula05 } from "./aula-05-grande-maquina";

/**
 * Unidade 3 — A Oficina das Palavras
 * Tema: Descobrindo como as palavras são organizadas, escritas e
 * utilizadas para comunicar ideias.
 *
 * BNCC integrada: EF02LP06, EF02LP07, EF02LP08, EF02LP14, EF02LP15.
 *
 * Ao final da unidade o estudante recebe:
 *  ⭐ 600 XP · 🪙 400 moedas · 🏅 Medalha "Construtor das Palavras"
 *  🎁 Item desbloqueado: 📖 Dicionário Ilustrado da Biblioteca
 */
export const unidade3: UnidadePortugues = {
  slug: "unidade-3",
  numero: 3,
  titulo: "A Oficina das Palavras",
  subtitulo: "Sílabas, alfabeto e escrita",
  descricao:
    "Brilha entra numa sala cheia de letras espalhadas. As palavras se desmontaram e ela precisa remontar todas usando sílabas, ordem alfabética, palavras amigas/opostas e revisão da escrita.",
  corTema: "#8b5cf6",
  aulas: [aula01, aula02, aula03, aula04, aula05],
};
