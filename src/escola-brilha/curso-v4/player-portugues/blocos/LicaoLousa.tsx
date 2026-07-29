import { useContext, useState } from "react";
import type { EnsinoVisualBloco } from "../../types";
import { KidsCtx } from "../PlayerPortuguesV4";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

type Licao = Extract<EnsinoVisualBloco, { tipo: "licaoLousa" }>;

/**
 * LOUSA DO PROFESSOR (Português)
 * ------------------------------------------------------------------
 * Ensino real, sério, passo a passo — o equivalente ao "eu faço" da
 * Matemática, só que com FRASES. O professor escreve a frase na lousa,
 * realça o alvo e explica embaixo POR QUE é assim.
 *
 * Sem imagem, sem enfeite infantil: tipografia forte, fundo escuro,
 * revelação controlada pelo aluno ("Mostrar próximo passo").
 */
export function LicaoLousa({ bloco }: { bloco: Licao }) {
  const total = bloco.passos.length;
  const [revelados, setRevelados] = useState(1);
  const fim = revelados >= total;
  const { kids, tween } = useContext(KidsCtx);
  /** 1º e 2º ano: mesma lousa, letra maior e com áudio. */
  const inf = kids && !tween;

  return (
    <div className="rounded-lg border border-slate-700 bg-[#0B0F17] overflow-hidden">
      {/* Cabeçalho — a regra */}
      <div className="border-b border-slate-700 bg-[#111827] px-4 py-3">
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400">
          Regra
        </div>
        <p
          className={`mt-1 font-semibold leading-relaxed text-slate-100 ${
            inf ? "text-[17px]" : "text-[15px]"
          }`}
        >
          {bloco.regra}
        </p>
        {bloco.comoIdentificar && (
          <p className={`mt-2 rounded-md border-l-2 border-amber-400 bg-amber-400/10 px-3 py-2 leading-relaxed text-amber-100 ${inf ? "text-[15px]" : "text-[13px]"}`}>
            <b className="text-amber-300">Como identificar:</b> {bloco.comoIdentificar}
          </p>
        )}
      </div>

      {/* Passos */}
      <div className="divide-y divide-slate-800">
        {bloco.passos.slice(0, revelados).map((p, i) => (
          <div key={i} className="px-4 py-4 animate-[fadeIn_.3s_ease-out]">
            <div className="mb-2 flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-violet-500 font-mono text-[11px] font-black text-[#0B0F17]">
                {i + 1}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Na frase
              </span>
            </div>

            {/* A frase na lousa */}
            <div className="overflow-x-auto rounded-md border border-slate-700 bg-[#0F172A] px-3 py-3">
              <p
                className={`whitespace-pre-wrap font-bold leading-relaxed text-slate-100 ${
                  inf ? "text-[22px]" : "text-[17px]"
                }`}
              >
                {realcar(p.frase, p.destaque)}
              </p>
            </div>

            {inf && (
              <button
                type="button"
                onClick={() => {
                  stopSpeaking();
                  speakChunked(`${p.frase}. ${p.analise}`);
                }}
                className="mt-2 rounded-full bg-amber-400 px-4 py-1.5 text-[13px] font-black text-[#0B0F17]"
              >
                🔊 Ouvir
              </button>
            )}

            {/* Análise */}
            <p className={`mt-3 leading-relaxed text-slate-300 ${inf ? "text-[16px]" : "text-[14px]"}`}>
              <b className="text-emerald-300">Por quê:</b> {p.analise}
            </p>
            {p.nota && (
              <p className="mt-2 rounded-md bg-slate-800/60 px-3 py-2 text-[13px] leading-relaxed text-slate-400">
                Observação: {p.nota}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Avanço */}
      {!fim && (
        <div className="px-4 pb-4">
          <button
            type="button"
            onClick={() => setRevelados((n) => Math.min(n + 1, total))}
            className="h-11 w-full rounded-lg bg-violet-500 font-mono text-[11px] font-black uppercase tracking-[0.2em] text-[#0B0F17] transition active:scale-95"
            style={{ boxShadow: "0 0 26px -8px #8B5CF6" }}
          >
            Mostrar próximo passo ▸ ({revelados}/{total})
          </button>
        </div>
      )}

      {/* Erro comum */}
      {fim && bloco.comparacao && (
        <div className="border-t border-slate-800 px-4 py-4">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-rose-400">
            Erro comum
          </div>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            <div className="rounded-md border border-rose-500/40 bg-rose-500/10 px-3 py-2">
              <div className="font-mono text-[10px] uppercase tracking-widest text-rose-300">
                Errado
              </div>
              <p className="text-[15px] font-semibold text-rose-100 line-through decoration-rose-400/70">
                {bloco.comparacao.errado}
              </p>
            </div>
            <div className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2">
              <div className="font-mono text-[10px] uppercase tracking-widest text-emerald-300">
                Certo
              </div>
              <p className="text-[15px] font-semibold text-emerald-100">
                {bloco.comparacao.certo}
              </p>
            </div>
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-300">
            {bloco.comparacao.porque}
          </p>
        </div>
      )}

      {/* Curiosidade */}
      {fim && bloco.curiosidade && (
        <div className="border-t border-slate-800 bg-[#111827] px-4 py-3">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
            Curiosidade da língua
          </div>
          <p className="mt-1 text-[13px] leading-relaxed text-slate-300">{bloco.curiosidade}</p>
        </div>
      )}

      {/* Resumo */}
      {fim && bloco.resumo && bloco.resumo.length > 0 && (
        <div className="border-t border-slate-800 px-4 py-4">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400">
            Ficou valendo
          </div>
          <ul className="mt-2 space-y-1.5">
            {bloco.resumo.map((r, i) => (
              <li key={i} className="flex gap-2 text-[13px] leading-relaxed text-slate-200">
                <span className="text-emerald-400">▸</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/** Realça literalmente os trechos pedidos dentro da frase. */
function realcar(frase: string, destaques?: string[]) {
  const alvos = (destaques ?? []).filter(Boolean);
  if (alvos.length === 0) return frase;

  const escapados = alvos
    .slice()
    .sort((a, b) => b.length - a.length)
    .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escapados.join("|")})`, "gi");

  return frase.split(re).map((parte, i) =>
    alvos.some((a) => a.toLowerCase() === parte.toLowerCase()) ? (
      <mark
        key={i}
        className="rounded bg-amber-400/25 px-1 text-amber-200 underline decoration-amber-400 decoration-2 underline-offset-4"
      >
        {parte}
      </mark>
    ) : (
      <span key={i}>{parte}</span>
    ),
  );
}
