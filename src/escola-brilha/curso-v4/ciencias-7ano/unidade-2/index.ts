import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Diversidade Biológica",
  subtitulo: "Departamento 2 · Árvore da Vida",
  descricao:
    "Bactérias, protistas, fungos, plantas e animais. Classificação moderna baseada em DNA e ancestralidade. Micro e macro em uma só árvore.",
  corTema: "#10b981",
  aulas: [aula01],
};
