import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-misturas-transformacoes";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Laboratório de Misturas",
  subtitulo: "Projeto: separar, classificar e transformar materiais",
  descricao:
    "A equipe entra no laboratório: mistura, filtra, separa com ímã, evapora — e descobre a diferença entre misturar e transformar.",
  corTema: "#0891b2",
  aulas: [aula01],
};
