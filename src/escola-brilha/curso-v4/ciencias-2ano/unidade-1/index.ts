import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-metodo-cientista";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "O Método do Cientista",
  subtitulo: "Observar, perguntar, testar, registrar",
  descricao:
    "Recuperar o 1º cristal do Laboratório Escola Brilha: o Cristal da Observação. A criança aprende os 4 passos do método científico.",
  corTema: "#a855f7",
  aulas: [aula01],
};
