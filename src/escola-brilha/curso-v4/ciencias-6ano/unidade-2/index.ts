import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";
import { aula02 } from "./aula-02-comando-central";
import { aula03 } from "./aula-03-corpo-em-acao";
import { aula04 } from "./aula-04-substancias-e-cerebro";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Fábrica Microscópica",
  subtitulo: "Célula e a unidade da vida",
  descricao:
    "Programa 2 da Academia: a célula como unidade estrutural e funcional dos seres vivos. Microscopia, plano celular, comparação entre células vegetal e animal.",
  corTema: "#10b981",
  aulas: [aula01, aula02, aula03, aula04],
};
