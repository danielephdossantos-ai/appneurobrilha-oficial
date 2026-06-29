import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/database/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Loader2, Sparkles, CheckCircle2, RefreshCw, ArrowLeft } from "lucide-react";
import {
  listSeedTargets,
  generateLessonDraft,
  generateLessonBatch,
  approveLessonDraft,
} from "@/lib/seed-lessons.functions";

export const Route = createFileRoute("/admin-seed-lessons")({
  component: SeedLessonsPage,
});

type Item = {
  codigo_bncc: string;
  serie: string;
  disciplina: string;
  titulo: string;
  status: "approved" | "draft_pending" | "rejected" | "missing";
  draftId: string | null;
};

const SERIES = ["1º Ano"] as const;
const DISCIPLINAS = ["Matemática", "Língua Portuguesa", "Português"] as const;

function statusBadge(s: Item["status"]) {
  const map = {
    approved: { label: "Aprovada", cls: "bg-emerald-100 text-emerald-800" },
    draft_pending: { label: "Rascunho", cls: "bg-amber-100 text-amber-800" },
    rejected: { label: "Rejeitada", cls: "bg-rose-100 text-rose-800" },
    missing: { label: "Pendente", cls: "bg-slate-100 text-slate-700" },
  }[s];
  return <Badge className={map.cls}>{map.label}</Badge>;
}

function SeedLessonsPage() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [serie, setSerie] = useState<(typeof SERIES)[number]>("1º Ano");
  const [disciplina, setDisciplina] = useState<(typeof DISCIPLINAS)[number]>(
    "Matemática",
  );
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [working, setWorking] = useState<string | null>(null);

  const fnList = useServerFn(listSeedTargets);
  const fnOne = useServerFn(generateLessonDraft);
  const fnBatch = useServerFn(generateLessonBatch);
  const fnApprove = useServerFn(approveLessonDraft);

  useEffect(() => {
    (async () => {
      const { data: auth } = await supabase.auth.getUser();
      if (!auth?.user) return setIsAdmin(false);
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", auth.user.id)
        .eq("role", "admin")
        .maybeSingle();
      setIsAdmin(!!data);
    })();
  }, []);

  async function refresh() {
    setLoading(true);
    try {
      const r = await fnList({ data: { serie, disciplina } });
      if (r.ok) setItems(r.items as Item[]);
      else toast.error(r.error ?? "Falha ao listar");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isAdmin) void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin, serie, disciplina]);

  async function genOne(code: string) {
    setWorking(code);
    try {
      const r = await fnOne({ data: { codigoBncc: code } });
      if (r.ok) toast.success(`Rascunho gerado para ${code}`);
      else toast.error(`${code}: ${("error" in r && r.error) || ("skipped" in r && r.skipped) || "falha"}`);
      await refresh();
    } finally {
      setWorking(null);
    }
  }

  async function genBatch() {
    setWorking("BATCH");
    try {
      const r = await fnBatch({ data: { serie, disciplina, limit: 5 } });
      if (r.ok) {
        const ok = r.results.filter((x: any) => x.ok).length;
        toast.success(`Lote concluído: ${ok}/${r.results.length} ok`);
      } else toast.error(r.error ?? "Falha no lote");
      await refresh();
    } finally {
      setWorking(null);
    }
  }

  async function approve(id: string, code: string) {
    setWorking(code);
    try {
      const r = await fnApprove({ data: { draftId: id } });
      if (r.ok) toast.success(`${code} aprovada e publicada`);
      else toast.error(r.error ?? "Falha ao aprovar");
      await refresh();
    } finally {
      setWorking(null);
    }
  }

  if (isAdmin === null) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-50">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }
  if (!isAdmin) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-50">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center space-y-3">
            <p className="font-bold">Acesso restrito a administradores.</p>
            <Link to="/" className="underline text-sm">
              Voltar ao início
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const counts = items.reduce(
    (acc, it) => {
      acc[it.status]++;
      return acc;
    },
    { approved: 0, draft_pending: 0, rejected: 0, missing: 0 } as Record<
      Item["status"],
      number
    >,
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <Link to="/admin" className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <ArrowLeft className="w-4 h-4" /> Voltar ao admin
          </Link>
          <Badge className="bg-violet-100 text-violet-800">Seed Lessons</Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Gerador de aulas (Groq → drafts)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {SERIES.map((s) => (
                <Button
                  key={s}
                  size="sm"
                  variant={serie === s ? "default" : "outline"}
                  onClick={() => setSerie(s)}
                >
                  {s}
                </Button>
              ))}
              <span className="mx-2 text-slate-400">|</span>
              {DISCIPLINAS.map((d) => (
                <Button
                  key={d}
                  size="sm"
                  variant={disciplina === d ? "default" : "outline"}
                  onClick={() => setDisciplina(d)}
                >
                  {d}
                </Button>
              ))}
            </div>

            <div className="flex gap-2 flex-wrap">
              <Button onClick={refresh} variant="outline" size="sm" disabled={loading}>
                <RefreshCw className={`w-4 h-4 mr-1 ${loading ? "animate-spin" : ""}`} />
                Atualizar
              </Button>
              <Button
                onClick={genBatch}
                disabled={working === "BATCH"}
                size="sm"
              >
                {working === "BATCH" ? (
                  <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4 mr-1" />
                )}
                Gerar lote (5 pendentes)
              </Button>
            </div>

            <div className="text-xs text-slate-600 flex gap-3 flex-wrap">
              <span>Aprovadas: <b>{counts.approved}</b></span>
              <span>Rascunhos: <b>{counts.draft_pending}</b></span>
              <span>Pendentes: <b>{counts.missing}</b></span>
              <span>Rejeitadas: <b>{counts.rejected}</b></span>
              <span>Total: <b>{items.length}</b></span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0 divide-y">
            {items.length === 0 && !loading && (
              <p className="p-6 text-center text-sm text-slate-500">
                Sem aulas para esses filtros.
              </p>
            )}
            {items.map((it) => (
              <div
                key={it.codigo_bncc}
                className="p-3 flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <code className="text-xs font-mono bg-slate-100 px-1.5 py-0.5 rounded">
                      {it.codigo_bncc}
                    </code>
                    {statusBadge(it.status)}
                  </div>
                  <p className="text-sm mt-1 truncate">{it.titulo}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  {it.status === "missing" && (
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={working === it.codigo_bncc}
                      onClick={() => genOne(it.codigo_bncc)}
                    >
                      {working === it.codigo_bncc ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        "Gerar"
                      )}
                    </Button>
                  )}
                  {it.status === "draft_pending" && it.draftId && (
                    <Button
                      size="sm"
                      disabled={working === it.codigo_bncc}
                      onClick={() => approve(it.draftId!, it.codigo_bncc)}
                    >
                      {working === it.codigo_bncc ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <>
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Aprovar
                        </>
                      )}
                    </Button>
                  )}
                  {it.status === "approved" && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
