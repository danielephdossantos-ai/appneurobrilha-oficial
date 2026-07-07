import { useState } from "react";
import type { ModoInvestigadorData } from "../../types";
import { FotoLugar } from "./FotoLugar";
import { Radar, ScanLine } from "lucide-react";

/**
 * Foto grande + pins do GeoScanner. A criança TOCA cada pin pra
 * revelar a pista. Quando revela tudo, aparece o fechamento do Brilha.
 * Zero texto no início.
 */
export function ModoInvestigador({ data }: { data: ModoInvestigadorData }) {
  const [reveladas, setReveladas] = useState<Set<number>>(new Set());
  const [selecionada, setSelecionada] = useState<number | null>(null);
  const total = data.pistas.length;
  const completo = reveladas.size === total;

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
        {/* Linha de scan animada */}
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

        {/* Pins */}
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
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
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

      {/* Rodapé: pistas descobertas + card de explicação */}
      <div className="p-4 space-y-3">
        {reveladas.size === 0 ? (
          <div className="flex items-center gap-2 text-emerald-200/80 text-sm">
            <ScanLine className="w-4 h-4 animate-pulse" />
            Toque nos pontos verdes pra investigar…
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {data.pistas.map((p, i) =>
              reveladas.has(i) ? (
                <button
                  key={i}
                  onClick={() => setSelecionada(i)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition ${
                    selecionada === i
                      ? "bg-emerald-400 text-slate-950 border-emerald-200"
                      : "bg-emerald-400/15 border-emerald-400/40 text-emerald-100 hover:bg-emerald-400/25"
                  }`}
                >
                  <span className="text-base leading-none">{p.icone}</span>
                  {p.rotulo}
                </button>
              ) : null,
            )}
          </div>
        )}

        {/* Card de EXPLICAÇÃO da pista selecionada */}
        {selecionada !== null && data.pistas[selecionada]?.explicacao && (
          <div className="rounded-2xl border-2 border-emerald-400/50 bg-slate-900/80 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/15 border-b border-emerald-400/30">
              <span className="text-2xl">{data.pistas[selecionada].icone}</span>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-bold">
                  🔍 Descoberta {selecionada + 1}
                </div>
                <div className="text-white text-sm font-bold truncate">
                  {data.pistas[selecionada].rotulo}
                </div>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-white text-sm leading-relaxed">
                {data.pistas[selecionada].explicacao}
              </p>
              {data.pistas[selecionada].curiosidade && (
                <div className="rounded-xl bg-amber-400/10 border border-amber-300/40 p-3">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-amber-300 font-bold mb-1">
                    💡 Curiosidade
                  </div>
                  <p className="text-amber-50 text-sm leading-relaxed">
                    {data.pistas[selecionada].curiosidade}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {completo && (
          <div className="mt-2 rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-3">
            <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-bold mb-1">
              💡 Aurora observa
            </div>
            <p className="text-white text-sm leading-relaxed">{data.fechamento}</p>
          </div>
        )}
      </div>
    </div>
  );
}

