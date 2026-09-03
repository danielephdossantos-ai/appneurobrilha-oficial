import type { UnidadePortugues } from "../../types";
import { aula01, aula02, aula03, aula04, aula05 } from "./aulas";

export const unidade10: UnidadePortugues = {
  slug: "unidade-10", numero: 10,
  titulo: "Linguagem em Ação",
  subtitulo: "Pontuar, orientar, informar e interpretar imagens",
  descricao: "Missões práticas de pontuação, leitura de documentos cotidianos, tutoriais, jornal falado e quadrinhos.",
  corTema: "#0f766e",
  aulas: [aula01, aula02, aula03, aula04, aula05],
};
