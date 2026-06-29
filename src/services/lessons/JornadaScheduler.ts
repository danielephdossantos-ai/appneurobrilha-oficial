/**
 * JornadaScheduler — monta o cronograma da Jornada 365.
 *
 * Regras absolutas:
 *  - NUNCA cria aula. Só aponta para um código BNCC já existente em
 *    `public.lesson_content` (carregado via LessonService / PedagogicalRepository).
 *  - Cada dia da jornada recebe um único código BNCC.
 *  - Se a aula apontada não existir no banco, devolvemos
 *    `available: false` e a UI mostra "Conteúdo ainda não disponível.".
 */

import { LessonService } from "./LessonService";
import { LessonSelector, type ReforcoSelecao } from "./LessonSelector";

export const CONTEUDO_INDISPONIVEL_MESSAGE =
  "Conteúdo ainda não disponível.";

export interface JornadaDia {
  dia: number;
  codigo_bncc: string;
  motivo: ReforcoSelecao["motivo"] | "rotina";
  available: boolean; // existe em lesson_content?
}

export const JornadaScheduler = {
  /**
   * Monta o cronograma de `totalDias` dias para a criança.
   * Repete a lista de códigos selecionados em ciclo até preencher os dias.
   */
  async build(childId: string, totalDias = 365): Promise<JornadaDia[]> {
    if (!childId) return [];

    const selecao = await LessonSelector.forReforco(childId);
    if (selecao.length === 0) return [];

    const dias: JornadaDia[] = [];
    for (let i = 0; i < totalDias; i++) {
      const s = selecao[i % selecao.length];
      dias.push({
        dia: i + 1,
        codigo_bncc: s.codigo_bncc,
        motivo: s.motivo,
        available: false,
      });
    }

    // marca disponibilidade real consultando o banco (sem gerar nada)
    const codes = Array.from(new Set(dias.map((d) => d.codigo_bncc)));
    const existsMap = new Map<string, boolean>();
    await Promise.all(
      codes.map(async (c) => existsMap.set(c, await LessonService.exists(c))),
    );
    return dias.map((d) => ({ ...d, available: !!existsMap.get(d.codigo_bncc) }));
  },

  /** Aula do dia (1-based). `null` se nada planejado. */
  async getDia(childId: string, dia: number): Promise<JornadaDia | null> {
    const dias = await this.build(childId, Math.max(dia, 1));
    return dias[dia - 1] ?? null;
  },
};
