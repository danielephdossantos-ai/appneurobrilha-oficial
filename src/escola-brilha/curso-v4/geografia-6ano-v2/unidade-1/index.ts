import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-terra-espaco";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "A Terra no Espaço",
  subtitulo: "Rotação, Translação e Inclinação",
  descricao:
    "Brilha e Aurora investigam os três movimentos da Terra e por que existem dia, noite e estações do ano.",
  corTema: "#0ea5e9",
  aulas: [aula01],
};
