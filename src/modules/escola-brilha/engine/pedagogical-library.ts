/**
 * pedagogical-library — resolve BNCC → Template → Aula (LessonV2)
 *
 * Caches separados:
 *   - templateCache: aula real vinda do Supabase (Biblioteca Pedagógica).
 *   - fallbackCache: aula determinística local (último recurso).
 *
 * O `resolveLessonV2Sync` SEMPRE prefere `templateCache` quando disponível.
 * O hook `useLessonV2` assina mudanças do cache para re-renderizar quando
 * o template do Supabase chegar depois do primeiro paint (que mostra
 * temporariamente o fallback).
 */

import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { buildLessonV2 } from "./lesson-builder-v2";
import type { LessonV2, OptionV2, ResumoFormat } from "../types/lesson-v2";

// ----------------------------- caches separados ----------------------------

const templateCache = new Map<string, LessonV2>();
const fallbackCache = new Map<string, LessonV2>();
const inflight = new Map<string, Promise<LessonV2 | null>>();
const listeners = new Set<() => void>();

function cacheKey(bnccCode: string, titulo: string) {
  return `${bnccCode}::${titulo}`;
}

function emit() {
  listeners.forEach((l) => l());
}

// ----------------------------- tipos auxiliares -----------------------------

interface TemplateRow {
  id: string;
  slug: string;
  name: string;
  disciplina: string;
  serie: string | null;
  metodo: string;
  sequencia_didatica: Array<{ step: string; detail: string }> | null;
  exemplos: Array<{
    question?: string;
    resolution?: Array<{ line: string; note?: string }>;
    answer?: string;
    why?: string;
    image?: string;
  }> | null;
  erros_comuns: Array<{ wrong: string; why: string }> | null;
  pratica_guiada: Array<{
    prompt: string;
    hint?: string;
    options: OptionV2[];
  }> | null;
  exercicios: Array<{ question: string; options: OptionV2[] }> | null;
  desafio: {
    contextualScenario?: string;
    question?: string;
    options?: OptionV2[];
  } | null;
  revisao: {
    format?: ResumoFormat;
    nodes?: Array<{ label: string; detail?: string }>;
    takeaways?: string[];
  } | null;
  avaliacao: { recommendation?: string } | null;
}

// ----------------------------- montagem ------------------------------------

function buildFromTemplate(
  bnccCode: string,
  titulo: string,
  bnccObjective: string,
  tpl: TemplateRow,
): LessonV2 {
  const fallback = buildLessonV2(bnccCode, titulo, bnccObjective);

  const passoAPasso =
    tpl.sequencia_didatica && tpl.sequencia_didatica.length > 0
      ? tpl.sequencia_didatica
      : fallback?.screens.explicacao.passoAPasso ?? [];

  const ex0 = tpl.exemplos?.[0];

  const templateMeta = {
    slug: tpl.slug,
    name: tpl.name,
    disciplina: tpl.disciplina,
    steps: [
      { n: 1, label: "Motivação",      applied: !!tpl.metodo,                                  source: "metodo" },
      { n: 2, label: "Observação",     applied: !!(tpl.sequencia_didatica && tpl.sequencia_didatica.length > 0), source: "sequencia_didatica" },
      { n: 3, label: "Explicação",     applied: !!(tpl.sequencia_didatica && tpl.sequencia_didatica.length > 1), source: "sequencia_didatica" },
      { n: 4, label: "Exemplo",        applied: !!ex0,                                         source: "exemplos" },
      { n: 5, label: "Prática Guiada", applied: !!(tpl.pratica_guiada && tpl.pratica_guiada.length > 0),         source: "pratica_guiada" },
      { n: 6, label: "Treino",         applied: !!(tpl.exercicios && tpl.exercicios.length > 0),                 source: "exercicios" },
      { n: 7, label: "Desafio",        applied: !!(tpl.desafio?.question && tpl.desafio.options?.length),        source: "desafio" },
      { n: 8, label: "Resumo",         applied: !!(tpl.revisao?.nodes?.length || tpl.revisao?.takeaways?.length), source: "revisao" },
      { n: 9, label: "Domínio",        applied: !!tpl.avaliacao?.recommendation,               source: "avaliacao" },
    ],
  };

  return {
    id: `tpl:${tpl.slug}:${bnccCode}`,
    title: titulo || fallback?.title || bnccCode,
    discipline:
      (fallback?.discipline as LessonV2["discipline"]) ??
      (tpl.disciplina as LessonV2["discipline"]),
    grade: fallback?.grade ?? tpl.serie ?? "",
    bnccCode,
    bnccObjective,
    xp: fallback?.xp ?? 30,
    templateMeta,

    screens: {
      missao:
        fallback?.screens.missao ?? {
          studentObjective: `Você vai aprender ${titulo.toLowerCase()}.`,
          contextEmoji: "📘",
          contextLine: tpl.metodo,
          whatYouWillDo: passoAPasso.slice(0, 3).map((p) => p.step),
        },
      exploracao:
        fallback?.screens.exploracao ?? {
          provokingQuestion: `O que você já sabe sobre ${titulo}?`,
          observation: tpl.metodo,
          pairs: [],
        },
      explicacao: {
        conceito: tpl.metodo,
        passoAPasso,
        exemplo: ex0?.answer ?? fallback?.screens.explicacao.exemplo ?? "",
        aplicacao:
          fallback?.screens.explicacao.aplicacao ??
          `Aplique ${titulo.toLowerCase()} no seu dia a dia.`,
        resumo:
          fallback?.screens.explicacao.resumo ??
          passoAPasso.map((p) => p.step).join(" → "),
      },
      exemplo: ex0
        ? {
            question: ex0.question ?? titulo,
            resolution: ex0.resolution ?? [],
            answer: ex0.answer ?? "",
            why: ex0.why ?? tpl.metodo,
            image: ex0.image,
          }
        : (fallback?.screens.exemplo ?? {
            question: titulo,
            resolution: [],
            answer: "",
            why: tpl.metodo,
          }),
      guiada: tpl.pratica_guiada?.[0]
        ? {
            prompt: tpl.pratica_guiada[0].prompt,
            options: tpl.pratica_guiada[0].options,
            hint: tpl.pratica_guiada[0].hint ?? tpl.metodo,
          }
        : (fallback?.screens.guiada ?? {
            prompt: titulo,
            options: [],
            hint: tpl.metodo,
          }),
      atividade:
        tpl.exercicios && tpl.exercicios.length > 0
          ? { items: tpl.exercicios }
          : (fallback?.screens.atividade ?? { items: [] }),
      desafio:
        tpl.desafio &&
        tpl.desafio.question &&
        tpl.desafio.options &&
        tpl.desafio.options.length > 0
          ? {
              contextualScenario:
                tpl.desafio.contextualScenario ?? "Resolva o desafio:",
              question: tpl.desafio.question,
              options: tpl.desafio.options,
            }
          : (fallback?.screens.desafio ?? {
              contextualScenario: "Resolva o desafio:",
              question: titulo,
              options: [],
            }),
      resumo: {
        format:
          tpl.revisao?.format ?? fallback?.screens.resumo.format ?? "list",
        title: titulo,
        nodes: tpl.revisao?.nodes ?? fallback?.screens.resumo.nodes ?? [],
        takeaways:
          tpl.revisao?.takeaways ?? fallback?.screens.resumo.takeaways ?? [],
      },
      dominio: {
        bnccCode,
        bnccObjective:
          bnccObjective ||
          fallback?.screens.dominio.bnccObjective ||
          `Habilidade ${bnccCode}.`,
        recommendation:
          tpl.avaliacao?.recommendation ??
          fallback?.screens.dominio.recommendation ??
          "Se acertar tudo, avance. Se errar, revise o passo a passo.",
      },
    },
  };
}

// ----------------------------- API pública ---------------------------------

/** Template-first; só usa fallback se o template ainda não chegou. */
export function resolveLessonV2Sync(
  bnccCode: string,
  titulo: string,
  bnccObjective = "",
): LessonV2 | null {
  const key = cacheKey(bnccCode, titulo);
  const tpl = templateCache.get(key);
  if (tpl) return tpl;

  const cached = fallbackCache.get(key);
  if (cached) return cached;

  const fb = buildLessonV2(bnccCode, titulo, bnccObjective);
  if (fb) fallbackCache.set(key, fb);
  return fb;
}

/**
 * Busca o template REAL no Supabase e popula `templateCache`.
 * NÃO consulta `fallbackCache` — sempre tenta puxar o template,
 * mesmo se já existir fallback. Notifica `useLessonV2` ao terminar.
 */
export async function prefetchLessonV2(
  bnccCode: string,
  titulo: string,
  bnccObjective = "",
): Promise<LessonV2 | null> {
  const key = cacheKey(bnccCode, titulo);
  if (templateCache.has(key)) return templateCache.get(key)!;

  const pending = inflight.get(key);
  if (pending) return pending;

  const work = (async () => {
    try {
      // 1) Cache versionado no Supabase (lesson já montada).
      const { data: cached } = await supabase
        .from("pedagogical_lessons_cache")
        .select("lesson, version")
        .eq("bncc_code", bnccCode)
        .order("version", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (cached?.lesson) {
        const lesson = cached.lesson as unknown as LessonV2;
        templateCache.set(key, lesson);
        emit();
        return lesson;
      }

      // 2) Map BNCC → Template (maior prioridade).
      const { data: map } = await supabase
        .from("bncc_template_map")
        .select("template_id, priority")
        .eq("bncc_code", bnccCode)
        .order("priority", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (map?.template_id) {
        const { data: tpl } = await supabase
          .from("pedagogical_templates")
          .select("*")
          .eq("id", map.template_id)
          .maybeSingle();

        if (tpl) {
          const lesson = buildFromTemplate(
            bnccCode,
            titulo,
            bnccObjective,
            tpl as unknown as TemplateRow,
          );
          templateCache.set(key, lesson);
          emit();
          return lesson;
        }
      }
    } catch (err) {
      console.warn("[pedagogical-library] prefetch failed:", err);
    }

    return null;
  })();

  inflight.set(key, work);
  try {
    return await work;
  } finally {
    inflight.delete(key);
  }
}

/** Hook React: retorna a aula e re-renderiza quando o template chega. */
export function useLessonV2(
  bnccCode: string,
  titulo: string,
  bnccObjective = "",
): LessonV2 | null {
  const [, force] = useState(0);

  useEffect(() => {
    const sub = () => force((n) => n + 1);
    listeners.add(sub);
    void prefetchLessonV2(bnccCode, titulo, bnccObjective);
    return () => {
      listeners.delete(sub);
    };
  }, [bnccCode, titulo, bnccObjective]);

  return resolveLessonV2Sync(bnccCode, titulo, bnccObjective);
}

/** Limpa caches (testes / admin). */
export function clearLessonV2Cache() {
  templateCache.clear();
  fallbackCache.clear();
  inflight.clear();
  emit();
}
