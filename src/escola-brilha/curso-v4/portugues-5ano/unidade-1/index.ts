import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-oficina-das-palavras";

/**
 * Unidade 1 — A Oficina das Palavras
 * Sílaba tônica, oxítonas, paroxítonas, proparoxítonas e ortografia.
 */
export const unidade1: UnidadePortugues = {
  slug: "unidade-1",
  numero: 1,
  titulo: "A Oficina das Palavras",
  subtitulo: "Onde o som vira acento e o acento vira sentido",
  descricao:
    "O escriba aprende a ouvir a sílaba tônica, classificar oxítonas, paroxítonas e proparoxítonas e aplicar as regras de acentuação com segurança.",
  corTema: "#f59e0b",
  aulas: [aula1],
};
