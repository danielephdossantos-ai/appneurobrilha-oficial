import { useMemo, useState } from "react";
import { CheckCircle2, Lightbulb, Volume2 } from "lucide-react";
import { speakChunked } from "@/lib/native-tts";
import { paraFala } from "@/lib/tabuada-lousa";
import { LousaTabuada } from "./LousaTabuada";
import { criarRodada, explicarErro, opcoesPara, type Questao } from "@/lib/tabuada-brilha";

export const falar = (t: string) => { void speakChunked(paraFala(t), { rate: 0.9 }); };

export function BotaoOuvir({ texto }: { texto: string }) {
  return <button onClick={() => falar(texto)} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-100 px-4 font-black text-blue-800"><Volume2 className="h-5 w-5" />Ouvir</button>;
}

/** Explicação obrigatória antes de cada jogo. */
export function ExplicaAntes({ titulo, texto, onJogar }: { titulo: string; texto: string; onJogar: () => void }) {
  return <div className="rounded-3xl border-4 border-amber-200 bg-amber-50 p-6 text-center">
    <Lightbulb className="mx-auto h-10 w-10 text-amber-600" />
    <h3 className="mt-2 text-2xl font-black">{titulo}</h3>
    <p className="mx-auto mt-3 max-w-xl text-xl leading-relaxed">{texto}</p>
    <div className="mt-5 flex justify-center gap-3"><BotaoOuvir texto={`${titulo}. ${texto}`} /><button onClick={onJogar} className="min-h-11 rounded-xl bg-emerald-600 px-6 text-lg font-black text-white">Entendi, vamos jogar!</button></div>
  </div>;
}

export function Grupos({ a, b, revelados = a }: { a: number; b: number; revelados?: number }) {
  return <div className="flex flex-wrap justify-center gap-3" aria-label={`${a} grupos de ${b}`}>
    {Array.from({ length: a }, (_, g) => <div key={g} className={`flex min-h-14 min-w-14 max-w-[9rem] flex-wrap items-center justify-center gap-1.5 rounded-2xl border-4 p-2 ${g < revelados ? "border-blue-300 bg-blue-50" : "border-dashed border-slate-200 bg-white"}`}>
      {g < revelados && Array.from({ length: b }, (_, i) => <i key={i} className="h-4 w-4 rounded-full bg-orange-500" />)}
    </div>)}
  </div>;
}

/** Feedback que ensina: nunca "errado", sempre mostra o raciocínio com os grupos. */
function Ajuda({ a, b, onOk }: { a: number; b: number; onOk: () => void }) {
  const t = `Vamos ver juntos. ${explicarErro(a, b)}`;
  const [lousa, setLousa] = useState(false);
  if (lousa) return <div className="mt-5"><LousaTabuada n={a} b={b} /><div className="mt-3 text-center"><button onClick={onOk} className="min-h-11 rounded-xl bg-orange-600 px-5 font-black text-white">Entendi, tentar de novo</button></div></div>;
  return <div className="mt-5 rounded-2xl bg-orange-50 p-4 text-center">
    <p className="text-lg font-black text-orange-900">Quase! Vamos ver juntos.</p>
    <div className="my-3"><Grupos a={a} b={b} /></div>
    <p className="text-lg">{explicarErro(a, b)}</p>
    <div className="mt-3 flex justify-center gap-2"><BotaoOuvir texto={t} /><button onClick={() => setLousa(true)} className="min-h-11 rounded-xl bg-emerald-800 px-5 font-black text-white">Explicar na lousa</button><button onClick={onOk} className="min-h-11 rounded-xl bg-orange-600 px-5 font-black text-white">Tentar de novo</button></div>
  </div>;
}

function Fim({ onFim }: { onFim: () => void }) {
  return <div className="py-6 text-center"><CheckCircle2 className="mx-auto h-16 w-16 text-emerald-600" /><p className="mt-2 text-3xl font-black">Muito bem! ⭐</p><p className="text-lg">Você terminou a rodada. Respire fundo e descanse um pouquinho.</p><button onClick={onFim} className="mt-4 min-h-11 rounded-xl bg-emerald-600 px-6 font-black text-white">Voltar aos jogos</button></div>;
}

function Opcoes({ opcoes, onEscolher }: { opcoes: number[]; onEscolher: (v: number) => void }) {
  return <div className="mt-5 grid grid-cols-3 gap-3">{opcoes.map((v) => <button key={v} onClick={() => onEscolher(v)} className="min-h-20 rounded-3xl border-4 border-blue-200 bg-white text-4xl font-black text-blue-900 hover:bg-blue-50">{v}</button>)}</div>;
}

type Props = { n: number; seed: number; revisar: string[]; onErro: (k: string) => void; onAcerto: (k: string) => void; onFim: () => void };

/** Rodada genérica de 5 contas com 3 opções (usada por Balões e pelo Desafio). */
function RodadaOpcoes({ n, seed, revisar, onErro, onAcerto, onFim, render }: Props & { render: (q: Questao) => React.ReactNode }) {
  const rodada = useMemo(() => criarRodada(n, seed, revisar), [n, seed]); // eslint-disable-line react-hooks/exhaustive-deps
  const [i, setI] = useState(0);
  const [ajuda, setAjuda] = useState(false);
  if (i >= rodada.length) return <Fim onFim={onFim} />;
  const q = rodada[i];
  const escolher = (v: number) => {
    const k = `${q.a}x${q.b}`;
    if (v === q.resposta) { onAcerto(k); falar(`Isso! ${q.a} vezes ${q.b} é ${q.resposta}.`); setI(i + 1); }
    else { onErro(k); setAjuda(true); }
  };
  return <div>
    <p className="text-center font-bold text-slate-500">Conta {i + 1} de {rodada.length}</p>
    {render(q)}
    {ajuda ? <Ajuda a={q.a} b={q.b} onOk={() => setAjuda(false)} /> : <Opcoes opcoes={q.opcoes} onEscolher={escolher} />}
  </div>;
}

export function Baloes(p: Props & { comTempo?: boolean }) {
  const [inicio] = useState(() => Date.now());
  return <RodadaOpcoes {...p} render={(q) => <div className="text-center">
    {p.comTempo && <p className="font-bold text-slate-500">Tempo: {Math.round((Date.now() - inicio) / 1000)}s</p>}
    <div className="my-4"><Grupos a={q.a} b={q.b} /></div>
    <h3 className="text-6xl font-black">{q.a} × {q.b}</h3>
    <p className="mt-2 text-lg">Toque no balão com a resposta.</p>
  </div>} />;
}

export function PulaPula({ n, onFim }: Props) {
  const [pulos, setPulos] = useState(0);
  const max = n * 10;
  if (pulos >= 10) return <Fim onFim={onFim} />;
  const pular = () => { const p = pulos + 1; setPulos(p); falar(`${p} pulo${p > 1 ? "s" : ""} de ${n}: ${n * p}`); };
  return <div className="text-center">
    <p className="text-xl">Cada pulo anda <b>{n}</b> casas. Toque em <b>Pular</b> e conte junto!</p>
    <div className="my-6 flex flex-wrap justify-center gap-1">
      {Array.from({ length: Math.min(max, 100) + 1 }, (_, v) => v).filter((v) => n >= 3 ? v % n === 0 || v === 0 : true).map((v) => <span key={v} className={`grid h-11 min-w-11 place-items-center rounded-xl px-1 text-lg font-black ${v === n * pulos ? "bg-orange-500 text-white scale-110" : v < n * pulos && v % n === 0 ? "bg-emerald-200" : "bg-slate-100"}`}>{v}</span>)}
    </div>
    <p className="text-3xl font-black">{pulos} × {n} = {n * pulos}</p>
    <button onClick={pular} className="mt-4 min-h-14 rounded-2xl bg-orange-500 px-10 text-2xl font-black text-white">Pular +{n}</button>
  </div>;
}

export function Sequencia({ n, seed, onErro, onAcerto, onFim }: Props) {
  const [i, setI] = useState(0);
  const [ajuda, setAjuda] = useState(false);
  if (i >= 5) return <Fim onFim={onFim} />;
  const inicio = ((seed + i * 3) % 6) + 1;
  const buraco = 2;
  const seq = [0, 1, 2, 3].map((k) => n * (inicio + k));
  const b = inicio + buraco;
  const escolher = (v: number) => { if (v === n * b) { onAcerto(`${n}x${b}`); falar(`Isso! Pulando de ${n} em ${n}, vem ${v}.`); setI(i + 1); } else { onErro(`${n}x${b}`); setAjuda(true); } };
  return <div className="text-center">
    <p className="text-xl">Estamos contando de <b>{n}</b> em <b>{n}</b>. Qual número falta?</p>
    <div className="my-6 flex justify-center gap-2">{seq.map((v, k) => <span key={k} className={`grid h-20 w-20 place-items-center rounded-2xl text-3xl font-black ${k === buraco ? "border-4 border-dashed border-orange-400 bg-orange-50" : "bg-blue-100"}`}>{k === buraco ? "?" : v}</span>)}</div>
    {ajuda ? <Ajuda a={b} b={n} onOk={() => setAjuda(false)} /> : <Opcoes opcoes={opcoesPara(n, b, seed + i)} onEscolher={escolher} />}
  </div>;
}

export function Memoria({ n, seed, onFim }: Props) {
  const bs = useMemo(() => [2, 3, 4, 5].map((k) => ((k + seed) % 10) + 1).filter((v, i, a) => a.indexOf(v) === i).slice(0, 4), [seed]);
  const cartas = useMemo(() => {
    const c = bs.flatMap((b) => [{ id: `c${b}`, par: b, txt: `${n} × ${b}` }, { id: `r${b}`, par: b, txt: String(n * b) }]);
    return c.sort((x, y) => ((x.id.charCodeAt(1) * 7 + seed) % 5) - ((y.id.charCodeAt(1) * 7 + seed) % 5) || x.id.localeCompare(y.id));
  }, [bs, n, seed]);
  const [abertas, setAbertas] = useState<string[]>([]);
  const [feitas, setFeitas] = useState<number[]>([]);
  if (feitas.length === bs.length) return <Fim onFim={onFim} />;
  const tocar = (c: (typeof cartas)[number]) => {
    if (abertas.includes(c.id) || feitas.includes(c.par) || abertas.length === 2) return;
    const a = [...abertas, c.id];
    setAbertas(a);
    if (a.length === 2) {
      const [x, y] = a.map((id) => cartas.find((k) => k.id === id)!);
      if (x.par === y.par) { setFeitas((f) => [...f, x.par]); falar(`${n} vezes ${x.par} é ${n * x.par}!`); setAbertas([]); }
      else setTimeout(() => setAbertas([]), 1400);
    }
  };
  return <div className="text-center">
    <p className="text-xl">Vire duas cartas: junte a conta com o resultado dela.</p>
    <div className="mx-auto mt-5 grid max-w-lg grid-cols-4 gap-3">{cartas.map((c) => {
      const vis = abertas.includes(c.id) || feitas.includes(c.par);
      return <button key={c.id} onClick={() => tocar(c)} className={`min-h-20 rounded-2xl text-xl font-black ${feitas.includes(c.par) ? "bg-emerald-200" : vis ? "bg-white border-4 border-blue-300" : "bg-blue-600 text-white"}`}>{vis ? c.txt : "?"}</button>;
    })}</div>
  </div>;
}
