import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-matriz-energetica";
import { aula02 } from "./aula-02-impactos-energia";

export const unidade4: UnidadeGeoV1 = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Matriz Energética do Brasil",
  subtitulo: "Fontes, impactos e escolhas sustentáveis",
  descricao:
    "Fontes renováveis e fósseis, os impactos ambientais de cada uma e por que o futuro do planeta depende da energia limpa.",
  corTema: "#eab308",
  aulas: [aula01, aula02],
};
