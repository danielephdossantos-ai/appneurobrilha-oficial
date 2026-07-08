import { useState } from "react";
import type { ModoInvestigadorData } from "../../types";
import { FotoLugar } from "./FotoLugar";
import { Radar, ScanLine, HelpCircle, Check, X, Lightbulb } from "lucide-react";

/**
 * Fluxo novo (pedido do usuário):
 *   1. Foto grande com pins. A criança TOCA cada pin — aparece só o rótulo
 *      (ex.: "📍 construída próxima ao rio"). Nada de texto longo aqui.
 *   2. Quando todos os pins foram descobertos, aparece a PERGUNTA
 *      (ex.: "Por que essa casa foi construída acima da água?").
 *   3. A criança escolhe uma hipótese. Só DEPOIS da escolha aparece a
 *      explicação do Brilha (fechamento) — verde se acertou, âmbar se errou.
 */
export function ModoInvestigador({ data }: { data: ModoInvestigadorData }) {
  const [reveladas, setReveladas] = useState<Set<number>>(new Set());
  const [selecionada, setSelecionada] = useState<number | null>(null);
  const [escolha, setEscolha] = useState<number | null>(null);
  const total = data.pistas.length;
  const completo = reveladas.size === total;
  const respondeu = escolha !== null;
  const acertou = escolha === data.correta;

  return (
    <div
      id={`inv-${data.lugarId}`}
      className="scroll-mt-24 rounded-3xl overflow-hidden border-2 border-emerald-400/30 bg-slate-950"
    >
      {/* Header do scanner */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-emerald-950/60 border-b border-emerald-400/20">
        <Radar className="w-5 h-5 text-emerald-300 animate-pulse" />
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-[0.25em] text-emerald-300 font-bold">
            GeoScanner ativo
          </div>
          <div className="text-white text-sm font-bold">
            {data.emoji} {data.nomeLugar}
          </div>
        </div>
        <div className="text-xs font-mono text-emerald-300">
          {reveladas.size}/{total}
        </div>
      </div>

      {/* Foto + pins */}
      <div className="relative aspect-[4/3] md:aspect-[16/10] bg-black">
        <FotoLugar
          imagemUrl={data.imagemUrl}
          corPlaceholder={data.corPlaceholder}
          emoji={data.emoji}
          nome={data.nomeLugar}
        />
        {!completo && (
          <div
            className="absolute inset-x-0 h-8 pointer-events-none opacity-70"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(52,211,153,.45), transparent)",
              animation: "geo-scan 3.6s linear infinite",
            }}
          />
        )}
        <style>{`
          @keyframes geo-scan {
            0%   { transform: translateY(-32px); }
            100% { transform: translateY(100%); }
          }
        `}</style>

        {data.pistas.map((p, i) => {
          const ativo = reveladas.has(i);
          const aberto = selecionada === i;
          return (
            <button
              key={i}
              onClick={() => {
                setReveladas((s) => new Set(s).add(i));
                setSelecionada(aberto ? null : i);
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              aria-label={p.rotulo}
            >
              <span
                className={`block w-10 h-10 md:w-12 md:h-12 rounded-full grid place-items-center border-2 shadow-lg text-xl transition ${
                  ativo
                    ? "bg-emerald-400 text-slate-950 border-emerald-200"
                    : "bg-black/60 text-emerald-300 border-emerald-300 animate-pulse"
                }`}
              >
                {p.icone}
              </span>
              {aberto && (
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-900/95 border border-emerald-300/60 text-white text-xs font-bold shadow-xl">
                  {p.rotulo}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Pistas descobertas (etiquetas simples, SEM explicação individual) */}
      <div className="p-4 space-y-4">
        {reveladas.size === 0 ? (
          <div className="flex items-center gap-2 text-emerald-200/80 text-sm">
            <ScanLine className="w-4 h-4 animate-pulse" />
            Toque nos pontos verdes pra investigar…
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {data.pistas.map((p, i) =>
              reveladas.has(i) ? (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border bg-emerald-400/15 border-emerald-400/40 text-emerald-100 text-xs font-bold"
                >
                  <span className="text-base leading-none">{p.icone}</span>
                  {p.rotulo}
                </span>
              ) : null,
            )}
          </div>
        )}

        {/* Só depois de descobrir TUDO aparece a pergunta */}
        {completo && (
          <div className="rounded-2xl border-2 border-emerald-400/40 bg-emerald-950/40 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500/15 border-b border-emerald-400/30">
              <HelpCircle className="w-5 h-5 text-emerald-300" />
              <div className="text-white text-sm font-bold">
                Agora responda: {data.pergunta}
              </div>
            </div>
            <div className="p-4 space-y-2">
              {data.hipoteses.map((h, i) => {
                const isCerta = i === data.correta;
                const isEscolha = i === escolha;
                let cls =
                  "bg-white/5 border-white/15 text-white hover:bg-white/10";
                if (respondeu) {
                  if (isCerta)
                    cls =
                      "bg-emerald-500/25 border-emerald-300 text-white";
                  else if (isEscolha)
                    cls =
                      "bg-rose-500/20 border-rose-300/70 text-white opacity-70";
                  else cls = "bg-white/5 border-white/10 text-white/40";
                }
                return (
                  <button
                    key={i}
                    disabled={respondeu}
                    onClick={() => setEscolha(i)}
                    className={`w-full flex items-center gap-3 text-left px-4 py-3 rounded-2xl border-2 text-sm font-bold transition ${cls}`}
                  >
                    <span className="w-7 h-7 rounded-full grid place-items-center bg-black/40 text-xs font-black shrink-0">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1">{h}</span>
                    {respondeu && isCerta && (
                      <Check className="w-5 h-5 text-emerald-300 shrink-0" />
                    )}
                    {respondeu && isEscolha && !isCerta && (
                      <X className="w-5 h-5 text-rose-300 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Explicação (fechamento) SÓ depois de escolher */}
        {respondeu && (
          <div
            className={`rounded-2xl border-2 p-4 ${
              acertou
                ? "bg-emerald-500/15 border-emerald-400/50"
                : "bg-amber-500/15 border-amber-300/50"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Lightbulb className="w-4 h-4 text-emerald-300" />
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-200">
                {acertou ? "🎯 Isso mesmo — Aurora explica:" : "🤔 Quase — repara comigo:"}
              </div>
            </div>
            <p className="text-white text-sm leading-relaxed">{data.fechamento}</p>
          </div>
        )}
      </div>
    </div>
  );
}
