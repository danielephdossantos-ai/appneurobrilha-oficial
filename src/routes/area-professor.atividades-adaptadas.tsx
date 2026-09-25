import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Download, Folder, FolderOpen, Printer, Search } from "lucide-react";
import { TeacherShell as Shell } from "@/components/teacher/TeacherShell";
import aulas from "@/modules/professor/atividades-adaptadas.json";
import aulas1ano from "@/modules/professor/atividades-adaptadas-1ano.json";
import aulas2ano from "@/modules/professor/atividades-adaptadas-2ano.json";
import aulas2anoMat from "@/modules/professor/atividades-adaptadas-2ano-mat.json";

export const Route = createFileRoute("/area-professor/atividades-adaptadas")({
  component: AtividadesAdaptadas,
  head: () => ({
    meta: [
      { title: "Atividades BNCC Adaptadas · Área do Professor | NeuroBrilha Kids" },
      { name: "description", content: "Aulas BNCC da Educação Infantil adaptadas, prontas em A4 para imprimir ou baixar." },
      { property: "og:title", content: "Atividades BNCC Adaptadas · NeuroBrilha Kids" },
      { property: "og:description", content: "Explicações, atividades da criança e guia do professor por código BNCC." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const CAMPOS: Record<string, string> = {
  EO: "O eu, o outro e o nós",
  CG: "Corpo, gestos e movimentos",
  TS: "Traços, sons, cores e formas",
  EF: "Escuta, fala, pensamento e imaginação",
  ET: "Espaços, tempos, quantidades e relações",
};

function imprimir(urls: string[], nome: string) {
  const w = window.open("", "_blank");
  if (!w) return;
  const imgs = urls.map((u) => `<img src="${u}"/>`).join("");
  w.document.write(`<html><head><title>${nome}</title><style>@page{size:A4;margin:0}body{margin:0}img{width:210mm;height:297mm;object-fit:contain;display:block;page-break-after:always}</style></head><body>${imgs}<script>Promise.all([...document.images].map(i=>i.complete?1:new Promise(r=>i.onload=i.onerror=r))).then(()=>setTimeout(()=>print(),300))</script></body></html>`);
  w.document.close();
}

function AtividadesAdaptadas() {
  const [aberta, setAberta] = useState<string | null>(null);
  const [busca, setBusca] = useState("");
  const [etapaAberta, setEtapaAberta] = useState<string | null>(null);
  const norm = (t: string) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const q = norm(busca.trim());
  const campos = Object.entries(CAMPOS)
    .map(([sigla, nome]) => ({ sigla, nome, aulas: aulas.filter((a) => a.codigo.slice(4, 6) === sigla && (!q || norm(`${a.codigo} ${a.titulo} ${nome}`).includes(q))) }))
    .filter((c) => c.aulas.length > 0);
  const filtrar = (l: typeof aulas1ano) => l.filter((a) => !q || norm(`${a.codigo} ${a.titulo} ${a.busca}`).includes(q));
  const anos = [
    { id: "1ano", nome: "1º Ano", lista: filtrar(aulas1ano) },
    { id: "2ano", nome: "2º Ano · Língua Portuguesa", lista: filtrar(aulas2ano) },
    { id: "2ano-mat", nome: "2º Ano · Matemática", lista: filtrar(aulas2anoMat as typeof aulas1ano) },
  ];
  return (
    <Shell>
      <div className="mx-auto max-w-5xl space-y-6">
        <Link to="/area-professor" className="inline-flex items-center gap-2 font-bold text-teal-700"><ArrowLeft className="h-4 w-4" />Área do Professor</Link>
        <header className="rounded-3xl bg-teal-700 p-6 text-white">
          <h1 className="text-3xl font-black">Atividades BNCC Adaptadas</h1>
          <p className="mt-2">Organizadas por etapa e ano. Cada aula traz explicações, atividades da criança e o guia do professor.</p>
        </header>
        <label className="flex items-center gap-2 rounded-2xl border-2 border-teal-200 bg-white px-4">
          <Search className="h-5 w-5 text-teal-700" />
          <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Pesquisar por código BNCC ou tema (ex.: EI03ET01, cores, emoções)" className="min-h-12 w-full bg-transparent outline-none" aria-label="Pesquisar atividades" />
        </label>
        {campos.length > 0 && (
        <div className="rounded-3xl border-2 border-teal-300 bg-teal-50">
          <button type="button" onClick={() => setEtapaAberta(etapaAberta === "ei" ? null : "ei")} className="flex min-h-16 w-full items-center gap-3 p-5 text-left">
            {etapaAberta === "ei" || q ? <FolderOpen className="h-7 w-7 text-teal-700" /> : <Folder className="h-7 w-7 text-teal-700" />}
            <span className="flex-1"><span className="block text-xl font-black">Educação Infantil</span><span className="text-sm text-muted-foreground">{campos.reduce((n, c) => n + c.aulas.length, 0)} aulas · Pré II</span></span>
            <ChevronDown className={`transition-transform ${etapaAberta === "ei" || q ? "rotate-180" : ""}`} />
          </button>
          {(etapaAberta === "ei" || !!q) && <div className="space-y-6 border-t-2 border-teal-200 p-4">
        {campos.map((c) => (
          <section key={c.sigla} className="space-y-3">
            <h2 className="text-xl font-black">{c.nome}</h2>
            {c.aulas.map((a, idx) => {
              const chave = `${a.codigo}-${idx}-${c.sigla}`;
              const open = aberta === chave || (!!q && campos.reduce((n, x) => n + x.aulas.length, 0) <= 3);
              return (
                <div key={chave} className="rounded-2xl border-2 border-teal-200 bg-white">
                  <button type="button" onClick={() => setAberta(open ? null : chave)} className="flex min-h-14 w-full items-center gap-3 p-4 text-left">
                    {open ? <FolderOpen className="text-teal-700" /> : <Folder className="text-teal-700" />}
                    <span className="flex-1"><span className="block text-xs font-black text-teal-700">{a.codigo}</span><span className="font-black">{a.titulo}</span> <span className="text-sm text-muted-foreground">· {a.folhas.length} folhas</span></span>
                    <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <div className="space-y-4 border-t p-4">
                      <button type="button" onClick={() => imprimir(a.folhas, a.titulo)} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-teal-700 px-4 font-bold text-white"><Printer className="h-4 w-4" />Imprimir aula inteira</button>
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                        {a.folhas.map((u, i) => (
                          <div key={u} className="rounded-xl border p-2">
                            <img src={u} alt={`${a.titulo} — folha ${i + 1}`} loading="lazy" className="aspect-[210/297] w-full rounded object-contain" />
                            <div className="mt-2 grid grid-cols-2 gap-1">
                              <button type="button" onClick={() => imprimir([u], a.titulo)} className="inline-flex min-h-10 items-center justify-center rounded-lg border-2 border-teal-200 text-teal-700" aria-label="Imprimir folha"><Printer className="h-4 w-4" /></button>
                              <a href={u} download={`${a.codigo}-folha-${i + 1}`} className="inline-flex min-h-10 items-center justify-center rounded-lg border-2 border-teal-200 text-teal-700" aria-label="Baixar folha"><Download className="h-4 w-4" /></a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        ))}
          </div>}
        </div>
        )}
        {anos.map(({ id, nome, lista }) => lista.length > 0 && (
        <div key={id} className="rounded-3xl border-2 border-teal-300 bg-teal-50">
          <button type="button" onClick={() => setEtapaAberta(etapaAberta === id ? null : id)} className="flex min-h-16 w-full items-center gap-3 p-5 text-left">
            {etapaAberta === id || q ? <FolderOpen className="h-7 w-7 text-teal-700" /> : <Folder className="h-7 w-7 text-teal-700" />}
            <span className="flex-1"><span className="block text-xl font-black">{nome}</span><span className="text-sm text-muted-foreground">{lista.length} pastas · {lista.reduce((n, a) => n + a.folhas.length, 0)} folhas</span></span>
            <ChevronDown className={`transition-transform ${etapaAberta === id || q ? "rotate-180" : ""}`} />
          </button>
          {(etapaAberta === id || !!q) && <div className="space-y-3 border-t-2 border-teal-200 p-4">
            {lista.map((a, idx) => {
              const chave = `${id}-${idx}`;
              const open = aberta === chave || (!!q && lista.length <= 3);
              return (
                <div key={chave} className="rounded-2xl border-2 border-teal-200 bg-white">
                  <button type="button" onClick={() => setAberta(open ? null : chave)} className="flex min-h-14 w-full items-center gap-3 p-4 text-left">
                    {open ? <FolderOpen className="text-teal-700" /> : <Folder className="text-teal-700" />}
                    <span className="flex-1">{/^EF\d\d[A-Z]{2}\d\d$/.test(a.codigo) && <span className="block text-xs font-black text-teal-700">{a.codigo}</span>}<span className="font-black">{a.titulo}</span> <span className="text-sm text-muted-foreground">· {a.folhas.length} folhas</span></span>
                    <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <div className="space-y-4 border-t p-4">
                      <button type="button" onClick={() => imprimir(a.folhas, a.titulo)} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-teal-700 px-4 font-bold text-white"><Printer className="h-4 w-4" />Imprimir pasta inteira</button>
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                        {a.folhas.map((u, i) => (
                          <div key={u} className="rounded-xl border p-2">
                            <img src={u} alt={`${a.titulo} — folha ${i + 1}`} loading="lazy" className="aspect-[210/297] w-full rounded object-contain" />
                            <div className="mt-2 grid grid-cols-2 gap-1">
                              <button type="button" onClick={() => imprimir([u], a.titulo)} className="inline-flex min-h-10 items-center justify-center rounded-lg border-2 border-teal-200 text-teal-700" aria-label="Imprimir folha"><Printer className="h-4 w-4" /></button>
                              <a href={u} download={`${id}-folha-${i + 1}`} className="inline-flex min-h-10 items-center justify-center rounded-lg border-2 border-teal-200 text-teal-700" aria-label="Baixar folha"><Download className="h-4 w-4" /></a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>}
        </div>
        ))}
        {q && campos.length === 0 && anos.every((x) => x.lista.length === 0) && <p className="font-bold text-muted-foreground">Nenhuma atividade encontrada.</p>}
        <p className="text-sm text-muted-foreground">Pastas do 3º ao 9º ano aparecerão aqui quando as atividades forem enviadas.</p>
      </div>
    </Shell>
  );
}
