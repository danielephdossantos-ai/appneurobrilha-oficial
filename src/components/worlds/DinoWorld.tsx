// ============================================================
// Mundo Dinossauro — versão calma (neurodivergente friendly)
// ============================================================
// Movimento APENAS em: sol, nuvens e 1 dinossauro caminhando.
// Tudo lento, sem teleporte, sem pulinho, sem fumaça, sem
// objetos voando. Cena previsível, sem sobrecarga sensorial.
// ============================================================

import worldDinossauros from "@/assets/neuro-treino/worlds/dinossauros.jpg";
import dinossauroImg from "@/assets/neuro-treino/objetos/dinossauro.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";

export function DinoWorld() {
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

      {/* Sol — apenas respiração lenta */}
      <img
        src={solImg}
        alt=""
        className="absolute top-[8%] right-[11%] h-20 w-20 pointer-events-none select-none opacity-90"
        style={{
          filter: "drop-shadow(0 0 22px rgba(255,200,80,0.45))",
          animation: "dinoSolCalmo 10s ease-in-out infinite",
        }}
        aria-hidden
      />

      {/* Nuvens — quase paradas, balanço suave */}
      <div className="absolute left-[9%] top-[11%] h-8 w-28 rounded-full bg-white/80 blur-[1px] pointer-events-none" style={{ animation: "dinoNuvemRespira 28s ease-in-out infinite" }} />
      <div className="absolute left-[62%] top-[17%] h-7 w-24 rounded-full bg-white/70 blur-[1px] pointer-events-none" style={{ animation: "dinoNuvemRespira 34s ease-in-out -8s infinite" }} />

      {/* Dinossauro — fica no chão, só respira/balança devagar */}
      <img
        src={dinossauroImg}
        alt=""
        className="absolute bottom-[13%] left-[14%] h-24 w-24 pointer-events-none select-none"
        style={{
          filter: "drop-shadow(0 10px 12px rgba(0,0,0,0.22))",
          animation: "dinoRespiraCalmo 12s ease-in-out infinite",
        }}
        aria-hidden
      />

      <style>{`
        @keyframes dinoSolCalmo {
          0%, 100% { transform: scale(1); opacity: 0.95; }
          50%      { transform: scale(1.04); opacity: 1; }
        }
        @keyframes dinoNuvemRespira {
          0%, 100% { transform: translateX(0); opacity: 0.68; }
          50%      { transform: translateX(18px); opacity: 0.82; }
        }
        @keyframes dinoRespiraCalmo {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-3px) rotate(-1deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          img, div { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
