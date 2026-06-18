import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  STATIC_LESSONS,
  subjectKey,
  etapaForSerie,
  findStaticById,
  type StaticLesson,
} from "../data/library";
import type { AulaBncc, EtapaEscolar } from "./useAulasBncc";

export type LessonRef =
  | { kind: "static"; id: string }
  | { kind: "db"; id: string };

export interface NextLessonTarget {
  ref: LessonRef;
  title: string;
  subject: string;
  serie: string;
  to: string;
  search?: Record<string, string>;
  params?: Record<string, string>;
}

/**
 * Loop infinito: dado a aula atual, retorna a próxima da MESMA matéria
 * (mesma série / mesma etapa), misturando estáticas + banco. Se chegou
 * ao fim, volta pra primeira. Se a matéria só tem 1 aula, pega qualquer
 * próxima da mesma série.
 */
export function useNextLesson(current: LessonRef): NextLessonTarget | null {
  const [dbAulas, setDbAulas] = useState<AulaBncc[]>([]);

  // Descobre etapa do atual pra carregar apenas as aulas da etapa certa.
  const currentInfo = resolveCurrentBasic(current);
  const etapa: EtapaEscolar | null = currentInfo
    ? etapaForSerie(currentInfo.serie)
    : null;

  useEffect(() => {
    if (!etapa) return;
    let cancel = false;
    (async () => {
      const { data } = await supabase
        .from("aulas_bncc")
        .select("*")
        .eq("etapa", etapa)
        .eq("ativo", true)
        .order("serie", { ascending: true })
        .order("ordem", { ascending: true });
      if (!cancel) setDbAulas((data ?? []) as AulaBncc[]);
    })();
    return () => {
      cancel = true;
    };
  }, [etapa, current.kind, current.id]);

  if (!currentInfo || !etapa) return null;

  const statics = STATIC_LESSONS[etapa] ?? [];
  const merged: NextLessonTarget[] = [
    ...statics.map(
      (s): NextLessonTarget => ({
        ref: { kind: "static", id: s.id },
        title: s.title,
        subject: subjectKey(s.badge),
        serie: s.serie,
        to: "/escola-brilha/aula",
        search: { category: s.id, type: s.type },
      }),
    ),
    ...dbAulas.map(
      (a): NextLessonTarget => ({
        ref: { kind: "db", id: a.id },
        title: a.titulo,
        subject: subjectKey(a.disciplina),
        serie: a.serie,
        to: "/escola-brilha/db/$aulaId",
        params: { aulaId: a.id },
      }),
    ),
  ];

  if (!merged.length) return null;

  const sameSubject = merged.filter(
    (m) => m.subject === currentInfo.subject && m.serie === currentInfo.serie,
  );
  const sameSerie = merged.filter((m) => m.serie === currentInfo.serie);

  const pool = sameSubject.length > 1 ? sameSubject : sameSerie.length > 1 ? sameSerie : merged;

  const idx = pool.findIndex(
    (m) => m.ref.kind === current.kind && m.ref.id === current.id,
  );
  const next = pool[(idx + 1) % pool.length];
  // Se por acaso só existe a própria aula, retorna null pra não criar loop visual.
  if (next.ref.kind === current.kind && next.ref.id === current.id) return null;
  return next;
}

function resolveCurrentBasic(
  current: LessonRef,
): { subject: string; serie: string } | null {
  if (current.kind === "static") {
    const s = findStaticById(current.id);
    if (!s) return null;
    return { subject: subjectKey(s.badge), serie: s.serie };
  }
  // Para db, vamos descobrir via fetch on-demand
  // (carregamos abaixo com state interno)
  return _dbCache[current.id] ?? null;
}

// Cache simples para evitar re-fetch do mesmo id
const _dbCache: Record<string, { subject: string; serie: string }> = {};

export function useEnsureDbLessonMeta(aulaId: string | null): boolean {
  const [ready, setReady] = useState<boolean>(!!(aulaId && _dbCache[aulaId]));
  useEffect(() => {
    if (!aulaId || _dbCache[aulaId]) {
      setReady(!!aulaId);
      return;
    }
    let cancel = false;
    (async () => {
      const { data } = await supabase
        .from("aulas_bncc")
        .select("serie,disciplina")
        .eq("id", aulaId)
        .maybeSingle();
      if (cancel) return;
      if (data) {
        _dbCache[aulaId] = { subject: subjectKey(data.disciplina), serie: data.serie };
      }
      setReady(true);
    })();
    return () => {
      cancel = true;
    };
  }, [aulaId]);
  return ready;
}

export type { StaticLesson };
