import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-matriz-energetica";

export const unidade4: UnidadeGeoV1 = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Matriz Energética do Brasil",
  subtitulo: "De onde vem a energia da tomada?",
  descricao:
    "Fontes renováveis (água, sol, vento) e não renováveis (petróleo, carvão) — e por que o Brasil deve investir em energia limpa.",
  corTema: "#eab308",
  aulas: [aula01],
};
