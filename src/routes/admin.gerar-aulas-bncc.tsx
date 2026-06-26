import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { gerarAulasBncc } from "@/lib/gerar-aulas-bncc.functions";
import { BNCC_SKILLS } from "@/engines/pedagogical-engine/bncc";

export const Route = createFileRoute("/admin/gerar-aulas-bncc")({
  component: Page,
});

const PILOTO = ["EF06LP06", "EF06MA11", "EF06CI06", "EF06HI06", "EF06GE06"];

type ResultRow = { code: string; ok: boolean; titulo?: string; motivo?: string };

function buildDescMap(codes: string[]): Record<string, string> {
  const out: Record<string, string> = {};
  for (const c of codes) {
    const s = BNCC_SKILLS.find((x) => x.code === c);
    if (s) out[c] = s.description;
  }
  return out;
}

function allSixthGradeCodes(): string[] {
  return BNCC_SKILLS.filter((s) => s.level === 6).map((s) => s.code);
}

function Page() {
  const [running, setRunning] = useState(false);
  const [rows, setRows] = useState<ResultRow[]>([]);
  const [log, setLog] = useState<string>("");

  async function runBatch(codes: string[]) {
    setRunning(true);
    setRows([]);
    setLog(`Gerando ${codes.length} aula(s)…`);
    const acc: ResultRow[] = [];
    // chunks de 5 (respeita o limite do server fn)
    for (let i = 0; i < codes.length; i += 5) {
      const chunk = codes.slice(i, i + 5);
      const descs = buildDescMap(chunk);
      try {
        const res = await gerarAulasBncc({
          data: { codes: chunk, description_by_code: descs },
        });
        if (!res.ok) {
          setLog(`Falha geral: ${res.motivo}`);
          break;
        }
        for (const r of res.results) {
          acc.push(
            r.ok
              ? { code: r.code, ok: true, titulo: r.titulo }
              : { code: r.code, ok: false, motivo: r.motivo },
          );
        }
        setRows([...acc]);
      } catch (e: any) {
        setLog(`Erro: ${e?.message ?? "desconhecido"}`);
        break;
      }
    }
    setLog(`Concluído: ${acc.filter((r) => r.ok).length} ok / ${acc.length} total`);
    setRunning(false);
  }

  return (
    <Shell>
      <div className="max-w-3xl mx-auto py-10 px-4 space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Gerar aulas BNCC (6º Ano)</h1>
          <p className="text-sm text-muted-foreground">
            Cria aulas completas via IA e grava em <code>aulas_bncc</code>. Pula códigos que já têm aula real.
          </p>
        </header>

        <div className="flex flex-wrap gap-3">
          <Button disabled={running} onClick={() => runBatch(PILOTO)}>
            Piloto (5 aulas)
          </Button>
          <Button
            disabled={running}
            variant="secondary"
            onClick={() => runBatch(allSixthGradeCodes())}
          >
            Lote completo 6º Ano ({allSixthGradeCodes().length})
          </Button>
        </div>

        {log && <p className="text-sm">{log}</p>}

        {rows.length > 0 && (
          <table className="w-full text-sm border">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-2">Código</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Detalhe</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.code} className="border-t">
                  <td className="p-2 font-mono">{r.code}</td>
                  <td className="p-2">{r.ok ? "✅" : "❌"}</td>
                  <td className="p-2">{r.titulo || r.motivo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Shell>
  );
}
