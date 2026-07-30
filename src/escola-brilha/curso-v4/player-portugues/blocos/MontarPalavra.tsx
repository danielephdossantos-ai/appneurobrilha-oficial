import { useMemo, useState } from "react";
import type { MontarPalavraData } from "../../types";
import { BotaoOuvirEnunciado } from "./BotaoOuvirEnunciado";

/**
 * Bloco "Montar Palavra" — a criança recebe SÍLABAS embaralhadas e
 * preenche os slots pra formar a palavra correta. Passa palavra por
 * palavra até completar a atividade.
 *
 * Interação sem drag-and-drop (mobile-friendly):
 *  - tocar numa sílaba → preenche o próximo slot vazio
 *  - tocar num slot preenchido → devolve a sílaba pra bandeja
 */
export function MontarPalavra({ data }: { data: MontarPalavraData }) {
  const [idx, setIdx] = useState(0);
  const total = data.palavras.length;
  const atual = data.palavras[idx];

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="text-sm font-bold text-white">🔤 {data.instrucao}</div>
        <div className="flex items-center gap-2">
          <BotaoOuvirEnunciado
            texto={[data.instrucao, atual?.frase]}
            rotulo="Repetir"
            auto
          />

          <div className="text-[11px] text-white/60">
            {idx + 1}/{total}
          </div>
        </div>
      </div>

      <MontarUma
        key={atual.id}
        palavraCerta={atual.palavraCerta}
        silabas={atual.silabas}
        imagemUrl={atual.imagemUrl}
        frase={atual.frase}
        feedbackAcerto={data.feedbackAcerto}
        feedbackErro={data.feedbackErro}
        dica={data.dica}
        temProxima={idx < total - 1}
        onProxima={() => setIdx((i) => Math.min(i + 1, total - 1))}
      />
    </div>
  );
}

function MontarUma({
  palavraCerta,
  silabas,
  imagemUrl,
  frase,
  feedbackAcerto,
  feedbackErro,
  dica,
  temProxima,
  onProxima,
}: {
  palavraCerta: string;
  silabas: string[];
  imagemUrl?: string;
  frase?: string;
  feedbackAcerto: string;
  feedbackErro: string;
  dica?: string;
  temProxima: boolean;
  onProxima: () => void;
}) {
  // Cada tile tem uma id única (indice) pra permitir sílabas repetidas.
  const tiles = useMemo(() => {
    const base = silabas.map((s, i) => ({ id: `t${i}`, silaba: s }));
    return embaralhar(base, palavraCerta);
  }, [silabas, palavraCerta]);

  const [slots, setSlots] = useState<Array<string | null>>(() =>
    Array(silabas.length).fill(null),
  );
  const [conferiu, setConferiu] = useState(false);

  const tilesUsadas = new Set(slots.filter((s): s is string => !!s));
  const disponiveis = tiles.filter((t) => !tilesUsadas.has(t.id));
  const preenchida = slots.every((s) => s !== null);

  const preenche = (tileId: string) => {
    setConferiu(false);
    setSlots((prev) => {
      const cp = [...prev];
      const vazio = cp.findIndex((v) => v === null);
      if (vazio === -1) return cp;
      cp[vazio] = tileId;
      return cp;
    });
  };

  const removeSlot = (i: number) => {
    setConferiu(false);
    setSlots((prev) => {
      const cp = [...prev];
      cp[i] = null;
      return cp;
    });
  };

  const limpa = () => {
    setConferiu(false);
    setSlots(Array(silabas.length).fill(null));
  };

  const montada = slots
    .map((tid) => tiles.find((t) => t.id === tid)?.silaba ?? "")
    .join("");
  const acertou = conferiu && montada === palavraCerta;

  return (
    <div className="space-y-3">
      {/* Slots (destino) */}
      <div className="flex flex-wrap justify-center gap-2 pt-1">
        {slots.map((tid, i) => {
          const t = tid ? tiles.find((x) => x.id === tid) : null;
          const cor = !conferiu
            ? "bg-white/10 border-white/20 text-white"
            : acertou
              ? "bg-emerald-500/60 border-emerald-300 text-white"
              : "bg-rose-500/40 border-rose-300 text-white";
          return (
            <button
              key={i}
              onClick={() => t && removeSlot(i)}
              className={`min-w-[64px] h-14 px-3 rounded-xl border-2 border-dashed grid place-items-center text-xl font-black tracking-wider transition ${cor}`}
              aria-label={t ? `Remover sílaba ${t.silaba}` : "Slot vazio"}
            >
              {t?.silaba ?? "◻"}
            </button>
          );
        })}
      </div>

      {/* Bandeja de sílabas disponíveis */}
      <div className="min-h-[56px] rounded-xl bg-white/5 border border-white/10 p-2">
        <div className="text-[10px] uppercase tracking-widest text-white/50 text-center mb-1">
          Toque numa sílaba pra encaixar
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {disponiveis.length === 0 ? (
            <div className="text-xs text-white/40 italic py-2">
              (todas as sílabas estão nos slots)
            </div>
          ) : (
            disponiveis.map((t) => (
              <button
                key={t.id}
                onClick={() => preenche(t.id)}
                className="min-w-[64px] h-12 px-3 rounded-xl bg-amber-400 text-[#1a0d3d] font-black text-lg tracking-wider hover:bg-amber-300 shadow"
              >
                {t.silaba}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Ações */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={limpa}
          className="px-3 py-1.5 rounded-full bg-white/10 text-white text-xs hover:bg-white/20"
        >
          ↺ Limpar
        </button>
        <button
          onClick={() => setConferiu(true)}
          disabled={!preenchida}
          className="px-5 py-2 rounded-full bg-amber-400 text-[#1a0d3d] font-bold text-sm hover:bg-amber-300 disabled:opacity-40"
        >
          ✓ Conferir palavra
        </button>
      </div>

      {/* Feedback */}
      {conferiu && (
        <div
          className={`text-sm p-3 rounded-xl space-y-2 ${
            acertou
              ? "bg-emerald-500/20 text-emerald-100"
              : "bg-amber-500/20 text-amber-100"
          }`}
        >
          {acertou ? (
            <>
              <div className="text-center">
                <div className="text-3xl font-black text-white tracking-widest">
                  {palavraCerta}
                </div>
              </div>
              {imagemUrl && (
                <img
                  src={imagemUrl}
                  alt={palavraCerta}
                  className="w-24 h-24 mx-auto object-contain drop-shadow"
                />
              )}
              {frase && (
                <div className="text-center italic text-white/90">"{frase}"</div>
              )}
              <div className="text-center font-bold">{feedbackAcerto}</div>
              {temProxima && (
                <div className="flex justify-center pt-1">
                  <button
                    onClick={onProxima}
                    className="px-4 py-2 rounded-full bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-400"
                  >
                    Próxima palavra →
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="text-center">
                Você formou:{" "}
                <span className="font-black text-white text-lg tracking-wider">
                  {montada || "—"}
                </span>
              </div>
              <div className="text-center">{feedbackErro}</div>
              {dica && (
                <div className="text-center text-xs opacity-90">💡 {dica}</div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

/** Embaralhamento estável, diferente da ordem original quando possível. */
function embaralhar<T extends { id: string }>(itens: T[], seedSrc: string): T[] {
  if (itens.length <= 1) return [...itens];
  const seed = hash(seedSrc + "::" + itens.map((i) => i.id).join(","));
  const rand = mulberry32(seed || 1);
  const cp = [...itens];
  for (let i = cp.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [cp[i], cp[j]] = [cp[j], cp[i]];
  }
  // se caiu igual à ordem original, rotaciona
  const igual = cp.every((it, i) => it.id === itens[i].id);
  if (igual) {
    const primeiro = cp.shift()!;
    cp.push(primeiro);
  }
  return cp;
}

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return h;
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
