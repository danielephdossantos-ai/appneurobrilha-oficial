import { useEffect, useRef, useState } from "react";

/**
 * Botão flutuante universal que lê o texto visível da <section> ativa.
 * Funciona em qualquer player (Geo, Arte, V4...) sem editar cada componente.
 *
 * Uso: renderizar 1x no player. Ele encontra a seção com [data-cena-idx="{ativo}"]
 * e narra todo o textContent com speechSynthesis (pt-BR).
 */
export function BotaoOuvirCena({ ativoIdx }: { ativoIdx: number }) {
  const [falando, setFalando] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Para a fala ao trocar de cena
  useEffect(() => {
    try {
      window.speechSynthesis?.cancel();
    } catch {}
    setFalando(false);
  }, [ativoIdx]);

  // Cleanup ao desmontar
  useEffect(() => {
    return () => {
      try {
        window.speechSynthesis?.cancel();
      } catch {}
    };
  }, []);

  const coletarTexto = (): string => {
    const sec = document.querySelector<HTMLElement>(
      `[data-cena-idx="${ativoIdx}"]`,
    );
    if (!sec) return "";
    // Remove botões e controles p/ não ler "Ouvir", "Próxima", etc.
    const clone = sec.cloneNode(true) as HTMLElement;
    clone
      .querySelectorAll(
        'button, [role="button"], [data-no-tts], input, select, textarea',
      )
      .forEach((n) => n.remove());
    const txt = (clone.textContent || "")
      .replace(/\s+/g, " ")
      .replace(/[🔊▶✓←→✅❌🎬🔮📚📖🧠🎭🧩💪🎮🔁]/gu, " ")
      .trim();
    return txt;
  };

  const toggle = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (falando) {
      window.speechSynthesis.cancel();
      setFalando(false);
      return;
    }
    const texto = coletarTexto();
    if (!texto) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texto);
    u.lang = "pt-BR";
    u.rate = 0.98;
    u.pitch = 1;
    u.onend = () => setFalando(false);
    u.onerror = () => setFalando(false);
    utterRef.current = u;
    setFalando(true);
    window.speechSynthesis.speak(u);
  };

  return (
    <button
      onClick={toggle}
      data-no-tts
      aria-label={falando ? "Parar leitura" : "Ouvir esta cena"}
      className={`fixed z-40 bottom-5 right-4 md:bottom-6 md:right-6 px-4 py-3 rounded-full shadow-lg border text-sm font-bold transition-all ${
        falando
          ? "bg-red-500 text-white border-red-300 animate-pulse"
          : "bg-white text-slate-900 border-white/70 hover:scale-105"
      }`}
    >
      {falando ? "⏸ Parar" : "🔊 Ouvir cena"}
    </button>
  );
}
