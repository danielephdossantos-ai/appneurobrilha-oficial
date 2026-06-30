import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/database/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Download, RefreshCw } from "lucide-react";

export const Route = createFileRoute("/admin/producao-biblioteca")({
  component: ProducaoBibliotecaPage,
});

type StatusProducao = "nao_iniciada" | "em_elaboracao" | "em_revisao" | "publicada";

interface Habilidade {
  codigo_bncc: string;
  ano: string | null;
  disciplina: string | null;
  status: StatusProducao;
}

interface Bucket {
  total: number;
  publicada: number;
  em_revisao: number;
  em_elaboracao: number;
  nao_iniciada: number;
}

const STATUS_LABEL: Record<StatusProducao, string> = {
  publicada: "Publicada",
  em_revisao: "Em revisão",
  em_elaboracao: "Em elaboração",
  nao_iniciada: "Não iniciada",
};

const STATUS_COLOR: Record<StatusProducao, string> = {
  publicada: "bg-green-100 text-green-800",
  em_revisao: "bg-amber-100 text-amber-800",
  em_elaboracao: "bg-blue-100 text-blue-800",
  nao_iniciada: "bg-slate-100 text-slate-600",
};

const ANO_DIR: Record<string, string> = {
  "Educação Infantil": "educacao_infantil",
  "1º Ano": "1ano",
  "2º Ano": "2ano",
  "3º Ano": "3ano",
  "4º Ano": "4ano",
  "5º Ano": "5ano",
  "6º Ano": "6ano",
  "7º Ano": "7ano",
  "8º Ano": "8ano",
  "9º Ano": "9ano",
};

const DISC_DIR: Record<string, string> = {
  "Língua Portuguesa": "portugues",
  "Português": "portugues",
  "Matemática": "matematica",
  "Ciências": "ciencias",
  "História": "historia",
  "Geografia": "geografia",
  "Inglês": "ingles",
  "Arte": "arte",
  "Educação Física": "educacao_fisica",
  "Ensino Religioso": "ensino_religioso",
};

// Pré-listagem dos JSONs presentes na biblioteca (build-time).
const BIBLIOTECA_FILES = import.meta.glob("/biblioteca-pedagogica/**/*.json", {
  query: "?url",
  import: "default",
  eager: true,
}) as Record<string, string>;

function fileExistsForCodigo(codigo: string, ano: string | null, disciplina: string | null): boolean {
  const a = ano ? ANO_DIR[ano] : null;
  const d = disciplina ? DISC_DIR[disciplina] : null;
  if (a && d) {
    const key = `/biblioteca-pedagogica/${a}/${d}/${codigo}.json`;
    if (key in BIBLIOTECA_FILES) return true;
  }
  // fallback: busca por sufixo
  const suffix = `/${codigo}.json`;
  return Object.keys(BIBLIOTECA_FILES).some((k) => k.endsWith(suffix));
}

function emptyBucket(): Bucket {
  return { total: 0, publicada: 0, em_revisao: 0, em_elaboracao: 0, nao_iniciada: 0 };
}

function bump(b: Bucket, s: StatusProducao) {
  b.total += 1;
  b[s] += 1;
}

function pct(part: number, total: number): number {
  return total ? Math.round((part / total) * 1000) / 10 : 0;
}

function ProducaoBibliotecaPage() {
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [habilidades, setHabilidades] = useState<Habilidade[]>([]);

  async function carregar() {
    setLoading(true);
    setErro(null);
    try {
      // 1) Habilidades (paginar 1000 em 1000)
      const todas: Array<{ codigo_bncc: string; ano: string | null; disciplina: string | null }> = [];
      for (let from = 0; ; from += 1000) {
        const { data, error } = await supabase
          .from("bncc_habilidades")
          .select("codigo_bncc, ano, disciplina")
          .range(from, from + 999);
        if (error) throw error;
        if (!data?.length) break;
        todas.push(...(data as any));
        if (data.length < 1000) break;
      }

      // 2) Publicadas
      const publicados = new Set<string>();
      for (let from = 0; ; from += 1000) {
        const { data, error } = await supabase
          .from("lesson_content")
          .select("codigo_bncc")
          .range(from, from + 999);
        if (error) throw error;
        if (!data?.length) break;
        for (const r of data as any[]) if (r.codigo_bncc) publicados.add(r.codigo_bncc);
        if (data.length < 1000) break;
      }

      // 3) Drafts (status -> conjunto)
      const draftStatus = new Map<string, Set<string>>();
      for (let from = 0; ; from += 1000) {
        const { data, error } = await supabase
          .from("lesson_drafts")
          .select("codigo_bncc, status")
          .range(from, from + 999);
        if (error) throw error;
        if (!data?.length) break;
        for (const r of data as any[]) {
          if (!r.codigo_bncc) continue;
          const s = draftStatus.get(r.codigo_bncc) ?? new Set<string>();
          s.add(r.status);
          draftStatus.set(r.codigo_bncc, s);
        }
        if (data.length < 1000) break;
      }

      const result: Habilidade[] = todas.map((h) => {
        let status: StatusProducao = "nao_iniciada";
        const statuses = draftStatus.get(h.codigo_bncc);
        if (publicados.has(h.codigo_bncc)) status = "publicada";
        else if (statuses?.has("pending")) status = "em_revisao";
        else if (statuses && statuses.size > 0) status = "em_elaboracao";
        else if (fileExistsForCodigo(h.codigo_bncc, h.ano, h.disciplina)) status = "em_elaboracao";
        return { ...h, status };
      });

      setHabilidades(result);
    } catch (e: any) {
      setErro(e?.message ?? String(e));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  const { totalBucket, porDisciplina, porAno } = useMemo(() => {
    const tot = emptyBucket();
    const pd = new Map<string, Bucket>();
    const pa = new Map<string, Bucket>();
    for (const h of habilidades) {
      bump(tot, h.status);
      const d = h.disciplina ?? "—";
      const a = h.ano ?? "—";
      const bd = pd.get(d) ?? emptyBucket();
      const ba = pa.get(a) ?? emptyBucket();
      bump(bd, h.status);
      bump(ba, h.status);
      pd.set(d, bd);
      pa.set(a, ba);
    }
    return {
      totalBucket: tot,
      porDisciplina: [...pd.entries()].sort(([a], [b]) => a.localeCompare(b, "pt-BR")),
      porAno: [...pa.entries()].sort(([a], [b]) => a.localeCompare(b, "pt-BR")),
    };
  }, [habilidades]);

  function baixarCSV() {
    const header = ["codigo_bncc", "ano", "disciplina", "status"];
    const lines = [header.join(",")];
    for (const h of habilidades) {
      lines.push([h.codigo_bncc, h.ano ?? "", h.disciplina ?? "", h.status].map(csv).join(","));
    }
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `producao-biblioteca-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/admin">
              <Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Produção da Biblioteca Pedagógica</h1>
              <p className="text-sm text-slate-500">
                Acompanhamento por habilidade BNCC — apenas relatório administrativo.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={carregar} disabled={loading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} /> Atualizar
            </Button>
            <Button onClick={baixarCSV} disabled={!habilidades.length}>
              <Download className="h-4 w-4 mr-2" /> Baixar CSV
            </Button>
          </div>
        </div>

        {erro && (
          <Card className="border-red-300 bg-red-50">
            <CardContent className="pt-6 text-red-700 text-sm">{erro}</CardContent>
          </Card>
        )}

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <KPI label="Total BNCC" value={totalBucket.total} />
          <KPI label="Publicada" value={totalBucket.publicada} color="text-green-700" />
          <KPI label="Em revisão" value={totalBucket.em_revisao} color="text-amber-700" />
          <KPI label="Em elaboração" value={totalBucket.em_elaboracao} color="text-blue-700" />
          <KPI label="Não iniciada" value={totalBucket.nao_iniciada} color="text-slate-600" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Cobertura geral da BNCC</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Publicadas</span>
              <span className="font-medium">
                {totalBucket.publicada} / {totalBucket.total} ({pct(totalBucket.publicada, totalBucket.total)}%)
              </span>
            </div>
            <Progress value={pct(totalBucket.publicada, totalBucket.total)} />
          </CardContent>
        </Card>

        <CoverageTable title="Cobertura por disciplina" rows={porDisciplina} />
        <CoverageTable title="Cobertura por ano" rows={porAno} />
      </div>
    </div>
  );
}

function KPI({ label, value, color = "text-slate-900" }: { label: string; value: number; color?: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-xs uppercase text-slate-500">{label}</p>
        <p className={`text-2xl font-bold ${color}`}>{value.toLocaleString("pt-BR")}</p>
      </CardContent>
    </Card>
  );
}

function CoverageTable({ title, rows }: { title: string; rows: Array<[string, Bucket]> }) {
  return (
    <Card>
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500 border-b">
              <th className="py-2 pr-3">Segmento</th>
              <th className="py-2 pr-3">Total</th>
              <th className="py-2 pr-3">Publicada</th>
              <th className="py-2 pr-3">Em revisão</th>
              <th className="py-2 pr-3">Em elaboração</th>
              <th className="py-2 pr-3">Não iniciada</th>
              <th className="py-2 pr-3">Cobertura</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, b]) => {
              const p = pct(b.publicada, b.total);
              return (
                <tr key={label} className="border-b last:border-0">
                  <td className="py-2 pr-3 font-medium">{label}</td>
                  <td className="py-2 pr-3">{b.total}</td>
                  <td className="py-2 pr-3"><Badge className={STATUS_COLOR.publicada}>{b.publicada}</Badge></td>
                  <td className="py-2 pr-3"><Badge className={STATUS_COLOR.em_revisao}>{b.em_revisao}</Badge></td>
                  <td className="py-2 pr-3"><Badge className={STATUS_COLOR.em_elaboracao}>{b.em_elaboracao}</Badge></td>
                  <td className="py-2 pr-3"><Badge className={STATUS_COLOR.nao_iniciada}>{b.nao_iniciada}</Badge></td>
                  <td className="py-2 pr-3 w-48">
                    <div className="flex items-center gap-2">
                      <Progress value={p} className="flex-1" />
                      <span className="text-xs text-slate-600 w-12 text-right">{p}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
            {!rows.length && (
              <tr><td colSpan={7} className="py-6 text-center text-slate-400">Sem dados.</td></tr>
            )}
          </tbody>
        </table>
        <p className="text-xs text-slate-400 mt-3">
          Legenda de status: {Object.entries(STATUS_LABEL).map(([k, v]) => `${v}`).join(" · ")}.
        </p>
      </CardContent>
    </Card>
  );
}

function csv(v: string): string {
  if (v == null) return "";
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}
