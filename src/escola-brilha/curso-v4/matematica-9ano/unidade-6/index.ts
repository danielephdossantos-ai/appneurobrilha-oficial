import type { Unidade } from "../../types";
import { aula01_circunferenciaAngulos } from "./aula-01-circunferencia-angulos";
import { aula02_comprimentoAreaCirculo } from "./aula-02-comprimento-area-circulo";
import { aula03_areasFigurasCompostas } from "./aula-03-areas-figuras-compostas";
import { aula04_volumes } from "./aula-04-volumes";
import { aula05_missaoCaixaDagua } from "./aula-05-missao-caixa-dagua";

export const unidade6: Unidade = {
  slug: "unidade-6-circulo-volumes",
  numero: 6,
  titulo: "Circunferência, Áreas e Volumes",
  subtitulo: "Do círculo perfeito aos sólidos geométricos",
  descricao:
    "Nesta unidade você domina circunferência e ângulos, comprimento e área do círculo, áreas de figuras compostas e volumes de prismas, cilindros, pirâmides e cones — fechando com uma missão real de engenharia: projetar uma caixa-d'água e uma praça.",
  corTema: "#06b6d4",
  aulas: [
    aula01_circunferenciaAngulos,
    aula02_comprimentoAreaCirculo,
    aula03_areasFigurasCompostas,
    aula04_volumes,
    aula05_missaoCaixaDagua,
  ],
};
