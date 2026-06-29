/**
 * LessonFlow — sequência obrigatória de 13 passos para toda aula.
 *
 * 1  Objetivo
 * 2  Motivação
 * 3  Conhecimento prévio
 * 4  Explicação
 * 5  Exemplo
 * 6  Exemplo cotidiano
 * 7  Demonstração
 * 8  Atividade guiada
 * 9  Exercício independente
 * 10 Desafio
 * 11 Revisão
 * 12 Quiz
 * 13 Resultado
 *
 * Regras:
 *  - Só ORGANIZA. Não cria textos, não gera explicações.
 *  - Toda informação vem do banco via LessonService.
 *  - Não altera nenhuma interface existente.
 */

import {
  LessonService,
  type AtividadeItem,
  type QuizQuestao,
  type LessonContent,
} from "./LessonService";
import type { PassoAPasso } from "@/modules/pedagogical-repository/types";

export type LessonFlowKind =
  | "objetivo"
  | "motivacao"
  | "conhecimento_previo"
  | "explicacao"
  | "exemplo"
  | "exemplo_cotidiano"
  | "demonstracao"
  | "atividade_guiada"
  | "exercicio_independente"
  | "desafio"
  | "revisao"
  | "quiz"
  | "resultado";

export interface LessonFlowStep {
  ordem: number;
  tipo: LessonFlowKind;
  titulo: string;
  texto?: string;
  itens?: AtividadeItem[];
  passos?: PassoAPasso[];
  desafio?: AtividadeItem;
  quiz?: QuizQuestao[];
}

export const LESSON_FLOW: { tipo: LessonFlowKind; titulo: string }[] = [
  { tipo: "objetivo",               titulo: "Objetivo" },
  { tipo: "motivacao",              titulo: "Motivação" },
  { tipo: "conhecimento_previo",    titulo: "Conhecimento prévio" },
  { tipo: "explicacao",             titulo: "Explicação" },
  { tipo: "exemplo",                titulo: "Exemplo" },
  { tipo: "exemplo_cotidiano",      titulo: "Exemplo cotidiano" },
  { tipo: "demonstracao",           titulo: "Demonstração" },
  { tipo: "atividade_guiada",       titulo: "Atividade guiada" },
  { tipo: "exercicio_independente", titulo: "Exercício independente" },
  { tipo: "desafio",                titulo: "Desafio" },
  { tipo: "revisao",                titulo: "Revisão" },
  { tipo: "quiz",                   titulo: "Quiz" },
  { tipo: "resultado",              titulo: "Resultado" },
];

export function composeLessonFlow(aula: LessonContent): LessonFlowStep[] {
  return LESSON_FLOW.map((s, i) => {
    const base: LessonFlowStep = { ordem: i + 1, tipo: s.tipo, titulo: s.titulo };
    switch (s.tipo) {
      case "objetivo":               return { ...base, texto: aula.objetivo };
      case "motivacao":              return { ...base, texto: aula.contextualizacao };
      case "conhecimento_previo":    return { ...base, texto: aula.introducao };
      case "explicacao":             return { ...base, texto: aula.explicacao };
      case "exemplo":                return { ...base, texto: aula.exemplo1 };
      case "exemplo_cotidiano":      return { ...base, texto: aula.exemplo2 };
      case "demonstracao":           return { ...base, passos: aula.passo_a_passo ?? [] };
      case "atividade_guiada":       return { ...base, itens: aula.atividade_guiada ?? [] };
      case "exercicio_independente": return { ...base, itens: aula.atividade_pratica ?? [] };
      case "desafio":                return { ...base, desafio: aula.desafio };
      case "revisao":                return { ...base, texto: aula.revisao || aula.resumo };
      case "quiz":                   return { ...base, quiz: aula.quiz ?? [] };
      case "resultado":              return base;
    }
  });
}

export const LessonFlow = {
  steps: LESSON_FLOW,

  async load(codigoBncc: string): Promise<LessonFlowStep[] | null> {
    const aula = await LessonService.getLesson(codigoBncc);
    if (!aula) return null;
    return composeLessonFlow(aula);
  },
};
