import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-caso-som-parecido";
import { aula02 } from "./aula-02-letras-disfarcadas";
import { aula03 } from "./aula-03-batida-forte-acento";
import { aula04 } from "./aula-04-palavras-que-enganam";

/**
 * Unidade 7 — A Oficina da Escrita Certa
 * -------------------------------------------------------------
 * Fase 5 do contrato de nivelamento do 3º ano: ORTOGRAFIA
 * sistemática + palavras irregulares de alta frequência.
 *
 * 1) S/SS/C/Ç — o som /s/ decidido pela posição.
 * 2) LH/NH/CH, G/GU e R/RR — letras disfarçadas.
 * 3) Sílabas, sílaba tônica e acento (agudo/circunflexo).
 * 4) Palavras irregulares e pares que enganam (mas/mais, mal/mau).
 *
 * BNCC: EF03LP01, EF03LP02, EF03LP03, EF03LP04, EF03LP05, EF03LP06.
 */
export const unidade7: UnidadePortugues = {
  slug: "unidade-7",
  numero: 7,
  titulo: "A Oficina da Escrita Certa",
  subtitulo: "Ortografia, acento e as palavras que enganam",
  descricao:
    "O clube monta uma oficina para resolver os casos de escrita: por que o som /s/ muda de letra, quais duplas fazem um som só, onde fica a batida forte da palavra e como não cair nas armadilhas de MAS/MAIS e MAL/MAU.",
  corTema: "#38bdf8",
  aulas: [aula01, aula02, aula03, aula04],
};
