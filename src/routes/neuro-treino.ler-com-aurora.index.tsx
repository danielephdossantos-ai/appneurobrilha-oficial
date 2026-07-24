import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { Lock, CheckCircle2, Sparkles, ClipboardCheck } from "lucide-react";
import { cursoLerComAurora } from "@/escola-brilha/curso-ler-com-aurora/aulas";
import { cursoLerComAuroraFase2 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase2";
import { cursoLerComAuroraFase3 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase3";
import { cursoLerComAuroraFase4 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase4";
import { cursoLerComAuroraFase5 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase5";
import { cursoLerComAuroraFase6 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase6";
import { cursoLerComAuroraFase7 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase7";
import { cursoLerComAuroraFase8 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase8";
import {
  recomendarFaseAurora,
  type FaseAurora,
} from "@/escola-brilha/curso-ler-com-aurora/faseRecomendada";
import { useAppState } from "@/core/store";
import { supabase } from "@/integrations/supabase/client";
import { useAuroraConcluidas } from "@/escola-brilha/curso-ler-com-aurora/progresso";
import type { CursoEI } from "@/escola-brilha/curso-portugues-ei/types";

export const Route = createFileRoute("/neuro-treino/ler-com-aurora/")({
  head: () => ({
    meta: [
      { title: "Ler com Aurora · Escola Brilha" },
      {
        name: "description",
        content:
          "Trilha de alfabetização automática: o app usa a anamnese respondida pelo adulto para escolher a fase certa e libera uma etapa por vez.",
      },
    ],
  }),
  component: TrilhaLerComAurora,
});

const FASES: {
  n: FaseAurora;
  curso: CursoEI;
  gradiente: string;
  badge: string;
}[] = [
  { n: 1, curso: cursoLerComAurora, gradiente: "linear-gradient(135deg,#f59e0b,#ea580c)", badge: "FASE 1 · CONSCIÊNCIA FONOLÓGICA" },
  { n: 2, curso: cursoLerComAuroraFase2, gradiente: "linear-gradient(135deg,#7c3aed,#4338ca)", badge: "FASE 2 · PRINCÍPIO ALFABÉTICO" },
  { n: 3, curso: cursoLerComAuroraFase3, gradiente: "linear-gradient(135deg,#0ea5e9,#0c4a6e)", badge: "FASE 3 · DECODIFICAÇÃO SILÁBICA (CV)" },
  { n: 4, curso: cursoLerComAuroraFase4, gradiente: "linear-gradient(135deg,#f43f5e,#881337)", badge: "FASE 4 · FLUÊNCIA E COMPREENSÃO" },
  { n: 5, curso: cursoLerComAuroraFase5, gradiente: "linear-gradient(135deg,#10b981,#064e3b)", badge: "FASE 5 · ORTOGRAFIA INICIAL" },
  { n: 6, curso: cursoLerComAuroraFase6, gradiente: "linear-gradient(135deg,#facc15,#78350f)", badge: "FASE 6 · FLUÊNCIA VERDADEIRA" },
  { n: 7, curso: cursoLerComAuroraFase7, gradiente: "linear-gradient(135deg,#a855f7,#3b0764)", badge: "FASE 7 · VOCABULÁRIO ATIVO" },
  { n: 8, curso: cursoLerComAuroraFase8, gradiente: "linear-gradient(135deg,#0ea5e9,#0c4a6e)", badge: "FASE 8 · COMPREENSÃO ESTRATÉGICA" },
];

function loadConcluidas(childId: string | null): Set<string> {
  try {
    if (typeof window === "undefined") return new Set();
    const chave = childId ? `eb.ler-aurora.concluidas.${childId}` : "eb.ler-aurora.concluidas";
    const raw = localStorage.getItem(chave) ?? localStorage.getItem("eb.ler-aurora.concluidas");
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

type EstadoFase = "atual" | "concluida" | "travada";

function FaseBloco({
  fase,
  curso,
  concluidas,
  gradiente,
  badge,
  estado,
}: {
  fase: FaseAurora;
  curso: CursoEI;
  concluidas: Set<string>;
  gradiente: string;
  badge: string;
  estado: EstadoFase;
}) {
  const aulasFlat = curso.unidades.flatMap((u) => u.aulas);
  const total = aulasFlat.length;
  const feitas = aulasFlat.filter((a) => concluidas.has(a.slug)).length;
  const progresso = total > 0 ? Math.round((feitas / total) * 100) : 0;
  const travada = estado === "travada";

  return (
    <section className={`mt-8 ${travada ? "opacity-60" : ""}`}>
      <div className="rounded-3xl px-5 py-4 mb-4 shadow-xl relative" style={{ background: gradiente }}>
        <p className="text-[10px] tracking-widest font-black text-white/90">{badge}</p>
        <h2 className="text-2xl font-black text-white leading-tight">{curso.titulo}</h2>
        <p className="text-white/90 text-xs mt-1">{curso.descricao}</p>
        <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-white">
          <span>
            Fase {fase} · {feitas}/{total} missões
          </span>
          <span>{progresso}%</span>
        </div>
        <div className="mt-1 h-2 rounded-full bg-black/25 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-yellow-300 to-lime-400" style={{ width: `${progresso}%` }} />
        </div>
        {estado === "concluida" && (
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-black px-2 py-1">
            <CheckCircle2 className="h-3 w-3" /> CONCLUÍDA
          </div>
        )}
        {estado === "travada" && (
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/60 text-white text-[10px] font-black px-2 py-1">
            <Lock className="h-3 w-3" /> BLOQUEADA
          </div>
        )}
      </div>

      {travada ? (
        <div className="rounded-2xl bg-black/30 border-2 border-white/10 p-5 text-center text-white/85 text-sm">
          <Lock className="h-6 w-6 mx-auto mb-2 opacity-70" />
          Complete a fase anterior para desbloquear esta.
        </div>
      ) : (
        <div className="space-y-6">
          {curso.unidades.map((u) => (
            <div key={u.slug}>
              <div className="text-center mb-3">
                <div className="inline-block bg-black/40 rounded-full px-4 py-1 text-[11px] uppercase tracking-wider font-bold text-yellow-300">
                  {u.titulo}
                </div>
                <div className="text-xs text-white/80 mt-1 italic">Medalha: {u.subtitulo}</div>
              </div>

              <div className="space-y-4">
                {u.aulas.map((a, i) => {
                  const flatIdx = aulasFlat.findIndex((x) => x.slug === a.slug);
                  const align = flatIdx % 2 === 0 ? "justify-start" : "justify-end";
                  const feito = concluidas.has(a.slug);
                  return (
                    <div key={a.slug} className={`flex ${align} px-6`}>
                      <Link
                        to="/neuro-treino/ler-com-aurora/$aula"
                        params={{ aula: a.slug }}
                        className="group relative w-32 h-32 rounded-full grid place-items-center shadow-xl active:scale-95 transition"
                        style={{
                          background: `linear-gradient(135deg, ${curso.corPrimaria}, #fde68a)`,
                          color: curso.corSecundaria,
                        }}
                      >
                        <div className="text-center px-2">
                          <div className="text-3xl">{a.icone}</div>
                          <div className="text-[10px] font-black mt-1 leading-tight line-clamp-3">{a.titulo}</div>
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

function TrilhaLerComAurora() {
  const { activeChild } = useAppState();
  const childId = activeChild?.id ?? null;

  const { data: anamnese, isLoading: loadingAnamnese } = useQuery({
    queryKey: ["anamnese_v2", childId],
    enabled: !!childId,
    queryFn: async () => {
      if (!childId) return null;
      const { data, error } = await supabase
        .from("anamnese_v2")
        .select("responses, completed")
        .eq("child_id", childId)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const { concluidas } = useAuroraConcluidas(childId);

  const step6 = (anamnese?.responses as { step6?: Record<string, number> } | null)?.step6 ?? null;
  const idade = activeChild?.idade ?? null;
  const anamneseCompleta = !!anamnese?.completed;

  const recomendacao = useMemo(
    () => recomendarFaseAurora(step6, idade),
    [step6, idade],
  );

  // Estado por fase: concluida (100%), atual (>= recomendada e primeira não concluída), travada.
  const fasesEstado = useMemo(() => {
    const map = new Map<FaseAurora, EstadoFase>();
    const primeiraLiberada = recomendacao.fase;
    let jaEncontrouAtual = false;
    for (const f of FASES) {
      const aulas = f.curso.unidades.flatMap((u) => u.aulas);
      const feitas = aulas.filter((a) => concluidas.has(a.slug)).length;
      const completa = aulas.length > 0 && feitas >= aulas.length;

      if (f.n < primeiraLiberada) {
        map.set(f.n, completa ? "concluida" : "travada");
        continue;
      }
      if (completa) {
        map.set(f.n, "concluida");
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
  }, [recomendacao.fase, concluidas]);

  const totalGeral = FASES.reduce((s, f) => s + f.curso.unidades.flatMap((u) => u.aulas).length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-500 via-orange-600 to-purple-800 text-white">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <Link to="/" className="text-white/80 text-sm">
          ◂ Voltar
        </Link>

        <header className="text-center mt-3 mb-6">
          <p className="text-yellow-200 font-bold text-xs tracking-wider">
            ALFABETIZAÇÃO 3–7 ANOS · CIÊNCIA DA LEITURA
          </p>
          <h1 className="text-3xl sm:text-4xl font-black mt-1">Ler com Aurora</h1>
          <p className="text-yellow-100 text-sm mt-1">
            {totalGeral} missões · 15 min/dia · trilha automática por anamnese
          </p>
        </header>

        {!childId ? (
          <GateSemCrianca />
        ) : loadingAnamnese ? (
          <div className="rounded-2xl bg-white/10 border-2 border-white/15 p-5 text-center text-sm">
            Carregando anamnese de {activeChild?.nome ?? "sua criança"}…
          </div>
        ) : !anamneseCompleta ? (
          <GateSemAnamnese childId={childId} nome={activeChild?.nome ?? "sua criança"} />
        ) : (
          <>
            <div className="rounded-3xl p-4 mb-3 bg-gradient-to-br from-emerald-400 to-lime-500 text-emerald-950 shadow-xl">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                <Sparkles className="h-4 w-4" /> Fase recomendada pela anamnese
              </div>
              <div className="mt-1 text-lg font-black leading-tight">
                Fase {recomendacao.fase} · {recomendacao.nome}
              </div>
              <p className="text-sm mt-1">{recomendacao.motivo}</p>
              <p className="text-[11px] mt-2 opacity-80">
                As outras fases ficam bloqueadas até esta ser concluída — nada de pular etapas.
              </p>
            </div>


            {FASES.map((f) => (
              <FaseBloco
                key={f.n}
                fase={f.n}
                curso={f.curso}
                concluidas={concluidas}
                gradiente={f.gradiente}
                badge={f.badge}
                estado={fasesEstado.get(f.n) ?? "travada"}
              />
            ))}

            <div className="mt-10 rounded-2xl bg-black/30 p-4 text-xs text-white/80">
              <p className="font-bold text-yellow-200 mb-1">📚 Base científica</p>
              <p>
                Não prometemos prazos — cada criança aprende no próprio ritmo. Usamos técnicas com evidência:
                consciência fonológica (Heggerty, NRP 2000), princípio alfabético (Ehri 2005), traçado motor
                (Longcamp 2008), caixas de Elkonin (1973), deleção fonêmica, ensino explícito de correspondência
                grafema-fonema (PNA-MEC 2019) e ortografia por padrões regulares (Morais 2020).
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function GateSemCrianca() {
  return (
    <div className="rounded-3xl bg-white/10 border-2 border-white/15 p-6 text-white">
      <div className="flex items-center gap-2 text-yellow-300 mb-2">
        <ClipboardCheck className="h-5 w-5" />
        <p className="text-[11px] font-black uppercase tracking-widest">Selecione uma criança</p>
      </div>
      <h2 className="text-xl font-black leading-tight">Escolha a criança no painel</h2>
      <p className="mt-2 text-white/85 text-sm">
        A trilha é escolhida automaticamente a partir da anamnese respondida pelo adulto. Selecione a criança
        para começarmos.
      </p>
      <Link
        to="/painel-pais"
        className="mt-4 inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-400 text-orange-950 font-black px-5"
      >
        Abrir painel de pais
      </Link>
    </div>
  );
}

function GateSemAnamnese({ childId, nome }: { childId: string; nome: string }) {
  return (
    <div className="rounded-3xl bg-white/10 border-2 border-white/15 p-6 text-white">
      <div className="flex items-center gap-2 text-yellow-300 mb-2">
        <ClipboardCheck className="h-5 w-5" />
        <p className="text-[11px] font-black uppercase tracking-widest">Anamnese obrigatória</p>
      </div>
      <h2 className="text-xl font-black leading-tight">
        Responda a anamnese de {nome} primeiro
      </h2>
      <p className="mt-2 text-white/85 text-sm">
        O app decide sozinho por onde {nome} deve começar — mas precisa das suas respostas sobre leitura, idade
        e desenvolvimento. Nada de escolher aulas na mão: quem sabe o que {nome} já domina é você.
      </p>
      <Link
        to="/anamnese/$childId"
        params={{ childId }}
        className="mt-4 inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-400 text-orange-950 font-black px-5"
      >
        Responder anamnese agora
      </Link>
    </div>
  );
}
