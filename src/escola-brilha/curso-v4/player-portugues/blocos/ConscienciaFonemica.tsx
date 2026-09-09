import { useState } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import type { EnsinoVisualBloco } from "../../types";

/**
 * CONSCIÊNCIA FONÊMICA — Unidade 7 do 1º ano ("O Ouvido Mágico").
 * ---------------------------------------------------------------
 * Aqui o estímulo é SOM, não escrita. Todos os blocos falam em voz
 * alta (TTS nativo, ritmo lento) e mostram a letra só como apoio.
 *
 * Modos:
 *   somInicial        → ouvir a palavra e isolar o 1º fonema
 *   segmentarFonemas  → quebrar a palavra em sons, um por vez
 *   sintetizarFonemas → juntar sons soltos até virar palavra
 *   trocarFonema      → trocar um som e virar outra palavra
 */

const RATE_FONEMA = 0.6;
const RATE_PALAVRA = 0.72;

/** Converte "/s/" ou "s" no som prolongado que a criança precisa ouvir. */
export function somDoFonema(fonema: string): string {
  const f = fonema.replace(/[/\[\]]/g, "").trim().toLowerCase();
  const vogais: Record<string, string> = {
    a: "ááá", e: "ééé", i: "iii", o: "óóó", u: "uuu",
    á: "ááá", é: "ééé", í: "iii", ó: "óóó", ú: "uuu",
    ã: "ãã", õ: "õõ",
  };
  if (vogais[f]) return vogais[f];

  const continuas: Record<string, string> = {
    f: "fffff", j: "jjjj", l: "llll", m: "mmmm", n: "nnnn",
    r: "rrrr", s: "sssss", v: "vvvv", z: "zzzz", x: "xxxx",
    ch: "chchch", lh: "lhálhá", nh: "nhánhá",
  };
  if (continuas[f]) return continuas[f];

  const oclusivas: Record<string, string> = {
    b: "bê", c: "quê", d: "dê", g: "guê", k: "quê",
    p: "pê", q: "quê", t: "tê", h: "rrr",
  };
  return oclusivas[f] ?? f;
}

function falarFonema(fonema: string) {
  stopSpeaking();
  speakChunked(somDoFonema(fonema), { rate: RATE_FONEMA });
}

function falarPalavra(palavra: string) {
  stopSpeaking();
  speakChunked(palavra.toLowerCase(), { rate: RATE_PALAVRA });
}

function Dica({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-fuchsia-500/10 border border-fuchsia-300/30 p-3 text-sm text-fuchsia-100">
      {children}
    </div>
  );
}

function BotaoFonema({
  fonema,
  ativo,
  onClick,
}: {
  fonema: string;
  ativo?: boolean;
  onClick: () => void;
}) {
  const limpo = fonema.replace(/[/\[\]]/g, "");
  return (
    <button
      onClick={onClick}
      className={`min-w-[3.25rem] rounded-2xl border-2 px-3 py-2 text-center transition transform ${
        ativo
          ? "scale-110 border-fuchsia-300 bg-fuchsia-400/30 shadow-lg shadow-fuchsia-400/40"
          : "border-white/15 bg-white/5 hover:bg-white/10"
      }`}
    >
      <span className="block text-2xl font-black text-fuchsia-200 leading-none">/{limpo}/</span>
      <span className="block text-[10px] text-white/60 mt-1">som</span>
    </button>
  );
}

// ---------------------------------------------------------------------
// 1 · SOM INICIAL
// ---------------------------------------------------------------------
function SomInicial({
  bloco,
}: {
  bloco: Extract<EnsinoVisualBloco, { tipo: "somInicial" }>;
}) {
  const [ativo, setAtivo] = useState<number | null>(null);

  const ouvir = async (i: number, palavra: string, fonema: string) => {
    stopSpeaking();
    setAtivo(i);
    await speakChunked(palavra.toLowerCase(), { rate: RATE_PALAVRA });
    await speakChunked(`começa com ${somDoFonema(fonema)}`, { rate: RATE_FONEMA, queue: true });
    setTimeout(() => setAtivo(null), 400);
  };

  return (
    <div className="space-y-3">
      <Dica>
        👂 <b>Feche os olhos e escute.</b> Toque na figura: primeiro você ouve a{" "}
        <b>palavra inteira</b>, depois o <b>primeiro som</b> dela. O som não é o nome da letra — é
        o barulhinho que a boca faz no começo.
      </Dica>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {bloco.itens.map((item, i) => {
          const isAtivo = ativo === i;
          return (
            <button
              key={i}
              onClick={() => ouvir(i, item.palavra, item.fonema)}
              className={`rounded-2xl border-2 p-3 text-center transition transform ${
                isAtivo
                  ? "scale-105 border-fuchsia-300 bg-fuchsia-400/20"
                  : "border-white/15 bg-white/5 hover:bg-white/10"
              }`}
            >
              {item.imagemUrl && (
                <img
                  src={item.imagemUrl}
                  alt={item.palavra}
                  className="w-16 h-16 mx-auto object-contain"
                />
              )}
              <div className="text-base font-black text-white mt-1">{item.palavra}</div>
              <div className="text-xl font-black text-fuchsia-300">
                /{item.fonema.replace(/[/\[\]]/g, "")}/
              </div>
              <div className="text-[10px] text-white/60 mt-1">🔊 tocar</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// 2 · SEGMENTAR
// ---------------------------------------------------------------------
function SegmentarFonemas({
  bloco,
}: {
  bloco: Extract<EnsinoVisualBloco, { tipo: "segmentarFonemas" }>;
}) {
  const [ativo, setAtivo] = useState<string | null>(null);

  const segmentar = async (idx: number, item: { palavra: string; fonemas: string[] }) => {
    stopSpeaking();
    await speakChunked(item.palavra.toLowerCase(), { rate: RATE_PALAVRA });
    for (let k = 0; k < item.fonemas.length; k++) {
      setAtivo(`${idx}-${k}`);
      await speakChunked(somDoFonema(item.fonemas[k]), { rate: RATE_FONEMA, queue: true });
      await new Promise((r) => setTimeout(r, 150));
    }
    setAtivo(null);
  };

  return (
    <div className="space-y-3">
      <Dica>
        👏 <b>Quebrar a palavra em sons.</b> Toque em <b>“Quebrar”</b> e bata uma palma para cada
        pedacinho que acender. Depois toque em cada som sozinho para repetir.
      </Dica>

      <div className="space-y-3">
        {bloco.itens.map((item, i) => (
          <div key={i} className="rounded-2xl border-2 border-white/15 bg-white/5 p-3">
            <div className="flex items-center gap-3 flex-wrap">
              {item.imagemUrl && (
                <img
                  src={item.imagemUrl}
                  alt={item.palavra}
                  className="w-14 h-14 object-contain shrink-0"
                />
              )}
              <div className="text-xl font-black text-white">{item.palavra}</div>
              <button
                onClick={() => segmentar(i, item)}
                className="ml-auto rounded-xl bg-fuchsia-500/20 border border-fuchsia-300/40 px-3 py-1.5 text-sm font-bold text-fuchsia-100"
              >
                👏 Quebrar
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {item.fonemas.map((f, k) => (
                <BotaoFonema
                  key={k}
                  fonema={f}
                  ativo={ativo === `${i}-${k}`}
                  onClick={() => falarFonema(f)}
                />
              ))}
              <div className="self-center text-sm text-white/70 ml-1">
                = <b className="text-emerald-300">{item.fonemas.length} sons</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// 3 · SINTETIZAR
// ---------------------------------------------------------------------
function SintetizarFonemas({
  bloco,
}: {
  bloco: Extract<EnsinoVisualBloco, { tipo: "sintetizarFonemas" }>;
}) {
  const [revelado, setRevelado] = useState<Record<number, boolean>>({});
  const [ativo, setAtivo] = useState<string | null>(null);

  const juntar = async (idx: number, item: { fonemas: string[]; palavra: string }) => {
    stopSpeaking();
    for (let k = 0; k < item.fonemas.length; k++) {
      setAtivo(`${idx}-${k}`);
      await speakChunked(somDoFonema(item.fonemas[k]), { rate: RATE_FONEMA, queue: k > 0 });
      await new Promise((r) => setTimeout(r, 120));
    }
    setAtivo(null);
    setRevelado((r) => ({ ...r, [idx]: true }));
    await speakChunked(`juntando tudo: ${item.palavra.toLowerCase()}`, {
      rate: RATE_PALAVRA,
      queue: true,
    });
  };

  return (
    <div className="space-y-3">
      <Dica>
        🧲 <b>Juntar os sons.</b> Toque em <b>“Juntar”</b>: os sons vêm um de cada vez e, no fim,
        eles grudam e viram uma <b>palavra</b>. Tente adivinhar antes de aparecer!
      </Dica>

      <div className="space-y-3">
        {bloco.itens.map((item, i) => (
          <div key={i} className="rounded-2xl border-2 border-white/15 bg-white/5 p-3">
            <div className="flex flex-wrap items-center gap-2">
              {item.fonemas.map((f, k) => (
                <BotaoFonema
                  key={k}
                  fonema={f}
                  ativo={ativo === `${i}-${k}`}
                  onClick={() => falarFonema(f)}
                />
              ))}
              <span className="text-2xl font-black text-white/60">→</span>
              {revelado[i] ? (
                <button
                  onClick={() => falarPalavra(item.palavra)}
                  className="flex items-center gap-2 rounded-2xl border-2 border-emerald-300/50 bg-emerald-400/20 px-3 py-2"
                >
                  {item.imagemUrl && (
                    <img
                      src={item.imagemUrl}
                      alt={item.palavra}
                      className="w-10 h-10 object-contain"
                    />
                  )}
                  <span className="text-2xl font-black text-emerald-200">{item.palavra}</span>
                </button>
              ) : (
                <span className="text-2xl font-black text-white/30 tracking-widest">? ? ?</span>
              )}
              <button
                onClick={() => juntar(i, item)}
                className="ml-auto rounded-xl bg-fuchsia-500/20 border border-fuchsia-300/40 px-3 py-1.5 text-sm font-bold text-fuchsia-100"
              >
                🧲 Juntar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// 4 · TROCAR FONEMA
// ---------------------------------------------------------------------
function TrocarFonema({
  bloco,
}: {
  bloco: Extract<EnsinoVisualBloco, { tipo: "trocarFonema" }>;
}) {
  const [trocado, setTrocado] = useState<Record<number, boolean>>({});

  const trocar = async (
    idx: number,
    item: { palavra: string; de: string; para: string; resultado: string },
  ) => {
    stopSpeaking();
    setTrocado((t) => ({ ...t, [idx]: false }));
    await speakChunked(item.palavra.toLowerCase(), { rate: RATE_PALAVRA });
    await speakChunked(
      `tira o ${somDoFonema(item.de)}, põe o ${somDoFonema(item.para)}`,
      { rate: RATE_FONEMA, queue: true },
    );
    setTrocado((t) => ({ ...t, [idx]: true }));
    await speakChunked(`agora é ${item.resultado.toLowerCase()}`, {
      rate: RATE_PALAVRA,
      queue: true,
    });
  };

  return (
    <div className="space-y-3">
      <Dica>
        🔁 <b>Trocar um som muda a palavra inteira!</b> Toque em <b>“Trocar”</b> e escute: só um
        somzinho muda, mas a palavra vira outra coisa.
      </Dica>

      <div className="grid sm:grid-cols-2 gap-3">
        {bloco.itens.map((item, i) => {
          const virou = trocado[i];
          return (
            <div key={i} className="rounded-2xl border-2 border-white/15 bg-white/5 p-3">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <button
                  onClick={() => falarPalavra(item.palavra)}
                  className="text-center rounded-xl px-2 py-1 hover:bg-white/10"
                >
                  {item.imagemUrl && (
                    <img
                      src={item.imagemUrl}
                      alt={item.palavra}
                      className="w-12 h-12 object-contain mx-auto"
                    />
                  )}
                  <span className="text-xl font-black text-white">{item.palavra}</span>
                </button>

                <div className="text-center px-1">
                  <div className="text-[10px] text-white/60">troca</div>
                  <div className="text-sm font-black text-fuchsia-300">
                    /{item.de}/ → /{item.para}/
                  </div>
                  <div className="text-2xl">➡️</div>
                </div>

                {virou ? (
                  <button
                    onClick={() => falarPalavra(item.resultado)}
                    className="text-center rounded-xl px-2 py-1 bg-emerald-400/15 border border-emerald-300/40"
                  >
                    {item.imagemResultadoUrl && (
                      <img
                        src={item.imagemResultadoUrl}
                        alt={item.resultado}
                        className="w-12 h-12 object-contain mx-auto"
                      />
                    )}
                    <span className="text-xl font-black text-emerald-200">{item.resultado}</span>
                  </button>
                ) : (
                  <span className="text-xl font-black text-white/30 tracking-widest">? ? ?</span>
                )}
              </div>

              <button
                onClick={() => trocar(i, item)}
                className="w-full mt-3 rounded-xl bg-fuchsia-500/20 border border-fuchsia-300/40 px-3 py-1.5 text-sm font-bold text-fuchsia-100"
              >
                🔁 Trocar o som
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ConscienciaFonemica({ bloco }: { bloco: EnsinoVisualBloco }) {
  if (bloco.tipo === "somInicial") return <SomInicial bloco={bloco} />;
  if (bloco.tipo === "segmentarFonemas") return <SegmentarFonemas bloco={bloco} />;
  if (bloco.tipo === "sintetizarFonemas") return <SintetizarFonemas bloco={bloco} />;
  if (bloco.tipo === "trocarFonema") return <TrocarFonema bloco={bloco} />;
  return null;
}
