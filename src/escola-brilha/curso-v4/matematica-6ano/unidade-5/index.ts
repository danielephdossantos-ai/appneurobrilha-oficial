import type { Unidade } from "../../types";
import { aula01_lerDecimais } from "./aula-01-ler-decimais";
import { aula02_operarDecimais } from "./aula-02-operar-decimais";
import { aula03_fracaoDecimal } from "./aula-03-fracao-decimal";
import { aula04_porcentagem } from "./aula-04-porcentagem";
import { aula05_missao } from "./aula-05-missao";

export const unidade5: Unidade = {
  slug: "unidade-5-decimais-porcentagem",
  numero: 5,
  titulo: "Decimais e Porcentagem",
  subtitulo: "Ler, comparar, operar, converter e usar %",
  descricao:
    "Brilha domina o mundo dos decimais e conecta com frações e porcentagem, chaves para dinheiro, descontos e medidas.",
  corTema: "#7c3aed",
  aulas: [aula01_lerDecimais, aula02_operarDecimais, aula03_fracaoDecimal, aula04_porcentagem, aula05_missao],
};
