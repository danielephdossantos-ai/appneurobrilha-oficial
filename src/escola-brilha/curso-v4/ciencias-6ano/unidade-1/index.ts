import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Caderno do Pesquisador",
  subtitulo: "Ciência, pesquisa e método científico",
  descricao:
    "Programa 1 da Academia: o método científico como ferramenta de investigação. Observação, hipóteses testáveis, variáveis controladas, coleta de dados, interpretação de gráficos e comunicação de evidências.",
  corTema: "#0ea5e9",
  aulas: [aula01],
};
