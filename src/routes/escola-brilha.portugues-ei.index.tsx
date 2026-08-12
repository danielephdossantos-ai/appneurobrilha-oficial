import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Lock, CheckCircle2, Sparkles, ClipboardCheck, Clock } from "lucide-react";
import { cursosEI } from "@/escola-brilha/curso-portugues-ei/registry";
import type { CursoEI } from "@/escola-brilha/curso-portugues-ei/types";
import {
  LABEL_NIVEL,
  niveisAPartirDe,
  recomendarNivelEI,
  SLUG_CURSO,
  type NivelEI,
} from "@/escola-brilha/curso-portugues-ei/nivelRecomendado";
import { useAppState } from "@/core/store";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/escola-brilha/portugues-ei/")({
  head: () => ({
    meta: [
      { title: "Códice de Português — Educação Infantil" },
      {
        name: "description",
        content:
          "Trilhas de língua portuguesa para Maternal, Pré I e Pré II. A anamnese decide por onde a criança começa.",
      },
    ],
  }),
  component: TrilhaEIPortugues,
});

type NivelEscolhido = { nivel: NivelEI } | null;

function TrilhaEIPortugues() {
  const { activeChild } = useAppState();
  const childId = activeChild?.id ?? null;
  const qc = useQueryClient();

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

  const { data: childRow, isLoading: loadingChild } = useQuery({
    queryKey: ["child.nivel_portugues_ei", childId],
    enabled: !!childId,
    queryFn: async () => {
      if (!childId) return null;
      const { data, error } = await supabase
        .from("children")
        .select("nivel_portugues_ei, idade, nome")
        .eq("id", childId)
        .maybeSingle();
      if (error) throw error;
      return data as { nivel_portugues_ei: NivelEI | null; idade: number | null; nome: string | null } | null;
    },
  });

  const salvarNivel = useMutation({
    mutationFn: async (nivel: NivelEI) => {
      if (!childId) throw new Error("sem_crianca");
      const { error } = await supabase
        .from("children")
        .update({ nivel_portugues_ei: nivel } as any)
        .eq("id", childId);
      if (error) throw error;
      return nivel;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["child.nivel_portugues_ei", childId] });
    },
  });

  const step6 = (anamnese?.responses as { step6?: Record<string, number> } | null)?.step6 ?? null;
  const idade = childRow?.idade ?? activeChild?.idade ?? null;
  const anamneseCompleta = !!anamnese?.completed;
  const nivelSalvo: NivelEI | null = (childRow?.nivel_portugues_ei as NivelEI | null) ?? null;

  const recomendacao = useMemo(() => recomendarNivelEI(step6, idade), [step6, idade]);

  // Sem criança selecionada
  if (!childId) {
    return <Layout><GateSemCrianca /></Layout>;
  }

  if (loadingAnamnese || loadingChild) {
    return (
      <Layout>
        <div className="rounded-2xl bg-white/10 border-2 border-white/15 p-5 text-center text-sm">
          Carregando dados de {activeChild?.nome ?? "sua criança"}…
        </div>
      </Layout>
    );
  }

  if (!anamneseCompleta) {
    return (
      <Layout>
        <GateSemAnamnese childId={childId} nome={activeChild?.nome ?? "sua criança"} />
      </Layout>
    );
  }

  // Se ainda não decidiu o nível E a anamnese pede começar de trás, mostra tela de escolha
  if (!nivelSalvo && recomendacao.precisaComecarDeTras) {
    return (
      <Layout>
        <TelaRecomendacao
          nome={activeChild?.nome ?? "sua criança"}
          idade={idade}
          nivelRecomendado={recomendacao.nivelRecomendado}
          nivelPorIdade={recomendacao.nivelPorIdade}
          motivo={recomendacao.motivo}
          salvando={salvarNivel.isPending}
          onEscolher={(n) => salvarNivel.mutate(n)}
        />
      </Layout>
    );
  }

  // Nível efetivo: o salvo, ou o recomendado (que pode coincidir com a idade)
  const nivelInicial: NivelEI = nivelSalvo ?? recomendacao.nivelRecomendado;

  return (
    <Layout>
      <ResumoNivel
        nome={activeChild?.nome ?? "sua criança"}
        nivelInicial={nivelInicial}
        recomendado={recomendacao.nivelRecomendado}
        precisaComecarDeTras={recomendacao.precisaComecarDeTras}
        motivo={recomendacao.motivo}
        onTrocar={() => salvarNivel.mutate(recomendacao.nivelRecomendado)}
        podeTrocar={nivelSalvo !== null && nivelSalvo !== recomendacao.nivelRecomendado}
      />
      <ListaNiveis nivelInicial={nivelInicial} childId={childId} />
    </Layout>
  );
}

/* ---------------- Layout ---------------- */

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-fuchsia-900 to-pink-900 text-white">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <Link to="/" className="text-white/80 text-sm">◂ Voltar</Link>
        <header className="text-center mt-3 mb-6">
          <p className="text-yellow-300 font-bold text-xs tracking-wider">
            EDUCAÇÃO INFANTIL · BNCC
          </p>
          <h1 className="text-3xl sm:text-4xl font-black mt-2">Códice de Língua Portuguesa</h1>
          <p className="text-white/80 mt-2 text-sm max-w-xl mx-auto">
            Escutar, falar, brincar com sons e imaginar. A anamnese decide por onde começar.
          </p>
        </header>
        {children}
      </div>
    </div>
  );
}

/* ---------------- Gates ---------------- */

function GateSemCrianca() {
  return (
    <div className="rounded-3xl bg-white/10 border-2 border-white/15 p-6">
      <div className="flex items-center gap-2 text-yellow-300 mb-2">
        <ClipboardCheck className="h-5 w-5" />
        <p className="text-[11px] font-black uppercase tracking-widest">Selecione uma criança</p>
      </div>
      <h2 className="text-xl font-black leading-tight">Escolha a criança no painel</h2>
      <p className="mt-2 text-white/85 text-sm">
        A trilha é escolhida automaticamente a partir da anamnese respondida pelo adulto.
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
    <div className="rounded-3xl bg-white/10 border-2 border-white/15 p-6">
      <div className="flex items-center gap-2 text-yellow-300 mb-2">
        <ClipboardCheck className="h-5 w-5" />
        <p className="text-[11px] font-black uppercase tracking-widest">Anamnese obrigatória</p>
      </div>
      <h2 className="text-xl font-black leading-tight">Responda a anamnese de {nome} primeiro</h2>
      <p className="mt-2 text-white/85 text-sm">
        O app decide sozinho por onde {nome} deve começar — mas precisa das suas respostas sobre
        leitura, idade e desenvolvimento.
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

/* ---------------- Tela de Recomendação ---------------- */

function TelaRecomendacao({
  nome,
  idade,
  nivelRecomendado,
  nivelPorIdade,
  motivo,
  salvando,
  onEscolher,
}: {
  nome: string;
  idade: number | null;
  nivelRecomendado: NivelEI;
  nivelPorIdade: NivelEI;
  motivo: string;
  salvando: boolean;
  onEscolher: (n: NivelEI) => void;
}) {
  const totalExtra = niveisAPartirDe(nivelRecomendado).length - niveisAPartirDe(nivelPorIdade).length;

  return (
    <div className="rounded-3xl bg-white text-slate-900 p-6 shadow-2xl">
      <div className="flex items-center gap-2 text-purple-700 mb-2">
        <Sparkles className="h-5 w-5" />
        <p className="text-[11px] font-black uppercase tracking-widest">Recomendação da anamnese</p>
      </div>
      <h2 className="text-2xl font-black leading-tight">
        {nome} tem {idade ?? "?"} anos — série {LABEL_NIVEL[nivelPorIdade]}.
      </h2>
      <p className="mt-3 text-slate-700">{motivo}</p>

      <div className="mt-5 rounded-2xl bg-amber-50 border-2 border-amber-300 p-4">
        <div className="flex items-center gap-2 text-amber-800 font-black text-sm">
          <Clock className="h-4 w-4" />
          Isso aumenta o tempo de estudo
        </div>
        <p className="text-amber-900 text-sm mt-1">
          Em vez de só {LABEL_NIVEL[nivelPorIdade]}, {nome} fará{" "}
          {niveisAPartirDe(nivelRecomendado).map((n) => LABEL_NIVEL[n].split(" ")[0]).join(" → ")}.
          {totalExtra > 0 && ` São ${totalExtra} nível(is) a mais.`} Podemos incluir na rotina dele(a)?
        </p>
      </div>

      <div className="mt-5 grid gap-3">
        <button
          disabled={salvando}
          onClick={() => onEscolher(nivelRecomendado)}
          className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black py-4 shadow-lg active:scale-[0.98] disabled:opacity-60"
        >
          Sim — começar do {LABEL_NIVEL[nivelRecomendado].split(" ")[0]}
        </button>
        <button
          disabled={salvando}
          onClick={() => onEscolher(nivelPorIdade)}
          className="w-full rounded-2xl bg-white border-2 border-slate-300 text-slate-700 font-bold py-4 active:scale-[0.98] disabled:opacity-60"
        >
          Não — manter em {LABEL_NIVEL[nivelPorIdade].split(" ")[0]}
        </button>
      </div>

      <p className="mt-4 text-[11px] text-slate-500 text-center">
        Você pode mudar essa decisão depois no painel dos pais.
      </p>
    </div>
  );
}

/* ---------------- Resumo do nível atual ---------------- */

function ResumoNivel({
  nome,
  nivelInicial,
  recomendado,
  precisaComecarDeTras,
  motivo,
  onTrocar,
  podeTrocar,
}: {
  nome: string;
  nivelInicial: NivelEI;
  recomendado: NivelEI;
  precisaComecarDeTras: boolean;
  motivo: string;
  onTrocar: () => void;
  podeTrocar: boolean;
}) {
  return (
    <div className="rounded-3xl p-4 mb-4 bg-gradient-to-br from-emerald-400 to-lime-500 text-emerald-950 shadow-xl">
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
        <Sparkles className="h-4 w-4" />
        {precisaComecarDeTras ? "Trilha adaptada pela anamnese" : "Trilha da anamnese"}
      </div>
      <div className="mt-1 text-lg font-black leading-tight">
        {nome} começa em: {LABEL_NIVEL[nivelInicial]}
      </div>
      <p className="text-sm mt-1">{motivo}</p>
      {podeTrocar && (
        <button
          onClick={onTrocar}
          className="mt-3 text-[11px] underline font-bold"
        >
          Voltar para o recomendado ({LABEL_NIVEL[recomendado]})
        </button>
      )}
    </div>
  );
}

/* ---------------- Lista de níveis (com trava) ---------------- */

function ListaNiveis({ nivelInicial, childId }: { nivelInicial: NivelEI; childId: string }) {
  const [aberto, setAberto] = useState<NivelEI | null>(null);
  const ordem: NivelEI[] = ["maternal", "pre1", "pre2"];

  const cursos: Record<NivelEI, CursoEI | undefined> = {
    maternal: cursosEI.find((c) => c.slug === SLUG_CURSO.maternal),
    pre1: cursosEI.find((c) => c.slug === SLUG_CURSO.pre1),
    pre2: cursosEI.find((c) => c.slug === SLUG_CURSO.pre2),
  };

  const iniciaEm = ordem.indexOf(nivelInicial);

  return (
    <div className="grid gap-4">
      {ordem.map((n, i) => {
        const curso = cursos[n];
        if (!curso) return null;
        const travado = i < iniciaEm;
        const isAtual = i === iniciaEm;
        const total = curso.unidades.reduce((a, u) => a + u.aulas.length, 0);
        const concluidas = countConcluidas(curso, childId);
        const completo = concluidas >= total && total > 0;
        // Trava progressiva: só destrava níveis seguintes se o anterior estiver 100%
        const destravadoPorProgresso = i <= iniciaEm || todosAnterioresCompletos(ordem, iniciaEm, i, cursos, childId);
        const bloqueado = travado || (!isAtual && !destravadoPorProgresso);

        return (
          <div key={n}>
            <button
              onClick={() => !bloqueado && setAberto(aberto === n ? null : n)}
              disabled={bloqueado}
              className="w-full rounded-3xl p-5 text-left shadow-xl border-2 border-white/15 relative overflow-hidden disabled:opacity-60 active:scale-[0.99] transition"
              style={{
                background: bloqueado
                  ? "linear-gradient(160deg,#4b5563,#1f2937)"
                  : `linear-gradient(160deg, ${curso.corSecundaria}, ${curso.corPrimaria})`,
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/10 grid place-items-center overflow-hidden shrink-0">
                  <img src={curso.mascoteUrl} alt="" className="w-14 h-14 object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-white/80 font-black">
                    {LABEL_NIVEL[n]}
                  </p>
                  <h3 className="text-lg font-black leading-tight">{curso.titulo}</h3>
                  <p className="text-[11px] text-white/85 mt-0.5">
                    {concluidas}/{total} aulas · {completo ? "concluído ✓" : `${curso.unidades.length} unidades`}
                  </p>
                </div>
                <div className="shrink-0">
                  {bloqueado ? (
                    <Lock className="h-6 w-6 text-white/70" />
                  ) : completo ? (
                    <CheckCircle2 className="h-6 w-6 text-emerald-300" />
                  ) : (
                    <span className="text-2xl">▸</span>
                  )}
                </div>
              </div>
              {bloqueado && (
                <p className="mt-2 text-[11px] text-white/70">
                  {travado
                    ? "Nível anterior ao ponto de partida — não é necessário."
                    : "Termine o nível anterior para destravar."}
                </p>
              )}
            </button>

            {aberto === n && !bloqueado && (
              <TrilhaSerie curso={curso} childId={childId} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function todosAnterioresCompletos(
  ordem: NivelEI[],
  iniciaEm: number,
  idx: number,
  cursos: Record<NivelEI, CursoEI | undefined>,
  childId: string,
): boolean {
  for (let j = iniciaEm; j < idx; j++) {
    const c = cursos[ordem[j]];
    if (!c) return false;
    const total = c.unidades.reduce((a, u) => a + u.aulas.length, 0);
    if (countConcluidas(c, childId) < total) return false;
  }
  return true;
}

function countConcluidas(curso: CursoEI, childId: string): number {
  try {
    if (typeof window === "undefined") return 0;
    const key = `eb.ei.pt.concluidas.${curso.slug}.${childId}`;
    const legacy = `eb.ei.pt.concluidas.${curso.slug}`;
    const raw = localStorage.getItem(key) ?? localStorage.getItem(legacy);
    if (!raw) return 0;
    const arr = JSON.parse(raw) as string[];
    const slugs = new Set(curso.unidades.flatMap((u) => u.aulas.map((a) => a.slug)));
    return arr.filter((s) => slugs.has(s)).length;
  } catch {
    return 0;
  }
}

/* ---------------- Trilha estilo Duolingo (mantida) ---------------- */

function TrilhaSerie({ curso, childId }: { curso: CursoEI; childId: string }) {
  const key = `eb.ei.pt.concluidas.${curso.slug}.${childId}`;
  const legacy = `eb.ei.pt.concluidas.${curso.slug}`;
  const concluidas = new Set<string>(
    (() => {
      try {
        const raw =
          typeof window !== "undefined"
            ? localStorage.getItem(key) ?? localStorage.getItem(legacy)
            : null;
        return raw ? (JSON.parse(raw) as string[]) : [];
      } catch {
        return [];
      }
    })(),
  );

  const aulasFlat = curso.unidades.flatMap((u) => u.aulas.map((a) => ({ aula: a, unidade: u })));

  return (
    <div className="mt-3 rounded-3xl bg-black/25 p-4">
      <div className="space-y-2">
        {curso.unidades.map((u) => (
          <div key={u.slug} className="pt-3">
            <div className="text-center mb-3">
              <div className="inline-block bg-black/40 rounded-full px-4 py-1 text-xs uppercase tracking-wider font-bold text-yellow-300">
                Unidade {u.numero}
              </div>
              <div className="text-sm font-bold mt-1">{u.titulo}</div>
            </div>
            <div className="space-y-4">
              {u.aulas.map((a, i) => {
                const flatIdx = aulasFlat.findIndex((x) => x.aula.slug === a.slug);
                const align = flatIdx % 2 === 0 ? "justify-start" : "justify-end";
                const feito = concluidas.has(a.slug);
                return (
                  <div key={a.slug} className={`flex ${align} px-6`}>
                    <Link
                      to="/escola-brilha/portugues-ei/$serie/$aula"
                      params={{ serie: curso.serie, aula: a.slug }}
                      className="group relative w-32 h-32 rounded-full grid place-items-center shadow-xl active:scale-95 transition"
                      style={{
                        background: `linear-gradient(135deg, ${curso.corPrimaria}, #fde68a)`,
                        color: curso.corSecundaria,
                      }}
                    >
                      <div className="text-center px-2">
                        <div className="text-3xl">{a.icone}</div>
                        <div className="text-[10px] font-black mt-1 leading-tight line-clamp-3">
                          {a.titulo}
                        </div>
                        <div className="text-[9px] opacity-70 mt-0.5">Aula {i + 1}</div>
                      </div>
                      {feito && (
                        <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 grid place-items-center text-white text-sm">
                          ✓
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
    </div>
  );
}
