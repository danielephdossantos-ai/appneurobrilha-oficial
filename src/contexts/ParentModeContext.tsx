import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type ParentModeContextValue = {
  unlocked: boolean;
  hasPin: boolean;
  unlock: () => void;
  lock: () => void;
  setPin: (pin: string) => void;
  verifyPin: (pin: string) => boolean;
  requestUnlock: () => void;
  promptOpen: boolean;
  closePrompt: () => void;
};

const ParentModeContext = createContext<ParentModeContextValue | null>(null);

const PIN_KEY = "neurobrilha:parentPin";

export function ParentModeProvider({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [pin, setPinState] = useState<string | null>(null);
  const [promptOpen, setPromptOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPinState(localStorage.getItem(PIN_KEY));
    }
  }, []);

  const value = useMemo<ParentModeContextValue>(() => ({
    unlocked,
    hasPin: !!pin,
    unlock: () => setUnlocked(true),
    lock: () => setUnlocked(false),
    setPin: (newPin: string) => {
      localStorage.setItem(PIN_KEY, newPin);
      setPinState(newPin);
    },
    verifyPin: (input: string) => input === pin,
    requestUnlock: () => setPromptOpen(true),
    promptOpen,
    closePrompt: () => setPromptOpen(false),
  }), [unlocked, pin, promptOpen]);

  return <ParentModeContext.Provider value={value}>{children}</ParentModeContext.Provider>;
}

export function useParentMode() {
  const ctx = useContext(ParentModeContext);
  if (!ctx) throw new Error("useParentMode must be used within ParentModeProvider");
  return ctx;
}
