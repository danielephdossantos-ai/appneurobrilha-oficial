import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Download, Folder, FolderOpen, Printer } from "lucide-react";
import { TeacherShell as Shell } from "@/components/teacher/TeacherShell";
import extras from "@/modules/professor/atividades-extras.json";

export const Route = createFileRoute("/area-professor/atividades-extras")({
  component: AtividadesExtras,
  head: () => ({
    meta: [
      { title: "Atividades Extras · Área do Professor | NeuroBrilha Kids" },
      { name: "description", content: "Folhas extras por tema para imprimir ou baixar." },
      { property: "og:title", content: "Atividades Extras · NeuroBrilha Kids" },
      { property: "og:description", content: "Folhas extras organizadas por tema para a sala de aula." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

type Folha = { categoria: string; nome: string; url: string };
const FOLHAS = extras as Folha[];

function imprimir(urls: string[], nome: string) {
  const w = window.open("", "_blank");
  if (!w) return;
  const imgs = urls.map((u) => `<img src="${u}"/>`).join("");
  w.document.write(`<html><head><title>${nome}</title><style>@page{size:A4;margin:0}body{margin:0}img{width:210mm;height:297mm;object-fit:contain;display:block;page-break-after:always}</style></head><body>${imgs}<script>window.onload=()=>setTimeout(()=>window.print(),400)</script></body></html>`);
  w.document.close();
}

function AtividadesExtras() {
  const [abertas, setAbertas] = useState<string[]>([]);
  const [busca, setBusca] = useState("");
  const q = busca.trim().toLowerCase();
  const pastas = [...new Set(FOLHAS.map((f) => f.categoria))]
    .filter((p) => !q || p.toLowerCase().includes(q))
    .sort((a, b) => a.localeCompare(b, "pt-BR"));
  return (
    <Shell>
      <main className="mx-auto max-w-4xl space-y-5 p-4 md:p-6">
        <Link to="/area-professor" className="inline-flex min-h-11 items-center gap-2 font-bold text-primary">
          <ArrowLeft className="h-4 w-4" />Área do Professor
        </Link>
        <header className="rounded-2xl bg-amber-500 p-6 text-white">
          <h1 className="text-3xl font-black">Atividades Extras</h1>
          <p className="mt-2">{FOLHAS.length} folhas prontas. Escolha a pasta, depois imprima ou baixe.</p>
        </header>
        <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Pesquisar pasta (ex.: sílabas, cores, rimas)" className="min-h-12 w-full rounded-xl border-2 px-4" />
        {pastas.map((p) => {
          const aberta = abertas.includes(p) || (q.length > 0 && pastas.length <= 3);
          const itens = FOLHAS.filter((f) => f.categoria === p);
          return (
            <section key={p} className="overflow-hidden rounded-2xl border-2 border-amber-100 bg-white">
              <button type="button" onClick={() => setAbertas((v) => (v.includes(p) ? v.filter((x) => x !== p) : [...v, p]))} className="flex min-h-14 w-full items-center gap-3 px-5 py-4 text-left">
                {aberta ? <FolderOpen className="h-5 w-5 text-amber-600" /> : <Folder className="h-5 w-5 text-amber-600" />}
                <span className="flex-1 text-lg font-black">{p}</span>
                <span className="text-sm font-bold text-muted-foreground">{itens.length} folhas</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${aberta ? "rotate-180" : ""}`} />
              </button>
              {aberta && (
                <div className="border-t-2 border-slate-100 p-4">
                  <button onClick={() => imprimir(itens.map((i) => i.url), p)} className="mb-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-amber-600 px-4 font-bold text-white"><Printer className="h-4 w-4" />Imprimir pasta inteira</button>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {itens.map((a) => (
                      <div key={a.url} className="rounded-2xl border-2 border-amber-100 p-3">
                        <img src={a.url} alt={a.nome} className="w-full rounded-xl" loading="lazy" />
                        <h3 className="mt-2 font-black">{a.nome}</h3>
                        <div className="mt-2 flex gap-2">
                          <button onClick={() => imprimir([a.url], a.nome)} className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-amber-600 font-bold text-white"><Printer className="h-4 w-4" />Imprimir</button>
                          <a href={a.url} download={`${a.nome}.jpg`} className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border-2 font-bold"><Download className="h-4 w-4" />Baixar</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </main>
    </Shell>
  );
}
