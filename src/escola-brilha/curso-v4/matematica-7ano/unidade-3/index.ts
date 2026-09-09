import type { Unidade } from "../../types";
import { aula01_razaoProporcao } from "./aula-01-razao-proporcao";
import { aula02_porcentagem } from "./aula-02-porcentagem";
import { aula03_diretamente } from "./aula-03-diretamente-proporcionais";
import { aula04_inversamente } from "./aula-04-inversamente-proporcionais";
import { aula05_missaoProporcao } from "./aula-05-missao-proporcao";

export const unidade3: Unidade = {
  slug: "unidade-3-proporcionalidade",
  numero: 3,
  titulo: "Razão, Porcentagem e Proporção",
  subtitulo: "Comparar, aumentar, descontar e repartir",
  descricao:
    "Razão e proporção, porcentagem com fator multiplicativo, regra de três direta e inversa, divisão proporcional e juros simples — a matemática do dinheiro e das receitas.",
  corTema: "#f59e0b",
  aulas: [
    aula01_razaoProporcao,
    aula02_porcentagem,
    aula03_diretamente,
    aula04_inversamente,
    aula05_missaoProporcao,
  ],
};
