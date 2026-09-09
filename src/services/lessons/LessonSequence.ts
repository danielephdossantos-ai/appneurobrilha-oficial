/**
 * LessonSequence — sequência pedagógica obrigatória de toda aula.
 *
 * Ordem fixa (13 passos):
 *   1. Objetivo
 *   2. Introdução
 *   3. Explicação
 *   4. Exemplo
 *   5. Exemplo cotidiano
 *   6. Prática guiada
 *   7. Prática independente
 *   8. Curiosidade
 *   9. Desafio
 *  10. Resumo
 *  11. Revisão
 *  12. Quiz
 *  13. Resultado
 *
 * Regras:
 *  - Todo conteúdo vem de `public.lesson_content` (via LessonService).
 *  - Nenhum texto é gerado, concatenado ou inferido a partir da habilidade BNCC.
 *  - Se a aula não existir, retorna null. A UI mostra "Aula ainda não cadastrada.".
 */

import { LessonService, type AtividadeItem, type QuizQuestao, type LessonContent } from "./LessonService";

export type LessonStepKind =
  | "objetivo"
  | "introducao"
  | "explicacao"
  | "exemplo"
  | "exemplo_cotidiano"
  | "pratica_guiada"
  | "pratica_independente"
  | "curiosidade"
  | "desafio"
  | "resumo"
  | "revisao"
  | "quiz"
  | "resultado";

export interface LessonStep {
  ordem: number;
  tipo: LessonStepKind;
  titulo: string;
  texto?: string;
  itens?: AtividadeItem[];
  desafio?: AtividadeItem;
  quiz?: QuizQuestao[];
}

export const LESSON_SEQUENCE: { tipo: LessonStepKind; titulo: string }[] = [
  { tipo: "objetivo", titulo: "Objetivo" },
  { tipo: "introducao", titulo: "Introdução" },
  { tipo: "explicacao", titulo: "Explicação" },
  { tipo: "exemplo", titulo: "Exemplo" },
  { tipo: "exemplo_cotidiano", titulo: "Exemplo cotidiano" },
  { tipo: "pratica_guiada", titulo: "Prática guiada" },
  { tipo: "pratica_independente", titulo: "Prática independente" },
  { tipo: "curiosidade", titulo: "Curiosidade" },
  { tipo: "desafio", titulo: "Desafio" },
  { tipo: "resumo", titulo: "Resumo" },
  { tipo: "revisao", titulo: "Revisão" },
  { tipo: "quiz", titulo: "Quiz" },
  { tipo: "resultado", titulo: "Resultado" },
];

export function composeLessonSequence(aula: LessonContent): LessonStep[] {
  return LESSON_SEQUENCE.map((s, i) => {
    const base: LessonStep = { ordem: i + 1, tipo: s.tipo, titulo: s.titulo };
    switch (s.tipo) {
      case "objetivo": return { ...base, texto: aula.objetivo };
      case "introducao": return { ...base, texto: aula.introducao };
      case "explicacao": return { ...base, texto: aula.explicacao };
      case "exemplo": return { ...base, texto: aula.exemplo1 };
      case "exemplo_cotidiano": return { ...base, texto: aula.exemplo2 || aula.contextualizacao };
      case "pratica_guiada": return { ...base, itens: aula.atividade_guiada ?? [] };
      case "pratica_independente": return { ...base, itens: aula.atividade_pratica ?? [] };
      case "curiosidade": return { ...base, texto: aula.curiosidade };
      case "desafio": return { ...base, desafio: aula.desafio };
      case "resumo": return { ...base, texto: aula.resumo };
      case "revisao": return { ...base, texto: aula.revisao };
      case "quiz": return { ...base, quiz: aula.quiz ?? [] };
      case "resultado": return base;
    }
  });
}

export const LessonSequenceService = {
  async getSequence(codigoBncc: string): Promise<LessonStep[] | null> {
    const aula = await LessonService.getLesson(codigoBncc);
    if (!aula) return null;
    return composeLessonSequence(aula);
  },
};
