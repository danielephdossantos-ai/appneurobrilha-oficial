import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-revolucao-industrial";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "A Revolução Industrial",
  subtitulo: "A máquina reorganiza o mundo do trabalho",
  descricao:
    "Vapor, tear, fábrica. A Inglaterra industrial cria o proletariado, a burguesia industrial e o capitalismo moderno.",
  corTema: "#0891b2",
  aulas: [aula01],
};
