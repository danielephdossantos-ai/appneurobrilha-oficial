/**
 * LessonResources — fachada fina sobre LessonService.
 * Não acessa o banco diretamente.
 */

import {
  LessonService,
  type LessonResource,
  type LessonResourceTipo,
} from "./LessonService";

export type { LessonResource, LessonResourceTipo };

export const LessonResourcesService = {
  list(codigoBncc: string) {
    return LessonService.getResources(codigoBncc);
  },
  listByTipo(codigoBncc: string, tipo: LessonResourceTipo) {
    return LessonService.getResourcesByTipo(codigoBncc, tipo);
  },
};
