import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Fábrica Microscópica",
  subtitulo: "Célula e a unidade da vida",
  descricao:
    "Programa 2 da Academia: a célula como unidade estrutural e funcional dos seres vivos. Microscopia, plano celular, comparação entre células vegetal e animal.",
  corTema: "#10b981",
  aulas: [aula01],
};
