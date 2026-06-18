// ============================================================
// Mundo Dinossauro — cena viva e interativa
// ============================================================
// Camadas (do fundo pra frente):
//  1) Imagem-base do mundo (worldDinossauros)
//  2) Sol pulsando + nuvens vagando
//  3) Vulcão soltando fumaça
//  4) Dinos andando em loop (parallax)
//  5) Objetos tocáveis (ovo, osso, folha) — a criança toca,
//     eles dão um pulinho e teleportam pra outro canto
// ============================================================

import { useCallback, useMemo, useState } from "react";
import worldDinossauros from "@/assets/neuro-treino/worlds/dinossauros.jpg";

type Toque = { id: string; emoji: string; x: number; y: number; pulando: boolean };

const OBJETOS_INICIAIS: Omit<Toque, "pulando">[] = [
  { id: "ovo", emoji: "🥚", x: 18, y: 62 },
  { id: "osso", emoji: "🦴", x: 72, y: 70 },
  { id: "folha", emoji: "🍃", x: 45, y: 55 },
  { id: "pegada", emoji: "🐾", x: 86, y: 48 },
];

export function DinoWorld() {
  const [objetos, setObjetos] = useState<Toque[]>(() =>
    OBJETOS_INICIAIS.map((o) => ({ ...o, pulando: false })),
  );

  const tocar = useCallback((id: string) => {
    setObjetos((prev) =>
      prev.map((o) =>
        o.id === id
          ? {
              ...o,
              pulando: true,
              x: 10 + Math.random() * 80,
              y: 40 + Math.random() * 40,
            }
          : o,
      ),
    );
    setTimeout(() => {
      setObjetos((prev) =>
        prev.map((o) => (o.id === id ? { ...o, pulando: false } : o)),
      );
    }, 600);
  }, []);

  // Posições aleatórias estáveis pras nuvens
  const nuvens = useMemo(
    () => [
      { top: "8%", delay: "0s", duracao: "38s", escala: 1 },
      { top: "16%", delay: "-12s", duracao: "52s", escala: 0.7 },
      { top: "24%", delay: "-25s", duracao: "44s", escala: 1.2 },
    ],
    [],
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-slate-900">
      {/* 1) Cenário base */}
      <img
        src={worldDinossauros}
        alt="Mundo Jurássico"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        decoding="async"
      />

      {/* Véu escuro suave pra contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-transparent to-black/40 pointer-events-none" />

      {/* 2) Sol pulsando */}
      <div
        className="absolute top-[10%] right-[12%] text-[70px] pointer-events-none"
        style={{
          filter: "drop-shadow(0 0 30px rgba(255,200,80,0.8))",
          animation: "dinoSol 6s ease-in-out infinite",
        }}
      >
        ☀️
      </div>

      {/* 2b) Nuvens vagando */}
      {nuvens.map((n, i) => (
        <div
          key={i}
          className="absolute text-[64px] pointer-events-none opacity-90"
          style={{
            top: n.top,
            left: "-15%",
            transform: `scale(${n.escala})`,
            animation: `dinoNuvem ${n.duracao} linear ${n.delay} infinite`,
          }}
        >
          ☁️
        </div>
      ))}

      {/* 3) Vulcão com fumaça */}
      <div className="absolute bottom-[8%] left-[6%] pointer-events-none">
        <div className="text-[80px]">🌋</div>
        <div
          className="absolute -top-6 left-1/2 -translate-x-1/2 text-[32px] opacity-70"
          style={{ animation: "dinoFumaca 4s ease-out infinite" }}
        >
          💨
        </div>
      </div>

      {/* 4) Dinos andando */}
      <div
        className="absolute bottom-[14%] text-[64px] pointer-events-none"
        style={{
          left: "-10%",
          animation: "dinoCaminha 28s linear infinite",
        }}
      >
        <span style={{ animation: "dinoPulinho 1.2s ease-in-out infinite", display: "inline-block" }}>
          🦖
        </span>
      </div>
      <div
        className="absolute bottom-[10%] text-[52px] pointer-events-none"
        style={{
          right: "-10%",
          animation: "dinoCaminhaReverso 36s linear infinite",
          transform: "scaleX(-1)",
        }}
      >
        <span style={{ animation: "dinoPulinho 1.5s ease-in-out infinite", display: "inline-block" }}>
          🦕
        </span>
      </div>
      <div
        className="absolute bottom-[20%] left-[60%] text-[40px] pointer-events-none"
        style={{ animation: "dinoVoo 14s ease-in-out infinite" }}
      >
        🦅
      </div>

      {/* 5) Objetos interativos — a criança toca e eles se mexem */}
      {objetos.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => tocar(o.id)}
          aria-label={`Tocar ${o.id}`}
          className="absolute text-[44px] select-none cursor-pointer active:scale-125 hover:scale-110"
          style={{
            left: `${o.x}%`,
            top: `${o.y}%`,
            transform: "translate(-50%, -50%)",
            transition: "left 0.6s cubic-bezier(.34,1.56,.64,1), top 0.6s cubic-bezier(.34,1.56,.64,1), transform 0.2s",
            animation: o.pulando
              ? "dinoPulou 0.6s ease-out"
              : "dinoFlutua 3s ease-in-out infinite",
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))",
          }}
        >
          {o.emoji}
        </button>
      ))}

      {/* Keyframes locais */}
      <style>{`
        @keyframes dinoSol {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50%      { transform: scale(1.08) rotate(8deg); }
        }
        @keyframes dinoNuvem {
          0%   { transform: translateX(0) scale(var(--s, 1)); }
          100% { transform: translateX(130vw) scale(var(--s, 1)); }
        }
        @keyframes dinoFumaca {
          0%   { transform: translate(-50%, 0) scale(0.6); opacity: 0.8; }
          100% { transform: translate(-50%, -120px) scale(1.6); opacity: 0; }
        }
        @keyframes dinoCaminha {
          0%   { transform: translateX(0); }
          100% { transform: translateX(120vw); }
        }
        @keyframes dinoCaminhaReverso {
          0%   { transform: translateX(0) scaleX(-1); }
          100% { transform: translateX(-120vw) scaleX(-1); }
        }
        @keyframes dinoPulinho {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes dinoVoo {
          0%, 100% { transform: translate(0, 0); }
          25%      { transform: translate(-40px, -20px); }
          50%      { transform: translate(-80px, 10px); }
          75%      { transform: translate(-40px, -10px); }
        }
        @keyframes dinoFlutua {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50%      { transform: translate(-50%, -50%) translateY(-8px); }
        }
        @keyframes dinoPulou {
          0%   { transform: translate(-50%, -50%) scale(1); }
          40%  { transform: translate(-50%, -50%) scale(1.6) rotate(20deg); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  );
}
