import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Organização da Vida",
  subtitulo: "Departamento 1 · Atlas da Vida",
  descricao:
    "Célula animal e vegetal, tecidos, órgãos, sistemas e níveis de organização biológica. Microscopia real: mitose e cloroplastos em movimento.",
  corTema: "#0ea5e9",
  aulas: [aula01],
};
