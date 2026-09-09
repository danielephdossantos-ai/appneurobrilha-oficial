import { useEffect, useRef, useState, useContext } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import type { MomentoFluencia } from "../../types";
import { KidsCtx } from "../PlayerPortuguesV4";
import { TeenBlackboard } from "./TeenBlackboard";

/**
 * Fase 9 — FLUÊNCIA POR RELEITURA.
 *
 * A criança lê o MESMO texto curto três vezes:
 *   1ª · em eco   → o app lê devagar, ela repete junto (apoio total)
 *   2ª · sozinha  → cronômetro opcional registra a leitura
 *   3ª · sozinha  → pratica precisão, expressão e compreensão
 *
 * A releitura favorece a automaticidade sem trocar a compreensão por
 * velocidade. Nada é reprovado aqui: cada criança lê no próprio ritmo.
 */
export function LeituraFluente({
  data,
  aulaSlug,
}: {
  data: MomentoFluencia;
  aulaSlug: string;
}) {
  const skin = useContext(KidsCtx);
  const [etapa, setEtapa] = useState<0 | 1 | 2 | 3>(0);
  const [lendoEco, setLendoEco] = useState(false);
  const [rodando, setRodando] = useState(false);
  const [segundos, setSegundos] = useState(0);
  const [tempo2, setTempo2] = useState<number | null>(null);
  const [tempo3, setTempo3] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const texto = data.texto.join(" ");

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      stopSpeaking();
    };
  }, []);

  // Retoma o melhor tempo já feito nesta aula (só para comemorar depois).
  const chave = `brilha:fluencia:${aulaSlug}`;
  useEffect(() => {
    if (tempo3 == null) return;
    try {
      const anterior = Number(window.localStorage.getItem(chave) ?? "0");
      if (!anterior || tempo3 < anterior) {
        window.localStorage.setItem(chave, String(tempo3));
      }
    } catch {
      /* ignora */
    }
  }, [tempo3, chave]);

  const pararTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const iniciarTimer = () => {
    pararTimer();
    setSegundos(0);
    setRodando(true);
    timerRef.current = setInterval(() => setSegundos((s) => s + 1), 1000);
  };

  const lerEmEco = () => {
    stopSpeaking();
    setLendoEco(true);
    speakChunked(texto, { rate: 0.62, pitch: 1.05 })
      .then(() => setLendoEco(false))
      .catch(() => setLendoEco(false));
  };

  const concluirLeitura = (qual: 2 | 3) => {
    pararTimer();
    setRodando(false);
    if (qual === 2) {
      setTempo2(segundos);
      setEtapa(2);
    } else {
      setTempo3(segundos);
      setEtapa(3);
    }
  };

  return (
    <TeenBlackboard titulo="Monitoramento de Fluxo e Cadência">
    <div className="space-y-4">
      {/* Trilho das 3 leituras */}
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((n) => {
          const feita = etapa >= n;
          return (
            <div key={n} className="flex-1">
              <div
                className={`h-2.5 rounded-full transition-all ${
                  feita ? skin.teen ? "bg-cyan-500 shadow-[0_0_8px_#06b6d4]" : "bg-emerald-400" : skin.teen ? "bg-slate-800" : "bg-white/15"
                }`}
              />
              <div
                className={`mt-1 text-[10px] font-black uppercase tracking-wider ${
                  feita ? skin.teen ? "text-cyan-400" : "text-emerald-200" : skin.teen ? "text-cyan-900" : "text-white/50"
                }`}
              >
                {n}ª leitura
              </div>
            </div>
          );
        })}
      </div>

      {/* O texto — sempre visível, grande e espaçado */}
      <div className={`rounded-3xl p-5 shadow-lg ${skin.teen ? "bg-slate-900/60 border border-cyan-900/40 text-cyan-50" : "bg-white/95 text-[#2b1258]"}`}>
        {data.imagemUrl && (
          <img
            src={data.imagemUrl}
            alt=""
            className="mx-auto mb-3 h-28 w-28 object-contain drop-shadow"
          />
        )}
        <div className="space-y-2">
          {data.texto.map((linha, i) => (
            <p
              key={i}
              className="text-center text-2xl md:text-3xl font-black leading-relaxed tracking-wide"
            >
              {linha}
            </p>
          ))}
        </div>
        {rodando && (
          <div className={`mt-4 text-center text-lg font-black ${skin.teen ? "text-cyan-400" : "text-emerald-600"}`}>
            ⏱ {segundos}s
          </div>
        )}
      </div>

      {/* Etapa 0 — leitura em eco */}
      {etapa === 0 && (
        <div className={`rounded-2xl border-2 p-4 space-y-3 ${skin.teen ? "border-cyan-900/40 bg-cyan-950/20" : "border-sky-300/50 bg-sky-400/10"}`}>
          <p className={`text-sm font-bold ${skin.teen ? "text-cyan-200" : "text-sky-100"}`}>
            1ª leitura · <b>em eco</b>: aperte o botão, escute devagar e leia junto
            com o Brilha, apontando o dedo em cada palavra.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={lerEmEco}
              className={`h-12 px-5 rounded-2xl font-black active:scale-95 ${skin.teen ? "bg-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]" : "bg-sky-400 text-[#0b1020]"}`}
            >
              {lendoEco ? "🔊 Lendo…" : "🔊 Ler comigo"}
            </button>
            <button
              type="button"
              onClick={() => {
                stopSpeaking();
                setLendoEco(false);
                setEtapa(1);
              }}
              className={`h-12 px-5 rounded-2xl font-black active:scale-95 ${skin.teen ? "bg-slate-800 border border-cyan-800 text-cyan-100" : "bg-white/90 text-[#2b1258]"}`}
            >
              ✅ Já li junto
            </button>
          </div>
        </div>
      )}

      {/* Etapa 1 — 2ª leitura sozinha, cronometrada */}
      {etapa === 1 && (
        <div className={`rounded-2xl border-2 p-4 space-y-3 ${skin.teen ? "border-cyan-900/40 bg-cyan-950/20" : "border-amber-300/50 bg-amber-400/10"}`}>
          <p className={`text-sm font-bold ${skin.teen ? "text-cyan-200" : "text-amber-100"}`}>
            2ª leitura · <b>sozinho</b>: agora leia em voz alta você mesmo. Não
            precisa correr — o relógio é só pra gente comparar depois.
          </p>
          <div className="flex flex-wrap gap-2">
            {!rodando ? (
              <button
                type="button"
                onClick={iniciarTimer}
                className={`h-12 px-5 rounded-2xl font-black active:scale-95 ${skin.teen ? "bg-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]" : "bg-amber-400 text-[#2b1258]"}`}
              >
                ▶ Comecei a ler
              </button>
            ) : (
              <button
                type="button"
                onClick={() => concluirLeitura(2)}
                className={`h-12 px-5 rounded-2xl font-black active:scale-95 ${skin.teen ? "bg-cyan-500 text-white" : "bg-emerald-400 text-[#0b1020]"}`}
              >
                ⏹ Terminei
              </button>
            )}
          </div>
        </div>
      )}

      {/* Etapa 2 — 3ª leitura, consolidando */}
      {etapa === 2 && (
        <div className="rounded-2xl border-2 border-fuchsia-300/50 bg-fuchsia-400/10 p-4 space-y-3">
          <p className="text-sm font-bold text-fuchsia-100">
            O relógio marcou <b>{tempo2}s</b>, apenas como referência. Na 3ª leitura,
            leia o mesmo texto com precisão, expressão e atenção ao sentido.
          </p>
          <div className="flex flex-wrap gap-2">
            {!rodando ? (
              <button
                type="button"
                onClick={iniciarTimer}
                className="h-12 px-5 rounded-2xl bg-fuchsia-400 text-[#2b1258] font-black active:scale-95"
              >
                ▶ Comecei a ler
              </button>
            ) : (
              <button
                type="button"
                onClick={() => concluirLeitura(3)}
                className="h-12 px-5 rounded-2xl bg-emerald-400 text-[#0b1020] font-black active:scale-95"
              >
                ⏹ Terminei
              </button>
            )}
          </div>
        </div>
      )}

      {/* Etapa 3 — resultado */}
      {etapa === 3 && (
        <div className="rounded-2xl border-2 border-emerald-300/60 bg-emerald-400/15 p-4 space-y-2">
          <p className="text-lg font-black text-emerald-100">
            🌟 Você leu as três vezes!
          </p>
          <p className="text-sm text-white/90">
            2ª leitura: <b>{tempo2}s</b> · 3ª leitura: <b>{tempo3}s</b>.{" "}
            O tempo não é nota. Conte o que entendeu e observe se leu as palavras com
            precisão, respeitou a pontuação e usou uma voz que combina com o texto.
          </p>
          <button
            type="button"
            onClick={() => {
              setEtapa(0);
              setTempo2(null);
              setTempo3(null);
              setSegundos(0);
            }}
            className="mt-1 h-11 px-5 rounded-2xl bg-white/90 text-[#2b1258] font-black active:scale-95"
          >
            🔁 Treinar de novo
          </button>
        </div>
      )}
    </div>
    </TeenBlackboard>
  );
}
