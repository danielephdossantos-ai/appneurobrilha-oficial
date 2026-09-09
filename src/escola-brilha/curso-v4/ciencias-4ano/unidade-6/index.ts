import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-estacoes-ano";

export const unidade6: UnidadeGeoV1 = {
  slug: "unidade-6",
  numero: 6,
  titulo: "Calendário e Estações",
  subtitulo: "Projeto: por que o ano tem 4 estações",
  descricao:
    "Translação da Terra, inclinação do eixo, verão e inverno. A ciência astronômica por trás do calendário.",
  corTema: "#f97316",
  aulas: [aula01],
};
