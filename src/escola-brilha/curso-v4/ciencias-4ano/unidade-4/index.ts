import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-microrganismos";

export const unidade4: UnidadeGeoV1 = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Mundo Microscópico",
  subtitulo: "Projeto: micros que ajudam e micros que atrapalham",
  descricao:
    "Bactérias, fungos e prevenção. Ver o invisível e aprender como higiene, alimentação segura e vacinas protegem a saúde.",
  corTema: "#a21caf",
  aulas: [aula01],
};
