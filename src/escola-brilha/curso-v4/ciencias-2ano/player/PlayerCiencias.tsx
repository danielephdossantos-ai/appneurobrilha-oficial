import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Volume2, VolumeX, X, Beaker, Sparkles } from "lucide-react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import type {
  AulaCiencias,
  CenaCiencias,
  CenaBancadaAbrindo,
  CenaHipoteseTubos,
  CenaPlacasPetri,
  CenaPranchetaCientista,
  CenaMicroscopioZoom,
  CenaHabitatPins,
  CenaDiarioCampo,
  CenaExperimentoMisturar,
  CenaQuadroDescobertas,
  CenaCarimboCientista,
  CenaMissaoCampo,
} from "../tipos";
import { MissaoFamiliaFoto } from "@/escola-brilha/curso-v4/player-portugues/blocos/MissaoFamiliaFoto";

// ================================================================
// PALETA "LABORATÓRIO ROXO" — travada em toda a UI de Ciências
// ================================================================
const P = {
  bgFrom: "#1a0b2e",
  bgTo: "#2d1b4e",
  surface: "#3b1c66",
  border: "rgba(167, 139, 250, 0.28)",
  accent: "#a78bfa",
  accentStrong: "#8b5cf6",
  cyan: "#67e8f9",
  success: "#4ade80",
  warn: "#fb923c",
};

const CENAS_ROTULOS = [
  "Motivação",
  "Hipótese",
  "Vocabulário",
  "Leitura",
  "Compreensão",
  "Laboratório",
  "Você lê",
  "Experimento",
  "Revisão",
  "Avaliação",
  "Missão",
];

export function PlayerCiencias({
  aula,
  onSair,
  onConcluir,
}: {
  aula: AulaCiencias;
  onSair: () => void;
  onConcluir: () => void;
}) {
  const [cenaIdx, setCenaIdx] = useState(0);
  const [audioLigado, setAudioLigado] = useState(true);

  const cenas = useMemo(
    () => [
      aula.cena01_motivacao,
      aula.cena02_previsao,
      aula.cena03_vocabulario,
      aula.cena04_leituraGuiada,
      aula.cena05_compreensao,
      aula.cena06_personagensLugar,
      aula.cena07_voceLe,
      aula.cena08_minijogo,
      aula.cena09_revisao,
      aula.cena10_avaliacao,
      aula.cena11_missaoFamilia,
    ],
    [aula],
  );

  const cena = cenas[cenaIdx];
  const total = cenas.length;
  const isUltima = cenaIdx === total - 1;

  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  const proximo = () => {
    stopSpeaking();
    if (isUltima) {
      onConcluir();
    } else {
      setCenaIdx((i) => i + 1);
    }
  };

  const anterior = () => {
    stopSpeaking();
    if (cenaIdx > 0) setCenaIdx((i) => i - 1);
  };

  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        background: `radial-gradient(1200px 800px at 20% 0%, ${P.accent}22, transparent), radial-gradient(900px 600px at 80% 100%, ${P.cyan}18, transparent), linear-gradient(180deg, ${P.bgFrom} 0%, ${P.bgTo} 100%)`,
      }}
    >
      {/* Estrelinhas de fundo */}
      <FundoEstrelas />

      {/* ========= HEADER ========= */}
      <header
        className="sticky top-0 z-40 backdrop-blur-md border-b"
        style={{
          background: "rgba(26, 11, 46, 0.85)",
          borderColor: P.border,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onSair}
            className="p-2 rounded-xl hover:bg-white/10 transition"
            aria-label="Sair da aula"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex-1 min-w-0">
            <div
              className="text-[10px] uppercase tracking-[0.25em] font-black flex items-center gap-1.5"
              style={{ color: P.accent }}
            >
              <Beaker className="h-3 w-3" />
              Ciências · 2º Ano · Laboratório
            </div>
            <div className="text-sm font-bold truncate">{aula.titulo}</div>
          </div>
          <button
            onClick={() => {
              if (audioLigado) stopSpeaking();
              setAudioLigado((v) => !v);
            }}
            className="p-2 rounded-xl hover:bg-white/10 transition"
            aria-label={audioLigado ? "Desligar áudio" : "Ligar áudio"}
          >
            {audioLigado ? (
              <Volume2 className="h-5 w-5" style={{ color: P.cyan }} />
            ) : (
              <VolumeX className="h-5 w-5 text-white/50" />
            )}
          </button>
        </div>

        {/* Barra de progresso 11 passos */}
        <div className="max-w-4xl mx-auto px-4 pb-3">
          <div className="flex items-center gap-1">
            {cenas.map((_, i) => (
              <div
                key={i}
                className="flex-1 h-1.5 rounded-full transition-all"
                style={{
                  background:
                    i < cenaIdx
                      ? P.success
                      : i === cenaIdx
                        ? P.accent
                        : "rgba(255,255,255,0.12)",
                }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between mt-1.5 text-[10px] uppercase tracking-widest font-black">
            <span style={{ color: P.accent }}>
              {String(cenaIdx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <span className="text-white/60">{CENAS_ROTULOS[cenaIdx]}</span>
          </div>
        </div>
      </header>

      {/* ========= CENA ========= */}
      <main className="relative max-w-4xl mx-auto px-4 py-6 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={cenaIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <RenderCena
              cena={cena}
              audioLigado={audioLigado}
              onFinalizarCena={proximo}
              onSair={onSair}
            />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ========= FOOTER ========= */}
      <footer
        className="fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-md"
        style={{
          background: "rgba(26, 11, 46, 0.9)",
          borderColor: P.border,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={anterior}
            disabled={cenaIdx === 0}
            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold disabled:opacity-30"
          >
            ← Voltar
          </button>
          <button
            onClick={proximo}
            className="flex-1 py-3 rounded-xl font-black text-base transition active:scale-95 flex items-center justify-center gap-2"
            style={{
              background: `linear-gradient(135deg, ${P.accentStrong}, ${P.accent})`,
              boxShadow: `0 8px 24px -8px ${P.accentStrong}, 0 0 20px -6px ${P.accent}`,
            }}
          >
            {isUltima ? "Concluir Missão" : "Continuar"}
            <Sparkles className="h-4 w-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}

// ================================================================
// FUNDO — estrelinhas piscando
// ================================================================
function FundoEstrelas() {
  const estrelas = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        d: 2 + Math.random() * 3,
        delay: Math.random() * 3,
      })),
    [],
  );
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {estrelas.map((e, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/70"
          style={{
            left: `${e.x}%`,
            top: `${e.y}%`,
            width: e.d,
            height: e.d,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2 + e.delay, repeat: Infinity, delay: e.delay }}
        />
      ))}
    </div>
  );
}

// ================================================================
// AURORA BUBBLE — fala e botão pra ouvir
// ================================================================
function AuroraBubble({
  texto,
  audioLigado,
  autoSpeak = false,
}: {
  texto: string;
  audioLigado: boolean;
  autoSpeak?: boolean;
}) {
  const [falando, setFalando] = useState(false);
  const jaFalouRef = useRef(false);

  useEffect(() => {
    if (autoSpeak && audioLigado && !jaFalouRef.current && texto) {
      jaFalouRef.current = true;
      setFalando(true);
      speakChunked(texto, { rate: 0.9, onEnd: () => setFalando(false) });
    }
    return () => stopSpeaking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const falar = () => {
    if (!audioLigado) return;
    stopSpeaking();
    setFalando(true);
    speakChunked(texto, { rate: 0.9, onEnd: () => setFalando(false) });
  };

  return (
    <div
      className="rounded-2xl p-4 flex gap-3 items-start"
      style={{
        background: `linear-gradient(135deg, ${P.accentStrong}20, ${P.cyan}10)`,
        border: `1px solid ${P.border}`,
      }}
    >
      <button
        onClick={falar}
        disabled={!audioLigado}
        className="shrink-0 h-11 w-11 rounded-full flex items-center justify-center disabled:opacity-40 transition active:scale-95"
        style={{
          background: falando
            ? `linear-gradient(135deg, ${P.cyan}, ${P.accent})`
            : `linear-gradient(135deg, ${P.accentStrong}, ${P.accent})`,
          boxShadow: falando ? `0 0 20px ${P.cyan}` : "none",
        }}
        aria-label="Ouvir Aurora"
      >
        <Volume2 className="h-5 w-5" />
      </button>
      <div className="flex-1">
        <div
          className="text-[10px] font-black uppercase tracking-widest mb-1"
          style={{ color: P.accent }}
        >
          Aurora · Professora do Laboratório
        </div>
        <div className="text-sm leading-relaxed text-white/90">{texto}</div>
      </div>
    </div>
  );
}

// ================================================================
// TÍTULO DE SEÇÃO PADRÃO
// ================================================================
function SecaoTitulo({ chip, titulo }: { chip: string; titulo: string }) {
  return (
    <div className="mb-4">
      <div
        className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
        style={{
          background: `${P.accentStrong}33`,
          color: P.accent,
          border: `1px solid ${P.border}`,
        }}
      >
        {chip}
      </div>
      <h2 className="text-2xl md:text-3xl font-black mt-2 leading-tight">{titulo}</h2>
    </div>
  );
}

// ================================================================
// ROUTER de cenas
// ================================================================
function RenderCena({
  cena,
  audioLigado,
  onFinalizarCena,
  onSair,
}: {
  cena: CenaCiencias;
  audioLigado: boolean;
  onFinalizarCena: () => void;
  onSair: () => void;
}) {
  switch (cena.tipo) {
    case "bancadaAbrindo":
      return <CenaBancadaView cena={cena} audioLigado={audioLigado} />;
    case "hipoteseTubos":
      return <CenaTubosView cena={cena} audioLigado={audioLigado} />;
    case "placasPetri":
      return <CenaPlacasView cena={cena} audioLigado={audioLigado} />;
    case "pranchetaCientista":
      return <CenaPranchetaView cena={cena} audioLigado={audioLigado} />;
    case "microscopioZoom":
      return <CenaMicroscopioView cena={cena} audioLigado={audioLigado} />;
    case "habitatPins":
      return <CenaHabitatView cena={cena} audioLigado={audioLigado} />;
    case "diarioCampo":
      return <CenaDiarioView cena={cena} audioLigado={audioLigado} />;
    case "experimentoMisturar":
      return <CenaExperimentoView cena={cena} audioLigado={audioLigado} />;
    case "quadroDescobertas":
      return <CenaQuadroView cena={cena} audioLigado={audioLigado} />;
    case "carimboCientista":
      return <CenaCarimboView cena={cena} audioLigado={audioLigado} onSelo={onFinalizarCena} />;
    case "missaoCampo":
      return <CenaMissaoView cena={cena} audioLigado={audioLigado} />;
    default:
      return null;
  }
}

// ================================================================
// CENA 01 — Bancada Abrindo (Motivação)
// ================================================================
function CenaBancadaView({
  cena,
  audioLigado,
}: {
  cena: CenaBancadaAbrindo;
  audioLigado: boolean;
}) {
  const [aberto, setAberto] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAberto(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="space-y-5">
      <SecaoTitulo chip="Missão do Cientista" titulo={cena.titulo} />

      {/* Cortina + bancada */}
      <div className="relative rounded-3xl overflow-hidden aspect-[4/3]" style={{ background: P.surface }}>
        <img
          src={cena.imagemUrl}
          alt="Bancada do laboratório"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <AnimatePresence>
          {!aberto && (
            <>
              <motion.div
                className="absolute inset-y-0 left-0 w-1/2 z-10"
                initial={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{
                  background: `linear-gradient(90deg, ${P.bgFrom}, ${P.accentStrong})`,
                }}
              />
              <motion.div
                className="absolute inset-y-0 right-0 w-1/2 z-10"
                initial={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{
                  background: `linear-gradient(-90deg, ${P.bgFrom}, ${P.accentStrong})`,
                }}
              />
            </>
          )}
        </AnimatePresence>
        {/* Brilha mascote */}
        <motion.img
          src={cena.brilhaUrl}
          alt="Brilha"
          className="absolute bottom-3 right-3 w-20 md:w-28 z-20 drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: aberto ? 1 : 0, scale: aberto ? 1 : 0.6 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        />
      </div>

      <AuroraBubble texto={cena.aurora} audioLigado={audioLigado} autoSpeak />

      <div
        className="rounded-2xl p-5"
        style={{
          background: P.surface,
          border: `1px solid ${P.border}`,
        }}
      >
        <p className="text-base leading-relaxed text-white/90">{cena.historia}</p>
      </div>
    </div>
  );
}

// ================================================================
// CENA 02 — Hipótese com Tubos
// ================================================================
function CenaTubosView({
  cena,
  audioLigado,
}: {
  cena: CenaHipoteseTubos;
  audioLigado: boolean;
}) {
  const [escolhido, setEscolhido] = useState<string | null>(null);
  const acertou = escolhido === cena.respostaCerta;

  return (
    <div className="space-y-5">
      <SecaoTitulo chip="Hipótese do Cientista" titulo={cena.pergunta} />
      <AuroraBubble texto={cena.aurora} audioLigado={audioLigado} autoSpeak />

      <div className="grid grid-cols-3 gap-3">
        {cena.tubos.map((t) => {
          const sel = escolhido === t.id;
          const certo = escolhido && t.id === cena.respostaCerta;
          return (
            <button
              key={t.id}
              onClick={() => setEscolhido(t.id)}
              disabled={escolhido !== null}
              className="rounded-2xl p-3 flex flex-col items-center gap-2 transition active:scale-95 disabled:cursor-not-allowed"
              style={{
                background: sel ? `${t.cor}44` : "rgba(255,255,255,0.05)",
                border: `2px solid ${sel ? t.cor : "rgba(255,255,255,0.12)"}`,
                boxShadow: certo ? `0 0 24px ${t.cor}` : "none",
              }}
            >
              {/* Tubo de ensaio SVG */}
              <div className="relative h-32 w-12 mx-auto">
                <div
                  className="absolute inset-x-0 top-0 h-4 rounded-t-full border-2"
                  style={{ borderColor: t.cor, background: "rgba(255,255,255,0.08)" }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-24 rounded-b-full border-2 overflow-hidden"
                  style={{ borderColor: t.cor, background: `${t.cor}55` }}
                >
                  <motion.div
                    className="absolute bottom-0 inset-x-0"
                    style={{ background: t.cor, height: "60%" }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-3xl">
                    {t.emoji}
                  </div>
                </div>
              </div>
              <div className="text-xs font-black tracking-wider">{t.rotulo}</div>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {escolhido && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-4"
            style={{
              background: acertou ? `${P.success}22` : `${P.warn}22`,
              border: `2px solid ${acertou ? P.success : P.warn}`,
            }}
          >
            <div
              className="text-xs font-black uppercase tracking-widest mb-1"
              style={{ color: acertou ? P.success : P.warn }}
            >
              {acertou ? "✓ Hipótese confirmada" : "↻ Testa de novo"}
            </div>
            <div className="text-sm">{acertou ? cena.feedbackAcerto : cena.feedbackErro}</div>
            {!acertou && (
              <button
                onClick={() => setEscolhido(null)}
                className="mt-3 text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20"
              >
                Tentar outra hipótese
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {acertou && (
        <div className="text-sm text-white/80 italic text-center">✨ {cena.falaFinal}</div>
      )}
    </div>
  );
}

// ================================================================
// CENA 03 — Placas de Petri (Vocabulário) — abertas direto
// ================================================================
function CenaPlacasView({
  cena,
  audioLigado,
}: {
  cena: CenaPlacasPetri;
  audioLigado: boolean;
}) {
  return (
    <div className="space-y-5">
      <SecaoTitulo chip="Vocabulário do Cientista" titulo={cena.instrucao} />
      <AuroraBubble texto={cena.aurora} audioLigado={audioLigado} autoSpeak />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {cena.placas.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-3xl overflow-hidden"
            style={{ border: `2px solid ${p.corFundo}88` }}
          >
            {/* Placa de Petri circular no topo */}
            <div
              className="relative aspect-square max-h-40 mx-auto mt-4 rounded-full flex items-center justify-center"
              style={{
                width: 140,
                background: `radial-gradient(circle at 30% 30%, ${p.corFundo}dd, ${p.corFundo}66)`,
                border: `3px solid ${p.corFundo}`,
                boxShadow: `0 0 30px ${p.corFundo}66, inset 0 0 20px rgba(255,255,255,0.2)`,
              }}
            >
              <div className="text-6xl drop-shadow-lg">{p.emoji}</div>
              {/* Bolhinhas */}
              <div className="absolute top-4 left-6 h-2 w-2 rounded-full bg-white/60" />
              <div className="absolute bottom-6 right-8 h-1.5 w-1.5 rounded-full bg-white/50" />
            </div>

            {/* Etiqueta */}
            <div className="p-4 text-center">
              <div
                className="text-lg font-black tracking-wide"
                style={{ color: p.corFundo }}
              >
                {p.termo}
              </div>
              <div className="text-sm text-white/85 mt-1">{p.explicacao}</div>
              <div className="text-xs text-white/60 italic mt-2">{p.exemplo}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-sm text-white/80 italic text-center pt-2">
        ✨ {cena.falaFinal}
      </div>
    </div>
  );
}

// ================================================================
// CENA 04 — Prancheta (Leitura Guiada)
// ================================================================
function CenaPranchetaView({
  cena,
  audioLigado,
}: {
  cena: CenaPranchetaCientista;
  audioLigado: boolean;
}) {
  return (
    <div className="space-y-5">
      <SecaoTitulo chip="Leitura Guiada" titulo={cena.titulo} />
      <AuroraBubble texto={cena.aurora} audioLigado={audioLigado} autoSpeak />

      {/* Prancheta de madeira */}
      <div
        className="rounded-2xl p-4 shadow-2xl"
        style={{
          background: "linear-gradient(180deg, #7c4a1e 0%, #5a3416 100%)",
          border: "3px solid #3d2409",
        }}
      >
        {/* Clipe */}
        <div className="mx-auto -mt-6 w-24 h-6 rounded-t-lg bg-gradient-to-b from-slate-300 to-slate-500 border-2 border-slate-700 mb-3" />

        {/* Papel */}
        <div
          className="rounded-lg p-5 md:p-6"
          style={{
            background:
              "repeating-linear-gradient(180deg, #fef9e7 0px, #fef9e7 32px, #d4b98a 32px, #d4b98a 33px)",
            color: "#3d2409",
          }}
        >
          {cena.paragrafos.map((p, i) => (
            <p key={i} className="text-base leading-8 font-medium mb-2 last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="text-sm text-white/80 italic text-center">✨ {cena.falaFinal}</div>
    </div>
  );
}

// ================================================================
// CENA 05 — Microscópio Zoom (Compreensão)
// ================================================================
function CenaMicroscopioView({
  cena,
  audioLigado,
}: {
  cena: CenaMicroscopioZoom;
  audioLigado: boolean;
}) {
  const [sel, setSel] = useState<string | null>(null);
  const ativa = cena.amostras.find((a) => a.id === sel);

  return (
    <div className="space-y-5">
      <SecaoTitulo chip="Compreensão" titulo={cena.instrucao} />
      <AuroraBubble texto={cena.aurora} audioLigado={audioLigado} autoSpeak />

      {/* Microscópio */}
      <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
        <img
          src={cena.microscopioUrl}
          alt="Microscópio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Lente de zoom sobre a amostra ativa */}
        <AnimatePresence>
          {ativa && (
            <motion.div
              key={ativa.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="h-48 w-48 rounded-full flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle, ${P.cyan}aa 0%, ${P.accentStrong}44 60%, transparent 100%)`,
                  boxShadow: `0 0 60px ${P.cyan}`,
                }}
              >
                <div className="text-8xl">{ativa.emoji}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Amostras */}
      <div className="grid grid-cols-3 gap-3">
        {cena.amostras.map((a) => {
          const s = sel === a.id;
          return (
            <button
              key={a.id}
              onClick={() => setSel(s ? null : a.id)}
              className="rounded-2xl p-3 flex flex-col items-center gap-1 transition active:scale-95"
              style={{
                background: s ? `${P.cyan}33` : "rgba(255,255,255,0.05)",
                border: `2px solid ${s ? P.cyan : "rgba(255,255,255,0.12)"}`,
                boxShadow: s ? `0 0 20px ${P.cyan}44` : "none",
              }}
            >
              <div className="text-3xl">{a.emoji}</div>
              <div className="text-xs font-bold">{a.rotulo}</div>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {ativa && (
          <motion.div
            key={ativa.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-4"
            style={{
              background: `${P.cyan}18`,
              border: `1px solid ${P.cyan}66`,
            }}
          >
            <div
              className="text-[10px] font-black uppercase tracking-widest mb-1"
              style={{ color: P.cyan }}
            >
              🔍 Descoberta
            </div>
            <div className="text-sm">{ativa.descoberta}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-sm text-white/80 italic text-center">✨ {cena.falaFinal}</div>
    </div>
  );
}

// ================================================================
// CENA 06 — Habitat com Pins (Personagens & Lugar)
// ================================================================
function CenaHabitatView({
  cena,
  audioLigado,
}: {
  cena: CenaHabitatPins;
  audioLigado: boolean;
}) {
  const [sel, setSel] = useState<string | null>(null);
  const ativo = cena.pontos.find((p) => p.id === sel);

  return (
    <div className="space-y-5">
      <SecaoTitulo chip="Personagens & Lugar" titulo={cena.instrucao} />
      <AuroraBubble texto={cena.aurora} audioLigado={audioLigado} autoSpeak />

      <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
        <img
          src={cena.cenarioUrl}
          alt="Laboratório"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {cena.pontos.map((p) => {
          const s = sel === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setSel(p.id)}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 transition active:scale-95"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              aria-label={p.titulo}
            >
              <motion.div
                animate={
                  s
                    ? { scale: [1, 1.2, 1] }
                    : { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }
                }
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-11 w-11 rounded-full flex items-center justify-center text-xl"
                style={{
                  background: `radial-gradient(circle, ${P.cyan}, ${P.accentStrong})`,
                  boxShadow: `0 0 20px ${P.cyan}`,
                  border: `2px solid white`,
                }}
              >
                {p.emoji}
              </motion.div>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {ativo && (
          <motion.div
            key={ativo.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-4"
            style={{
              background: `${P.accentStrong}22`,
              border: `1px solid ${P.border}`,
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{ativo.emoji}</span>
              <div
                className="text-sm font-black tracking-wide"
                style={{ color: P.accent }}
              >
                {ativo.titulo}
              </div>
            </div>
            <div className="text-sm text-white/85">{ativo.texto}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-xs text-white/60 text-center">
        {sel ? "Toque em outro instrumento" : "Toque em cada 💎 no laboratório"}
      </div>
      <div className="text-sm text-white/80 italic text-center">✨ {cena.falaFinal}</div>
    </div>
  );
}

// ================================================================
// CENA 07 — Diário do Cientista (Você lê)
// ================================================================
function CenaDiarioView({
  cena,
  audioLigado,
}: {
  cena: CenaDiarioCampo;
  audioLigado: boolean;
}) {
  return (
    <div className="space-y-5">
      <SecaoTitulo chip="Você lê" titulo={cena.tituloLivro} />
      {cena.subtitulo && (
        <div className="text-sm text-white/60 -mt-3">{cena.subtitulo}</div>
      )}
      <AuroraBubble texto={cena.aurora} audioLigado={audioLigado} autoSpeak />

      {/* Diário aberto — fundo pergaminho verde-laboratório */}
      <div
        className="rounded-2xl p-6 md:p-8 shadow-2xl"
        style={{
          background: "linear-gradient(180deg, #2d4a2d 0%, #1a3d1a 100%)",
          border: "3px solid #0f2e0f",
        }}
      >
        <div
          className="rounded-lg p-5 md:p-6"
          style={{
            background:
              "repeating-linear-gradient(180deg, #f5f0d8 0px, #f5f0d8 34px, #b8c99a 34px, #b8c99a 35px)",
            color: "#1a3d1a",
          }}
        >
          {cena.paragrafos.map((p, i) => (
            <p key={i} className="text-base md:text-lg leading-8 font-medium mb-3 last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="text-sm text-white/80 italic text-center">✨ {cena.falaFinal}</div>
    </div>
  );
}

// ================================================================
// CENA 08 — Experimento (Minijogo)
// ================================================================
function CenaExperimentoView({
  cena,
  audioLigado,
}: {
  cena: CenaExperimentoMisturar;
  audioLigado: boolean;
}) {
  const [hip, setHip] = useState<string | null>(null);
  const [fase, setFase] = useState<"palpite" | "reacao" | "resultado">("palpite");

  useEffect(() => {
    if (hip && fase === "palpite") {
      const t1 = setTimeout(() => setFase("reacao"), 200);
      const t2 = setTimeout(() => setFase("resultado"), 2200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [hip, fase]);

  const acertou = hip === cena.respostaCerta;

  return (
    <div className="space-y-5">
      <SecaoTitulo chip="Experimento" titulo={cena.contexto} />
      <AuroraBubble texto={cena.aurora} audioLigado={audioLigado} autoSpeak />

      {/* Béquer + animação */}
      <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
        <img src={cena.bequerUrl} alt="Béquer" className="absolute inset-0 w-full h-full object-cover" />
        <AnimatePresence>
          {fase === "reacao" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-end pb-8 justify-center bg-black/40"
            >
              <div className="text-white font-black text-xl text-center px-6 animate-pulse">
                🔬 {cena.animacaoTexto}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hipóteses */}
      {fase === "palpite" && (
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-widest font-black" style={{ color: P.accent }}>
            Sua hipótese:
          </div>
          {cena.hipoteses.map((h) => (
            <button
              key={h.id}
              onClick={() => setHip(h.id)}
              className="w-full rounded-2xl p-4 flex items-center gap-3 transition active:scale-95"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: `1px solid ${P.border}`,
              }}
            >
              <span className="text-3xl">{h.emoji}</span>
              <span className="text-sm font-semibold text-left flex-1">{h.rotulo}</span>
            </button>
          ))}
        </div>
      )}

      {/* Resultado */}
      <AnimatePresence>
        {fase === "resultado" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-4"
            style={{
              background: acertou ? `${P.success}22` : `${P.warn}22`,
              border: `2px solid ${acertou ? P.success : P.warn}`,
            }}
          >
            <div
              className="text-xs font-black uppercase tracking-widest mb-1"
              style={{ color: acertou ? P.success : P.warn }}
            >
              {acertou ? "✓ HIPÓTESE CONFIRMADA" : "↻ Boa tentativa!"}
            </div>
            <div className="text-sm">
              {acertou ? cena.feedbackAcerto : cena.feedbackErro}
            </div>
            {!acertou && (
              <button
                onClick={() => {
                  setHip(null);
                  setFase("palpite");
                }}
                className="mt-3 text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20"
              >
                Testar outra hipótese
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {fase === "resultado" && acertou && (
        <div className="text-sm text-white/80 italic text-center">✨ {cena.falaFinal}</div>
      )}
    </div>
  );
}

// ================================================================
// CENA 09 — Quadro de Descobertas (Revisão)
// ================================================================
function CenaQuadroView({
  cena,
  audioLigado,
}: {
  cena: CenaQuadroDescobertas;
  audioLigado: boolean;
}) {
  return (
    <div className="space-y-5">
      <SecaoTitulo chip="Revisão do Método" titulo={cena.instrucao} />
      <AuroraBubble texto={cena.aurora} audioLigado={audioLigado} autoSpeak />

      <div className="grid gap-2">
        {cena.descobertas.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.25 }}
            className="rounded-2xl p-4 flex items-center gap-3"
            style={{
              background: `linear-gradient(90deg, ${P.accentStrong}33, ${P.accentStrong}11)`,
              border: `1px solid ${P.border}`,
            }}
          >
            <div
              className="h-12 w-12 rounded-full flex items-center justify-center text-2xl shrink-0"
              style={{
                background: `linear-gradient(135deg, ${P.cyan}, ${P.accent})`,
                boxShadow: `0 0 20px ${P.cyan}44`,
              }}
            >
              {d.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-black" style={{ color: P.accent }}>
                {d.titulo}
              </div>
              <div className="text-sm text-white/85 mt-0.5">{d.texto}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-sm text-white/80 italic text-center">✨ {cena.falaFinal}</div>
    </div>
  );
}

// ================================================================
// CENA 10 — Carimbo do Cientista (Avaliação)
// ================================================================
function CenaCarimboView({
  cena,
  audioLigado,
  onSelo,
}: {
  cena: CenaCarimboCientista;
  audioLigado: boolean;
  onSelo: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [escolha, setEscolha] = useState<string | null>(null);
  const [carimbos, setCarimbos] = useState(0);
  const [feito, setFeito] = useState(false);

  const q = cena.perguntas[idx];
  const opCorreta = q.opcoes.find((o) => o.correta);
  const acertou = escolha === opCorreta?.id;

  const proximo = () => {
    if (acertou) setCarimbos((c) => c + 1);
    if (idx + 1 >= cena.perguntas.length) {
      setFeito(true);
    } else {
      setIdx((i) => i + 1);
      setEscolha(null);
    }
  };

  if (feito) {
    // Tela do selo/cristal
    return (
      <div className="space-y-5 text-center">
        <SecaoTitulo chip="Recompensa" titulo={cena.selo.nome} />

        <motion.div
          initial={{ scale: 0.3, rotate: -30, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 14 }}
          className="mx-auto"
        >
          <div
            className={`inline-block rounded-full p-10 bg-gradient-to-br ${cena.selo.cor}`}
            style={{ boxShadow: `0 0 60px ${P.accent}` }}
          >
            <div className="text-8xl">{cena.selo.emoji}</div>
          </div>
        </motion.div>

        <div className="text-sm text-white/80">{cena.selo.subtitulo}</div>

        <div
          className="rounded-2xl p-4 mx-auto max-w-sm"
          style={{
            background: `${P.success}22`,
            border: `1px solid ${P.success}66`,
          }}
        >
          <div className="text-xs uppercase tracking-widest font-black" style={{ color: P.success }}>
            Seu placar
          </div>
          <div className="text-3xl font-black mt-1">
            {carimbos} / {cena.perguntas.length}
          </div>
          <div className="text-xs text-white/70 mt-1">carimbos HIPÓTESE CONFIRMADA</div>
        </div>

        <div className="text-sm text-white/80 italic">✨ {cena.falaFinal}</div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <SecaoTitulo chip={`Pergunta ${idx + 1}/${cena.perguntas.length}`} titulo={q.pergunta} />
      <AuroraBubble texto={cena.aurora} audioLigado={audioLigado} />

      <div className="grid gap-2">
        {q.opcoes.map((o) => {
          const sel = escolha === o.id;
          const showResult = escolha !== null;
          const isCorreta = o.correta === true;
          return (
            <button
              key={o.id}
              onClick={() => setEscolha(o.id)}
              disabled={escolha !== null}
              className="w-full rounded-2xl p-4 flex items-center gap-3 transition active:scale-95 text-left"
              style={{
                background: showResult
                  ? isCorreta
                    ? `${P.success}22`
                    : sel
                      ? `${P.warn}22`
                      : "rgba(255,255,255,0.03)"
                  : sel
                    ? `${P.accent}22`
                    : "rgba(255,255,255,0.06)",
                border: `2px solid ${
                  showResult
                    ? isCorreta
                      ? P.success
                      : sel
                        ? P.warn
                        : "rgba(255,255,255,0.08)"
                    : sel
                      ? P.accent
                      : "rgba(255,255,255,0.08)"
                }`,
              }}
            >
              {o.emoji && <span className="text-2xl">{o.emoji}</span>}
              <span className="text-sm font-semibold flex-1">{o.texto}</span>
              {showResult && isCorreta && <span className="text-lg">✓</span>}
              {showResult && sel && !isCorreta && <span className="text-lg">✗</span>}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {escolha && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-4"
            style={{
              background: acertou ? `${P.success}22` : `${P.warn}22`,
              border: `2px solid ${acertou ? P.success : P.warn}`,
            }}
          >
            <div
              className="text-xs font-black uppercase tracking-widest mb-1"
              style={{ color: acertou ? P.success : P.warn }}
            >
              {acertou ? "✓ Carimbo conquistado" : "Aprenda e continue"}
            </div>
            <div className="text-sm">
              {acertou ? q.feedbackAcerto : q.feedbackErro}
            </div>
            <button
              onClick={proximo}
              className="mt-3 w-full py-2.5 rounded-xl font-bold text-sm active:scale-95"
              style={{
                background: `linear-gradient(135deg, ${P.accentStrong}, ${P.accent})`,
              }}
            >
              {idx + 1 >= cena.perguntas.length ? "Ver Cristal" : "Próxima pergunta"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Placar de carimbos */}
      <div className="flex items-center justify-center gap-1.5">
        {cena.perguntas.map((_, i) => (
          <div
            key={i}
            className="h-7 w-7 rounded-full flex items-center justify-center text-xs font-black"
            style={{
              background: i < carimbos ? P.success : "rgba(255,255,255,0.08)",
              border: `1px solid ${i < carimbos ? P.success : P.border}`,
            }}
          >
            {i < carimbos ? "✓" : i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

// ================================================================
// CENA 11 — Missão de Campo (Missão em Família)
// ================================================================
function CenaMissaoView({
  cena,
  audioLigado,
}: {
  cena: CenaMissaoCampo;
  audioLigado: boolean;
}) {
  return (
    <div className="space-y-5">
      <SecaoTitulo chip="Missão em Família" titulo={cena.titulo} />
      <AuroraBubble texto={cena.aurora} audioLigado={audioLigado} autoSpeak />

      <div
        className="rounded-2xl p-5 space-y-4"
        style={{ background: P.surface, border: `1px solid ${P.border}` }}
      >
        <div>
          <div
            className="text-xs uppercase tracking-widest font-black mb-2"
            style={{ color: P.cyan }}
          >
            📦 Materiais
          </div>
          <ul className="text-sm space-y-1 text-white/85">
            {cena.materiais.map((m, i) => (
              <li key={i}>• {m}</li>
            ))}
          </ul>
        </div>

        <div>
          <div
            className="text-xs uppercase tracking-widest font-black mb-2"
            style={{ color: P.cyan }}
          >
            🧭 Passos da Missão
          </div>
          <ol className="text-sm space-y-2 text-white/85">
            {cena.passos.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span
                  className="shrink-0 h-6 w-6 rounded-full flex items-center justify-center text-xs font-black"
                  style={{
                    background: P.accentStrong,
                    color: "white",
                  }}
                >
                  {i + 1}
                </span>
                <span className="flex-1">{p}</span>
              </li>
            ))}
          </ol>
        </div>

        <div
          className="rounded-xl p-3 text-sm"
          style={{
            background: `${P.cyan}18`,
            border: `1px solid ${P.cyan}44`,
          }}
        >
          📸 {cena.registro}
        </div>
      </div>

      {/* Câmera de registro (reusa componente existente) */}
      <MissaoFamiliaFoto
        codigoAula="ciencias-2ano-u1-a1"
        instrucao="Uma foto da sua observação de cientista"
      />

      <div className="text-sm text-white/80 italic text-center">✨ {cena.falaFinal}</div>
    </div>
  );
}
