// ============================================================
// Mundo Dinossauro — cena estática (sem movimentos)
// ============================================================
import { url as worldDinossauros } from "@/assets/neuro-treino/worlds/dinossauros.jpg.asset.json";
import { url as dinossauroImg } from "@/assets/neuro-treino/objetos/dinossauro.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";

export function DinoWorld() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-slate-900">
      <img
        src={worldDinossauros}
        alt="Mundo Jurássico"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35 pointer-events-none" />

      <img
        src={solImg}
        alt=""
        className="absolute top-[8%] right-[11%] h-20 w-20 pointer-events-none select-none opacity-90"
        style={{ filter: "drop-shadow(0 0 22px rgba(255,200,80,0.45))" }}
        aria-hidden
      />

      <div className="absolute left-[9%] top-[11%] h-8 w-28 rounded-full bg-white/80 blur-[1px] pointer-events-none" />
      <div className="absolute left-[62%] top-[17%] h-7 w-24 rounded-full bg-white/70 blur-[1px] pointer-events-none" />

      <img
        src={dinossauroImg}
        alt=""
        className="absolute bottom-[13%] left-[14%] h-24 w-24 pointer-events-none select-none"
        style={{ filter: "drop-shadow(0 10px 12px rgba(0,0,0,0.22))" }}
        aria-hidden
      />
    </div>
  );
}
