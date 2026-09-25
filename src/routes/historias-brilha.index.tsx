import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { catalogo, niveis, temas } from "@/data/livro-brilha/catalogo";
import type { Nivel } from "@/data/livro-brilha/tipos";
import { capas } from "@/data/livro-brilha/capas";
import { livrosDoCatalogo } from "@/data/livro-brilha/livros/catalogo-livros";
import { cenarios } from "@/components/livro-brilha/midia";

const fundoDe = (id: string) => cenarios[livrosDoCatalogo[id]?.cenas[0]?.cenario ?? "parque"] ?? cenarios.parque;

export const Route = createFileRoute("/historias-brilha/")({
  head: () => ({
    meta: [
      { title: "Histórias Brilha · NeuroBrilha Kids" },
      {
        name: "description",
        content:
          "50 histórias infantis interativas para a Educação Infantil: narração, elementos para tocar, atividades de alfabetização e três níveis de aprendizagem.",
      },
      { property: "og:title", content: "Histórias Brilha · NeuroBrilha Kids" },
      {
        property: "og:description",
        content:
          "Histórias que a criança ouve, toca, responde e representa. Alfabetização, memória e emoções dentro da aventura.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Biblioteca,
});

function Biblioteca() {
  const [nivel, setNivel] = useState<Nivel>("Descobrir");
  const [tema, setTema] = useState("Todos");

  const visiveis = useMemo(
    () =>
      catalogo.filter(
        (h) => (tema === "Todos" || h.tema === tema) && h.nivel === nivel,
      ),
    [tema, nivel],
  );

  return (
    <div className="page-aurora min-h-screen bg-cream">
      <div className="mx-auto max-w-[1240px] px-5 py-6 sm:px-8">
        <header className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="grid size-12 place-items-center rounded-2xl bg-peach font-display text-2xl font-bold text-cream" aria-label="Voltar ao início">←</Link>
            <div>
              <p className="font-display text-2xl font-semibold leading-none text-ink">
                Histórias Brilha
              </p>
              <p className="text-xs font-medium text-soft">
                Biblioteca de histórias para pequenos leitores
              </p>
            </div>
          </div>
          <div className="soft-glass flex items-center gap-2 rounded-full p-1.5">
            {niveis.map((n) => (
              <button
                key={n}
                onClick={() => setNivel(n)}
                className={
                  n === nivel
                    ? "rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-ink"
                    : "rounded-full px-4 py-2 text-sm font-medium text-soft"
                }
              >
                {n}
              </button>
            ))}
          </div>
        </header>

        <div className="mb-7 flex flex-wrap gap-2">
          {temas.map((t) => (
            <button
              key={t}
              onClick={() => setTema(t)}
              className={
                t === tema
                  ? "rounded-full bg-teal/15 px-4 py-2 text-sm font-semibold text-teal"
                  : "soft-glass rounded-full px-4 py-2 text-sm font-medium text-soft"
              }
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {visiveis.map((h) => {
            const capa = capas[h.id];
            const conteudo = (
              <>
                <div className="relative overflow-hidden rounded-[20px]">
                  {capa ? (
                    <img
                      src={capa}
                      alt={h.titulo}
                      loading="lazy"
                      width={736}
                      height={912}
                      className="aspect-[4/5] w-full object-cover"
                    />
                  ) : (
                    <div className="grid aspect-[4/5] w-full place-items-center bg-butter/20 text-5xl">
                      <img src={fundoDe(h.id)} alt={h.titulo} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                    </div>
                  )}
                  <span className="absolute left-2 top-2 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-coral backdrop-blur-sm">
                    {h.tema}
                  </span>
                  {false && (
                    <span className="absolute right-2 top-2 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-soft backdrop-blur-sm">
                      Em breve
                    </span>
                  )}
                </div>
                <div className="px-1.5 pb-1 pt-3">
                  <h3 className="font-display text-lg font-semibold leading-tight text-ink">
                    {h.numero}. {h.titulo}
                  </h3>
                  <div className="mt-2 flex items-center gap-0.5 text-butter">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <span key={i} className="text-sm">
                        {i < niveis.indexOf(h.nivel) + 3 ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );

            return true ? (
              <Link
                key={h.id}
                to="/historias-brilha/$id"
                params={{ id: h.id }}
                className="soft-glass group animate-rise overflow-hidden rounded-[28px] p-2.5 transition-transform hover:-translate-y-1"
              >
                {conteudo}
              </Link>
            ) : (
              <div key={h.id} className="soft-glass overflow-hidden rounded-[28px] p-2.5 opacity-80">
                {conteudo}
              </div>
            );
          })}
        </div>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-2 rounded-3xl bg-white/40 px-6 py-4 backdrop-blur-md ring-1 ring-black/5">
          <p className="text-sm font-medium text-soft">
            50 histórias · 3 níveis · feito com carinho para 3–6 anos
          </p>
          <p className="font-display text-sm font-semibold text-peach">NeuroBrilha Kids</p>
        </footer>
      </div>
    </div>
  );
}
