/**
 * Métricas longitudinais de humor — Brilha Vida
 *
 * Fonte única de check-ins emocionais. Todo componente de auto-relato
 * (Zones, RULER, Como Estou, Semáforo, Termômetro, Diário do Sentir)
 * grava aqui um ponto normalizado:
 *   - valence: -2 (muito desagradável) … +2 (muito agradável)
 *   - energy:  -2 (muito baixa)        … +2 (muito alta)
 *
 * Armazenamento: localStorage por childId (fallback "anon").
 * Chave: `neurobrilha:mood-log:<childId>`.
 * Buffer máximo: 500 pontos (rolling).
 */
import { useCallback, useEffect, useState } from "react";
import { useAppState } from "@/core/store";

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
  return `neurobrilha:mood-log:${childId ?? "anon"}`;
}

export function readMoodLog(childId: string | null | undefined): MoodEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(keyFor(childId));
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
    localStorage.setItem(keyFor(childId), JSON.stringify(entries.slice(-MAX)));
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
  const cur = readMoodLog(childId);
  writeMoodLog(childId, [...cur, full]);
  return full;
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
