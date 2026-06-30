import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/admin/gerar-aulas-groq")({
  component: GerarAulasGroq,
});

type Row = { codigo_bncc: string; ano: string | null; disciplina: string | null };
type LogItem = { code: string; ok: boolean; msg: string; ts: number };
type GenerationMode = "auto" | "local" | "groq";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function retryDelay(data: any, attempt: number) {
  return Math.min(Number(data?.retryAfterMs) || 8000 + attempt * 3000, 30000);
}

function GerarAulasGroq() {
  const [pending, setPending] = useState<Row[]>([]);
  const [done, setDone] = useState<Set<string>>(new Set());
  const [running, setRunning] = useState(false);
  const [idx, setIdx] = useState(0);
  const [logs, setLogs] = useState<LogItem[]>([]);
  const [filterAno, setFilterAno] = useState<string>("");
  const [filterDisc, setFilterDisc] = useState<string>("");
  const [delayMs, setDelayMs] = useState(7000);
  const [mode, setMode] = useState<GenerationMode>("local");
  const [autoPublish, setAutoPublish] = useState(true);
  const stopRef = useRef(false);

  useEffect(() => { void load(); }, []);

  async function load() {
    const { data: habs } = await supabase
      .from("bncc_habilidades")
      .select("codigo_bncc, ano, disciplina")
      .order("codigo_bncc");
    const { data: drafts } = await supabase
      .from("lesson_drafts")
      .select("codigo_bncc");
    const { data: published } = await supabase
      .from("lesson_content")
      .select("codigo_bncc");
    const doneSet = new Set<string>([
      ...(drafts ?? []).map((d: any) => d.codigo_bncc),
      ...(published ?? []).map((d: any) => d.codigo_bncc),
    ]);
    setDone(doneSet);
    setPending((habs ?? []) as Row[]);
  }

  const filtered = useMemo(() => pending.filter((r) =>
    (!filterAno || (r.ano ?? "").toLowerCase().includes(filterAno.toLowerCase())) &&
    (!filterDisc || (r.disciplina ?? "").toLowerCase().includes(filterDisc.toLowerCase())) &&
    !done.has(r.codigo_bncc)
  ), [pending, filterAno, filterDisc, done]);

  async function start() {
    stopRef.current = false;
    setRunning(true);
    setIdx(0);
    setLogs([]);
    const list = [...filtered];
    for (let i = 0; i < list.length; i++) {
      if (stopRef.current) break;
      const row = list[i];
      setIdx(i + 1);
      try {
        let completed = false;
        for (let attempt = 0; attempt < 3 && !completed; attempt++) {
          if (stopRef.current) break;
          const { data, error } = await supabase.functions.invoke("generate-lesson-draft", {
            body: { codigo_bncc: row.codigo_bncc, mode },
          });
          const ok = !error && (data?.ok || data?.skipped);
          if (ok) {
            const source = data?.mode === "local_fallback" ? "modelo local após limite do Groq" : data?.mode === "local" ? "modelo local" : "Groq";
            let msg = data?.skipped ? "já existia" : `${source}; tokens=${data?.tokens ?? 0}`;
            if (autoPublish && !data?.skipped) {
              const { data: draft } = await supabase
                .from("lesson_drafts")
                .select("id")
                .eq("codigo_bncc", row.codigo_bncc)
                .eq("status", "pending")
                .order("created_at", { ascending: false })
                .limit(1)
                .maybeSingle();
              if (draft?.id) {
                const { error: pubErr } = await supabase.rpc("approve_lesson_draft", { _draft_id: draft.id });
                msg += pubErr ? ` | publish ERR: ${pubErr.message}` : " | publicada";
              }
            }
            setLogs((L) => [{ code: row.codigo_bncc, ok: true, msg, ts: Date.now() }, ...L].slice(0, 200));
            setDone((D) => new Set(D).add(row.codigo_bncc));
            completed = true;
            break;
          }

          if (!error && data?.retryable) {
            const waitMs = retryDelay(data, attempt);
            setLogs((L) => [{ code: row.codigo_bncc, ok: false, msg: `pausa ${Math.ceil(waitMs / 1000)}s: ${data.error}`, ts: Date.now() }, ...L].slice(0, 200));
            await sleep(waitMs);
            continue;
          }

          const msg = error ? error.message : (data?.error ?? "erro desconhecido");
          setLogs((L) => [{ code: row.codigo_bncc, ok: false, msg, ts: Date.now() }, ...L].slice(0, 200));
          completed = true;
        }
      } catch (e: any) {
        setLogs((L) => [{ code: row.codigo_bncc, ok: false, msg: String(e?.message ?? e), ts: Date.now() }, ...L].slice(0, 200));
      }
      await sleep(delayMs);
    }
    setRunning(false);
  }

  function stop() { stopRef.current = true; }

  const totalH = pending.length;
  const concluidas = done.size;
  const pct = totalH ? Math.round((concluidas / totalH) * 100) : 0;

  return (
    <div className="container mx-auto p-6 space-y-6 max-w-5xl">
      <h1 className="text-2xl font-bold">Gerador de Aulas — Groq ou Sem Groq</h1>
      <p className="text-sm text-muted-foreground">
        Gera rascunhos de aulas por Groq ou pelo modelo pedagógico local e salva em <code>lesson_drafts</code> como <b>pending</b>.
        Use <code>/admin/publish-batch</code> depois para publicar.
      </p>

      <div className="rounded-lg border p-4 space-y-3 bg-card">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <input className="border rounded px-3 py-2 text-sm" placeholder="Filtrar ano (ex: 1º)" value={filterAno} onChange={(e) => setFilterAno(e.target.value)} />
          <input className="border rounded px-3 py-2 text-sm" placeholder="Filtrar disciplina (ex: Matemática)" value={filterDisc} onChange={(e) => setFilterDisc(e.target.value)} />
          <input type="number" className="border rounded px-3 py-2 text-sm" value={delayMs} onChange={(e) => setDelayMs(Number(e.target.value) || 0)} placeholder="Delay ms" />
          <div className="text-sm flex items-center">A gerar: <b className="ml-2">{filtered.length}</b></div>
        </div>
        <div className="flex gap-2">
          {!running ? (
            <Button onClick={start} disabled={!filtered.length}>Iniciar lote ({filtered.length})</Button>
          ) : (
            <Button variant="destructive" onClick={stop}>Parar</Button>
          )}
          <Button variant="outline" onClick={load} disabled={running}>Recarregar</Button>
        </div>
        <div className="grid gap-2 rounded border p-3 text-sm">
          <label className="font-medium" htmlFor="generation-mode">Modo de geração</label>
          <select
            id="generation-mode"
            className="border rounded px-3 py-2 text-sm bg-background"
            value={mode}
            onChange={(e) => setMode(e.target.value as GenerationMode)}
            disabled={running}
          >
            <option value="auto">Automático: tenta Groq e usa modelo local se limitar</option>
            <option value="local">Sem Groq: modelo pedagógico local</option>
            <option value="groq">Somente Groq</option>
          </select>
          <p className="text-xs text-muted-foreground">
            Use "Sem Groq" para continuar criando rascunhos agora, sem depender do limite diário da API.
          </p>
          <label className="flex items-center gap-2 text-sm pt-2 border-t">
            <input type="checkbox" checked={autoPublish} onChange={(e) => setAutoPublish(e.target.checked)} disabled={running} />
            <span>Publicar automaticamente cada rascunho após gerar (executa <code>approve_lesson_draft</code>)</span>
          </label>
        </div>
        {running && (
          <div className="space-y-1">
            <Progress value={(idx / Math.max(filtered.length, 1)) * 100} />
            <div className="text-xs text-muted-foreground">{idx} / {filtered.length}</div>
          </div>
        )}
      </div>

      <div className="rounded-lg border p-4 bg-card">
        <div className="text-sm mb-2">Cobertura BNCC total</div>
        <Progress value={pct} />
        <div className="text-xs text-muted-foreground mt-1">{concluidas} / {totalH} ({pct}%)</div>
      </div>

      <div className="rounded-lg border p-4 bg-card">
        <div className="font-semibold mb-2 text-sm">Log (últimas 200)</div>
        <div className="text-xs font-mono max-h-96 overflow-auto space-y-1">
          {logs.map((l, i) => (
            <div key={i} className={l.ok ? "text-green-600" : "text-red-600"}>
              [{l.ok ? "OK" : "ERR"}] {l.code} — {l.msg}
            </div>
          ))}
          {!logs.length && <div className="text-muted-foreground">Nenhum log ainda.</div>}
        </div>
      </div>
    </div>
  );
}
