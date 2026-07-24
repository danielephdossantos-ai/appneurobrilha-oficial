import { useEffect, useRef, useState } from "react";
import { X, Play, Pause, RotateCcw } from "lucide-react";
import { VozGuia } from "./shared/VozGuia";

/**
 * Timer Visual (Time Timer) — disco vermelho que diminui.
 * Ferramenta padrão-ouro para TEA/TDAH: torna o tempo abstrato em algo visível.
 * Referência clínica: Time Timer® (Jan Rogers), amplamente adotado em TEACCH.
 */

const PRESETS = [
  { label: "1 min", s: 60 },
  { label: "3 min", s: 180 },
  { label: "5 min", s: 300 },
  { label: "10 min", s: 600 },
  { label: "15 min", s: 900 },
  { label: "20 min", s: 1200 },
];

export function TimerVisual({ onClose }: { onClose: () => void }) {
  const [total, setTotal] = useState(300);
  const [restante, setRestante] = useState(300);
  const [rodando, setRodando] = useState(false);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  const concluido = restante <= 0;

  useEffect(() => {
    if (!rodando || concluido) return;
    ref.current = setInterval(() => setRestante((s) => Math.max(0, s - 1)), 1000);
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [rodando, concluido]);

  useEffect(() => {
    if (concluido && rodando) {
      setRodando(false);
      try {
        const u = new SpeechSynthesisUtterance("Acabou o tempo. Muito bem!");
        u.lang = "pt-BR";
        window.speechSynthesis.speak(u);
      } catch {}
    }
  }, [concluido, rodando]);

  const escolherPreset = (s: number) => {
    setTotal(s);
    setRestante(s);
    setRodando(false);
  };

  const reset = () => {
    setRestante(total);
    setRodando(false);
  };

  const mm = Math.floor(restante / 60);
  const ss = restante % 60;
  const pct = total ? restante / total : 0;

  // Disco: arco vermelho que diminui (SVG)
  const R = 90;
  const CIRC = 2 * Math.PI * R;
  const offset = CIRC * (1 - pct);

  return (
    <div className="relative min-h-[70vh] p-6 bg-gradient-to-b from-rose-50 via-white to-amber-50 rounded-[2rem] overflow-hidden">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive transition-colors z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1">Relógio Vermelho</h2>
      <p className="text-sm text-slate-500 mb-3 font-medium max-w-md">
        O vermelho vai diminuindo. Quando acabar, o tempo terminou.
      </p>

      <VozGuia texto="Este é o relógio do tempo. Você vê a parte vermelha. Enquanto ela existe, ainda tem tempo. Quando ela sumir, o tempo acabou." />

      {/* Disco */}
      <div className="flex justify-center my-4">
        <svg width="240" height="240" viewBox="-120 -120 240 240">
          <circle r={R + 12} fill="white" stroke="#e2e8f0" strokeWidth="2" />
          {/* Marcadores de minuto */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
            const x1 = Math.cos(a) * (R + 4);
            const y1 = Math.sin(a) * (R + 4);
            const x2 = Math.cos(a) * (R + 12);
            const y2 = Math.sin(a) * (R + 12);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#94a3b8"
                strokeWidth={i % 3 === 0 ? 2.5 : 1}
              />
            );
          })}
          {/* Fatia vermelha (círculo com stroke que diminui) */}
          <circle
            r={R}
            fill="transparent"
            stroke="#ef4444"
            strokeWidth={R * 2}
            strokeDasharray={CIRC}
            strokeDashoffset={offset}
            transform="rotate(-90)"
            style={{ transition: "stroke-dashoffset 1s linear" }}
            opacity="0.85"
          />
          {/* Máscara interna */}
          <circle r={R * 0.35} fill="white" />
          {/* Texto tempo */}
          <text
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-slate-800 font-black"
            fontSize="22"
          >
            {mm}:{ss.toString().padStart(2, "0")}
          </text>
        </svg>
      </div>

      {/* Presets */}
      <div className="grid grid-cols-3 gap-2 mb-4 max-w-md mx-auto">
        {PRESETS.map((p) => (
          <button
            key={p.s}
            onClick={() => escolherPreset(p.s)}
            className={`py-2 rounded-2xl font-black text-sm transition-all ${
              total === p.s
                ? "bg-primary text-white shadow-glow"
                : "bg-white border-2 border-slate-200 text-slate-600 hover:border-primary"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="flex gap-2 justify-center">
        {!rodando && !concluido && (
          <button
            onClick={() => setRodando(true)}
            className="px-6 py-3 bg-primary text-white rounded-2xl font-black shadow-glow hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            <Play size={18} /> {restante === total ? "Começar" : "Continuar"}
          </button>
        )}
        {rodando && (
          <button
            onClick={() => setRodando(false)}
            className="px-6 py-3 bg-primary text-white rounded-2xl font-black shadow-glow hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            <Pause size={18} /> Pausar
          </button>
        )}
        <button
          onClick={reset}
          className="px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold inline-flex items-center gap-2"
        >
          <RotateCcw size={16} /> Zerar
        </button>
      </div>

      {concluido && (
        <div className="text-center mt-4 animate-fade-in">
          <div className="text-4xl">⏰</div>
          <p className="font-black text-rose-600">O tempo acabou!</p>
        </div>
      )}

      <p className="mt-6 text-[10px] text-slate-400 text-center">
        Base clínica: Time Timer® (Rogers) — visualização concreta do tempo, suporte TEACCH para TEA/TDAH.
      </p>
    </div>
  );
}
