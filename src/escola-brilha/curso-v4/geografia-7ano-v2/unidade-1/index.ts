import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-formacao-territorial";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Formação Territorial do Brasil",
  subtitulo: "Tordesilhas, bandeirantes e fronteiras",
  descricao:
    "Como o Brasil ganhou esse formato de continente? Uma viagem pelo Tratado de Tordesilhas, expansão bandeirante e Tratado de Madri.",
  corTema: "#0891b2",
  aulas: [aula01],
};
