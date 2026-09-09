import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-historia-do-bairro";

export const unidade4: UnidadeGeoV1 = {
  slug: "unidade-4",
  numero: 4,
  titulo: "A História da Comunidade",
  subtitulo: "Memórias do Bairro",
  descricao:
    "Investigar como o bairro mudou ao longo do tempo e inaugurar a quarta sala do museu: as Memórias do Bairro.",
  corTema: "#b45309",
  aulas: [aula01],
};
