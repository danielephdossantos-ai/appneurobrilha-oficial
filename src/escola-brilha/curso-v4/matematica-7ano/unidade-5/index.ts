import type { Unidade } from "../../types";
import { aula01_angulos } from "./aula-01-angulos";
import { aula02_paralelasTransversal } from "./aula-02-paralelas-transversal";
import { aula03_triangulos } from "./aula-03-triangulos";
import { aula04_poligonos } from "./aula-04-poligonos";
import { aula05_simetriaTransformacoes } from "./aula-05-simetria-transformacoes";

export const unidade5: Unidade = {
  slug: "unidade-5-geometria",
  numero: 5,
  titulo: "Geometria",
  subtitulo: "Ângulos, triângulos e polígonos",
  descricao:
    "Medida de ângulos e pares notáveis, retas paralelas cortadas por transversal, triângulos (soma dos ângulos e condição de existência), polígonos e a fórmula (n − 2)·180°, simetria e transformações no plano.",
  corTema: "#6366f1",
  aulas: [
    aula01_angulos,
    aula02_paralelasTransversal,
    aula03_triangulos,
    aula04_poligonos,
    aula05_simetriaTransformacoes,
  ],
};
