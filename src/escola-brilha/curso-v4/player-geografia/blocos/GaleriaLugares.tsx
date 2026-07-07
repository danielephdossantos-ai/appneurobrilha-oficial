import { useState } from "react";
import type { GaleriaLugaresData } from "../../types";
import { FotoLugar } from "./FotoLugar";
import { Search } from "lucide-react";

/**
 * 5 fotos em grade. Cada foto é um "portão" pro Modo Investigador
 * (o Modo Investigador em si é outro bloco logo abaixo).
 */
export function GaleriaLugares({ data }: { data: GaleriaLugaresData }) {
  const [visitados, setVisitados] = useState<Set<string>>(new Set());

  return (
    <div>
      <p className="text-sm text-emerald-200/80 italic mb-3">{data.instrucao}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {data.lugares.map((lugar) => {
          const ja = visitados.has(lugar.id);
          return (
            <a
              key={lugar.id}
              href={`#inv-${lugar.id}`}
              onClick={() =>
                setVisitados((s) => new Set(s).add(lugar.id))
              }
              className="group relative aspect-square rounded-2xl overflow-hidden border-2 border-emerald-400/30 hover:border-emerald-300 transition"
            >
              <FotoLugar
                imagemUrl={lugar.imagemUrl}
                corPlaceholder={lugar.corPlaceholder}
                emoji={lugar.emoji}
                nome={lugar.nome}
              />
              {/* Overlay scanner */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-300/60 rounded-2xl transition pointer-events-none" />

              {/* Etiqueta */}
              <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between gap-2">
                <div className="text-white">
                  <div className="text-lg leading-none">{lugar.emoji}</div>
                  <div className="text-xs md:text-sm font-black leading-tight drop-shadow">
                    {lugar.nome}
                  </div>
                </div>
                <div
                  className={`shrink-0 w-8 h-8 rounded-full grid place-items-center border-2 backdrop-blur ${
                    ja
                      ? "bg-emerald-400 text-slate-950 border-emerald-200"
                      : "bg-black/40 text-emerald-300 border-emerald-300/60 animate-pulse"
                  }`}
                  title={ja ? "Já visitado" : "Investigar"}
                >
                  {ja ? "✓" : <Search className="w-4 h-4" />}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
