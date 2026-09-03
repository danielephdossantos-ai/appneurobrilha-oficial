import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/database/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Check, ClipboardCopy, Download, GraduationCap, KeyRound, RefreshCw, UserRoundX } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/professores")({ component: AdminProfessoresPage });

type CodeKind = "teacher" | "child";
type GeneratedCode = { code: string; expires_at: string; batch_id: string };
type TeacherAccount = {
  user_id: string;
  email: string | null;
  display_name: string | null;
  school_name: string | null;
  professional_id: string | null;
  status: "active" | "suspended" | "expired";
  access_source: "code" | "admin_code" | "referral" | "paid";
  access_expires_at: string;
  active_paid_students: number;
  reached_four: boolean;
  benefit_status: "pending" | "active" | "inactive";
};

const sourceLabel: Record<TeacherAccount["access_source"], string> = {
  code: "Código inicial", admin_code: "Cortesia administrativa", referral: "4 alunos pagantes", paid: "Assinatura",
};

function AdminProfessoresPage() {
  const [kind, setKind] = useState<CodeKind>("teacher");
  const [quantity, setQuantity] = useState(1);
  const [durationDays, setDurationDays] = useState(365);
  const [generating, setGenerating] = useState(false);
  const [codes, setCodes] = useState<GeneratedCode[]>([]);
  const [teachers, setTeachers] = useState<TeacherAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [changing, setChanging] = useState<string | null>(null);

  const loadTeachers = useCallback(async () => {
    setLoading(true);
    const { data, error } = await (supabase as any).rpc("admin_list_teacher_accounts");
    if (error) toast.error("Não foi possível carregar os professores: " + error.message);
    else setTeachers((data ?? []) as TeacherAccount[]);
    setLoading(false);
  }, []);

  useEffect(() => { void loadTeachers(); }, [loadTeachers]);

  const generateCodes = async () => {
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 500) {
      toast.error("Escolha uma quantidade entre 1 e 500."); return;
    }
    if (!Number.isInteger(durationDays) || durationDays < 1 || durationDays > 730) {
      toast.error("A validade do acesso deve ficar entre 1 e 730 dias."); return;
    }
    setGenerating(true); setCodes([]);
    const functionName = kind === "teacher" ? "admin_generate_teacher_free_codes" : "admin_generate_child_free_codes";
    const { data, error } = await (supabase as any).rpc(functionName, {
      code_count: quantity, duration_days: durationDays,
    });
    setGenerating(false);
    if (error) { toast.error("Falha ao gerar códigos: " + error.message); return; }
    setCodes((data ?? []) as GeneratedCode[]);
    toast.success(`${quantity} código(s) gerado(s). Salve este lote agora.`);
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(codes.map((item) => item.code).join("\n"));
    toast.success("Todos os códigos foram copiados.");
  };

  const downloadCodes = () => {
    const content = codes.map((item) => item.code).join("\n");
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `codigos-neurobrilha-${kind}-${new Date().toISOString().slice(0, 10)}.txt`;
    anchor.click(); URL.revokeObjectURL(url);
  };

  const changeAccess = async (teacher: TeacherAccount, action: "suspend" | "renew") => {
    const verb = action === "suspend" ? "suspender" : `renovar por ${durationDays} dias`;
    if (!window.confirm(`Confirma ${verb} o acesso de ${teacher.display_name || teacher.email || "este professor"}?`)) return;
    setChanging(teacher.user_id);
    const { error } = await (supabase as any).rpc("admin_set_teacher_access", {
      target_user_id: teacher.user_id, requested_action: action, duration_days: durationDays,
    });
    setChanging(null);
    if (error) { toast.error("Não foi possível alterar o acesso: " + error.message); return; }
    toast.success(action === "suspend" ? "Acesso suspenso." : "Acesso renovado.");
    await loadTeachers();
  };

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="space-y-2">
          <Link to="/admin" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"><ArrowLeft className="h-4 w-4" /> Voltar ao painel</Link>
          <h1 className="flex items-center gap-3 text-2xl font-black md:text-3xl"><GraduationCap className="h-8 w-8 text-indigo-600" /> Professores e acessos gratuitos</h1>
          <p className="text-sm text-muted-foreground">Gere cortesias e controle acessos. Códigos gratuitos de aluno não contam para a meta de 4 pagantes.</p>
        </header>

        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><KeyRound className="h-5 w-5" /> Gerar novo lote</CardTitle></CardHeader>
          <CardContent className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <Button className="min-h-12" variant={kind === "teacher" ? "default" : "outline"} onClick={() => { setKind("teacher"); setCodes([]); }}>Código gratuito para professor</Button>
              <Button className="min-h-12" variant={kind === "child" ? "default" : "outline"} onClick={() => { setKind("child"); setCodes([]); }}>Código gratuito para aluno</Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-bold">Quantidade (máximo 500)<Input type="number" min={1} max={500} value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} /></label>
              <label className="space-y-2 text-sm font-bold">Duração do acesso
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={durationDays} onChange={(event) => setDurationDays(Number(event.target.value))}>
                  <option value={30}>30 dias</option><option value={90}>90 dias</option><option value={180}>180 dias</option><option value={365}>1 ano</option><option value={730}>2 anos</option>
                </select>
              </label>
            </div>
            <Button className="min-h-12" onClick={generateCodes} disabled={generating}>{generating ? "Gerando com segurança..." : "Gerar códigos"}</Button>

            {codes.length > 0 && <section className="space-y-3 rounded-xl border border-amber-300 bg-amber-50 p-4">
              <p className="font-bold text-amber-950">Salve agora: por segurança, os códigos legíveis não poderão ser consultados novamente.</p>
              <div className="flex flex-wrap gap-2"><Button variant="outline" onClick={copyAll}><ClipboardCopy className="mr-2 h-4 w-4" /> Copiar todos</Button><Button variant="outline" onClick={downloadCodes}><Download className="mr-2 h-4 w-4" /> Baixar TXT</Button></div>
              <div className="max-h-64 overflow-auto rounded-lg bg-white p-3 font-mono text-sm">{codes.map((item) => <div key={item.code} className="border-b py-2 last:border-0">{item.code}</div>)}</div>
            </section>}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="flex items-center justify-between gap-3"><span>Contas de professor</span><Button size="sm" variant="outline" onClick={loadTeachers} disabled={loading}><RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} /> Atualizar</Button></CardTitle></CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader><TableRow><TableHead>Professor</TableHead><TableHead>Acesso</TableHead><TableHead>Alunos pagantes</TableHead><TableHead>Validade</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
                <TableBody>
                  {!loading && teachers.length === 0 && <TableRow><TableCell colSpan={5} className="py-10 text-center text-muted-foreground">Nenhuma conta de professor cadastrada.</TableCell></TableRow>}
                  {teachers.map((teacher) => <TableRow key={teacher.user_id}>
                    <TableCell><div className="font-bold">{teacher.display_name || "Nome não informado"}</div><div className="text-xs text-muted-foreground">{teacher.email || teacher.user_id}</div>{teacher.school_name && <div className="text-xs">{teacher.school_name}</div>}</TableCell>
                    <TableCell><Badge variant={teacher.status === "active" ? "default" : "destructive"}>{teacher.status === "active" ? "Ativo" : teacher.status === "suspended" ? "Suspenso" : "Expirado"}</Badge><div className="mt-1 text-xs text-muted-foreground">{sourceLabel[teacher.access_source]}</div></TableCell>
                    <TableCell><div className="font-bold">{teacher.active_paid_students} {teacher.reached_four && <Check className="ml-1 inline h-4 w-4 text-emerald-600" />}</div><div className="text-xs text-muted-foreground">{teacher.reached_four ? "Meta de 4 já alcançada" : "Meta ainda não alcançada"}</div></TableCell>
                    <TableCell className="whitespace-nowrap">{new Date(teacher.access_expires_at).toLocaleDateString("pt-BR")}</TableCell>
                    <TableCell><div className="flex justify-end gap-2"><Button size="sm" variant="outline" disabled={changing === teacher.user_id} onClick={() => changeAccess(teacher, "renew")}><RefreshCw className="mr-1 h-4 w-4" /> Renovar</Button>{teacher.status !== "suspended" && <Button size="sm" variant="destructive" disabled={changing === teacher.user_id} onClick={() => changeAccess(teacher, "suspend")}><UserRoundX className="mr-1 h-4 w-4" /> Suspender</Button>}</div></TableCell>
                  </TableRow>)}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

