import type { Unidade } from "../../types";
import { aula01_multiplos } from "./aula-01-multiplos";
import { aula02_divisores } from "./aula-02-divisores";
import { aula03_primos } from "./aula-03-primos";
import { aula04_mmcMdc } from "./aula-04-mmc-mdc";
import { aula05_missao } from "./aula-05-missao";

export const unidade3: Unidade = {
  slug: "unidade-3-multiplos-divisores-primos",
  numero: 3,
  titulo: "Múltiplos, Divisores e Primos",
  subtitulo: "Divisibilidade, primos, fatoração, MMC e MDC",
  descricao:
    "Brilha investiga a estrutura escondida dos números: quem cabe em quem, quem só se divide por 1 e por si, e como isso resolve problemas reais.",
  corTema: "#7c3aed",
  aulas: [aula01_multiplos, aula02_divisores, aula03_primos, aula04_mmcMdc, aula05_missao],
};
