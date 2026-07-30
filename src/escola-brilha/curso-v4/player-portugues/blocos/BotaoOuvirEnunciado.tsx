import { useEffect, useRef, useState } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import { falaAutomaticaAtiva } from "../audio-prefs";

/**
 * Botão inline "Ouvir / Repetir" o enunciado de um bloco.
 *
 * Usado nos blocos que não tinham áudio (vocabulário, montar palavra,
 * ordenar sequência, selecionar itens, arrastar para o alvo). A criança
 * do 1º ano ainda não lê o comando sozinha — o enunciado precisa poder
 * ser ouvido e REPETIDO quantas vezes ela quiser.
 *
 * Fase 9: com `auto`, o enunciado toca SOZINHO na primeira vez em que o
 * bloco entra na tela (respeitando a preferência de fala automática).
 *
 * Não é flutuante: fica dentro do cartão, ao lado do enunciado.
 */
export function BotaoOuvirEnunciado({
  texto,
  rate = 0.78,
  rotulo = "Ouvir",
  className = "",
  auto = false,
}: {
  texto: string | (string | undefined | null)[];
  rate?: number;
  rotulo?: string;
  className?: string;
  /** Toca sozinho quando o bloco aparece na tela (uma vez só). */
  auto?: boolean;
}) {
  const [falando, setFalando] = useState(false);
  const ativoRef = useRef(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const jaTocouRef = useRef(false);

  useEffect(() => {
    return () => {
      ativoRef.current = false;
      stopSpeaking();
    };
  }, []);

  const conteudo = (Array.isArray(texto) ? texto : [texto])
    .filter((t): t is string => !!t && !!t.trim())
    .join(". ");

  // ---- Fala automática ao entrar na tela (Fase 9) --------------------
  useEffect(() => {
    if (!auto || !conteudo) return;
    const el = btnRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visivel = entries.some((e) => e.isIntersecting);
        if (!visivel || jaTocouRef.current) return;
        if (!falaAutomaticaAtiva()) return;
        jaTocouRef.current = true;
        obs.disconnect();
        ativoRef.current = true;
        setFalando(true);
        speakChunked(conteudo, {
          rate,
          pitch: 1.05,
          onEnd: () => {
            if (ativoRef.current) setFalando(false);
          },
        }).catch(() => setFalando(false));
      },
      { threshold: 0.6 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [auto, conteudo, rate]);

  if (!conteudo) return null;

  const toggle = () => {
    if (falando) {
      stopSpeaking();
      ativoRef.current = false;
      setFalando(false);
      return;
    }
    stopSpeaking();
    ativoRef.current = true;
    setFalando(true);
    speakChunked(conteudo, {
      rate,
      pitch: 1.05,
      onEnd: () => {
        if (ativoRef.current) setFalando(false);
      },
    });
  };

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={toggle}
      data-no-tts
      aria-label={falando ? "Parar leitura do enunciado" : "Ouvir o enunciado de novo"}
      className={`shrink-0 h-8 px-3 rounded-full flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest border-2 transition active:scale-95 ${
        falando
          ? "bg-rose-500 text-white border-rose-300 animate-pulse"
          : "bg-white/90 text-[#1a0d3d] border-white hover:scale-105"
      } ${className}`}
    >
      {falando ? "⏸ Parar" : `🔊 ${rotulo}`}
    </button>
  );
}
