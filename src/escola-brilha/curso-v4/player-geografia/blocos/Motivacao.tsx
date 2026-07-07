import { Radar } from "lucide-react";

export function Motivacao({
  titulo,
  historia,
  personagem = "Aurora",
}: {
  titulo: string;
  historia: string;
  personagem?: string;
  imagemUrl?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 p-6 md:p-8">
      {/* HUD scanner decorativo */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(52,211,153,.4) 25%, rgba(52,211,153,.4) 26%, transparent 27%, transparent 74%, rgba(52,211,153,.4) 75%, rgba(52,211,153,.4) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(52,211,153,.4) 25%, rgba(52,211,153,.4) 26%, transparent 27%, transparent 74%, rgba(52,211,153,.4) 75%, rgba(52,211,153,.4) 76%, transparent 77%, transparent)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative flex items-start gap-4">
        <div className="shrink-0 w-14 h-14 rounded-full bg-emerald-400/20 border-2 border-emerald-300 grid place-items-center">
          <Radar className="w-7 h-7 text-emerald-300 animate-pulse" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-[0.25em] text-emerald-300 font-bold">
            🛰️ Transmissão de {personagem}
          </div>
          <h2 className="mt-1 text-2xl md:text-3xl font-black text-white leading-tight">
            {titulo}
          </h2>
          <p className="mt-3 text-white/90 text-base md:text-lg leading-relaxed whitespace-pre-line">
            {historia}
          </p>
        </div>
      </div>
    </div>
  );
}
