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
        {descoberto ? "Descobri! Próxima cena →" : "🔍 Continue explorando o mapa…"}
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
        {revelado ? "Próxima cena →" : "🗳️ Escolha uma opção pra continuar"}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Placeholder — cenas 2 a 11 (a construir cena por cena)
// ─────────────────────────────────────────────────────────────────────
function CenaPlaceholder({
  titulo,
  descricao,
  onProxima,
}: {
  titulo: string;
  descricao: string;
  onProxima: () => void;
}) {
  return (
    <div className="text-center py-16 space-y-6">
      <div className="text-6xl">🚧</div>
      <div>
        <div className="text-xs uppercase tracking-widest text-amber-300">
          Cena em construção
        </div>
        <h2 className="text-2xl font-black mt-1">{titulo}</h2>
        <p className="text-sm text-white/70 max-w-md mx-auto mt-2">{descricao}</p>
      </div>
      <button
        onClick={onProxima}
        className="mx-auto block px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-sm font-semibold hover:bg-white/15"
      >
        Pular por enquanto →
      </button>
    </div>
  );
}
