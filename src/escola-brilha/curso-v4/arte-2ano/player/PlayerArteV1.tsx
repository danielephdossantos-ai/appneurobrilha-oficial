import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AulaArteV1, CenaArteV1 } from "@/escola-brilha/curso-v4/types";
import { speakChunked, stopSpeaking as cancelSpeak } from "@/lib/native-tts";

/**
 * PlayerArteV1 — player 100% custom de Arte (2º ano em diante).
 * Universo do ateliê: paleta de tintas, caldeirão de mistura,
 * frotagem, sombras, land art. Navegação por scroll — 11 cenas
 * empilhadas, cada uma com sua mecânica.
 */
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
      {/* Textura de tela de pintura */}
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
          <button
            onClick={onSair}
            className="text-xs text-white/80 hover:text-white shrink-0 font-bold"
          >
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
            ref={(el) => (sectionRefs.current[i] = el)}
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
            />
          </section>
        ))}
      </main>
    </div>
  );
}

// ------- Renderer por tipo de cena --------------------------------------

function CenaRenderer({
  cena,
  onProxima,
  ehUltima,
}: {
  cena: CenaArteV1;
  onProxima: () => void;
  ehUltima: boolean;
}) {
  if (cena.tipo === "misturaCores") return <CenaMisturaCores cena={cena} onProxima={onProxima} ehUltima={ehUltima} />;
  return <Placeholder cena={cena as Extract<CenaArteV1, { tipo: "placeholder" }>} />;
}

function Placeholder({ cena }: { cena: Extract<CenaArteV1, { tipo: "placeholder" }> }) {
  return (
    <div className="rounded-3xl bg-white/10 border-2 border-dashed border-white/25 p-6 text-center">
      <div className="text-lg font-black mb-1">{cena.titulo}</div>
      <div className="text-sm text-white/70">{cena.descricao}</div>
      <div className="text-[11px] uppercase tracking-widest text-amber-300/80 mt-3 font-black">
        Em construção — aguardando aprovação da Cena 1
      </div>
    </div>
  );
}

// ------- CENA 1 — Mistura de Cores --------------------------------------

type Mistura = Extract<CenaArteV1, { tipo: "misturaCores" }>["misturas"][number];

function CenaMisturaCores({
  cena,
  onProxima,
  ehUltima,
}: {
  cena: Extract<CenaArteV1, { tipo: "misturaCores" }>;
  onProxima: () => void;
  ehUltima: boolean;
}) {
  const potes = useMemo(() => {
    const map = new Map<string, { id: string; hex: string; nome: string }>();
    cena.misturas.forEach((m) => {
      map.set(m.primariaA.id, m.primariaA);
      map.set(m.primariaB.id, m.primariaB);
    });
    return Array.from(map.values());
  }, [cena]);

  // Estado do caldeirão
  const [caldeirao, setCaldeirao] = useState<string[]>([]); // ids dos potes já dentro
  const [resultado, setResultado] = useState<Mistura | null>(null);
  const [descobertas, setDescobertas] = useState<string[]>([]); // ids das misturas já feitas
  const [erro, setErro] = useState<string | null>(null);
  const [dragId, setDragId] = useState<string | null>(null);

  const caldeiraoCor =
    resultado?.resultado.hex ??
    (caldeirao.length === 1
      ? potes.find((p) => p.id === caldeirao[0])?.hex ?? "#312e81"
      : "#312e81");

  useEffect(() => {
    // narra intro só na entrada
    speakChunked(cena.aurora);
    return () => cancelSpeak();
  }, [cena.aurora]);

  const soltarNoCaldeirao = (idPote: string) => {
    if (resultado) return;
    if (caldeirao.includes(idPote)) return;
    const novo = [...caldeirao, idPote];
    setCaldeirao(novo);
    if (novo.length === 2) {
      const [a, b] = novo;
      const achou = cena.misturas.find(
        (m) =>
          (m.primariaA.id === a && m.primariaB.id === b) ||
          (m.primariaA.id === b && m.primariaB.id === a),
      );
      if (achou) {
        setResultado(achou);
        setDescobertas((d) => (d.includes(achou.id) ? d : [...d, achou.id]));
        setErro(null);
        cancelSpeak();
        setTimeout(() => speakChunked(achou.falaAcerto), 600);
      } else {
        setErro("Essas duas cores não fazem uma mistura nova. Tenta outra combinação!");
      }
    }
  };

  const limpar = () => {
    setCaldeirao([]);
    setResultado(null);
    setErro(null);
    cancelSpeak();
  };

  const todasFeitas = descobertas.length === cena.misturas.length;

  useEffect(() => {
    if (todasFeitas) {
      const t = setTimeout(() => speakChunked(cena.falaFinal), 500);
      return () => clearTimeout(t);
    }
  }, [todasFeitas, cena.falaFinal]);

  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#3b1c6b]/80 to-[#1e0f3d]/80 border-2 border-amber-300/30 p-5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
      {/* Fala da Aurora */}
      <div className="flex items-start gap-3 mb-4">
        <div className="text-4xl shrink-0 drop-shadow">🧑‍🎨</div>
        <div className="rounded-2xl bg-white/15 border border-white/25 p-3 text-sm leading-relaxed font-medium">
          <div className="text-[10px] uppercase tracking-widest text-amber-200 font-black mb-1">
            Professora Aurora
          </div>
          {cena.aurora}
          <button
            onClick={() => {
              cancelSpeak();
              speakChunked(cena.aurora);
            }}
            className="ml-2 text-amber-200 hover:text-white"
            aria-label="Ouvir novamente"
          >
            🔊
          </button>
        </div>
      </div>

      <div className="text-center text-sm font-bold text-amber-200 mb-3">
        {cena.instrucao}
      </div>

      {/* Caldeirão */}
      <div className="relative mx-auto w-full max-w-xs aspect-square mb-4">
        <div
          className={`absolute inset-0 rounded-full transition-all border-4 ${
            dragId ? "border-amber-300 scale-105" : "border-white/30"
          } bg-gradient-to-b from-stone-700 to-stone-900 shadow-inner`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const id = e.dataTransfer.getData("text/plain");
            if (id) soltarNoCaldeirao(id);
            setDragId(null);
          }}
        >
          {/* Tinta dentro */}
          <div className="absolute inset-6 rounded-full overflow-hidden">
            <motion.div
              key={caldeiraoCor}
              initial={{ scale: 0.7, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
              className="w-full h-full rounded-full"
              style={{ backgroundColor: caldeiraoCor }}
            />
            {/* Ondulação da tinta */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "inset 0 20px 40px rgba(255,255,255,0.3)",
                  "inset 0 -10px 40px rgba(0,0,0,0.4)",
                  "inset 0 20px 40px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          {/* Splash quando resultado */}
          <AnimatePresence>
            {resultado && (
              <>
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={`splash-${resultado.id}-${i}`}
                    initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                    animate={{
                      scale: 1,
                      x: Math.cos((i / 10) * Math.PI * 2) * 90,
                      y: Math.sin((i / 10) * Math.PI * 2) * 90,
                      opacity: 0,
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute left-1/2 top-1/2 w-5 h-5 rounded-full"
                    style={{ backgroundColor: resultado.resultado.hex, marginLeft: -10, marginTop: -10 }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
          {/* Label do resultado */}
          {resultado && (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-4 py-1.5 rounded-full text-sm font-black shadow-lg border-2"
              style={{ borderColor: resultado.resultado.hex }}
            >
              {resultado.resultado.nome}!
            </motion.div>
          )}
          {caldeirao.length === 0 && (
            <div className="absolute inset-0 grid place-items-center text-white/60 text-4xl">
              🫙
            </div>
          )}
        </div>
      </div>

      {erro && (
        <div className="mb-3 rounded-xl bg-rose-500/20 border border-rose-400/40 p-3 text-sm text-center font-medium">
          {erro}
        </div>
      )}

      {/* Potes de tinta */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {potes.map((p) => {
          const jaNoCaldeirao = caldeirao.includes(p.id);
          return (
            <button
              key={p.id}
              draggable={!jaNoCaldeirao && !resultado}
              onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", p.id);
                setDragId(p.id);
              }}
              onDragEnd={() => setDragId(null)}
              onClick={() => !jaNoCaldeirao && !resultado && soltarNoCaldeirao(p.id)}
              disabled={jaNoCaldeirao || !!resultado}
              className={`group relative aspect-square rounded-2xl border-4 border-white/40 flex flex-col items-center justify-center gap-1 font-black text-white shadow-lg transition-all ${
                jaNoCaldeirao || resultado
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-110 active:scale-95 cursor-grab"
              }`}
              style={{ backgroundColor: p.hex }}
            >
              <div className="text-3xl drop-shadow">🎨</div>
              <div className="text-xs uppercase tracking-wider drop-shadow-lg">{p.nome}</div>
            </button>
          );
        })}
      </div>

      {/* Controles */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs text-white/80">
          <span className="font-bold">
            Misturas descobertas: {descobertas.length} / {cena.misturas.length}
          </span>
          <button
            onClick={limpar}
            className="px-3 py-1 rounded-lg bg-white/10 border border-white/25 hover:bg-white/20 font-bold text-xs"
          >
            🧽 Limpar caldeirão
          </button>
        </div>

        {/* Cores descobertas */}
        <div className="flex gap-2 justify-center min-h-[44px]">
          {cena.misturas.map((m) => {
            const ok = descobertas.includes(m.id);
            return (
              <div
                key={m.id}
                className={`flex-1 rounded-xl border-2 px-2 py-1.5 text-center text-[11px] font-black transition-all ${
                  ok
                    ? "border-white/40 text-slate-900"
                    : "border-dashed border-white/25 text-white/50 bg-white/5"
                }`}
                style={ok ? { backgroundColor: m.resultado.hex } : {}}
              >
                {ok ? `✓ ${m.resultado.nome}` : "??"}
              </div>
            );
          })}
        </div>

        {todasFeitas && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-gradient-to-br from-amber-300 to-rose-400 text-slate-900 p-4 text-center font-bold shadow-lg"
          >
            🌈 {cena.falaFinal}
            <button
              onClick={onProxima}
              className="mt-3 block mx-auto px-5 py-2 rounded-full bg-slate-900 text-white font-black text-sm hover:bg-slate-800"
            >
              {ehUltima ? "🏆 Terminar aula" : "Próxima cena →"}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
