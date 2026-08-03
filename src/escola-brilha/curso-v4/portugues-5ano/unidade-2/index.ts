import type { UnidadePortugues } from "../../types";
import { aula1 } from "./aula-01-silaba-tonica-e-acento";
import { aula2 } from "./aula-02-regras-de-acentuacao";
import { aula3 } from "./aula-03-ortografia-de-uso";
import { aula4 } from "./aula-04-prefixos-e-sufixos";

/**
 * Unidade 2 — A Oficina das Palavras
 * -------------------------------------------------------------
 * Da sílaba tônica às regras de acentuação, da ortografia de uso à
 * formação de palavras: aqui o aluno para de escrever "no chute" e
 * passa a escrever sabendo por quê.
 */
export const unidade2: UnidadePortugues = {
  slug: "unidade-2",
  numero: 2,
  titulo: "A Oficina das Palavras",
  subtitulo: "Quem domina a regra escreve sem medo",
  descricao:
    "Nesta unidade o aluno entra na oficina: descobre a sílaba tônica, aprende quando o acento é obrigatório, enfrenta as palavras que só a memória e o contexto resolvem (s/ss, ç/c, x/ch, g/j) e termina montando e desmontando palavras com prefixos e sufixos.",
  corTema: "#f59e0b",
  aulas: [aula1, aula2, aula3, aula4],
};
