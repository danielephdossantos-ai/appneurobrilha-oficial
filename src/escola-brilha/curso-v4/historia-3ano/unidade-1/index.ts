import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-o-que-e-historia";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "O Trabalho do Historiador",
  subtitulo: "Aurora abre a Biblioteca do Tempo",
  descricao:
    "Brilha recebe a Lupa do Historiador do Guardião da Memória. Aprende o que é História, quem a conta, o que são fontes históricas e como investigar o passado — montando o Kit do Pequeno Historiador.",
  corTema: "#b45309",
  aulas: [aula01],
};
