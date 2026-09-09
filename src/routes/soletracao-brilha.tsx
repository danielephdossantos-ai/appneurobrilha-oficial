import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Ear, Eye, SpellCheck2 } from "lucide-react";
import { useMemo, useState } from "react";
import { normalizarResposta, PALAVRAS_SOLETRACAO } from "@/data/soletracao-brilha";

export const Route = createFileRoute("/soletracao-brilha")({ component: SoletracaoBrilha });

function falar(palavra: string) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(palavra); u.lang = "pt-BR"; u.rate = .72; window.speechSynthesis.speak(u);
}

function SoletracaoBrilha() {
  const [nivel, setNivel] = useState<1|2|3>(1); const [rodada, setRodada] = useState(0); const [valor, setValor] = useState(""); const [resultado, setResultado] = useState<"certo"|"tente"|null>(null); const [mostrar, setMostrar] = useState(false); const [pontos, setPontos] = useState(0);
  const banco = useMemo(() => PALAVRAS_SOLETRACAO.filter((p) => p.nivel === nivel), [nivel]);
  const atual = banco[rodada % banco.length];
  function conferir() { const certo = normalizarResposta(valor) === atual.palavra; setResultado(certo ? "certo" : "tente"); if (certo) setPontos((p) => p + 1); }
  function proxima() { setRodada((r) => r + 1); setValor(""); setResultado(null); setMostrar(false); }
  return <main className="min-h-screen bg-gradient-to-br from-fuchsia-950 via-purple-900 to-indigo-900 px-4 py-7 text-white"><div className="mx-auto max-w-4xl">
    <Link to="/" className="inline-flex items-center gap-2 font-bold text-white/80"><ArrowLeft/> Cidade NeuroBrilha</Link>
    <header className="py-8 text-center"><SpellCheck2 className="mx-auto" size={58}/><h1 className="mt-2 text-4xl font-black md:text-6xl">Soletração Brilha</h1><p className="mt-2 text-white/75">{PALAVRAS_SOLETRACAO.length} palavras reais para ouvir, pensar e escrever.</p></header>
    <nav className="mx-auto mb-6 grid max-w-xl grid-cols-3 gap-2">{([1,2,3] as const).map((n) => <button key={n} onClick={() => { setNivel(n); setRodada(0); setResultado(null); setValor(""); }} className={`rounded-2xl p-3 font-black ${nivel === n ? "bg-yellow-300 text-purple-950" : "bg-white/15"}`}>Nível {n}</button>)}</nav>
    <section className="rounded-[2rem] bg-white p-6 text-center text-slate-900 shadow-2xl md:p-10">
      <div className="flex justify-between"><span className="rounded-full bg-purple-100 px-4 py-2 font-black text-purple-800">Nível {nivel}</span><span className="font-black text-amber-600">⭐ {pontos}</span></div>
      <button onClick={() => falar(atual.palavra)} className="mx-auto my-7 flex items-center gap-3 rounded-3xl bg-purple-600 px-8 py-5 text-xl font-black text-white"><Ear size={30}/> Ouvir palavra</button>
      <p className="rounded-2xl bg-amber-50 p-3 text-left"><b>Dica:</b> {atual.dica}</p>
      <button onClick={() => setMostrar(true)} className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500"><Eye size={17}/> Mostrar primeira e última letra</button>
      {mostrar && <p className="mt-2 text-2xl font-black tracking-[.35em]">{atual.palavra[0]} {"_ ".repeat(Math.max(0, atual.palavra.length-2))}{atual.palavra.at(-1)}</p>}
      <div className="mx-auto mt-6 flex max-w-xl gap-2"><input autoComplete="off" spellCheck={false} aria-label="Escreva a palavra" value={valor} onChange={(e) => setValor(e.target.value)} onKeyDown={(e) => e.key === "Enter" && conferir()} className="w-full rounded-2xl border-2 border-purple-200 px-5 py-4 text-center text-2xl font-black"/><button onClick={conferir} className="rounded-2xl bg-purple-700 px-5 font-black text-white">Conferir</button></div>
      {resultado && <div className={`mt-5 rounded-2xl p-4 font-bold ${resultado === "certo" ? "bg-emerald-100 text-emerald-800" : "bg-orange-100 text-orange-900"}`}><div className="flex justify-center gap-2">{resultado === "certo" && <CheckCircle2/>}{resultado === "certo" ? `Certo: ${atual.palavra}` : "Ouça novamente e observe a dica."}</div>{resultado === "certo" && <button onClick={proxima} className="mt-3 rounded-xl bg-emerald-700 px-4 py-2 text-white">Próxima palavra</button>}</div>}
    </section>
  </div></main>;
}
