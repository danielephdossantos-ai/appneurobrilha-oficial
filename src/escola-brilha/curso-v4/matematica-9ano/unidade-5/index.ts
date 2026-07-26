import type { Unidade } from "../../types";
import { aula01_teoremaPitagoras } from "./aula-01-teorema-pitagoras";
import { aula02_relacoesMetricas } from "./aula-02-relacoes-metricas";
import { aula03_razoesTrigonometricas } from "./aula-03-razoes-trigonometricas";
import { aula04_angulosNotaveis } from "./aula-04-angulos-notaveis";
import { aula05_missaoEngenheiro } from "./aula-05-missao-engenheiro";

export const unidade5: Unidade = {
  slug: "unidade-5-pitagoras-trigonometria",
  numero: 5,
  titulo: "Pitágoras e a Trigonometria",
  subtitulo: "Do triângulo retângulo às ferramentas do engenheiro",
  descricao:
    "Nesta unidade você domina o Teorema de Pitágoras, as relações métricas no triângulo retângulo, as razões trigonométricas (seno, cosseno, tangente), os ângulos notáveis (30°, 45°, 60°) e fecha tudo numa missão prática de engenharia.",
  corTema: "#ef4444",
  aulas: [
    aula01_teoremaPitagoras,
    aula02_relacoesMetricas,
    aula03_razoesTrigonometricas,
    aula04_angulosNotaveis,
    aula05_missaoEngenheiro,
  ],
};
