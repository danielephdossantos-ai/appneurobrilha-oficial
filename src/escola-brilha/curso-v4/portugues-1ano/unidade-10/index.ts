import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-palavras-que-piscam";
import { aula02 } from "./aula-02-a-teimosa-dentro-da-frase";
import { aula03 } from "./aula-03-eu-leio-o-texto-inteiro";

/**
 * Unidade 10 — Palavras Teimosas (Fase 9)
 * Reconhecimento lexical direto das palavras de alta frequência
 * que não se resolvem por decodificação (é, um, uma, as, os, com,
 * muito, hoje, aqui, não, para, ele, ela, do, da).
 *
 * BNCC coberta: EF01LP02, EF01LP04, EF01LP12, EF01LP16.
 */
export const unidade10: UnidadePortugues = {
  slug: "unidade-10-palavras-teimosas",
  numero: 10,
  titulo: "Palavras Frequentes",
  subtitulo: "As palavrinhas que a gente lê de olho",
  descricao:
    "Algumas palavras aparecem muitas vezes nos textos. A criança relaciona escrita, sons e sentido, pratica o reconhecimento automático e lê textos com precisão e compreensão.",
  corTema: "#f59e0b",
  aulas: [aula01, aula02, aula03],
};
