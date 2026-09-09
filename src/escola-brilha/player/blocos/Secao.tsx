import { useEffect, useRef, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Volume2, Pause } from "lucide-react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

/**
 * Cartão genérico usado por quase todos os blocos da aula.
 * Padroniza tipografia, espaçamentos, ícone-título e — desde a v2 —
 * inclui um botão "Ouvir" que narra automaticamente todo o conteúdo
 * textual da seção usando speechSynthesis (pt-BR).
 *
 * A leitura pega o texto real renderizado dentro do cartão, então
 * funciona para Narrativa, Missão, Objetivos, Explicação, Exercícios,
 * Desafio, Revisão, Quiz e todas as fases interativas — sem precisar
 * editar cada bloco.
 */
export function Secao({
  icon: Icon,
  rotulo,
  cor = "#FFC93C",
  children,
}: {
  icon: LucideIcon;
  rotulo: string;
  cor?: string;
  children: ReactNode;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [falando, setFalando] = useState(false);

  // Para a leitura ao desmontar / trocar de aula
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const coletarTexto = (): string => {
    const el = boxRef.current;
    if (!el) return "";
    const clone = el.cloneNode(true) as HTMLElement;
    clone
      .querySelectorAll(
        'button, [role="button"], input, select, textarea, [data-no-tts]',
      )
      .forEach((n) => n.remove());
    // Preserva quebras/pontuação: insere ponto após blocos para gerar pausa natural
    clone.querySelectorAll("p, div, li, h1, h2, h3, h4, h5, h6, br").forEach((n) => {
      n.append(document.createTextNode(". "));
    });
    return (clone.textContent || "")
      .replace(/\s+/g, " ")
      .replace(/\s*\.\s*\.+/g, ". ")
      .trim();
  };

  const toggle = () => {
    if (falando) {
      stopSpeaking();
      setFalando(false);
      return;
    }
    const texto = coletarTexto();
    if (!texto) return;
    setFalando(true);
    speakChunked(texto, {
      rate: 0.82,
      pitch: 1.05,
      onEnd: () => setFalando(false),
    });
  };

  return (
    <div
      ref={boxRef}
      className="rounded-3xl bg-white/10 border-2 border-white/20 p-6 relative"
    >
      <div className="flex items-center gap-2 mb-3" data-no-tts>
        <div className="flex items-center gap-2 flex-1 min-w-0" style={{ color: cor }}>
          <Icon className="h-5 w-5 shrink-0" />
          <span className="text-xs font-black uppercase tracking-widest truncate">
            {rotulo}
          </span>
        </div>
        <button
          type="button"
          onClick={toggle}
          data-no-tts
          aria-label={falando ? "Parar leitura" : "Ouvir esta parte"}
          className={`shrink-0 h-9 px-3 rounded-full flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest border-2 transition active:scale-95 ${
            falando
              ? "bg-red-500 text-white border-red-300 animate-pulse"
              : "bg-white/90 text-[#4a1d6b] border-white hover:scale-105"
          }`}
        >
          {falando ? (
            <>
              <Pause className="h-3.5 w-3.5" /> Parar
            </>
          ) : (
            <>
              <Volume2 className="h-3.5 w-3.5" /> Ouvir
            </>
          )}
        </button>
      </div>
      <div className="text-white text-base leading-relaxed whitespace-pre-line">
        {children}
      </div>
    </div>
  );
}
