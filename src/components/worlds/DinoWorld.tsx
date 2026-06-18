// ============================================================
// Mundo Dinossauro — versão calma (neurodivergente friendly)
// ============================================================
// Movimento APENAS em: sol, nuvens e 1 dinossauro caminhando.
// Tudo lento, sem teleporte, sem pulinho, sem fumaça, sem
// objetos voando. Cena previsível, sem sobrecarga sensorial.
// ============================================================

import { useMemo } from "react";
import worldDinossauros from "@/assets/neuro-treino/worlds/dinossauros.jpg";

export function DinoWorld() {
  // Posições das nuvens estáveis (não re-randomiza a cada render)
  const nuvens = useMemo(
    () => [
      { top: "10%", delay: "0s", duracao: "120s", escala: 1 },
      { top: "18%", delay: "-60s", duracao: "150s", escala: 0.8 },
    ],
    [],
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-slate-900">
      {/* Cenário base */}
      <img
        src={worldDinossauros}
        alt="Mundo Jurássico"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        decoding="async"
      />

      {/* Véu suave para contraste com os ícones da jornada */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35 pointer-events-none" />

      {/* Sol — respiração muito lenta, sem rotação */}
      <div
        className="absolute top-[10%] right-[12%] text-[64px] pointer-events-none select-none"
        style={{
          filter: "drop-shadow(0 0 24px rgba(255,200,80,0.55))",
          animation: "dinoSolCalmo 10s ease-in-out infinite",
        }}
        aria-hidden
      >
        ☀️
      </div>

      {/* Nuvens — atravessam o céu muito devagar */}
      {nuvens.map((n, i) => (
        <div
          key={i}
          className="absolute text-[56px] pointer-events-none select-none opacity-85"
          style={{
            top: n.top,
            left: "-15%",
            transform: `scale(${n.escala})`,
            animation: `dinoNuvemCalma ${n.duracao} linear ${n.delay} infinite`,
          }}
          aria-hidden
        >
          ☁️
        </div>
      ))}

      {/* Dinossauro — caminhada lenta e contínua */}
      <div
        className="absolute bottom-[14%] text-[56px] pointer-events-none select-none"
        style={{
          left: "-10%",
          animation: "dinoCaminhaCalmo 80s linear infinite",
        }}
        aria-hidden
      >
        🦖
      </div>

      <style>{`
        @keyframes dinoSolCalmo {
          0%, 100% { transform: scale(1); opacity: 0.95; }
          50%      { transform: scale(1.04); opacity: 1; }
        }
        @keyframes dinoNuvemCalma {
          0%   { transform: translateX(0) scale(var(--s, 1)); }
          100% { transform: translateX(130vw) scale(var(--s, 1)); }
        }
        @keyframes dinoCaminhaCalmo {
          0%   { transform: translateX(0); }
          100% { transform: translateX(120vw); }
        }
      `}</style>
    </div>
  );
}
