import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-vida-morte";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Vida, Morte e o Depois",
  subtitulo: "Doutrinas religiosas sobre a morte (EF09ER02)",
  descricao:
    "Como as tradições religiosas respondem à pergunta mais antiga: o que acontece depois da morte? Ressurreição, reencarnação, ancestralidade, memória.",
  corTema: "#7c3aed",
  aulas: [aula01],
};
