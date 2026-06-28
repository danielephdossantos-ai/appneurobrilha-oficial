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

// ----------------------------- cache local + memória -------------------------
//
// Estratégia: na 1ª abertura buscamos no Supabase e gravamos em localStorage.
// Nas próximas vezes a aula abre imediatamente do cache local; em paralelo
// revalidamos contra o banco (stale-while-revalidate). NUNCA regeneramos
// aula — se o banco devolver null, o cache local é invalidado.

const CACHE_PREFIX = "lc:v1:";
const CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 30; // 30 dias

const cache = new Map<string, LessonContent | null>();
const inflight = new Map<string, Promise<LessonContent | null>>();
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function normalizeCode(code: string): string {
  return (code || "").trim().toUpperCase();
}

function storage(): Storage | null {
  try {
    return typeof window !== "undefined" ? window.localStorage : null;
  } catch {
    return null;
  }
}

function readLocal(key: string): LessonContent | null {
  const s = storage();
  if (!s) return null;
  try {
    const raw = s.getItem(CACHE_PREFIX + key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { savedAt: number; lesson: LessonContent };
    if (!parsed?.lesson || !parsed.savedAt) return null;
    if (Date.now() - parsed.savedAt > CACHE_TTL_MS) {
      s.removeItem(CACHE_PREFIX + key);
      return null;
    }
    return parsed.lesson;
  } catch {
    return null;
  }
}

function writeLocal(key: string, lesson: LessonContent | null) {
  const s = storage();
  if (!s) return;
  try {
    if (lesson) {
      s.setItem(
        CACHE_PREFIX + key,
        JSON.stringify({ savedAt: Date.now(), lesson }),
      );
    } else {
      s.removeItem(CACHE_PREFIX + key);
    }
  } catch {
    /* quota / privado — ignora */
  }
}

function clearLocal() {
  const s = storage();
  if (!s) return;
  try {
    const toRemove: string[] = [];
    for (let i = 0; i < s.length; i++) {
      const k = s.key(i);
      if (k && k.startsWith(CACHE_PREFIX)) toRemove.push(k);
    }
    toRemove.forEach((k) => s.removeItem(k));
  } catch {
    /* ignora */
  }
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

  // 1) hidrata memória a partir do localStorage (1ª vez nesta sessão).
  if (!cache.has(key)) {
    const local = readLocal(key);
    if (local) cache.set(key, local);
  }

  // 2) já temos algo em memória? devolve imediato e revalida em background.
  if (cache.has(key)) {
    const cached = cache.get(key) ?? null;
    if (cached) void revalidate(key);
    return cached;
  }

  const pending = inflight.get(key);
  if (pending) return pending;

  const work = fetchFromDb(key);
  inflight.set(key, work);
  try {
    return await work;
  } finally {
    inflight.delete(key);
  }
}

async function fetchFromDb(key: string): Promise<LessonContent | null> {
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
      return cache.get(key) ?? null;
    }

    const lesson = data ? mapRow(data) : null;
    cache.set(key, lesson);
    writeLocal(key, lesson);
    emit();
    return lesson;
  } catch (err) {
    console.warn("[PedagogicalRepository] falha inesperada:", err);
    return cache.get(key) ?? null;
  }
}

async function revalidate(key: string) {
  if (inflight.has(key)) return;
  const work = fetchFromDb(key);
  inflight.set(key, work);
  try {
    await work;
  } finally {
    inflight.delete(key);
  }
}

/** Retorna a aula em memória ou já gravada no localStorage. */
export function getLessonByBNCCSync(codigoBncc: string): LessonContent | null {
  const key = normalizeCode(codigoBncc);
  if (!key) return null;
  if (cache.has(key)) return cache.get(key) ?? null;
  const local = readLocal(key);
  if (local) cache.set(key, local);
  return local;
}

/** Hook React: abre instantâneo do cache local; revalida contra o banco. */
export function useLessonByBNCC(codigoBncc: string): {
  lesson: LessonContent | null;
  loading: boolean;
} {
  const key = normalizeCode(codigoBncc);
  const [, force] = useState(0);

  // hidrata sync do localStorage para a 1ª render já ter conteúdo.
  if (!cache.has(key)) {
    const local = readLocal(key);
    if (local) cache.set(key, local);
  }

  useEffect(() => {
    const sub = () => force((n) => n + 1);
    listeners.add(sub);
    void getLessonByBNCC(key);
    return () => {
      listeners.delete(sub);
    };
  }, [key]);

  const has = cache.has(key);
  return {
    lesson: cache.get(key) ?? null,
    loading: !has,
  };
}

/** Limpa cache em memória + localStorage (testes / admin). */
export function clearLessonRepositoryCache() {
  cache.clear();
  inflight.clear();
  clearLocal();
  emit();
}
