import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-higiene";

export const unidade3: UnidadeGeoV1 = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Cristal da Higiene",
  subtitulo: "Cuidando do meu corpo",
  descricao: "Aprender os hábitos de higiene que mantêm o corpo saudável.",
  corTema: "#a855f7",
  aulas: [aula01],
};
