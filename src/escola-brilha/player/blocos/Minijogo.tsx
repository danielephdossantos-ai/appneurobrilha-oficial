import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2, Timer, CheckCircle2, RefreshCw, Play } from "lucide-react";
import { useDeviceTTS } from "@/hooks/useDeviceTTS";
import type { Aula } from "../../types";
import { Secao } from "./Secao";

/**
 * Minijogo Brilha — Caça aos Elementos.
 * A criança toca em cada elemento escondido pelo cenário antes do tempo
 * acabar. Cada acerto ilumina uma faixa do "mapa" no topo.
 */
export function Minijogo({ dados }: { dados: NonNullable<Aula["minijogo"]> }) {
  if (dados.tipo !== "cacaElementos") return null;

  const total = dados.elementos.length;
  const tempoInicial = dados.tempoSegundos ?? 90;

  const [rodando, setRodando] = useState(false);
  const [encontrados, setEncontrados] = useState<Set<number>>(new Set());
  const [tempo, setTempo] = useState(tempoInicial);
  const [posicoes, setPosicoes] = useState<Array<{ x: number; y: number }>>([]);
  const finalizadoRef = useRef(false);
  const { speak } = useDeviceTTS();

  const concluido = encontrados.size === total;
  const acabou = tempo === 0;

  // sortear posições dos elementos no cenário
  function embaralharPosicoes() {
    const posicoes: Array<{ x: number; y: number }> = [];
    for (let i = 0; i < total; i++) {
      posicoes.push({
        x: 5 + Math.random() * 80, // % dentro do cenário
        y: 5 + Math.random() * 75,
      });
    }
    setPosicoes(posicoes);
  }

  function iniciar() {
    setEncontrados(new Set());
    setTempo(tempoInicial);
    finalizadoRef.current = false;
    embaralharPosicoes();
    setRodando(true);
  }

  useEffect(() => {
    if (!rodando) return;
    if (concluido || acabou) {
      setRodando(false);
      if (!finalizadoRef.current) {
        finalizadoRef.current = true;
        if (concluido) speak(dados.acerto ?? "Você achou todos!", { rate: 0.95 });
      }
      return;
    }
    const id = window.setTimeout(() => setTempo((t) => Math.max(0, t - 1)), 1000);
    return () => window.clearTimeout(id);
  }, [rodando, tempo, concluido, acabou, dados.acerto, speak]);

  function achar(i: number) {
    if (!rodando || encontrados.has(i)) return;
    const el = dados.elementos[i];
    speak(el.nome, { rate: 1 });
    setEncontrados((prev) => {
      const s = new Set(prev);
      s.add(i);
      return s;
    });
  }

  const percentualMapa = Math.round((encontrados.size / total) * 100);

  return (
    <Secao icon={Gamepad2} rotulo="Minijogo Brilha" cor="#F97316">
      <p className="font-black text-lg mb-1">{dados.titulo}</p>
      <p className="text-base text-white/80 mb-3">{dados.objetivo}</p>

      {/* Barra do mapa */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
            Mapa iluminado
          </span>
          <span className="ml-auto text-[10px] font-black text-white/70">
            {encontrados.size}/{total}
          </span>
        </div>
        <div className="h-3 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400"
            initial={{ width: 0 }}
            animate={{ width: `${percentualMapa}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>
      </div>

      {/* Cronômetro */}
      <div className="flex items-center gap-2 mb-3">
        <Timer className="h-4 w-4 text-orange-300" />
        <span className="font-black text-white">
          {tempo}s
        </span>
        {!rodando && !concluido && (
          <button
            onClick={iniciar}
            className="ml-auto h-10 px-4 rounded-xl bg-gradient-to-r from-orange-400 to-rose-500 text-white font-black flex items-center gap-1 active:scale-95"
          >
            <Play className="h-4 w-4" /> {acabou ? "Jogar de novo" : "Começar"}
          </button>
        )}
        {rodando && (
          <span className="ml-auto text-[10px] font-black uppercase tracking-widest text-emerald-300 animate-pulse">
            ● no ar
          </span>
        )}
      </div>

      {/* Cenário */}
      <div className="relative w-full rounded-2xl bg-gradient-to-b from-emerald-800/50 to-emerald-950/70 border-2 border-emerald-400/30 overflow-hidden aspect-[4/3]">
        {/* elementos escondidos */}
        {rodando &&
          dados.elementos.map((el, i) => {
            const p = posicoes[i];
            const jaAchou = encontrados.has(i);
            if (!p || jaAchou) return null;
            return (
              <button
                key={i}
                onClick={() => achar(i)}
                className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full grid place-items-center transition active:scale-90 hover:scale-110"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                aria-label={`Encontrar ${el.nome}`}
              >
                <img
                  src={el.imagemUrl}
                  alt={el.nome}
                  className="w-full h-full object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
                  draggable={false}
                />
              </button>
            );
          })}

        {/* estado inicial */}
        {!rodando && !concluido && !acabou && (
          <div className="absolute inset-0 grid place-items-center p-4 text-center">
            <div>
              <div className="text-4xl mb-2">🔍</div>
              <p className="font-black text-white">
                Encontre {total} elementos em {tempoInicial}s!
              </p>
              <p className="text-sm text-white/70 mt-1">
                Toque em <b>Começar</b> pra iniciar a caçada.
              </p>
            </div>
          </div>
        )}

        {/* concluído */}
        {concluido && (
          <div className="absolute inset-0 grid place-items-center bg-emerald-500/20 backdrop-blur-sm p-4">
            <div className="text-center">
              <CheckCircle2 className="h-10 w-10 text-emerald-300 mx-auto mb-1" />
              <p className="font-black text-white text-lg">
                {dados.acerto ?? "Missão cumprida!"}
              </p>
              <button
                onClick={iniciar}
                className="mt-3 h-10 px-4 rounded-xl bg-white/20 font-black text-white inline-flex items-center gap-1 active:scale-95"
              >
                <RefreshCw className="h-4 w-4" /> Jogar de novo
              </button>
            </div>
          </div>
        )}

        {/* tempo acabou */}
        {acabou && !concluido && (
          <div className="absolute inset-0 grid place-items-center bg-rose-500/20 backdrop-blur-sm p-4">
            <div className="text-center">
              <p className="font-black text-white text-lg">⏰ Tempo esgotado!</p>
              <p className="text-sm text-white/80">
                Você achou {encontrados.size} de {total}. Tenta de novo!
              </p>
              <button
                onClick={iniciar}
                className="mt-3 h-10 px-4 rounded-xl bg-white/20 font-black text-white inline-flex items-center gap-1 active:scale-95"
              >
                <RefreshCw className="h-4 w-4" /> Jogar de novo
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Lista dos elementos */}
      <div className="mt-3 flex flex-wrap gap-2 justify-center">
        {dados.elementos.map((el, i) => {
          const ok = encontrados.has(i);
          return (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-xs font-black border-2 ${
                ok
                  ? "bg-emerald-500/30 border-emerald-300 text-white"
                  : "bg-white/10 border-white/20 text-white/70"
              }`}
            >
              {ok ? "✓ " : ""}
              {el.rotulo ?? el.nome}
            </span>
          );
        })}
      </div>
    </Secao>
  );
}
