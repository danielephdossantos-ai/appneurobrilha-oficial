import type { Unidade } from "../../types";
import { aula01_somaComReagrupamento } from "./aula-01-soma-com-reagrupamento";
import { aula02_somaVariosNumeros } from "./aula-02-soma-varios-numeros";
import { aula03_subtracaoSimples } from "./aula-03-subtracao-simples";
import { aula04_subtracaoComTroca } from "./aula-04-subtracao-com-troca";
import { aula05_problemas } from "./aula-05-problemas";
import { aula06_missaoFinal } from "./aula-06-missao-final";

export const unidade2: Unidade = {
  slug: "unidade-2-somar-subtrair-grandes",
  numero: 2,
  titulo: "Somar e Subtrair Grandes Números",
  subtitulo: "Algoritmos com reagrupamento e troca até 999.999",
  descricao:
    "Brilha vira contador imperial: soma e subtrai números de 5 e 6 algarismos, com reagrupamento e trocas em cadeia (inclusive com zeros).",
  corTema: "#0e7490",
  aulas: [
    aula01_somaComReagrupamento,
    aula02_somaVariosNumeros,
    aula03_subtracaoSimples,
    aula04_subtracaoComTroca,
    aula05_problemas,
    aula06_missaoFinal,
  ],
};
