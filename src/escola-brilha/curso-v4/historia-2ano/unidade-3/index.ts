import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-historia-da-escola";

export const unidade3: UnidadeGeoV1 = {
  slug: "unidade-3",
  numero: 3,
  titulo: "A História da Minha Escola",
  subtitulo: "Museu da Escola",
  descricao:
    "Investigar a evolução do espaço escolar ao longo do tempo e inaugurar a terceira sala do museu: a Linha do Tempo da Escola.",
  corTema: "#b45309",
  aulas: [aula01],
};
