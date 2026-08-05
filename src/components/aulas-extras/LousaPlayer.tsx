import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BotaoOuvirEnunciado } from "../../escola-brilha/curso-v4/player-portugues/blocos/BotaoOuvirEnunciado";
import { useFalaAutomatica } from "../../escola-brilha/curso-v4/player-portugues/audio-prefs";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/utils/utils";
import { ChevronRight, ChevronLeft, Download, Zap, Info, Play, CheckCircle2, XCircle } from "lucide-react";
import type { AulaExtraLousa, BlocoLousa } from "../../escola-brilha/curso-v4/portugues-aulas-extras/types-extras";

/**
 * LousaPlayer: Interface de "Lousa Escolar Moderna" para as Aulas Extras°.
 * Focado em visual de quadro negro/verde com escrita simulada e cores fixas.
 */
export function LousaPlayer({ aula, onConcluir }: { aula: AulaExtraLousa; onConcluir?: () => void }) {
  const [cenaIdx, setCenaIdx] = useState(0);
  const cena = aula.cenasLousa[cenaIdx];
  const [mostrarMacete, setMostrarMacete] = useState(false);
  const [notaPai, setNotaPai] = useState<string | null>(null);
  const [quizRespondido, setQuizRespondido] = useState<number | null>(null);

  // Sistema de Narrativa Sequencial Automática
  const [blocoFalandoIdx, setBlocoFalandoIdx] = useState(-1);
  const falaCompletaCena = useMemo(() => {
    return cena.blocos.map(b => b.falaProfessor).filter(Boolean).join(". ");
  }, [cena]);

  const prox = () => {
    if (cenaIdx < aula.cenasLousa.length - 1) {
      setCenaIdx(cenaIdx + 1);
      setQuizRespondido(null);
      setBlocoFalandoIdx(-1);
    } else {
      onConcluir?.();
    }
  };

  const voltar = () => {
    if (cenaIdx > 0) {
      setCenaIdx(cenaIdx - 1);
      setQuizRespondido(null);
      setBlocoFalandoIdx(-1);
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
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-black uppercase tracking-widest">{aula.titulo}</h1>
              {aula.difficulty && (
                <span className={cn(
                  "text-[8px] font-black uppercase px-2 py-0.5 rounded-full border",
                  aula.difficulty === "facil" ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400" :
                  aula.difficulty === "medio" ? "bg-amber-500/20 border-amber-500/50 text-amber-400" :
                  "bg-rose-500/20 border-rose-500/50 text-rose-400"
                )}>
                  {aula.difficulty === "facil" ? "🟢 Fácil" : aula.difficulty === "medio" ? "🟡 Médio" : "🔴 Desafio"}
                </span>
              )}
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase">{cena.tituloLousa}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {cena.modoSocorro && (
            <button 
              onClick={() => setMostrarMacete(true)}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/50 text-rose-400 text-[10px] font-black uppercase tracking-tighter hover:bg-rose-500/20 transition"
            >
              <Zap size={14} fill="currentColor" />
              Socorro, Prova Amanhã!
            </button>
          )}

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/50 border border-slate-700">
            <BotaoFalaAlternar />
          </div>

          <button 
            onClick={async () => {
              const { default: jsPDF } = await import("jspdf");
              const doc = new jsPDF();
              
              // Estilo do PDF
              doc.setFillColor(13, 26, 21); // Verde Escuro Lousa
              doc.rect(0, 0, 210, 297, "F");
              
              doc.setTextColor(245, 158, 11); // Amarelo/Âmbar
              doc.setFontSize(22);
              doc.text("RESUMO: " + (aula.titulo || ""), 20, 30);
              
              doc.setDrawColor(255, 255, 255, 0.2);
              doc.line(20, 35, 190, 35);
              
              let y = 50;
              aula.cenasLousa?.forEach((cena, i) => {
                if (y > 250) { doc.addPage(); doc.setFillColor(13, 26, 21); doc.rect(0, 0, 210, 297, "F"); y = 30; }
                
                doc.setTextColor(245, 158, 11);
                doc.setFontSize(16);
                doc.text(`${i + 1}. ${cena.tituloLousa}`, 20, y);
                y += 10;
                
                cena.blocos.forEach(bloco => {
                  if (y > 270) { doc.addPage(); doc.setFillColor(13, 26, 21); doc.rect(0, 0, 210, 297, "F"); y = 30; }
                  
                  if (bloco.tipo === "nota-pais") {
                    doc.setFillColor(59, 130, 246, 0.1);
                    doc.rect(20, y - 5, 170, 15, "F");
                    doc.setTextColor(147, 197, 253);
                    doc.setFontSize(10);
                    doc.text("Dica para os Pais: " + bloco.conteudo, 25, y + 2, { maxWidth: 160 });
                    y += 20;
                  } else {
                    doc.setTextColor(255, 255, 255);
                    doc.setFontSize(12);
                    doc.text(bloco.conteudo, 25, y, { maxWidth: 160 });
                    y += 10 + (bloco.conteudo.split('\n').length * 5);
                  }
                });
                y += 10;
              });
              
              doc.save(`Resumo-Lousa-\${aula.slug}.pdf`);
            }}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Baixar Resumo em PDF"
          >
            <Download size={18} />
          </button>

        </div>
      </div>

      {/* Lousa Virtual */}
      <div className="flex-1 relative p-4 md:p-8 overflow-y-auto">
        <div 
          className="min-h-full rounded-[30px] border-[4px] md:border-[8px] border-slate-800 shadow-2xl relative overflow-hidden max-w-4xl mx-auto"
          style={{ 
            background: "radial-gradient(circle at center, #1a2e26 0%, #0d1a15 100%)",
            boxShadow: "inset 0 0 100px rgba(0,0,0,0.5)"
          }}
        >
          {/* Textura de giz/lousa */}
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-chalkboard.png')]" />
          
          <div className="relative z-10 p-6 md:p-14 space-y-8">
            <div className="flex items-center justify-between border-b-2 border-white/20 pb-4 mb-4">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                key={`title-${cenaIdx}`}
                className="text-xl sm:text-2xl md:text-4xl font-black text-white/90 italic"
                style={{ fontFamily: "'Permanent Marker', cursive, sans-serif" }}
              >
                {cena.tituloLousa}
              </motion.h2>

              <BotaoOuvirEnunciado 
                texto={falaCompletaCena}
                rotulo="SINCRONIZAR ÁUDIO COM TEXTO"
                auto={true}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>

            <div className="space-y-4">
              {cena.blocos.map((bloco: BlocoLousa) => (
                <AnimatePresence key={bloco.id}>
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
                          "text-lg sm:text-xl md:text-3xl font-bold leading-tight",
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
                    </div>
                  </motion.div>
                </AnimatePresence>
              ))}
            </div>

            {/* Desafio Relâmpago no final da cena */}
            {cena.desafioRelampago && (
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
          disabled={cenaIdx === 0}
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
          {cenaIdx === aula.cenasLousa.length - 1 ? "Concluir" : "Próximo"}
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

function BotaoFalaAlternar() {
  const [ativa, setAtiva] = useFalaAutomatica();
  return (
    <button
      onClick={() => setAtiva(!ativa)}
      className={cn(
        "flex items-center gap-2 text-[10px] font-black uppercase transition-all",
        ativa ? "text-cyan-400" : "text-slate-500"
      )}
    >
      {ativa ? <Volume2 size={16} /> : <VolumeX size={16} />}
      <span className="hidden sm:inline">{ativa ? "Fala Ativa" : "Fala Muda"}</span>
    </button>
  );
}
