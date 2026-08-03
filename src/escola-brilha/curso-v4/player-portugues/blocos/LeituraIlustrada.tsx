import { useEffect, useRef, useState, useContext } from "react";
import type { LeituraIlustradaData } from "../../types";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import { KidsCtx } from "../PlayerPortuguesV4";
import { TeenBlackboard } from "./TeenBlackboard";

/**
 * Bloco de leitura ilustrada:
 *  - Ilustração ao lado
 *  - Parágrafos em fonte grande, espaçamento generoso
 *  - Botão "Ouvir" (TTS PT-BR)
 *  - Palavras marcadas com destaque amarelo
 */
export function LeituraIlustrada({ data }: { data: LeituraIlustradaData }) {
  const skin = useContext(KidsCtx);
  const [tocando, setTocando] = useState(false);
  const ativoRef = useRef(false);

  useEffect(() => {
    return () => {
      ativoRef.current = false;
      stopSpeaking();
    };
  }, []);

  const textoInteiro = data.paragrafos.join(" ");

  const ouvir = () => {
    if (tocando) {
      stopSpeaking();
      setTocando(false);
      ativoRef.current = false;
      return;
    }
    ativoRef.current = true;
    setTocando(true);
    speakChunked(textoInteiro, {
      onEnd: () => {
        if (ativoRef.current) setTocando(false);
      },
    });
  };

  return (
    <TeenBlackboard titulo="Protocolo de Leitura">
      <div className={`rounded-2xl p-4 md:p-6 space-y-4 ${skin.teen ? "bg-transparent text-cyan-50" : "bg-white text-[#0d1f55] shadow-xl"}`}>
        {data.titulo && (
          <div className="text-center">
            <div className={`text-[10px] uppercase tracking-widest ${skin.teen ? "text-cyan-400/60" : "text-[#0d1f55]/60"}`}>Leitura</div>
            <h3 className="text-xl font-black">{data.titulo}</h3>
          </div>
        )}

        <div className="grid md:grid-cols-[160px_1fr] gap-4 items-start">
          {data.imagemUrl && (
            <div className="flex flex-col items-center gap-1">
              <img
                src={data.imagemUrl}
                alt={data.legendaImagem ?? ""}
                className={`w-32 h-32 md:w-full md:h-auto object-contain drop-shadow ${skin.teen ? "brightness-90 contrast-125" : ""}`}
              />
              {data.legendaImagem && (
                <div className={`text-[10px] text-center italic ${skin.teen ? "text-cyan-400/60" : "text-[#0d1f55]/60"}`}>
                  {data.legendaImagem}
                </div>
              )}
            </div>
          )}

        <div className="space-y-3 text-lg leading-relaxed">
            {data.paragrafos.map((p, i) => (
              <p key={i}>{renderComDestaque(p, data.destacar ?? [], !!skin.teen)}</p>
            ))}
        </div>
      </div>

        <div className="flex justify-center pt-2">
          <button
            onClick={ouvir}
            className={`px-5 py-2 rounded-full font-bold text-sm transition ${
              tocando
                ? "bg-rose-500 text-white"
                : skin.teen
                  ? "bg-cyan-600 text-white hover:bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "bg-[#0d1f55] text-white hover:bg-[#1e3a8a]"
            }`}
          >
            {tocando ? "⏸ Parar" : "🔊 Ouvir a leitura"}
          </button>
        </div>
      </div>
    </TeenBlackboard>
  );
}

function renderComDestaque(texto: string, palavras: string[], teen: boolean) {
  if (!palavras.length) return texto;
  // Constrói regex case-insensitive com palavras inteiras.
  const escaped = palavras.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`\\b(${escaped.join("|")})\\b`, "gi");
  const partes = texto.split(re);
  return partes.map((parte, i) => {
    const ehDestaque = palavras.some((p) => p.toLowerCase() === parte.toLowerCase());
    return ehDestaque ? (
      <mark key={i} className={`px-1 rounded ${teen ? "bg-cyan-900/50 text-cyan-300 border border-cyan-500/30" : "bg-amber-200 text-[#0d1f55]"}`}>
        {parte}
      </mark>
    ) : (
      <span key={i}>{parte}</span>
    );
  });
}
