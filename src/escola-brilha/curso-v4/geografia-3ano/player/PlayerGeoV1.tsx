import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { AulaGeoV1, CenaGeoV1 } from "@/escola-brilha/curso-v4/types";
import { PERSONAGENS, ESQUILO_BRILHA } from "@/escola-brilha/mascotes-personagens";
import lupaImg from "@/assets/geografia-3ano/lupa.png";

/**
 * PlayerGeoV1 — player 100% customizado da Geografia 3º–9º.
 * Exceção formal ao padrão visual único (docs: .lovable/mem/constraints/
 * geografia-3ao9-player-custom.md).
 *
 * O esqueleto dos 11 momentos é FIXO. Cada cena tem UI própria (só
 * mesaCartografo entregue nesta entrega; as demais aparecem como
 * placeholder navegável enquanto a gente aprova cena por cena).
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
  const [idx, setIdx] = useState(0);
  const total = cenas.length;
  const atual = cenas[idx];
  const percent = Math.round(((idx + 1) / total) * 100);

  const proxima = () => {
    if (idx + 1 < total) setIdx(idx + 1);
    else onConcluir();
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
            {idx + 1} / {total}
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 pb-2 flex items-center justify-between text-[11px] uppercase tracking-widest text-emerald-300/80">
          <span>{atual.rotulo}</span>
          <span className="text-white/40">{aula.titulo}</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        <CenaRenderer cena={atual.cena} onProxima={proxima} />
      </main>
    </div>
  );
}

function CenaRenderer({ cena, onProxima }: { cena: CenaGeoV1; onProxima: () => void }) {
  switch (cena.tipo) {
    case "mesaCartografo":
      return <MesaCartografo cena={cena} onProxima={onProxima} />;
    case "votoExplorador":
      return <VotoExplorador cena={cena} onProxima={onProxima} />;
    case "placeholder":
      return <CenaPlaceholder titulo={cena.titulo} descricao={cena.descricao} onProxima={onProxima} />;
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
