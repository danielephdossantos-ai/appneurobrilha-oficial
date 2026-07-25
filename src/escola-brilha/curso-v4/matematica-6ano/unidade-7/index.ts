import type { Unidade } from "../../types";
import { aula01_poligonos } from "./aula-01-poligonos";
import { aula02_perimetroArea } from "./aula-02-perimetro-area";
import { aula03_volumeSi } from "./aula-03-volume-si";
import { aula04_estatistica } from "./aula-04-estatistica";
import { aula05_missaoFinal } from "./aula-05-missao-final";

export const unidade7: Unidade = {
  slug: "unidade-7-geometria-medidas-estatistica",
  numero: 7,
  titulo: "Geometria, Medidas, Estatística — Missão Final",
  subtitulo: "Polígonos, perímetro, área, volume, SI, gráficos e projeto final",
  descricao:
    "Brilha fecha o 6º ano medindo o mundo: formas, contornos, superfícies, volume, unidades e gráficos.",
  corTema: "#7c3aed",
  aulas: [aula01_poligonos, aula02_perimetroArea, aula03_volumeSi, aula04_estatistica, aula05_missaoFinal],
};
