import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade4: UnidadeGeoV1 = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Química da Matéria",
  subtitulo: "Setor 4 · Laboratório de Química",
  descricao:
    "Átomos, elementos, tabela periódica, ligações químicas e reações.",
  corTema: "#10b981",
  aulas: [aula01],
};
