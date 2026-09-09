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
  if (dados.tipo === "esteira") return <MinijogoEsteira dados={dados} />;
  if (dados.tipo === "cacaElementos") return <MinijogoCaca dados={dados} />;
  if (dados.tipo === "sequencia") return <MinijogoSequencia dados={dados} />;
  return null;
}

type CacaDados = Extract<NonNullable<Aula["minijogo"]>, { tipo: "cacaElementos" }>;

/**
 * Minijogo Brilha — Caça aos Elementos.
 * Elementos-alvo + distratores misturados no cenário, sem sobreposição,
 * balançando levemente pra criar o efeito de "escondidos na floresta".
 */
function MinijogoCaca({ dados }: { dados: CacaDados }) {
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

/* ------------------------- ESTEIRA ------------------------- */

type EsteiraDados = Extract<NonNullable<Aula["minijogo"]>, { tipo: "esteira" }>;

type ObjetoEsteira = EsteiraDados["objetos"][number] & { id: string };

/**
 * Fábrica dos Materiais — objetos deslizam por uma esteira da esquerda
 * pra direita e a criança toca no recipiente da categoria correta antes
 * do objeto sair da tela. Cada acerto conta ponto; cada erro tira uma
 * vida. Encerra por tempo ou por meta de acertos.
 */
function MinijogoEsteira({ dados }: { dados: EsteiraDados }) {
  const tempoInicial = dados.tempoSegundos ?? 90;
  const meta = dados.minAcertos ?? 10;

  const [rodando, setRodando] = useState(false);
  const [tempo, setTempo] = useState(tempoInicial);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [atual, setAtual] = useState<ObjetoEsteira | null>(null);
  const [feedback, setFeedback] = useState<null | "ok" | "erro">(null);
  const finalizadoRef = useRef(false);
  const { speak } = useDeviceTTS();

  const concluido = acertos >= meta;
  const acabou = tempo === 0;

  function proximoObjeto(): ObjetoEsteira {
    const o = dados.objetos[Math.floor(Math.random() * dados.objetos.length)];
    return { ...o, id: `${Date.now()}-${Math.random()}` };
  }

  function iniciar() {
    setAcertos(0);
    setErros(0);
    setTempo(tempoInicial);
    setFeedback(null);
    finalizadoRef.current = false;
    setAtual(proximoObjeto());
    setRodando(true);
  }

  // cronômetro
  useEffect(() => {
    if (!rodando) return;
    if (concluido || acabou) {
      setRodando(false);
      if (!finalizadoRef.current) {
        finalizadoRef.current = true;
        if (concluido) speak(dados.acerto ?? "Fábrica em produção!", { rate: 0.95 });
      }
      return;
    }
    const id = window.setTimeout(() => setTempo((t) => Math.max(0, t - 1)), 1000);
    return () => window.clearTimeout(id);
  }, [rodando, tempo, concluido, acabou, dados.acerto, speak]);

  // se o objeto atravessou a esteira sem categorização, conta como erro leve e vai pro próximo
  function quandoSaiu() {
    if (!rodando || !atual) return;
    setErros((e) => e + 1);
    setFeedback("erro");
    window.setTimeout(() => {
      setFeedback(null);
      setAtual(proximoObjeto());
    }, 350);
  }

  function classificar(categoria: string) {
    if (!rodando || !atual) return;
    if (categoria === atual.categoria) {
      setAcertos((a) => a + 1);
      setFeedback("ok");
      speak(atual.nome, { rate: 1 });
    } else {
      setErros((e) => e + 1);
      setFeedback("erro");
      speak("Tenta de novo!", { rate: 1 });
    }
    window.setTimeout(() => {
      setFeedback(null);
      setAtual(proximoObjeto());
    }, 300);
  }

  return (
    <Secao icon={Gamepad2} rotulo="Minijogo Brilha" cor="#F97316">
      <p className="font-black text-lg mb-1">{dados.titulo}</p>
      <p className="text-base text-white/80 mb-3">{dados.objetivo}</p>

      {/* HUD */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <div className="flex items-center gap-1">
          <Timer className="h-4 w-4 text-orange-300" />
          <span className="font-black text-white">{tempo}s</span>
        </div>
        <span className="text-xs font-black text-emerald-300">
          ✓ {acertos}/{meta}
        </span>
        <span className="text-xs font-black text-rose-300">✗ {erros}</span>
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

      {/* Esteira */}
      <div className="relative w-full h-40 sm:h-48 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-950 border-2 border-zinc-500/40 overflow-hidden">
        {/* trilhos */}
        <div className="absolute inset-x-0 bottom-3 h-8 bg-zinc-700 border-y-4 border-zinc-500" />
        <div className="absolute inset-x-0 bottom-3 h-8 opacity-30 bg-[repeating-linear-gradient(90deg,transparent_0_20px,rgba(255,255,255,0.4)_20px_22px)]" />

        {rodando && atual && feedback === null && (
          <motion.div
            key={atual.id}
            className="absolute bottom-4 grid place-items-center"
            initial={{ x: "-20%" }}
            animate={{ x: "110%" }}
            transition={{ duration: 4.5, ease: "linear" }}
            onAnimationComplete={quandoSaiu}
            style={{ top: "auto", height: 96, width: 96 }}
          >
            <img
              src={atual.imagemUrl}
              alt={atual.nome}
              className="w-24 h-24 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]"
              draggable={false}
            />
          </motion.div>
        )}

        {feedback && (
          <div
            className={`absolute inset-0 grid place-items-center pointer-events-none ${
              feedback === "ok" ? "bg-emerald-500/30" : "bg-rose-500/30"
            }`}
          >
            <span className="text-5xl">{feedback === "ok" ? "✅" : "❌"}</span>
          </div>
        )}

        {!rodando && !concluido && !acabou && (
          <div className="absolute inset-0 grid place-items-center p-4 text-center">
            <div>
              <div className="text-4xl mb-2">🏭</div>
              <p className="font-black text-white">
                Encaixe {meta} objetos na categoria certa em {tempoInicial}s!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Recipientes */}
      <div
        className="grid gap-2 mt-3"
        style={{
          gridTemplateColumns: `repeat(${Math.min(dados.categorias.length, 5)}, minmax(0, 1fr))`,
        }}
      >
        {dados.categorias.map((cat) => (
          <button
            key={cat.nome}
            onClick={() => classificar(cat.nome)}
            disabled={!rodando || !atual}
            className="rounded-xl border-2 px-2 py-3 flex flex-col items-center gap-1 font-black text-white active:scale-95 disabled:opacity-50"
            style={{ backgroundColor: `${cat.cor}30`, borderColor: cat.cor }}
          >
            {cat.emoji && <span className="text-2xl leading-none">{cat.emoji}</span>}
            <span className="text-[11px] sm:text-xs text-center leading-tight">
              {cat.nome}
            </span>
          </button>
        ))}
      </div>

      {concluido && (
        <div className="mt-3 rounded-xl bg-emerald-500/20 border-2 border-emerald-400 p-4 text-center">
          <CheckCircle2 className="h-8 w-8 text-emerald-300 mx-auto mb-1" />
          <p className="font-black text-white">
            {dados.acerto ?? "🏭 Fábrica em produção total!"}
          </p>
          <button
            onClick={iniciar}
            className="mt-2 h-10 px-4 rounded-xl bg-white/20 font-black text-white inline-flex items-center gap-1 active:scale-95"
          >
            <RefreshCw className="h-4 w-4" /> Jogar de novo
          </button>
        </div>
      )}

      {acabou && !concluido && (
        <div className="mt-3 rounded-xl bg-rose-500/20 border-2 border-rose-400 p-4 text-center">
          <p className="font-black text-white">⏰ Tempo esgotado!</p>
          <p className="text-sm text-white/80">
            Você acertou {acertos} de {meta}. Tenta de novo!
          </p>
          <button
            onClick={iniciar}
            className="mt-2 h-10 px-4 rounded-xl bg-white/20 font-black text-white inline-flex items-center gap-1 active:scale-95"
          >
            <RefreshCw className="h-4 w-4" /> Jogar de novo
          </button>
        </div>
      )}
    </Secao>
  );
}

/* ------------------------- SEQUÊNCIA ------------------------- */

type SequenciaDados = Extract<NonNullable<Aula["minijogo"]>, { tipo: "sequencia" }>;

/**
 * Minijogo Sequência — as cartas de uma sequência aparecem embaralhadas.
 * A criança TOCA nelas na ordem correta (ex.: linha do tempo da vida).
 * Cada sequência completa "ilumina uma página". Encerra por tempo ou meta.
 */
function MinijogoSequencia({ dados }: { dados: SequenciaDados }) {
  const tempoInicial = dados.tempoSegundos ?? 90;
  const meta = dados.minSequencias ?? dados.sequencias.length;
  const { speak } = useDeviceTTS();

  const [rodando, setRodando] = useState(false);
  const [tempo, setTempo] = useState(tempoInicial);
  const [idx, setIdx] = useState(0); // qual sequência
  const [passo, setPasso] = useState(0); // próximo card correto esperado
  const [ordem, setOrdem] = useState<number[]>([]); // ordem embaralhada dos índices originais
  const [colocados, setColocados] = useState<number[]>([]); // índices já acertados
  const [erro, setErro] = useState<number | null>(null);
  const [concluidas, setConcluidas] = useState(0);
  const finalizadoRef = useRef(false);

  const seqAtual = dados.sequencias[idx];
  const concluido = concluidas >= meta;
  const acabou = tempo === 0;

  function embaralhar(n: number) {
    const arr = Array.from({ length: n }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function iniciarSequencia(i: number) {
    setIdx(i);
    setPasso(0);
    setColocados([]);
    setErro(null);
    setOrdem(embaralhar(dados.sequencias[i]?.cards.length ?? 0));
  }

  function iniciar() {
    setTempo(tempoInicial);
    setConcluidas(0);
    finalizadoRef.current = false;
    iniciarSequencia(0);
    setRodando(true);
  }

  useEffect(() => {
    if (!rodando) return;
    if (concluido || acabou) {
      setRodando(false);
      if (!finalizadoRef.current) {
        finalizadoRef.current = true;
        if (concluido) speak(dados.acerto ?? "Página iluminada!", { rate: 0.95 });
      }
      return;
    }
    const t = setTimeout(() => setTempo((v) => Math.max(0, v - 1)), 1000);
    return () => clearTimeout(t);
  }, [rodando, tempo, concluido, acabou, dados.acerto, speak]);

  function tocarCard(cardIdx: number) {
    if (!rodando || colocados.includes(cardIdx)) return;
    if (cardIdx === passo) {
      const novos = [...colocados, cardIdx];
      setColocados(novos);
      setPasso(passo + 1);
      if (novos.length === seqAtual.cards.length) {
        // sequência completa
        speak("Muito bem! Página iluminada!", { rate: 0.95 });
        const novasConcluidas = concluidas + 1;
        setConcluidas(novasConcluidas);
        setTimeout(() => {
          if (novasConcluidas < dados.sequencias.length) {
            iniciarSequencia((idx + 1) % dados.sequencias.length);
          }
        }, 900);
      }
    } else {
      setErro(cardIdx);
      speak("Essa não é a próxima!", { rate: 1 });
      setTimeout(() => setErro(null), 500);
    }
  }

  return (
    <Secao icon={Gamepad2} rotulo="Minijogo Brilha" cor="#F472B6">
      <div className="rounded-2xl p-4 bg-gradient-to-br from-[#4C1D95] to-[#7C3AED] text-white">
        <div className="flex items-center gap-2 mb-1">
          <p className="font-black text-lg flex-1">{dados.titulo}</p>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-xs font-black">
            <Timer className="h-3.5 w-3.5" /> {tempo}s
          </span>
        </div>
        <p className="text-sm text-white/85 mb-3">{dados.objetivo}</p>

        {!rodando && !concluido && !acabou && (
          <button
            onClick={iniciar}
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#FBBF24] to-[#F472B6] text-[#0d1f55] font-black inline-flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <Play className="h-5 w-5" /> Começar!
          </button>
        )}

        {rodando && seqAtual && (
          <>
            <div className="flex items-center justify-between mb-2 text-xs font-black uppercase tracking-widest text-white/70">
              <span>
                Sequência {idx + 1}/{dados.sequencias.length}
                {seqAtual.titulo ? ` · ${seqAtual.titulo}` : ""}
              </span>
              <span>
                Iluminadas: {concluidas}/{meta}
              </span>
            </div>

            {/* Slots de destino (ordem correta) */}
            <div className="grid grid-flow-col auto-cols-fr gap-2 mb-3">
              {seqAtual.cards.map((_, i) => {
                const acertado = i < colocados.length;
                const cardIdx = acertado ? colocados[i] : null;
                const card = cardIdx !== null ? seqAtual.cards[cardIdx] : null;
                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-xl border-2 grid place-items-center relative ${
                      acertado
                        ? "border-[#FBBF24] bg-white"
                        : "border-white/30 bg-white/10 border-dashed"
                    }`}
                  >
                    <span className="absolute top-1 left-1 text-[10px] font-black bg-black/40 rounded px-1">
                      {i + 1}º
                    </span>
                    {card && (
                      <img
                        src={card.imagemUrl}
                        alt={card.nome}
                        className="w-full h-full object-contain p-2"
                        loading="lazy"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Cartas embaralhadas para tocar */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {ordem.map((originalIdx) => {
                const card = seqAtual.cards[originalIdx];
                const feito = colocados.includes(originalIdx);
                const err = erro === originalIdx;
                return (
                  <motion.button
                    key={originalIdx}
                    onClick={() => tocarCard(originalIdx)}
                    disabled={feito}
                    animate={err ? { x: [-6, 6, -4, 4, 0] } : {}}
                    transition={{ duration: 0.35 }}
                    className={`rounded-xl p-2 flex flex-col items-center gap-1 border-2 transition ${
                      feito
                        ? "opacity-30 border-white/20 bg-white/5"
                        : err
                          ? "border-red-400 bg-red-500/20"
                          : "border-white/30 bg-white/15 hover:bg-white/25 active:scale-95"
                    }`}
                  >
                    <img
                      src={card.imagemUrl}
                      alt={card.nome}
                      className="w-16 h-16 object-contain"
                      loading="lazy"
                    />
                    {card.rotulo && (
                      <span className="text-[11px] font-black text-center leading-tight">
                        {card.rotulo}
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </>
        )}

        {(concluido || acabou) && (
          <div className="mt-3 rounded-xl bg-white/15 p-4 text-center">
            <p className="font-black text-lg flex items-center justify-center gap-2">
              {concluido ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-[#FBBF24]" /> Álbum iluminado!
                </>
              ) : (
                <>
                  <X className="h-5 w-5 text-red-300" /> Tempo esgotado!
                </>
              )}
            </p>
            <p className="text-sm text-white/85 mt-1">
              Páginas iluminadas: {concluidas}/{dados.sequencias.length}
            </p>
            <button
              onClick={iniciar}
              className="mt-2 h-10 px-4 rounded-xl bg-white/20 font-black text-white inline-flex items-center gap-1 active:scale-95"
            >
              <RefreshCw className="h-4 w-4" /> Jogar de novo
            </button>
          </div>
        )}
      </div>
    </Secao>
  );
}
