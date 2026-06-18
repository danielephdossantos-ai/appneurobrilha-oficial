import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { X, Play, Pause, RotateCcw, Mic, MicOff } from "lucide-react";

type Fase = "inspirar" | "segurar" | "expirar";

const FASES: { id: Fase; label: string; dur: number; cor: string }[] = [
  { id: "inspirar", label: "Inspire pelo nariz", dur: 4, cor: "from-sky-300 to-sky-500" },
  { id: "segurar", label: "Segure o ar", dur: 4, cor: "from-emerald-300 to-emerald-500" },
  { id: "expirar", label: "Solte pela boca no microfone", dur: 4, cor: "from-lilac/60 to-lilac" },
];

const META_CICLOS = 4;
const ESCALA_MIN = 0.55;
const ESCALA_MAX = 1.45;
const LIM_CALMO = 0.06;
const LIM_FORTE = 0.32;

export function PausaRespirar({ onClose }: { onClose: () => void }) {
  const [rodando, setRodando] = useState(false);
  const [faseIdx, setFaseIdx] = useState(0);
  const [segundos, setSegundos] = useState(FASES[0].dur);
  const [ciclos, setCiclos] = useState(0);
  const [concluido, setConcluido] = useState(false);

  // mic state
  const [micStatus, setMicStatus] = useState<"pedindo" | "ativo" | "negado">("pedindo");
  const [zona, setZona] = useState<"silencio" | "calmo" | "forte">("silencio");
  const [nivel, setNivel] = useState(0);
  const [escala, setEscala] = useState(ESCALA_MIN);
  const [dicaIA, setDicaIA] = useState("");

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);
  const faseRef = useRef<Fase>("inspirar");
  const escalaRef = useRef(ESCALA_MIN);
  const fortesSeguidos = useRef(0);

  faseRef.current = FASES[faseIdx].id;

  // microfone — sempre escutando enquanto a atividade está aberta
  const iniciarMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
      });
      streamRef.current = stream;
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioCtxRef.current = ctx;
      const src = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 1024;
      src.connect(analyser);
      analyserRef.current = analyser;
      setMicStatus("ativo");
      setRodando(true);
      loopAudio();
    } catch {
      setMicStatus("negado");
      setRodando(true); // segue só visual
    }
  };

  const loopAudio = () => {
    const analyser = analyserRef.current;
    if (!analyser) return;
    const buf = new Uint8Array(analyser.fftSize);
    analyser.getByteTimeDomainData(buf);
    let sum = 0;
    for (let i = 0; i < buf.length; i++) {
      const v = (buf[i] - 128) / 128;
      sum += v * v;
    }
    const rms = Math.sqrt(sum / buf.length);
    const n = Math.min(1, rms * 2.2);
    setNivel(n);

    const faseAtual = faseRef.current;
    let novaEscala = escalaRef.current;

    if (faseAtual === "expirar") {
      // expirando: o sopro detectado faz a bola encolher
      if (rms > LIM_FORTE) {
        setZona("forte");
        fortesSeguidos.current++;
        // sopro muito forte: bola treme, não acalma
        novaEscala = Math.min(ESCALA_MAX, novaEscala + 0.003);
        if (fortesSeguidos.current > 20) {
          setDicaIA("Calma 💙 assopre devagarinho, como apagar uma velinha");
        }
      } else if (rms > LIM_CALMO) {
        setZona("calmo");
        fortesSeguidos.current = 0;
        // sopro suave: bola encolhe progressivamente
        novaEscala = Math.max(ESCALA_MIN, novaEscala - 0.012);
        setDicaIA("Isso! Continue soprando bem suave 🌬️");
      } else {
        setZona("silencio");
        fortesSeguidos.current = 0;
        setDicaIA("Sopre no microfone para esvaziar a bolinha");
      }
    } else if (faseAtual === "inspirar") {
      // inspirando: bola enche sozinha (visual)
      novaEscala = Math.min(ESCALA_MAX, novaEscala + 0.008);
      setZona("silencio");
      setDicaIA("");
      fortesSeguidos.current = 0;
    } else {
      // segurar
      setZona("silencio");
      setDicaIA("");
      fortesSeguidos.current = 0;
    }

    escalaRef.current = novaEscala;
    setEscala(novaEscala);

    rafRef.current = requestAnimationFrame(loopAudio);
  };

  // Timer das fases
  useEffect(() => {
    if (!rodando || concluido) return;
    timerRef.current = setInterval(() => {
      setSegundos((s) => {
        if (s > 1) return s - 1;
        setFaseIdx((idx) => {
          const next = (idx + 1) % FASES.length;
          if (next === 0) {
            setCiclos((c) => {
              const nc = c + 1;
              if (nc >= META_CICLOS) {
                setConcluido(true);
                setRodando(false);
              }
              return nc;
            });
          }
          // reset escala alvo no início de inspirar
          if (FASES[next].id === "inspirar") {
            escalaRef.current = ESCALA_MIN;
            setEscala(ESCALA_MIN);
          }
          return next;
        });
        return FASES[(faseIdx + 1) % FASES.length].dur;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [rodando, faseIdx, concluido]);

  const pararTudo = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    streamRef.current?.getTracks().forEach((t) => t.stop());
    audioCtxRef.current?.close().catch(() => {});
    rafRef.current = null;
    streamRef.current = null;
    audioCtxRef.current = null;
    analyserRef.current = null;
  };

  useEffect(() => () => pararTudo(), []);

  const reiniciar = () => {
    setFaseIdx(0);
    setSegundos(FASES[0].dur);
    setCiclos(0);
    setConcluido(false);
    escalaRef.current = ESCALA_MIN;
    setEscala(ESCALA_MIN);
    setRodando(true);
  };

  const fase = FASES[faseIdx];
  const corBolinha =
    zona === "forte" && fase.id === "expirar"
      ? "from-red-300 to-red-500"
      : fase.cor;

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-sky-50 via-white to-lilac/10 rounded-[2rem] overflow-hidden">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive transition-colors z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1">Pausa para Respirar</h2>
      <p className="text-sm text-slate-500 mb-2 font-medium">
        Ciclo {Math.min(ciclos + (concluido ? 0 : 1), META_CICLOS)} de {META_CICLOS}
      </p>

      <div className="flex items-center gap-2 mb-4 text-xs font-bold">
        {micStatus === "ativo" && (
          <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
            <Mic size={12} /> microfone ativo
          </span>
        )}
        {micStatus === "negado" && (
          <span className="flex items-center gap-1 text-red-500 bg-red-50 px-2 py-1 rounded-full">
            <MicOff size={12} /> sem microfone (só visual)
          </span>
        )}
      </div>

      <div className="relative w-72 h-72 flex items-center justify-center mb-4">
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${corBolinha} shadow-2xl`}
          animate={{
            scale: concluido ? 1 : escala,
            x: zona === "forte" && fase.id === "expirar" ? [0, -6, 6, -4, 4, 0] : 0,
          }}
          transition={{
            scale: { duration: fase.id === "expirar" ? 0.15 : 0.4, ease: "easeOut" },
            x: { duration: 0.3 },
          }}
        />
        <div className="relative z-10 text-center text-white drop-shadow-lg pointer-events-none">
          {concluido ? (
            <>
              <div className="text-5xl mb-2">🌟</div>
              <div className="text-2xl font-black">Muito bem!</div>
              <div className="text-sm font-medium opacity-90">Você se acalmou.</div>
            </>
          ) : (
            <>
              <div className="text-lg font-bold mb-2 px-4">{fase.label}</div>
              <div className="text-6xl font-black tabular-nums">{segundos}</div>
            </>
          )}
        </div>
      </div>

      {/* barra de volume aparece durante expirar */}
      {micStatus === "ativo" && !concluido && fase.id === "expirar" && (
        <div className="w-full max-w-xs mb-3">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden relative">
            <div
              className="absolute top-0 bottom-0 bg-emerald-400/30"
              style={{ left: `${LIM_CALMO * 100}%`, width: `${(LIM_FORTE - LIM_CALMO) * 100}%` }}
            />
            <div
              className="absolute top-0 bottom-0 bg-red-400/30"
              style={{ left: `${LIM_FORTE * 100}%`, right: 0 }}
            />
            <div
              className="h-full rounded-full transition-all duration-100"
              style={{
                width: `${nivel * 100}%`,
                background:
                  zona === "forte" ? "#ef4444" : zona === "calmo" ? "#10b981" : "#fbbf24",
              }}
            />
          </div>
        </div>
      )}

      <p className="text-center text-sm font-bold text-slate-700 min-h-[20px] mb-3 px-4">
        {dicaIA}
      </p>

      <div className="flex items-center gap-3">
        {!rodando && !concluido && micStatus === "pedindo" && (
          <button
            onClick={iniciarMic}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            <Mic size={18} /> Começar
          </button>
        )}
        {rodando && !concluido && (
          <button
            onClick={() => setRodando(false)}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            <Pause size={18} /> Pausar
          </button>
        )}
        {!rodando && !concluido && micStatus !== "pedindo" && (
          <button
            onClick={() => setRodando(true)}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            <Play size={18} /> Continuar
          </button>
        )}
        {concluido && (
          <button
            onClick={reiniciar}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            <RotateCcw size={18} /> Respirar de novo
          </button>
        )}
        <button
          onClick={onClose}
          className="px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
