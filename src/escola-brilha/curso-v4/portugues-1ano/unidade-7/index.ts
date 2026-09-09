import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-som-que-comeca";
import { aula02 } from "./aula-02-quebrando-a-palavra";
import { aula03 } from "./aula-03-juntando-os-sons";
import { aula04 } from "./aula-04-trocando-um-som";

/**
 * Unidade 1 — O Ouvido Mágico (Consciência Fonêmica) · abre o curso
 * Fase 2 do contrato de edição do 1º ano de Língua Portuguesa.
 * Estímulo é SOM, não escrita: som inicial → segmentar → sintetizar
 * → trocar fonema. Todos os blocos falam em voz alta (TTS lento).
 */
export const unidade7: UnidadePortugues = {
  slug: "unidade-7-ouvido-magico",
  numero: 1,
  titulo: "O Ouvido Mágico",
  subtitulo: "Escutar os sons das palavras",
  descricao:
    "A Coruja Ouvidão ensina a habilidade que mais ajuda a aprender a ler: escutar os sons dentro das palavras. A criança descobre o som inicial, quebra a palavra em sons, junta sons soltos até formar palavras e, por fim, troca um som e transforma a palavra em outra.",
  corTema: "#d946ef",
  aulas: [aula01, aula02, aula03, aula04],
};
