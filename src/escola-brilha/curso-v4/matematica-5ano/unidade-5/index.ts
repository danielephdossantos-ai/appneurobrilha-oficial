import type { Unidade } from "../../types";
import { aula01_equivalentes } from "./aula-01-fracoes-equivalentes";
import { aula02_compararFracoes } from "./aula-02-comparar-fracoes";
import { aula03_somaMesmoDenom } from "./aula-03-soma-mesmo-denom";
import { aula04_somaDiferenteDenom } from "./aula-04-soma-diferente-denom";
import { aula05_decimaisMilesimos } from "./aula-05-decimais-milesimos";
import { aula06_operarDecimais } from "./aula-06-operar-decimais";
import { aula07_porcentagem } from "./aula-07-porcentagem";
import { aula08_missaoFinal } from "./aula-08-missao-final";

export const unidade5: Unidade = {
  slug: "unidade-5-fracoes-decimais",
  numero: 5,
  titulo: "Frações, Decimais e Porcentagem",
  subtitulo: "Partir, comparar, somar e ver o mundo em partes",
  descricao:
    "Brilha reparte com precisão: frações equivalentes, comparação, soma e subtração; decimais até milésimos; porcentagens do dia a dia (10%, 25%, 50%).",
  corTema: "#0e7490",
  aulas: [
    aula01_equivalentes,
    aula02_compararFracoes,
    aula03_somaMesmoDenom,
    aula04_somaDiferenteDenom,
    aula05_decimaisMilesimos,
    aula06_operarDecimais,
    aula07_porcentagem,
    aula08_missaoFinal,
  ],
};
