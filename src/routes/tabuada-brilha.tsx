import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calculator, CheckCircle2, Lightbulb, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { CONFIG_TABUADA, criarQuestaoTabuada, type NivelTabuada } from "@/lib/tabuada-brilha";

export const Route = createFileRoute("/tabuada-brilha")({ component: TabuadaBrilha });

function TabuadaBrilha() {
  const [nivel, setNivel] = useState<NivelTabuada>("facil");
  const [rodada, setRodada] = useState(0);
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState<"certo" | "tente" | null>(null);
  const [pontos, setPontos] = useState(0);
  const questao = useMemo(() => criarQuestaoTabuada(nivel, rodada), [nivel, rodada]);
  const grupos = Array.from({ length: questao.a }, (_, i) => i);

  function conferir() {
    const certo = Number(valor) === questao.resposta;
    setResultado(certo ? "certo" : "tente");
    if (certo) setPontos((p) => p + 1);
  }
  function proxima() { setRodada((r) => r + 1); setValor(""); setResultado(null); }

  return <main className="min-h-screen bg-gradient-to-br from-cyan-950 via-blue-900 to-violet-900 px-4 py-7 text-white">
    <div className="mx-auto max-w-5xl">
      <Link to="/" className="inline-flex items-center gap-2 font-bold text-white/80"><ArrowLeft/> Cidade NeuroBrilha</Link>
      <header className="py-7 text-center"><Calculator className="mx-auto" size={56}/><h1 className="mt-2 text-4xl font-black md:text-6xl">Tabuada Brilha</h1><p className="mt-2 text-white/75">Entenda a multiplicação antes de decorar.</p></header>
      <nav className="mx-auto mb-6 grid max-w-2xl grid-cols-3 gap-2">
        {(Object.keys(CONFIG_TABUADA) as NivelTabuada[]).map((item) => <button key={item} onClick={() => { setNivel(item); setRodada(0); setResultado(null); setValor(""); }} className={`rounded-2xl p-3 font-black ${nivel === item ? "bg-amber-400 text-blue-950" : "bg-white/15"}`}>{CONFIG_TABUADA[item].nome}</button>)}
      </nav>
      <section className="mx-auto max-w-3xl rounded-[2rem] bg-white p-5 text-slate-900 shadow-2xl md:p-9">
        <div className="flex items-center justify-between"><span className="rounded-full bg-blue-100 px-4 py-2 font-black text-blue-800">{CONFIG_TABUADA[nivel].nome}</span><span className="font-black text-amber-600">⭐ {pontos} acertos</span></div>
        <div className="my-6 rounded-2xl bg-amber-50 p-4"><div className="flex gap-2 font-black text-amber-800"><Lightbulb/> Estratégia</div><p className="mt-1">{CONFIG_TABUADA[nivel].dica}</p></div>
        <div aria-label={`${questao.a} grupos de ${questao.b}`} className="mb-6 flex flex-wrap justify-center gap-3">
          {grupos.map((grupo) => <div key={grupo} className="flex min-h-12 min-w-12 flex-wrap items-center justify-center gap-1 rounded-xl border-2 border-blue-200 bg-blue-50 p-2">{Array.from({ length: Math.min(questao.b, 10) }, (_, i) => <i key={i} className="h-2.5 w-2.5 rounded-full bg-blue-600" />)}</div>)}
        </div>
        <h2 className="text-center text-5xl font-black">{questao.a} × {questao.b} = ?</h2>
        <div className="mx-auto mt-6 flex max-w-sm gap-2"><input aria-label="Sua resposta" inputMode="numeric" value={valor} onChange={(e) => setValor(e.target.value.replace(/\D/g, ""))} className="w-full rounded-2xl border-2 border-blue-200 px-5 py-3 text-center text-2xl font-black"/><button onClick={conferir} className="rounded-2xl bg-blue-600 px-5 font-black text-white">Conferir</button></div>
        {resultado && <div className={`mt-5 rounded-2xl p-4 ${resultado === "certo" ? "bg-emerald-100 text-emerald-800" : "bg-orange-100 text-orange-900"}`}>
          <div className="flex items-center gap-2 text-lg font-black">{resultado === "certo" ? <CheckCircle2/> : <RotateCcw/>}{resultado === "certo" ? "Você entendeu!" : "Observe os grupos e tente outra vez."}</div>
          <p className="mt-1">{questao.estrategia}</p>{resultado === "certo" && <button onClick={proxima} className="mt-3 rounded-xl bg-emerald-700 px-4 py-2 font-black text-white">Próxima conta</button>}
        </div>}
      </section>
    </div>
  </main>;
}
