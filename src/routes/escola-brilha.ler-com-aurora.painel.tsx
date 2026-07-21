import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { BarChart3, Calendar, Sparkles, ArrowRight, Trophy, BookOpen } from "lucide-react";

import { cursoLerComAurora } from "@/escola-brilha/curso-ler-com-aurora/aulas";
import { cursoLerComAuroraFase2 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase2";
import { cursoLerComAuroraFase3 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase3";
import { cursoLerComAuroraFase4 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase4";
import { cursoLerComAuroraFase5 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase5";
import { cursoLerComAuroraFase6 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase6";
import { cursoLerComAuroraFase7 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase7";
import { cursoLerComAuroraFase8 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase8";
import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";

/**
 * T2 — Painel do Adulto (Ler com Aurora)
 * --------------------------------------
 * Cartões grandes e legíveis:
 *  - Missões concluídas por fase
 *  - Última missão feita e último dia ativo
 *  - Diagnóstico Dia 0 (se realizado)
 *  - Sugestão da próxima missão
 */

export const Route = createFileRoute("/escola-brilha/ler-com-aurora/painel")({
  head: () => ({
    meta: [
      { title: "Painel do Adulto · Ler com Aurora" },
      {
        name: "description",
        content:
          "Acompanhe o progresso da criança na trilha Ler com Aurora: missões concluídas por fase, últimos dias ativos e próxima missão recomendada.",
      },
    ],
  }),
  component: PainelAdulto,
});

const FASES: { n: number; curso: CursoEI; grad: string; nome: string }[] = [
  { n: 1, curso: cursoLerComAurora, grad: "from-amber-500 to-orange-600", nome: "Consciência Fonológica" },
  { n: 2, curso: cursoLerComAuroraFase2, grad: "from-violet-500 to-indigo-700", nome: "Princípio Alfabético" },
  { n: 3, curso: cursoLerComAuroraFase3, grad: "from-sky-500 to-sky-900", nome: "Decodificação Silábica" },
  { n: 4, curso: cursoLerComAuroraFase4, grad: "from-rose-500 to-rose-900", nome: "Fluência e Compreensão" },
  { n: 5, curso: cursoLerComAuroraFase5, grad: "from-emerald-500 to-emerald-900", nome: "Ortografia Inicial" },
  { n: 6, curso: cursoLerComAuroraFase6, grad: "from-yellow-400 to-amber-800", nome: "Fluência Verdadeira" },
  { n: 7, curso: cursoLerComAuroraFase7, grad: "from-purple-500 to-purple-950", nome: "Vocabulário Ativo" },
  { n: 8, curso: cursoLerComAuroraFase8, grad: "from-cyan-500 to-slate-900", nome: "Compreensão Estratégica" },
];

function loadConcluidas(): Set<string> {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem("eb.ler-aurora.concluidas") : null;
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function loadUltimoDia(): string | null {
  try {
    return typeof window !== "undefined" ? localStorage.getItem("eb.ler-aurora.ultimo-dia") : null;
  } catch {
    return null;
  }
}

interface DiagRes {
  letras: number;
  fonemas: number;
  palavras: number;
  feitoEm: string;
}
function loadDiagnostico(): DiagRes | null {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem("eb.ler-aurora.diagnostico") : null;
    return raw ? (JSON.parse(raw) as DiagRes) : null;
  } catch {
    return null;
  }
}

function PainelAdulto() {
  const concluidas = useMemo(() => loadConcluidas(), []);
  const ultimoDia = useMemo(() => loadUltimoDia(), []);
  const diag = useMemo(() => loadDiagnostico(), []);

  // Agrega por fase
  const dadosFases = FASES.map(({ n, curso, grad, nome }) => {
    const aulas: AulaEI[] = curso.unidades.flatMap((u) => u.aulas);
    const total = aulas.length;
    const feitas = aulas.filter((a) => concluidas.has(a.slug)).length;
    return { n, curso, grad, nome, aulas, total, feitas, pct: total ? Math.round((feitas / total) * 100) : 0 };
  });

  const totalGeral = dadosFases.reduce((s, f) => s + f.total, 0);
  const feitasGeral = dadosFases.reduce((s, f) => s + f.feitas, 0);
  const pctGeral = totalGeral ? Math.round((feitasGeral / totalGeral) * 100) : 0;

  // Próxima missão: primeira não concluída na ordem das fases
  const proxima = (() => {
    for (const f of dadosFases) {
      const a = f.aulas.find((x) => !concluidas.has(x.slug));
      if (a) return { aula: a, fase: f };
    }
    return null;
  })();

  const diasAtivos = ultimoDia
    ? (() => {
        const d = new Date(ultimoDia);
        return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
      })()
    : null;

  const conquistas: { fase: number; nome: string }[] = dadosFases
    .filter((f) => f.pct === 100)
    .map((f) => ({ fase: f.n, nome: f.nome }));

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <Link to="/escola-brilha/ler-com-aurora" className="text-white/70 text-sm">
          ◂ Voltar para a trilha
        </Link>

        <header className="mt-4 mb-6">
          <p className="text-yellow-300 font-black text-xs tracking-widest">PAINEL DO ADULTO</p>
          <h1 className="text-3xl sm:text-4xl font-black">Como está indo a leitura?</h1>
          <p className="text-white/70 text-sm mt-1">
            Uma visão rápida do progresso na trilha <b>Ler com Aurora</b>. Sem gráficos complicados —
            cartões grandes e claros.
          </p>
        </header>

        {/* Resumo geral */}
        <section className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-800 p-5 shadow-xl">
          <div className="flex items-center gap-2 text-white/85">
            <BarChart3 className="h-5 w-5" />
            <p className="text-[10px] font-black uppercase tracking-widest">Progresso geral</p>
          </div>
          <div className="mt-2 flex items-end justify-between">
            <div>
              <div className="text-5xl font-black leading-none">{pctGeral}%</div>
              <div className="text-white/80 text-sm mt-1">
                {feitasGeral} de {totalGeral} missões concluídas
              </div>
            </div>
            {diasAtivos && (
              <div className="text-right">
                <div className="text-[10px] font-black uppercase tracking-widest text-white/70 flex items-center gap-1 justify-end">
                  <Calendar className="h-3.5 w-3.5" />
                  Último dia ativo
                </div>
                <div className="text-white font-bold text-sm mt-1">{diasAtivos}</div>
              </div>
            )}
          </div>
          <div className="mt-4 h-3 rounded-full bg-black/25 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-300 to-lime-400"
              style={{ width: `${pctGeral}%` }}
            />
          </div>
        </section>

        {/* Próxima missão */}
        {proxima && (
          <section className="mt-4 rounded-3xl bg-white/5 border-2 border-white/10 p-5">
            <div className="flex items-center gap-2 text-emerald-300">
              <Sparkles className="h-5 w-5" />
              <p className="text-[10px] font-black uppercase tracking-widest">Próxima missão sugerida</p>
            </div>
            <h2 className="text-xl font-black mt-1">
              {proxima.aula.icone} {proxima.aula.titulo}
            </h2>
            <p className="text-white/70 text-sm mt-1">
              Fase {proxima.fase.n} · {proxima.fase.nome}
            </p>
            <Link
              to="/escola-brilha/ler-com-aurora/$aula"
              params={{ aula: proxima.aula.slug }}
              className="mt-4 w-full h-14 rounded-2xl bg-gradient-to-r from-emerald-400 to-lime-500 text-emerald-950 font-black text-base flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              Abrir esta missão <ArrowRight className="h-5 w-5" />
            </Link>
          </section>
        )}

        {/* Diagnóstico */}
        <section className="mt-4 rounded-3xl bg-white/5 border-2 border-white/10 p-5">
          <div className="flex items-center gap-2 text-yellow-300">
            <BookOpen className="h-5 w-5" />
            <p className="text-[10px] font-black uppercase tracking-widest">Diagnóstico Dia 0</p>
          </div>
          {diag ? (
            <>
              <p className="text-white/85 text-sm mt-2">
                Feito em {new Date(diag.feitoEm).toLocaleDateString("pt-BR")}. Pontuação por bloco:
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <MiniScore label="Letras" v={diag.letras} />
                <MiniScore label="Sons" v={diag.fonemas} />
                <MiniScore label="Palavras" v={diag.palavras} />
              </div>
              <Link
                to="/escola-brilha/ler-com-aurora/diagnostico"
                className="mt-3 inline-block text-yellow-300 text-sm font-bold underline"
              >
                Refazer diagnóstico
              </Link>
            </>
          ) : (
            <>
              <p className="text-white/75 text-sm mt-2">
                Ainda não foi feito. Ele leva 5 minutos e ajuda a escolher a fase certa para começar.
              </p>
              <Link
                to="/escola-brilha/ler-com-aurora/diagnostico"
                className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-yellow-300 text-orange-900 font-black text-sm px-4 py-2"
              >
                Fazer diagnóstico <ArrowRight className="h-4 w-4" />
              </Link>
            </>
          )}
        </section>

        {/* Conquistas */}
        {conquistas.length > 0 && (
          <section className="mt-4 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-700 p-5 shadow-xl">
            <div className="flex items-center gap-2 text-white/90">
              <Trophy className="h-5 w-5" />
              <p className="text-[10px] font-black uppercase tracking-widest">Conquistas recentes</p>
            </div>
            <ul className="mt-3 space-y-2">
              {conquistas.map((c) => (
                <li key={c.fase} className="rounded-2xl bg-black/25 px-4 py-3 font-bold text-sm">
                  🏅 Fase {c.fase} completa · {c.nome}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Detalhe por fase */}
        <section className="mt-6 space-y-3">
          <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">
            Progresso por fase
          </p>
          {dadosFases.map((f) => (
            <div
              key={f.n}
              className={`rounded-2xl p-4 bg-gradient-to-br ${f.grad} shadow`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black tracking-widest text-white/80">FASE {f.n}</p>
                  <h3 className="text-lg font-black leading-tight">{f.nome}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black">{f.pct}%</div>
                  <div className="text-[11px] text-white/85">
                    {f.feitas}/{f.total} missões
                  </div>
                </div>
              </div>
              <div className="mt-3 h-2 rounded-full bg-black/30 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-300 to-lime-400"
                  style={{ width: `${f.pct}%` }}
                />
              </div>
            </div>
          ))}
        </section>

        <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-4 text-xs text-white/70">
          <p className="font-bold text-yellow-300 mb-1">💡 Dica para o adulto</p>
          <p>
            15 minutos por dia, no mesmo horário, funciona melhor do que sessões longas. Se a criança
            travar 2 dias seguidos na mesma missão, volte uma fase — a base precisa estar firme antes
            de avançar.
          </p>
        </div>
      </div>
    </div>
  );
}

function MiniScore({ label, v }: { label: string; v: number }) {
  const cor = v >= 4 ? "bg-emerald-500/30 border-emerald-300/60" : v >= 2 ? "bg-amber-500/30 border-amber-300/60" : "bg-rose-500/30 border-rose-300/60";
  return (
    <div className={`rounded-2xl border-2 p-3 ${cor}`}>
      <div className="text-[10px] font-black uppercase tracking-widest opacity-80">{label}</div>
      <div className="text-2xl font-black mt-1">{v}/5</div>
    </div>
  );
}
