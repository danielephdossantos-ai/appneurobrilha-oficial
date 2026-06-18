import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Volume2, Star, Trophy, Hand, Sparkles } from "lucide-react";
import { TRILHAS, type Sinal, type Trilha, type TrilhaSlug, falar } from "@/data/libras/sinais";
import professoraImg from "@/assets/libras/professora.png";

export const Route = createFileRoute("/neuro-treino/libras")({
  component: LibrasModulo,
});

type Modo = "menu" | "aprender" | "memoria" | "identificar";

function LibrasModulo() {
  const [trilhaSlug, setTrilhaSlug] = useState<TrilhaSlug>("alfabeto");
  const [nivel, setNivel] = useState<1 | 2 | 3>(1);
  const [modo, setModo] = useState<Modo>("menu");
  const [estrelas, setEstrelas] = useState(0);

  const trilha = TRILHAS.find((t) => t.slug === trilhaSlug)!;
  const sinaisNivel = useMemo(
    () => trilha.sinais.filter((s) => s.nivel <= nivel),
    [trilha, nivel],
  );

  // Apresentação por voz ao entrar em cada modo
  useEffect(() => {
    if (modo === "menu") falar(`Vamos aprender LIBRAS!`);
    if (modo === "aprender") falar(`Toque no sinal para ouvir o nome.`);
    if (modo === "memoria") falar(`Encontre os pares iguais.`);
    if (modo === "identificar") falar(`Toque no sinal certo.`);
  }, [modo]);

  return (
    <Shell>
      <div className="pb-8">
        {/* Header */}
        <div className="relative rounded-3xl overflow-hidden mb-4 bg-gradient-to-br from-violet-500 to-fuchsia-600 p-4 shadow-xl">
          <div className="flex items-center gap-3">
            <Link
              to="/neuro-treino"
              className="bg-white/20 hover:bg-white/30 rounded-xl p-2 text-white"
              aria-label="Voltar"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 text-white/80 text-xs font-bold uppercase tracking-widest">
                <Hand className="h-3 w-3" /> Módulo LIBRAS
              </div>
              <h1 className="text-xl font-black text-white">Mãos que falam</h1>
            </div>
            <div className="flex items-center gap-1 bg-amber-400 rounded-full px-3 py-1.5 shadow">
              <Star className="h-4 w-4 text-white fill-white" />
              <span className="text-white font-black text-sm">{estrelas}</span>
            </div>
          </div>
        </div>

        {/* Professora apresentando */}
        {modo === "menu" && (
          <div className="rounded-3xl bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 p-4 mb-5 flex items-center gap-3 shadow-sm">
            <img
              src={professoraImg}
              alt="Professora de LIBRAS"
              width={120}
              height={120}
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow"
            />
            <div className="flex-1">
              <div className="bg-white rounded-2xl p-3 shadow-sm border border-teal-100 relative">
                <p className="text-sm font-bold text-slate-700">
                  Oi! Eu sou a Profe Lia. Vamos aprender LIBRAS juntos?
                </p>
                <button
                  onClick={() => falar("Oi! Eu sou a Profe Lia. Vamos aprender LIBRAS juntos?")}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700"
                >
                  <Volume2 className="h-3.5 w-3.5" /> Ouvir
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Seletor de trilha */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {TRILHAS.map((t) => (
            <button
              key={t.slug}
              onClick={() => {
                setTrilhaSlug(t.slug);
                setModo("menu");
              }}
              className={`rounded-2xl p-3 border-2 font-black text-xs transition-all ${
                trilhaSlug === t.slug
                  ? `bg-gradient-to-br ${t.bg} ${t.cor} border-current shadow-md scale-105`
                  : "bg-card border-border text-muted-foreground hover:border-primary/30"
              }`}
            >
              {t.nome}
            </button>
          ))}
        </div>

        {/* Níveis */}
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Nível
          </span>
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setNivel(n as 1 | 2 | 3)}
              className={`flex-1 rounded-xl py-2 text-sm font-black border-2 transition-all ${
                nivel === n
                  ? "bg-amber-400 border-amber-500 text-white shadow"
                  : "bg-card border-border text-muted-foreground"
              }`}
            >
              {"★".repeat(n)}
            </button>
          ))}
        </div>

        {/* Conteúdo */}
        {modo === "menu" && (
          <ModoMenu onPick={setModo} count={sinaisNivel.length} />
        )}
        {modo === "aprender" && (
          <ModoAprender sinais={sinaisNivel} trilha={trilha} onBack={() => setModo("menu")} />
        )}
        {modo === "memoria" && (
          <ModoMemoria
            sinais={sinaisNivel}
            onWin={() => setEstrelas((e) => e + 3)}
            onBack={() => setModo("menu")}
          />
        )}
        {modo === "identificar" && (
          <ModoIdentificar
            sinais={sinaisNivel}
            onAcerto={() => setEstrelas((e) => e + 1)}
            onBack={() => setModo("menu")}
          />
        )}
      </div>
    </Shell>
  );
}

// ───────────────────────── MENU DE EXERCÍCIOS ─────────────────────────
function ModoMenu({ onPick, count }: { onPick: (m: Modo) => void; count: number }) {
  const opts: { modo: Modo; titulo: string; emoji: string; bg: string }[] = [
    { modo: "aprender", titulo: "Aprender", emoji: "👀", bg: "from-sky-400 to-blue-500" },
    { modo: "memoria", titulo: "Jogo da Memória", emoji: "🧠", bg: "from-emerald-400 to-green-500" },
    { modo: "identificar", titulo: "Qual é o sinal?", emoji: "🎯", bg: "from-rose-400 to-pink-500" },
  ];
  return (
    <div className="space-y-3">
      <div className="text-center text-xs text-muted-foreground font-bold">
        {count} sinais neste nível
      </div>
      {opts.map((o) => (
        <button
          key={o.modo}
          onClick={() => onPick(o.modo)}
          className={`w-full rounded-3xl bg-gradient-to-br ${o.bg} p-5 shadow-lg active:scale-95 transition-all flex items-center gap-4`}
        >
          <div className="text-5xl">{o.emoji}</div>
          <div className="flex-1 text-left">
            <div className="text-white font-black text-xl">{o.titulo}</div>
          </div>
          <Sparkles className="h-6 w-6 text-white/80" />
        </button>
      ))}
    </div>
  );
}

// ───────────────────────── APRENDER ─────────────────────────
function ModoAprender({
  sinais,
  trilha,
  onBack,
}: {
  sinais: Sinal[];
  trilha: Trilha;
  onBack: () => void;
}) {
  return (
    <div>
      <BotaoVoltar onBack={onBack} />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {sinais.map((s) => (
          <button
            key={s.id}
            onClick={() => falar(s.nome)}
            className={`bg-gradient-to-br ${trilha.bg} rounded-3xl p-3 border-2 border-white shadow active:scale-95 transition-all flex flex-col items-center`}
          >
            <SinalFigura sinal={s} />
            <div className="mt-2 inline-flex items-center gap-1 text-xs font-black text-slate-700 bg-white/70 rounded-full px-2 py-0.5">
              <Volume2 className="h-3 w-3" /> Ouvir
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ───────────────────────── MEMÓRIA ─────────────────────────
function ModoMemoria({
  sinais,
  onWin,
  onBack,
}: {
  sinais: Sinal[];
  onWin: () => void;
  onBack: () => void;
}) {
  const pool = sinais.slice(0, 4); // até 4 pares pro MVP
  const [cards, setCards] = useState(() => embaralharPares(pool));
  const [virada, setVirada] = useState<number[]>([]);
  const [feitos, setFeitos] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (feitos.size === pool.length && pool.length > 0) {
      falar("Parabéns! Você ganhou!");
      onWin();
    }
  }, [feitos, pool.length, onWin]);

  function clicar(i: number) {
    if (virada.includes(i) || feitos.has(cards[i].id)) return;
    const nv = [...virada, i];
    setVirada(nv);
    if (nv.length === 2) {
      const [a, b] = nv;
      if (cards[a].id === cards[b].id) {
        setFeitos((f) => new Set(f).add(cards[a].id));
        falar(cards[a].nome);
        setTimeout(() => setVirada([]), 600);
      } else {
        setTimeout(() => setVirada([]), 900);
      }
    } else {
      falar(cards[i].nome);
    }
  }

  return (
    <div>
      <BotaoVoltar onBack={onBack} />
      <div className="grid grid-cols-4 gap-2">
        {cards.map((c, i) => {
          const aberto = virada.includes(i) || feitos.has(c.id);
          return (
            <button
              key={i}
              onClick={() => clicar(i)}
              className={`aspect-square rounded-2xl border-2 transition-all ${
                aberto
                  ? "bg-white border-emerald-300"
                  : "bg-gradient-to-br from-violet-400 to-fuchsia-500 border-fuchsia-600 active:scale-95"
              }`}
            >
              {aberto ? (
                <div className="w-full h-full grid place-items-center p-1">
                  <SinalFigura sinal={c} compact />
                </div>
              ) : (
                <Hand className="h-8 w-8 text-white/80 mx-auto" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function embaralharPares(sinais: Sinal[]): Sinal[] {
  const dobrado = [...sinais, ...sinais];
  for (let i = dobrado.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dobrado[i], dobrado[j]] = [dobrado[j], dobrado[i]];
  }
  return dobrado;
}

// ───────────────────────── IDENTIFICAR ─────────────────────────
function ModoIdentificar({
  sinais,
  onAcerto,
  onBack,
}: {
  sinais: Sinal[];
  onAcerto: () => void;
  onBack: () => void;
}) {
  const [rodada, setRodada] = useState(0);
  const [feedback, setFeedback] = useState<"ok" | "err" | null>(null);

  const desafio = useMemo(() => {
    const alvo = sinais[Math.floor(Math.random() * sinais.length)];
    const outras = sinais.filter((s) => s.id !== alvo.id);
    const opcoes = [alvo, ...embaralhar(outras).slice(0, 2)];
    return { alvo, opcoes: embaralhar(opcoes) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rodada]);

  useEffect(() => {
    const t = setTimeout(() => falar(`Toque no sinal de ${desafio.alvo.nome}`), 300);
    return () => clearTimeout(t);
  }, [desafio]);

  function escolher(s: Sinal) {
    if (s.id === desafio.alvo.id) {
      setFeedback("ok");
      falar("Muito bem!");
      onAcerto();
      setTimeout(() => {
        setFeedback(null);
        setRodada((r) => r + 1);
      }, 900);
    } else {
      setFeedback("err");
      falar("Tenta de novo!");
      setTimeout(() => setFeedback(null), 700);
    }
  }

  return (
    <div>
      <BotaoVoltar onBack={onBack} />
      <div className="text-center mb-4">
        <button
          onClick={() => falar(`Toque no sinal de ${desafio.alvo.nome}`)}
          className="inline-flex items-center gap-2 bg-violet-500 text-white rounded-full px-5 py-3 font-black shadow active:scale-95"
        >
          <Volume2 className="h-5 w-5" />
          Ouvir de novo
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {desafio.opcoes.map((s) => (
          <button
            key={s.id}
            onClick={() => escolher(s)}
            className={`bg-card rounded-3xl p-2 border-4 transition-all ${
              feedback === "ok" && s.id === desafio.alvo.id
                ? "border-emerald-500 scale-110"
                : feedback === "err" && s.id !== desafio.alvo.id
                ? "border-border"
                : "border-border active:scale-95"
            }`}
          >
            <SinalFigura sinal={s} />
          </button>
        ))}
      </div>
      {feedback === "ok" && (
        <div className="mt-4 text-center text-2xl font-black text-emerald-600">
          <Trophy className="h-8 w-8 inline mr-2" /> Acertou!
        </div>
      )}
    </div>
  );
}

function embaralhar<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

// ───────────────────────── COMPARTILHADOS ─────────────────────────
function SinalFigura({ sinal, compact }: { sinal: Sinal; compact?: boolean }) {
  const size = compact ? "w-full h-full" : "w-24 h-24 sm:w-28 sm:h-28";
  const ehLetra = sinal.nome.length === 1;
  return (
    <div className="flex flex-col items-center">
      {sinal.imagem ? (
        <img
          src={sinal.imagem}
          alt={sinal.nome}
          loading="lazy"
          className={`${size} object-contain drop-shadow`}
          draggable={false}
        />
      ) : (
        <div
          className={`${size} grid place-items-center rounded-2xl bg-white/70 border-2 border-dashed border-slate-300`}
        >
          <Hand className="h-10 w-10 text-slate-400" />
        </div>
      )}
      {ehLetra && !compact && (
        <div className="mt-1 text-3xl font-black text-slate-800 leading-none">
          {sinal.nome}
        </div>
      )}
    </div>
  );
}

function BotaoVoltar({ onBack }: { onBack: () => void }) {
  return (
    <button
      onClick={onBack}
      className="mb-3 inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft className="h-3.5 w-3.5" /> Voltar
    </button>
  );
}
