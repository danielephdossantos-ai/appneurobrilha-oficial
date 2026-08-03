import { useContext, useEffect, useState } from "react";
import { KidsCtx } from "../PlayerPortuguesV4";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

interface LousaProfessorProps {
  titulo: string;
  conteudo: string; // Markdown-ish: # Titulo, - Itens, **Bold**
  explicacaoVoz?: string;
}

export function LousaProfessor({ titulo, conteudo, explicacaoVoz }: LousaProfessorProps) {
  const skin = useContext(KidsCtx);
  const [escrevendo, setEscrevendo] = useState(true);
  const [textoExibido, setTextoExibido] = useState("");
  
  // Efeito de "professor escrevendo" (typewriter)
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTextoExibido(conteudo.slice(0, i));
      i++;
      if (i > conteudo.length) {
        clearInterval(interval);
        setEscrevendo(false);
      }
    }, 30); // Velocidade da escrita
    return () => clearInterval(interval);
  }, [conteudo]);

  const falar = () => {
    stopSpeaking();
    speakChunked(explicacaoVoz || conteudo.replace(/[#*-]/g, ""));
  };

  return (
    <div className="relative my-8 overflow-hidden rounded-xl border-8 border-[#5d4037] bg-[#1b3022] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:rotate-1">
      {/* Textura de lousa de giz */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
           style={{ 
             backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
             backgroundSize: '100px 100px',
             filter: 'contrast(150%) brightness(50%)' 
           }}>
      </div>
      
      {/* Giz e Apagador decorativos */}
      <div className="absolute bottom-2 right-12 h-2 w-8 rounded-sm bg-white/90 shadow-sm rotate-12"></div>
      <div className="absolute bottom-2 right-4 h-4 w-6 rounded-md bg-[#8d6e63] shadow-md -rotate-6"></div>

      <div className="relative z-10 font-handwriting">
        <h2 className="mb-6 border-b-2 border-dashed border-white/30 pb-2 text-2xl font-bold tracking-tight text-yellow-100/90 italic">
          {titulo}
        </h2>
        
        <div className="min-h-[200px] whitespace-pre-wrap text-xl leading-relaxed text-white/90 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          {textoExibido}
          {escrevendo && <span className="ml-1 inline-block h-6 w-1 animate-pulse bg-white/70"></span>}
        </div>

        {!escrevendo && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={falar}
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/80 backdrop-blur-sm transition hover:bg-white/20 active:scale-95 border border-white/20"
            >
              <span>🔊 Ouvir Explicação do Professor</span>
            </button>
          </div>
        )}
      </div>

      {/* Brilho da lousa */}
      <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
    </div>
  );
}
