import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Download, Folder, FolderOpen, Printer } from "lucide-react";
import { TeacherShell as Shell } from "@/components/teacher/TeacherShell";
import profissoes from "@/assets/atividades-imprimir/jogo-50-profissoes.jpg.asset.json";

export const Route = createFileRoute("/area-professor/atividades-imprimir")({
  component: AtividadesImprimir,
  head: () => ({
    meta: [
      { title: "Jogos para Imprimir · Área do Professor | NeuroBrilha Kids" },
      { name: "description", content: "Atividades adaptadas prontas em A4 para baixar ou imprimir." },
      { property: "og:title", content: "Jogos para Imprimir · NeuroBrilha Kids" },
      { property: "og:description", content: "Folhas A4 coloridas e adaptadas para a sala de aula." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

type Atividade = { id: number; nome: string; categoria: string; url: string };

// Adicione novas atividades aqui conforme as imagens forem enviadas.
const ATIVIDADES: Atividade[] = [
  { id: 50, nome: "Profissões - Quem faz o quê?", categoria: "Social", url: profissoes.url },
];

function imprimir(url: string, nome: string) {
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.write(`<html><head><title>${nome}</title><style>@page{size:A4;margin:0}body{margin:0}img{width:210mm;height:297mm;object-fit:contain;display:block}</style></head><body><img src="${url}" onload="setTimeout(()=>{window.print()},200)"/></body></html>`);
  w.document.close();
}

function AtividadesImprimir() {
  const [abertas, setAbertas] = useState<string[]>([]);
  const pastas = [...new Set(ATIVIDADES.map((a) => a.categoria))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  return (
    <Shell>
      <main className="mx-auto max-w-4xl space-y-5 p-4 md:p-6">
        <Link to="/area-professor" className="inline-flex min-h-11 items-center gap-2 font-bold text-primary">
          <ArrowLeft className="h-4 w-4" />Área do Professor
        </Link>
        <header className="rounded-2xl bg-rose-600 p-6 text-white">
          <h1 className="text-3xl font-black">Jogos para Imprimir</h1>
          <p className="mt-2">Folhas A4 prontas. Escolha a pasta, depois imprima ou baixe.</p>
        </header>
        {pastas.map((p) => {
          const aberta = abertas.includes(p);
          const itens = ATIVIDADES.filter((a) => a.categoria === p);
          return (
            <section key={p} className="overflow-hidden rounded-2xl border-2 border-rose-100 bg-white">
              <button type="button" onClick={() => setAbertas((v) => (v.includes(p) ? v.filter((x) => x !== p) : [...v, p]))} className="flex min-h-14 w-full items-center gap-3 px-5 py-4 text-left">
                {aberta ? <FolderOpen className="h-5 w-5 text-rose-600" /> : <Folder className="h-5 w-5 text-rose-600" />}
                <span className="flex-1 text-lg font-black">{p}</span>
                <span className="text-sm font-bold text-muted-foreground">{itens.length} atividades</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${aberta ? "rotate-180" : ""}`} />
              </button>
              {aberta && (
                <div className="grid gap-4 border-t-2 border-slate-100 p-4 sm:grid-cols-2">
                  {itens.map((a) => (
                    <div key={a.id} className="rounded-2xl border-2 border-rose-100 p-3">
                      <img src={a.url} alt={a.nome} className="w-full rounded-xl" loading="lazy" />
                      <h3 className="mt-2 font-black">{a.nome}</h3>
                      <div className="mt-2 flex gap-2">
                        <button onClick={() => imprimir(a.url, a.nome)} className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-rose-600 font-bold text-white"><Printer className="h-4 w-4" />Imprimir</button>
                        <a href={a.url} download={`${a.nome}.jpg`} className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border-2 font-bold"><Download className="h-4 w-4" />Baixar</a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </main>
    </Shell>
  );
}
