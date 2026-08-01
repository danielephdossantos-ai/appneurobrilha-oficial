import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-poema-visual";
import { aula02 } from "./aula-02-texto-dramatico";
import { aula03 } from "./aula-03-representar-cena";
import { aula04 } from "./aula-04-clube-de-leitura";

/**
 * Unidade 9 — O Palco e o Poema
 * -------------------------------------------------------------
 * Campo artístico-literário: poema visual/concreto, marcadores do
 * texto dramático, representação de cena com entonação e o clube de
 * leitura, em que o explorador aprende a falar e escrever sobre o
 * que leu justificando a própria opinião. Fecha o curso do 4º ano.
 */
export const unidade9: UnidadePortugues = {
  slug: "unidade-9",
  numero: 9,
  titulo: "O Palco e o Poema",
  subtitulo: "Literatura para ler, encenar e recomendar",
  descricao:
    "A expedição sobe ao palco: poemas que viram desenho na página, cenas de teatro com rubricas e entonação, e um clube de leitura onde cada explorador conta do que trata o livro que leu e justifica a sua opinião com um trecho do texto.",
  corTema: "#a855f7",
  aulas: [aula01, aula02, aula03, aula04],
};
