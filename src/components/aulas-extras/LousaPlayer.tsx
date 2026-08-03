import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BotaoOuvirEnunciado } from "../../escola-brilha/curso-v4/player-portugues/blocos/BotaoOuvirEnunciado";
import { cn } from "@/utils/utils";
import { ChevronRight, ChevronLeft, Download, Zap, Info, Play, CheckCircle2, XCircle } from "lucide-react";
import type { AulaExtraLousa, BlocoLousa } from "../../escola-brilha/curso-v4/portugues-aulas-extras/types-extras";

/**
 * LousaPlayer: Interface de "Lousa Escolar Moderna" para as Aulas Extras°.
 * Focado em visual de quadro negro/verde com escrita simulada e cores fixas.
 */
export function LousaPlayer({ aula, onConcluir }: { aula: AulaExtraLousa; onConcluir?: () => void }) {
  const [cenaIdx, setCenaIdx] = useState(0);
  const [passoIdx, setPassoIdx] = useState(-1); // -1 para estado inicial (só título)
  const cena = aula.cenasLousa[cenaIdx];
  const [mostrarMacete, setMostrarMacete] = useState(false);
  const [notaPai, setNotaPai] = useState<string | null>(null);
  const [quizRespondido, setQuizRespondido] = useState<number | null>(null);

  const prox = () => {
    if (passoIdx < cena.blocos.length - 1) {
      setPassoIdx(passoIdx + 1);
    } else if (cenaIdx < aula.cenasLousa.length - 1) {
      setCenaIdx(cenaIdx + 1);
      setPassoIdx(-1);
      setQuizRespondido(null);
    } else {
      onConcluir?.();
    }
  };

  const voltar = () => {
    if (passoIdx >= 0) {
      setPassoIdx(passoIdx - 1);
    } else if (cenaIdx > 0) {
      setCenaIdx(cenaIdx - 1);
      setPassoIdx(aula.cenasLousa[cenaIdx - 1].blocos.length - 1);
    }
  };

  const corParaFundo = (cor: string) => {
    switch (cor) {
      case "verde": return "bg-emerald-950/40 border-emerald-500/50 text-emerald-100";
      case "laranja": return "bg-orange-950/40 border-orange-500/50 text-orange-100";
      case "azul": return "bg-blue-950/40 border-blue-500/50 text-blue-100";
      default: return "bg-slate-800/40 border-slate-500/50 text-slate-100";
    }
  };

  const corParaTexto = (cor: string) => {
    switch (cor) {
      case "verde": return "text-emerald-400";
      case "laranja": return "text-orange-400";
      case "azul": return "text-blue-400";
      default: return "text-slate-100";
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-950 text-white font-sans overflow-hidden">
      {/* Header do Player */}
      <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/50">
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-lg border-2",
            aula.fase === "fase1" ? "bg-rose-500 border-rose-300" : 
            aula.fase === "fase2" ? "bg-amber-500 border-amber-300" : "bg-blue-500 border-blue-300"
          )}>
            {aula.iconeTrilha}
          </div>
          <div>
            <h1 className="text-sm font-black uppercase tracking-widest">{aula.titulo}</h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase">{cena.tituloLousa}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {cena.modoSocorro && (
            <button 
              onClick={() => setMostrarMacete(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/50 text-rose-400 text-[10px] font-black uppercase tracking-tighter hover:bg-rose-500/20 transition"
            >
              <Zap size={14} fill="currentColor" />
              Socorro, Prova Amanhã!
            </button>
          )}
          <button className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300">
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* Lousa Virtual */}
      <div className="flex-1 relative p-4 md:p-8 overflow-y-auto">
        <div 
          className="min-h-full rounded-3xl border-8 border-slate-800 shadow-2xl relative overflow-hidden"
          style={{ 
            background: "radial-gradient(circle at center, #1a2e26 0%, #0d1a15 100%)",
            boxShadow: "inset 0 0 100px rgba(0,0,0,0.5)"
          }}
        >
          {/* Textura de giz/lousa */}
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-chalkboard.png')]" />
          
          <div className="relative z-10 p-6 md:p-10 space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-4xl font-black text-white/90 border-b-2 border-white/20 pb-4 inline-block italic"
              style={{ fontFamily: "'Permanent Marker', cursive, sans-serif" }}
            >
              {cena.tituloLousa}
            </motion.h2>

            <div className="space-y-4">
              {cena.blocos.map((bloco: BlocoLousa, idx: number) => (
                <AnimatePresence key={bloco.id}>
                  {idx <= passoIdx && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={cn(
                        "relative group p-4 rounded-xl border-l-4 shadow-lg transition-all",
                        corParaFundo(bloco.cor)
                      )}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-1">
                          {bloco.tipo === "formula" && (
                            <div className="text-[10px] font-black uppercase opacity-60 mb-1">Regra / Fórmula</div>
                          )}
                          <p className={cn(
                            "text-lg md:text-xl font-bold leading-tight",
                            bloco.tipo === "formula" ? "font-mono" : ""
                          )}>
                            {bloco.conteudo}
                          </p>
                        </div>
                        
                        {bloco.tipo === "nota-pais" && (
                          <button 
                            onClick={() => setNotaPai(bloco.conteudo)}
                            className="shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/50 flex items-center justify-center text-blue-400 hover:bg-blue-500/40 transition"
                            title="Nota para os Pais"
                          >
                            <Info size={16} />
                          </button>
                        )}
                        
                        <div className="shrink-0 opacity-0 group-hover:opacity-100 transition">
                          <BotaoOuvirEnunciado 
                            texto={bloco.falaProfessor} 
                            rotulo="Ouvir"
                            className="bg-white/10 border-white/20 text-white"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>

            {/* Desafio Relâmpago no final da cena */}
            {passoIdx === cena.blocos.length - 1 && cena.desafioRelampago && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 p-6 rounded-2xl bg-white/5 border-2 border-dashed border-white/20"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-white shadow-lg">
                    <Zap size={18} fill="currentColor" />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight">Desafio Relâmpago!</h3>
                </div>
                
                <p className="text-xl font-bold mb-6">{cena.desafioRelampago.pergunta}</p>
                
                <div className="grid gap-3">
                  {cena.desafioRelampago.opcoes.map((opcao: string, i: number) => {
                    const respondido = quizRespondido !== null;
                    const isCorreta = i === cena.desafioRelampago?.correta;
                    const selecionada = quizRespondido === i;
                    
                    return (
                      <button
                        key={i}
                        disabled={respondido}
                        onClick={() => setQuizRespondido(i)}
                        className={cn(
                          "w-full p-4 rounded-xl border-2 text-left font-bold transition-all flex items-center justify-between",
                          !respondido ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30" :
                          isCorreta ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" :
                          selecionada ? "bg-rose-500/20 border-rose-500 text-rose-400" : "bg-white/5 border-white/10 opacity-50"
                        )}
                      >
                        <span>{opcao}</span>
                        {respondido && isCorreta && <CheckCircle2 size={20} />}
                        {respondido && selecionada && !isCorreta && <XCircle size={20} />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Footer / Controles */}
      <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
        <button 
          onClick={voltar}
          disabled={cenaIdx === 0 && passoIdx === -1}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-800 text-slate-300 font-bold hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none transition"
        >
          <ChevronLeft size={20} />
          Voltar
        </button>

        <div className="flex gap-2">
          {aula.cenasLousa.map((_: any, i: number) => (
            <div 
              key={i} 
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                i === cenaIdx ? "bg-cyan-400 w-6" : i < cenaIdx ? "bg-cyan-400/40" : "bg-slate-700"
              )} 
            />
          ))}
        </div>

        <button 
          onClick={prox}
          className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-cyan-500 text-slate-900 font-black hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95"
        >
          {passoIdx === cena.blocos.length - 1 && cenaIdx === aula.cenasLousa.length - 1 ? "Concluir" : "Próximo"}
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Modal Modo Socorro */}
      <AnimatePresence>
        {mostrarMacete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setMostrarMacete(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-slate-900 border-2 border-rose-500/50 rounded-[2.5rem] p-8 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-rose-500 flex items-center justify-center text-white shadow-lg">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-rose-400">Modo Socorro, Prova Amanhã!</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase">Macete direto ao ponto</p>
                </div>
              </div>
              
              <div className="bg-rose-500/10 border-2 border-rose-500/20 rounded-2xl p-6 mb-6">
                <h4 className="text-lg font-black text-rose-300 mb-2">{cena.modoSocorro?.titulo}</h4>
                <p className="text-rose-100 font-bold italic leading-relaxed">
                  "{cena.modoSocorro?.macete}"
                </p>
              </div>
              
              <button 
                onClick={() => setMostrarMacete(false)}
                className="w-full py-4 rounded-2xl bg-rose-500 text-white font-black hover:bg-rose-600 transition shadow-lg"
              >
                Entendi, agora eu mato a prova! 🚀
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal Nota para os Pais */}
      <AnimatePresence>
        {notaPai && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setNotaPai(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-slate-900 border-2 border-blue-500/50 rounded-[2.5rem] p-8 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg">
                  <Info size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-blue-400">Nota para os Pais</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase">Como ajudar seu filho hoje</p>
                </div>
              </div>
              
              <div className="bg-blue-500/10 border-2 border-blue-500/20 rounded-2xl p-6 mb-6">
                <p className="text-blue-100 font-bold leading-relaxed">
                  {notaPai}
                </p>
              </div>
              
              <button 
                onClick={() => setNotaPai(null)}
                className="w-full py-4 rounded-2xl bg-blue-500 text-white font-black hover:bg-blue-600 transition shadow-lg"
              >
                Obrigado, vou ajudar ele(a)! 👨‍👩‍👧
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
