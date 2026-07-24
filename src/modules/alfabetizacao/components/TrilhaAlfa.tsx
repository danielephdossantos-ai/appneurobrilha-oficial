import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Play, Sparkles, BookOpen } from "lucide-react";
import { ETAPAS } from "../data/etapas";
import { useProgressoAlfa } from "../hooks/useProgressoAlfa";
import { AtividadePlayer } from "./AtividadePlayer";
import { calcularNivelLeitor } from "../data/historias-graduadas";
import { useAdminMode } from "@/escola-brilha/admin-mode";

interface Props {
  childId: string;
  childName?: string;
}

export function TrilhaAlfa({ childId, childName }: Props) {
  const { progresso, registrarAcerto, etapaDesbloqueada, etapaConcluida } =
    useProgressoAlfa(childId);
  const [admin] = useAdminMode();
  const [etapaAtivaId, setEtapaAtivaId] = useState<string | null>(null);
  const nivelLeitor = calcularNivelLeitor(progresso);

  const etapaAtiva = ETAPAS.find((e) => e.id === etapaAtivaId) ?? null;


  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-pink-50 to-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white shadow text-sm font-bold text-indigo-600 mb-3">
            <Sparkles className="w-4 h-4" /> Alfabetização Brilha
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800">
            Aventura das Palavras
          </h1>
          {childName && (
            <p className="text-slate-500 mt-1">Vamos lá, {childName}! 🌟</p>
          )}
          <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto">
            Siga a trilha pelos castelos. Cada castelo só destrava depois que você terminar o
            anterior — assim seu cérebro vira um craque das letras!
          </p>
          <Link
            to="/biblioteca-alfa"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white font-bold shadow hover:scale-105 transition-transform text-sm"
          >
            <BookOpen className="w-4 h-4" /> Biblioteca (Nível leitor {nivelLeitor})
          </Link>
        </header>

        <div className="relative space-y-4">
          {ETAPAS.map((etapa, i) => {
            const desbloq = etapaDesbloqueada(etapa);
            const concluida = etapaConcluida(etapa);
            const acertos = progresso[etapa.id] ?? 0;
            const pct = Math.min(100, Math.round((acertos / etapa.alvo) * 100));
            const ladoEsq = i % 2 === 0;

            return (
              <div
                key={etapa.id}
                className={`flex ${ladoEsq ? "justify-start" : "justify-end"}`}
              >
                <button
                  disabled={!desbloq}
                  onClick={() => desbloq && setEtapaAtivaId(etapa.id)}
                  className={`w-full sm:w-[85%] text-left rounded-3xl p-5 shadow-lg transition-all ${
                    desbloq
                      ? `bg-gradient-to-br ${etapa.cor} text-white hover:scale-[1.02]`
                      : "bg-slate-200 text-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${
                        desbloq ? "bg-white/30" : "bg-slate-300"
                      }`}
                    >
                      {desbloq ? etapa.emoji : <Lock className="w-7 h-7" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                          Etapa {etapa.ordem}
                        </span>
                        {concluida && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/30 text-[10px] font-bold">
                            <Check className="w-3 h-3" /> COMPLETA
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl font-black mt-0.5">{etapa.titulo}</h2>
                      <p className="text-xs opacity-90 mt-0.5">{etapa.descricao}</p>
                      {desbloq && (
                        <div className="mt-2">
                          <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-white transition-all"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <div className="text-[10px] font-bold mt-1 opacity-90">
                            {acertos} / {etapa.alvo}
                          </div>
                        </div>
                      )}
                    </div>
                    {desbloq && (
                      <div className="w-12 h-12 rounded-full bg-white text-indigo-600 flex items-center justify-center shadow">
                        <Play className="w-6 h-6 ml-0.5" />
                      </div>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {etapaAtiva && (
        <AtividadePlayer
          etapa={etapaAtiva}
          acertosAtuais={progresso[etapaAtiva.id] ?? 0}
          childId={childId}
          onAcerto={() => registrarAcerto(etapaAtiva.id)}
          onSair={() => setEtapaAtivaId(null)}
        />
      )}
    </div>
  );
}
