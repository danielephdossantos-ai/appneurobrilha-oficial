import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-maquina-do-tempo-da-paisagem";
import { aula02 } from "./aula-02-quem-mudou-a-paisagem";
import { aula03 } from "./aula-03-protetor-da-natureza";
import { aula04 } from "./aula-04-guardiao-das-paisagens";

/**
 * Geografia 2º Ano — Unidade 5
 * "As Paisagens se Transformam" (BNCC: EF02GE05)
 *
 * Máquina do Tempo (antes × depois) + Detetive das mudanças
 * (natureza × pessoas) + Protetor da natureza (preservar) +
 * Guardião das Paisagens (fechamento com Atlas). Todas as aulas
 * usam exclusivamente os blocos travados do PlayerPortuguesV4.
 */
export const unidade5: UnidadePortugues = {
  slug: "unidade-5",
  numero: 5,
  titulo: "As Paisagens se Transformam",
  subtitulo: "Máquina do tempo, natureza, pessoas e preservação",
  descricao:
    "Brilha vira Viajante do Tempo, Detetive das Mudanças e Protetor(a) da Natureza. Descobre que a paisagem muda pela natureza e pelas pessoas — e que a gente pode transformar cuidando.",
  corTema: "#10B981",
  aulas: [aula01, aula02, aula03, aula04],
};
