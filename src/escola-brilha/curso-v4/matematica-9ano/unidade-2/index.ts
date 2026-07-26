import type { Unidade } from "../../types";
import { aula01_formaGeral } from "./aula-01-forma-geral";
import { aula02_incompletas } from "./aula-02-incompletas";
import { aula03_bhaskara } from "./aula-03-bhaskara";
import { aula04_discriminante } from "./aula-04-discriminante";
import { aula05_problemasMissao } from "./aula-05-problemas-missao";

export const unidade2: Unidade = {
  slug: "unidade-2-equacao-2grau",
  numero: 2,
  titulo: "A Equação do 2º Grau",
  subtitulo: "Da forma geral a Bhaskara, e resolvendo problemas reais",
  descricao:
    "Nesta unidade você vai dominar a equação do 2º grau: reconhecer sua forma geral, resolver casos incompletos, aplicar a fórmula de Bhaskara, entender o discriminante e usar tudo isso para resolver problemas reais do dia a dia.",
  corTema: "#0ea5e9",
  aulas: [aula01_formaGeral, aula02_incompletas, aula03_bhaskara, aula04_discriminante, aula05_problemasMissao],
};
