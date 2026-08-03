import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Check,
  ChevronRight,
  FileText,
  Focus,
  Lightbulb,
  ListOrdered,
  MessageSquare,
  PenTool,
  RotateCcw,
  Search,
  Sparkles,
  Target,
  Trophy,
  Volume2,
  VolumeX,
} from "lucide-react";

import type { AulaPortuguesV4 } from "../../types";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

type Momento = {
  n: number;
  rotulo: string;
  Icon: any;
  titulo: string;
  corpo: React.ReactNode;
  narracao?: string;
};

export function PlayerPortuguesTeen({
  aula,
  onConcluir,
}: {
  aula: AulaPortuguesV4;
  onConcluir: () => void;
}) {
  const [narrando, setNarrando] = useState<number | null>(null);
  const [audioLigado, setAudioLigado] = useState(true);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    return () => stopSpeaking();
  }, [aula.slug]);

  const toggleAudio = (n: number, texto?: string) => {
    if (narrando === n) {
      stopSpeaking();
      setNarrando(null);
    } else if (texto) {
      setNarrando(n);
      speakChunked(texto, { rate: 0.9, onEnd: () => setNarrando(null) });
    }
  };

  const momentos: Momento[] = [
    {
      n: 1,
      rotulo: "Briefing",
      Icon: FileText,
      titulo: aula.momento01_motivacao.titulo,
      corpo: (
        <p className="text-slate-200/90 leading-relaxed text-[15px]">
          {aula.momento01_motivacao.historia}
        </p>
      ),
      narracao: aula.momento01_motivacao.historia,
    },
    {
      n: 2,
      rotulo: "Foco linguístico",
      Icon: Focus,
      titulo: aula.momento_ensinoVisual?.titulo || "Análise Linguística",
      corpo: (
        <div className="space-y-4">
          <p className="text-slate-300 text-[14px] leading-relaxed italic">
            {aula.momento_ensinoVisual?.instrucao}
          </p>
          <div className="grid gap-4">
            {aula.momento_ensinoVisual?.blocos.map((bloco, idx) => (
              <div key={idx} className="rounded-lg border border-cyan-500/30 bg-cyan-500/5 p-4">
                {bloco.tipo === "regraOrtografica" && (
                  <>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-cyan-400 mb-2">{bloco.regra}</div>
                    <p className="text-slate-100 text-sm mb-3">{bloco.explicacao}</p>
                    <div className="space-y-2">
                      {bloco.exemplos.map((ex, i) => (
                        <div key={i} className="flex items-center gap-3 bg-slate-900/50 p-2 rounded">
                          <span className="text-cyan-300 font-mono text-lg">{ex.palavra}</span>
                          <span className="text-slate-400 text-xs">— {ex.motivo}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ),
      narracao: aula.momento_ensinoVisual?.blocos.map(b => b.tipo === "regraOrtografica" ? `${b.regra}: ${b.explicacao}` : "").join(" "),
    },
    {
      n: 3,
      rotulo: "Lupa de investigação",
      Icon: Search,
      titulo: "Curiosidades & Vocabulário",
      corpo: (
        <div className="space-y-4">
           {aula.momento03_vocabulario.cards.map((card, idx) => (
             <div key={idx} className="rounded-xl border border-amber-400/40 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950">
                    <Search className="h-4 w-4" strokeWidth={2.5} />
                  </div>
                  <div className="text-amber-300 font-serif text-[15px]">💡 Lupa do 6º Ano</div>
                </div>
                <div className="space-y-2">
                   <div className="text-amber-100 font-bold text-lg">{card.palavra}</div>
                   <p className="text-amber-50/90 text-sm leading-relaxed">{card.explicacao}</p>
                   <div className="text-amber-400/60 text-xs italic">Exemplo: "{card.exemplo}"</div>
                </div>
             </div>
           ))}
        </div>
      ),
      narracao: aula.momento03_vocabulario.cards.map(c => `${c.palavra}: ${c.explicacao}`).join(". "),
    },
    {
      n: 4,
      rotulo: "Laboratório de Leitura",
      Icon: BookOpen,
      titulo: aula.momento04_leituraGuiada.leitura.titulo || "Análise de Texto",
      corpo: (
        <div className="space-y-4">
          <p className="text-slate-400 text-xs uppercase tracking-widest">{aula.momento04_leituraGuiada.instrucao}</p>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 font-serif text-lg leading-relaxed text-slate-100">
            {aula.momento04_leituraGuiada.leitura.paragrafos.map((p, i) => (
              <p key={i} className="mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      ),
      narracao: aula.momento04_leituraGuiada.leitura.paragrafos.join(" "),
    },
    {
      n: 5,
      rotulo: "Oficina de Escrita",
      Icon: PenTool,
      titulo: aula.momento_escrita?.titulo || "Produção Textual",
      corpo: (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
           <div className="flex items-center gap-2 mb-4">
             <PenTool className="h-5 w-5 text-emerald-400" />
             <span className="text-emerald-300 font-medium">{aula.momento_escrita?.instrucao}</span>
           </div>
           {aula.momento_escrita?.blocos.map((bloco, idx) => (
             <div key={idx} className="space-y-4">
                {bloco.tipo === "escritaReal" && (
                  <>
                    <div className="text-slate-200 text-base">{bloco.comando}</div>
                    <div className="grid gap-2">
                      {bloco.checklist?.map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                           <Check className="h-3 w-3 text-emerald-500" />
                           {item}
                        </div>
                      ))}
                    </div>
                  </>
                )}
             </div>
           ))}
        </div>
      ),
      narracao: aula.momento_escrita?.blocos.map(b => b.tipo === "escritaReal" ? b.comando : "").join(" "),
    },
    {
      n: 6,
      rotulo: "Check acadêmico",
      Icon: Target,
      titulo: "Avaliação de Competências",
      corpo: (
        <div className="space-y-6">
           {aula.momento10_avaliacao.perguntas.map((pergunta, pIdx) => (
             <div key={pIdx} className="p-4 bg-slate-900/80 rounded-lg border border-slate-700">
                <p className="text-slate-200 mb-4">{pergunta.pergunta}</p>
                <div className="grid gap-2">
                   {pergunta.opcoes.map((opt, i) => (
                     <button key={i} className="text-left p-3 rounded border border-slate-700 hover:border-cyan-500 hover:bg-cyan-500/10 transition text-sm text-slate-300">
                       {opt}
                     </button>
                   ))}
                </div>
             </div>
           ))}
        </div>
      ),
      narracao: aula.momento10_avaliacao.perguntas[0].pergunta,
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pb-20 font-sans selection:bg-cyan-500/30">
      {/* Header técnico */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-cyan-600 rounded flex items-center justify-center font-bold text-slate-950">6º</div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-white uppercase">{aula.titulo}</h1>
            <div className="text-[10px] text-slate-400 font-mono tracking-wider">MÓDULO DE LÍNGUA PORTUGUESA · FUNDAMENTAL 2</div>
          </div>
        </div>
        <button onClick={() => setAudioLigado(!audioLigado)} className="p-2 text-slate-400 hover:text-white transition">
           {audioLigado ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
        </button>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-12">
        {momentos.map((m) => (
          <section key={m.n} className="relative pl-10 group">
            {/* Linha do tempo */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-800 group-last:bg-transparent" />
            <div className="absolute left-0 top-0 h-8 w-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:border-cyan-500 group-hover:text-cyan-400 transition-colors">
              <m.Icon className="h-4 w-4" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-bold">{m.rotulo}</span>
                {m.narracao && audioLigado && (
                   <button 
                    onClick={() => toggleAudio(m.n, m.narracao)}
                    className={`p-1 rounded ${narrando === m.n ? "bg-cyan-500 text-slate-950" : "text-slate-500 hover:text-white"}`}
                   >
                     <Volume2 className="h-3 w-3" />
                   </button>
                )}
              </div>
              <h2 className="text-xl font-serif text-white">{m.titulo}</h2>
              <div className="pt-2">{m.corpo}</div>
            </div>
          </section>
        ))}

        <div className="pt-10 flex flex-col items-center gap-4">
           <button 
            onClick={onConcluir}
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-cyan-900/20"
           >
             <Trophy className="h-5 w-5" />
             CONCLUIR MISSÃO ACADÊMICA
             <ChevronRight className="h-5 w-5" />
           </button>
           <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest">
             Registro BNCC: {aula.bncc.join(", ")} · Escola Brilha v4.1
           </p>
        </div>
      </main>
    </div>
  );
}
