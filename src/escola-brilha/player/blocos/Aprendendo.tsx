import { useState } from "react";
import { BookOpen, Volume2 } from "lucide-react";
import { Secao } from "./Secao";
import { useDeviceTTS } from "@/hooks/useDeviceTTS";

export type AprendendoCard = {
  palavra: string;
  emoji?: string;
  imagemUrl?: string;
  silabas: string[];
  frase: string;
};

export type AprendendoDados = {
  titulo?: string;
  instrucao?: string;
  cards: AprendendoCard[];
};

export function Aprendendo({ dados }: { dados: AprendendoDados }) {
  const { speak } = useDeviceTTS();
  const [ativo, setAtivo] = useState<number | null>(null);

  return (
    <Secao icon={BookOpen} rotulo={dados.titulo ?? "Aprendendo"} cor="#4C9EFF">
      {dados.instrucao && (
        <p className="text-sm text-white/80 mb-3 font-black">
          {dados.instrucao}
        </p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {dados.cards.map((c, i) => {
          const aberto = ativo === i;
          return (
            <button
              key={i}
              type="button"
              onClick={() => {
                setAtivo(aberto ? null : i);
                // Evita soletração: se alguma sílaba é uma única letra,
                // o TTS leria "s-a-po" em vez de "sá... po". Nesse caso
                // pulamos a leitura de sílabas e só falamos a palavra.
                const temLetraSolta = c.silabas.some(
                  (s) => s.replace(/[^a-zA-ZÀ-ÿ]/g, "").length <= 1,
                );
                const silabasFala = temLetraSolta
                  ? ""
                  : c.silabas
                      .map((s) => s.toLowerCase())
                      .join("... ") + ".";
                speak(
                  [c.palavra + ".", silabasFala, c.frase]
                    .filter(Boolean)
                    .join(" "),
                );
              }}
              className={`rounded-2xl p-3 flex flex-col items-center gap-2 border-2 transition-all active:scale-95 ${
                aberto
                  ? "bg-white text-[#0d1f55] border-white scale-[1.02]"
                  : "bg-white/15 text-white border-white/20 hover:bg-white/25"
              }`}
            >
              {c.imagemUrl ? (
                <img
                  src={c.imagemUrl}
                  alt={c.palavra}
                  className={`w-20 h-20 object-contain drop-shadow transition-transform ${
                    aberto ? "animate-bounce" : ""
                  }`}
                  draggable={false}
                />
              ) : (
                <span className="text-5xl">{c.emoji ?? "📖"}</span>
              )}
              <span className="font-black text-base uppercase">
                {c.palavra}
              </span>
              {aberto && (
                <div className="w-full space-y-2 mt-1">
                  <div className="rounded-xl bg-[#4C9EFF]/20 border border-[#4C9EFF]/40 px-2 py-1 text-center">
                    <div className="text-[9px] uppercase tracking-widest font-black text-[#0d1f55]/70">
                      Sílabas
                    </div>
                    <div className="font-black text-sm text-[#0d1f55]">
                      {c.silabas.join(" - ")}
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#FDE047]/40 border border-[#FDE047]/60 px-2 py-1">
                    <div className="text-[9px] uppercase tracking-widest font-black text-[#0d1f55]/70">
                      Exemplo
                    </div>
                    <div className="text-xs font-black text-[#0d1f55] leading-tight">
                      “{c.frase}”
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-[10px] font-black text-[#0d1f55]/70">
                    <Volume2 className="h-3 w-3" /> Toque de novo pra ouvir
                  </div>
                </div>
              )}
              {!aberto && (
                <span className="text-[10px] font-black opacity-70 flex items-center gap-1">
                  <Volume2 className="h-3 w-3" /> Toque
                </span>
              )}
            </button>
          );
        })}
      </div>
    </Secao>
  );
}
