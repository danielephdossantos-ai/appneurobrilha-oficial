import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { AulaGeoV1, CenaGeoV1 } from "@/escola-brilha/curso-v4/types";
import { PERSONAGENS, ESQUILO_BRILHA } from "@/escola-brilha/mascotes-personagens";
import lupaImg from "@/assets/geografia-3ano/lupa.png";

/**
 * PlayerGeoV1 — player 100% customizado da Geografia 3º–9º.
 *
 * Navegação por SCROLL: todas as 11 cenas ficam empilhadas na página.
 * A criança sobe e desce livremente. A barra de progresso reflete a
 * cena mais visível no viewport (via IntersectionObserver). Cada bloco
 * ainda tem um botão "próxima cena" que faz smooth-scroll pra próxima
 * seção — mas rolar com o dedo também funciona.
 */
export function PlayerGeoV1({
  aula,
  onSair,
  onConcluir,
}: {
  aula: AulaGeoV1;
  onSair: () => void;
  onConcluir: () => void;
}) {
  const cenas: Array<{ chave: string; rotulo: string; cena: CenaGeoV1 }> = [
    { chave: "1", rotulo: "🎬 Motivação", cena: aula.cena01_motivacao },
    { chave: "2", rotulo: "🔮 Previsão", cena: aula.cena02_previsao },
    { chave: "3", rotulo: "📚 Vocabulário", cena: aula.cena03_vocabulario },
    { chave: "4", rotulo: "📖 Leitura guiada", cena: aula.cena04_leituraGuiada },
    { chave: "5", rotulo: "🧠 Compreensão", cena: aula.cena05_compreensao },
    { chave: "6", rotulo: "🎭 Personagens & lugar", cena: aula.cena06_personagensLugar },
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

  // rastrear cena mais visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // pega a entry com maior intersecção visível
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

  const irPara = (i: number) => {
    const el = sectionRefs.current[i];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else if (i >= total) onConcluir();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#0a2540] to-[#0d1f55] text-white">
      <header className="sticky top-0 z-20 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onSair}
            className="text-xs text-white/70 hover:text-white shrink-0"
          >
            ← Sair
          </button>
          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-amber-300 transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="text-xs text-white/60 shrink-0">
            {ativo + 1} / {total}
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 pb-2 flex items-center justify-between text-[11px] uppercase tracking-widest text-emerald-300/80">
          <span>{atual.rotulo}</span>
          <span className="text-white/40">{aula.titulo}</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-10">
        {cenas.map((c, i) => (
          <section
            key={c.chave}
            data-cena-idx={i}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            className="scroll-mt-28"
          >
            <div className="text-[11px] uppercase tracking-[0.2em] text-amber-300/80 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-300/20 border border-amber-300/40 grid place-items-center text-amber-200 text-[10px] font-black">
                {i + 1}
              </span>
              {c.rotulo}
            </div>
            <CenaRenderer
              cena={c.cena}
              onProxima={() => (i + 1 < total ? irPara(i + 1) : onConcluir())}
              ultima={i + 1 === total}
            />
          </section>
        ))}
        <div className="h-24" />
      </main>
    </div>
  );
}

function CenaRenderer({
  cena,
  onProxima,
  ultima,
}: {
  cena: CenaGeoV1;
  onProxima: () => void;
  ultima?: boolean;
}) {
  switch (cena.tipo) {
    case "mesaCartografo":
      return <MesaCartografo cena={cena} onProxima={onProxima} />;
    case "votoExplorador":
      return <VotoExplorador cena={cena} onProxima={onProxima} />;
    case "cadernosCampo":
      return <CadernosCampo cena={cena} onProxima={onProxima} />;
    case "narrarMapa":
      return <NarrarMapa cena={cena} onProxima={onProxima} />;
    case "quizRadar":
      return <QuizRadar cena={cena} onProxima={onProxima} />;
    case "mapaCamadas":
      return <MapaCamadas cena={cena} onProxima={onProxima} />;
    case "linhaEstrada":
      return <LinhaEstrada cena={cena} onProxima={onProxima} />;
    case "voceLeSozinho":
      return <VoceLeSozinho cena={cena} onProxima={onProxima} />;
    case "placeholder":
      return (
        <CenaPlaceholder
          titulo={cena.titulo}
          descricao={cena.descricao}
          onProxima={onProxima}
          ultima={ultima}
        />
      );
  }
}

// ─────────────────────────────────────────────────────────────────────
// Cena 1 — Mesa do Cartógrafo (lupa arrastável revela o mapa)
// ─────────────────────────────────────────────────────────────────────
function MesaCartografo({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "mesaCartografo" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const areaRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [revelado, setRevelado] = useState<Array<{ x: number; y: number }>>([
    { x: 50, y: 50 },
  ]);
  const [descoberto, setDescoberto] = useState(false);

  const R = 80; // raio de revelação em px

  const mover = (clientX: number, clientY: number) => {
    const el = areaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    const cx = Math.max(0, Math.min(100, x));
    const cy = Math.max(0, Math.min(100, y));
    setPos({ x: cx, y: cy });
    setRevelado((prev) => {
      const last = prev[prev.length - 1];
      if (Math.hypot(last.x - cx, last.y - cy) < 3) return prev;
      const next = [...prev, { x: cx, y: cy }];
      if (next.length > 40 && !descoberto) setDescoberto(true);
      return next;
    });
  };

  return (
    <div className="space-y-5">
      {/* Aurora fala */}
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">
            {aurora.nome}
          </div>
          {cena.aurora}
        </div>
      </div>

      <div className="bg-amber-100/95 text-[#3a2410] rounded-2xl p-3 text-sm font-semibold text-center shadow-lg">
        {cena.instrucao}
      </div>

      {/* Mesa de madeira com o mapa embaixo da névoa */}
      <div
        className="relative rounded-3xl p-4 shadow-2xl select-none"
        style={{
          background:
            "repeating-linear-gradient(115deg,#7a4a1e 0 14px,#8b5a2b 14px 28px,#6b3d18 28px 42px)",
          boxShadow: "inset 0 0 40px rgba(0,0,0,.45)",
        }}
      >
        {/* fita adesiva decorativa */}
        <div className="absolute -top-2 left-8 w-16 h-5 bg-amber-200/70 rotate-[-4deg] rounded-sm" />
        <div className="absolute -top-2 right-10 w-16 h-5 bg-amber-200/70 rotate-[5deg] rounded-sm" />

        <div
          ref={areaRef}
          className="relative aspect-[4/3] rounded-xl overflow-hidden touch-none cursor-none"
          onMouseMove={(e) => mover(e.clientX, e.clientY)}
          onTouchMove={(e) => {
            const t = e.touches[0];
            if (t) mover(t.clientX, t.clientY);
          }}
          onTouchStart={(e) => {
            const t = e.touches[0];
            if (t) mover(t.clientX, t.clientY);
          }}
        >
          {/* mapa base */}
          <img
            src={cena.mapaUrl}
            alt="Mapa do município"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          {/* névoa por cima com "buracos" onde a lupa passou (via SVG mask) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <mask id="nevoa-mask">
                <rect x="0" y="0" width="100" height="100" fill="white" />
                {revelado.map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r={12} fill="black" />
                ))}
              </mask>
            </defs>
            <rect
              x="0"
              y="0"
              width="100"
              height="100"
              fill="#0b1220"
              opacity="0.92"
              mask="url(#nevoa-mask)"
            />
          </svg>

          {/* lupa que segue o cursor */}
          <motion.img
            src={lupaImg}
            alt=""
            aria-hidden
            className="absolute pointer-events-none drop-shadow-2xl"
            style={{
              width: R * 2,
              height: R * 2,
              left: `calc(${pos.x}% - ${R}px)`,
              top: `calc(${pos.y}% - ${R}px)`,
            }}
            animate={{ rotate: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {!descoberto && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
              👆 arrasta a lupa pelo mapa
            </div>
          )}
        </div>
      </div>

      {descoberto && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-500/15 border border-emerald-400/40 rounded-2xl p-4 flex items-start gap-3"
        >
          <img src={ESQUILO_BRILHA.img} alt="" className="w-12 h-12 shrink-0" />
          <div className="text-sm leading-snug">
            <div className="text-emerald-300 text-xs font-bold mb-1">Aurora</div>
            {cena.falaFinal}
          </div>
        </motion.div>
      )}

      <button
        onClick={onProxima}
        disabled={!descoberto}
        className={`w-full py-4 rounded-2xl font-black text-lg transition ${
          descoberto
            ? "bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
            : "bg-white/10 text-white/40 cursor-not-allowed"
        }`}
      >
        {descoberto ? "Continuar" : "🔍 Continue explorando o mapa…"}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Cena 2 — Voto do Explorador (2 cards grandes, escolhe antes de saber)
// ─────────────────────────────────────────────────────────────────────
function VotoExplorador({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "votoExplorador" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const [voto, setVoto] = useState<string | null>(null);
  const [revelado, setRevelado] = useState(false);
  const acertou = voto === cena.respostaCerta;

  const votar = (id: string) => {
    if (revelado) return;
    setVoto(id);
    setTimeout(() => setRevelado(true), 350);
  };

  return (
    <div className="space-y-5">
      {/* Aurora fala */}
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">
            {aurora.nome}
          </div>
          {cena.aurora}
        </div>
      </div>

      {/* Pergunta grande */}
      <div className="bg-amber-100/95 text-[#3a2410] rounded-2xl px-4 py-4 text-center shadow-lg">
        <div className="text-[11px] uppercase tracking-widest text-amber-800/80 font-bold mb-1">
          🗳️ Voto do Explorador
        </div>
        <div className="text-base sm:text-lg font-black leading-tight">
          {cena.pergunta}
        </div>
      </div>

      {/* Cards de voto — empilhados no mobile, lado a lado no desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cena.opcoes.map((op) => {
          const escolhido = voto === op.id;
          const certoRevelado = revelado && op.id === cena.respostaCerta;
          const erradoRevelado = revelado && escolhido && op.id !== cena.respostaCerta;
          return (
            <motion.button
              key={op.id}
              onClick={() => votar(op.id)}
              disabled={revelado}
              whileTap={{ scale: revelado ? 1 : 0.97 }}
              className={`relative rounded-3xl p-5 text-left overflow-hidden border-2 transition-all bg-gradient-to-br ${op.cor} ${
                escolhido ? "border-white ring-4 ring-white/40" : "border-white/20"
              } ${certoRevelado ? "ring-4 ring-emerald-300" : ""} ${
                erradoRevelado ? "opacity-60" : ""
              }`}
            >
              <div className="text-5xl mb-2">{op.emoji}</div>
              <div className="text-white font-black text-lg leading-tight">
                {op.titulo}
              </div>
              {op.subtitulo && (
                <div className="text-white/85 text-xs mt-1 font-medium">
                  {op.subtitulo}
                </div>
              )}
              {certoRevelado && (
                <div className="absolute top-2 right-2 bg-emerald-400 text-[#0d1f55] rounded-full w-8 h-8 grid place-items-center text-lg font-black shadow">
                  ✓
                </div>
              )}
              {erradoRevelado && (
                <div className="absolute top-2 right-2 bg-rose-400 text-white rounded-full w-8 h-8 grid place-items-center text-lg font-black shadow">
                  ✕
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      {revelado && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl p-4 flex items-start gap-3 border ${
            acertou
              ? "bg-emerald-500/15 border-emerald-400/40"
              : "bg-rose-500/15 border-rose-400/40"
          }`}
        >
          <img src={aurora.img} alt="" className="w-12 h-12 shrink-0 rounded-full bg-white/10 p-1" />
          <div className="text-sm leading-snug space-y-2">
            <div className={`text-xs font-bold ${acertou ? "text-emerald-300" : "text-rose-300"}`}>
              {acertou ? "🎉 Boa, explorador!" : "Quase!"}
            </div>
            <div>{acertou ? cena.feedbackAcerto : cena.feedbackErro}</div>
            <div className="text-white/90 border-t border-white/10 pt-2">
              <span className="text-emerald-300 text-xs font-bold">Aurora: </span>
              {cena.falaFinal}
            </div>
          </div>
        </motion.div>
      )}

      <button
        onClick={onProxima}
        disabled={!revelado}
        className={`w-full py-4 rounded-2xl font-black text-lg transition ${
          revelado
            ? "bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
            : "bg-white/10 text-white/40 cursor-not-allowed"
        }`}
      >
        {revelado ? "Continuar" : "🗳️ Escolha uma opção pra continuar"}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Cena 3 — Cadernos de Campo (4 flip cards de vocabulário)
// ─────────────────────────────────────────────────────────────────────
function CadernosCampo({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "cadernosCampo" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const [abertos, setAbertos] = useState<Record<string, boolean>>({});
  const totalAbertos = Object.values(abertos).filter(Boolean).length;
  const todosAbertos = totalAbertos === cena.cadernos.length;

  const abrir = (id: string) =>
    setAbertos((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">
            {aurora.nome}
          </div>
          {cena.aurora}
        </div>
      </div>

      <div className="bg-amber-100/95 text-[#3a2410] rounded-2xl p-3 text-sm font-semibold text-center shadow-lg">
        📓 {cena.instrucao}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cena.cadernos.map((c) => {
          const aberto = !!abertos[c.id];
          return (
            <button
              key={c.id}
              onClick={() => abrir(c.id)}
              className="relative text-left"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative w-full min-h-[180px] rounded-2xl"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: aberto ? 180 : 0 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
              >
                {/* Capa */}
                <div
                  className={`absolute inset-0 rounded-2xl p-4 flex flex-col justify-between bg-gradient-to-br ${c.cor} shadow-lg border-2 border-white/20`}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-5xl">{c.emoji}</div>
                  <div>
                    <div className="text-white/80 text-[10px] uppercase tracking-widest font-bold">
                      Caderno de campo
                    </div>
                    <div className="text-white font-black text-xl leading-tight mt-1">
                      {c.capa}
                    </div>
                    <div className="text-white/80 text-xs mt-2">👆 toque pra abrir</div>
                  </div>
                </div>
                {/* Verso — página escrita */}
                <div
                  className="absolute inset-0 rounded-2xl p-4 bg-amber-50 text-[#2a1a08] shadow-lg border-2 border-amber-900/20"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    backgroundImage:
                      "repeating-linear-gradient(transparent 0 22px, rgba(120,53,15,.12) 22px 23px)",
                  }}
                >
                  <div className="text-[10px] uppercase tracking-widest text-amber-800 font-bold">
                    {c.capa}
                  </div>
                  <p className="text-sm font-semibold mt-1 leading-snug">
                    {c.conteudo}
                  </p>
                  {c.exemplo && (
                    <p className="text-xs italic text-amber-900/80 mt-2 border-t border-amber-900/20 pt-2">
                      Ex.: {c.exemplo}
                    </p>
                  )}
                </div>
              </motion.div>
            </button>
          );
        })}
      </div>

      <div className="text-center text-xs text-white/60">
        {totalAbertos} / {cena.cadernos.length} cadernos abertos
      </div>

      {todosAbertos && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-500/15 border border-emerald-400/40 rounded-2xl p-4 flex items-start gap-3"
        >
          <img src={ESQUILO_BRILHA.img} alt="" className="w-12 h-12 shrink-0" />
          <div className="text-sm leading-snug">
            <div className="text-emerald-300 text-xs font-bold mb-1">Aurora</div>
            {cena.falaFinal}
          </div>
        </motion.div>
      )}

      <button
        onClick={onProxima}
        disabled={!todosAbertos}
        className={`w-full py-4 rounded-2xl font-black text-lg transition ${
          todosAbertos
            ? "bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
            : "bg-white/10 text-white/40 cursor-not-allowed"
        }`}
      >
        {todosAbertos ? "Continuar" : "📓 Abra todos os cadernos"}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Cena 4 — Aurora narra o mapa (balões clicáveis + TTS)
// ─────────────────────────────────────────────────────────────────────
function NarrarMapa({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "narrarMapa" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const [ativo, setAtivo] = useState<string | null>(null);
  const [visitados, setVisitados] = useState<Record<string, boolean>>({});
  const total = cena.pontos.length;
  const visitadosCount = Object.values(visitados).filter(Boolean).length;
  const todosVistos = visitadosCount === total;
  const pontoAtivo = cena.pontos.find((p) => p.id === ativo) ?? null;

  const falar = (texto: string) => {
    try {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(texto);
      u.lang = "pt-BR";
      u.rate = 0.95;
      u.pitch = 1.05;
      window.speechSynthesis.speak(u);
    } catch {
      /* ignore */
    }
  };

  const tocar = (id: string, texto: string) => {
    setAtivo(id);
    setVisitados((prev) => ({ ...prev, [id]: true }));
    falar(texto);
  };

  useEffect(() => {
    return () => {
      try {
        window.speechSynthesis?.cancel();
      } catch {
        /* ignore */
      }
    };
  }, []);

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">
            {aurora.nome}
          </div>
          {cena.aurora}
        </div>
      </div>

      <div className="bg-amber-100/95 text-[#3a2410] rounded-2xl p-3 text-sm font-semibold text-center shadow-lg">
        🗺️ {cena.instrucao}
      </div>

      {/* Mapa com balões flutuantes */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 shadow-xl bg-black/30">
        <img
          src={cena.mapaUrl}
          alt="Mapa"
          className="w-full aspect-[4/3] object-cover select-none"
          draggable={false}
        />
        {cena.pontos.map((p) => {
          const visto = !!visitados[p.id];
          const isAtivo = ativo === p.id;
          return (
            <button
              key={p.id}
              onClick={() => tocar(p.id, `${p.titulo}. ${p.texto}`)}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              aria-label={p.titulo}
            >
              <motion.span
                animate={
                  isAtivo
                    ? { scale: [1, 1.15, 1] }
                    : { y: [0, -6, 0] }
                }
                transition={{
                  duration: isAtivo ? 0.6 : 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`block w-12 h-12 sm:w-14 sm:h-14 rounded-full grid place-items-center text-2xl sm:text-3xl shadow-2xl border-2 bg-gradient-to-br ${p.cor} ${
                  visto ? "border-emerald-300" : "border-white/80"
                }`}
                style={{
                  boxShadow: isAtivo
                    ? "0 0 0 6px rgba(52,211,153,.35), 0 8px 24px rgba(0,0,0,.5)"
                    : "0 6px 16px rgba(0,0,0,.5)",
                }}
              >
                {p.emoji}
              </motion.span>
              {visto && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 text-[#0d1f55] text-[11px] font-black grid place-items-center border-2 border-[#0f172a]">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Balão de fala do ponto ativo */}
      {pontoAtivo && (
        <motion.div
          key={pontoAtivo.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white text-[#0d1f55] rounded-2xl p-4 shadow-xl border-2 border-emerald-300"
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">{pontoAtivo.emoji}</span>
            <div className="font-black text-lg">{pontoAtivo.titulo}</div>
            <button
              onClick={() =>
                falar(`${pontoAtivo.titulo}. ${pontoAtivo.texto}`)
              }
              className="ml-auto text-xs bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold rounded-full px-3 py-1"
            >
              🔊 ouvir
            </button>
          </div>
          <p className="text-sm leading-snug">{pontoAtivo.texto}</p>
        </motion.div>
      )}

      <div className="text-center text-xs text-white/60">
        {visitadosCount} / {total} pontos descobertos
      </div>

      {todosVistos && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-500/15 border border-emerald-400/40 rounded-2xl p-4 flex items-start gap-3"
        >
          <img src={ESQUILO_BRILHA.img} alt="" className="w-12 h-12 shrink-0" />
          <div className="text-sm leading-snug">
            <div className="text-emerald-300 text-xs font-bold mb-1">Aurora</div>
            {cena.falaFinal}
          </div>
        </motion.div>
      )}

      <button
        onClick={onProxima}
        disabled={!todosVistos}
        className={`w-full py-4 rounded-2xl font-black text-lg transition ${
          todosVistos
            ? "bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
            : "bg-white/10 text-white/40 cursor-not-allowed"
        }`}
      >
        {todosVistos ? "Continuar" : "🗺️ Toque em todos os balões"}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Cena 5 — Quiz do Radar (radar gira e "pousa" no card certo)
// ─────────────────────────────────────────────────────────────────────
function QuizRadar({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "quizRadar" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const [idx, setIdx] = useState(0);
  const [escolha, setEscolha] = useState<string | null>(null);
  const [revelado, setRevelado] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const p = cena.perguntas[idx];
  const total = cena.perguntas.length;
  const acertou = escolha === p?.correta;

  const escolher = (id: string) => {
    if (revelado) return;
    setEscolha(id);
    setTimeout(() => {
      setRevelado(true);
      if (id === p.correta) setAcertos((n) => n + 1);
    }, 900); // tempo do radar "girar" antes de revelar
  };

  const proxima = () => {
    if (idx + 1 < total) {
      setIdx(idx + 1);
      setEscolha(null);
      setRevelado(false);
    } else {
      setFinalizado(true);
    }
  };

  // ângulo do radar apontando pro card escolhido (0=cima, 120=dir-baixo, 240=esq-baixo)
  const anguloDoCard = (cardId: string) => {
    const i = p.cards.findIndex((c) => c.id === cardId);
    if (i < 0) return 0;
    return (i * 360) / p.cards.length;
  };
  const anguloAtual = escolha ? anguloDoCard(escolha) : null;

  const falar = (texto: string) => {
    try {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(texto);
      u.lang = "pt-BR";
      u.rate = 0.95;
      u.pitch = 1.05;
      window.speechSynthesis.speak(u);
    } catch {
      /* ignore */
    }
  };

  // Fala a pergunta a cada vez que idx muda
  useEffect(() => {
    if (finalizado) return;
    const atual = cena.perguntas[idx];
    if (atual) falar(atual.pergunta);
    return () => {
      try {
        window.speechSynthesis?.cancel();
      } catch {
        /* ignore */
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, finalizado]);

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">{aurora.nome}</div>
          {cena.aurora}
        </div>
      </div>

      <div className="bg-amber-100/95 text-[#3a2410] rounded-2xl p-3 text-sm font-semibold text-center shadow-lg">
        📡 {cena.instrucao}
      </div>

      <div className="flex items-center justify-between text-xs text-white/70 px-1">
        <span className="uppercase tracking-widest text-emerald-300/80 font-bold">
          Pergunta {idx + 1} / {total}
        </span>
        <span>✓ {acertos}</span>
      </div>

      {!finalizado && p && (
        <>
          {/* PERGUNTA em destaque (escrita + botão pra ouvir de novo) */}
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-emerald-500/20 to-sky-500/20 border-2 border-emerald-400/40 rounded-2xl p-4 shadow-xl"
          >
            <div className="flex items-start gap-3">
              <div className="text-3xl shrink-0">❓</div>
              <div className="flex-1 text-white font-black text-lg sm:text-xl leading-snug">
                {p.pergunta}
              </div>
              <button
                onClick={() => falar(p.pergunta)}
                className="shrink-0 bg-white/15 hover:bg-white/25 border border-white/25 rounded-full px-3 py-1.5 text-xs font-bold flex items-center gap-1"
                aria-label="Ouvir a pergunta"
              >
                🔊 ouvir
              </button>
            </div>
          </motion.div>

          {/* Radar */}
          <div className="relative mx-auto w-52 h-52 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-emerald-400/40 shadow-2xl overflow-hidden">
            {/* anéis */}
            {[0.33, 0.66, 1].map((r, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-emerald-400/25"
                style={{
                  left: `${50 - 50 * r}%`,
                  top: `${50 - 50 * r}%`,
                  width: `${100 * r}%`,
                  height: `${100 * r}%`,
                }}
              />
            ))}
            {/* cruz */}
            <div className="absolute inset-0">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emerald-400/20" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-emerald-400/20" />
            </div>
            {/* ponteiro */}
            <motion.div
              className="absolute left-1/2 top-1/2 origin-top-left"
              style={{
                width: "50%",
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(52,211,153,1) 0%, rgba(52,211,153,0) 100%)",
                transformOrigin: "0% 50%",
              }}
              animate={{
                rotate:
                  anguloAtual !== null
                    ? revelado
                      ? anguloAtual - 90
                      : [0, 360, 720, anguloAtual - 90]
                    : [0, 360],
              }}
              transition={{
                duration: anguloAtual !== null && !revelado ? 0.9 : 2.5,
                ease: anguloAtual !== null && !revelado ? "easeOut" : "linear",
                repeat: anguloAtual === null ? Infinity : 0,
              }}
            />
            {/* centro */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,.9)]" />
          </div>


          {/* Cards de resposta */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {p.cards.map((c) => {
              const escolhido = escolha === c.id;
              const certoRevelado = revelado && c.id === p.correta;
              const erradoRevelado = revelado && escolhido && c.id !== p.correta;
              return (
                <motion.button
                  key={c.id}
                  onClick={() => escolher(c.id)}
                  disabled={revelado}
                  whileTap={{ scale: revelado ? 1 : 0.96 }}
                  className={`relative rounded-2xl p-4 border-2 bg-gradient-to-br ${c.cor} ${
                    escolhido ? "border-white ring-4 ring-white/40" : "border-white/20"
                  } ${certoRevelado ? "ring-4 ring-emerald-300" : ""} ${
                    erradoRevelado ? "opacity-60" : ""
                  }`}
                >
                  <div className="text-4xl mb-1">{c.emoji}</div>
                  <div className="text-white font-black text-base leading-tight">
                    {c.titulo}
                  </div>
                  {certoRevelado && (
                    <div className="absolute top-2 right-2 bg-emerald-400 text-[#0d1f55] rounded-full w-7 h-7 grid place-items-center text-sm font-black shadow">
                      ✓
                    </div>
                  )}
                  {erradoRevelado && (
                    <div className="absolute top-2 right-2 bg-rose-400 text-white rounded-full w-7 h-7 grid place-items-center text-sm font-black shadow">
                      ✕
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {revelado && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-2xl p-4 flex items-start gap-3 border ${
                acertou
                  ? "bg-emerald-500/15 border-emerald-400/40"
                  : "bg-rose-500/15 border-rose-400/40"
              }`}
            >
              <img
                src={aurora.img}
                alt=""
                className="w-12 h-12 shrink-0 rounded-full bg-white/10 p-1"
              />
              <div className="text-sm leading-snug">
                <div
                  className={`text-xs font-bold ${
                    acertou ? "text-emerald-300" : "text-rose-300"
                  }`}
                >
                  {acertou ? "🎯 Radar pousou no lugar certo!" : "Radar errou o alvo!"}
                </div>
                <div className="mt-1">
                  {acertou ? p.feedbackAcerto : p.feedbackErro}
                </div>
              </div>
            </motion.div>
          )}

          <button
            onClick={proxima}
            disabled={!revelado}
            className={`w-full py-4 rounded-2xl font-black text-lg transition ${
              revelado
                ? "bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
                : "bg-white/10 text-white/40 cursor-not-allowed"
            }`}
          >
            {revelado
              ? idx + 1 < total
                ? "Próxima pergunta →"
                : "Ver resultado"
              : "📡 Escolha um card pra ativar o radar"}
          </button>
        </>
      )}

      {finalizado && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-emerald-500/20 to-amber-400/20 border-2 border-emerald-400/40 rounded-2xl p-6 text-center"
          >
            <div className="text-5xl mb-2">📡</div>
            <div className="text-2xl font-black">
              {acertos} / {total}
            </div>
            <div className="text-sm text-white/80 mt-1">acertos no radar</div>
          </motion.div>
          <div className="bg-white/10 border border-white/15 rounded-2xl p-4 flex items-start gap-3">
            <img src={ESQUILO_BRILHA.img} alt="" className="w-12 h-12 shrink-0" />
            <div className="text-sm leading-snug">
              <div className="text-emerald-300 text-xs font-bold mb-1">Aurora</div>
              {cena.falaFinal}
            </div>
          </div>
          <button
            onClick={onProxima}
            className="w-full py-4 rounded-2xl font-black text-lg bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01] transition"
          >
            Continuar
          </button>
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Cena 6 — Mapa de Camadas (toggles Urbana/Rural acendem partes do mapa)
// ─────────────────────────────────────────────────────────────────────
function MapaCamadas({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "mapaCamadas" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const [ligadas, setLigadas] = useState<Record<string, boolean>>({});
  const totalLigadas = Object.values(ligadas).filter(Boolean).length;
  const todasLigadas = totalLigadas === cena.camadas.length;

  const alternar = (id: string) =>
    setLigadas((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">{aurora.nome}</div>
          {cena.aurora}
        </div>
      </div>

      <div className="bg-amber-100/95 text-[#3a2410] rounded-2xl p-3 text-sm font-semibold text-center shadow-lg">
        🗺️ {cena.instrucao}
      </div>

      {/* Mapa com camadas */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 shadow-xl bg-black/40">
        <img
          src={cena.mapaUrl}
          alt="Mapa do município"
          className="w-full aspect-[4/3] object-cover select-none"
          draggable={false}
        />
        {/* véu escuro global — some quando TUDO está ligado */}
        <div
          className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-500"
          style={{ opacity: todasLigadas ? 0 : 0.55 }}
        />
        {/* recortes iluminados por camada */}
        {cena.camadas.map((c) => {
          const on = !!ligadas[c.id];
          return (
            <motion.div
              key={c.id}
              className="absolute pointer-events-none rounded-2xl"
              style={{
                left: `${c.rect.x}%`,
                top: `${c.rect.y}%`,
                width: `${c.rect.w}%`,
                height: `${c.rect.h}%`,
              }}
              animate={{
                boxShadow: on
                  ? "0 0 0 3px rgba(255,255,255,.9), 0 0 40px 8px rgba(52,211,153,.55), inset 0 0 60px rgba(255,255,255,.25)"
                  : "0 0 0 2px rgba(255,255,255,.15)",
                background: on
                  ? "rgba(255,255,255,0)"
                  : "rgba(0,0,0,.35)",
              }}
              transition={{ duration: 0.4 }}
            >
              {on && (
                <div className="absolute -top-2 left-2 bg-black/70 text-white text-[11px] font-bold px-2 py-0.5 rounded-full backdrop-blur">
                  {c.emoji} {c.rotulo}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Toggles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cena.camadas.map((c) => {
          const on = !!ligadas[c.id];
          return (
            <button
              key={c.id}
              onClick={() => alternar(c.id)}
              className={`relative rounded-2xl p-4 border-2 text-left transition-all bg-gradient-to-br ${c.cor} ${
                on ? "border-white ring-4 ring-white/40 shadow-2xl" : "border-white/20 opacity-70"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-4xl">{c.emoji}</div>
                <div className="flex-1">
                  <div className="text-white font-black text-lg leading-tight">
                    {c.rotulo}
                  </div>
                  <div className="text-white/85 text-xs mt-0.5">
                    {on ? "✅ acesa no mapa" : "toque pra acender"}
                  </div>
                </div>
                {/* switch visual */}
                <div
                  className={`w-11 h-6 rounded-full p-0.5 transition-colors ${
                    on ? "bg-emerald-300" : "bg-white/25"
                  }`}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full bg-white shadow"
                    animate={{ x: on ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Descrições das camadas ligadas */}
      <div className="space-y-2">
        {cena.camadas
          .filter((c) => ligadas[c.id])
          .map((c) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 border border-white/15 rounded-xl p-3 flex items-start gap-2 text-sm"
            >
              <div className="text-xl shrink-0">{c.emoji}</div>
              <div>
                <div className="font-bold text-emerald-300">{c.rotulo}</div>
                <div className="text-white/85 leading-snug">{c.descricao}</div>
              </div>
            </motion.div>
          ))}
      </div>

      {todasLigadas && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-500/15 border border-emerald-400/40 rounded-2xl p-4 flex items-start gap-3"
        >
          <img src={ESQUILO_BRILHA.img} alt="" className="w-12 h-12 shrink-0" />
          <div className="text-sm leading-snug">
            <div className="text-emerald-300 text-xs font-bold mb-1">Aurora</div>
            {cena.falaFinal}
          </div>
        </motion.div>
      )}

      <button
        onClick={onProxima}
        disabled={!todasLigadas}
        className={`w-full py-4 rounded-2xl font-black text-lg transition ${
          todasLigadas
            ? "bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
            : "bg-white/10 text-white/40 cursor-not-allowed"
        }`}
      >
        {todasLigadas ? "Continuar" : "🔦 Acenda todas as camadas do mapa"}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Cena 7 — Linha da Estrada (tocar as paradas em ordem)
// ─────────────────────────────────────────────────────────────────────
function LinhaEstrada({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "linhaEstrada" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const total = cena.ordemCerta.length;
  const [passo, setPasso] = useState(0);       // próxima posição a preencher
  const [colocados, setColocados] = useState<string[]>([]); // ids em ordem
  const [erro, setErro] = useState<string | null>(null);
  const concluido = passo === total;

  const proxIdEsperado = cena.ordemCerta[passo];
  const paradaPorId = (id: string) => cena.paradas.find((p) => p.id === id)!;

  const tentar = (id: string) => {
    if (concluido || colocados.includes(id)) return;
    if (id === proxIdEsperado) {
      setColocados((prev) => [...prev, id]);
      setPasso((n) => n + 1);
      setErro(null);
    } else {
      setErro(id);
      setTimeout(() => setErro(null), 700);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">{aurora.nome}</div>
          {cena.aurora}
        </div>
      </div>

      <div className="bg-amber-100/95 text-[#3a2410] rounded-2xl p-3 text-sm font-semibold text-center shadow-lg">
        🛣️ {cena.instrucao}
      </div>

      <div className="bg-gradient-to-br from-emerald-500/20 to-sky-500/20 border-2 border-emerald-400/40 rounded-2xl p-4 text-center">
        <div className="text-white font-black text-lg leading-snug">
          {cena.pergunta}
        </div>
      </div>

      {/* Estrada com paradas em ordem */}
      <div className="relative bg-gradient-to-b from-emerald-900/40 to-emerald-950/60 border border-white/15 rounded-2xl p-4">
        {/* trilho vertical */}
        <div className="absolute left-9 top-6 bottom-6 w-1 bg-white/15 rounded-full" />
        <div
          className="absolute left-9 top-6 w-1 bg-gradient-to-b from-emerald-300 to-amber-300 rounded-full transition-all duration-500"
          style={{
            height: `calc(${(passo / total) * 100}% - ${passo === total ? 12 : 0}px)`,
            maxHeight: "calc(100% - 12px)",
          }}
        />

        <div className="space-y-3 relative">
          {cena.ordemCerta.map((id, i) => {
            const preenchido = i < passo;
            const ativo = i === passo;
            const p = paradaPorId(id);
            return (
              <div key={i} className="flex items-center gap-3 min-h-[56px]">
                <div
                  className={`w-10 h-10 rounded-full grid place-items-center text-lg font-black shrink-0 border-2 transition-all ${
                    preenchido
                      ? "bg-emerald-400 border-white text-[#0d1f55]"
                      : ativo
                      ? "bg-white/10 border-emerald-300 text-emerald-300 animate-pulse"
                      : "bg-white/5 border-white/20 text-white/40"
                  }`}
                >
                  {preenchido ? "✓" : i + 1}
                </div>
                {preenchido ? (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1 bg-white/10 border border-emerald-400/40 rounded-xl p-2 flex items-center gap-2"
                  >
                    <span className="text-2xl">{p.emoji}</span>
                    <div className="text-sm">
                      <div className="font-bold text-emerald-300">{p.rotulo}</div>
                      <div className="text-white/80 text-xs leading-snug">
                        {p.descricao}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex-1 border-2 border-dashed border-white/20 rounded-xl p-2 text-white/40 text-xs italic">
                    {ativo ? "toque a próxima parada abaixo…" : "aguardando…"}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Banco de paradas */}
      <div>
        <div className="text-xs uppercase tracking-widest text-white/60 font-bold mb-2 text-center">
          🚚 Paradas do caminho
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {cena.paradas.map((p) => {
            const usado = colocados.includes(p.id);
            const errando = erro === p.id;
            return (
              <motion.button
                key={p.id}
                onClick={() => tentar(p.id)}
                disabled={usado || concluido}
                whileTap={{ scale: usado ? 1 : 0.94 }}
                animate={errando ? { x: [-6, 6, -4, 4, 0] } : { x: 0 }}
                transition={{ duration: 0.4 }}
                className={`rounded-2xl p-3 border-2 transition-all ${
                  usado
                    ? "bg-emerald-500/10 border-emerald-400/40 opacity-40"
                    : errando
                    ? "bg-rose-500/25 border-rose-400"
                    : "bg-white/10 border-white/25 hover:bg-white/15"
                }`}
              >
                <div className="text-3xl">{p.emoji}</div>
                <div className="text-white font-bold text-xs mt-1 leading-tight">
                  {p.rotulo}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {erro && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-rose-500/15 border border-rose-400/40 rounded-2xl p-3 text-sm text-rose-100"
        >
          ❌ {cena.feedbackErro}
        </motion.div>
      )}

      {concluido && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-500/15 border border-emerald-400/40 rounded-2xl p-4 flex items-start gap-3"
        >
          <img src={ESQUILO_BRILHA.img} alt="" className="w-12 h-12 shrink-0" />
          <div className="text-sm leading-snug space-y-1">
            <div className="text-emerald-300 text-xs font-bold">
              🎉 {cena.feedbackAcerto}
            </div>
            <div>{cena.falaFinal}</div>
          </div>
        </motion.div>
      )}

      <button
        onClick={onProxima}
        disabled={!concluido}
        className={`w-full py-4 rounded-2xl font-black text-lg transition ${
          concluido
            ? "bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
            : "bg-white/10 text-white/40 cursor-not-allowed"
        }`}
      >
        {concluido ? "Continuar" : `🛣️ Monte o caminho (${passo}/${total})`}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Placeholder — cenas em construção
// ─────────────────────────────────────────────────────────────────────
function CenaPlaceholder({
  titulo,
  descricao,
  onProxima,
  ultima,
}: {
  titulo: string;
  descricao: string;
  onProxima: () => void;
  ultima?: boolean;
}) {
  return (
    <div className="text-center py-12 space-y-5 bg-white/5 border border-white/10 rounded-2xl">
      <div className="text-5xl">🚧</div>
      <div>
        <div className="text-xs uppercase tracking-widest text-amber-300">
          Cena em construção
        </div>
        <h2 className="text-xl font-black mt-1">{titulo}</h2>
        <p className="text-sm text-white/70 max-w-md mx-auto mt-2 px-4">{descricao}</p>
      </div>
      <button
        onClick={onProxima}
        className="mx-auto block px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-sm font-semibold hover:bg-white/15"
      >
        {ultima ? "✅ Concluir aula" : "Continuar"}
      </button>
    </div>
  );
}
