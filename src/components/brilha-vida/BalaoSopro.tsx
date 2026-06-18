import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mic, MicOff, RotateCcw } from "lucide-react";

/**
 * Balão de Sopro — a criança assopra no microfone para encher um balão.
 * - Detecta volume via Web Audio API (RMS do AnalyserNode)
 * - Sopro suave (zona verde) → balão enche devagar
 * - Sopro muito forte (zona vermelha) → balão treme e a IA pede pra acalmar
 * - Silêncio → balão desinfla lentamente (incentivo a manter o sopro)
 * - Ao encher 100% com calma → balão sobe voando 🎉
 */
export function BalaoSopro({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<"pedindo" | "ouvindo" | "negado" | "concluido">("pedindo");
  const [inflado, setInflado] = useState(0); // 0..1
  const [nivel, setNivel] = useState(0); // volume normalizado 0..1
  const [zona, setZona] = useState<"silencio" | "calmo" | "forte">("silencio");
  const [dica, setDica] = useState("Aperte o microfone e assopre devagarinho 🎈");

  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);
  const infladoRef = useRef(0);
  const fortesSeguidos = useRef(0);

  // Limites calibrados pra criança soprando no celular/notebook
  const LIM_CALMO = 0.08;
  const LIM_FORTE = 0.35;

  const iniciar = async () => {
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
      setStatus("ouvindo");
      loop();
    } catch (e) {
      setStatus("negado");
    }
  };

  const loop = () => {
    const analyser = analyserRef.current;
    if (!analyser) return;
    const buf = new Uint8Array(analyser.fftSize);
    analyser.getByteTimeDomainData(buf);
    // RMS
    let sum = 0;
    for (let i = 0; i < buf.length; i++) {
      const v = (buf[i] - 128) / 128;
      sum += v * v;
    }
    const rms = Math.sqrt(sum / buf.length);
    const n = Math.min(1, rms * 2.2);
    setNivel(n);

    let novoInflado = infladoRef.current;
    if (rms > LIM_FORTE) {
      setZona("forte");
      fortesSeguidos.current++;
      // sopro forte: não enche e até esvazia um pouco
      novoInflado = Math.max(0, novoInflado - 0.004);
      if (fortesSeguidos.current > 15) {
        setDica("Calma 💙 assopre bem devagarinho, como apagar uma velinha");
      }
    } else if (rms > LIM_CALMO) {
      setZona("calmo");
      fortesSeguidos.current = 0;
      novoInflado = Math.min(1, novoInflado + 0.008);
      setDica("Isso! Continue assoprando suave 🎈");
    } else {
      setZona("silencio");
      fortesSeguidos.current = 0;
      novoInflado = Math.max(0, novoInflado - 0.002);
      if (novoInflado < 0.05) setDica("Encha o peito de ar e assopre no microfone");
    }

    infladoRef.current = novoInflado;
    setInflado(novoInflado);

    if (novoInflado >= 0.999) {
      setStatus("concluido");
      setDica("Você conseguiu! Que respiração calma 🌟");
      parar();
      return;
    }
    rafRef.current = requestAnimationFrame(loop);
  };

  const parar = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    streamRef.current?.getTracks().forEach((t) => t.stop());
    audioCtxRef.current?.close().catch(() => {});
    rafRef.current = null;
    streamRef.current = null;
    audioCtxRef.current = null;
    analyserRef.current = null;
  };

  useEffect(() => {
    return () => parar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reiniciar = () => {
    infladoRef.current = 0;
    setInflado(0);
    setStatus("pedindo");
    setDica("Aperte o microfone e assopre devagarinho 🎈");
  };

  const escala = 0.35 + inflado * 1.4; // 0.35 → 1.75
  const corBalao =
    zona === "forte" ? "#ef4444" : zona === "calmo" ? "#34d399" : "#fbbf24";

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-between p-6 bg-gradient-to-b from-sky-100 via-white to-emerald-50 rounded-[2rem] overflow-hidden">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-20"
      >
        <X size={22} />
      </button>

      <div className="text-center mt-2 z-10">
        <h2 className="text-2xl font-black text-slate-800">Balão Mágico</h2>
        <p className="text-sm text-slate-500 font-medium">Assopre no microfone pra encher</p>
      </div>

      {/* Balão */}
      <div className="relative flex-1 w-full flex items-center justify-center">
        <AnimatePresence>
          {status !== "concluido" ? (
            <motion.div
              key="balao"
              className="relative"
              animate={{
                scale: escala,
                x: zona === "forte" ? [0, -6, 6, -4, 4, 0] : 0,
                y: [0, -4, 0],
              }}
              transition={{
                scale: { duration: 0.25 },
                x: { duration: 0.3 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <svg width="160" height="200" viewBox="0 0 160 200">
                <ellipse cx="80" cy="80" rx="60" ry="72" fill={corBalao} />
                <ellipse cx="62" cy="55" rx="14" ry="22" fill="white" opacity="0.45" />
                <polygon points="74,150 86,150 80,162" fill={corBalao} />
                <path
                  d="M80 162 Q70 180 80 200"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="voando"
              initial={{ y: 0, scale: 1.75 }}
              animate={{ y: -500, scale: 1.4, rotate: [0, -8, 8, 0] }}
              transition={{ duration: 2.5, ease: "easeOut" }}
            >
              <svg width="160" height="200" viewBox="0 0 160 200">
                <ellipse cx="80" cy="80" rx="60" ry="72" fill="#34d399" />
                <ellipse cx="62" cy="55" rx="14" ry="22" fill="white" opacity="0.45" />
                <polygon points="74,150 86,150 80,162" fill="#34d399" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Barra de volume / zona */}
      <div className="w-full max-w-xs z-10">
        <div className="h-3 bg-slate-200 rounded-full overflow-hidden mb-2 relative">
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
        <p className="text-center text-sm font-bold text-slate-700 min-h-[20px]">{dica}</p>
      </div>

      <div className="mt-4 flex items-center gap-3 z-10">
        {status === "pedindo" && (
          <button
            onClick={iniciar}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            <Mic size={18} /> Começar a soprar
          </button>
        )}
        {status === "negado" && (
          <div className="flex items-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-2xl font-bold text-sm">
            <MicOff size={18} /> Precisa liberar o microfone
          </div>
        )}
        {status === "concluido" && (
          <button
            onClick={reiniciar}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            <RotateCcw size={18} /> De novo
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
