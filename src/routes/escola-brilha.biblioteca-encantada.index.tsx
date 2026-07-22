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

        <div className="mt-6">
          <h3 className="text-xs font-black uppercase tracking-widest text-purple-200 mb-3">
            Aulas
          </h3>
          <ul className="space-y-3">
            {trilha.aulas.map((aula, i) => (
              <li key={aula.slug}>
                <Link
                  to="/escola-brilha/biblioteca-encantada/$aula"
                  params={{ aula: aula.slug }}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 p-4 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center font-black text-lg shadow-lg">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-lg leading-tight">
                      {aula.titulo}
                    </div>
                    <div className="text-xs text-white/70 truncate">
                      {aula.palavrasAlvo.join(" · ")}
                    </div>
                  </div>
                  <Play className="h-5 w-5 text-purple-200" />
                </Link>
              </li>
            ))}

            {/* Placeholders visuais das próximas aulas (bloqueadas até a construção) */}
            {Array.from({ length: 4 }).map((_, i) => (
              <li
                key={`lock-${i}`}
                className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4 opacity-60"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Lock className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="font-black text-sm text-white/70">
                    Aula {String(trilha.aulas.length + i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-white/50">
                    Em construção
                  </div>
                </div>
                <BookOpen className="h-4 w-4 text-white/40" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
