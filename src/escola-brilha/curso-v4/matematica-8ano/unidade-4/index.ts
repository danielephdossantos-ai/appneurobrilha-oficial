import type { Unidade } from "../../types";
import { aula03_substituicao } from "./aula-03-substituicao";
import { aula04_adicao } from "./aula-04-adicao";
import { aula05_probSistemas } from "./aula-05-prob-sistemas";
import { aula06_missao } from "./aula-06-missao";
import { aulaEquacoesPlano, aulaEquacaoQuadratica, aulaSequencias } from "../aulas-bncc-complementares";

export const unidade4: Unidade = {
  slug: "unidade-4-equacoes-sistemas",
  numero: 4,
  titulo: "Equações e Sistemas 2×2",
  subtitulo: "Achar valores com uma ou duas incógnitas",
  descricao:
    "Brilha representa equações lineares no plano, resolve sistemas 2×2, investiga equações do tipo ax² = b e cria algoritmos para sequências.",
  corTema: "#0ea5e9",
  aulas: [aulaEquacoesPlano, aula03_substituicao, aula04_adicao, aula05_probSistemas, aulaEquacaoQuadratica, aulaSequencias, aula06_missao],
};
