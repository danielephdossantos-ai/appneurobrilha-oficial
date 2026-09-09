/**
 * LessonAdaptations — fachada fina sobre LessonService.
 * Não acessa o banco diretamente.
 */

import {
  LessonService,
  type AdaptacaoPerfil,
  type LessonAdaptation,
} from "./LessonService";

export type { AdaptacaoPerfil, LessonAdaptation };

export const LessonAdaptationsService = {
  get(codigoBncc: string, perfil: AdaptacaoPerfil) {
    return LessonService.getAdaptation(codigoBncc, perfil);
  },
  list(codigoBncc: string) {
    return LessonService.getAdaptations(codigoBncc);
  },
};
