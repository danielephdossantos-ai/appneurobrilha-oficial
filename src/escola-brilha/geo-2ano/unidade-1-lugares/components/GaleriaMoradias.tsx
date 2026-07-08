import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, MapPin, Search } from "lucide-react";
import { MORADIAS, type MoradiaId } from "../dados";
import { useAurora } from "../hooks/useAurora";

const INTRO_AURORA =
  "Olá, explorador! Eu sou a Aurora. Hoje você não vai apenas olhar uma casa. Use o Geo Scanner pra descobrir POR QUE cada casa foi construída desse jeito! Toque em uma das cinco casas pra começar sua missão.";

export function GaleriaMoradias({
  concluidas,
  onSelecionar,
}: {
  concluidas: Set<MoradiaId>;
  onSelecionar: (id: MoradiaId) => void;
}) {
  const { falar, parar } = useAurora();
  const [narrando, setNarrando] = useState(false);
  const jaFalouRef = useRef(false);

  // Aurora fala UMA vez ao entrar na cena (aprovado no curso de português).
  useEffect(() => {
    if (jaFalouRef.current) return;
    jaFalouRef.current = true;
    setNarrando(true);
    falar(INTRO_AURORA);
    const t = window.setTimeout(() => setNarrando(false), 12000);
    return () => window.clearTimeout(t);
  }, [falar]);

  const toggleNarracao = () => {
    if (narrando) {
      parar();
      setNarrando(false);
    } else {
      setNarrando(true);
      falar(INTRO_AURORA);
      window.setTimeout(() => setNarrando(false), 12000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-300 to-emerald-200 pb-16">
      {/* Header */}
      <div className="pt-6 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <MapPin className="h-8 w-8 text-white drop-shadow" />
          <h1 className="text-3xl sm:text-4xl font-black text-white drop-shadow-lg">
            Os Lugares Onde Vivemos
          </h1>
        </div>
        <p className="text-white/95 text-lg drop-shadow font-semibold">
          Missão do Investigador · Geografia · 2º Ano
        </p>

        {/* Botão da Aurora */}
        <button
          onClick={toggleNarracao}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-3 shadow-xl border-2 border-white hover:scale-105 transition-transform"
        >
          {narrando ? (
            <VolumeX className="h-5 w-5 text-primary" />
          ) : (
            <Volume2 className="h-5 w-5 text-primary" />
          )}
          <span className="font-bold text-slate-800">
            {narrando ? "Parar Aurora" : "🔊 Ouvir Aurora"}
          </span>
        </button>
      </div>

      {/* Instrução */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-8">
        <div className="rounded-2xl bg-white/90 backdrop-blur border-2 border-white p-5 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/15 p-3">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-black text-slate-800 text-lg">
                Escolha uma casa pra INVESTIGAR 🕵️
              </p>
              <p className="text-slate-600 text-sm mt-1">
                Cada casa foi feita de um jeito diferente… por um motivo! Toque numa foto pra abrir o
                Geo Scanner.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de moradias */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MORADIAS.map((m, i) => {
          const foiFeita = concluidas.has(m.id);
          return (
            <motion.button
              key={m.id}
              onClick={() => onSelecionar(m.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.05, y: -8, rotate: -1 }}
              whileTap={{ scale: 0.97 }}
              className="group relative rounded-3xl bg-white p-4 shadow-xl border-4 text-left overflow-hidden"
              style={{ borderColor: m.cor }}
            >
              {/* Badge concluído */}
              {foiFeita && (
                <div className="absolute top-3 right-3 z-10 rounded-full bg-emerald-500 text-white text-xs font-black px-3 py-1 shadow-lg">
                  ✓ INVESTIGADA
                </div>
              )}

              {/* Imagem */}
              <div
                className="rounded-2xl aspect-square overflow-hidden flex items-center justify-center relative"
                style={{
                  background: `linear-gradient(135deg, ${m.cor}22, ${m.cor}55)`,
                }}
              >
                <img
                  src={m.imagemUrl}
                  alt={m.nome}
                  loading="lazy"
                  className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                />
                {/* Reflexo scanner */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-x-0 top-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-pulse" />
                </div>
              </div>

              {/* Rótulo */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-black text-slate-800 leading-tight">
                    {m.emoji} {m.nome}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mt-1">
                    {m.lugar}
                  </p>
                </div>
                <div
                  className="rounded-full px-3 py-2 text-white text-xs font-black shadow"
                  style={{ backgroundColor: m.cor }}
                >
                  INVESTIGAR
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Rodapé de progresso */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-8">
        <div className="rounded-2xl bg-white/80 backdrop-blur border-2 border-white p-4 text-center">
          <p className="font-bold text-slate-700">
            📸 Álbum do Investigador:{" "}
            <span className="text-primary font-black">{concluidas.size} / 5</span> casas
          </p>
        </div>
      </div>
    </div>
  );
}
