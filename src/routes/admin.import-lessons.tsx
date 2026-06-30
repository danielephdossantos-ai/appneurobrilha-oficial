import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/database/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { ArrowLeft, Upload, CheckCircle2, XCircle, FileJson } from "lucide-react";

export const Route = createFileRoute("/admin/import-lessons")({
  component: ImportLessonsPage,
});

const BNCC_REGEX = /^(EI|EF|EM)[0-9A-Z]{2,}$/i;

type ItemStatus = "pending" | "ok" | "skipped" | "error";

type Item = {
  file: string;
  codigo: string;
  status: ItemStatus;
  message: string;
};

function ImportLessonsPage() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [running, setRunning] = useState(false);

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

  function validatePayload(codigo: string, payload: any): string | null {
    if (!payload || typeof payload !== "object") return "JSON inválido (raiz não é objeto).";
    if (payload.codigo_bncc && String(payload.codigo_bncc).toUpperCase() !== codigo.toUpperCase())
      return `codigo_bncc no JSON (${payload.codigo_bncc}) ≠ nome do arquivo (${codigo}).`;
    if (!payload.titulo || typeof payload.titulo !== "string") return "Campo obrigatório ausente: titulo.";
    if (!payload.objetivo || typeof payload.objetivo !== "string") return "Campo obrigatório ausente: objetivo.";
    if (!payload.explicacao || typeof payload.explicacao !== "string") return "Campo obrigatório ausente: explicacao.";
    if (!payload.introducao || typeof payload.introducao !== "string") return "Campo obrigatório ausente: introducao.";
    return null;
  }

  async function handleFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;
    setRunning(true);
    const initial: Item[] = Array.from(fileList).map((f) => ({
      file: f.name,
      codigo: f.name.replace(/\.json$/i, "").toUpperCase(),
      status: "pending",
      message: "Aguardando...",
    }));
    setItems(initial);

    const { data: auth } = await supabase.auth.getUser();
    const uid = auth?.user?.id ?? null;

    const updates: Item[] = [...initial];
    const files = Array.from(fileList);

    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      const codigo = f.name.replace(/\.json$/i, "").toUpperCase();

      if (!/\.json$/i.test(f.name) || !BNCC_REGEX.test(codigo)) {
        updates[i] = { ...updates[i], status: "error", message: "Nome de arquivo inválido. Use <CODIGO_BNCC>.json (ex: EF01MA01.json)." };
        setItems([...updates]);
        continue;
      }

      let payload: any;
      try {
        payload = JSON.parse(await f.text());
      } catch (e: any) {
        updates[i] = { ...updates[i], status: "error", message: "JSON inválido: " + e.message };
        setItems([...updates]);
        continue;
      }

      const err = validatePayload(codigo, payload);
      if (err) {
        updates[i] = { ...updates[i], status: "error", message: err };
        setItems([...updates]);
        continue;
      }

      // Já existe draft pendente?
      const { data: existing } = await supabase
        .from("lesson_drafts")
        .select("id")
        .eq("codigo_bncc", codigo)
        .eq("status", "pending")
        .maybeSingle();

      if (existing) {
        updates[i] = { ...updates[i], status: "skipped", message: "Já existe draft pendente para este código." };
        setItems([...updates]);
        continue;
      }

      const { error } = await supabase.from("lesson_drafts").insert({
        codigo_bncc: codigo,
        ano: payload.ano ?? null,
        disciplina: payload.disciplina ?? null,
        titulo: payload.titulo,
        payload,
        status: "pending",
        generated_by: uid,
        notes: `Import via arquivo ${f.name}`,
      });

      if (error) {
        updates[i] = { ...updates[i], status: "error", message: error.message };
      } else {
        updates[i] = { ...updates[i], status: "ok", message: "Draft criado (pendente)." };
      }
      setItems([...updates]);
    }

    setRunning(false);
    const ok = updates.filter((u) => u.status === "ok").length;
    const sk = updates.filter((u) => u.status === "skipped").length;
    const er = updates.filter((u) => u.status === "error").length;
    toast.success(`Importação concluída: ${ok} criados · ${sk} ignorados · ${er} erros`);
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
    ok: items.filter((i) => i.status === "ok").length,
    skipped: items.filter((i) => i.status === "skipped").length,
    error: items.filter((i) => i.status === "error").length,
  };

  return (
    <div className="container mx-auto max-w-4xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Link to="/admin"><Button variant="ghost" size="sm"><ArrowLeft className="size-4 mr-2" />Admin</Button></Link>
        <div className="flex gap-2 text-sm">
          <Badge variant="default">{counts.ok} criados</Badge>
          <Badge variant="secondary">{counts.skipped} ignorados</Badge>
          <Badge variant="destructive">{counts.error} erros</Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><FileJson className="size-5" />Importar aulas (JSON)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Cada arquivo deve representar <strong>uma habilidade BNCC</strong> e ser nomeado <code>CODIGO.json</code> (ex.: <code>EF01MA01.json</code>, <code>EI03EO02.json</code>).
            Os arquivos válidos são inseridos em <code>lesson_drafts</code> com status <strong>pendente</strong>. Nenhuma aula é publicada automaticamente.
          </p>

          <label className="block">
            <input
              type="file"
              accept=".json,application/json"
              multiple
              disabled={running}
              onChange={(e) => handleFiles(e.target.files)}
              className="hidden"
              id="lesson-files"
            />
            <Button asChild disabled={running}>
              <span className="cursor-pointer inline-flex items-center gap-2">
                <Upload className="size-4" />
                {running ? "Importando..." : "Selecionar arquivos .json"}
                <label htmlFor="lesson-files" className="absolute inset-0 cursor-pointer" />
              </span>
            </Button>
          </label>

          {items.length > 0 && (
            <div className="border rounded-lg divide-y max-h-[480px] overflow-auto">
              {items.map((it, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 text-sm">
                  {it.status === "ok" && <CheckCircle2 className="size-4 text-green-600 mt-0.5" />}
                  {it.status === "skipped" && <CheckCircle2 className="size-4 text-amber-500 mt-0.5" />}
                  {it.status === "error" && <XCircle className="size-4 text-red-600 mt-0.5" />}
                  {it.status === "pending" && <div className="size-4 mt-0.5 rounded-full border-2 border-muted-foreground/30 border-t-foreground animate-spin" />}
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-xs text-muted-foreground">{it.file}</div>
                    <div className="truncate">{it.message}</div>
                  </div>
                  <Badge variant="outline" className="font-mono">{it.codigo}</Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
