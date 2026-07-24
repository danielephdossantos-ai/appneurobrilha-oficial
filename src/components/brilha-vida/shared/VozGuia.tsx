import { useEffect, useRef } from "react";
import { Volume2 } from "lucide-react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

/**
 * VozGuia — narração automática da instrução atual.
 * Fala o texto quando `texto` muda, e oferece um botão pra repetir.
 * Base: crianças com TEA/TDAH aprendem melhor com dupla-modalidade (visual+áudio).
 */
export function VozGuia({
  texto,
  autoPlay = true,
  rate = 0.9,
}: {
  texto: string;
  autoPlay?: boolean;
  rate?: number;
}) {
  const ultimoRef = useRef<string>("");

  const falar = () => {
    stopSpeaking();
    // pequeno delay pra o cancelSpeech acalmar antes do novo speak
    setTimeout(() => {
      void speakChunked(texto, { rate, pitch: 1 });
    }, 60);
  };

  useEffect(() => {
    if (!autoPlay) return;
    if (!texto || texto === ultimoRef.current) return;
    ultimoRef.current = texto;
    falar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texto, autoPlay]);

  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  return (
    <button
      onClick={falar}
      type="button"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-primary/30 text-primary rounded-full text-xs font-bold shadow-sm hover:bg-primary/5 transition-colors"
      aria-label="Ouvir explicação"
    >
      <Volume2 size={14} /> Ouvir de novo
    </button>
  );
}
