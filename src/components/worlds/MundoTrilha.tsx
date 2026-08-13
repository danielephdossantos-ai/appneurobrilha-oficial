// ============================================================
// MundoTrilha — fundo de mundo + troca de mundo nas trilhas
// ============================================================
import React, { useState } from "react";
import { Globe2, Check, X } from "lucide-react";
import { useHiperfoco } from "@/context/HiperfocoContext";
import { MUNDOS, mundoDoHiperfoco, type MundoOption } from "@/components/worlds/mundos";

export function TrocarMundoButton({ className = "" }: { className?: string }) {
  const { hiperfoco, setHiperfocoById, setHiperfocoCustom } = useHiperfoco();
  const [aberto, setAberto] = useState(false);
  const atual = mundoDoHiperfoco(hiperfoco);

  const escolher = (m: MundoOption) => {
    if (m.hiperfocoId) setHiperfocoById(m.hiperfocoId);
    else if (m.customLabel) setHiperfocoCustom(m.customLabel);
    setAberto(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setAberto(true)}
        className={`inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur px-3 py-1.5 text-[11px] font-black text-white border border-white/25 shadow ${className}`}
      >
        <Globe2 size={14} />
        {atual ? `${atual.emoji} ${atual.label}` : "Escolher mundo"}
      </button>

      {aberto && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-3">
          <div className="w-full max-w-lg rounded-3xl bg-[#131a33] border border-white/15 p-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-black text-lg">🌍 Trocar de mundo</h3>
              <button
                type="button"
                onClick={() => setAberto(false)}
                className="rounded-full bg-white/10 p-2 text-white"
                aria-label="Fechar"
              >
                <X size={16} />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {MUNDOS.map((m) => {
                const ativo = atual?.id === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => escolher(m)}
                    className={`relative overflow-hidden rounded-2xl border-2 ${
                      ativo ? "border-amber-300" : "border-white/20"
                    }`}
                  >
                    <img
                      src={m.image}
                      alt={m.label}
                      className="w-full h-20 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-[10px] font-bold py-1 px-1 truncate">
                      {m.emoji} {m.label}
                    </div>
                    {ativo && (
                      <div className="absolute top-1 right-1 rounded-full bg-amber-300 text-[#1a0d3d] p-1">
                        <Check size={12} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Envolve uma trilha estilo Duolingo: usa o mundo escolhido pela criança como
 * fundo. Sem mundo escolhido, mantém o gradiente original (`fallbackClass`).
 */
export function MundoTrilha({
  children,
  fallbackClass = "bg-gradient-to-b from-emerald-600 via-teal-700 to-indigo-900",
  className = "",
}: {
  children: React.ReactNode;
  fallbackClass?: string;
  className?: string;
}) {
  const { hiperfoco } = useHiperfoco();
  const mundo = mundoDoHiperfoco(hiperfoco);

  return (
    <div
      className={`relative min-h-screen text-white ${mundo ? "bg-[#0a1024]" : fallbackClass} ${className}`}
    >
      {mundo && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <img
            src={mundo.image}
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/75" />
        </div>
      )}
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto px-4 pt-3 flex justify-end">
          <TrocarMundoButton />
        </div>
        {children}
      </div>
    </div>
  );
}
