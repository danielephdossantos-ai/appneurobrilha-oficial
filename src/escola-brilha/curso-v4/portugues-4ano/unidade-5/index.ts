import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-planejar-antes-de-escrever";
import { aula02 } from "./aula-02-paragrafo-com-topico-frasal";
import { aula03 } from "./aula-03-coesao-sem-repetir";
import { aula04 } from "./aula-04-revisao-profissional";

/**
 * Unidade 5 — Diário de Bordo
 * -------------------------------------------------------------
 * A oficina do "A Redação dos Exploradores" fecha a jornada de
 * produção de texto: planejar antes de escrever, montar um bom
 * parágrafo com tópico frasal, costurar as ideias com coesão
 * (sem repetir e sem se perder) e revisar como um profissional
 * de verdade — até reescrever um trecho ruim.
 *
 * BNCC: EF35LP25, EF35LP26, EF04LP19, EF35LP07, EF35LP08, EF35LP09
 */
export const unidade5: UnidadePortugues = {
  slug: "unidade-5",
  numero: 5,
  titulo: "Diário de Bordo",
  subtitulo: "Planejar, escrever e revisar um texto de verdade",
  descricao:
    "O explorador vira escritor de verdade: aprende a planejar o texto antes de escrever, a montar parágrafos com tópico frasal, a costurar as ideias com pronomes, sinônimos e conectivos, e a revisar com um checklist profissional — reescrevendo até o texto ficar pronto para publicar.",
  corTema: "#e879f9",
  aulas: [aula01, aula02, aula03, aula04],
};
