import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Play, Sparkles, ArrowLeft, ClipboardCheck } from "lucide-react";
import { ETAPAS } from "../data/etapas";
import { useProgressoAlfa } from "../hooks/useProgressoAlfa";
import { AtividadePlayer } from "./AtividadePlayer";
import { ScreeningInicial } from "./ScreeningInicial";
import { calcularNivelLeitor } from "../data/historias-graduadas";
import { useAdminMode } from "@/escola-brilha/admin-mode";
import {
  screeningFeito,
  marcarScreeningFeito,
  resetarScreening,
} from "../engine/screening";
import { setChildAtualSRS } from "../engine/srs";

interface Props {
  childId: string;
  childName?: string;
}

export function TrilhaAlfa({ childId, childName }: Props) {
  const {
    progresso,
    registrarAcerto,
    aplicarPosicaoInicial,
    etapaDesbloqueada,
    etapaConcluida,
  } = useProgressoAlfa(childId);
  const [admin] = useAdminMode();
  const [etapaAtivaId, setEtapaAtivaId] = useState<string | null>(null);
  const [screening, setScreening] = useState(false);
  const nivelLeitor = calcularNivelLeitor(progresso);

  useEffect(() => {
    setChildAtualSRS(childId);
    // Abre screening automaticamente na primeira entrada (progresso vazio + não feito).
    const semProgresso = Object.keys(progresso).length === 0;
    if (semProgresso && !screeningFeito(childId)) {
      const t = setTimeout(() => setScreening(true), 400);
      return () => clearTimeout(t);
    }
  }, [childId]); // eslint-disable-line react-hooks/exhaustive-deps

  const etapaAtiva = ETAPAS.find((e) => e.id === etapaAtivaId) ?? null;


  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-pink-50 to-white p-6">
      {/* Botão fixo de voltar — sempre visível */}
      <Link
        to="/neuro-treino"
        className="fixed top-4 left-4 z-40 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur shadow-lg border border-slate-200 text-slate-700 font-bold text-sm hover:bg-white hover:scale-105 transition-transform"
        aria-label="Voltar para Neuro Treino"
      >
        <ArrowLeft className="w-4 h-4" /> Voltar
      </Link>
      <div className="max-w-4xl mx-auto pt-10">

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
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <button
              onClick={() => {
                resetarScreening(childId);
                setScreening(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-300 text-slate-700 font-bold shadow-sm hover:bg-slate-50 text-xs"
              title="Refazer o teste inicial"
            >
              <ClipboardCheck className="w-4 h-4" /> Teste inicial
            </button>
          </div>
        </header>

        <div className="relative space-y-4">
          {ETAPAS.map((etapa, i) => {
            const desbloq = admin || etapaDesbloqueada(etapa);
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
                      {desbloq ? etapa.emoji : <span className="text-xl">🔒</span>}
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

      {screening && (
        <ScreeningInicial
          childId={childId}
          onFinish={(posicao) => {
            aplicarPosicaoInicial(posicao);
            marcarScreeningFeito(childId);
            setScreening(false);
          }}
          onSkip={() => {
            marcarScreeningFeito(childId);
            setScreening(false);
          }}
        />
      )}
    </div>
  );
}
