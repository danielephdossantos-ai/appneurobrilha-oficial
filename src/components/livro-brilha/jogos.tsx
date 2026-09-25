import { useEffect, useMemo, useState } from "react";

import { FeedbackPanel } from "./FeedbackPanel";
import { imagem, tocarSom } from "./midia";
import type { Jogo } from "./tipos";
import type { OpcoesFala } from "@/hooks/use-narracao-livro";

type Falar = (t: string, op?: OpcoesFala) => void;
export interface JogoProps<T extends Jogo["tipo"]> {
  jogo: Extract<Jogo, { tipo: T }>;
  falar: Falar;
  /** chamado uma vez quando a criança conclui (com nº de tentativas) */
  onConcluir: (tentativas: number) => void;
}

function useFeedback(falar: Falar) {
  const [fb, setFb] = useState<{ estado: "acerto" | "pista"; texto: string } | null>(null);
  const acerto = (t: string) => { tocarSom("acerto"); setFb({ estado: "acerto", texto: t }); setTimeout(() => falar(t), 500); };
  const pista = (t: string) => { tocarSom("pista"); setFb({ estado: "pista", texto: t }); setTimeout(() => falar(`Vamos pensar juntos! ${t}`), 400); };
  return { fb, acerto, pista };
}

const botao = "rounded-3xl bg-card px-4 py-3 font-display text-xl font-bold text-ink ring-2 ring-line transition active:animate-b-tap disabled:opacity-60";

export function ChoiceGame({ jogo, falar, onConcluir }: JogoProps<"escolha">) {
  const [tent, setTent] = useState(0);
  const [certa, setCerta] = useState<number | null>(null);
  const [erradas, setErradas] = useState<number[]>([]);
  const { fb, acerto, pista } = useFeedback(falar);
  useEffect(() => { falar(jogo.pergunta); if (jogo.ouvir) setTimeout(() => tocarSom(jogo.ouvir!), 2600); }, [jogo, falar]);

  const escolher = (i: number) => {
    if (certa !== null) return;
    const n = tent + 1;
    setTent(n);
    if (jogo.opcoes[i]?.correta) { setCerta(i); acerto(jogo.acerto); onConcluir(n); }
    else { setErradas((e) => [...e, i]); pista(jogo.dicas[Math.min(n - 1, jogo.dicas.length - 1)] ?? "Tente outra vez!"); }
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        <p className="font-display text-xl font-bold text-ink">{jogo.pergunta}</p>
        {jogo.ouvir && (
          <button onClick={() => tocarSom(jogo.ouvir!)} aria-label="Ouvir o som" className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sky text-xl text-ink active:animate-b-tap">🔊</button>
        )}
      </div>
      <div className={`mt-3 grid gap-3 ${jogo.opcoes.length > 3 ? "grid-cols-4" : jogo.opcoes.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
        {jogo.opcoes.map((o, i) => (
          <button
            key={o.texto}
            onClick={() => escolher(i)}
            disabled={erradas.includes(i)}
            className={`${botao} flex flex-col items-center gap-1 ${certa === i ? "animate-glow-ok ring-teal" : ""} ${erradas.includes(i) ? "ring-butter" : ""}`}
          >
            {o.img && <img src={imagem(o.img, o.expressao)} alt="" className="h-20 w-auto object-contain" />}
            <span className={o.texto.length <= 2 ? "text-5xl" : ""}>{o.texto}</span>
          </button>
        ))}
      </div>
      {fb && <FeedbackPanel {...fb} />}
    </div>
  );
}

export function SyllableGame({ jogo, falar, onConcluir }: JogoProps<"silaba">) {
  const [palmas, setPalmas] = useState(0);
  const { fb, acerto } = useFeedback(falar);
  useEffect(() => { falar(`Bata uma palma para cada parte de ${jogo.palavra}.`); }, [jogo, falar]);
  const palma = () => {
    if (palmas >= jogo.silabas.length) return;
    tocarSom("palma");
    const s = jogo.silabas[palmas]!;
    falar(s, { rate: 0.7 });
    const n = palmas + 1;
    setPalmas(n);
    if (n === jogo.silabas.length) setTimeout(() => { acerto(jogo.acerto); onConcluir(1); }, 700);
  };
  return (
    <div>
      <p className="font-display text-xl font-bold text-ink">Bata palmas: uma para cada parte!</p>
      <div className="mt-3 flex items-center gap-3">
        {jogo.silabas.map((s, i) => (
          <span key={s + i} className={`rounded-2xl px-5 py-3 font-display text-4xl font-bold transition ${i < palmas ? "nb-festa bg-peach text-cream" : "bg-line text-soft"}`}>{s}</span>
        ))}
        <button onClick={palma} className="ml-auto grid size-20 place-items-center rounded-full bg-butter font-display text-lg font-bold text-ink shadow-lg active:animate-b-tap">
          👏
        </button>
      </div>
      {fb && <FeedbackPanel {...fb} />}
    </div>
  );
}

/** Encontre: os objetos aparecem escondidos sobre a cena (renderizado dentro da cena). */
export function FindGameLayer({ jogo, achados, onAchar }: { jogo: Extract<Jogo, { tipo: "encontre" }>; achados: number[]; onAchar: (i: number) => void }) {
  return (
    <>
      {jogo.posicoes.map((p, i) => (
        <button
          key={i}
          onClick={() => onAchar(i)}
          aria-label="Flor escondida"
          disabled={achados.includes(i)}
          className={`absolute w-[9%] -translate-x-1/2 -translate-y-1/2 ${achados.includes(i) ? "nb-pular" : "opacity-80 nb-balancar"}`}
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
        >
          <img src={imagem(jogo.img)} alt="" className="w-full" />
          {achados.includes(i) && <span className="absolute -top-3 left-1/2 grid size-8 -translate-x-1/2 place-items-center rounded-full bg-teal font-display font-bold text-cream">{achados.indexOf(i) + 1}</span>}
        </button>
      ))}
    </>
  );
}

export function FindGamePanel({ jogo, achados }: { jogo: Extract<Jogo, { tipo: "encontre" }>; achados: number[] }) {
  const fim = achados.length === jogo.posicoes.length;
  return (
    <div>
      <p className="font-display text-xl font-bold text-ink">{jogo.pergunta}</p>
      <div className="mt-3 flex gap-2">
        {jogo.posicoes.map((_, i) => (
          <span key={i} className={`grid size-14 place-items-center rounded-2xl font-display text-2xl font-bold ${i < achados.length ? "bg-teal text-cream nb-festa" : "bg-line text-soft"}`}>{i + 1}</span>
        ))}
      </div>
      {fim && <FeedbackPanel estado="acerto" texto={jogo.acerto} />}
    </div>
  );
}

export function MemoryGame({ jogo, falar, onConcluir }: JogoProps<"memoria">) {
  const cartas = useMemo(() => {
    const d = [...jogo.imgs, ...jogo.imgs].map((img, i) => ({ img, id: i }));
    for (let i = d.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [d[i], d[j]] = [d[j]!, d[i]!]; }
    return d;
  }, [jogo]);
  const [abertas, setAbertas] = useState<number[]>([]);
  const [pares, setPares] = useState<string[]>([]);
  const [tent, setTent] = useState(0);
  const { fb, acerto } = useFeedback(falar);
  useEffect(() => { falar(jogo.pergunta); }, [jogo, falar]);

  const virar = (k: number) => {
    const c = cartas[k]!;
    if (abertas.length === 2 || abertas.includes(k) || pares.includes(c.img)) return;
    tocarSom("virar");
    const nova = [...abertas, k];
    setAbertas(nova);
    if (nova.length === 2) {
      setTent((t) => t + 1);
      const [a, b] = nova.map((i) => cartas[i]!);
      setTimeout(() => {
        if (a!.img === b!.img) {
          const np = [...pares, a!.img];
          setPares(np);
          tocarSom("toque");
          if (np.length === jogo.imgs.length) { acerto(jogo.acerto); onConcluir(tent + 1); }
        }
        setAbertas([]);
      }, 800);
    }
  };

  return (
    <div>
      <p className="font-display text-xl font-bold text-ink">{jogo.pergunta}</p>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {cartas.map((c, k) => {
          const vis = abertas.includes(k) || pares.includes(c.img);
          return (
            <button key={c.id} onClick={() => virar(k)} className={`grid aspect-square place-items-center rounded-2xl ring-2 ${vis ? "nb-virar bg-card ring-teal" : "bg-peach ring-peach active:animate-b-tap"}`}>
              {vis ? <img src={imagem(c.img)} alt="" className="h-4/5 w-auto object-contain" /> : <span className="font-display text-3xl font-bold text-cream">?</span>}
            </button>
          );
        })}
      </div>
      {fb && <FeedbackPanel {...fb} />}
    </div>
  );
}

export function SequenceGame({ jogo, falar, onConcluir }: JogoProps<"sequencia">) {
  const ordem = useMemo(() => [2, 0, 1].filter((i) => i < jogo.passos.length), [jogo]);
  const [feitos, setFeitos] = useState<number[]>([]);
  const [tent, setTent] = useState(0);
  const { fb, acerto, pista } = useFeedback(falar);
  useEffect(() => { falar(jogo.pergunta); }, [jogo, falar]);

  const tocar = (i: number) => {
    if (feitos.includes(i) || feitos.length === jogo.passos.length) return;
    setTent((t) => t + 1);
    if (i === feitos.length) {
      const n = [...feitos, i];
      setFeitos(n);
      tocarSom("toque");
      falar(jogo.passos[i]!.texto);
      if (n.length === jogo.passos.length) setTimeout(() => { acerto(jogo.acerto); onConcluir(tent + 1); }, 900);
    } else pista(jogo.dica);
  };

  return (
    <div>
      <p className="font-display text-xl font-bold text-ink">{jogo.pergunta}</p>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {ordem.map((i) => {
          const p = jogo.passos[i]!;
          const pos = feitos.indexOf(i);
          return (
            <button key={i} onClick={() => tocar(i)} className={`${botao} relative flex flex-col items-center gap-1 text-base ${pos >= 0 ? "ring-teal" : ""}`}>
              {pos >= 0 && <span className="nb-festa absolute -left-2 -top-2 grid size-9 place-items-center rounded-full bg-teal font-display text-lg text-cream">{pos + 1}º</span>}
              <img src={imagem(p.img, p.expressao)} alt="" className="h-20 w-auto object-contain" />
              {p.texto}
            </button>
          );
        })}
      </div>
      {fb && <FeedbackPanel {...fb} />}
    </div>
  );
}

export function TheaterActivity({ jogo, falar, onConcluir, personagem }: JogoProps<"teatro"> & { personagem?: string }) {
  const [passo, setPasso] = useState(0);
  const [conta, setConta] = useState<number | null>(null);
  const { fb, acerto } = useFeedback(falar);
  const atual = jogo.passos[passo];
  useEffect(() => { if (atual) falar(atual.pedido); }, [atual, falar]);

  const fiz = () => {
    setConta(3);
    let n = 3;
    const t = setInterval(() => {
      n -= 1;
      if (n > 0) { setConta(n); tocarSom("toque"); return; }
      clearInterval(t);
      setConta(null);
      tocarSom("festa");
      if (passo + 1 < jogo.passos.length) setPasso(passo + 1);
      else { setPasso(jogo.passos.length); acerto(jogo.acerto); onConcluir(1); }
    }, 900);
  };

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-wide text-peach">Hora do teatro · {Math.min(passo + 1, jogo.passos.length)} de {jogo.passos.length}</p>
      {atual && (
        <div className="mt-2 flex items-center gap-4">
          {atual.expressao && personagem && <img src={imagem(personagem, atual.expressao)} alt="" className="h-24 w-auto nb-respirar" />}
          <p className="font-display text-2xl font-bold text-ink">{atual.pedido}</p>
        </div>
      )}
      {atual && (
        <button onClick={fiz} disabled={conta !== null} className="mt-3 w-full rounded-3xl bg-peach px-5 py-4 font-display text-2xl font-bold text-cream active:animate-b-tap disabled:opacity-80">
          {conta !== null ? `${conta}...` : "Eu fiz! 🎭"}
        </button>
      )}
      {fb && <FeedbackPanel {...fb} />}
    </div>
  );
}
