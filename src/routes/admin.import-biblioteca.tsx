import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/database/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { ArrowLeft, FolderTree, PlayCircle, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/admin/import-biblioteca")({
  component: ImportBibliotecaPage,
});

// Embute todos os JSON da biblioteca-pedagogica no bundle (build-time).
const RAW_FILES = import.meta.glob("/biblioteca-pedagogica/**/*.json", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const BNCC_REGEX = /^(EI|EF|EM)[0-9A-Z]{2,}$/i;
const BATCH_SIZE = 50;

type Result = {
  arquivo: string;
  codigo: string;
  status: "ok" | "ignorado" | "erro";
  motivo: string;
};

function validate(codigo: string, payload: any): string | null {
  if (!payload || typeof payload !== "object") return "JSON inválido.";
  if (payload.codigo_bncc && String(payload.codigo_bncc).toUpperCase() !== codigo)
    return `codigo_bncc (${payload.codigo_bncc}) ≠ nome do arquivo (${codigo}).`;
  for (const f of ["titulo", "objetivo", "introducao", "explicacao"]) {
    if (!payload[f] || typeof payload[f] !== "string") return `Campo obrigatório ausente: ${f}.`;
  }
  return null;
}

function ImportBibliotecaPage() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [results, setResults] = useState<Result[]>([]);

  const totalArquivos = useMemo(() => Object.keys(RAW_FILES).length, []);

  useEffect(() => {
    (async () => {
      const { data: auth } = await supabase.auth.getUser();
      const uid = auth?.user?.id;
      if (!uid) return setIsAdmin(false);
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", uid)
        .eq("role", "admin")
        .maybeSingle();
      setIsAdmin(!!data);
    })();
  }, []);

  async function runImport() {
    setRunning(true);
    setResults([]);
    const { data: auth } = await supabase.auth.getUser();
    const uid = auth?.user?.id ?? null;

    const paths = Object.keys(RAW_FILES);
    setProgress({ done: 0, total: paths.length });
    const out: Result[] = [];

    // 1. Snapshot dos códigos com draft pendente (evita N queries).
    const { data: pendentes } = await supabase
      .from("lesson_drafts")
      .select("codigo_bncc")
      .eq("status", "pending");
    const pendingSet = new Set((pendentes ?? []).map((r) => r.codigo_bncc.toUpperCase()));

    // 2. Parse + validação local.
    type Prepared = { arquivo: string; codigo: string; payload: any };
    const ready: Prepared[] = [];

    for (const path of paths) {
      const arquivo = path.split("/").pop() ?? path;
      const codigo = arquivo.replace(/\.json$/i, "").toUpperCase();

      if (!BNCC_REGEX.test(codigo)) {
        out.push({ arquivo, codigo, status: "erro", motivo: "Nome de arquivo fora do padrão BNCC." });
        continue;
      }

      let payload: any;
      try { payload = JSON.parse(RAW_FILES[path]); }
      catch (e: any) {
        out.push({ arquivo, codigo, status: "erro", motivo: "JSON inválido: " + e.message });
        continue;
      }

      const err = validate(codigo, payload);
      if (err) { out.push({ arquivo, codigo, status: "erro", motivo: err }); continue; }

      if (pendingSet.has(codigo)) {
        out.push({ arquivo, codigo, status: "ignorado", motivo: "Já existe draft pendente." });
        continue;
      }

      ready.push({ arquivo, codigo, payload });
    }

    setResults([...out]);
    setProgress({ done: paths.length - ready.length, total: paths.length });

    // 3. Inserts em lote.
    for (let i = 0; i < ready.length; i += BATCH_SIZE) {
      const batch = ready.slice(i, i + BATCH_SIZE);
      const rows = batch.map(({ codigo, payload, arquivo }) => ({
        codigo_bncc: codigo,
        ano: payload.ano ?? null,
        disciplina: payload.disciplina ?? null,
        titulo: payload.titulo,
        payload,
        status: "pending" as const,
        generated_by: uid,
        notes: `Importação em lote · ${arquivo}`,
      }));

      const { error } = await supabase.from("lesson_drafts").insert(rows);

      if (error) {
        // Fallback linha a linha para isolar a falha sem perder o lote.
        for (const item of batch) {
          const { error: e2 } = await supabase.from("lesson_drafts").insert({
            codigo_bncc: item.codigo,
            ano: item.payload.ano ?? null,
            disciplina: item.payload.disciplina ?? null,
            titulo: item.payload.titulo,
            payload: item.payload,
            status: "pending",
            generated_by: uid,
            notes: `Importação em lote · ${item.arquivo}`,
          });
          out.push(
            e2
              ? { arquivo: item.arquivo, codigo: item.codigo, status: "erro", motivo: e2.message }
              : { arquivo: item.arquivo, codigo: item.codigo, status: "ok", motivo: "Draft criado." }
          );
        }
      } else {
        for (const item of batch) {
          out.push({ arquivo: item.arquivo, codigo: item.codigo, status: "ok", motivo: "Draft criado." });
        }
      }

      setResults([...out]);
      setProgress({ done: paths.length - ready.length + Math.min(i + BATCH_SIZE, ready.length), total: paths.length });
    }

    const ok = out.filter((r) => r.status === "ok").length;
    const ig = out.filter((r) => r.status === "ignorado").length;
    const er = out.filter((r) => r.status === "erro").length;
    toast.success(`Concluído: ${ok} importados · ${ig} ignorados · ${er} erros`);
    setRunning(false);
  }

  function downloadReport() {
    const ok = results.filter((r) => r.status === "ok");
    const ig = results.filter((r) => r.status === "ignorado");
    const er = results.filter((r) => r.status === "erro");
    const report = {
      gerado_em: new Date().toISOString(),
      total_arquivos: results.length,
      importados: ok.length,
      ignorados: ig.length,
      erros: er.length,
      codigos_processados: Array.from(new Set(ok.map((r) => r.codigo))).sort(),
      detalhes_erros: er,
      detalhes_ignorados: ig,
    };
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `relatorio-importacao-${Date.now()}.json`; a.click();
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

  const counts = {
    ok: results.filter((r) => r.status === "ok").length,
    ig: results.filter((r) => r.status === "ignorado").length,
    er: results.filter((r) => r.status === "erro").length,
  };

  return (
    <div className="container mx-auto max-w-4xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Link to="/admin"><Button variant="ghost" size="sm"><ArrowLeft className="size-4 mr-2" />Admin</Button></Link>
        <div className="flex gap-2 text-sm">
          <Badge variant="default">{counts.ok} importados</Badge>
          <Badge variant="secondary">{counts.ig} ignorados</Badge>
          <Badge variant="destructive">{counts.er} erros</Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><FolderTree className="size-5" />Importação em lote · biblioteca-pedagogica</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Varre <code>/biblioteca-pedagogica/**/*.json</code> e cria um draft em <code>lesson_drafts</code> para cada habilidade BNCC.
            Arquivos inválidos ou com draft pendente são ignorados. <strong>Nenhuma aula é publicada automaticamente.</strong>
          </p>

          <div className="flex items-center justify-between rounded-lg border p-3 text-sm">
            <span><strong>{totalArquivos}</strong> arquivos detectados na biblioteca.</span>
            {totalArquivos === 0 && (
              <span className="flex items-center gap-1 text-amber-600"><AlertTriangle className="size-4" />Adicione arquivos em <code>/biblioteca-pedagogica/&lt;ano&gt;/&lt;disciplina&gt;/CODIGO.json</code>.</span>
            )}
          </div>

          <div className="flex gap-2">
            <Button onClick={runImport} disabled={running || totalArquivos === 0}>
              <PlayCircle className="size-4 mr-2" />
              {running ? `Importando... ${progress.done}/${progress.total}` : "Iniciar importação"}
            </Button>
            <Button variant="outline" onClick={downloadReport} disabled={results.length === 0}>
              Baixar relatório (.json)
            </Button>
          </div>

          {results.length > 0 && (
            <div className="border rounded-lg divide-y max-h-[480px] overflow-auto">
              {results.slice(-200).reverse().map((r, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2 text-sm">
                  {r.status === "ok" && <CheckCircle2 className="size-4 text-green-600 mt-0.5" />}
                  {r.status === "ignorado" && <AlertTriangle className="size-4 text-amber-500 mt-0.5" />}
                  {r.status === "erro" && <XCircle className="size-4 text-red-600 mt-0.5" />}
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-xs text-muted-foreground truncate">{r.arquivo}</div>
                    <div className="truncate">{r.motivo}</div>
                  </div>
                  <Badge variant="outline" className="font-mono">{r.codigo}</Badge>
                </div>
              ))}
              {results.length > 200 && (
                <div className="p-2 text-center text-xs text-muted-foreground">
                  Mostrando últimas 200 linhas. Use "Baixar relatório" para o conjunto completo.
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
