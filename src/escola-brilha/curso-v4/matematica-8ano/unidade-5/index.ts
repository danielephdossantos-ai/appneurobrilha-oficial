import type { Unidade } from "../../types";
import { aula01_aumentoDesconto } from "./aula-01-aumento-desconto";
import { aula02_lucroPrejuizo } from "./aula-02-lucro-prejuizo";
import { aula03_jurosSimples } from "./aula-03-juros-simples";
import { aula04_direta } from "./aula-04-direta";
import { aula05_inversa } from "./aula-05-inversa";
import { aula06_missao } from "./aula-06-missao";

export const unidade5: Unidade = {
  slug: "unidade-5-porcentagem-proporcionalidade",
  numero: 5,
  titulo: "Porcentagem, Juros e Proporcionalidade",
  subtitulo: "Álgebra do dinheiro e das grandezas",
  descricao:
    "Brilha usa a álgebra para resolver situações de aumento, desconto, lucro, juros simples e proporcionalidades diretas e inversas.",
  corTema: "#0ea5e9",
  aulas: [aula01_aumentoDesconto, aula02_lucroPrejuizo, aula03_jurosSimples, aula04_direta, aula05_inversa, aula06_missao],
};
