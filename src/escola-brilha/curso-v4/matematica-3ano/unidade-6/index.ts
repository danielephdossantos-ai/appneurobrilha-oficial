import type { Unidade } from "../../types";
import { aula01_figurasPlanas } from "./aula-01-figuras-planas";
import { aula02_solidos } from "./aula-02-solidos-geometricos";
import { aula03_ladosVertices } from "./aula-03-lados-vertices-angulos";
import { aula04_simetria } from "./aula-04-simetria";
import { aula05_localizacao } from "./aula-05-localizacao-espacial";
import { aula06_congruencia } from "./aula-06-congruencia-semelhanca";
import { aula07_missaoFinalU6 } from "./aula-07-missao-final";

export const unidade6: Unidade = {
  slug: "unidade-6-geometria",
  numero: 6,
  titulo: "Geometria e Espaço",
  subtitulo: "Figuras, sólidos, simetria e localização",
  descricao:
    "Brilha vira Arquiteto da Cidade: descobre figuras planas, sólidos, ângulos, simetria e como se localizar no espaço.",
  corTema: "#2563eb",
  aulas: [
    aula01_figurasPlanas,
    aula02_solidos,
    aula03_ladosVertices,
    aula04_simetria,
    aula05_localizacao,
    aula06_congruencia,
    aula07_missaoFinalU6,
  ],
};
