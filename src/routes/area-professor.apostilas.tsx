import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ChevronDown, Folder, FolderOpen, Printer, Search } from "lucide-react";
import { TeacherShell as Shell } from "@/components/teacher/TeacherShell";
import { listAulas } from "@/escola-brilha/registry";
import { listarAulasEI } from "@/modules/professor/apostila/gerar-apostila-ei";

export const Route = createFileRoute("/area-professor/apostilas")({
  component: Apostilas,
  head: () => ({
    meta: [
      { title: "Apostilas para imprimir · Área do Professor | NeuroBrilha Kids" },
      {
        name: "description",
        content:
          "Aulas do NeuroBrilha Kids convertidas em apostila A4 com guia do professor, folhas do estudante, gabarito e carta para a família.",
      },
      { property: "og:title", content: "Apostilas para imprimir · Área do Professor" },
      {
        property: "og:description",
        content: "Material A4 pronto para fotocópia, adaptado para crianças com TEA, TDAH e dislexia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

type PastaItem = { chave: string; titulo: string; detalhe: string; codigo?: string };
type Pasta = { nome: string; cor: "emerald" | "indigo"; itens: PastaItem[] };

function Apostilas() {
  const [busca, setBusca] = useState("");
  const [abertas, setAbertas] = useState<string[]>([]);
  const aulas = useMemo(
    () =>
      listAulas().filter(
        (a) =>
          (/portugu/i.test(a.disciplina) || /matem/i.test(a.disciplina)) &&
          /[1-5]º\s*ano/i.test(a.ano),
      ),
    [],
  );
  const filtradas = useMemo(() => {
    const q = busca.trim().toLowerCase();
    if (!q) return aulas;
    return aulas.filter(
      (a) => a.titulo.toLowerCase().includes(q) || a.codigo.toLowerCase().includes(q),
    );
  }, [aulas, busca]);
  const infantis = useMemo(() => {
    const q = busca.trim().toLowerCase();
    const todas = listarAulasEI();
    if (!q) return todas;
    return todas.filter(
      (a) =>
        a.titulo.toLowerCase().includes(q) ||
        a.serieLabel.toLowerCase().includes(q) ||
        a.disciplina.toLowerCase().includes(q),
    );
  }, [busca]);

  const pastas = useMemo<Pasta[]>(() => {
    const mapa = new Map<string, Pasta>();
    const add = (nome: string, cor: Pasta["cor"], item: PastaItem) => {
      const atual = mapa.get(nome) ?? { nome, cor, itens: [] };
      atual.itens.push(item);
      mapa.set(nome, atual);
    };
    for (const a of infantis)
      add(`${a.disciplina} · ${a.serieLabel}`, "emerald", {
        chave: a.chave,
        titulo: a.titulo,
        detalhe: a.resumo,
      });
    for (const a of filtradas)
      add(`${a.disciplina} · ${a.ano}`, "indigo", {
        chave: a.codigo,
        titulo: a.titulo,
        detalhe: a.missao,
        codigo: a.codigo,
      });
    return [...mapa.values()].sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  }, [infantis, filtradas]);

  const total = infantis.length + filtradas.length;

  return (
    <Shell>
      <main className="mx-auto max-w-4xl space-y-5 p-4 md:p-6">
        <Link
          to="/area-professor"
          className="inline-flex min-h-11 items-center gap-2 font-bold text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Área do Professor
        </Link>
        <header className="rounded-2xl bg-indigo-700 p-6 text-white">
          <h1 className="text-3xl font-black">Apostilas para imprimir</h1>
          <p className="mt-2">
            As aulas do app viram folha A4: 2 folhas do professor e o restante em atividades
            impressas da criança. Escolha a pasta da turma para ver as aulas ({total} no total).
          </p>
        </header>
        <label className="flex items-center gap-2 rounded-xl border-2 bg-white px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por título ou código BNCC"
            className="min-h-12 w-full bg-transparent font-semibold outline-none"
          />
        </label>
        <div className="space-y-3">
          {pastas.map((pasta) => {
            const aberta = abertas.includes(pasta.nome) || busca.trim().length > 0;
            const emerald = pasta.cor === "emerald";
            return (
              <section
                key={pasta.nome}
                className={`overflow-hidden rounded-2xl border-2 bg-white ${
                  emerald ? "border-emerald-100" : "border-indigo-100"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setAbertas((prev) =>
                      prev.includes(pasta.nome)
                        ? prev.filter((n) => n !== pasta.nome)
                        : [...prev, pasta.nome],
                    )
                  }
                  className="flex min-h-14 w-full items-center gap-3 px-5 py-4 text-left"
                >
                  {aberta ? (
                    <FolderOpen
                      className={`h-5 w-5 ${emerald ? "text-emerald-600" : "text-indigo-600"}`}
                    />
                  ) : (
                    <Folder
                      className={`h-5 w-5 ${emerald ? "text-emerald-600" : "text-indigo-600"}`}
                    />
                  )}
                  <span className="flex-1 text-lg font-black">{pasta.nome}</span>
                  <span className="text-sm font-bold text-muted-foreground">
                    {pasta.itens.length} aulas
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform ${
                      aberta ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {aberta && (
                  <div className="grid gap-3 border-t-2 border-slate-100 p-4 sm:grid-cols-2">
                    {pasta.itens.map((item) => (
                      <Link
                        key={item.chave}
                        to="/area-professor/apostila/$codigo"
                        params={{ codigo: item.chave }}
                        className={`rounded-2xl border-2 p-4 ${
                          emerald
                            ? "border-emerald-100 hover:border-emerald-300"
                            : "border-indigo-100 hover:border-indigo-300"
                        }`}
                      >
                        {item.codigo && (
                          <p className="font-mono text-xs font-black text-indigo-600">
                            {item.codigo}
                          </p>
                        )}
                        <h3 className="mt-1 text-base font-black">{item.titulo}</h3>
                        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                          {item.detalhe}
                        </p>
                        <span
                          className={`mt-3 inline-flex items-center gap-2 text-sm font-black ${
                            emerald ? "text-emerald-700" : "text-indigo-700"
                          }`}
                        >
                          <Printer className="h-4 w-4" />
                          Abrir apostila
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
        {pastas.length === 0 && (
          <p className="rounded-xl bg-slate-100 p-4 text-muted-foreground">
            Nenhuma aula encontrada com esse termo.
          </p>
        )}
      </main>
    </Shell>
  );
}
