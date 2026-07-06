import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2, Timer, CheckCircle2, RefreshCw, Play, X } from "lucide-react";
import { useDeviceTTS } from "@/hooks/useDeviceTTS";
import type { Aula } from "../../types";
import { Secao } from "./Secao";

type Item = { nome: string; imagemUrl: string; rotulo?: string; alvo: boolean };
type Posicionado = Item & {
  id: string;
  x: number; // %
  y: number; // %
  drift: { dx: number; dy: number; dur: number; delay: number };
  size: number; // px
};

/**
 * Minijogo Brilha — Caça aos Elementos.
 * Elementos-alvo + distratores misturados no cenário, sem sobreposição,
 * balançando levemente pra criar o efeito de "escondidos na floresta".
 */
export function Minijogo({ dados }: { dados: NonNullable<Aula["minijogo"]> }) {
  if (dados.tipo !== "cacaElementos") return null;

  const total = dados.elementos.length;
  const tempoInicial = dados.tempoSegundos ?? 90;
  const distratores = dados.distratores ?? [];

  const [rodando, setRodando] = useState(false);
  const [encontrados, setEncontrados] = useState<Set<string>>(new Set());
  const [errouId, setErrouId] = useState<string | null>(null);
  const [tempo, setTempo] = useState(tempoInicial);
  const [itens, setItens] = useState<Posicionado[]>([]);
  const finalizadoRef = useRef(false);
  const { speak } = useDeviceTTS();

  const acertosCount = useMemo(
    () => itens.filter((i) => i.alvo && encontrados.has(i.id)).length,
    [itens, encontrados],
  );
  const concluido = acertosCount === total && total > 0;
  const acabou = tempo === 0;

  /** Gera posições em grid embaralhado, sem sobreposição. */
  function posicionar(): Posicionado[] {
    // Multiplica distratores pra encher a cena (2x pra confundir bem).
    const distratoresExpandidos: Item[] = [];
    const alvo = distratores.length > 0 ? Math.max(distratores.length * 2, total + 3) : 0;
    for (let i = 0; i < alvo; i++) {
      const d = distratores[i % distratores.length];
      distratoresExpandidos.push({ ...d, alvo: false });
    }

    const todos: Item[] = [
      ...dados.elementos.map((e) => ({ ...e, alvo: true })),
      ...distratoresExpandidos,
    ];

    // embaralha
    for (let i = todos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [todos[i], todos[j]] = [todos[j], todos[i]];
    }

    // grid dinâmico com base na quantidade
    const cols = Math.ceil(Math.sqrt(todos.length * 1.4));
    const rows = Math.ceil(todos.length / cols);
    const cellW = 90 / cols;
    const cellH = 85 / rows;

    return todos.map((it, i) => {
      const c = i % cols;
      const r = Math.floor(i / cols);
      // centro da célula + jitter pequeno pra parecer natural
      const jitterX = (Math.random() - 0.5) * cellW * 0.35;
      const jitterY = (Math.random() - 0.5) * cellH * 0.35;
      const x = 5 + c * cellW + cellW / 2 + jitterX;
      const y = 5 + r * cellH + cellH / 2 + jitterY;
      return {
        ...it,
        id: `${i}-${it.nome}`,
        x,
        y,
        drift: {
          dx: (Math.random() < 0.5 ? -1 : 1) * (18 + Math.random() * 22),
          dy: (Math.random() < 0.5 ? -1 : 1) * (14 + Math.random() * 18),
          dur: 3 + Math.random() * 2.5,
          delay: Math.random() * 2,
        },
        size: 46 + Math.random() * 14,
      };
    });
  }

  function iniciar() {
    setEncontrados(new Set());
    setErrouId(null);
    setTempo(tempoInicial);
    finalizadoRef.current = false;
    setItens(posicionar());
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

  function tocar(it: Posicionado) {
    if (!rodando) return;
    if (encontrados.has(it.id)) return;
    if (it.alvo) {
      speak(it.nome, { rate: 1 });
      setEncontrados((prev) => new Set(prev).add(it.id));
    } else {
      // feedback de erro leve, sem penalizar
      setErrouId(it.id);
      speak("Esse não é. Continue procurando!", { rate: 1 });
      window.setTimeout(() => setErrouId((cur) => (cur === it.id ? null : cur)), 500);
    }
  }

  const percentualMapa = Math.round((acertosCount / total) * 100);

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
            {acertosCount}/{total}
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
        <span className="font-black text-white">{tempo}s</span>
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
      <div className="relative w-full rounded-2xl bg-gradient-to-b from-emerald-800/50 to-emerald-950/70 border-2 border-emerald-400/30 overflow-hidden aspect-[4/3] sm:aspect-[16/10]">
        {rodando &&
          itens.map((it) => {
            const jaAchou = encontrados.has(it.id);
            const errou = errouId === it.id;
            if (jaAchou) return null;
            return (
              <motion.button
                key={it.id}
                onClick={() => tocar(it)}
                className="absolute grid place-items-center active:scale-90"
                style={{
                  left: `${it.x}%`,
                  top: `${it.y}%`,
                  width: it.size,
                  height: it.size,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  x: [0, it.drift.dx, 0, -it.drift.dx, 0],
                  y: [0, it.drift.dy, 0, -it.drift.dy, 0],
                  rotate: errou ? [0, -8, 8, -6, 0] : 0,
                  scale: errou ? [1, 0.9, 1] : 1,
                }}
                transition={{
                  x: { duration: it.drift.dur, repeat: Infinity, delay: it.drift.delay, ease: "easeInOut" },
                  y: { duration: it.drift.dur * 1.2, repeat: Infinity, delay: it.drift.delay, ease: "easeInOut" },
                  rotate: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                aria-label={it.alvo ? `Encontrar ${it.nome}` : it.nome}
              >
                <img
                  src={it.imagemUrl}
                  alt={it.nome}
                  className="w-full h-full object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] pointer-events-none"
                  draggable={false}
                />
                {errou && (
                  <span className="absolute -top-1 -right-1 rounded-full bg-rose-500 text-white p-0.5">
                    <X className="h-3 w-3" />
                  </span>
                )}
              </motion.button>
            );
          })}

        {!rodando && !concluido && !acabou && (
          <div className="absolute inset-0 grid place-items-center p-4 text-center">
            <div>
              <div className="text-4xl mb-2">🔍</div>
              <p className="font-black text-white">
                Encontre {total} elementos em {tempoInicial}s!
              </p>
              <p className="text-sm text-white/70 mt-1">
                Cuidado: tem muita coisa pra confundir!
              </p>
            </div>
          </div>
        )}

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

        {acabou && !concluido && (
          <div className="absolute inset-0 grid place-items-center bg-rose-500/20 backdrop-blur-sm p-4">
            <div className="text-center">
              <p className="font-black text-white text-lg">⏰ Tempo esgotado!</p>
              <p className="text-sm text-white/80">
                Você achou {acertosCount} de {total}. Tenta de novo!
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

      {/* Lista dos elementos a achar */}
      <div className="mt-3 flex flex-wrap gap-2 justify-center">
        {dados.elementos.map((el, i) => {
          const ok = itens.some((it) => it.alvo && it.nome === el.nome && encontrados.has(it.id));
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
