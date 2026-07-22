import { createFileRoute, Link } from "@tanstack/react-router";
import { trilhaDislexia } from "@/escola-brilha/dislexia/registry";
import { ArrowLeft, Ear } from "lucide-react";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const Route = createFileRoute("/escola-brilha/dislexia/")({
  head: () => ({
    meta: [
      { title: "Trilha da Leitura · Orton-Gillingham — Neuro Brilha" },
      {
        name: "description",
        content:
          "Programa clínico multissensorial para dislexia. 8 fases, do som à leitura fluente, com Pip.",
      },
      { property: "og:title", content: "Trilha da Leitura · Orton-Gillingham" },
      {
        property: "og:description",
        content: "Programa clínico multissensorial para dislexia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DislexiaIndex,
});

function DislexiaIndex() {
  const trilha = trilhaDislexia;
  const concluidas = getConcluidas();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2A1A4A] via-[#3B1F6B] to-[#1B1233] text-white">
      <header className="max-w-3xl mx-auto p-4 flex items-center gap-3">
        <Link
          to="/neuro-treino"
          className="rounded-full bg-white/10 hover:bg-white/20 p-2"
          aria-label="Voltar"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-lg font-black tracking-wide">Trilha da Leitura</h1>
      </header>

      <section className="max-w-3xl mx-auto px-4">
        <div className="rounded-3xl bg-white/10 border border-white/15 p-5 flex gap-4 items-center">
          <img
            src={pipVet}
            alt=""
            className="w-20 h-20 object-contain drop-shadow-xl"
          />
          <div>
            <div className="text-[10px] font-black text-orange-300 uppercase tracking-widest mb-1">
              Programa Clínico · Dislexia
            </div>
            <h2 className="text-xl font-black leading-tight">
              {trilha.titulo}
            </h2>
            <p className="text-sm text-white/80 mt-1">{trilha.descricao}</p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-orange-200 text-sm font-bold">
          <Ear className="h-4 w-4" />
          Fase 1 · Consciência Fonológica (10 aulas)
        </div>

        <h3 className="mt-4 mb-3 text-sm text-white/70 font-black uppercase tracking-widest">
          Trilha
        </h3>
        <div className="space-y-6 pb-12">
          {trilha.aulas.map((aula, i) => {
            const align = i % 2 === 0 ? "justify-start" : "justify-end";
            const feita = concluidas.includes(aula.slug);
            const eProxima =
              !feita &&
              trilha.aulas.findIndex((a) => !concluidas.includes(a.slug)) === i;
            return (
              <div key={aula.slug} className={`flex ${align}`}>
                <Link
                  to="/escola-brilha/dislexia/$aula"
                  params={{ aula: aula.slug }}
                  className={`group relative w-40 h-40 rounded-full grid place-items-center transition shadow-xl hover:scale-105 ${
                    feita
                      ? "bg-gradient-to-br from-emerald-400 to-emerald-600 text-white"
                      : "bg-gradient-to-br from-orange-400 to-pink-500 text-purple-900"
                  } ${eProxima ? "ring-4 ring-orange-200 animate-pulse" : ""}`}
                >
                  <div className="text-center px-3">
                    <div className="text-4xl">{feita ? "⭐" : "🎧"}</div>
                    <div className="text-xs font-black mt-1 leading-tight">
                      {aula.titulo}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-[#2A1A4A] text-[10px] font-black px-2 py-0.5 rounded-full shadow">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function getConcluidas(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("eb.dislexia.concluidas") ?? "[]");
  } catch {
    return [];
  }
}
