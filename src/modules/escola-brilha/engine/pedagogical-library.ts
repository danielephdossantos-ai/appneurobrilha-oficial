/**
 * pedagogical-library — resolve BNCC → Template → Aula (LessonV2)
 * consultando a Biblioteca Pedagógica no Lovable Cloud.
 *
 * Pipeline (em ordem):
 *   1. Cache em memória (síncrono, dropin para os players atuais).
 *   2. `pedagogical_lessons_cache` (LessonV2 já montada e versionada).
 *   3. `bncc_template_map` + `pedagogical_templates` (monta sob demanda).
 *   4. Fallback determinístico: `buildLessonV2` (packs locais 6º–9º).
 *
 * Os players Fund2Player chamam `resolveLessonV2Sync` (sync, igual à API
 * antiga). Em paralelo, dispare `prefetchLessonV2` para popular o cache em
 * memória a partir do Supabase — a próxima renderização já usa Templates.
 */

import { supabase } from "@/integrations/supabase/client";
import { buildLessonV2 } from "./lesson-builder-v2";
import type {
  LessonV2,
  OptionV2,
  ResumoFormat,
} from "../types/lesson-v2";

// ----------------------------- cache em memória -----------------------------

const memCache = new Map<string, LessonV2>();
const inflight = new Map<string, Promise<LessonV2 | null>>();

function cacheKey(bnccCode: string, titulo: string) {
  return `${bnccCode}::${titulo}`;
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
  // Base determinística do fallback — garante 100% das telas preenchidas
  // mesmo quando o template é parcial.
  const fallback = buildLessonV2(bnccCode, titulo, bnccObjective);

  const passoAPasso =
    tpl.sequencia_didatica && tpl.sequencia_didatica.length > 0
      ? tpl.sequencia_didatica
      : fallback?.screens.explicacao.passoAPasso ?? [];

  const ex0 = tpl.exemplos?.[0];

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
        exemplo:
          ex0?.answer ??
          fallback?.screens.explicacao.exemplo ??
          "",
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
        nodes:
          tpl.revisao?.nodes ?? fallback?.screens.resumo.nodes ?? [],
        takeaways:
          tpl.revisao?.takeaways ??
          fallback?.screens.resumo.takeaways ??
          [],
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

/**
 * Sync resolver: drop-in para os players. Retorna do cache em memória
 * (preenchido por `prefetchLessonV2`) ou faz o fallback determinístico
 * imediato com `buildLessonV2`.
 */
export function resolveLessonV2Sync(
  bnccCode: string,
  titulo: string,
  bnccObjective = "",
): LessonV2 | null {
  const key = cacheKey(bnccCode, titulo);
  const hit = memCache.get(key);
  if (hit) return hit;

  const fb = buildLessonV2(bnccCode, titulo, bnccObjective);
  if (fb) memCache.set(key, fb);
  return fb;
}

/**
 * Async resolver: consulta a Biblioteca Pedagógica no Supabase
 * (cache → template) e popula o cache em memória. Quando nada existir
 * ainda na base, mantém o fallback local — sem quebrar a UI.
 */
export async function prefetchLessonV2(
  bnccCode: string,
  titulo: string,
  bnccObjective = "",
): Promise<LessonV2 | null> {
  const key = cacheKey(bnccCode, titulo);
  if (memCache.has(key)) return memCache.get(key)!;

  const pending = inflight.get(key);
  if (pending) return pending;

  const work = (async () => {
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
      memCache.set(key, lesson);
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
        memCache.set(key, lesson);
        return lesson;
      }
    }

    // 3) Fallback determinístico local.
    const fb = buildLessonV2(bnccCode, titulo, bnccObjective);
    if (fb) memCache.set(key, fb);
    return fb;
  })();

  inflight.set(key, work);
  try {
    return await work;
  } finally {
    inflight.delete(key);
  }
}

/** Limpa cache em memória (útil em testes / após admin atualizar template). */
export function clearLessonV2Cache() {
  memCache.clear();
  inflight.clear();
}
