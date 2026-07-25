import type { Unidade } from "../../types";
import { aula01_adicaoSimples } from "./aula-01-adicao-simples";
import { aula02_vaiUmUnidade } from "./aula-02-vai-um-na-unidade";
import { aula03_vaiUmDezena } from "./aula-03-vai-um-na-dezena";
import { aula04_subtracaoSimples } from "./aula-04-subtracao-simples";
import { aula05_subtracaoComTroca } from "./aula-05-subtracao-com-troca";
import { aula06_problemas } from "./aula-06-problemas-mais-menos";
import { aula07_missaoFinalU2 } from "./aula-07-missao-final-u2";

export const unidade2: Unidade = {
  slug: "unidade-2-adicao-subtracao",
  numero: 2,
  titulo: "Somar, Subtrair e Reagrupar",
  subtitulo: "Adição e subtração com reagrupamento até 1.000",
  descricao: "Brilha vira o Contador Oficial da Cidade: aprende a somar com 'vai 1', subtrair com 'empréstimo' e resolver problemas.",
  corTema: "#2563eb",
  aulas: [
    aula01_adicaoSimples,
    aula02_vaiUmUnidade,
    aula03_vaiUmDezena,
    aula04_subtracaoSimples,
    aula05_subtracaoComTroca,
    aula06_problemas,
    aula07_missaoFinalU2,
  ],
};
