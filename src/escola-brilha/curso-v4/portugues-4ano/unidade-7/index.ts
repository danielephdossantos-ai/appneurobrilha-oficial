import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-sufixos-prefixos";
import { aula02 } from "./aula-02-adjetivos-adverbios";
import { aula03 } from "./aula-03-discurso-direto-indireto";
import { aula04 } from "./aula-04-ortografia-acento-ditongo";

/**
 * Unidade 7 — Oficina da Língua em Uso
 * -------------------------------------------------------------
 * Fase 5 do plano de edição do 4º ano: morfologia e ortografia
 * trabalhadas dentro de textos reais, não em listas soltas.
 * Cobre prefixos e sufixos, adjetivos e advérbios, discurso direto
 * e indireto, e as regras de acentuação de ditongos e hiatos.
 */
export const unidade7: UnidadePortugues = {
  slug: "unidade-7",
  numero: 7,
  titulo: "Oficina da Língua em Uso",
  subtitulo: "Gramática e ortografia dentro do texto de verdade",
  descricao:
    "Nesta oficina o explorador desmonta e monta palavras com prefixos e sufixos, usa a lupa dos detalhes para enxergar adjetivos e advérbios, aprende a transformar fala em discurso direto e indireto e domina a acentuação de ditongos e hiatos — sempre dentro de textos reais que ele lê, escreve e revisa.",
  corTema: "#f59e0b",
  aulas: [aula01, aula02, aula03, aula04],
};
