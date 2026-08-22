import { useCallback, useEffect, useState } from "react";
import { useAppState } from "@/core/store";

export interface SensoryProfile {
  lowStim: boolean;          // master switch
  reduceMotion: boolean;     // sem pulse/shake/scale
  reduceSound: boolean;      // muta sons
  softColors: boolean;       // sem coral/vermelho forte
  largerTargets: boolean;    // botões +20%
}

const STORAGE_PREFIX = "neuroTreino:sensoryProfile";
const storageKey = (childId?: string | null) => `${STORAGE_PREFIX}:${childId || "sem-crianca"}`;

const DEFAULT_PROFILE: SensoryProfile = {
  lowStim: false,
  reduceMotion: false,
  reduceSound: false,
  softColors: false,
  largerTargets: false,
};

function readProfile(childId?: string | null): SensoryProfile {
  if (typeof window === "undefined") return DEFAULT_PROFILE;
  try {
    const raw = window.localStorage.getItem(storageKey(childId));
    if (!raw) return DEFAULT_PROFILE;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PROFILE, ...parsed };
  } catch {
    return DEFAULT_PROFILE;
  }
}

// Quando lowStim está ligado, aplica TODOS os outros automaticamente
function resolveEffective(p: SensoryProfile): SensoryProfile {
  if (!p.lowStim) return p;
  return {
    lowStim: true,
    reduceMotion: true,
    reduceSound: true,
    softColors: true,
    largerTargets: true,
  };
}

export function useSensoryProfile() {
  const { activeChild } = useAppState();
  const childId = activeChild?.id ?? null;
  const [profile, setProfile] = useState<SensoryProfile>(() => readProfile(childId));

  useEffect(() => { setProfile(readProfile(childId)); }, [childId]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === storageKey(childId)) setProfile(readProfile(childId));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [childId]);

  const update = useCallback((patch: Partial<SensoryProfile>) => {
    setProfile((prev) => {
      const next = { ...prev, ...patch };
      try {
        window.localStorage.setItem(storageKey(childId), JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, [childId]);

  const toggle = useCallback(
    (key: keyof SensoryProfile) => update({ [key]: !profile[key] } as Partial<SensoryProfile>),
    [profile, update],
  );

  const reset = useCallback(() => {
    try {
      window.localStorage.removeItem(storageKey(childId));
    } catch {
      /* ignore */
    }
    setProfile(DEFAULT_PROFILE);
  }, [childId]);

  return {
    profile,                       // estado bruto (para a UI dos toggles)
    effective: resolveEffective(profile), // o que as atividades devem ler
    update,
    toggle,
    reset,
  };
}
