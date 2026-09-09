import React, { useEffect, useRef, useState } from "react";
import { Lock, ShieldCheck, X } from "lucide-react";
import { useParentMode } from "@/contexts/ParentModeContext";

export const ParentPinGate: React.FC = () => {
  const { promptOpen, closePrompt, hasPin, setPin, verifyPin, unlock } = useParentMode();
  const [mode, setMode] = useState<"enter" | "create" | "confirm">("enter");
  const [digits, setDigits] = useState("");
  const [firstPin, setFirstPin] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (promptOpen) {
      setDigits("");
      setError("");
      setFirstPin("");
      setMode(hasPin ? "enter" : "create");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [promptOpen, hasPin]);

  if (!promptOpen) return null;

  const handleChange = (val: string) => {
    const clean = val.replace(/\D/g, "").slice(0, 4);
    setDigits(clean);
    setError("");
    if (clean.length === 4) {
      setTimeout(() => submit(clean), 100);
    }
  };

  const submit = (value: string) => {
    if (mode === "enter") {
      if (verifyPin(value)) {
        unlock();
        closePrompt();
      } else {
        setError("PIN incorreto. Tente novamente.");
        setDigits("");
      }
    } else if (mode === "create") {
      setFirstPin(value);
      setDigits("");
      setMode("confirm");
    } else if (mode === "confirm") {
      if (value === firstPin) {
        setPin(value);
        unlock();
        closePrompt();
      } else {
        setError("Os PINs não coincidem. Comece novamente.");
        setDigits("");
        setFirstPin("");
        setMode("create");
      }
    }
  };

  const titles: Record<typeof mode, string> = {
    enter: "Área dos Pais",
    create: "Criar PIN dos Pais",
    confirm: "Confirme o PIN",
  };

  const descriptions: Record<typeof mode, string> = {
    enter: "Digite seu PIN de 4 dígitos para acessar a área dos responsáveis.",
    create:
      "Crie um PIN de 4 dígitos. Ele será pedido sempre que alguém quiser entrar na área dos pais.",
    confirm: "Digite o PIN novamente para confirmar.",
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4 backdrop-blur-md">
      <div className="bg-card rounded-3xl shadow-2xl max-w-sm w-full p-6 relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={closePrompt}
          className="absolute top-3 right-3 h-9 w-9 rounded-full hover:bg-muted grid place-items-center"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-5">
          <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 grid place-items-center mb-3">
            {mode === "enter" ? (
              <Lock className="h-7 w-7 text-primary" />
            ) : (
              <ShieldCheck className="h-7 w-7 text-primary" />
            )}
          </div>
          <h2 className="text-xl font-black">{titles[mode]}</h2>
          <p className="text-sm text-muted-foreground mt-1">{descriptions[mode]}</p>
        </div>

        <div className="flex justify-center gap-3 mb-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-14 w-12 rounded-2xl border-2 grid place-items-center text-2xl font-black ${
                digits[i] ? "border-primary bg-primary/5" : "border-border bg-muted/30"
              }`}
            >
              {digits[i] ? "•" : ""}
            </div>
          ))}
        </div>

        <input
          ref={inputRef}
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          value={digits}
          onChange={(e) => handleChange(e.target.value)}
          className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
          aria-label="Digite o PIN"
          maxLength={4}
        />

        {error && <p className="text-sm text-destructive text-center font-bold">{error}</p>}

        <p className="text-xs text-muted-foreground text-center mt-4">
          Toque na tela e use o teclado para digitar.
        </p>
      </div>
    </div>
  );
};
