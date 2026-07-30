import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-lista";
import { aula02 } from "./aula-02-bilhete";
import { aula03 } from "./aula-03-convite";
import { aula04 } from "./aula-04-cartaz";
import { aula05 } from "./aula-05-palavras-parecidas-e-opostas";

/**
 * Unidade 4 — Textos do Dia a Dia
 * Lista, bilhete, convite e cartaz: para que serve cada texto.
 */
export const unidade4: UnidadePortugues = {
  slug: "unidade-4-textos-do-dia-a-dia",
  numero: 5,
  titulo: "Textos do Dia a Dia",
  subtitulo: "Bilhete, lista, convite e cartaz",
  descricao:
    "Nem todo texto é história. A criança conhece os textos que aparecem na vida real — lista de compras, bilhete, convite de festa e cartaz — e descobre a finalidade de cada um.",
  corTema: "#ec4899",
  aulas: [aula01, aula02, aula03, aula04, aula05],
};
