import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Printer, Search } from "lucide-react";
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

function Apostilas() {
  const [busca, setBusca] = useState("");
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
            As aulas do app viram folha A4: guia do professor, folhas do estudante, gabarito e carta
            para a família. Português e Matemática, 1º ao 5º ano ({aulas.length} aulas).
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
        <section className="space-y-3">
          <h2 className="text-xl font-black">Alfabetização e anos iniciais (3 a 6 anos)</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {infantis.map((a) => (
              <Link
                key={a.chave}
                to="/area-professor/apostila/$codigo"
                params={{ codigo: a.chave }}
                className="rounded-2xl border-2 border-emerald-100 bg-white p-5 hover:border-emerald-300"
              >
                <p className="text-xs font-black uppercase text-emerald-700">
                  {a.serieLabel} · {a.disciplina}
                </p>
                <h3 className="mt-1 text-lg font-black">{a.titulo}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{a.resumo}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-black text-emerald-700">
                  <Printer className="h-4 w-4" />
                  Abrir apostila
                </span>
              </Link>
            ))}
          </div>
        </section>
        <h2 className="text-xl font-black">Ensino Fundamental</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {filtradas.map((a) => (
            <Link
              key={a.codigo}
              to="/area-professor/apostila/$codigo"
              params={{ codigo: a.codigo }}
              className="rounded-2xl border-2 border-indigo-100 bg-white p-5 hover:border-indigo-300"
            >
              <p className="font-mono text-xs font-black text-indigo-600">{a.codigo}</p>
              <h2 className="mt-1 text-lg font-black">{a.titulo}</h2>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{a.missao}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-black text-indigo-700">
                <Printer className="h-4 w-4" />
                Abrir apostila
              </span>
            </Link>
          ))}
        </div>
        {filtradas.length === 0 && (
          <p className="rounded-xl bg-slate-100 p-4 text-muted-foreground">
            Nenhuma aula encontrada com esse termo.
          </p>
        )}
      </main>
    </Shell>
  );
}
