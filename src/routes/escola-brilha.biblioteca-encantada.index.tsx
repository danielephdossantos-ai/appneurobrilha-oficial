import { createFileRoute, Link } from "@tanstack/react-router";
import { trilhaBibliotecaEncantada } from "@/escola-brilha/biblioteca-encantada/registry";
import { BookOpen, Play, Lock, ArrowLeft } from "lucide-react";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const Route = createFileRoute("/escola-brilha/biblioteca-encantada/")({
  head: () => ({
    meta: [
      { title: "A Biblioteca Encantada — Neuro Brilha Kids" },
      {
        name: "description",
        content:
          "Curso neuroinclusivo de linguagem para os anos iniciais com ABA, método fônico, TEACCH, PECS, Denver e Orton-Gillingham.",
      },
      { property: "og:title", content: "A Biblioteca Encantada" },
      {
        property: "og:description",
        content: "Curso de linguagem neuroinclusivo para os anos iniciais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BibliotecaEncantadaIndex,
});

function BibliotecaEncantadaIndex() {
  const trilha = trilhaBibliotecaEncantada;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2A1A4A] via-[#3B1F6B] to-[#1B1233] text-white">
      <header className="max-w-3xl mx-auto p-4 flex items-center gap-3">
        <Link
          to="/escola-brilha"
          className="rounded-full bg-white/10 hover:bg-white/20 p-2"
          aria-label="Voltar"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-lg font-black tracking-wide">Biblioteca Encantada</h1>
      </header>

      <section className="max-w-3xl mx-auto px-4">
        <div className="rounded-3xl bg-white/10 border border-white/15 p-5 flex gap-4 items-center">
          <img
            src={pipVet}
            alt=""
            className="w-20 h-20 object-contain drop-shadow-xl"
          />
          <div>
            <h2 className="text-2xl font-black leading-tight">
              {trilha.titulo}
            </h2>
            <p className="text-white/80 text-sm mt-1">{trilha.descricao}</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xs font-black uppercase tracking-widest text-purple-200 mb-6 text-center">
            Trilha das Aulas
          </h3>
          <div className="space-y-6 pb-12">
            {trilha.aulas.map((aula, i) => {
              const align = i % 2 === 0 ? "justify-start" : "justify-end";
              const eProxima = i === 0;
              return (
                <div key={aula.slug} className={`flex ${align}`}>
                  <Link
                    to="/escola-brilha/biblioteca-encantada/$aula"
                    params={{ aula: aula.slug }}
                    className={`group relative w-40 h-40 rounded-full grid place-items-center transition bg-gradient-to-br from-amber-300 to-amber-500 text-[#2A1A4A] shadow-xl hover:scale-105 ${
                      eProxima ? "ring-4 ring-amber-300 animate-pulse" : ""
                    }`}
                  >
                    <div className="text-center px-3">
                      <div className="text-4xl">📖</div>
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

        </div>
      </section>
    </div>
  );
}
