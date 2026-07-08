import { useMemo, useState } from "react";
import type { LaboratorioClimaData } from "../../types";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

/**
 * Laboratório do Explorador — bloco interativo aditivo.
 * - Lado esquerdo: toggles (Sol / Chuva / Rio).
 * - Lado direito: cena SVG que reage em tempo real.
 * - A explicação NÃO aparece pronta: a criança toca em "🔊 Ouvir o que aconteceu".
 * - Ao final, um mini-desafio fecha o momento.
 */
export function LaboratorioClima({ data }: { data: LaboratorioClimaData }) {
  const [ativos, setAtivos] = useState<Record<string, boolean>>(() => {
    const inicial: Record<string, boolean> = {};
    data.controles.forEach((c) => {
      inicial[c.id] = !!c.ligadoInicial;
    });
    return inicial;
  });
  const [respondeu, setRespondeu] = useState<number | null>(null);
  const [falando, setFalando] = useState(false);

  const toggle = (id: string) =>
    setAtivos((p) => ({ ...p, [id]: !p[id] }));

  const chave = useMemo(() => {
    return Object.keys(ativos)
      .filter((k) => ativos[k])
      .sort()
      .join("+");
  }, [ativos]);

  const explicacao = data.explicacoes[chave];

  const ouvir = async () => {
    if (!explicacao) return;
    stopSpeaking();
    setFalando(true);
    try {
      await speakChunked(`${explicacao.titulo}. ${explicacao.texto}`, {
        lang: "pt-BR",
      });
    } finally {
      setFalando(false);
    }
  };

  // Estado visual da cena
  const chuva = !!ativos.chuva;
  const rio = !!ativos.rio;
  const sol = !!ativos.sol;
  // Nível da água: base + chuva + rio; sol seca um pouco
  const nivelAgua =
    (rio ? 40 : 8) + (chuva ? 30 : 0) - (sol && !chuva ? 10 : 0);
  const aguaY = Math.max(20, 220 - nivelAgua * 2); // menor Y = mais alta
  const casaSubiu = nivelAgua >= 55; // rio + chuva juntos

  return (
    <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-4 md:p-6 space-y-4">
      <p className="text-white/90 text-sm md:text-base">{data.instrucao}</p>

      <div className="grid md:grid-cols-[220px_1fr] gap-4">
        {/* CONTROLES */}
        <div className="space-y-3">
          <h4 className="text-white/70 text-xs uppercase tracking-wide">
            Controles
          </h4>
          {data.controles.map((c) => {
            const on = !!ativos[c.id];
            return (
              <button
                key={c.id}
                onClick={() => toggle(c.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl ring-2 transition-all ${
                  on
                    ? "bg-amber-400/20 ring-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                    : "bg-white/5 ring-white/15 hover:bg-white/10"
                }`}
                aria-pressed={on}
              >
                <span className="text-3xl">{c.emoji}</span>
                <span className="flex-1 text-left text-white font-semibold">
                  {c.rotulo}
                </span>
                <span
                  className={`w-10 h-6 rounded-full relative transition-colors ${
                    on ? "bg-emerald-400" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${
                      on ? "left-[18px]" : "left-0.5"
                    }`}
                  />
                </span>
              </button>
            );
          })}
        </div>

        {/* CENA */}
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-sky-300 to-sky-100">
          <CenaCasaRibeirinha
            chuva={chuva}
            sol={sol}
            aguaY={aguaY}
            casaSubiu={casaSubiu}
          />
        </div>
      </div>

      {/* EXPLICAÇÃO — só quando a criança clica */}
      {explicacao && (
        <div className="rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-300/30 p-4 animate-fade-in">
          <div className="flex items-start gap-3">
            <button
              onClick={ouvir}
              className={`shrink-0 w-11 h-11 rounded-full grid place-items-center text-xl ring-2 transition-all ${
                falando
                  ? "bg-emerald-400 ring-emerald-200 animate-pulse"
                  : "bg-white/15 ring-white/30 hover:bg-white/25"
              }`}
              aria-label="Ouvir explicação"
            >
              🔊
            </button>
            <div>
              <div className="text-amber-200 font-bold text-sm mb-1">
                {explicacao.titulo}
              </div>
              <div className="text-white/90 text-sm">{explicacao.texto}</div>
            </div>
          </div>
        </div>
      )}

      {/* DESAFIO FINAL */}
      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
        <div className="text-white font-semibold mb-3">
          🎯 {data.desafio.pergunta}
        </div>
        <div className="grid gap-2">
          {data.desafio.opcoes.map((op, i) => {
            const escolhida = respondeu === i;
            const certa = i === data.desafio.correta;
            const mostrar = respondeu !== null;
            return (
              <button
                key={i}
                onClick={() => respondeu === null && setRespondeu(i)}
                disabled={respondeu !== null}
                className={`text-left px-4 py-3 rounded-xl ring-2 transition-all ${
                  mostrar && certa
                    ? "bg-emerald-400/25 ring-emerald-300 text-white"
                    : mostrar && escolhida && !certa
                    ? "bg-rose-500/25 ring-rose-300 text-white"
                    : "bg-white/5 ring-white/15 hover:bg-white/10 text-white/90"
                }`}
              >
                {op}
              </button>
            );
          })}
        </div>
        {respondeu !== null && (
          <div
            className={`mt-3 text-sm ${
              respondeu === data.desafio.correta
                ? "text-emerald-300"
                : "text-rose-200"
            }`}
          >
            {respondeu === data.desafio.correta
              ? data.desafio.feedbackAcerto
              : data.desafio.feedbackErro}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Cena SVG — Casa ribeirinha reativa                                 */
/* ------------------------------------------------------------------ */

function CenaCasaRibeirinha({
  chuva,
  sol,
  aguaY,
  casaSubiu,
}: {
  chuva: boolean;
  sol: boolean;
  aguaY: number;
  casaSubiu: boolean;
}) {
  // Casa sobe um pouco quando a água encosta nas estacas
  const casaY = casaSubiu ? 60 : 90;

  return (
    <svg
      viewBox="0 0 400 260"
      className="w-full h-auto block"
      role="img"
      aria-label="Cena da casa ribeirinha reagindo ao clima"
    >
      {/* Céu — muda com sol/chuva */}
      <defs>
        <linearGradient id="ceu" x1="0" x2="0" y1="0" y2="1">
          <stop
            offset="0%"
            stopColor={chuva ? "#475569" : sol ? "#7dd3fc" : "#bae6fd"}
          />
          <stop
            offset="100%"
            stopColor={chuva ? "#94a3b8" : sol ? "#fde68a" : "#e0f2fe"}
          />
        </linearGradient>
        <linearGradient id="agua" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="400" height="260" fill="url(#ceu)" />

      {/* Sol */}
      {sol && (
        <g>
          <circle cx="340" cy="45" r="22" fill="#fde047" />
          <circle cx="340" cy="45" r="30" fill="#fde047" opacity="0.35" />
        </g>
      )}

      {/* Nuvem + chuva */}
      {chuva && (
        <g>
          <ellipse cx="100" cy="40" rx="45" ry="18" fill="#e2e8f0" />
          <ellipse cx="135" cy="35" rx="30" ry="15" fill="#f1f5f9" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1={60 + i * 8}
              y1={60}
              x2={55 + i * 8}
              y2={90}
              stroke="#38bdf8"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            >
              <animate
                attributeName="y1"
                values="60;180"
                dur="0.8s"
                repeatCount="indefinite"
                begin={`${(i % 4) * 0.15}s`}
              />
              <animate
                attributeName="y2"
                values="90;210"
                dur="0.8s"
                repeatCount="indefinite"
                begin={`${(i % 4) * 0.15}s`}
              />
              <animate
                attributeName="opacity"
                values="0;0.9;0"
                dur="0.8s"
                repeatCount="indefinite"
                begin={`${(i % 4) * 0.15}s`}
              />
            </line>
          ))}
        </g>
      )}

      {/* Margem/terra */}
      <rect x="0" y="220" width="400" height="40" fill="#84cc16" />
      <rect x="0" y="220" width="400" height="6" fill="#65a30d" />

      {/* Estacas — sempre visíveis, atravessando a água */}
      <rect
        x="150"
        y={casaY + 70}
        width="8"
        height={220 - (casaY + 70)}
        fill="#78350f"
      />
      <rect
        x="242"
        y={casaY + 70}
        width="8"
        height={220 - (casaY + 70)}
        fill="#78350f"
      />
      <rect
        x="196"
        y={casaY + 70}
        width="8"
        height={220 - (casaY + 70)}
        fill="#78350f"
      />

      {/* Casa — desce/sobe conforme a água */}
      <g
        style={{
          transform: `translateY(${casaY - 90}px)`,
          transition: "transform 700ms cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* Corpo */}
        <rect x="140" y="120" width="120" height="60" fill="#fef3c7" />
        <rect x="140" y="120" width="120" height="60" fill="none" stroke="#a16207" strokeWidth="2" />
        {/* Telhado */}
        <polygon points="130,120 200,80 270,120" fill="#b91c1c" />
        <polygon points="130,120 200,80 270,120" fill="none" stroke="#7f1d1d" strokeWidth="2" />
        {/* Porta */}
        <rect x="188" y="145" width="24" height="35" fill="#78350f" />
        {/* Janelas */}
        <rect x="152" y="135" width="20" height="18" fill="#38bdf8" stroke="#075985" strokeWidth="1.5" />
        <rect x="228" y="135" width="20" height="18" fill="#38bdf8" stroke="#075985" strokeWidth="1.5" />
      </g>

      {/* Água — sobe conforme chuva/rio */}
      <g
        style={{
          transform: `translateY(${aguaY - 180}px)`,
          transition: "transform 700ms cubic-bezier(.4,0,.2,1)",
        }}
      >
        <rect x="0" y="180" width="400" height="80" fill="url(#agua)" opacity="0.85" />
        {/* Ondulação */}
        <path
          d="M0 180 Q 20 174 40 180 T 80 180 T 120 180 T 160 180 T 200 180 T 240 180 T 280 180 T 320 180 T 360 180 T 400 180 L 400 200 L 0 200 Z"
          fill="#38bdf8"
          opacity="0.6"
        >
          <animate
            attributeName="d"
            dur="3s"
            repeatCount="indefinite"
            values="
              M0 180 Q 20 174 40 180 T 80 180 T 120 180 T 160 180 T 200 180 T 240 180 T 280 180 T 320 180 T 360 180 T 400 180 L 400 200 L 0 200 Z;
              M0 180 Q 20 186 40 180 T 80 180 T 120 180 T 160 180 T 200 180 T 240 180 T 280 180 T 320 180 T 360 180 T 400 180 L 400 200 L 0 200 Z;
              M0 180 Q 20 174 40 180 T 80 180 T 120 180 T 160 180 T 200 180 T 240 180 T 280 180 T 320 180 T 360 180 T 400 180 L 400 200 L 0 200 Z
            "
          />
        </path>
      </g>

      {/* Etiqueta explicativa da subida */}
      {casaSubiu && (
        <g>
          <rect x="270" y={casaY + 10} width="110" height="24" rx="12" fill="#f59e0b" />
          <text
            x="325"
            y={casaY + 26}
            textAnchor="middle"
            fill="#78350f"
            fontSize="12"
            fontWeight="700"
          >
            💧 rio encheu!
          </text>
        </g>
      )}
    </svg>
  );
}
