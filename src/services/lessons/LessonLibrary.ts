/**
 * LessonLibrary — navegação hierárquica do acervo de aulas.
 *
 * Regras absolutas:
 *  - A habilidade BNCC é APENAS metadado (chave/identificador).
 *  - A explicação e qualquer texto da aula vêm exclusivamente de
 *    `public.lesson_content` via LessonService.
 *  - Nada é gerado, concatenado ou inferido a partir da descrição da
 *    habilidade BNCC.
 *
 * Estrutura:
 *   Ano → Disciplina → Código BNCC → Aula → Atividades → Quiz →
 *   Revisão → Desafio → Respostas → Materiais Extras
 */

import { supabase } from "@/integrations/supabase/client";
import {
  LessonService,
  type AtividadeItem,
  type LessonContent,
  type QuizQuestao,
} from "./LessonService";

export interface LessonIndexEntry {
  codigo_bncc: string;
  titulo: string;
  ano: string;
  disciplina: string;
}

export interface DisciplinaNode {
  disciplina: string;
  aulas: LessonIndexEntry[];
}

export interface AnoNode {
  ano: string;
  disciplinas: DisciplinaNode[];
}

export interface LessonFullBundle {
  aula: LessonContent;
  atividades: AtividadeItem[];
  quiz: QuizQuestao[];
  revisao: string | null;
  desafio: AtividadeItem | null;
  respostas: string[];
  materiais: string[];
}

type Row = { codigo_bncc: string; titulo: string; ano: string; disciplina: string };

async function listIndex(filter?: {
  ano?: string;
  disciplina?: string;
}): Promise<LessonIndexEntry[]> {
  const client = supabase as unknown as {
    from: (t: string) => {
      select: (c: string) => {
        order: (c: string, o?: { ascending?: boolean }) => {
          order: (c: string, o?: { ascending?: boolean }) => {
            order: (c: string, o?: { ascending?: boolean }) => Promise<{
              data: Row[] | null;
              error: unknown;
            }>;
          };
        };
      };
    };
  };

  const { data, error } = await client
    .from("lesson_content")
    .select("codigo_bncc, titulo, ano, disciplina")
    .order("ano", { ascending: true })
    .order("disciplina", { ascending: true })
    .order("codigo_bncc", { ascending: true });

  if (error || !data) return [];
  return data.filter(
    (r) =>
      (!filter?.ano || r.ano === filter.ano) &&
      (!filter?.disciplina || r.disciplina === filter.disciplina),
  );
}

export const LessonLibrary = {
  /** Árvore Ano → Disciplina → Aulas. */
  async getTree(): Promise<AnoNode[]> {
    const rows = await listIndex();
    const byAno = new Map<string, Map<string, LessonIndexEntry[]>>();
    for (const r of rows) {
      if (!byAno.has(r.ano)) byAno.set(r.ano, new Map());
      const disc = byAno.get(r.ano)!;
      if (!disc.has(r.disciplina)) disc.set(r.disciplina, []);
      disc.get(r.disciplina)!.push(r);
    }
    return Array.from(byAno.entries()).map(([ano, disc]) => ({
      ano,
      disciplinas: Array.from(disc.entries()).map(([disciplina, aulas]) => ({
        disciplina,
        aulas,
      })),
    }));
  },

  listAnos: async (): Promise<string[]> =>
    Array.from(new Set((await listIndex()).map((r) => r.ano))).sort(),

  listDisciplinas: async (ano: string): Promise<string[]> =>
    Array.from(
      new Set((await listIndex({ ano })).map((r) => r.disciplina)),
    ).sort(),

  listAulas: (ano: string, disciplina: string): Promise<LessonIndexEntry[]> =>
    listIndex({ ano, disciplina }),

  /**
   * Lista índice de aulas vinculadas a uma habilidade BNCC.
   * A BNCC é usada APENAS como chave de localização — nada é gerado a partir
   * da descrição da habilidade.
   */
  listByBNCC: async (codigoBncc: string): Promise<LessonIndexEntry[]> =>
    (await listIndex()).filter((r) => r.codigo_bncc === codigoBncc),



  /** Pacote completo da aula (tudo vindo do banco). */
  async getBundle(codigoBncc: string): Promise<LessonFullBundle | null> {
    const aula = await LessonService.getLesson(codigoBncc);
    if (!aula) return null;
    return {
      aula,
      atividades: [
        ...(aula.atividade_guiada ?? []),
        ...(aula.atividade_pratica ?? []),
      ],
      quiz: aula.quiz ?? [],
      revisao: aula.revisao ?? null,
      desafio: aula.desafio ?? null,
      respostas: aula.respostas ?? [],
      materiais: aula.materiais ?? [],
    };
  },
};

export type { LessonContent, AtividadeItem, QuizQuestao };
