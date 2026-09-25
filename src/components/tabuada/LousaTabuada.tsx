import { useEffect, useRef, useState } from "react";
import { Pause, Play, RefreshCw, Shuffle } from "lucide-react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import { explicacao, metodosPara } from "@/lib/tabuada-lousa";

/** Lousa interativa: escreve linha por linha e o Pip lê cada linha com a matemática correta. */
export function LousaTabuada({ n, b: bFixo }: { n: number; b?: number }) {
  const [indice, setIndice] = useState(0);
  const [metodoIdx, setMetodoIdx] = useState(0);
  const [visiveis, setVisiveis] = useState(0);
  const [tocando, setTocando] = useState(true);
  const run = useRef(0);

  const base = bFixo ? { a: n, b: bFixo, metodos: metodosPara(n, bFixo) } : null;
  const atual = base ? { a: n, b: bFixo!, metodo: base.metodos[metodoIdx % base.metodos.length] } : explicacao(n, indice);
  const passos = atual.metodo.passos;

  useEffect(() => { setVisiveis(0); }, [indice, metodoIdx, n, bFixo]);
  useEffect(() => {
    if (!tocando || visiveis >= passos.length) return;
    const id = ++run.current;
    const passo = passos[visiveis];
    const t = setTimeout(() => {
      void speakChunked(passo.fala, { rate: 0.88 }).then(() => { if (run.current === id) setVisiveis((v) => v + 1); });
    }, 350);
    return () => clearTimeout(t);
  }, [visiveis, tocando, passos]);
  useEffect(() => () => { run.current++; stopSpeaking(); }, []);

  const outroJeito = () => { run.current++; stopSpeaking(); base ? setMetodoIdx((m) => m + 1) : setIndice((i) => i + 1); setTocando(true); };
  const novaConta = () => { run.current++; stopSpeaking(); setIndice((i) => i + 3); setMetodoIdx(0); setTocando(true); };
  const repetir = () => { run.current++; stopSpeaking(); setVisiveis(0); setTocando(true); };

  return <div className="rounded-3xl border-8 border-amber-800 bg-emerald-950 p-5 text-emerald-50 shadow-inner">
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
      <span className="rounded-full bg-emerald-800 px-3 py-1 text-sm font-black uppercase tracking-wider">Lousa · {atual.metodo.nome}</span>
      <span className="font-black text-amber-300">{atual.a} × {atual.b}</span>
    </div>
    <div className="min-h-56 space-y-3 font-mono">
      {passos.slice(0, Math.max(visiveis + (tocando ? 1 : 0), visiveis)).map((ps, i) => (
        <p key={i} className={`text-2xl font-bold md:text-3xl ${i === visiveis ? "text-amber-300" : i === passos.length - 1 ? "text-emerald-300" : ""}`} style={{ animation: "fade-in .4s ease-out" }}>{ps.linha}</p>
      ))}
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      <button onClick={() => { if (tocando) { run.current++; stopSpeaking(); } setTocando(!tocando); }} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-emerald-800 px-4 font-black">{tocando ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}{tocando ? "Pausar" : "Continuar"}</button>
      <button onClick={repetir} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-emerald-800 px-4 font-black"><RefreshCw className="h-5 w-5" />Repetir</button>
      <button onClick={outroJeito} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-amber-400 px-4 font-black text-emerald-950"><Shuffle className="h-5 w-5" />Explicar de outro jeito</button>
      {!bFixo && <button onClick={novaConta} className="min-h-11 rounded-xl bg-emerald-800 px-4 font-black">Outra conta</button>}
    </div>
  </div>;
}
