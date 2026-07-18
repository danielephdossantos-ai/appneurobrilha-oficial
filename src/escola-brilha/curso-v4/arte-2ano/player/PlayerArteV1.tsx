import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AulaArteV1, CenaArteV1, CorPrimariaId, PotePrimario } from "@/escola-brilha/curso-v4/types";
import { speakChunked, stopSpeaking as cancelSpeak } from "@/lib/native-tts";
import { useMascot } from "@/contexts/MascotContext";
import { useAppState } from "@/core/store";
import { mascoteDaDisciplina } from "@/escola-brilha/mascotes-disciplina";
import { mascoteAtribuido } from "@/escola-brilha/mascote-assign";

// ============================================================================
// PlayerArteV1 — 11 cenas, cada uma com mecânica exclusiva do ateliê.
// ============================================================================
export function PlayerArteV1({
  aula,
  onSair,
  onConcluir,
}: {
  aula: AulaArteV1;
  onSair: () => void;
  onConcluir: () => void;
}) {
  const cenas: Array<{ chave: string; rotulo: string; cena: CenaArteV1 }> = [
    { chave: "1", rotulo: "🎬 Motivação", cena: aula.cena01_motivacao },
    { chave: "2", rotulo: "🔮 Previsão", cena: aula.cena02_previsao },
    { chave: "3", rotulo: "📚 Vocabulário", cena: aula.cena03_vocabulario },
    { chave: "4", rotulo: "📖 Leitura", cena: aula.cena04_leituraGuiada },
    { chave: "5", rotulo: "🧠 Compreensão", cena: aula.cena05_compreensao },
    { chave: "6", rotulo: "🎭 Ateliê", cena: aula.cena06_personagensLugar },
    { chave: "7", rotulo: "🧩 Sequência", cena: aula.cena07_sequencia },
    { chave: "8", rotulo: "💪 Você lê", cena: aula.cena08_voceLe },
    { chave: "9", rotulo: "🎮 Minijogo", cena: aula.cena09_minijogo },
    { chave: "10", rotulo: "🔁 Revisão", cena: aula.cena10_revisao },
    { chave: "11", rotulo: "✅ Avaliação", cena: aula.cena11_avaliacao },
  ];

  const total = cenas.length;
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [ativo, setAtivo] = useState(0);
  const atual = cenas[ativo];
  const percent = Math.round(((ativo + 1) / total) * 100);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visiveis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visiveis[0]) {
          const i = Number(visiveis[0].target.getAttribute("data-cena-idx"));
          if (!Number.isNaN(i)) setAtivo(i);
        }
      },
      { rootMargin: "-30% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => cancelSpeak(), []);

  const irPara = (i: number) => {
    const el = sectionRefs.current[i];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else if (i >= total) onConcluir();
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#2b1055] via-[#7597de] to-[#ffd6a5]">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #fff 1px, transparent 1px), radial-gradient(circle at 70% 70%, #fff 1px, transparent 1px)",
          backgroundSize: "16px 16px, 22px 22px",
        }}
      />

      <header className="sticky top-0 z-20 backdrop-blur bg-[#2b1055]/70 border-b border-white/15">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={onSair} className="text-xs text-white/80 hover:text-white shrink-0 font-bold">
            ← Sair
          </button>
          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full transition-all bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="text-xs text-white/70 shrink-0 font-bold">
            {ativo + 1} / {total}
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 pb-2 flex items-center justify-between text-[11px] uppercase tracking-widest text-amber-200/90">
          <span>{atual.rotulo}</span>
          <span className="text-white/50">🎨 {aula.titulo}</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-14">
        {cenas.map((c, i) => (
          <section
            key={c.chave}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            data-cena-idx={i}
            className="scroll-mt-24"
          >
            <div className="text-[11px] uppercase tracking-widest text-amber-200/80 font-black mb-2">
              Cena {c.chave} · {c.rotulo}
            </div>
            <CenaRenderer
              cena={c.cena}
              onProxima={() => (i + 1 < total ? irPara(i + 1) : onConcluir())}
              ehUltima={i + 1 >= total}
              ativa={i === ativo}
            />
          </section>
        ))}
      </main>
    </div>
  );
}

// ============================================================================
// Dispatcher
// ============================================================================
function CenaRenderer({
  cena, onProxima, ehUltima, ativa,
}: {
  cena: CenaArteV1; onProxima: () => void; ehUltima: boolean; ativa: boolean;
}) {
  switch (cena.tipo) {
    case "misturaCores": return <CenaMisturaCores cena={cena} onProxima={onProxima} ehUltima={ehUltima} ativa={ativa} />;
    case "previsaoCores": return <CenaPrevisao cena={cena} onProxima={onProxima} ehUltima={ehUltima} ativa={ativa} />;
    case "vocabularioCards": return <CenaVocabulario cena={cena} onProxima={onProxima} ehUltima={ehUltima} ativa={ativa} />;
    case "leituraTintas": return <CenaLeituraTintas cena={cena} onProxima={onProxima} ehUltima={ehUltima} ativa={ativa} />;
    case "quizCores": return <CenaQuizCores cena={cena} onProxima={onProxima} ehUltima={ehUltima} ativa={ativa} />;
    case "pintarAnimais": return <CenaPintarAnimais cena={cena} onProxima={onProxima} ehUltima={ehUltima} ativa={ativa} />;
    case "sequenciaMistura": return <CenaSequencia cena={cena} onProxima={onProxima} ehUltima={ehUltima} ativa={ativa} />;
    case "diarioPintor": return <CenaDiario cena={cena} onProxima={onProxima} ehUltima={ehUltima} ativa={ativa} />;
    case "fabricaPocoes": return <CenaFabricaPocoes cena={cena} onProxima={onProxima} ehUltima={ehUltima} ativa={ativa} />;
    case "rodaCores": return <CenaRodaCores cena={cena} onProxima={onProxima} ehUltima={ehUltima} ativa={ativa} />;
    case "avaliacaoFinal": return <CenaAvaliacaoFinal cena={cena} onProxima={onProxima} ehUltima={ehUltima} ativa={ativa} />;
    case "cenaTematica": return <CenaTematica cena={cena} onProxima={onProxima} ehUltima={ehUltima} ativa={ativa} />;
    default: return <div className="rounded-3xl bg-white/10 p-6 text-center text-sm">Cena em construção</div>;
  }
}

// ============================================================================
// UI helpers
// ============================================================================
function FalaAurora({ texto }: { texto: string }) {
  const { activeMascot } = useMascot();
  const { activeChild } = useAppState();
  const atribuidoSlug = mascoteAtribuido(activeChild?.id, "arte");
  const mascoteArte = mascoteDaDisciplina(atribuidoSlug ?? "arte");
  // Prioridade: mascote atribuído/escolhido para Arte > mascote ativo global > padrão da disciplina
  const nome = atribuidoSlug
    ? mascoteArte.nome
    : (activeMascot?.mascot?.name ?? mascoteArte.nome);
  const img = atribuidoSlug
    ? mascoteArte.imagem
    : (activeMascot?.mascot?.image_url ?? mascoteArte.imagem);
  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="shrink-0 w-14 h-14 rounded-full overflow-hidden bg-white/20 border-2 border-amber-300/60 shadow-lg grid place-items-center">
        <img src={img} alt={nome} className="w-full h-full object-cover" />
      </div>
      <div className="rounded-2xl bg-white/15 border border-white/25 p-3 text-sm leading-relaxed font-medium flex-1">
        <div className="text-[10px] uppercase tracking-widest text-amber-200 font-black mb-1">
          {nome}
        </div>
        {texto}
        <button
          onClick={() => { cancelSpeak(); speakChunked(texto); }}
          className="ml-2 text-amber-200 hover:text-white"
          aria-label="Ouvir novamente"
        >🔊</button>
      </div>
    </div>
  );
}



function BotaoProxima({ onProxima, ehUltima, label }: { onProxima: () => void; ehUltima: boolean; label?: string }) {
  return (
    <button
      onClick={onProxima}
      className="mt-4 mx-auto block px-6 py-2.5 rounded-full bg-white text-slate-900 font-black text-sm shadow-lg hover:scale-105 active:scale-95 transition"
    >
      {label ?? (ehUltima ? "🏆 Terminar aula" : "Próxima cena →")}
    </button>
  );
}

function Painel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#3b1c6b]/80 to-[#1e0f3d]/80 border-2 border-amber-300/30 p-5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
      {children}
    </div>
  );
}

// ============================================================================
// CENA 1 — Mistura de Cores (caldeirão)
// ============================================================================
type Mistura = Extract<CenaArteV1, { tipo: "misturaCores" }>["misturas"][number];

function CenaMisturaCores({
  cena, onProxima, ehUltima, ativa,
}: { cena: Extract<CenaArteV1, { tipo: "misturaCores" }>; onProxima: () => void; ehUltima: boolean; ativa: boolean }) {
  const potes = useMemo(() => {
    const map = new Map<string, PotePrimario>();
    cena.misturas.forEach((m) => { map.set(m.primariaA.id, m.primariaA); map.set(m.primariaB.id, m.primariaB); });
    return Array.from(map.values());
  }, [cena]);

  const [indiceDesafio, setIndiceDesafio] = useState(0);
  const [caldeirao, setCaldeirao] = useState<string[]>([]);
  const [resultado, setResultado] = useState<Mistura | null>(null);
  const [descobertas, setDescobertas] = useState<string[]>([]);
  const [erro, setErro] = useState<string | null>(null);
  const jaFalou = useRef(false);

  const desafio = cena.misturas[indiceDesafio];
  const idsCorretosDoDesafio = desafio ? [desafio.primariaA.id, desafio.primariaB.id] : [];

  const caldeiraoCor = resultado?.resultado.hex ??
    (caldeirao.length === 1 ? potes.find((p) => p.id === caldeirao[0])?.hex ?? "#312e81" : "#312e81");

  useEffect(() => {
    if (ativa && !jaFalou.current) { speakChunked(cena.aurora); jaFalou.current = true; }
  }, [ativa, cena.aurora]);

  const limpar = () => { setCaldeirao([]); setResultado(null); setErro(null); cancelSpeak(); };

  const tocarPote = (idPote: string) => {
    if (resultado || caldeirao.includes(idPote) || !desafio) return;
    const novo = [...caldeirao, idPote];
    setCaldeirao(novo);
    setErro(null);

    if (novo.length === 2) {
      const [a, b] = novo;
      const acertou =
        (a === desafio.primariaA.id && b === desafio.primariaB.id) ||
        (a === desafio.primariaB.id && b === desafio.primariaA.id);

      if (acertou) {
        setResultado(desafio);
        setDescobertas((d) => (d.includes(desafio.id) ? d : [...d, desafio.id]));
        cancelSpeak();
        setTimeout(() => speakChunked(desafio.falaAcerto), 400);
        setTimeout(() => {
          if (indiceDesafio < cena.misturas.length - 1) {
            setIndiceDesafio((i) => i + 1);
            setCaldeirao([]);
            setResultado(null);
          }
        }, 2600);
      } else {
        setErro(`Ops! Essa mistura não faz ${desafio.resultado.nome}. Tenta outra combinação!`);
        setTimeout(() => { setCaldeirao([]); setErro(null); }, 1400);
      }
    }
  };

  const todasFeitas = descobertas.length === cena.misturas.length;

  useEffect(() => {
    if (todasFeitas) {
      const t = setTimeout(() => speakChunked(cena.falaFinal), 500);
      return () => clearTimeout(t);
    }
  }, [todasFeitas, cena.falaFinal]);

  return (
    <Painel>
      <FalaAurora texto={cena.aurora} />
      <div className="text-center text-sm font-bold text-amber-200 mb-2">{cena.instrucao}</div>

      {desafio && !todasFeitas && (
        <div className="mb-3 rounded-2xl bg-white/10 border-2 border-amber-300/50 p-3 text-center">
          <div className="text-[11px] uppercase tracking-widest text-amber-200 mb-1">Missão {indiceDesafio + 1} de {cena.misturas.length}</div>
          <div className="text-white font-bold text-sm mb-2">Misture DOIS potes para fazer:</div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-black shadow-lg border-4"
            style={{ borderColor: desafio.resultado.hex }}>
            <span className="w-6 h-6 rounded-full border-2 border-slate-900/20" style={{ backgroundColor: desafio.resultado.hex }} />
            {desafio.resultado.nome}
          </div>
        </div>
      )}

      <div className="relative mx-auto w-full max-w-xs aspect-square mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-white/30 bg-gradient-to-b from-stone-700 to-stone-900 shadow-inner">
          <div className="absolute inset-6 rounded-full overflow-hidden">
            <motion.div key={caldeiraoCor}
              initial={{ scale: 0.7, opacity: 0.5 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
              className="w-full h-full rounded-full" style={{ backgroundColor: caldeiraoCor }} />
          </div>
          <AnimatePresence>
            {resultado && [...Array(10)].map((_, i) => (
              <motion.div key={`splash-${resultado.id}-${i}`}
                initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                animate={{ scale: 1, x: Math.cos((i / 10) * Math.PI * 2) * 90, y: Math.sin((i / 10) * Math.PI * 2) * 90, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 w-5 h-5 rounded-full"
                style={{ backgroundColor: resultado.resultado.hex, marginLeft: -10, marginTop: -10 }} />
            ))}
          </AnimatePresence>
          {resultado && (
            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-4 py-1.5 rounded-full text-sm font-black shadow-lg border-2"
              style={{ borderColor: resultado.resultado.hex }}>
              {resultado.resultado.nome}!
            </motion.div>
          )}
          {caldeirao.length === 0 && (
            <div className="absolute inset-0 grid place-items-center text-white/60 text-4xl">🫙</div>
          )}
        </div>
      </div>

      {erro && <div className="mb-3 rounded-xl bg-rose-500/20 border border-rose-400/40 p-3 text-sm text-center font-medium text-white">{erro}</div>}

      <div className="grid grid-cols-3 gap-3 mb-4">
        {potes.map((p) => {
          const jaNo = caldeirao.includes(p.id);
          const dica = desafio && idsCorretosDoDesafio.includes(p.id) && caldeirao.length === 1 && caldeirao[0] !== p.id;
          return (
            <button key={p.id}
              onClick={() => tocarPote(p.id)}
              disabled={jaNo || !!resultado}
              className={`relative aspect-square rounded-2xl border-4 flex flex-col items-center justify-center gap-1 font-black text-white shadow-lg transition-all ${
                jaNo || resultado ? "opacity-40 cursor-not-allowed border-white/20" :
                dica ? "border-amber-300 animate-pulse hover:scale-110" :
                "border-white/40 hover:scale-110 active:scale-95"
              }`}
              style={{ backgroundColor: p.hex }}>
              <div className="text-3xl drop-shadow">🎨</div>
              <div className="text-xs uppercase tracking-wider drop-shadow-lg">{p.nome}</div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between text-xs text-white/80 mb-3">
        <span className="font-bold">Descobertas: {descobertas.length} / {cena.misturas.length}</span>
        <button onClick={limpar} className="px-3 py-1 rounded-lg bg-white/10 border border-white/25 hover:bg-white/20 font-bold text-xs">
          🧽 Limpar
        </button>
      </div>

      <div className="flex gap-2 justify-center">
        {cena.misturas.map((m) => {
          const ok = descobertas.includes(m.id);
          return (
            <div key={m.id}
              className={`flex-1 rounded-xl border-2 px-2 py-1.5 text-center text-[11px] font-black ${ok ? "border-white/40 text-slate-900" : "border-dashed border-white/25 text-white/50 bg-white/5"}`}
              style={ok ? { backgroundColor: m.resultado.hex } : {}}>
              {ok ? `✓ ${m.resultado.nome}` : "??"}
            </div>
          );
        })}
      </div>

      {todasFeitas && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-2xl bg-gradient-to-br from-amber-300 to-rose-400 text-slate-900 p-4 text-center font-bold shadow-lg">
          🌈 {cena.falaFinal}
          <BotaoProxima onProxima={onProxima} ehUltima={ehUltima} />
        </motion.div>
      )}
    </Painel>
  );
}

// ============================================================================
// CENA 2 — Previsão
// ============================================================================
function CenaPrevisao({
  cena, onProxima, ehUltima, ativa,
}: { cena: Extract<CenaArteV1, { tipo: "previsaoCores" }>; onProxima: () => void; ehUltima: boolean; ativa: boolean }) {
  const [idx, setIdx] = useState(0);
  const [resposta, setResposta] = useState<number | null>(null);
  const jaFalou = useRef(false);
  useEffect(() => { if (ativa && !jaFalou.current) { speakChunked(cena.aurora); jaFalou.current = true; } }, [ativa, cena.aurora]);

  const rodada = cena.rodadas[idx];
  const ultima = idx === cena.rodadas.length - 1;

  const escolher = (i: number) => {
    if (resposta !== null) return;
    setResposta(i);
    if (rodada.opcoes[i].correta) { cancelSpeak(); setTimeout(() => speakChunked(rodada.feedbackAcerto), 300); }
    else { cancelSpeak(); setTimeout(() => speakChunked("Quase! Olha bem as cores e tenta a próxima."), 200); }
  };

  const proxima = () => {
    if (ultima) { onProxima(); return; }
    setIdx(idx + 1); setResposta(null);
  };

  return (
    <Painel>
      <FalaAurora texto={cena.aurora} />
      <div className="text-center text-xs uppercase tracking-widest text-amber-200 font-black mb-2">
        Rodada {idx + 1} / {cena.rodadas.length}
      </div>

      <div className="flex items-center justify-center gap-3 mb-5">
        <PoteMini pote={rodada.primariaA} />
        <div className="text-3xl font-black text-white">+</div>
        <PoteMini pote={rodada.primariaB} />
        <div className="text-3xl font-black text-white">=</div>
        <div className="w-16 h-16 rounded-2xl border-4 border-dashed border-white/40 grid place-items-center text-white/60 text-2xl">?</div>
      </div>

      <div className="text-center text-sm font-bold text-amber-200 mb-3">Qual cor vai nascer?</div>

      <div className="grid grid-cols-3 gap-3">
        {rodada.opcoes.map((op, i) => {
          const escolhida = resposta === i;
          const revelaCerta = resposta !== null && op.correta;
          return (
            <button key={i} onClick={() => escolher(i)} disabled={resposta !== null}
              className={`aspect-square rounded-2xl border-4 flex flex-col items-center justify-center gap-1 font-black text-white shadow-lg transition-all ${
                resposta === null ? "border-white/40 hover:scale-110 active:scale-95" :
                escolhida ? (op.correta ? "border-emerald-300 scale-105" : "border-rose-400 opacity-70") :
                revelaCerta ? "border-emerald-300 ring-2 ring-emerald-200" : "border-white/20 opacity-40"
              }`}
              style={{ backgroundColor: op.hex }}>
              <div className="text-xs uppercase tracking-wider drop-shadow-lg">{op.nome}</div>
              {resposta !== null && op.correta && <div className="text-lg">✓</div>}
              {escolhida && !op.correta && <div className="text-lg">✗</div>}
            </button>
          );
        })}
      </div>

      {resposta !== null && (
        <div className={`mt-4 rounded-2xl p-3 text-center font-bold ${rodada.opcoes[resposta].correta ? "bg-emerald-500/20 border border-emerald-300/40" : "bg-rose-500/20 border border-rose-300/40"}`}>
          {rodada.opcoes[resposta].correta ? `✨ ${rodada.feedbackAcerto}` : "Quase! Observe as cores primárias e o que elas formam juntas."}
          <BotaoProxima onProxima={proxima} ehUltima={ultima && ehUltima} label={ultima ? (ehUltima ? "🏆 Terminar" : "Próxima cena →") : "Próxima rodada →"} />
        </div>
      )}
    </Painel>
  );
}

function PoteMini({ pote }: { pote: PotePrimario }) {
  return (
    <div className="w-16 h-16 rounded-2xl border-4 border-white/40 grid place-items-center shadow-lg" style={{ backgroundColor: pote.hex }}>
      <div className="text-white text-[10px] font-black uppercase tracking-wider drop-shadow-lg text-center leading-tight">{pote.nome}</div>
    </div>
  );
}

// ============================================================================
// CENA 3 — Vocabulário (cartões viráveis)
// ============================================================================
function CenaVocabulario({
  cena, onProxima, ehUltima, ativa,
}: { cena: Extract<CenaArteV1, { tipo: "vocabularioCards" }>; onProxima: () => void; ehUltima: boolean; ativa: boolean }) {
  const [virados, setVirados] = useState<Set<number>>(new Set());
  const jaFalou = useRef(false);
  useEffect(() => { if (ativa && !jaFalou.current) { speakChunked(cena.aurora); jaFalou.current = true; } }, [ativa, cena.aurora]);

  const virar = (i: number) => {
    setVirados((s) => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; });
    cancelSpeak();
    speakChunked(`${cena.cards[i].termo}. ${cena.cards[i].definicao}`);
  };

  const todos = virados.size === cena.cards.length;

  return (
    <Painel>
      <FalaAurora texto={cena.aurora} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cena.cards.map((c, i) => {
          const virado = virados.has(i);
          return (
            <button key={i} onClick={() => virar(i)}
              className="relative w-full min-h-[9rem] sm:aspect-[3/4] sm:min-h-0 rounded-2xl border-4 border-white/30 shadow-lg transition-all hover:scale-[1.02] overflow-hidden"
              style={{ backgroundColor: virado ? "white" : c.cor }}>
              {!virado ? (
                <div className="h-full flex flex-row sm:flex-col items-center justify-center sm:justify-center gap-3 sm:gap-2 p-3 text-white">
                  {c.fotoUrl ? (
                    <img src={c.fotoUrl} alt="" loading="lazy" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 object-cover rounded-full border-2 border-white/50 shadow-md" />
                  ) : (
                    <div className="text-4xl sm:text-5xl shrink-0 drop-shadow">{c.emoji}</div>
                  )}
                  <div className="min-w-0 flex-1 sm:flex-none text-left sm:text-center">
                    <div className="text-lg font-black uppercase tracking-wider drop-shadow-lg">{c.termo}</div>
                    <div className="text-[10px] mt-1 text-white/80">toque para virar</div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-row sm:flex-col items-center gap-3 sm:gap-2 p-3 sm:p-2 text-slate-900">
                  {c.fotoUrl ? (
                    <img src={c.fotoUrl} alt="" loading="lazy" className="w-20 h-20 sm:w-full sm:h-24 shrink-0 object-cover rounded-lg" />
                  ) : (
                    <div className="text-3xl shrink-0">{c.emoji}</div>
                  )}
                  <div className="min-w-0 flex-1 text-left sm:text-center">
                    <div className="text-sm font-black" style={{ color: c.cor }}>{c.termo}</div>
                    <div className="text-xs leading-tight">{c.definicao}</div>
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
      {todos && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-center">
          <div className="text-amber-200 font-bold text-sm mb-2">✨ Você virou todos os cartões do ateliê!</div>
          <BotaoProxima onProxima={onProxima} ehUltima={ehUltima} />
        </motion.div>
      )}
    </Painel>
  );
}

// ============================================================================
// CENA 4 — Leitura guiada (parágrafos + pigmentos)
// ============================================================================
function CenaLeituraTintas({
  cena, onProxima, ehUltima, ativa,
}: { cena: Extract<CenaArteV1, { tipo: "leituraTintas" }>; onProxima: () => void; ehUltima: boolean; ativa: boolean }) {
  const [lidos, setLidos] = useState<Set<number>>(new Set());
  const [pigmentoOn, setPigmentoOn] = useState<number | null>(null);
  const jaFalou = useRef(false);
  useEffect(() => { if (ativa && !jaFalou.current) { speakChunked(cena.aurora); jaFalou.current = true; } }, [ativa, cena.aurora]);

  const ler = (i: number) => {
    setLidos((s) => new Set(s).add(i));
    cancelSpeak();
    speakChunked(cena.paragrafos[i]);
  };
  const tocarPigmento = (i: number) => {
    setPigmentoOn(i); cancelSpeak();
    const p = cena.pigmentos[i];
    speakChunked(`${p.nome}. Vem de ${p.fonte}.`);
  };

  const todosLidos = lidos.size === cena.paragrafos.length;

  return (
    <Painel>
      <FalaAurora texto={cena.aurora} />
      <div className="space-y-2 mb-5">
        {cena.paragrafos.map((p, i) => (
          <button key={i} onClick={() => ler(i)}
            className={`w-full text-left rounded-2xl p-3 border-2 transition-all ${lidos.has(i) ? "bg-white/20 border-amber-300/60" : "bg-white/5 border-white/20 hover:bg-white/10"}`}>
            <div className="flex items-start gap-2">
              <span className="text-lg shrink-0">{lidos.has(i) ? "✓" : "🔊"}</span>
              <span className="text-sm leading-relaxed font-medium">{p}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="text-center text-xs uppercase tracking-widest text-amber-200 font-black mb-2">
        Toque nos pigmentos naturais
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
        {cena.pigmentos.map((p, i) => (
          <button key={i} onClick={() => tocarPigmento(i)}
            className={`aspect-square rounded-2xl border-4 flex flex-col items-center justify-center gap-1 overflow-hidden transition-all ${pigmentoOn === i ? "border-amber-300 scale-105" : "border-white/30 hover:scale-105"}`}
            style={{ backgroundColor: p.fotoUrl ? "transparent" : p.hex }}>
            {p.fotoUrl ? (
              <img src={p.fotoUrl} alt={p.nome} loading="lazy" className="w-full h-full object-cover" />
            ) : (
              <div className="text-4xl sm:text-2xl drop-shadow">{p.emoji}</div>
            )}
          </button>
        ))}
      </div>
      {pigmentoOn !== null && (
        <div className="rounded-xl bg-white/15 border border-white/25 p-3 text-center text-sm font-bold">
          {cena.pigmentos[pigmentoOn].nome} · <span className="text-amber-200">de {cena.pigmentos[pigmentoOn].fonte}</span>
        </div>
      )}

      {todosLidos && <BotaoProxima onProxima={onProxima} ehUltima={ehUltima} />}
    </Painel>
  );
}

// ============================================================================
// CENA 5 — Quiz encadeado
// ============================================================================
function CenaQuizCores({
  cena, onProxima, ehUltima, ativa,
}: { cena: Extract<CenaArteV1, { tipo: "quizCores" }>; onProxima: () => void; ehUltima: boolean; ativa: boolean }) {
  const [idx, setIdx] = useState(0);
  const [resp, setResp] = useState<number | null>(null);
  const [acertos, setAcertos] = useState(0);
  const jaFalou = useRef(false);
  useEffect(() => { if (ativa && !jaFalou.current) { speakChunked(cena.aurora); jaFalou.current = true; } }, [ativa, cena.aurora]);

  const q = cena.perguntas[idx];
  const ultima = idx === cena.perguntas.length - 1;

  const escolher = (i: number) => {
    if (resp !== null) return;
    setResp(i);
    const certa = q.alternativas[i].correta;
    if (certa) setAcertos((a) => a + 1);
    cancelSpeak();
    setTimeout(() => speakChunked(certa ? q.feedbackAcerto : q.feedbackErro), 250);
  };
  const proxima = () => {
    if (ultima) { onProxima(); return; }
    setIdx(idx + 1); setResp(null);
  };

  return (
    <Painel>
      <FalaAurora texto={cena.aurora} />
      <div className="flex items-center justify-between text-xs mb-3">
        <span className="uppercase tracking-widest text-amber-200 font-black">Pergunta {idx + 1}/{cena.perguntas.length}</span>
        <span className="font-bold text-white/80">✨ {acertos} acertos</span>
      </div>
      {q.fotoUrl && (
        <div className="rounded-2xl overflow-hidden border-2 border-amber-300/40 mb-3 bg-black/20">
          <img src={q.fotoUrl} alt="" loading="lazy" className="w-full h-48 object-cover" />
        </div>
      )}
      <div className="rounded-2xl bg-white/10 border border-white/20 p-4 mb-3 text-lg font-black leading-snug">{q.pergunta}</div>
      <div className="grid grid-cols-1 gap-2">
        {q.alternativas.map((a, i) => {
          const escolhida = resp === i;
          const revelaCerta = resp !== null && a.correta;
          return (
            <button key={i} onClick={() => escolher(i)} disabled={resp !== null}
              className={`text-left rounded-xl p-3 border-2 font-bold text-sm transition-all ${
                resp === null ? "bg-white/10 border-white/25 hover:bg-white/20" :
                escolhida ? (a.correta ? "bg-emerald-500/30 border-emerald-300" : "bg-rose-500/30 border-rose-300") :
                revelaCerta ? "bg-emerald-500/20 border-emerald-300/60" : "bg-white/5 border-white/15 opacity-60"
              }`}>
              {a.texto} {resp !== null && a.correta && "✓"}
            </button>
          );
        })}
      </div>
      {resp !== null && (
        <div className={`mt-4 rounded-2xl p-3 text-sm font-bold ${q.alternativas[resp].correta ? "bg-emerald-500/20 border border-emerald-300/40" : "bg-amber-500/20 border border-amber-300/40"}`}>
          {q.alternativas[resp].correta ? `✨ ${q.feedbackAcerto}` : `💡 ${q.feedbackErro}`}
          <BotaoProxima onProxima={proxima} ehUltima={ultima && ehUltima} label={ultima ? (ehUltima ? "🏆 Terminar" : "Próxima cena →") : "Próxima pergunta →"} />
        </div>
      )}
    </Painel>
  );
}

// ============================================================================
// CENA 6 — Pintar animais
// ============================================================================
function CenaPintarAnimais({
  cena, onProxima, ehUltima, ativa,
}: { cena: Extract<CenaArteV1, { tipo: "pintarAnimais" }>; onProxima: () => void; ehUltima: boolean; ativa: boolean }) {
  const [idx, setIdx] = useState(0);
  const [pintado, setPintado] = useState<string | null>(null);
  const jaFalou = useRef(false);
  useEffect(() => { if (ativa && !jaFalou.current) { speakChunked(cena.aurora); jaFalou.current = true; } }, [ativa, cena.aurora]);

  const animal = cena.animais[idx];
  const ultimo = idx === cena.animais.length - 1;

  const escolher = (hex: string, nome: string) => {
    if (pintado) return;
    setPintado(hex);
    if (hex === animal.corAlvo.hex) { cancelSpeak(); setTimeout(() => speakChunked(animal.falaAcerto), 300); }
    else { cancelSpeak(); setTimeout(() => speakChunked(`${nome} não é a cor do ${animal.nome}. Tenta de novo!`), 200); }
  };

  const proxima = () => {
    if (pintado !== animal.corAlvo.hex) { setPintado(null); return; }
    if (ultimo) { onProxima(); return; }
    setIdx(idx + 1); setPintado(null);
  };

  return (
    <Painel>
      <FalaAurora texto={cena.aurora} />
      <div className="text-center text-xs uppercase tracking-widest text-amber-200 font-black mb-3">
        Animal {idx + 1} / {cena.animais.length}
      </div>

      <div className="relative mx-auto w-44 h-44 rounded-full grid place-items-center mb-4 border-4 border-white/30 overflow-hidden transition-colors"
        style={{ backgroundColor: pintado === animal.corAlvo.hex ? animal.corAlvo.hex : "rgba(255,255,255,0.1)" }}>
        {animal.fotoUrl ? (
          <img src={animal.fotoUrl} alt={animal.nome} loading="lazy" className="w-full h-full object-cover transition-all"
            style={{ filter: pintado === animal.corAlvo.hex ? "none" : "grayscale(1) opacity(0.6)" }} />
        ) : (
          <div className="text-7xl drop-shadow-lg" style={{ filter: pintado === animal.corAlvo.hex ? "none" : "grayscale(1) opacity(0.7)" }}>{animal.emoji}</div>
        )}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-3 py-0.5 rounded-full text-xs font-black shadow">{animal.nome}</div>
      </div>

      <div className="text-center text-sm font-bold text-amber-200 mb-3 mt-4">
        Qual cor pinta o {animal.nome}?
      </div>

      <div className="grid grid-cols-3 gap-3">
        {animal.opcoes.map((op, i) => {
          const escolhida = pintado === op.hex;
          const certa = op.hex === animal.corAlvo.hex;
          return (
            <button key={i} onClick={() => escolher(op.hex, op.nome)} disabled={!!pintado && pintado === animal.corAlvo.hex}
              className={`aspect-square rounded-2xl border-4 flex flex-col items-center justify-center gap-1 font-black text-white shadow-lg transition-all ${
                !pintado ? "border-white/40 hover:scale-110 active:scale-95" :
                escolhida ? (certa ? "border-emerald-300 scale-105" : "border-rose-400") :
                pintado === animal.corAlvo.hex && certa ? "border-emerald-300" : "border-white/20 opacity-40"
              }`}
              style={{ backgroundColor: op.hex }}>
              <div className="text-xs uppercase tracking-wider drop-shadow-lg">{op.nome}</div>
              {escolhida && (certa ? <div className="text-lg">✓</div> : <div className="text-lg">✗</div>)}
            </button>
          );
        })}
      </div>

      {pintado && (
        <div className={`mt-4 rounded-2xl p-3 text-center font-bold ${pintado === animal.corAlvo.hex ? "bg-emerald-500/20 border border-emerald-300/40" : "bg-rose-500/20 border border-rose-300/40"}`}>
          {pintado === animal.corAlvo.hex ? `✨ ${animal.falaAcerto}` : "💡 Tenta outra cor!"}
          {pintado === animal.corAlvo.hex && (
            <BotaoProxima onProxima={proxima} ehUltima={ultimo && ehUltima} label={ultimo ? (ehUltima ? "🏆 Terminar" : "Próxima cena →") : "Próximo animal →"} />
          )}
          {pintado !== animal.corAlvo.hex && (
            <button onClick={() => setPintado(null)} className="mt-3 mx-auto block px-4 py-1.5 rounded-full bg-white text-slate-900 font-black text-xs">
              Tentar de novo
            </button>
          )}
        </div>
      )}
    </Painel>
  );
}

// ============================================================================
// CENA 7 — Sequência (ordenar passos)
// ============================================================================
function CenaSequencia({
  cena, onProxima, ehUltima, ativa,
}: { cena: Extract<CenaArteV1, { tipo: "sequenciaMistura" }>; onProxima: () => void; ehUltima: boolean; ativa: boolean }) {
  const embaralhados = useMemo(() => [...cena.passos].sort(() => Math.random() - 0.5), [cena]);
  const [ordem, setOrdem] = useState<string[]>([]);
  const [errou, setErrou] = useState(false);
  const jaFalou = useRef(false);
  useEffect(() => { if (ativa && !jaFalou.current) { speakChunked(cena.aurora); jaFalou.current = true; } }, [ativa, cena.aurora]);

  const escolher = (id: string) => {
    if (ordem.includes(id)) return;
    const proxIdx = ordem.length + 1;
    const passo = cena.passos.find((p) => p.id === id)!;
    if (passo.ordem !== proxIdx) { setErrou(true); cancelSpeak(); setTimeout(() => speakChunked("Esse não é o próximo passo. Pensa: o que vem primeiro?"), 200); return; }
    setErrou(false);
    const novo = [...ordem, id];
    setOrdem(novo);
    cancelSpeak();
    speakChunked(passo.texto);
    if (novo.length === cena.passos.length) setTimeout(() => speakChunked(cena.falaAcerto), 700);
  };

  const resetar = () => { setOrdem([]); setErrou(false); };
  const completo = ordem.length === cena.passos.length;

  return (
    <Painel>
      <FalaAurora texto={cena.aurora} />

      <div className="rounded-2xl bg-white/10 border border-white/20 p-3 mb-4 min-h-[100px]">
        <div className="text-[10px] uppercase tracking-widest text-amber-200 font-black mb-2">Sua sequência</div>
        {ordem.length === 0 ? (
          <div className="text-white/50 text-sm text-center py-4">Escolha os passos NA ORDEM CERTA ↓</div>
        ) : (
          <div className="flex flex-col gap-1.5">
            {ordem.map((id, i) => {
              const p = cena.passos.find((x) => x.id === id)!;
              return (
                <div key={id} className="flex items-center gap-3 bg-emerald-500/20 border border-emerald-300/40 rounded-xl p-2 text-sm font-bold">
                  <span className="w-7 h-7 rounded-full bg-emerald-400 text-slate-900 grid place-items-center text-xs font-black shrink-0">{i + 1}</span>
                  {p.fotoUrl ? (
                    <img src={p.fotoUrl} alt="" loading="lazy" className="w-16 h-16 sm:w-12 sm:h-12 rounded-lg object-cover shrink-0" />
                  ) : (
                    <span className="text-2xl shrink-0">{p.emoji}</span>
                  )}
                  <span className="min-w-0">{p.texto}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {errou && <div className="mb-3 rounded-xl bg-rose-500/20 border border-rose-400/40 p-2 text-xs text-center font-bold">Ops! Esse não é o próximo passo.</div>}

      <div className="grid grid-cols-1 gap-2">
        {embaralhados.map((p) => {
          const usado = ordem.includes(p.id);
          return (
            <button key={p.id} onClick={() => escolher(p.id)} disabled={usado || completo}
              className={`text-left rounded-xl p-3 border-2 font-bold text-sm flex items-center gap-3 transition-all ${
                usado ? "bg-white/5 border-white/10 opacity-40" : "bg-white/10 border-white/25 hover:bg-white/20 active:scale-95"
              }`}>
              {p.fotoUrl ? (
                <img src={p.fotoUrl} alt="" loading="lazy" className="w-24 h-24 sm:w-16 sm:h-16 rounded-xl object-cover shrink-0" />
              ) : (
                <span className="text-2xl shrink-0">{p.emoji}</span>
              )}
              <span className="min-w-0">{p.texto}</span>
            </button>
          );
        })}
      </div>

      {!completo && ordem.length > 0 && (
        <button onClick={resetar} className="mt-3 mx-auto block px-3 py-1 rounded-lg bg-white/10 border border-white/25 text-xs font-bold">🧽 Recomeçar</button>
      )}

      {completo && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-2xl bg-gradient-to-br from-amber-300 to-emerald-400 text-slate-900 p-4 text-center font-bold shadow-lg">
          🎉 {cena.falaAcerto}
          <BotaoProxima onProxima={onProxima} ehUltima={ehUltima} />
        </motion.div>
      )}
    </Painel>
  );
}

// ============================================================================
// CENA 8 — Diário do pintor
// ============================================================================
function CenaDiario({
  cena, onProxima, ehUltima, ativa,
}: { cena: Extract<CenaArteV1, { tipo: "diarioPintor" }>; onProxima: () => void; ehUltima: boolean; ativa: boolean }) {
  const [lidos, setLidos] = useState<Set<number>>(new Set());
  const jaFalou = useRef(false);
  useEffect(() => { if (ativa && !jaFalou.current) { speakChunked(cena.aurora); jaFalou.current = true; } }, [ativa, cena.aurora]);

  const ler = (i: number) => {
    setLidos((s) => new Set(s).add(i));
    cancelSpeak();
    const t = cena.trechos[i];
    speakChunked(t.palavraDestaque ? `${t.texto} ${t.palavraDestaque}` : t.texto);
  };
  const todos = lidos.size === cena.trechos.length;

  return (
    <Painel>
      <FalaAurora texto={cena.aurora} />

      <div className="rounded-3xl bg-amber-50 text-slate-800 p-5 shadow-inner border-4 border-amber-200"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent 0, transparent 28px, #fbbf24 28px, #fbbf24 29px)" }}>
        <div className="text-center text-lg font-black mb-3 text-rose-600 border-b-2 border-rose-300 pb-1">
          📖 {cena.titulo}
        </div>
        <div className="space-y-3">
          {cena.trechos.map((t, i) => (
            <button key={i} onClick={() => ler(i)}
              className={`w-full text-left text-base font-bold leading-relaxed p-2 rounded-lg transition-all ${lidos.has(i) ? "bg-emerald-100" : "hover:bg-amber-100"}`}>
              <span className="text-emerald-600 mr-1">{lidos.has(i) ? "✓" : "🔊"}</span>
              {t.texto}{" "}
              {t.palavraDestaque && (
                <span className="px-2 py-0.5 rounded-lg text-white font-black shadow" style={{ backgroundColor: t.corDestaque }}>
                  {t.palavraDestaque}
                </span>
              )}.
            </button>
          ))}
        </div>
      </div>

      {todos && (
        <div className="mt-4 text-center">
          <div className="text-amber-200 font-bold text-sm mb-1">📚 Você leu o diário todo!</div>
          <BotaoProxima onProxima={onProxima} ehUltima={ehUltima} />
        </div>
      )}
    </Painel>
  );
}

// ============================================================================
// CENA 9 — Fábrica de Poções (minijogo cronometrado)
// ============================================================================
function CenaFabricaPocoes({
  cena, onProxima, ehUltima, ativa,
}: { cena: Extract<CenaArteV1, { tipo: "fabricaPocoes" }>; onProxima: () => void; ehUltima: boolean; ativa: boolean }) {
  const [rodando, setRodando] = useState(false);
  const [tempo, setTempo] = useState(cena.tempoSeg);
  const [pontos, setPontos] = useState(0);
  const [pedidoIdx, setPedidoIdx] = useState(0);
  const [selecionados, setSelecionados] = useState<CorPrimariaId[]>([]);
  const [flash, setFlash] = useState<"acerto" | "erro" | null>(null);
  const [fim, setFim] = useState(false);
  const jaFalou = useRef(false);

  useEffect(() => { if (ativa && !jaFalou.current) { speakChunked(cena.aurora); jaFalou.current = true; } }, [ativa, cena.aurora]);

  useEffect(() => {
    if (!rodando) return;
    if (tempo <= 0) { setFim(true); setRodando(false); cancelSpeak(); speakChunked(`Fim! Você fez ${pontos} poções!`); return; }
    const t = setTimeout(() => setTempo((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [rodando, tempo, pontos]);

  const pedido = cena.pedidos[pedidoIdx % cena.pedidos.length];

  const clicar = (id: CorPrimariaId) => {
    if (!rodando || fim || selecionados.includes(id)) return;
    const novo = [...selecionados, id] as CorPrimariaId[];
    setSelecionados(novo);
    if (novo.length === 2) {
      const ing = pedido.ingredientes.map((p) => p.id).sort().join("-");
      const esc = [...novo].sort().join("-");
      if (ing === esc) {
        setPontos((p) => p + 1); setFlash("acerto");
      } else {
        setFlash("erro");
      }
      setTimeout(() => { setSelecionados([]); setFlash(null); setPedidoIdx((i) => i + 1); }, 600);
    }
  };

  const iniciar = () => { setRodando(true); setTempo(cena.tempoSeg); setPontos(0); setPedidoIdx(0); setFim(false); setSelecionados([]); };

  return (
    <Painel>
      <FalaAurora texto={cena.aurora} />

      {!rodando && !fim && (
        <button onClick={iniciar} className="w-full py-4 rounded-2xl bg-amber-400 text-slate-900 font-black text-lg shadow-lg hover:scale-105 transition">
          ▶️ COMEÇAR ({cena.tempoSeg}s)
        </button>
      )}

      {rodando && (
        <>
          <div className="flex items-center justify-between mb-3">
            <div className="text-lg font-black">⏱️ {tempo}s</div>
            <div className="text-lg font-black text-amber-200">✨ {pontos}</div>
          </div>

          <div className={`relative rounded-3xl border-4 p-6 mb-4 text-center transition-all ${flash === "acerto" ? "border-emerald-300 bg-emerald-500/20" : flash === "erro" ? "border-rose-400 bg-rose-500/20" : "border-white/30 bg-white/10"}`}>
            <div className="text-xs uppercase tracking-widest text-amber-200 font-black mb-2">Pedido</div>
            <div className="w-20 h-20 mx-auto rounded-full border-4 border-white shadow-lg mb-2" style={{ backgroundColor: pedido.corAlvo.hex }} />
            <div className="text-lg font-black">Faça {pedido.corAlvo.nome}!</div>
            <div className="text-xs text-white/70 mt-1">Toque as 2 primárias certas</div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {cena.potes.map((p) => {
              const sel = selecionados.includes(p.id);
              return (
                <button key={p.id} onClick={() => clicar(p.id)}
                  className={`aspect-square rounded-2xl border-4 flex flex-col items-center justify-center gap-1 font-black text-white shadow-lg transition-all ${sel ? "border-amber-300 scale-95" : "border-white/40 hover:scale-110 active:scale-95"}`}
                  style={{ backgroundColor: p.hex }}>
                  <div className="text-3xl drop-shadow">🎨</div>
                  <div className="text-xs uppercase tracking-wider drop-shadow-lg">{p.nome}</div>
                </button>
              );
            })}
          </div>
        </>
      )}

      {fim && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl bg-gradient-to-br from-amber-300 to-rose-400 text-slate-900 p-5 text-center font-bold shadow-lg">
          <div className="text-4xl mb-2">🏆</div>
          <div className="text-xl">Você fez {pontos} poções!</div>
          <div className="text-sm mt-1">
            {pontos >= 5 ? "Mestre poceiro!" : pontos >= 3 ? "Boa mistura!" : "Bora treinar mais!"}
          </div>
          <div className="flex gap-2 justify-center mt-3">
            <button onClick={iniciar} className="px-4 py-2 rounded-full bg-slate-900 text-white font-black text-sm">🔁 Jogar de novo</button>
            <button onClick={onProxima} className="px-4 py-2 rounded-full bg-white text-slate-900 font-black text-sm">{ehUltima ? "🏆 Terminar" : "Próxima →"}</button>
          </div>
        </motion.div>
      )}
    </Painel>
  );
}

// ============================================================================
// CENA 10 — Roda das cores
// ============================================================================
function CenaRodaCores({
  cena, onProxima, ehUltima, ativa,
}: { cena: Extract<CenaArteV1, { tipo: "rodaCores" }>; onProxima: () => void; ehUltima: boolean; ativa: boolean }) {
  const [sel, setSel] = useState<Set<CorPrimariaId>>(new Set());
  const jaFalou = useRef(false);
  useEffect(() => { if (ativa && !jaFalou.current) { speakChunked(cena.aurora); jaFalou.current = true; } }, [ativa, cena.aurora]);

  const toggle = (id: CorPrimariaId) => {
    setSel((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else { if (n.size >= 2) n.clear(); n.add(id); }
      return n;
    });
  };

  const selArr = Array.from(sel).sort();
  const secundariaAtiva = selArr.length === 2
    ? cena.secundarias.find((s) => [...s.entre].sort().join("-") === selArr.join("-"))
    : null;

  useEffect(() => {
    if (secundariaAtiva) { cancelSpeak(); speakChunked(`As duas juntas fazem ${secundariaAtiva.nome}!`); }
  }, [secundariaAtiva]);

  // Posições em círculo (3 primárias em 120°)
  const posPrim = [
    { top: "5%", left: "50%" },
    { top: "72%", left: "10%" },
    { top: "72%", left: "90%" },
  ];
  const posSec = [
    { top: "40%", left: "20%" },  // entre primária 0 e 1
    { top: "40%", left: "80%" },  // entre 0 e 2
    { top: "85%", left: "50%" },  // entre 1 e 2
  ];

  return (
    <Painel>
      <FalaAurora texto={cena.aurora} />
      <div className="text-center text-xs uppercase tracking-widest text-amber-200 font-black mb-3">
        Toque em 2 primárias para ver a secundária!
      </div>

      <div className="relative mx-auto w-full max-w-sm aspect-square rounded-full bg-white/5 border-2 border-dashed border-white/20 mb-4">
        {cena.primarias.map((p, i) => (
          <button key={p.id} onClick={() => toggle(p.id)}
            className={`absolute w-20 h-20 -ml-10 -mt-10 rounded-full border-4 flex flex-col items-center justify-center font-black text-white shadow-lg transition-all ${sel.has(p.id) ? "border-amber-300 scale-110" : "border-white/40 hover:scale-105"}`}
            style={{ ...posPrim[i], backgroundColor: p.hex }}>
            <div className="text-2xl drop-shadow">🎨</div>
            <div className="text-[10px] uppercase drop-shadow-lg">{p.nome}</div>
          </button>
        ))}

        {cena.secundarias.map((s, i) => {
          const ativa = secundariaAtiva?.nome === s.nome;
          return (
            <div key={s.nome}
              className={`absolute w-14 h-14 -ml-7 -mt-7 rounded-full border-4 flex items-center justify-center font-black text-white shadow-lg transition-all ${ativa ? "border-white scale-125" : "border-white/30 opacity-40"}`}
              style={{ ...posSec[i], backgroundColor: s.hex }}>
              <div className="text-[10px] uppercase drop-shadow-lg text-center leading-tight">{ativa ? s.nome : "?"}</div>
            </div>
          );
        })}
      </div>

      {secundariaAtiva && (
        <div className="rounded-2xl bg-white/15 border border-white/25 p-3 text-center font-bold text-sm mb-3">
          ✨ Essas duas primárias formam <span className="text-amber-200">{secundariaAtiva.nome}</span>!
        </div>
      )}

      <BotaoProxima onProxima={onProxima} ehUltima={ehUltima} />
    </Painel>
  );
}

// ============================================================================
// CENA 11 — Avaliação final + missão família
// ============================================================================
function CenaAvaliacaoFinal({
  cena, onProxima, ehUltima, ativa,
}: { cena: Extract<CenaArteV1, { tipo: "avaliacaoFinal" }>; onProxima: () => void; ehUltima: boolean; ativa: boolean }) {
  const [resp, setResp] = useState<number | null>(null);
  const jaFalou = useRef(false);
  useEffect(() => { if (ativa && !jaFalou.current) { speakChunked(cena.aurora); jaFalou.current = true; } }, [ativa, cena.aurora]);

  const escolher = (i: number) => {
    if (resp !== null) return;
    setResp(i);
    if (cena.quiz.alternativas[i].correta) { cancelSpeak(); setTimeout(() => speakChunked(cena.quiz.feedback), 250); }
    else { cancelSpeak(); setTimeout(() => speakChunked("Quase! Olha bem: as primárias são Vermelho, Azul e Amarelo."), 200); }
  };

  const acertou = resp !== null && cena.quiz.alternativas[resp].correta;

  return (
    <Painel>
      <FalaAurora texto={cena.aurora} />

      <div className="rounded-2xl bg-white/10 border border-white/20 p-4 mb-3 text-base font-black">{cena.quiz.pergunta}</div>
      <div className="grid grid-cols-1 gap-2 mb-3">
        {cena.quiz.alternativas.map((a, i) => {
          const escolhida = resp === i;
          const revelaCerta = resp !== null && a.correta;
          return (
            <button key={i} onClick={() => escolher(i)} disabled={resp !== null}
              className={`text-left rounded-xl p-3 border-2 font-bold text-sm ${
                resp === null ? "bg-white/10 border-white/25 hover:bg-white/20" :
                escolhida ? (a.correta ? "bg-emerald-500/30 border-emerald-300" : "bg-rose-500/30 border-rose-300") :
                revelaCerta ? "bg-emerald-500/20 border-emerald-300/60" : "bg-white/5 border-white/15 opacity-60"
              }`}>
              {a.texto} {resp !== null && a.correta && "✓"}
            </button>
          );
        })}
      </div>

      {resp !== null && (
        <div className={`rounded-2xl p-3 text-sm font-bold mb-3 ${acertou ? "bg-emerald-500/20 border border-emerald-300/40" : "bg-amber-500/20 border border-amber-300/40"}`}>
          {acertou ? `✨ ${cena.quiz.feedback}` : "💡 Volta na Cena 3 e revê as cores primárias!"}
        </div>
      )}

      <div className="rounded-2xl bg-rose-500/15 border-2 border-rose-300/30 p-4 mb-3">
        <div className="text-[10px] uppercase tracking-widest text-rose-200 font-black mb-1">🏠 Missão em Família</div>
        <div className="text-sm font-medium leading-relaxed">{cena.missaoFamilia}</div>
      </div>

      {acertou && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-gradient-to-br from-amber-300 to-emerald-400 text-slate-900 p-4 text-center font-bold shadow-lg">
          <div className="text-4xl mb-1">🌈</div>
          <div className="text-sm">{cena.recompensaTitulo}</div>
          <div className="text-xs mt-1 opacity-80">Recompensa: {cena.recompensaItem}</div>
          <BotaoProxima onProxima={onProxima} ehUltima={ehUltima} />
        </motion.div>
      )}
    </Painel>
  );
}

// ============================================================================
// CENA GENÉRICA TEMÁTICA — motivação/revisão/minijogo/criação
// ============================================================================
function CenaTematica({
  cena, onProxima, ehUltima, ativa,
}: { cena: Extract<CenaArteV1, { tipo: "cenaTematica" }>; onProxima: () => void; ehUltima: boolean; ativa: boolean }) {
  const [tocados, setTocados] = useState<Set<number>>(new Set());
  const [tempo, setTempo] = useState(cena.tempoSeg ?? 0);
  const [rodando, setRodando] = useState(false);
  const jaFalou = useRef(false);

  useEffect(() => {
    if (!ativa) return;
    if (jaFalou.current) return;
    jaFalou.current = true;
    speakChunked([cena.aurora, cena.instrucao ?? ""].filter(Boolean).join(" "));
  }, [ativa, cena]);

  useEffect(() => {
    if (!rodando || tempo <= 0) return;
    const t = setTimeout(() => setTempo((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [rodando, tempo]);

  const isMinijogo = cena.variante === "minijogo";
  const completo = tocados.size >= cena.itens.length;

  const badge =
    cena.variante === "explorar" ? { emoji: "🔎", label: "Explorar" }
    : cena.variante === "revisar" ? { emoji: "🔁", label: "Revisar" }
    : cena.variante === "criacao" ? { emoji: "🎨", label: "Criação" }
    : { emoji: "🎮", label: "Minijogo" };

  return (
    <Painel>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-black uppercase tracking-widest text-amber-200">{badge.emoji} {badge.label}</span>
        {isMinijogo && cena.tempoSeg && (
          <span className="ml-auto text-xs font-bold bg-rose-500/30 border border-rose-300/40 rounded-full px-3 py-1">
            ⏱ {tempo}s
          </span>
        )}
      </div>
      {cena.titulo && <div className="text-lg font-black mb-2">{cena.titulo}</div>}
      <FalaAurora texto={cena.aurora} />
      {cena.instrucao && (
        <div className="rounded-2xl bg-amber-400/15 border border-amber-300/30 p-3 text-sm font-bold mb-3 text-center">
          {cena.instrucao}
        </div>
      )}

      {isMinijogo && !rodando && !completo && (
        <button
          onClick={() => setRodando(true)}
          className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-amber-400 text-slate-900 font-black py-3 mb-3 shadow-lg"
        >
          ▶ Começar
        </button>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {cena.itens.map((it, i) => {
          const foiTocado = tocados.has(i);
          const cor = it.cor ?? "#f59e0b";
          return (
            <motion.button
              key={i}
              whileTap={{ scale: 0.94 }}
              onClick={() => {
                if (isMinijogo && (!rodando || tempo <= 0)) return;
                setTocados((s) => new Set(s).add(i));
                const texto = [it.rotulo, it.descricao ?? ""].filter(Boolean).join(". ");
                speakChunked(texto);
                if (it.somUrl) {
                  const palavras = texto.split(/\s+/).length;
                  const delayMs = Math.max(1200, palavras * 320);
                  window.setTimeout(() => {
                    try {
                      const a = new Audio(it.somUrl);
                      a.volume = 0.7;
                      void a.play().catch(() => {});
                    } catch {}
                  }, delayMs);
                }
              }}
              className={`rounded-2xl p-3 text-left border-2 transition-all ${
                foiTocado ? "bg-white/20 border-white/60 shadow-lg" : "bg-white/10 border-white/20"
              }`}
              style={foiTocado ? { boxShadow: `0 10px 30px -10px ${cor}` } : undefined}
            >
              {it.fotoUrl ? (
                <img
                  src={it.fotoUrl}
                  alt={it.rotulo}
                  loading="lazy"
                  className="w-full h-24 sm:h-28 object-cover rounded-xl mb-2 border border-white/30"
                />
              ) : (
                <div className="text-3xl mb-1">{it.emoji ?? "✨"}</div>
              )}
              <div className="text-sm font-black" style={{ color: foiTocado ? cor : undefined }}>
                {it.emoji && it.fotoUrl ? `${it.emoji} ` : ""}{it.rotulo}
              </div>
              {foiTocado && it.descricao && (
                <div className="text-[11px] text-white/80 mt-1 leading-snug">{it.descricao}</div>
              )}
            </motion.button>
          );
        })}
      </div>

      <div className="text-xs text-white/70 text-center mb-3">
        {tocados.size} / {cena.itens.length} descobertos
      </div>

      {(completo || (isMinijogo && tempo <= 0 && rodando)) && (
        <>
          {cena.falaFinal && (
            <div className="rounded-2xl bg-emerald-500/20 border border-emerald-300/40 p-3 text-sm font-bold mb-3 text-center">
              ✨ {cena.falaFinal}
            </div>
          )}
          <BotaoProxima onProxima={onProxima} ehUltima={ehUltima} />
        </>
      )}
    </Painel>
  );
}

