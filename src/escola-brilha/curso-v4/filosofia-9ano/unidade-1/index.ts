import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-frankfurt";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Escola de Frankfurt",
  subtitulo: "Indústria cultural e razão instrumental (EF09FI01)",
  descricao:
    "Adorno, Horkheimer e Benjamin denunciam o lado sombrio da modernidade: cultura de massa fabricada e razão que domina em vez de libertar.",
  corTema: "#dc2626",
  aulas: [aula01],
};
