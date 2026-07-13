import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-diario-de-campo";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Como a Ciência Descobre o Mundo",
  subtitulo: "Projeto: Diário de Campo Científico",
  descricao:
    "A equipe aprende como cientistas de verdade descobrem o mundo: observação sistemática, registro de dados, hipóteses testáveis e análise de resultados.",
  corTema: "#0f766e",
  aulas: [aula01],
};
