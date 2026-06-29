/**
 * LessonExamples — fachada fina sobre LessonService.
 * Não acessa o banco diretamente.
 */

import { LessonService, type LessonExample } from "./LessonService";

export type { LessonExample };

export const LessonExamplesService = {
  list(codigoBncc: string) {
    return LessonService.getExamples(codigoBncc);
  },
};
