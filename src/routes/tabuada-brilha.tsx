import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Lock, RotateCw } from "lucide-react";
import { useEffect, useState } from "react";
import { useAppState } from "@/core/store";
import { url as pipEspaco } from "@/assets/pip-espaco.png.asset.json";
import { ESTRATEGIAS, JOGOS, ORDEM_TABUADAS, lerProgresso, salvarProgresso, tabuadaLiberada, type Jogo, type ProgressoTabuada } from "@/lib/tabuada-brilha";
import { LousaTabuada } from "@/components/tabuada/LousaTabuada";
import { Baloes, BotaoOuvir, ExplicaAntes, Grupos, Memoria, PulaPula, Sequencia, falar } from "@/components/tabuada/TabuadaJogos";

export const Route = createFileRoute("/tabuada-brilha")({
  head: () => ({ meta: [
    { title: "Tabuada Brilha — aprender multiplicação de verdade" },
    { name: "description", content: "Tabuada ensinada passo a passo com grupos, figuras, estratégias e jogos adaptados." },
    { property: "og:title", content: "Tabuada Brilha" },
    { property: "og:description", content: "Entenda a multiplicação antes de decorar, com jogos adaptados." },
  ] }),
  component: TabuadaBrilha,
});

const NOMES_JOGO: Record<Jogo, { nome: string; explica: (n: number) => string }> = {
  pula: { nome: "Pula-Pula", explica: (n) => `O sapinho pula na reta dos números. Cada pulo anda ${n} casas. Conte em voz alta junto com cada pulo.` },
  sequencia: { nome: "Complete a Sequência", explica: (n) => `Os números estão contando de ${n} em ${n}. Um número sumiu. Descubra qual somando ${n} ao número de antes.` },
  baloes: { nome: "Balões", explica: (n) => `Aparece uma conta da tabuada do ${n} com os grupos desenhados. Conte os grupos se precisar e toque no balão certo.` },
  memoria: { nome: "Memória da Tabuada", explica: () => `Vire duas cartas. Se a conta combinar com o resultado, você ganha o par. Se não, elas viram de novo.` },
};

type Tela = { t: "mapa" } | { t: "entender" | "ver" | "estrategia" | "jogos"; n: number } | { t: "jogo"; n: number; jogo: Jogo; jogando: boolean; tempo?: boolean };

function TabuadaBrilha() {
  const { activeChild } = useAppState();
  const childId = activeChild?.id;
  const [prog, setProg] = useState<ProgressoTabuada>({ concluidas: [], jogos: {}, revisar: [] });
  const [tela, setTela] = useState<Tela>({ t: "mapa" });
  const [seed, setSeed] = useState(1);
  useEffect(() => setProg(lerProgresso(childId)), [childId]);
  const atualizar = (f: (p: ProgressoTabuada) => ProgressoTabuada) => setProg((p) => { const np = f(p); salvarProgresso(childId, np); return np; });

  const concluirJogo = (n: number, jogo: Jogo) => {
    atualizar((p) => {
      const feitos = [...new Set([...(p.jogos[n] ?? []), jogo])];
      const concluidas = feitos.length >= JOGOS.length && !p.concluidas.includes(n) ? [...p.concluidas, n] : p.concluidas;
      return { ...p, jogos: { ...p.jogos, [n]: feitos }, concluidas };
    });
    setTela({ t: "jogos", n });
  };
  const erro = (k: string) => atualizar((p) => ({ ...p, revisar: [...new Set([k, ...p.revisar])].slice(0, 30) }));
  const acerto = (k: string) => atualizar((p) => ({ ...p, revisar: p.revisar.filter((x) => x !== k) }));

  return <main className="min-h-screen bg-gradient-to-br from-cyan-950 via-blue-900 to-violet-900 px-4 py-6 text-white">
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between">
        {tela.t === "mapa" ? <Link to="/" className="inline-flex min-h-11 items-center gap-2 font-bold text-white/80"><ArrowLeft /> Cidade NeuroBrilha</Link>
          : <button onClick={() => setTela(tela.t === "jogo" ? { t: "jogos", n: tela.n } : { t: "mapa" })} className="inline-flex min-h-11 items-center gap-2 font-bold text-white/80"><ArrowLeft /> Voltar</button>}
      </div>
      <header className="flex items-center justify-center gap-4 py-4">
        <img src={pipEspaco} alt="Pip astronauta" className="h-24 w-24 object-contain drop-shadow-xl" />
        <div><h1 className="text-4xl font-black md:text-5xl">Tabuada Brilha</h1><p className="text-white/80">Primeiro entender, depois jogar.</p></div>
      </header>

      <section className="rounded-[2rem] bg-white p-5 text-slate-900 shadow-2xl md:p-8">
        {tela.t === "mapa" && <Mapa prog={prog} onAbrir={(n) => { setTela({ t: "entender", n }); falar(`Vamos aprender a tabuada do ${n}.`); }} />}
        {tela.t === "entender" && <Entender n={tela.n} onNext={() => setTela({ t: "ver", n: tela.n })} />}
        {tela.t === "ver" && <Ver n={tela.n} onNext={() => setTela({ t: "estrategia", n: tela.n })} />}
        {tela.t === "estrategia" && <EstrategiaTela n={tela.n} onNext={() => setTela({ t: "jogos", n: tela.n })} />}
        {tela.t === "jogos" && <MenuJogos n={tela.n} feitos={prog.jogos[tela.n] ?? []} onJogo={(jogo, tempo) => { setSeed((s) => s + 1); setTela({ t: "jogo", n: tela.n, jogo, jogando: false, tempo }); }} onRever={() => setTela({ t: "entender", n: tela.n })} />}
        {tela.t === "jogo" && (!tela.jogando
          ? <ExplicaAntes titulo={NOMES_JOGO[tela.jogo].nome} texto={NOMES_JOGO[tela.jogo].explica(tela.n)} onJogar={() => setTela({ ...tela, jogando: true })} />
          : (() => {
            const p = { n: tela.n, seed, revisar: prog.revisar, onErro: erro, onAcerto: acerto, onFim: () => concluirJogo(tela.n, tela.jogo) };
            if (tela.jogo === "pula") return <PulaPula {...p} />;
            if (tela.jogo === "sequencia") return <Sequencia {...p} />;
            if (tela.jogo === "memoria") return <Memoria {...p} />;
            return <Baloes {...p} comTempo={tela.tempo} />;
          })())}
      </section>
    </div>
  </main>;
}

function Etapa({ num, titulo }: { num: number; titulo: string }) {
  return <div className="mb-4 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 text-lg font-black text-white">{num}</span><h2 className="text-2xl font-black">{titulo}</h2><span className="ml-auto text-sm font-bold text-slate-400">Etapa {num} de 4</span></div>;
}
const Proximo = ({ onClick, children = "Próximo" }: { onClick: () => void; children?: React.ReactNode }) =>
  <div className="mt-6 text-center"><button onClick={onClick} className="min-h-12 rounded-2xl bg-emerald-600 px-8 text-lg font-black text-white">{children}</button></div>;

function Mapa({ prog, onAbrir }: { prog: ProgressoTabuada; onAbrir: (n: number) => void }) {
  return <div>
    <h2 className="text-center text-2xl font-black">Escolha sua tabuada</h2>
    <p className="mb-5 text-center text-slate-600">Começamos pelas mais fáceis. Quando terminar uma, a próxima abre.</p>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      {ORDEM_TABUADAS.map((n) => {
        const livre = tabuadaLiberada(n, prog.concluidas), feita = prog.concluidas.includes(n);
        return <button key={n} disabled={!livre} onClick={() => onAbrir(n)} className={`relative min-h-24 rounded-3xl text-center font-black ${feita ? "bg-emerald-500 text-white" : livre ? "bg-amber-400 text-blue-950 hover:scale-105" : "bg-slate-100 text-slate-400"}`}>
          <span className="block text-sm">Tabuada do</span><span className="text-4xl">{n}</span>
          {feita && <Check className="absolute right-2 top-2 h-5 w-5" />}{!livre && <Lock className="absolute right-2 top-2 h-5 w-5" />}
        </button>;
      })}
    </div>
  </div>;
}

function Entender({ n, onNext }: { n: number; onNext: () => void }) {
  const b = 3;
  const [rev, setRev] = useState(0);
  const texto = `Multiplicar é juntar grupos iguais. ${n} vezes ${b} quer dizer ${n} grupo${n > 1 ? "s" : ""} com ${b} bolinhas cada. Toque nos grupos para aparecer e conte comigo.`;
  useEffect(() => { falar(texto); }, [n]); // eslint-disable-line react-hooks/exhaustive-deps
  const tocar = () => { if (rev < n) { const r = rev + 1; setRev(r); falar(`${r} grupo${r > 1 ? "s" : ""}: ${r * b}`); } };
  return <div>
    <Etapa num={1} titulo="Entender com grupos" />
    <p className="text-xl leading-relaxed">{texto}</p>
    <div className="mt-2"><BotaoOuvir texto={texto} /></div>
    <button onClick={tocar} className="mt-5 w-full rounded-3xl bg-slate-50 p-5" aria-label="Mostrar mais um grupo"><Grupos a={n} b={b} revelados={rev} /></button>
    <p className="mt-4 text-center text-3xl font-black">{rev} × {b} = {rev * b}</p>
    {rev >= n && <><p className="mt-2 text-center text-lg">Juntando os {n} grupos de {b}, temos <b>{n * b}</b>. Então <b>{n} × {b} = {n * b}</b>.</p><Proximo onClick={onNext} /></>}
  </div>;
}

function Ver({ n, onNext }: { n: number; onNext: () => void }) {
  const b = Math.min(n + 2, 6);
  const [virado, setVirado] = useState(false);
  const [l, c] = virado ? [b, n] : [n, b];
  const texto = `Aqui as bolinhas estão em linhas. ${l} linhas com ${c} bolinhas: ${l} vezes ${c} é ${n * b}. Agora gire a grade. ${c} linhas com ${l}: o resultado é o mesmo! Por isso, se você sabe ${n} vezes ${b}, também sabe ${b} vezes ${n}.`;
  return <div>
    <Etapa num={2} titulo="Ver na grade" />
    <p className="text-xl leading-relaxed">{texto}</p>
    <div className="mt-2"><BotaoOuvir texto={texto} /></div>
    <div className="my-5 flex flex-col items-center gap-2">
      {Array.from({ length: l }, (_, i) => <div key={i} className="flex gap-2">{Array.from({ length: c }, (_, j) => <i key={j} className="h-7 w-7 rounded-full bg-violet-500" />)}</div>)}
    </div>
    <p className="text-center text-3xl font-black">{l} × {c} = {n * b}</p>
    <div className="mt-4 text-center"><button onClick={() => setVirado(!virado)} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-violet-100 px-5 font-black text-violet-800"><RotateCw className="h-5 w-5" />Girar a grade</button></div>
    <Proximo onClick={onNext} />
  </div>;
}

function EstrategiaTela({ n, onNext }: { n: number; onNext: () => void }) {
  const e = ESTRATEGIAS[n];
  const texto = `${e.titulo}. ${e.explicacao} ${e.passos.join(" ")}`;
  return <div>
    <Etapa num={3} titulo={`Truque da tabuada do ${n}: ${e.titulo}`} />
    <p className="text-xl leading-relaxed">{e.explicacao}</p>
    <ol className="mt-4 space-y-3">{e.passos.map((p, i) => <li key={i} className="flex items-center gap-3 rounded-2xl bg-amber-50 p-4 text-xl"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-amber-400 font-black">{i + 1}</span>{p}</li>)}</ol>
    <div className="mt-3"><BotaoOuvir texto={texto} /></div>
    <h3 className="mt-6 mb-2 text-xl font-black">Lousa do Pip — veja outras formas de pensar</h3>
    <p className="mb-3 text-slate-600">Toque em "Explicar de outro jeito" quantas vezes quiser. Sempre aparece uma nova explicação.</p>
    <LousaTabuada n={n} />
    <Proximo onClick={onNext}>Agora vamos jogar!</Proximo>
  </div>;
}

function MenuJogos({ n, feitos, onJogo, onRever }: { n: number; feitos: string[]; onJogo: (j: Jogo, tempo?: boolean) => void; onRever: () => void }) {
  return <div>
    <Etapa num={4} titulo={`Jogos da tabuada do ${n}`} />
    <p className="mb-4 text-lg text-slate-600">Jogue os 4 jogos para completar esta tabuada. Cada jogo explica antes como jogar.</p>
    <div className="grid gap-3 sm:grid-cols-2">
      {JOGOS.map((j) => <button key={j} onClick={() => onJogo(j)} className={`flex min-h-20 items-center justify-between rounded-3xl p-5 text-left text-xl font-black ${feitos.includes(j) ? "bg-emerald-100 text-emerald-900" : "bg-blue-50 text-blue-900 hover:bg-blue-100"}`}>{NOMES_JOGO[j].nome}{feitos.includes(j) && <Check />}</button>)}
    </div>
    <div className="mt-4 flex flex-wrap gap-3">
      <button onClick={() => onJogo("baloes", true)} className="min-h-11 rounded-xl border-2 border-slate-200 px-4 font-bold">Desafio relâmpago (mostra o tempo, opcional)</button>
      <button onClick={onRever} className="min-h-11 rounded-xl border-2 border-slate-200 px-4 font-bold">Rever a explicação</button>
    </div>
  </div>;
}
