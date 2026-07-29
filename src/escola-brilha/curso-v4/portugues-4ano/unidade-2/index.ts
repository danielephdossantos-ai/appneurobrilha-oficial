import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-silaba-tonica-acentuacao";
import { aula2 } from "./aula-02-por-que-mas-mais";
import { aula3 } from "./aula-03-familia-de-palavras";
import { aula04 } from "./aula-04-encontros-dificeis";

/**
 * Unidade 2 — Oficina da Palavra
 * -------------------------------------------------------------
 * Segunda unidade do curso de Português do 4º ano. A expedição entra
 * na oficina onde se lapidam as palavras: descobrir a sílaba tônica e
 * quando ela pede acento, destrinchar os quatro porquês e o par
 * mas/mais, reconhecer famílias de palavras que compartilham a mesma
 * grafia e, por fim, vencer os encontros de letras mais traiçoeiros da
 * língua — X/CH, G/J, S/Z e SS/Ç.
 */
export const unidade2: UnidadePortugues = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Oficina da Palavra",
  subtitulo: "Ortografia e acentuação para escrever sem tropeços",
  descricao:
    "Nesta unidade, o explorador lapida sua escrita na Oficina da Palavra: aprende a encontrar a sílaba tônica e saber quando ela pede acento, a diferenciar por que/porque/por quê/porquê e mas/mais, a reconhecer famílias de palavras que ajudam a memorizar a grafia certa e, por fim, a vencer os encontros de letras mais traiçoeiros da língua portuguesa — X/CH, G/J, S/Z e SS/Ç.",
  corTema: "#a855f7",
  aulas: [aula1, aula2, aula3, aula04],
};
