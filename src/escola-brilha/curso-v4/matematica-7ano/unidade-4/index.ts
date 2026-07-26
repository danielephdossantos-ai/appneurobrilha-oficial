import type { Unidade } from "../../types";
import { aula01_linguagemAlgebrica } from "./aula-01-linguagem-algebrica";
import { aula02_termosSemelhantes } from "./aula-02-termos-semelhantes";
import { aula03_equacoesBalanca } from "./aula-03-equacoes-balanca";
import { aula04_equacoesParentesesFracoes } from "./aula-04-equacoes-parenteses-fracoes";
import { aula05_problemasInequacoes } from "./aula-05-problemas-inequacoes";

export const unidade4: Unidade = {
  slug: "unidade-4-algebra",
  numero: 4,
  titulo: "Álgebra e Equações",
  subtitulo: "A letra que guarda o número",
  descricao:
    "Linguagem algébrica, valor numérico, termos semelhantes e distributiva, equações do 1º grau pelo princípio da balança, equações com parênteses e frações, problemas e inequações.",
  corTema: "#6366f1",
  aulas: [
    aula01_linguagemAlgebrica,
    aula02_termosSemelhantes,
    aula03_equacoesBalanca,
    aula04_equacoesParentesesFracoes,
    aula05_problemasInequacoes,
  ],
};
