import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { listAulasHistoria } from "@/escola-brilha/historia/dados";
import { RelogioDoTempo } from "@/escola-brilha/historia/player/RelogioDoTempo";
import { contarEngrenagens, listItensMuseu, type ItemMuseu } from "@/escola-brilha/historia/museu-service";

export const Route = createFileRoute("/escola-brilha/historia/$curso")({
  head: () => ({
    meta: [
      { title: "História — Pequeno Historiador" },
      { name: "description", content: "Investigue o tempo e monte seu Museu Digital com a metodologia SPEB 1.0." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardHistoria,
});

const CURSOS_LABEL: Record<string, { titulo: string; subtitulo: string }> = {
  "historia-2ano": {
    titulo: "História · 2º Ano",
    subtitulo: "Pequeno Historiador — Relógio do Tempo",
  },
};

function DashboardHistoria() {
  const { curso } = Route.useParams();
  const label = CURSOS_LABEL[curso] ?? { titulo: curso, subtitulo: "" };
  const aulas = listAulasHistoria(curso);
  const [conquistadas, setConquistadas] = useState<number[]>([]);
  const [museu, setMuseu] = useState<ItemMuseu[]>([]);

  useEffect(() => {
    (async () => {
      const n = await contarEngrenagens(curso);
      setConquistadas(Array.from({ length: n }, (_, i) => i + 1));
      setMuseu(await listItensMuseu(curso));
    })();
  }, [curso]);

  const cardsMuseu = museu.filter((i) => i.tipo_item === "card_museu");

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-orange-50 to-amber-50 text-amber-950">
      <header className="border-b-2 border-amber-900/20 bg-amber-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-4">
          <Link to="/escola-brilha" className="rounded-full bg-amber-900 px-3 py-1.5 text-sm font-bold text-amber-50 hover:bg-amber-800">
            ← Menu
          </Link>
          <div>
            <h1 className="text-xl font-black sm:text-2xl">{label.titulo}</h1>
            <p className="text-xs text-amber-800/80">{label.subtitulo}</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        {/* Relógio do Tempo */}
        <section className="rounded-2xl border-2 border-amber-900/20 bg-white/90 p-6 shadow-lg">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-around">
            <RelogioDoTempo conquistadas={conquistadas} tamanho={220} />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-black">⚙️ Relógio do Tempo</h2>
              <p className="mt-1 text-amber-800">
                Recupere as 7 engrenagens mágicas!
              </p>
              <p className="mt-3 text-4xl font-black text-amber-700">
                {conquistadas.length} <span className="text-lg text-amber-800/60">/ 7</span>
              </p>
              <p className="text-xs font-bold uppercase text-amber-700">engrenagens conquistadas</p>
            </div>
          </div>
        </section>

        {/* Aulas */}
        <section className="mt-6">
          <h3 className="mb-3 text-lg font-black">🎯 Suas missões</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {aulas.map((a) => {
              const feita = conquistadas.includes(a.recompensas.engrenagem_indice);
              return (
                <Link
                  key={a.slug}
                  to="/escola-brilha/aula-historia/$curso/$aula"
                  params={{ curso: a.curso, aula: a.slug }}
                  className="group rounded-xl border-2 border-amber-900/20 bg-white p-4 shadow transition hover:border-amber-700 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-xs font-bold uppercase text-amber-700">Unidade {a.unidade} · Aula {a.aula}</div>
                      <div className="mt-1 text-base font-black">{a.titulo_unidade}</div>
                    </div>
                    <span className="text-2xl">{feita ? "⚙️" : "🔒"}</span>
                  </div>
                  <p className="mt-2 text-sm text-amber-800/80">{a.trilha["01_missao"].descricao}</p>
                  <div className="mt-3 text-xs font-bold text-amber-700">
                    Recompensa: {a.recompensas.item_conquistado} · +{a.recompensas.xp} XP
                  </div>
                </Link>
              );
            })}
            {/* Placeholders das próximas aulas */}
            {Array.from({ length: Math.max(0, 7 - aulas.length) }).map((_, i) => (
              <div key={i} className="rounded-xl border-2 border-dashed border-amber-300 bg-amber-50/50 p-4 text-center text-sm text-amber-700/60">
                🔒 Unidade {aulas.length + i + 1} — em breve
              </div>
            ))}
          </div>
        </section>

        {/* Museu Digital */}
        <section className="mt-8 rounded-2xl border-2 border-amber-900/20 bg-white/90 p-6 shadow-lg">
          <h3 className="mb-3 text-lg font-black">🏛️ Meu Museu Digital</h3>
          {cardsMuseu.length === 0 ? (
            <p className="text-sm text-amber-800/70">Nenhum item ainda. Complete uma aula pra ganhar seu primeiro card!</p>
          ) : (
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {cardsMuseu.map((item, idx) => (
                <div key={idx} className="rounded-lg border-2 border-amber-700 bg-gradient-to-br from-amber-50 to-orange-50 p-2 text-center shadow">
                  {item.imagem_url && (
                    <div
                      className="mx-auto mb-2 h-20 w-20 rounded border-2 border-amber-800"
                      style={{ backgroundImage: `url(${item.imagem_url})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    />
                  )}
                  <div className="text-xs font-black">{item.nome_item}</div>
                  <div className="text-[10px] text-amber-700">{item.nome_sala}</div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
