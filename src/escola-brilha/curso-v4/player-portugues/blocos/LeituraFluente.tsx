import { useEffect, useRef, useState } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import type { MomentoFluencia } from "../../types";

/**
 * Fase 9 — FLUÊNCIA POR RELEITURA.
 *
 * A criança lê o MESMO texto curto três vezes:
 *   1ª · em eco   → o app lê devagar, ela repete junto (apoio total)
 *   2ª · sozinha  → cronômetro amigável começa a contar
 *   3ª · sozinha  → compara com a 2ª ("você leu mais solto!")
 *
 * É esse treino repetido, e não mais decodificação nova, que automatiza
 * a leitura aos 6 anos. Nada é reprovado aqui: o objetivo é soltar.
 */
export function LeituraFluente({
  data,
  aulaSlug,
}: {
  data: MomentoFluencia;
  aulaSlug: string;
}) {
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

  const melhorou = tempo2 != null && tempo3 != null && tempo3 <= tempo2;

  return (
    <div className="space-y-4">
      {/* Trilho das 3 leituras */}
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((n) => {
          const feita = etapa >= n;
          return (
            <div key={n} className="flex-1">
              <div
                className={`h-2.5 rounded-full transition-all ${
                  feita ? "bg-emerald-400" : "bg-white/15"
                }`}
              />
              <div
                className={`mt-1 text-[10px] font-black uppercase tracking-wider ${
                  feita ? "text-emerald-200" : "text-white/50"
                }`}
              >
                {n}ª leitura
              </div>
            </div>
          );
        })}
      </div>

      {/* O texto — sempre visível, grande e espaçado */}
      <div className="rounded-3xl bg-white/95 text-[#2b1258] p-5 shadow-lg">
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
          <div className="mt-4 text-center text-lg font-black text-emerald-600">
            ⏱ {segundos}s
          </div>
        )}
      </div>

      {/* Etapa 0 — leitura em eco */}
      {etapa === 0 && (
        <div className="rounded-2xl border-2 border-sky-300/50 bg-sky-400/10 p-4 space-y-3">
          <p className="text-sm font-bold text-sky-100">
            1ª leitura · <b>em eco</b>: aperte o botão, escute devagar e leia junto
            com o Brilha, apontando o dedo em cada palavra.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={lerEmEco}
              className="h-12 px-5 rounded-2xl bg-sky-400 text-[#0b1020] font-black active:scale-95"
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
              className="h-12 px-5 rounded-2xl bg-white/90 text-[#2b1258] font-black active:scale-95"
            >
              ✅ Já li junto
            </button>
          </div>
        </div>
      )}

      {/* Etapa 1 — 2ª leitura sozinha, cronometrada */}
      {etapa === 1 && (
        <div className="rounded-2xl border-2 border-amber-300/50 bg-amber-400/10 p-4 space-y-3">
          <p className="text-sm font-bold text-amber-100">
            2ª leitura · <b>sozinho</b>: agora leia em voz alta você mesmo. Não
            precisa correr — o relógio é só pra gente comparar depois.
          </p>
          <div className="flex flex-wrap gap-2">
            {!rodando ? (
              <button
                type="button"
                onClick={iniciarTimer}
                className="h-12 px-5 rounded-2xl bg-amber-400 text-[#2b1258] font-black active:scale-95"
              >
                ▶ Comecei a ler
              </button>
            ) : (
              <button
                type="button"
                onClick={() => concluirLeitura(2)}
                className="h-12 px-5 rounded-2xl bg-emerald-400 text-[#0b1020] font-black active:scale-95"
              >
                ⏹ Terminei
              </button>
            )}
          </div>
        </div>
      )}

      {/* Etapa 2 — 3ª leitura, comparando */}
      {etapa === 2 && (
        <div className="rounded-2xl border-2 border-fuchsia-300/50 bg-fuchsia-400/10 p-4 space-y-3">
          <p className="text-sm font-bold text-fuchsia-100">
            Você leu em <b>{tempo2}s</b>. 3ª leitura · o mesmo texto de novo — agora
            as palavras já são suas conhecidas, vai sair mais solto!
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
            {melhorou ? "🚀 Ficou mais solto!" : "🌟 Você leu as três vezes!"}
          </p>
          <p className="text-sm text-white/90">
            2ª leitura: <b>{tempo2}s</b> · 3ª leitura: <b>{tempo3}s</b>.{" "}
            {melhorou
              ? "Ler o mesmo texto de novo faz o cérebro guardar as palavras inteiras — por isso ficou mais rápido."
              : "Tudo bem: o que vale é ler com calma e entendendo. Amanhã leia este texto mais uma vez."}
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
  );
}
