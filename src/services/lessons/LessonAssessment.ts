/**
 * LessonAssessment — fachada fina sobre LessonService.
 * Não acessa o banco diretamente. Todo I/O vai pelo LessonService.
 */

import {
  LessonService,
  type AssessmentTipo,
  type AssessmentQuestao,
  type AssessmentAlternativa,
  type LessonAssessment,
} from "./LessonService";

export type { AssessmentTipo, AssessmentQuestao, AssessmentAlternativa, LessonAssessment };

export const LessonAssessmentService = {
  get(codigoBncc: string, tipo: AssessmentTipo) {
    return LessonService.getAssessment(codigoBncc, tipo);
  },
  list(codigoBncc: string) {
    return LessonService.getAssessments(codigoBncc);
  },
  getDiagnostica(codigoBncc: string) {
    return LessonService.getAssessment(codigoBncc, "diagnostica");
  },
  getFormativa(codigoBncc: string) {
    return LessonService.getAssessment(codigoBncc, "formativa");
  },
  getFinal(codigoBncc: string) {
    return LessonService.getAssessment(codigoBncc, "final");
  },
};
