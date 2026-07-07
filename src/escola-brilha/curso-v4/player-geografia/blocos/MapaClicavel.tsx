import { useState } from "react";
import type { MapaClicavelData } from "../../types";

/**
 * Mapa/planta clicável — imagem de fundo com pontos toqueis (%).
 * Cada ponto abre um cartão com nome, descrição e imagem opcional.
 * Quando `respostaCerta` está definido, valida o toque como acerto/erro.
 */
export function MapaClicavel({ data }: { data: MapaClicavelData }) {
  const [aberto, setAberto] = useState<string | null>(null);
  const [tentado, setTentado] = useState<string | null>(null);

  const pontoAberto = data.pontos.find((p) => p.id === aberto);
  const valida = Boolean(data.respostaCerta);
  const acertou = valida && tentado === data.respostaCerta;
  const errou = valida && tentado !== null && tentado !== data.respostaCerta;

  function tocar(id: string) {
    setAberto(id);
    if (valida) setTentado(id);
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      try { navigator.vibrate?.(20); } catch { /* ignore */ }
    }
  }

  return (
    <div className="rounded-3xl bg-white text-[#0d1f55] p-4 shadow-lg border-2 border-white/60">
      {data.titulo && (
        <div className="text-base sm:text-lg font-black text-center mb-2">
          🗺️ {data.titulo}
        </div>
      )}
      {data.desafio && (
        <div className="text-sm sm:text-base font-bold text-center mb-3 bg-amber-100 text-amber-900 rounded-2xl px-3 py-2 border-2 border-amber-300">
          🎯 {data.desafio}
        </div>
      )}

      {/* Imagem + hotspots */}
      <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border-4 border-indigo-200 bg-indigo-50">
        <img
          src={data.imagemUrl}
          alt={data.legendaImagem ?? data.titulo ?? "Mapa"}
          className="w-full h-auto block select-none"
          draggable={false}
        />
        {data.pontos.map((p) => {
          const ativo = aberto === p.id;
          const foiCerto = valida && tentado === p.id && p.id === data.respostaCerta;
          const foiErrado = valida && tentado === p.id && p.id !== data.respostaCerta;
          const cor = foiCerto
            ? "bg-emerald-500 ring-emerald-200"
            : foiErrado
              ? "bg-rose-500 ring-rose-200"
              : ativo
                ? "bg-amber-400 ring-amber-200"
                : "bg-sky-500 ring-sky-200";
          return (
            <button
              key={p.id}
              onClick={() => tocar(p.id)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 min-w-10 h-10 px-2 rounded-full text-white font-black text-lg shadow-lg ring-4 transition active:scale-95 ${cor} ${
                ativo ? "scale-125 z-10" : "hover:scale-110"
              }`}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              aria-label={p.nome}
            >
              {p.icone ?? "●"}
            </button>
          );
        })}
      </div>

      {/* Cartão do ponto */}
      {pontoAberto && (
        <div className={`mt-3 rounded-2xl p-3 border-2 ${
          acertou
            ? "bg-emerald-50 border-emerald-300"
            : errou
              ? "bg-rose-50 border-rose-300"
              : "bg-sky-50 border-sky-300"
        }`}>
          <div className="flex items-start gap-3">
            {pontoAberto.imagemUrl && (
              <img
                src={pontoAberto.imagemUrl}
                alt=""
                className="w-16 h-16 object-contain shrink-0"
              />
            )}
            <div className="flex-1">
              <div className="font-black text-base sm:text-lg">
                {pontoAberto.icone && <span className="mr-1">{pontoAberto.icone}</span>}
                {pontoAberto.nome}
              </div>
              <div className="text-sm text-[#0d1f55]/80 mt-1">
                {pontoAberto.descricao}
              </div>
              {valida && acertou && data.feedbackAcerto && (
                <div className="mt-2 text-sm font-bold text-emerald-800">
                  🎉 {data.feedbackAcerto}
                </div>
              )}
              {valida && errou && data.feedbackErro && (
                <div className="mt-2 text-sm font-bold text-rose-800">
                  🤔 {data.feedbackErro}
                </div>
              )}
            </div>
            <button
              onClick={() => setAberto(null)}
              className="text-[#0d1f55]/50 text-lg font-bold px-2"
              aria-label="Fechar"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {valida && errou && (
        <button
          onClick={() => { setTentado(null); setAberto(null); }}
          className="mt-3 w-full h-11 rounded-2xl bg-amber-400 text-[#0d1f55] font-black text-base active:scale-95"
        >
          🔄 Tentar de novo
        </button>
      )}

      {data.legendaImagem && !pontoAberto && (
        <div className="mt-2 text-xs text-[#0d1f55]/60 text-center italic">
          {data.legendaImagem}
        </div>
      )}
    </div>
  );
}
