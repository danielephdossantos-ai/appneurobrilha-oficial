import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, BookOpenCheck, Printer, Search } from "lucide-react";
import { listAulas } from "@/escola-brilha/registry";
import { listarAulasEI } from "@/modules/professor/apostila/gerar-apostila-ei";
import { supabase } from "@/database/supabase/client";
import { TeacherShell as Shell } from "@/components/teacher/TeacherShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const Route = createFileRoute("/area-professor/biblioteca-inclusiva")({
  component: InclusiveLibrary,
});
type Result = {
  id: string;
  codigo_bncc: string;
  title: string;
  school_stage: string;
  school_year: string;
  subject: string;
  knowledge_object: string | null;
  learning_goal: string;
  supported_profiles: string[];
};
const profileLabel: Record<string, string> = {
  tea: "TEA",
  tdah: "TDAH",
  dislexia: "Dislexia",
  discalculia: "Discalculia",
  deficiencia_intelectual: "Deficiência intelectual",
  deficiencia_auditiva: "Deficiência auditiva",
  deficiencia_visual: "Deficiência visual",
  comunicacao: "Comunicação",
  motora_escrita: "Motora/escrita",
  alfabetizacao_tardia: "Alfabetização tardia",
};

function InclusiveLibrary() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");
  const [profile, setProfile] = useState("");
  const [rows, setRows] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);
  async function search() {
    setLoading(true);
    const { data, error } = await (supabase as any).rpc("teacher_search_inclusive_lessons", {
      search_text: query,
      filter_year: year || null,
      filter_subject: subject || null,
      filter_profile: profile || null,
      result_limit: 100,
    });
    setLoading(false);
    if (error) {
      toast.error("Não foi possível pesquisar a biblioteca inclusiva.");
      return;
    }
    setRows(data ?? []);
  }
  useEffect(() => {
    void search();
  }, []);
  const todasApostilas = useMemo(() => {
    const ef = listAulas()
      .filter(
        (a) =>
          (/portugu/i.test(a.disciplina) || /matem/i.test(a.disciplina)) &&
          /[1-5]º\s*ano/i.test(a.ano),
      )
      .map((a) => ({
        chave: a.codigo,
        codigo: a.codigo as string | undefined,
        titulo: a.titulo,
        turma: a.ano,
        disciplina: a.disciplina,
      }));
    const ei = listarAulasEI().map((a) => ({
      chave: a.chave,
      codigo: undefined as string | undefined,
      titulo: a.titulo,
      turma: a.serieLabel,
      disciplina: a.disciplina,
    }));
    return [...ei, ...ef];
  }, []);
  const apostilas = useMemo(() => {
    const q = query.trim().toLowerCase();
    const y = year.trim().toLowerCase().replace(/\s*ano/, "");
    const s = subject.trim().toLowerCase();
    return todasApostilas.filter(
      (a) =>
        (!q ||
          a.titulo.toLowerCase().includes(q) ||
          (a.codigo ?? "").toLowerCase().includes(q)) &&
        (!y || a.turma.toLowerCase().includes(y)) &&
        (!s || a.disciplina.toLowerCase().includes(s.slice(0, 5))),
    );
  }, [todasApostilas, query, year, subject]);
  return (
    <Shell>
      <main className="mx-auto max-w-6xl space-y-6 p-4 md:p-6">
        <header>
          <Link
            to="/area-professor"
            className="inline-flex min-h-11 items-center gap-2 font-bold text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
          <h1 className="mt-2 flex items-center gap-3 text-2xl font-black md:text-3xl">
            <BookOpenCheck className="text-indigo-600" />
            Biblioteca Inclusiva do Professor
          </h1>
          <p className="mt-2 text-muted-foreground">
            Materiais adaptados e revisados para atendimento individualizado. Pesquise pelo código
            BNCC ou pelo assunto.
          </p>
        </header>
        <Card>
          <CardContent className="grid gap-3 p-4 md:grid-cols-5">
            <Input
              className="md:col-span-2"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && search()}
              placeholder="Ex.: EF02MA05 ou adição"
            />
            <Input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Ano: 2º Ano"
            />
            <Input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Disciplina"
            />
            <Button className="min-h-10" onClick={search} disabled={loading}>
              <Search className="mr-2 h-4 w-4" />
              {loading ? "Buscando..." : "Pesquisar"}
            </Button>
            <select
              className="min-h-10 rounded-md border bg-background px-3 md:col-span-2"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            >
              <option value="">Todas as necessidades</option>
              {Object.entries(profileLabel).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <p className="self-center text-sm text-muted-foreground md:col-span-3">
              Só aparecem aulas aprovadas nas revisões curricular, pedagógica e técnica.
            </p>
          </CardContent>
        </Card>
        {apostilas.length > 0 && (
          <section className="space-y-3">
            <h2 className="flex items-center gap-2 text-xl font-black">
              <Printer className="h-5 w-5 text-indigo-600" />
              Apostilas A4 para imprimir ({apostilas.length})
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {apostilas.slice(0, 60).map((a) => (
                <Link
                  key={a.chave}
                  to="/area-professor/apostila/$codigo"
                  params={{ codigo: a.chave }}
                  className="block"
                >
                  <Card className="h-full transition hover:border-indigo-400">
                    <CardContent className="space-y-2 p-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Apostila A4</Badge>
                        {a.codigo && <Badge className="font-mono">{a.codigo}</Badge>}
                        <Badge variant="outline">{a.turma}</Badge>
                        <Badge variant="outline">{a.disciplina}</Badge>
                      </div>
                      <h3 className="text-lg font-black">{a.titulo}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            {apostilas.length > 60 && (
              <p className="text-sm text-muted-foreground">
                Mostrando 60 de {apostilas.length}. Use a pesquisa para encontrar outras.
              </p>
            )}
          </section>
        )}
        <section className="grid gap-4 md:grid-cols-2">
          {!loading && rows.length === 0 && (
            <div className="md:col-span-2 rounded-2xl border border-dashed p-10 text-center text-muted-foreground">
              Nenhuma aula adaptada publicada para estes filtros.
            </div>
          )}
          {rows.map((row) => (
            <Link
              key={row.id}
              to="/area-professor/aula-inclusiva/$lessonId"
              params={{ lessonId: row.id }}
              className="block"
            >
              <Card className="h-full transition hover:border-indigo-400">
                <CardContent className="space-y-3 p-5">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="font-mono">{row.codigo_bncc}</Badge>
                    <Badge variant="outline">{row.school_year}</Badge>
                    <Badge variant="outline">{row.subject}</Badge>
                  </div>
                  <h2 className="text-xl font-black">{row.title}</h2>
                  <p className="text-sm text-muted-foreground">{row.learning_goal}</p>
                  <div className="flex flex-wrap gap-1">
                    {row.supported_profiles.map((p) => (
                      <Badge key={p} variant="secondary">
                        {profileLabel[p] ?? p}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      </main>
    </Shell>
  );
}
