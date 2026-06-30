import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/database/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { ArrowLeft, PlayCircle, CheckCircle2, XCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/admin/publish-batch")({
  component: PublishBatchPage,
});

const CHILD_TABLES = [
  "lesson_examples",
  "lesson_curiosities",
  "lesson_quizzes",
  "lesson_challenges",
  "lesson_assessments",
  "lesson_adaptations",
  "lesson_explanations",
  "lesson_reviews_full",
] as const;

type Row = {
  draftId: string;
  codigo: string;
  status: "ok" | "erro" | "pendente";
  lessonId?: string | null;
  tempoMs: number;
  motivo: string;
  tabelas: Record<string, number>;
};

function PublishBatchPage() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [pendingCount, setPendingCount] = useState<number | null>(null);
  const [running, setRunning] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [totalMs, setTotalMs] = useState(0);

  useEffect(() => {
    (async () => {
      const { data: auth } = await supabase.auth.getUser();
      const uid = auth?.user?.id;
      if (!uid) return setIsAdmin(false);
      const { data } = await supabase
        .from("user_roles").select("role").eq("user_id", uid).eq("role", "admin").maybeSingle();
      setIsAdmin(!!data);
      const { count } = await supabase
        .from("lesson_drafts").select("id", { count: "exact", head: true }).eq("status", "pending");
      setPendingCount(count ?? 0);
    })();
  }, []);

  async function auditTables(codigo: string): Promise<Record<string, number>> {
    const result: Record<string, number> = {};
    await Promise.all(
      CHILD_TABLES.map(async (t) => {
        const { count } = await supabase
          .from(t as any).select("codigo_bncc", { count: "exact", head: true }).eq("codigo_bncc", codigo);
        result[t] = count ?? 0;
      })
    );
    return result;
  }

  async function run() {
    setRunning(true);
    setRows([]);
    setTotalMs(0);
    const t0 = performance.now();

    const { data: drafts, error } = await supabase
      .from("lesson_drafts")
      .select("id, codigo_bncc")
      .eq("status", "pending")
      .order("created_at", { ascending: true });

    if (error) {
      toast.error("Erro carregando drafts: " + error.message);
      setRunning(false);
      return;
    }

    const out: Row[] = [];

    for (const d of drafts ?? []) {
      const t1 = performance.now();
      const { data: lessonId, error: rpcErr } = await supabase.rpc("approve_lesson_draft", { _draft_id: d.id });
      const tempoMs = Math.round(performance.now() - t1);

      if (rpcErr) {
        out.push({
          draftId: d.id,
          codigo: d.codigo_bncc,
          status: "erro",
          tempoMs,
          motivo: rpcErr.message,
          tabelas: {},
        });
      } else {
        const tabelas = await auditTables(d.codigo_bncc);
        out.push({
          draftId: d.id,
          codigo: d.codigo_bncc,
          status: "ok",
          lessonId: lessonId as any,
          tempoMs,
          motivo: "Publicada.",
          tabelas,
        });
      }
      setRows([...out]);
    }

    const elapsed = Math.round(performance.now() - t0);
    setTotalMs(elapsed);

    const { count: stillPending } = await supabase
      .from("lesson_drafts").select("id", { count: "exact", head: true }).eq("status", "pending");
    setPendingCount(stillPending ?? 0);

    const ok = out.filter((r) => r.status === "ok").length;
    const er = out.filter((r) => r.status === "erro").length;
    toast.success(`Publicação concluída: ${ok} publicadas · ${er} rejeitadas · ${(elapsed / 1000).toFixed(1)}s`);
    setRunning(false);
  }

  function downloadReport() {
    const ok = rows.filter((r) => r.status === "ok");
    const er = rows.filter((r) => r.status === "erro");
    const report = {
      gerado_em: new Date().toISOString(),
      tempo_total_ms: totalMs,
      tempo_total_segundos: +(totalMs / 1000).toFixed(2),
      publicadas: ok.length,
      rejeitadas: er.length,
      pendentes_restantes: pendingCount ?? 0,
      detalhes: rows,
    };
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `relatorio-publicacao-${Date.now()}.json`; a.click();
    URL.revokeObjectURL(url);
  }

  if (isAdmin === null) return <div className="p-8 text-center text-muted-foreground">Verificando permissões...</div>;
  if (!isAdmin)
    return (
      <div className="p-8 text-center">
        <p className="mb-4">Acesso restrito a administradores.</p>
        <Link to="/"><Button variant="outline">Voltar</Button></Link>
      </div>
    );

  const ok = rows.filter((r) => r.status === "ok").length;
  const er = rows.filter((r) => r.status === "erro").length;

  return (
    <div className="container mx-auto max-w-4xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Link to="/admin"><Button variant="ghost" size="sm"><ArrowLeft className="size-4 mr-2" />Admin</Button></Link>
        <div className="flex gap-2 text-sm">
          <Badge variant="default">{ok} publicadas</Badge>
          <Badge variant="destructive">{er} rejeitadas</Badge>
          <Badge variant="secondary">{pendingCount ?? "…"} pendentes</Badge>
          {totalMs > 0 && <Badge variant="outline"><Clock className="size-3 mr-1" />{(totalMs / 1000).toFixed(1)}s</Badge>}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><PlayCircle className="size-5" />Publicador em lote</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Executa <code>approve_lesson_draft()</code> para cada draft com status <strong>pendente</strong>.
            Erros não interrompem o lote — cada aula é processada individualmente.
          </p>

          <div className="flex gap-2">
            <Button onClick={run} disabled={running || !pendingCount}>
              <PlayCircle className="size-4 mr-2" />
              {running ? `Publicando... ${rows.length}` : `Publicar ${pendingCount ?? 0} drafts pendentes`}
            </Button>
            <Button variant="outline" onClick={downloadReport} disabled={rows.length === 0}>
              Baixar relatório (.json)
            </Button>
          </div>

          {rows.length > 0 && (
            <div className="border rounded-lg divide-y max-h-[520px] overflow-auto">
              {rows.slice().reverse().map((r) => (
                <div key={r.draftId} className="p-3 text-sm space-y-1">
                  <div className="flex items-start gap-2">
                    {r.status === "ok"
                      ? <CheckCircle2 className="size-4 text-green-600 mt-0.5" />
                      : <XCircle className="size-4 text-red-600 mt-0.5" />}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-mono">{r.codigo}</Badge>
                        <span className="text-xs text-muted-foreground">{r.tempoMs} ms</span>
                      </div>
                      <div className="truncate">{r.motivo}</div>
                      {r.status === "ok" && (
                        <div className="mt-1 flex flex-wrap gap-1 text-xs">
                          {Object.entries(r.tabelas).map(([t, n]) => (
                            <span
                              key={t}
                              className={`px-1.5 py-0.5 rounded font-mono ${n > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                              title={t}
                            >
                              {t.replace("lesson_", "")}: {n}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
