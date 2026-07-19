import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-tradicao-escrita";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "A Palavra que Fica no Papel",
  subtitulo: "A tradição escrita como memória (EF06ER01)",
  descricao:
    "Por que quase toda tradição religiosa produziu livros? Torá, Bíblia e Alcorão como guardiões da memória.",
  corTema: "#c9a84c",
  aulas: [aula01],
};
