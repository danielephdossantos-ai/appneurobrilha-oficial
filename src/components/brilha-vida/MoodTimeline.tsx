/**
 * MoodTimeline — evolução longitudinal de humor
 *
 * Mostra a última janela (7 ou 30 dias) de check-ins agregados por dia:
 *   - Valência média (rosto amigável) — -2 (triste) a +2 (feliz)
 *   - Energia média (raio) — -2 (baixa) a +2 (alta)
 *   - Nº de registros no dia
 *
 * SVG puro: sem libs externas. Renderiza no cliente (usa localStorage).
 */
import { useMemo, useState } from "react";
import { useMoodLog, type MoodEntry } from "./shared/moodLog";
import { TrendingUp, TrendingDown, Minus, Calendar, Info } from "lucide-react";

type Janela = 7 | 30;

type DiaAgregado = {
  data: string; // YYYY-MM-DD
  label: string; // dd/mm
  valence: number | null;
  energy: number | null;
  n: number;
  emocaoTop?: string;
};

function agregarPorDia(entries: MoodEntry[], janela: Janela): DiaAgregado[] {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const dias: DiaAgregado[] = [];
  for (let i = janela - 1; i >= 0; i--) {
    const d = new Date(hoje);
    d.setDate(hoje.getDate() - i);
    const iso = d.toISOString().slice(0, 10);
    dias.push({
      data: iso,
      label: `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`,
      valence: null,
      energy: null,
      n: 0,
    });
  }
  const idx = new Map(dias.map((d) => [d.data, d]));
  const contagens = new Map<string, Record<string, number>>();
  for (const e of entries) {
    const key = e.at.slice(0, 10);
    const bucket = idx.get(key);
    if (!bucket) continue;
    bucket.n += 1;
    bucket.valence = (bucket.valence ?? 0) + e.valence;
    bucket.energy = (bucket.energy ?? 0) + e.energy;
    const c = contagens.get(key) ?? {};
    c[e.emocao] = (c[e.emocao] ?? 0) + 1;
    contagens.set(key, c);
  }
  for (const d of dias) {
    if (d.n > 0) {
      d.valence = +(d.valence! / d.n).toFixed(2);
      d.energy = +(d.energy! / d.n).toFixed(2);
      const c = contagens.get(d.data) ?? {};
      d.emocaoTop = Object.entries(c).sort((a, b) => b[1] - a[1])[0]?.[0];
    }
  }
  return dias;
}

function corValencia(v: number | null) {
  if (v === null) return "#e2e8f0";
  if (v >= 1) return "#22c55e";
  if (v >= 0) return "#a3e635";
  if (v >= -1) return "#f59e0b";
  return "#ef4444";
}

function emojiValencia(v: number | null) {
  if (v === null) return "·";
  if (v >= 1.2) return "😄";
  if (v >= 0.3) return "🙂";
  if (v >= -0.3) return "😐";
  if (v >= -1.2) return "🙁";
  return "😢";
}

function tendencia(dias: DiaAgregado[]): "sobe" | "desce" | "estavel" | "sem-dados" {
  const validos = dias.filter((d) => d.valence !== null);
  if (validos.length < 2) return "sem-dados";
  const meio = Math.floor(validos.length / 2);
  const antes = validos.slice(0, meio);
  const depois = validos.slice(meio);
  const avg = (arr: DiaAgregado[]) =>
    arr.reduce((s, d) => s + (d.valence ?? 0), 0) / arr.length;
  const delta = avg(depois) - avg(antes);
  if (delta > 0.3) return "sobe";
  if (delta < -0.3) return "desce";
  return "estavel";
}

export function MoodTimeline({
  childId,
  compact = false,
}: {
  childId?: string | null;
  compact?: boolean;
}) {
  const entries = useMoodLog(childId ?? undefined);
  const [janela, setJanela] = useState<Janela>(7);
  const dias = useMemo(() => agregarPorDia(entries, janela), [entries, janela]);
  const total = entries.length;
  const noDia = entries.filter(
    (e) => e.at.slice(0, 10) === new Date().toISOString().slice(0, 10),
  ).length;
  const trend = tendencia(dias);

  // Dimensões SVG
  const W = 640;
  const H = 180;
  const PAD_X = 32;
  const PAD_Y = 20;
  const innerW = W - PAD_X * 2;
  const innerH = H - PAD_Y * 2;
  const step = dias.length > 1 ? innerW / (dias.length - 1) : innerW;
  const yFor = (v: number) => PAD_Y + innerH * (1 - (v + 2) / 4);

  const pontosValencia = dias
    .map((d, i) => (d.valence === null ? null : `${PAD_X + i * step},${yFor(d.valence)}`))
    .filter(Boolean)
    .join(" ");
  const pontosEnergia = dias
    .map((d, i) => (d.energy === null ? null : `${PAD_X + i * step},${yFor(d.energy)}`))
    .filter(Boolean)
    .join(" ");

  return (
    <div className="rounded-3xl border-2 border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
        <div>
          <h3 className="font-black text-slate-800 text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" /> Linha do humor
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            Como {childId ? "essa criança" : "a criança"} tem se sentido nos últimos dias.
          </p>
        </div>
        <div className="flex gap-1 p-1 bg-slate-100 rounded-full text-xs font-black">
          {([7, 30] as Janela[]).map((j) => (
            <button
              key={j}
              onClick={() => setJanela(j)}
              className={`px-3 py-1.5 rounded-full transition-all ${
                janela === j ? "bg-white shadow text-slate-800" : "text-slate-500"
              }`}
            >
              {j}d
            </button>
          ))}
        </div>
      </div>

      {total === 0 ? (
        <div className="flex items-start gap-2 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm text-slate-600">
          <Info className="h-4 w-4 mt-0.5 shrink-0 text-slate-400" />
          <span>
            Ainda não há check-ins de humor. Use Zonas, Medidor, Termômetro, Semáforo, Como Estou
            ou Diário do Sentir e a evolução aparece aqui.
          </span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-2 mb-3">
            <Metric label="Hoje" value={`${noDia}`} sub="check-ins" />
            <Metric label="Total" value={`${total}`} sub={`nos ${janela}d`} />
            <Metric
              label="Tendência"
              value={
                trend === "sobe" ? "Melhorando" : trend === "desce" ? "Precisa apoio" : trend === "estavel" ? "Estável" : "—"
              }
              icon={
                trend === "sobe" ? (
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                ) : trend === "desce" ? (
                  <TrendingDown className="h-4 w-4 text-rose-600" />
                ) : (
                  <Minus className="h-4 w-4 text-slate-500" />
                )
              }
            />
          </div>

          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full h-auto"
            role="img"
            aria-label="Gráfico de humor por dia"
          >
            {/* linhas de referência */}
            {[2, 1, 0, -1, -2].map((v) => (
              <g key={v}>
                <line
                  x1={PAD_X}
                  x2={W - PAD_X}
                  y1={yFor(v)}
                  y2={yFor(v)}
                  stroke={v === 0 ? "#cbd5e1" : "#f1f5f9"}
                  strokeDasharray={v === 0 ? "0" : "4 4"}
                />
                <text x={4} y={yFor(v) + 3} fontSize="9" fill="#94a3b8">
                  {v > 0 ? `+${v}` : v}
                </text>
              </g>
            ))}
            {/* linha de energia */}
            {pontosEnergia && (
              <polyline
                fill="none"
                stroke="#a78bfa"
                strokeWidth="2"
                strokeDasharray="5 4"
                points={pontosEnergia}
              />
            )}
            {/* linha de valência */}
            {pontosValencia && (
              <polyline
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="3"
                strokeLinecap="round"
                points={pontosValencia}
              />
            )}
            {/* pontos + labels */}
            {dias.map((d, i) => {
              const x = PAD_X + i * step;
              return (
                <g key={d.data}>
                  {d.valence !== null && (
                    <>
                      <circle
                        cx={x}
                        cy={yFor(d.valence)}
                        r={5}
                        fill={corValencia(d.valence)}
                        stroke="white"
                        strokeWidth="2"
                      >
                        <title>
                          {d.label} — {d.emocaoTop ?? "check-in"} ({d.n})
                        </title>
                      </circle>
                    </>
                  )}
                  {(janela === 7 || i % 5 === 0 || i === dias.length - 1) && (
                    <text
                      x={x}
                      y={H - 4}
                      fontSize="9"
                      fill="#64748b"
                      textAnchor="middle"
                      fontWeight="700"
                    >
                      {d.label}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-bold text-slate-600">
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-1 rounded-full bg-sky-500" /> Como se sente
              (valência)
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-0.5 border-t-2 border-dashed border-violet-400" /> Energia
            </span>
          </div>

          {!compact && (
            <div className="mt-4 grid grid-cols-7 md:grid-cols-14 gap-1">
              {dias.slice(-14).map((d) => (
                <div
                  key={d.data}
                  className="aspect-square rounded-lg border border-slate-100 flex flex-col items-center justify-center text-[9px] font-black text-slate-600"
                  style={{ background: corValencia(d.valence) + "22" }}
                  title={`${d.label}${d.emocaoTop ? " — " + d.emocaoTop : ""} (${d.n} check-ins)`}
                >
                  <span>{d.label}</span>
                  <span className="text-base leading-none">{emojiValencia(d.valence)}</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function Metric({
  label,
  value,
  sub,
  icon,
}: {
  label: string;
  value: string;
  sub?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 border border-slate-100 p-2.5">
      <div className="text-[10px] font-black uppercase tracking-wider text-slate-500">{label}</div>
      <div className="flex items-center gap-1 mt-0.5">
        {icon}
        <div className="text-base font-black text-slate-800 leading-tight">{value}</div>
      </div>
      {sub && <div className="text-[10px] font-medium text-slate-400">{sub}</div>}
    </div>
  );
}
