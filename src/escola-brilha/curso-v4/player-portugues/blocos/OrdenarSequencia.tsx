import { useMemo, useState } from "react";
import type { OrdenarSequenciaData } from "../../types";
import { BotaoOuvirEnunciado } from "./BotaoOuvirEnunciado";

/**
 * Bloco de ordenar sequência — a criança usa botões ↑ ↓ pra colocar
 * as cenas na ordem certa. Não depende de drag-and-drop pra funcionar
 * bem no celular também.
 */
export function OrdenarSequencia({ data }: { data: OrdenarSequenciaData }) {
  // Embaralha uma vez ao montar. Determinístico (SSR-safe) e sempre
  // diferente da ordemCerta — senão a criança abre a atividade já resolvida.
  const embaralhados = useMemo(
    () => embaralhar(data.itens, data.ordemCerta),
    [data.itens, data.ordemCerta],
  );
  const [ordem, setOrdem] = useState(embaralhados.map((i) => i.id));
  const [conferiu, setConferiu] = useState(false);

  const acertou =
    conferiu && ordem.length === data.ordemCerta.length &&
    ordem.every((id, i) => id === data.ordemCerta[i]);

  const mover = (idx: number, dir: -1 | 1) => {
    const novo = idx + dir;
    if (novo < 0 || novo >= ordem.length) return;
    const cp = [...ordem];
    [cp[idx], cp[novo]] = [cp[novo], cp[idx]];
    setOrdem(cp);
    setConferiu(false);
  };

  const porId = useMemo(() => {
    const m = new Map<string, (typeof data.itens)[number]>();
    for (const it of data.itens) m.set(it.id, it);
    return m;
  }, [data.itens]);

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="text-sm font-bold text-white">🧩 {data.instrucao}</div>
        <BotaoOuvirEnunciado texto={data.instrucao} rotulo="Repetir" auto />
      </div>

      <div className="rounded-xl bg-amber-400/15 border border-amber-300/40 p-2 text-center text-xs text-amber-100 font-semibold">
        👉 Toque nas setas <span className="text-base">⬆️ ⬇️</span> para mover cada pedaço para cima ou para baixo.
      </div>

      <ol className="space-y-2">
        {ordem.map((id, i) => {
          const item = porId.get(id);
          if (!item) return null;
          const numero = i + 1;
          const posicaoCerta =
            conferiu && data.ordemCerta[i] === id;
          const posicaoErrada = conferiu && data.ordemCerta[i] !== id;
          return (
            <li
              key={id}
              className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl transition ${
                posicaoCerta
                  ? "bg-emerald-500/25 border border-emerald-400"
                  : posicaoErrada
                    ? "bg-rose-500/20 border border-rose-400"
                    : "bg-white/10 border border-white/10"
              }`}
            >
              {/* MOBILE: imagem em cima, texto embaixo. DESKTOP: layout horizontal original */}
              <div className="flex sm:contents items-center gap-2 w-full">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-400 text-[#0d1f55] font-black text-base sm:text-lg grid place-items-center shrink-0">
                  {numero}
                </div>
                {item.imagemUrl && (
                  <div className="flex-1 sm:flex-none flex justify-center sm:block">
                    <img
                      src={item.imagemUrl}
                      alt=""
                      className="w-20 h-20 sm:w-12 sm:h-12 object-contain shrink-0"
                    />
                  </div>
                )}
                <div className="flex sm:hidden flex-col gap-1 shrink-0">
                  <button
                    onClick={() => mover(i, -1)}
                    disabled={i === 0}
                    className="w-10 h-10 rounded-lg bg-amber-400 hover:bg-amber-300 active:scale-95 disabled:opacity-25 disabled:bg-white/10 text-[#0d1f55] text-xl font-black leading-none shadow-md"
                    aria-label="Mover pra cima"
                  >
                    ⬆️
                  </button>
                  <button
                    onClick={() => mover(i, 1)}
                    disabled={i === ordem.length - 1}
                    className="w-10 h-10 rounded-lg bg-amber-400 hover:bg-amber-300 active:scale-95 disabled:opacity-25 disabled:bg-white/10 text-[#0d1f55] text-xl font-black leading-none shadow-md"
                    aria-label="Mover pra baixo"
                  >
                    ⬇️
                  </button>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left text-sm sm:text-lg text-white font-black tracking-wide sm:tracking-wider px-1 leading-snug break-words">
                {item.texto}
              </div>
              <div className="hidden sm:flex flex-col gap-1 shrink-0">
                <button
                  onClick={() => mover(i, -1)}
                  disabled={i === 0}
                  className="w-12 h-12 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-95 disabled:opacity-25 disabled:bg-white/10 text-[#0d1f55] text-2xl font-black leading-none shadow-md"
                  aria-label="Mover pra cima"
                >
                  ⬆️
                </button>
                <button
                  onClick={() => mover(i, 1)}
                  disabled={i === ordem.length - 1}
                  className="w-12 h-12 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-95 disabled:opacity-25 disabled:bg-white/10 text-[#0d1f55] text-2xl font-black leading-none shadow-md"
                  aria-label="Mover pra baixo"
                >
                  ⬇️
                </button>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="flex justify-center pt-1">
        <button
          onClick={() => setConferiu(true)}
          className="px-5 py-2 rounded-full bg-amber-400 text-[#0d1f55] font-bold text-sm hover:bg-amber-300"
        >
          ✓ Conferir ordem
        </button>
      </div>

      {conferiu && (
        <div
          className={`text-sm p-3 rounded-xl ${
            acertou ? "bg-emerald-500/20 text-emerald-100" : "bg-amber-500/20 text-amber-100"
          }`}
        >
          {acertou ? data.feedbackAcerto : data.feedbackErro}
        </div>
      )}
    </div>
  );
}

/**
 * Embaralhamento estável (determinístico → mesma ordem no SSR e no cliente)
 * que garante ser DIFERENTE da ordem correta. Estratégia:
 *   1) Fisher-Yates usando um PRNG semeado com hash(ordemCerta+ids).
 *   2) Se, por azar, a ordem cair igual à correta, roda uma rotação.
 */
function embaralhar<T extends { id: string }>(
  itens: T[],
  ordemCerta: string[],
): T[] {
  if (itens.length <= 1) return [...itens];

  const seed = hash(ordemCerta.join("|") + "::" + itens.map((i) => i.id).join(","));
  const rand = mulberry32(seed || 1);

  const cp = [...itens];
  for (let i = cp.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [cp[i], cp[j]] = [cp[j], cp[i]];
  }

  // Se caiu igual à ordem certa, rotaciona (mantém determinismo).
  const igual = cp.every((it, i) => it.id === ordemCerta[i]);
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

/** PRNG determinístico simples (Mulberry32). */
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
