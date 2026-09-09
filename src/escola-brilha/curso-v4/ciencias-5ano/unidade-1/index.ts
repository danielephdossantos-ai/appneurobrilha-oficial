import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Laboratório do Cientista",
  subtitulo: "Método científico avançado com gráficos e evidências",
  descricao:
    "A equipe volta ao laboratório e aprofunda o método: observação, hipóteses testáveis, coleta de dados, gráficos e comunicação científica.",
  corTema: "#0f766e",
  aulas: [aula01],
};
