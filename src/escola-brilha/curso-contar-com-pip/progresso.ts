/**
 * Progresso do curso "Contar com Pip".
 * MVP: persistência local (localStorage). Integração com Supabase virá
 * junto com Fase 2 (tabela `pip_progresso` — mesma estrutura do
 * aurora_progresso).
 */
import { useCallback, useMemo, useSyncExternalStore } from "react";

const LEGACY_KEY = "eb.contar-com-pip.concluidas";

function chaveLocal(childId: string | null): string {
  return childId ? `eb.contar-com-pip.concluidas.${childId}` : LEGACY_KEY;
}

export function lerConcluidasPipLocal(childId: string | null): string[] {
  try {
    if (typeof window === "undefined") return [];
    const raw =
      localStorage.getItem(chaveLocal(childId)) ??
      localStorage.getItem(LEGACY_KEY);
    if (!raw) return [];
    const list = JSON.parse(raw);
    return Array.isArray(list) ? (list as string[]) : [];
  } catch {
    return [];
  }
}

function gravarConcluidasPipLocal(childId: string | null, slugs: string[]) {
  try {
    if (typeof window === "undefined") return;
    localStorage.setItem(chaveLocal(childId), JSON.stringify(slugs));
    localStorage.setItem(
      "eb.contar-com-pip.ultimo-dia",
      new Date().toISOString().slice(0, 10),
    );
    window.dispatchEvent(new StorageEvent("storage", { key: chaveLocal(childId) }));
  } catch {
    /* ignore */
  }
}

export function marcarMissaoPipConcluida(params: {
  childId: string | null;
  slug: string;
}): string[] {
  const { childId, slug } = params;
  const set = new Set(lerConcluidasPipLocal(childId));
  set.add(slug);
  const finais = Array.from(set);
  gravarConcluidasPipLocal(childId, finais);
  return finais;
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function usePipConcluidas(childId: string | null) {
  const chave = chaveLocal(childId);
  const snapshot = useSyncExternalStore(
    subscribe,
    () => {
      if (typeof window === "undefined") return "[]";
      return (
        localStorage.getItem(chave) ??
        localStorage.getItem(LEGACY_KEY) ??
        "[]"
      );
    },
    () => "[]",
  );

  const concluidas = useMemo(() => {
    try {
      const arr = JSON.parse(snapshot);
      return new Set(Array.isArray(arr) ? (arr as string[]) : []);
    } catch {
      return new Set<string>();
    }
  }, [snapshot]);

  const marcar = useCallback(
    (slug: string) => marcarMissaoPipConcluida({ childId, slug }),
    [childId],
  );

  return { concluidas, marcar };
}
