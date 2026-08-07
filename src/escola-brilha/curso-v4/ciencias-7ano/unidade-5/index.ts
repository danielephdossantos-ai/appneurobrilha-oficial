import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";
import { aula02 } from "./aula-02-equilibrio-termico";
import { aula03 } from "./aula-03-combustiveis-historia";
import { aula04 } from "./aula-04-automacao-trabalho";

export const unidade5: UnidadeGeoV1 = {
  slug: "unidade-5",
  numero: 5,
  titulo: "Matéria e Transformações",
  subtitulo: "Departamento 5 · Química Básica",
  descricao:
    "Átomos, moléculas, estados da matéria. Transformações físicas vs. químicas. Substâncias puras e misturas.",
  corTema: "#f59e0b",
  aulas: [aula01, aula02, aula03, aula04],
};
