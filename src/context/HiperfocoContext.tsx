import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { HIPERFOCOS, type Hiperfoco, type HiperfocoId } from "@/data/hiperfocos";

const STORAGE_KEY = "currentHiperfoco";

type StoredHiperfoco =
  | { id: Exclude<HiperfocoId, "custom"> }
  | { id: "custom"; label: string; emoji?: string; elementos?: string[] };

interface HiperfocoContextValue {
  hiperfoco: Hiperfoco | null;
  setHiperfocoById: (id: Exclude<HiperfocoId, "custom">) => void;
  setHiperfocoCustom: (label: string) => void;
  limpar: () => void;
}

const Ctx = createContext<HiperfocoContextValue | null>(null);

function hidratar(raw: string | null): Hiperfoco | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as StoredHiperfoco;
    if (parsed.id === "custom") {
      return {
        id: "custom",
        label: parsed.label || "Hiperfoco",
        emoji: parsed.emoji || "✨",
        elementos: parsed.elementos?.length ? parsed.elementos : [parsed.label || "personagem"],
        som: "som do tema",
        formaPontilhado: "um símbolo do tema",
        pipAcertos: [`Boa! Acertou em cheio no mundo de ${parsed.label}! ⭐`],
        pipIncentivos: [`Tranquilo! No universo de ${parsed.label} se aprende treinando. 💪`],
      };
    }
    return HIPERFOCOS[parsed.id] ?? null;
  } catch {
    return null;
  }
}

export function HiperfocoProvider({ children }: { children: ReactNode }) {
  const [hiperfoco, setHiperfoco] = useState<Hiperfoco | null>(() => {
    if (typeof window === "undefined") return null;
    return hidratar(window.localStorage.getItem(STORAGE_KEY));
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hiperfoco) {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }
    const stored: StoredHiperfoco =
      hiperfoco.id === "custom"
        ? { id: "custom", label: hiperfoco.label, emoji: hiperfoco.emoji, elementos: hiperfoco.elementos }
        : { id: hiperfoco.id };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  }, [hiperfoco]);

  const value = useMemo<HiperfocoContextValue>(
    () => ({
      hiperfoco,
      setHiperfocoById: (id) => setHiperfoco(HIPERFOCOS[id]),
      setHiperfocoCustom: (label) => {
        const trimmed = label.trim();
        if (!trimmed) return;
        setHiperfoco({
          id: "custom",
          label: trimmed,
          emoji: "✨",
          elementos: [trimmed],
          som: "som do tema",
          formaPontilhado: "um símbolo do tema",
          pipAcertos: [`Boa! Acertou em cheio no mundo de ${trimmed}! ⭐`],
          pipIncentivos: [`Tranquilo! No universo de ${trimmed} se aprende treinando. 💪`],
        });
      },
      limpar: () => setHiperfoco(null),
    }),
    [hiperfoco]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useHiperfoco() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useHiperfoco deve ser usado dentro de HiperfocoProvider");
  return ctx;
}
