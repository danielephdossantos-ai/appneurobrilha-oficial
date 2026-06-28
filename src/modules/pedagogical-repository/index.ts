/**
 * PedagogicalRepository — único módulo responsável por carregar aulas.
 *
 * Regra absoluta:
 *  - Toda aula é buscada pelo código BNCC (ex.: "EF01LP01").
 *  - Nenhum conteúdo é gerado dinamicamente. Tudo vem da tabela
 *    `public.lesson_content` no banco.
 *  - Se o código não existir no banco, o repositório retorna `null`.
 *
 * Este módulo substitui completamente o modelo antigo (LessonV2, ActivityLesson,
 * pedagogical-library prefetch a partir de templates etc.) como fonte de aula.
 */

import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { LessonContent } from "./types";

export type { LessonContent } from "./types";
export {
  LESSON_CONTENT_REQUIRED_FIELDS,
  type PassoAPasso,
  type AtividadeItem,
  type QuizQuestao,
  type PalavraImportante,
} from "./types";

// ----------------------------- cache em memória ------------------------------

const cache = new Map<string, LessonContent | null>();
const inflight = new Map<string, Promise<LessonContent | null>>();
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function normalizeCode(code: string): string {
  return (code || "").trim().toUpperCase();
}

// ----------------------------- mapeamento ------------------------------------

function mapRow(row: Record<string, unknown>): LessonContent {
  return {
    id: row.id as string,
    codigo_bncc: row.codigo_bncc as string,
    ano: row.ano as string,
    disciplina: row.disciplina as string,
    titulo: row.titulo as string,
    objetivo: row.objetivo as string,
    introducao: row.introducao as string,
    explicacao: row.explicacao as string,
    contexto: row.contexto as string,
    exemplo1: row.exemplo1 as string,
    exemplo2: row.exemplo2 as string,
    analogia: row.analogia as string,
    passo_a_passo: (row.passo_a_passo as LessonContent["passo_a_passo"]) ?? [],
    curiosidade: row.curiosidade as string,
    erro_comum: row.erro_comum as string,
    atividade_guiada:
      (row.atividade_guiada as LessonContent["atividade_guiada"]) ?? [],
    atividade_pratica:
      (row.atividade_pratica as LessonContent["atividade_pratica"]) ?? [],
    desafio: row.desafio as LessonContent["desafio"],
    quiz: (row.quiz as LessonContent["quiz"]) ?? [],
    respostas: (row.respostas as string[]) ?? [],
    resumo: row.resumo as string,
    revisao: row.revisao as string,
    palavras_importantes:
      (row.palavras_importantes as LessonContent["palavras_importantes"]) ?? [],
    nivel: row.nivel as LessonContent["nivel"],
    tempo_estimado: Number(row.tempo_estimado ?? 0),
    materiais: (row.materiais as string[]) ?? [],
    video_url: row.video_url as string,
    imagem_url: row.imagem_url as string,
    tags: (row.tags as string[]) ?? [],
  };
}

// ----------------------------- API pública -----------------------------------

/**
 * Busca uma aula pelo código BNCC. Retorna `null` se ela não estiver no banco.
 * Nunca cria conteúdo automaticamente.
 */
export async function getLessonByBNCC(
  codigoBncc: string,
): Promise<LessonContent | null> {
  const key = normalizeCode(codigoBncc);
  if (!key) return null;

  if (cache.has(key)) return cache.get(key) ?? null;

  const pending = inflight.get(key);
  if (pending) return pending;

  const work = (async () => {
    try {
      const { data, error } = await (supabase as unknown as {
        from: (t: string) => {
          select: (c: string) => {
            eq: (
              c: string,
              v: string,
            ) => {
              maybeSingle: () => Promise<{
                data: Record<string, unknown> | null;
                error: unknown;
              }>;
            };
          };
        };
      })
        .from("lesson_content")
        .select("*")
        .eq("codigo_bncc", key)
        .maybeSingle();

      if (error) {
        console.warn("[PedagogicalRepository] erro ao buscar aula:", error);
        cache.set(key, null);
        emit();
        return null;
      }

      const lesson = data ? mapRow(data) : null;
      cache.set(key, lesson);
      emit();
      return lesson;
    } catch (err) {
      console.warn("[PedagogicalRepository] falha inesperada:", err);
      cache.set(key, null);
      emit();
      return null;
    }
  })();

  inflight.set(key, work);
  try {
    return await work;
  } finally {
    inflight.delete(key);
  }
}

/** Retorna a aula já carregada em memória, sem disparar nova requisição. */
export function getLessonByBNCCSync(codigoBncc: string): LessonContent | null {
  return cache.get(normalizeCode(codigoBncc)) ?? null;
}

/** Hook React: busca a aula no banco e re-renderiza quando ela chega. */
export function useLessonByBNCC(codigoBncc: string): {
  lesson: LessonContent | null;
  loading: boolean;
} {
  const key = normalizeCode(codigoBncc);
  const [, force] = useState(0);

  useEffect(() => {
    const sub = () => force((n) => n + 1);
    listeners.add(sub);
    if (!cache.has(key)) void getLessonByBNCC(key);
    return () => {
      listeners.delete(sub);
    };
  }, [key]);

  const cached = cache.has(key);
  return {
    lesson: cache.get(key) ?? null,
    loading: !cached,
  };
}

/** Limpa o cache (uso em testes / admin). */
export function clearLessonRepositoryCache() {
  cache.clear();
  inflight.clear();
  emit();
}
