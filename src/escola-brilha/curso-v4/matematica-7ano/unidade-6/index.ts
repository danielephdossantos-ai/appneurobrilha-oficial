import type { Unidade } from "../../types";
import { aula01_perimetroArea } from "./aula-01-perimetro-area";
import { aula02_circunferenciaPi } from "./aula-02-circunferencia-pi";
import { aula03_areaCirculo } from "./aula-03-area-circulo";
import { aula04_volumeCapacidade } from "./aula-04-volume-capacidade";
import { aula05_missaoMedidas } from "./aula-05-missao-medidas";

export const unidade6: Unidade = {
  slug: "unidade-6-grandezas-medidas",
  numero: 6,
  titulo: "Grandezas e Medidas",
  subtitulo: "Perímetro, área, círculo e volume",
  descricao:
    "Perímetro e área de figuras planas e compostas, o número π, comprimento e área do círculo, volume de blocos retangulares e a relação entre metro cúbico e litro.",
  corTema: "#6366f1",
  aulas: [
    aula01_perimetroArea,
    aula02_circunferenciaPi,
    aula03_areaCirculo,
    aula04_volumeCapacidade,
    aula05_missaoMedidas,
  ],
};
