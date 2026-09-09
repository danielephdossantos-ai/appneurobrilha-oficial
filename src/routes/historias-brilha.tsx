import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, CheckCircle2, Headphones, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { HISTORIAS_BRILHA, type HistoriaBrilha, type NivelHistoria } from "@/data/historias-brilha";

export const Route = createFileRoute("/historias-brilha")({ component: HistoriasBrilha });

const cores = ["#16a34a", "#0284c7", "#7c3aed", "#db2777", "#ea580c", "#0f766e"];

function narrar(historia: HistoriaBrilha) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const fala = new SpeechSynthesisUtterance(`${historia.titulo}. ${historia.paragrafos.join(" ")}`);
  fala.lang = "pt-BR";
  fala.rate = historia.nivel <= 2 ? 0.78 : 0.9;
  window.speechSynthesis.speak(fala);
}

function HistoriasBrilha() {
  const [nivel, setNivel] = useState<NivelHistoria>(1);
  const [selecionada, setSelecionada] = useState<HistoriaBrilha | null>(null);
  const [resposta, setResposta] = useState<number | null>(null);
  const historias = useMemo(() => HISTORIAS_BRILHA.filter((h) => h.nivel === nivel), [nivel]);

  if (selecionada) {
    const acertou = resposta === selecionada.resposta;
    return <main className="min-h-screen bg-gradient-to-b from-amber-50 to-sky-50 px-4 py-6">
      <article className="mx-auto max-w-3xl rounded-[2rem] border border-amber-200 bg-white p-5 shadow-xl md:p-9">
        <button onClick={() => { setSelecionada(null); setResposta(null); }} className="mb-5 flex items-center gap-2 font-bold text-slate-600"><ArrowLeft size={20}/> Voltar ao acervo</button>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full px-3 py-1 text-sm font-black text-white" style={{ background: cores[selecionada.nivel - 1] }}>Nível {selecionada.nivel}</span>
          <span className="text-sm font-semibold text-slate-500">{selecionada.habilidade}</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900">{selecionada.titulo}</h1>
        <button onClick={() => narrar(selecionada)} className="my-5 flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-black text-white"><Headphones/> Ouvir a história</button>
        <div className="space-y-5 text-xl leading-9 text-slate-800">
          {selecionada.paragrafos.map((p, i) => <p key={i} className="rounded-2xl bg-amber-50 p-4"><span className="mr-2 font-black text-amber-600">{i + 1}.</span>{p}</p>)}
        </div>
        <section className="mt-8 rounded-3xl bg-sky-50 p-5">
          <h2 className="text-xl font-black text-slate-900">Vamos compreender</h2>
          <p className="mt-2 font-semibold">{selecionada.pergunta}</p>
          <div className="mt-4 grid gap-3">
            {selecionada.opcoes.map((opcao, i) => <button key={opcao} disabled={resposta !== null} onClick={() => setResposta(i)} className="rounded-2xl border-2 border-sky-200 bg-white p-3 text-left font-bold disabled:opacity-80">{opcao}</button>)}
          </div>
          {resposta !== null && <div className={`mt-4 rounded-2xl p-4 font-bold ${acertou ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-900"}`}>
            <div className="flex items-center gap-2">{acertou ? <CheckCircle2/> : <RotateCcw/>}{acertou ? "Muito bem!" : "Vamos olhar a pista outra vez."}</div>
            <p className="mt-1 font-medium">{selecionada.explicacao}</p>
          </div>}
        </section>
      </article>
    </main>;
  }

  return <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-violet-900 to-sky-800 px-4 py-7 text-white">
    <div className="mx-auto max-w-6xl">
      <Link to="/" className="inline-flex items-center gap-2 font-bold text-white/80"><ArrowLeft size={20}/> Cidade NeuroBrilha</Link>
      <header className="py-8 text-center">
        <BookOpen className="mx-auto mb-3" size={52}/><h1 className="text-4xl font-black md:text-6xl">Histórias Brilha</h1>
        <p className="mt-3 text-lg text-white/80">98 histórias autorais com leitura guiada, áudio e compreensão.</p>
      </header>
      <nav aria-label="Níveis de leitura" className="mb-7 grid grid-cols-3 gap-2 md:grid-cols-6">
        {([1,2,3,4,5,6] as NivelHistoria[]).map((n) => <button key={n} onClick={() => setNivel(n)} className={`rounded-2xl px-3 py-3 font-black ${nivel === n ? "bg-white text-violet-900" : "bg-white/15"}`}>Nível {n}</button>)}
      </nav>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {historias.map((historia, i) => <button key={historia.id} onClick={() => setSelecionada(historia)} className="rounded-3xl bg-white p-5 text-left text-slate-900 shadow-lg transition hover:-translate-y-1">
          <div className="mb-3 text-3xl">{["🌱","🔎","🗺️","🧩","💡","🌟"][nivel-1]}</div>
          <span className="text-xs font-black uppercase tracking-widest" style={{ color: cores[nivel-1] }}>História {i + 1}</span>
          <h2 className="mt-1 text-xl font-black">{historia.titulo}</h2><p className="mt-2 text-sm text-slate-600">{historia.habilidade}</p>
        </button>)}
      </div>
    </div>
  </main>;
}
