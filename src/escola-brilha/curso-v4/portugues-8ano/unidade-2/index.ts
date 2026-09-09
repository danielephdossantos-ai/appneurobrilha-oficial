import type { UnidadePortugues } from "../../types";
import { aula02 } from "./aula-02-artigo-opiniao";
import { aula03 } from "./aula-03-editorial";
import { aula04 } from "./aula-04-pontos-de-vista";

export const unidade2: UnidadePortugues = {
  slug: "lp8-u2",
  numero: 2,
  titulo: "Vozes do Debate (Artigo e Editorial)",
  subtitulo: "Análise de Opinião",
  descricao: "Explore como diferentes veículos de comunicação expressam seus pontos de vista.",
  corTema: "#fbbf24",
  aulas: [aula02, aula03, aula04],
};
