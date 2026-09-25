import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { LivroPlayer } from "@/components/livro-brilha/LivroPlayer";
import { catalogo } from "@/data/livro-brilha/catalogo";
import { livrosDoCatalogo } from "@/data/livro-brilha/livros/catalogo-livros";
import { raposaOuvirLivro } from "@/data/livro-brilha/livros/raposa-ouvir";

const livros = { [raposaOuvirLivro.id]: raposaOuvirLivro, ...livrosDoCatalogo };

export const Route = createFileRoute("/historias-brilha/$id")({
  loader: ({ params }) => {
    const resumo = catalogo.find((item) => item.id === params.id);
    const livro = livros[params.id];
    if (!resumo || !livro) throw notFound();
    return { resumo, livro };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.livro.titulo} · NeuroBrilha Kids` },
          { name: "description", content: loaderData.livro.ficha.objetivo },
          { property: "og:title", content: `${loaderData.livro.titulo} · NeuroBrilha Kids` },
          { property: "og:description", content: loaderData.livro.ficha.objetivo },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [],
  }),
  component: Pagina,
});

function Pagina() {
  const { livro, resumo } = Route.useLoaderData();
  return (
    <div className="page-aurora min-h-screen bg-cream">
      <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6">
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Link to="/historias-brilha" className="soft-glass rounded-full px-4 py-2.5 text-sm font-semibold text-ink">← Biblioteca</Link>
          <div className="text-right">
            <p className="font-display text-xl font-bold leading-tight text-ink sm:text-2xl">{livro.titulo}</p>
            <p className="text-xs font-semibold text-soft">{resumo.tema} · {resumo.nivel}</p>
          </div>
        </header>
        <LivroPlayer livro={livro} />
      </div>
    </div>
  );
}