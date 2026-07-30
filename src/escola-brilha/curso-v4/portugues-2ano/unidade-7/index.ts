import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-batida-forte";
import { aula02 } from "./aula-02-eco-que-rima";
import { aula03 } from "./aula-03-maquina-trocar-sons";
import { aula04 } from "./aula-04-palavras-teimosas";

/**
 * Unidade 7 — A Oficina dos Sons (Fase 5 do contrato do 2º ano)
 * Consciência fonológica avançada + ortografia-alvo do ano:
 * sílaba tônica e M antes de P/B · rimas e R/RR · manipulação de
 * fonemas e S/SS/Ç · palavras teimosas e LH/NH/CH + AM/ÃO.
 */
export const unidade7: UnidadePortugues = {
  slug: "unidade-7",
  numero: 7,
  titulo: "A Oficina dos Sons",
  subtitulo: "Batida forte, rimas, troca de sons e palavras teimosas",
  descricao:
    "No porão da Biblioteca Encantada existe uma oficina onde as palavras são desmontadas em sons. Aqui Brilha descobre a batida forte de cada palavra, o corredor que devolve rimas, a máquina que troca um som e muda tudo, e a prateleira das palavras teimosas — aquelas que se leem num relance.",
  corTema: "#6366f1",
  aulas: [aula01, aula02, aula03, aula04],
};
