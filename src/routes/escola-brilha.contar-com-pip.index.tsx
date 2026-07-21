import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { Lock, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { cursoContarComPipFase1 } from "@/escola-brilha/curso-contar-com-pip/aulas-fase1";
import { cursoContarComPipFase2 } from "@/escola-brilha/curso-contar-com-pip/aulas-fase2";
import { cursoContarComPipFase3 } from "@/escola-brilha/curso-contar-com-pip/aulas-fase3";
import { cursoContarComPipFase4 } from "@/escola-brilha/curso-contar-com-pip/aulas-fase4";
import { cursoContarComPipFase5 } from "@/escola-brilha/curso-contar-com-pip/aulas-fase5";
import { cursoContarComPipFase6 } from "@/escola-brilha/curso-contar-com-pip/aulas-fase6";
import { cursoContarComPipFase7 } from "@/escola-brilha/curso-contar-com-pip/aulas-fase7";
import { usePipConcluidas } from "@/escola-brilha/curso-contar-com-pip/progresso";
import { useAppState } from "@/core/store";
import type { CursoEI } from "@/escola-brilha/curso-portugues-ei/types";
import { useAdminMode } from "@/escola-brilha/admin-mode";

export const Route = createFileRoute("/escola-brilha/contar-com-pip/")({
  head: () => ({
    meta: [
      { title: "Contar com Pip · Escola Brilha" },
      {
        name: "description",
        content:
          "Trilha de matemática inicial (3–6 anos) baseada em ciência do número: subitizing, cardinalidade, ten-frame, comparação e operações visuais.",
      },
      { property: "og:title", content: "Contar com Pip · Escola Brilha" },
      {
        property: "og:description",
        content:
          "Aprender a contar do jeito certo, com evidência científica. Fase 1: ver 1 a 4 de olhada.",
      },
    ],
  }),
  component: TrilhaContarComPip,
});

type EstadoFase = "atual" | "concluida" | "travada";

type BlocoFase = {
  n: number;
  curso: CursoEI | null; // null = ainda não implementada
  gradiente: string;
  badge: string;
  nome: string;
  descricao: string;
};

const FASES: BlocoFase[] = [
  {
    n: 1,
    curso: cursoContarComPipFase1,
    gradiente: "linear-gradient(135deg,#22C55E,#0f766e)",
    badge: "FASE 1 · VER DE RELANCE (1–4)",
    nome: "Ver de Relance",
    descricao: "Ver 1, 2, 3 e 4 de olhada, sem contar.",
  },
  {
    n: 2,
    curso: cursoContarComPipFase2,
    gradiente: "linear-gradient(135deg,#0ea5e9,#1e3a8a)",
    badge: "FASE 2 · CONTAGEM 1-A-1 (até 10)",
    nome: "Contagem 1-a-1",
    descricao: "5 princípios de Gelman: contar sem pular e sem repetir.",
  },
  {
    n: 3,
    curso: cursoContarComPipFase3,
    gradiente: "linear-gradient(135deg,#a855f7,#4c1d95)",
    badge: "FASE 3 · CARDINALIDADE + NUMERAL",
    nome: "Cardinalidade + Numeral",
    descricao: "O último número é o total. Associar quantidade ao símbolo.",
  },
  {
    n: 4,
    curso: cursoContarComPipFase4,
    gradiente: "linear-gradient(135deg,#f59e0b,#7c2d12)",
    badge: "FASE 4 · LINHA NUMÉRICA MENTAL (0–10)",
    nome: "Linha Numérica",
    descricao: "Jogos de tabuleiro linear. Antes, depois, entre.",
  },
  {
    n: 5,
    curso: cursoContarComPipFase5,
    gradiente: "linear-gradient(135deg,#ec4899,#831843)",
    badge: "FASE 5 · TEN-FRAME (composição do 10)",
    nome: "Ten-frame",
    descricao: "5+2=7. Faltam 3 pra 10. Pares que fazem 10.",
  },
  {
    n: 6,
    curso: cursoContarComPipFase6,
    gradiente: "linear-gradient(135deg,#14b8a6,#134e4a)",
    badge: "FASE 6 · COMPARAÇÃO",
    nome: "Comparação",
    descricao: "Mais, menos, igual. Estimativa (ANS).",
  },
  {
    n: 7,
    curso: cursoContarComPipFase7,
    gradiente: "linear-gradient(135deg,#ef4444,#7f1d1d)",
    badge: "FASE 7 · SOMA E SUBTRAÇÃO VISUAL (até 10)",
    nome: "Soma e Subtração",
    descricao: "Concreto → pictórico → abstrato (CPA · Singapura).",
  },
  {
    n: 8,
    curso: null,
    gradiente: "linear-gradient(135deg,#6366f1,#312e81)",
    badge: "FASE 8 · PROBLEMAS EM HISTÓRIA",
    nome: "Problemas em História",
    descricao: "Cognitively Guided Instruction: juntar, tirar, comparar.",
  },
];

function FaseBloco({
  fase,
  concluidas,
  estado,
}: {
  fase: BlocoFase;
  concluidas: Set<string>;
  estado: EstadoFase;
}) {
  const travada = estado === "travada";
  const curso = fase.curso;
  const aulasFlat = curso?.unidades.flatMap((u) => u.aulas) ?? [];
  const total = aulasFlat.length;
  const feitas = aulasFlat.filter((a) => concluidas.has(a.slug)).length;
  const progresso = total > 0 ? Math.round((feitas / total) * 100) : 0;
  const emBreve = !curso;

  return (
    <section className={`mt-8 ${travada || emBreve ? "opacity-70" : ""}`}>
      <div
        className="rounded-3xl px-5 py-4 mb-4 shadow-xl relative"
        style={{ background: fase.gradiente }}
      >
        <p className="text-[10px] tracking-widest font-black text-white/90">
          {fase.badge}
        </p>
        <h2 className="text-2xl font-black text-white leading-tight">
          {fase.nome}
        </h2>
        <p className="text-white/90 text-xs mt-1">{fase.descricao}</p>
        {curso && (
          <>
            <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-white">
              <span>
                {feitas}/{total || 20} missões
              </span>
              <span>{progresso}%</span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-black/25 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-300 to-lime-400"
                style={{ width: `${progresso}%` }}
              />
            </div>
          </>
        )}
        {estado === "concluida" && (
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-black px-2 py-1">
            <CheckCircle2 className="h-3 w-3" /> CONCLUÍDA
          </div>
        )}
        {(travada || emBreve) && (
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/60 text-white text-[10px] font-black px-2 py-1">
            <Lock className="h-3 w-3" /> {emBreve ? "EM BREVE" : "BLOQUEADA"}
          </div>
        )}
      </div>

      {emBreve ? (
        <div className="rounded-2xl bg-black/25 border-2 border-white/10 p-5 text-center text-white/85 text-sm">
          Esta fase será liberada em breve. Termine a Fase 1 enquanto isso!
        </div>
      ) : travada ? (
        <div className="rounded-2xl bg-black/30 border-2 border-white/10 p-5 text-center text-white/85 text-sm">
          <Lock className="h-6 w-6 mx-auto mb-2 opacity-70" />
          Complete a fase anterior para desbloquear esta.
        </div>
      ) : (
        <div className="space-y-6">
          {curso!.unidades.map((u) => (
            <div key={u.slug}>
              <div className="text-center mb-3">
                <div className="inline-block bg-black/40 rounded-full px-4 py-1 text-[11px] uppercase tracking-wider font-bold text-yellow-300">
                  {u.titulo}
                </div>
                <div className="text-xs text-white/80 mt-1 italic">
                  Medalha: {u.subtitulo}
                </div>
              </div>

              <div className="space-y-4">
                {u.aulas.map((a, i) => {
                  const flatIdx = aulasFlat.findIndex((x) => x.slug === a.slug);
                  const align = flatIdx % 2 === 0 ? "justify-start" : "justify-end";
                  const feito = concluidas.has(a.slug);
                  return (
                    <div key={a.slug} className={`flex ${align} px-6`}>
                      <Link
                        to="/escola-brilha/contar-com-pip/$aula"
                        params={{ aula: a.slug }}
                        className="group relative w-32 h-32 rounded-full grid place-items-center shadow-xl active:scale-95 transition"
                        style={{
                          background: `linear-gradient(135deg, ${curso!.corPrimaria}, #fde68a)`,
                          color: curso!.corSecundaria,
                        }}
                      >
                        <div className="text-center px-2">
                          <div className="text-3xl">{a.icone}</div>
                          <div className="text-[10px] font-black mt-1 leading-tight line-clamp-3">
                            {a.titulo}
                          </div>
                          <div className="text-[9px] opacity-70 mt-0.5">
                            Missão {flatIdx + 1}/{total}
                          </div>
                        </div>
                        {feito && (
                          <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 grid place-items-center text-white text-sm">
                            ✓
                          </div>
                        )}
                        {i === 0 && flatIdx === 0 && !feito && estado === "atual" && (
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] bg-lime-400 text-emerald-950 rounded-full px-2 py-0.5 font-black shadow">
                            COMECE AQUI
                          </div>
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function TrilhaContarComPip() {
  const { activeChild } = useAppState();
  const childId = activeChild?.id ?? null;
  const { concluidas } = usePipConcluidas(childId);
  const [adminOn, setAdminOn] = useAdminMode();

  const fasesEstado = useMemo(() => {
    const map = new Map<number, EstadoFase>();
    let jaEncontrouAtual = false;
    for (const f of FASES) {
      if (!f.curso) {
        // Em modo admin, "em breve" (sem curso) segue travada — não há aula pra abrir.
        map.set(f.n, "travada");
        continue;
      }
      const aulas = f.curso.unidades.flatMap((u) => u.aulas);
      const feitas = aulas.filter((a) => concluidas.has(a.slug)).length;
      const completa = aulas.length > 0 && feitas >= aulas.length;
      if (completa) {
        map.set(f.n, "concluida");
        continue;
      }
      if (adminOn) {
        // Admin: toda fase com curso fica liberada como "atual".
        map.set(f.n, "atual");
        continue;
      }
      if (!jaEncontrouAtual) {
        map.set(f.n, "atual");
        jaEncontrouAtual = true;
      } else {
        map.set(f.n, "travada");
      }
    }
    return map;
  }, [concluidas, adminOn]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-600 via-teal-700 to-indigo-900 text-white">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <Link to="/escola-brilha" className="text-white/80 text-sm">
          ◂ Voltar
        </Link>

        <header className="text-center mt-3 mb-6">
          <p className="text-yellow-200 font-bold text-xs tracking-wider">
            MATEMÁTICA INICIAL 3–6 ANOS · CIÊNCIA DO NÚMERO
          </p>
          <h1 className="text-3xl sm:text-4xl font-black mt-1">
            🔢 Contar com Pip
          </h1>
          <p className="text-yellow-100 text-sm mt-1">
            8 fases · ver de relance → problemas em história · 10 min/dia
          </p>

          <button
            onClick={() => setAdminOn(!adminOn)}
            className={`mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-black shadow ${
              adminOn
                ? "bg-yellow-300 text-emerald-950"
                : "bg-black/40 text-white/80"
            }`}
            title="Libera todas as fases pra testar"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            MODO ADMIN: {adminOn ? "LIGADO (tudo aberto)" : "desligado"}
          </button>
        </header>

        <div className="rounded-3xl p-4 mb-3 bg-gradient-to-br from-lime-400 to-emerald-500 text-emerald-950 shadow-xl">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
            <Sparkles className="h-4 w-4" /> Comece pela Fase 1
          </div>
          <div className="mt-1 text-lg font-black leading-tight">
            Ver de Relance (1 a 4 de olhada)
          </div>
          <p className="text-sm mt-1">
            Base do senso numérico segundo Dehaene. As outras fases liberam
            conforme a criança avança — nada de pular etapas.
          </p>
        </div>

        {FASES.map((f) => (
          <FaseBloco
            key={f.n}
            fase={f}
            concluidas={concluidas}
            estado={fasesEstado.get(f.n) ?? "travada"}
          />
        ))}

        <div className="mt-10 rounded-2xl bg-black/30 p-4 text-xs text-white/80">
          <p className="font-bold text-yellow-200 mb-1">📚 Base científica</p>
          <p>
            Subitizing (Kaufman 1949; Clements 1999), 5 princípios da contagem
            (Gelman & Gallistel 1978), linha numérica mental (Dehaene; Ramani &
            Siegler 2008), ten-frame (Van de Walle), CPA de Singapura (Bruner),
            Cognitively Guided Instruction (Carpenter et al.).
          </p>
        </div>
      </div>
    </div>
  );
}
