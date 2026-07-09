import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-mapa-do-brasil-e-regioes";
import { aula02 } from "./aula-02-estados-e-df";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "O Mapa do Brasil e Suas Regiões",
  subtitulo: "Norte, Nordeste, Centro-Oeste, Sudeste e Sul — o país inteiro num mapa só",
  descricao:
    "Brilha abre o Globo das Descobertas com Aurora e explora as 5 grandes regiões do Brasil — cada uma com sua paisagem, seu povo e seu jeito próprio. A criança descobre que dividir em regiões ajuda a organizar e estudar um país gigante.",
  corTema: "#10b981",
  aulas: [aula01, aula02],
};
