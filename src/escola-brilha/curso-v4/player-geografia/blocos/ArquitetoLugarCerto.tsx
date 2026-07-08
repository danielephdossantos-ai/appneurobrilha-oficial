import { useState } from "react";
import type { ArquitetoLugarCertoData } from "../../types";
import { HardHat, Check, X, Trophy, ChevronRight } from "lucide-react";

/**
 * Arquiteto do Lugar Certo (M9): minijogo em cenários. A criança lê o
 * desafio, faz 3 escolhas em sequência (material, formato, extra). Cada
 * escolha dá feedback imediato do porquê. No fim do cenário: parabéns +
 * pode pular pro próximo. Não avança pra próxima pergunta sem acertar.
 */
export function ArquitetoLugarCerto({
  data,
}: {
  data: ArquitetoLugarCertoData;
}) {
  const [cenarioIdx, setCenarioIdx] = useState(0);
  const [escolhaIdx, setEscolhaIdx] = useState(0);
  const [tentativa, setTentativa] = useState<number | null>(null);
  const [feitos, setFeitos] = useState<Set<string>>(new Set());

  const cenario = data.cenarios[cenarioIdx];
  const escolha = cenario.escolhas[escolhaIdx];
  const totalEscolhas = cenario.escolhas.length;
  const completouCenario = escolhaIdx >= totalEscolhas;
  const acertouAtual =
    tentativa !== null && escolha?.opcoes[tentativa]?.correta;

  const proxEscolha = () => {
    if (!acertouAtual) return;
    setTentativa(null);
    setEscolhaIdx((i) => i + 1);
  };

  const proxCenario = () => {
    setFeitos((s) => new Set(s).add(cenario.id));
    setCenarioIdx((i) => (i + 1) % data.cenarios.length);
    setEscolhaIdx(0);
    setTentativa(null);
  };

  const irPara = (i: number) => {
    setCenarioIdx(i);
    setEscolhaIdx(0);
    setTentativa(null);
  };

  return (
    <div className="rounded-3xl overflow-hidden border-2 border-emerald-400/30 bg-slate-950">
      <div className="flex items-center gap-3 px-4 py-2.5 bg-emerald-950/60 border-b border-emerald-400/20">
        <HardHat className="w-5 h-5 text-emerald-300" />
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-[0.25em] text-emerald-300 font-bold">
            Arquiteto do Lugar Certo
          </div>
          <div className="text-white text-sm font-bold truncate">
            Cenário {cenarioIdx + 1} de {data.cenarios.length}
          </div>
        </div>
        <div className="text-xs font-mono text-emerald-300 shrink-0">
          {completouCenario ? totalEscolhas : escolhaIdx}/{totalEscolhas}
        </div>
      </div>

      {/* Seletor de cenários */}
      <div className="flex gap-2 px-4 pt-3 overflow-x-auto">
        {data.cenarios.map((c, i) => {
          const ativo = i === cenarioIdx;
          const done = feitos.has(c.id);
          return (
            <button
              key={c.id}
              onClick={() => irPara(i)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border-2 transition ${
                ativo
                  ? "bg-emerald-400 text-slate-950 border-emerald-200"
                  : done
                    ? "bg-emerald-500/20 border-emerald-400/40 text-emerald-100"
                    : "bg-white/5 border-white/15 text-white/70"
              }`}
            >
              {done && "✓ "}
              Cenário {i + 1}
            </button>
          );
        })}
      </div>

      <div className="p-4 space-y-4">
        <p className="text-sm text-emerald-100/90 italic">{data.instrucao}</p>

        {/* Card de contexto */}
        <div className="rounded-2xl bg-gradient-to-br from-emerald-950/60 to-slate-900/60 border border-emerald-400/30 p-4">
          <div className="flex gap-2 text-3xl mb-2">
            {cenario.icones.map((ic, i) => (
              <span key={i}>{ic}</span>
            ))}
          </div>
          <p className="text-white text-sm leading-relaxed">
            {cenario.contexto}
          </p>
        </div>

        {/* Pergunta atual OU parabens */}
        {!completouCenario ? (
          <div className="rounded-2xl border-2 border-emerald-400/40 bg-slate-900/60 overflow-hidden">
            <div className="px-4 py-2.5 bg-emerald-500/15 border-b border-emerald-400/30">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-200">
                Escolha {escolhaIdx + 1}
              </div>
              <div className="text-white text-sm font-bold">
                {escolha.pergunta}
              </div>
            </div>
            <div className="p-3 space-y-2">
              {escolha.opcoes.map((o, i) => {
                const tent = tentativa === i;
                let cls =
                  "bg-white/5 border-white/15 text-white hover:bg-white/10";
                if (tent) {
                  cls = o.correta
                    ? "bg-emerald-500/25 border-emerald-300 text-white"
                    : "bg-rose-500/20 border-rose-300/70 text-white";
                } else if (
                  tentativa !== null &&
                  escolha.opcoes[tentativa].correta &&
                  o.correta
                ) {
                  cls = "bg-emerald-500/15 border-emerald-400/30 text-white/70";
                }
                return (
                  <button
                    key={i}
                    disabled={acertouAtual}
                    onClick={() => setTentativa(i)}
                    className={`w-full flex items-center gap-3 text-left px-3 py-2.5 rounded-xl border-2 text-sm font-bold transition ${cls}`}
                  >
                    <span className="text-2xl leading-none shrink-0">
                      {o.icone}
                    </span>
                    <span className="flex-1">{o.rotulo}</span>
                    {tent && o.correta && (
                      <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                    )}
                    {tent && !o.correta && (
                      <X className="w-4 h-4 text-rose-300 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {tentativa !== null && (
              <div
                className={`mx-3 mb-3 rounded-xl border-2 p-3 ${
                  acertouAtual
                    ? "bg-emerald-500/15 border-emerald-400/50"
                    : "bg-amber-500/15 border-amber-300/50"
                }`}
              >
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1 text-emerald-200">
                  {acertouAtual ? "🎯 Boa escolha!" : "🤔 Não é essa — pensa comigo:"}
                </div>
                <p className="text-white text-sm leading-relaxed">
                  {escolha.opcoes[tentativa].feedback}
                </p>
                {acertouAtual && (
                  <button
                    onClick={proxEscolha}
                    className="mt-2 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-400 text-slate-950 text-xs font-black hover:bg-emerald-300"
                  >
                    {escolhaIdx + 1 < totalEscolhas
                      ? "Próxima escolha"
                      : "Ver casa pronta"}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
                {!acertouAtual && (
                  <button
                    onClick={() => setTentativa(null)}
                    className="mt-2 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white text-xs font-bold hover:bg-white/15"
                  >
                    Tentar de novo
                  </button>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-emerald-400/60 bg-gradient-to-br from-emerald-500/25 to-emerald-700/20 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-amber-300" />
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-200">
                Casa construída!
              </div>
            </div>
            <p className="text-white text-sm leading-relaxed mb-3">
              {cenario.parabens}
            </p>
            <button
              onClick={proxCenario}
              className="w-full px-4 py-3 rounded-xl bg-emerald-400 text-slate-950 font-black text-sm hover:bg-emerald-300 transition inline-flex items-center justify-center gap-2"
            >
              {feitos.size + 1 >= data.cenarios.length
                ? "🎉 Recomeçar aventura"
                : "Próximo cenário"}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
