/**
 * Métricas longitudinais de humor — Brilha Vida
 *
 * Fonte única de check-ins emocionais. Todo componente de auto-relato
 * (Zones, RULER, Como Estou, Semáforo, Termômetro, Diário do Sentir)
 * grava aqui um ponto normalizado:
 *   - valence: -2 (muito desagradável) … +2 (muito agradável)
 *   - energy:  -2 (muito baixa)        … +2 (muito alta)
 *
 * Armazenamento: cache local por childId + sincronização protegida no Supabase.
 * Chave: `neurobrilha:mood-log:<childId>`.
 * Buffer máximo: 500 pontos (rolling).
 */
import { useCallback, useEffect, useState } from "react";
import { useAppState } from "@/core/store";
import { supabase } from "@/database/supabase/client";

export type MoodSource =
  | "zones"
  | "ruler"
  | "como-estou"
  | "semaforo"
  | "termometro"
  | "diario-sentir";

export type MoodEntry = {
  id: string;
  at: string; // ISO
  source: MoodSource;
  valence: number; // -2..+2
  energy: number; // -2..+2
  emocao: string; // rótulo humano
  quadrante?: "azul" | "verde" | "amarelo" | "vermelho";
  gatilho?: string;
  momento?: string;
  note?: string;
};

const MAX = 500;

function keyFor(childId: string | null | undefined) {
  return childId ? `neurobrilha:mood-log:${childId}` : null;
}

export function readMoodLog(childId: string | null | undefined): MoodEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const key = keyFor(childId);
    if (!key) return [];
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? (arr as MoodEntry[]) : [];
  } catch {
    return [];
  }
}

export function writeMoodLog(childId: string | null | undefined, entries: MoodEntry[]) {
  if (typeof window === "undefined") return;
  try {
    const key = keyFor(childId);
    if (!key) return;
    localStorage.setItem(key, JSON.stringify(entries.slice(-MAX)));
    // Notifica listeners no mesmo tab (localStorage só dispara em outras abas).
    window.dispatchEvent(new CustomEvent("neurobrilha:mood-log:changed", { detail: { childId } }));
  } catch {
    /* silencioso */
  }
}

export function recordMood(
  childId: string | null | undefined,
  entry: Omit<MoodEntry, "id" | "at">,
): MoodEntry {
  const full: MoodEntry = {
    ...entry,
    id: crypto.randomUUID(),
    at: new Date().toISOString(),
    valence: clamp(entry.valence),
    energy: clamp(entry.energy),
  };
  if (!childId) return full;
  const cur = readMoodLog(childId);
  writeMoodLog(childId, [...cur, full]);
  void supabase.from("brilha_vida_mood_entries" as any).upsert({
    id: full.id,
    child_id: childId,
    source: full.source,
    valence: full.valence,
    energy: full.energy,
    emotion: full.emocao,
    quadrant: full.quadrante ?? null,
    trigger_text: full.gatilho ?? null,
    moment_text: full.momento ?? null,
    note: full.note ?? null,
    created_at: full.at,
  } as any);
  return full;
}

async function syncRemoteMoodLog(childId: string): Promise<MoodEntry[]> {
  const { data, error } = await supabase
    .from("brilha_vida_mood_entries" as any)
    .select("id,source,valence,energy,emotion,quadrant,trigger_text,moment_text,note,created_at")
    .eq("child_id", childId)
    .order("created_at", { ascending: false })
    .limit(MAX);
  if (error) return readMoodLog(childId);
  const remote = ((data as any[]) ?? []).reverse().map((row) => ({
    id: String(row.id), at: String(row.created_at), source: row.source as MoodSource,
    valence: Number(row.valence), energy: Number(row.energy), emocao: String(row.emotion),
    quadrante: row.quadrant ?? undefined, gatilho: row.trigger_text ?? undefined,
    momento: row.moment_text ?? undefined, note: row.note ?? undefined,
  })) as MoodEntry[];
  const merged = new Map<string, MoodEntry>();
  for (const item of [...remote, ...readMoodLog(childId)]) merged.set(item.id, item);
  const entries = [...merged.values()].sort((a, b) => a.at.localeCompare(b.at)).slice(-MAX);
  writeMoodLog(childId, entries);
  return entries;
}

function clamp(v: number) {
  return Math.max(-2, Math.min(2, Math.round(v * 10) / 10));
}

/** Hook: dá função para registrar humor amarrada à criança ativa. */
export function useMoodRecorder() {
  const { activeChild } = useAppState();
  const childId = activeChild?.id ?? null;
  return useCallback(
    (entry: Omit<MoodEntry, "id" | "at">) => recordMood(childId, entry),
    [childId],
  );
}

/** Hook: histórico reativo do humor para a criança ativa (ou passada). */
export function useMoodLog(explicitChildId?: string | null) {
  const { activeChild } = useAppState();
  const childId = explicitChildId ?? activeChild?.id ?? null;
  const [entries, setEntries] = useState<MoodEntry[]>(() => readMoodLog(childId));

  useEffect(() => {
    setEntries(readMoodLog(childId));
    if (childId) void syncRemoteMoodLog(childId).then(setEntries);
    const handler = (ev: Event) => {
      const detail = (ev as CustomEvent).detail as { childId?: string | null } | undefined;
      if (!detail || detail.childId === childId) {
        setEntries(readMoodLog(childId));
      }
    };
    window.addEventListener("neurobrilha:mood-log:changed", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("neurobrilha:mood-log:changed", handler);
      window.removeEventListener("storage", handler);
    };
  }, [childId]);

  return entries;
}
