/**
 * LessonSequence — sequência pedagógica obrigatória de toda aula.
 *
 * Ordem fixa:
 *   1. Introdução
 *   2. Explicação
 *   3. Exemplo
 *   4. Exemplo do cotidiano
 *   5. Atividade guiada
 *   6. Prática
 *   7. Desafio
 *   8. Resumo
 *   9. Revisão
 *  10. Quiz
 *  11. Resultado
 *
 * Regras:
 *  - Todo conteúdo vem de `public.lesson_content` (via LessonService).
 *  - Nenhum texto é gerado, concatenado ou inferido a partir da habilidade BNCC.
 *  - Se a aula não existir, retorna null. A UI mostra "Aula ainda não cadastrada.".
 */

import { LessonService, type AtividadeItem, type QuizQuestao, type LessonContent } from "./LessonService";

export type LessonStepKind =
  | "introducao"
  | "explicacao"
  | "exemplo"
  | "exemplo_cotidiano"
  | "atividade_guiada"
  | "pratica"
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
  { tipo: "introducao", titulo: "Introdução" },
  { tipo: "explicacao", titulo: "Explicação" },
  { tipo: "exemplo", titulo: "Exemplo" },
  { tipo: "exemplo_cotidiano", titulo: "Exemplo do cotidiano" },
  { tipo: "atividade_guiada", titulo: "Atividade guiada" },
  { tipo: "pratica", titulo: "Prática" },
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
      case "introducao": return { ...base, texto: aula.introducao };
      case "explicacao": return { ...base, texto: aula.explicacao };
      case "exemplo": return { ...base, texto: aula.exemplo1 };
      case "exemplo_cotidiano": return { ...base, texto: aula.exemplo2 || aula.contextualizacao };
      case "atividade_guiada": return { ...base, itens: aula.atividade_guiada ?? [] };
      case "pratica": return { ...base, itens: aula.atividade_pratica ?? [] };
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
