import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Compass, CheckCircle2, ChevronDown, ChevronRight, Lock, Sparkles } from "lucide-react";
import { Shell } from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { useAppState } from "@/core/store";
import { listAulas } from "@/escola-brilha/registry";
import { listCursos } from "@/escola-brilha/curso-v4/registry";
import { RevisoesRecomendadas } from "@/escola-brilha/RevisoesRecomendadas";
import { ProximaMissao } from "@/escola-brilha/ProximaMissao";
import { MasteryBadge, type NivelDominio } from "@/escola-brilha/MasteryBadge";
import { temaDaDisciplina, slugDisc } from "@/escola-brilha/missoes-tema";
import { mascoteDaDisciplina } from "@/escola-brilha/mascotes-disciplina";
import { cursoLerComAurora } from "@/escola-brilha/curso-ler-com-aurora/aulas";



export const Route = createFileRoute("/escola-brilha/")({
  head: () => ({
    meta: [
      { title: "Escola Brilha — Missões de Aprendizagem" },
      {
        name: "description",
        content:
          "Aventuras de aprendizagem organizadas por série e disciplina. Cada missão é uma história — matemática, leitura, ciências, história, arte e muito mais.",
      },
    ],
  }),
  component: EscolaBrilhaCatalogo,
});

type HabRow = { codigo: string; titulo: string; ano: string; componente: string };

// Ordem oficial das séries no catálogo.
const SERIES_ORDEM = [
  "Educação Infantil",
  "1º Ano",
  "2º Ano",
  "3º Ano",
  "4º Ano",
  "5º Ano",
  "6º Ano",
  "7º Ano",
  "8º Ano",
  "9º Ano",
] as const;
type Serie = (typeof SERIES_ORDEM)[number];

// Expande "X ao Y Ano" para cada série que ele cobre.
function expandirAno(ano: string): Serie[] {
  const a = (ano || "").trim();
  if (!a) return [];
  const direto = SERIES_ORDEM.find((s) => s === a);
  if (direto) return [direto];
  if (a === "Educação Infantil") return ["Educação Infantil"];
  // padrões "1º ao 5º Ano", "6º ao 9º Ano", etc.
  const m = a.match(/(\d)[ºo]?\s*ao\s*(\d)[ºo]?\s*Ano/i);
  if (m) {
    const ini = parseInt(m[1], 10);
    const fim = parseInt(m[2], 10);
    const out: Serie[] = [];
    for (let i = ini; i <= fim; i++) {
      const label = `${i}º Ano` as Serie;
      if (SERIES_ORDEM.includes(label)) out.push(label);
    }
    return out;
  }
  return []; // Ensino Médio e outros ficam de fora conforme escopo
}

function EscolaBrilhaCatalogo() {
  const navigate = useNavigate();
  const { activeChild } = useAppState();
  const [habilidades, setHabilidades] = useState<HabRow[]>([]);
  const [progresso, setProgresso] = useState<Record<string, boolean>>({});
  const [dominio, setDominio] = useState<Record<string, NivelDominio>>({});

  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState<"disponiveis" | "todas">("disponiveis");
  const [serieAberta, setSerieAberta] = useState<Serie | null>(null);
  const [discAberta, setDiscAberta] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      // Pagina em blocos para contornar o limite de 1000 do PostgREST
      // (a coleção BNCC tem ~1500 habilidades e alfabéticamente as EI
      // ficam depois das EF — sem paginar, a Educação Infantil somem).
      const PAGE = 1000;
      const acumulado: Array<{ codigo_bncc: string; titulo: string | null; ano: string | null; disciplina: string | null }> = [];
      for (let offset = 0; ; offset += PAGE) {
        const { data, error } = await supabase
          .from("bncc_habilidades")
          .select("codigo_bncc, titulo, ano, disciplina")
          .order("codigo_bncc")
          .range(offset, offset + PAGE - 1);
        if (error || !data || data.length === 0) break;
        acumulado.push(...data);
        if (data.length < PAGE) break;
      }
      const rows: HabRow[] = acumulado.map((r) => ({
        codigo: r.codigo_bncc,
        titulo: r.titulo ?? r.codigo_bncc,
        ano: r.ano ?? "",
        componente: r.disciplina ?? "",
      }));
      setHabilidades(rows);
      setLoading(false);

    })();
  }, []);

  useEffect(() => {
    if (!activeChild?.id) return;
    (async () => {
      const { data } = await supabase
        .from("escola_progresso")
        .select("codigo_bncc, concluida, nivel_dominio")
        .eq("child_id", activeChild.id);
      const map: Record<string, boolean> = {};
      const mapDom: Record<string, NivelDominio> = {};
      for (const r of (data ?? []) as Array<{ codigo_bncc: string; concluida: boolean | null; nivel_dominio: NivelDominio | null }>) {
        map[r.codigo_bncc] = !!r.concluida;
        if (r.nivel_dominio) mapDom[r.codigo_bncc] = r.nivel_dominio;
      }
      setProgresso(map);
      setDominio(mapDom);
    })();
  }, [activeChild?.id]);


  const aulasEscritas = listAulas();
  const totalMissoesLerAurora = cursoLerComAurora.unidades.reduce((s, u) => s + u.aulas.length, 0);
  const escritasSet = useMemo(() => new Set(aulasEscritas.map((a) => a.codigo)), [aulasEscritas]);

  // Agrupa: Série -> Disciplina -> [habilidades]
  const arvore = useMemo(() => {
    const tree: Record<Serie, Record<string, HabRow[]>> = {} as any;
    for (const s of SERIES_ORDEM) tree[s] = {};
    for (const h of habilidades) {
      if (filtro === "disponiveis" && !escritasSet.has(h.codigo)) continue;
      const series = expandirAno(h.ano);
      const disc = slugDisc(h.componente);
      const isArte = disc === "arte" || disc === "artes" || /^EF15AR/i.test(h.codigo);
      for (const s of series) {
        // Arte (Atelier das Cores) só disponível para 1º Ano — remover 2º-5º.
        if (isArte && s !== "1º Ano") continue;
        (tree[s][disc] ||= []).push(h);
      }

    }
    // ordena habilidades por código dentro de cada disciplina
    for (const s of SERIES_ORDEM) {
      for (const d of Object.keys(tree[s])) {
        tree[s][d].sort((a, b) => a.codigo.localeCompare(b.codigo));
      }
    }
    return tree;
  }, [habilidades, filtro, escritasSet]);

  const contarSerie = (s: Serie) =>
    Object.values(arvore[s]).reduce((acc, arr) => acc + arr.length, 0);

  // Mapa: Série -> disc slug -> Curso v4 correspondente
  // Slugs terminados em "-v2" são pilotos e NÃO devem substituir a versão original no mapa.
  const cursoPorSerieDisc = useMemo(() => {
    const map: Record<string, Record<string, ReturnType<typeof listCursos>[number]>> = {};
    for (const c of listCursos()) {
      if (c.slug.endsWith("-v2")) continue;
      const s = c.ano;
      const d = slugDisc(c.disciplina);
      (map[s] ||= {})[d] = c;
    }
    return map;
  }, []);



  return (
    <Shell>
      <div className="max-w-3xl mx-auto pb-24">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate({ to: "/" })}
            className="h-10 w-10 rounded-xl bg-white/80 grid place-items-center active:scale-95 shadow-sm"
            aria-label="Voltar"
          >
            <ArrowLeft className="h-5 w-5 text-[#0d1f55]" />
          </button>
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#0d1f55]/55">
              Missões por série e disciplina
            </div>
            <h1 className="text-2xl font-black text-[#0d1f55]">Escola Brilha</h1>
          </div>
        </div>

        {/* Info */}
        <div className="rounded-2xl bg-gradient-to-br from-[#4C9EFF]/15 to-[#9B6CFF]/15 border-2 border-[#4C9EFF]/25 p-4 mb-4">
          <div className="flex items-center gap-2 text-[#4C9EFF] mb-1">
            <Compass className="h-4 w-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              {aulasEscritas.length + totalMissoesLerAurora} missão
              {aulasEscritas.length + totalMissoesLerAurora === 1 ? "" : "es"} disponível
              {aulasEscritas.length === 1 ? "" : "eis"} · {habilidades.length} aventuras no total
            </span>
          </div>
          <p className="text-sm text-[#0d1f55] leading-relaxed">
            Toque numa série para ver os temas de aventura, e num tema para escolher a próxima missão.
          </p>
        </div>

        {/* Cursos v4 agora aparecem DENTRO da sua série, no mesmo padrão visual do 1º Ano */}



        {/* Próxima missão recomendada — experiência contínua */}
        <ProximaMissao
          childId={activeChild?.id}
          serieCrianca={activeChild?.serie}
          nomeCrianca={activeChild?.nome}
        />

        {/* Revisões automáticas recomendadas */}
        <RevisoesRecomendadas childId={activeChild?.id} />

        {/* Atalho para escolher os professores */}
        <Link
          to="/escola-brilha/professores"
          className="mb-4 mt-2 flex items-center justify-between gap-3 rounded-2xl p-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-[#0d1f55] font-black active:scale-[0.98]"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" /> Meus Professores
          </span>
          <span className="text-xs font-bold opacity-80">Escolher / Desbloquear →</span>
        </Link>

        {/* Curso especial de alfabetização — aparece como categoria própria */}
        <Link
          to="/escola-brilha/ler-com-aurora"
          className="mb-4 flex items-center justify-between gap-3 rounded-2xl p-4 text-white font-black active:scale-[0.98] shadow-lg"
          style={{ background: "linear-gradient(135deg, #f59e0b, #7c3aed)" }}
        >
          <span>
            <span className="block text-[10px] uppercase tracking-widest opacity-90">
              Categoria especial · Pré II + 1º Ano
            </span>
            <span className="block text-lg leading-tight mt-0.5">
              🔤 Ler com Aurora
            </span>
            <span className="block text-[11px] font-bold opacity-90 mt-1">
              {totalMissoesLerAurora} missões diárias · Consciência fonológica →
            </span>
          </span>
          <Sparkles className="h-6 w-6 shrink-0" />
        </Link>

        {/* Filtro */}

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setFiltro("disponiveis")}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest ${
              filtro === "disponiveis"
                ? "bg-[#0d1f55] text-white"
                : "bg-white text-[#0d1f55]/60 border border-[#0d1f55]/15"
            }`}
          >
            Disponíveis
          </button>
          <button
            onClick={() => setFiltro("todas")}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest ${
              filtro === "todas"
                ? "bg-[#0d1f55] text-white"
                : "bg-white text-[#0d1f55]/60 border border-[#0d1f55]/15"
            }`}
          >
            Todas
          </button>
        </div>

        {loading ? (
          <div className="text-[#0d1f55]/60 text-sm text-center py-10">Carregando…</div>
        ) : (
          <div className="space-y-2">
            {SERIES_ORDEM.map((serie) => {
              const discsArvore = Object.keys(arvore[serie]);
              const discsCurso = Object.keys(cursoPorSerieDisc[serie] ?? {});
              const discsExtra: string[] = [];
              if (serie === "6º Ano" || serie === "7º Ano" || serie === "8º Ano" || serie === "9º Ano") discsExtra.push("geografia");
              if (serie === "Educação Infantil") discsExtra.push("portugues");
              
              const disciplinas = Array.from(new Set([...discsArvore, ...discsCurso, ...discsExtra])).sort((a, b) => a.localeCompare(b));
              const mostraLerComAurora = serie === "Educação Infantil" || serie === "1º Ano";

              const total = contarSerie(serie);
              const aberta = serieAberta === serie;
              return (
                <div key={serie} className="rounded-2xl bg-white border-2 border-white shadow-sm overflow-hidden">
                  <button
                    onClick={() => {
                      setSerieAberta(aberta ? null : serie);
                      setDiscAberta(null);
                    }}
                    className="w-full flex items-center gap-3 p-4 active:scale-[0.995]"
                  >
                    <div className="h-11 w-11 rounded-xl bg-[#4C9EFF]/15 text-[#4C9EFF] grid place-items-center shrink-0">
                      {aberta ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-base font-black text-[#0d1f55]">{serie}</div>
                      <div className="text-[11px] text-[#0d1f55]/60">
                        {disciplinas.length} tema{disciplinas.length === 1 ? "" : "s"} de aventura ·{" "}
                        {total} missão{total === 1 ? "" : "es"}
                      </div>
                    </div>
                  </button>

                  {aberta && (
                    <div className="border-t border-[#0d1f55]/10 bg-[#F7F9FF] p-2 space-y-2">
                      {(serie === "1º Ano" || serie === "2º Ano" || serie === "3º Ano" || serie === "4º Ano" || serie === "5º Ano" || serie === "6º Ano" || serie === "7º Ano" || serie === "8º Ano" || serie === "9º Ano") && (
                        <Link
                          to="/escola-brilha/trilha-ingles/$serie"
                          params={{
                            serie:
                              serie === "1º Ano"
                                ? "1ano"
                                : serie === "2º Ano"
                                  ? "2ano"
                                  : serie === "3º Ano"
                                    ? "3ano"
                                    : serie === "4º Ano"
                                      ? "4ano"
                                      : serie === "5º Ano"
                                        ? "5ano"
                                        : serie === "6º Ano"
                                          ? "6ano"
                                          : serie === "7º Ano"
                                            ? "7ano"
                                            : serie === "8º Ano"
                                              ? "8ano"
                                              : "9ano",
                          }}
                          className="block rounded-2xl p-4 text-white font-black active:scale-[0.98] shadow-lg"
                          style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}
                        >
                          <div className="text-[10px] uppercase tracking-widest opacity-90">
                            🇺🇸 Inglês · {serie}
                          </div>
                          <div className="text-lg leading-tight mt-0.5">
                            {serie === "1º Ano"
                              ? "My First English Adventure"
                              : serie === "2º Ano"
                                ? "My English Journey"
                                : serie === "3º Ano"
                                  ? "My English Adventure"
                                  : serie === "4º Ano"
                                    ? "My English Portfolio"
                                    : serie === "5º Ano"
                                      ? "My English Portfolio — Level 2"
                                      : serie === "6º Ano"
                                        ? "English Academy — Level 1"
                                        : serie === "7º Ano"
                                          ? "English Academy — Level 2"
                                          : serie === "8º Ano"
                                            ? "English Academy — Level 3"
                                            : "English for Life — Final Level 🎓"}
                          </div>
                          <div className="text-[11px] font-bold opacity-90 mt-1">
                            Trilha estilo Duolingo — abrir mapa de aulas →
                          </div>
                        </Link>
                      )}


                        {mostraLerComAurora && (
                          <Link
                            to="/escola-brilha/ler-com-aurora"
                            className="block rounded-2xl p-4 text-white font-black active:scale-[0.98] shadow-lg"
                            style={{ background: "linear-gradient(135deg, #f59e0b, #7c3aed)" }}
                          >
                            <div className="text-[10px] uppercase tracking-widest opacity-90">
                              🔤 Curso especial de leitura · Pré II + 1º Ano
                            </div>
                            <div className="text-lg leading-tight mt-0.5">
                              Ler com Aurora — Fase 1
                            </div>
                            <div className="text-[11px] font-bold opacity-90 mt-1">
                              {totalMissoesLerAurora} missões destravadas · abrir trilha →
                            </div>
                          </Link>
                        )}

                        {disciplinas.length === 0 && !mostraLerComAurora && (
                        <div className="text-[#0d1f55]/50 text-xs text-center py-6">
                          Nenhuma missão {filtro === "disponiveis" ? "disponível" : ""} nesta série ainda.
                        </div>
                      )}
                      {disciplinas.map((disc) => {
                        const lista = arvore[serie][disc] ?? [];
                        const chave = `${serie}::${disc}`;
                        const discAtiva = discAberta === chave;
                        const tema = temaDaDisciplina(disc);
                        const usaTrilhaDuo = serie === "Educação Infantil" || serie === "1º Ano";
                        const serieSlug =
                          serie === "Educação Infantil" ? "educacao-infantil" : "1ano";
                        const cursoV4Aqui = cursoPorSerieDisc[serie]?.[disc];
                        if (usaTrilhaDuo && !cursoV4Aqui) {
                          const masc = mascoteDaDisciplina(disc);
                          const serieLabel = serie === "Educação Infantil" ? "Educação Infantil" : "1º Ano";
                          return (
                            <Link
                              key={disc}
                              to="/escola-brilha/trilha/$serie/$disc"
                              params={{ serie: serieSlug, disc }}
                              className="block rounded-2xl p-4 text-white font-black active:scale-[0.98] shadow-lg"
                              style={{
                                background: `linear-gradient(135deg, ${masc.corPrimaria}, ${masc.corSecundaria})`,
                              }}
                            >
                              <div className="text-[10px] uppercase tracking-widest opacity-80">
                                {tema.nome} · {serieLabel}
                              </div>
                              <div className="text-lg leading-tight mt-0.5">
                                {tema.emoji} {tema.nome} com {masc.nome}
                              </div>
                              <div className="text-[11px] font-bold opacity-90 mt-1">
                                {lista.length} aula{lista.length === 1 ? "" : "s"} disponível
                                {lista.length === 1 ? "" : "eis"} · Diploma →
                              </div>
                            </Link>
                          );
                        }
                        if ((serie === "6º Ano" || serie === "7º Ano" || serie === "8º Ano" || serie === "9º Ano") && disc === "geografia") {
                          const serieSlugFund2 =
                            serie === "6º Ano" ? "6ano" : serie === "7º Ano" ? "7ano" : serie === "8º Ano" ? "8ano" : "9ano";
                          const serieLabelFund2 = serie;

                          return (
                            <div key={disc} className="space-y-2">
                              <Link
                                to="/escola-brilha/trilha-fund2/$serie/$disc"
                                params={{ serie: serieSlugFund2, disc: "geografia" }}
                                className="block rounded-2xl p-4 text-white font-black active:scale-[0.98] shadow-lg"
                                style={{ background: "linear-gradient(135deg, #0f172a, #0891b2)" }}
                              >
                                <div className="text-[10px] uppercase tracking-widest opacity-80">
                                  Geografia · {serieLabelFund2} · Fund. 2
                                </div>
                                <div className="text-lg leading-tight mt-0.5">
                                  🛰️ Trilha Acadêmica — Dashboard Científico
                                </div>
                                <div className="text-[11px] font-bold opacity-90 mt-1">
                                  7 unidades · Certificado Mestre em Análises →
                                </div>
                              </Link>
                              {serie === "6º Ano" && (
                                <Link
                                  to="/escola-brilha/curso/$slug"
                                  params={{ slug: "geografia-6ano-v2" }}
                                  className="block rounded-2xl p-4 text-white font-black active:scale-[0.98] shadow-lg"
                                  style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}
                                >
                                  <div className="text-[10px] uppercase tracking-widest opacity-90">
                                    🧪 PILOTO · Geografia · 6º Ano
                                  </div>
                                  <div className="text-lg leading-tight mt-0.5">
                                    🌍 Explorador Planetário (formato 5º Ano)
                                  </div>
                                  <div className="text-[11px] font-bold opacity-90 mt-1">
                                    7 unidades · 11 cenas visuais · linguagem teen →
                                  </div>
                                </Link>
                              )}
                              {serie === "7º Ano" && (
                                <Link
                                  to="/escola-brilha/curso/$slug"
                                  params={{ slug: "geografia-7ano-v2" }}
                                  className="block rounded-2xl p-4 text-white font-black active:scale-[0.98] shadow-lg"
                                  style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}
                                >
                                  <div className="text-[10px] uppercase tracking-widest opacity-90">
                                    🧪 PILOTO · Geografia · 7º Ano
                                  </div>
                                  <div className="text-lg leading-tight mt-0.5">
                                    🇧🇷 Explorador do Brasil
                                  </div>
                                  <div className="text-[11px] font-bold opacity-90 mt-1">
                                    7 unidades · 11 cenas visuais · linguagem teen →
                                  </div>
                                </Link>
                              )}
                              {serie === "8º Ano" && (
                                <Link
                                  to="/escola-brilha/curso/$slug"
                                  params={{ slug: "geografia-8ano-v2" }}
                                  className="block rounded-2xl p-4 text-white font-black active:scale-[0.98] shadow-lg"
                                  style={{ background: "linear-gradient(135deg, #7c3aed, #0f172a)" }}
                                >
                                  <div className="text-[10px] uppercase tracking-widest opacity-90">
                                    🧪 PILOTO · Geografia · 8º Ano
                                  </div>
                                  <div className="text-lg leading-tight mt-0.5">
                                    🌍 Explorador do Mundo
                                  </div>
                                  <div className="text-[11px] font-bold opacity-90 mt-1">
                                    7 unidades · 11 cenas visuais · linguagem teen →
                                  </div>
                                </Link>
                              )}
                              {serie === "9º Ano" && (
                                <Link
                                  to="/escola-brilha/curso/$slug"
                                  params={{ slug: "geografia-9ano-v2" }}
                                  className="block rounded-2xl p-4 text-white font-black active:scale-[0.98] shadow-lg"
                                  style={{ background: "linear-gradient(135deg, #0ea5e9, #0f172a)" }}
                                >
                                  <div className="text-[10px] uppercase tracking-widest opacity-90">
                                    🧪 PILOTO · Geografia · 9º Ano
                                  </div>
                                  <div className="text-lg leading-tight mt-0.5">
                                    🌐 Explorador do Planeta
                                  </div>
                                  <div className="text-[11px] font-bold opacity-90 mt-1">
                                    7 unidades · 11 cenas visuais · linguagem teen →
                                  </div>
                                </Link>
                              )}
                            </div>
                          );
                        }


                        const cursoV4 = cursoPorSerieDisc[serie]?.[disc];

                        if (cursoV4) {
                          const totalAulas = cursoV4.unidades.reduce((s, u) => s + u.aulas.length, 0);
                          const mostraPiloto2ano = serie === "2º Ano" && disc === "geografia";
                          return (
                            <div key={disc} className="space-y-2">
                              <Link
                                to="/escola-brilha/curso/$slug"
                                params={{ slug: cursoV4.slug }}
                                className="block rounded-2xl p-4 text-white font-black active:scale-[0.98] shadow-lg"
                                style={{
                                  background: `linear-gradient(135deg, ${cursoV4.corPrimaria}, ${cursoV4.corSecundaria})`,
                                }}
                              >
                                <div className="text-[10px] uppercase tracking-widest opacity-80">
                                  {cursoV4.disciplina} · {cursoV4.ano}
                                </div>
                                <div className="text-lg leading-tight mt-0.5">{cursoV4.titulo}</div>
                                <div className="text-[11px] font-bold opacity-90 mt-1">
                                  {totalAulas} aula{totalAulas === 1 ? "" : "s"} disponível
                                  {totalAulas === 1 ? "" : "eis"} →
                                </div>
                              </Link>
                              {mostraPiloto2ano && (
                                <Link
                                  to="/escola-brilha/curso/$slug"
                                  params={{ slug: "geografia-2ano-v2" }}
                                  className="block rounded-2xl p-4 text-white font-black active:scale-[0.98] shadow-lg"
                                  style={{ background: "linear-gradient(135deg, #22c55e, #0d1f55)" }}
                                >
                                  <div className="text-[10px] uppercase tracking-widest opacity-90">
                                    🧪 PILOTO · Geografia · 2º Ano
                                  </div>
                                  <div className="text-lg leading-tight mt-0.5">
                                    📍 Pequeno Cartógrafo
                                  </div>
                                  <div className="text-[11px] font-bold opacity-90 mt-1">
                                    Unidade 1 · 4 aulas · 11 cenas visuais →
                                  </div>
                                </Link>
                              )}
                            </div>
                          );
                        }

                        return (
                          <div key={disc} className="rounded-xl bg-white border border-[#0d1f55]/10 overflow-hidden">
                            <button
                              onClick={() => setDiscAberta(discAtiva ? null : chave)}
                              className="w-full flex items-center gap-3 p-3 active:scale-[0.995]"
                            >
                              <div className="h-9 w-9 rounded-lg bg-[#9B6CFF]/15 grid place-items-center shrink-0 text-lg">
                                {tema.emoji}
                              </div>
                              <div className="flex-1 text-left">
                                <div className="text-sm font-black text-[#0d1f55]">{tema.nome}</div>
                                <div className="text-[10px] text-[#0d1f55]/55 font-black uppercase tracking-widest">
                                  {lista.length} missão{lista.length === 1 ? "" : "es"}
                                </div>
                              </div>
                              <div className="h-7 w-7 rounded-lg bg-[#0d1f55]/5 grid place-items-center shrink-0 text-[#0d1f55]/50">
                                {discAtiva ? (
                                  <ChevronDown className="h-4 w-4" />
                                ) : (
                                  <ChevronRight className="h-4 w-4" />
                                )}
                              </div>
                            </button>

                            {discAtiva && (
                              <div className="border-t border-[#0d1f55]/10 p-2 space-y-2">
                                {lista.map((h, idx) => {
                                  const disponivel = escritasSet.has(h.codigo);
                                  const concluida = progresso[h.codigo];
                                  const Card = (
                                    <div
                                      className={`rounded-xl border-2 p-3 flex items-center gap-3 ${
                                        disponivel
                                          ? "bg-white border-white shadow-sm active:scale-[0.99]"
                                          : "bg-white/60 border-[#0d1f55]/10 opacity-70"
                                      }`}
                                    >
                                      <div
                                        className={`h-10 w-10 rounded-lg grid place-items-center shrink-0 ${
                                          concluida
                                            ? "bg-[#22C55E] text-white"
                                            : disponivel
                                              ? "bg-[#FFC93C] text-[#0d1f55]"
                                              : "bg-[#0d1f55]/10 text-[#0d1f55]/40"
                                        }`}
                                      >
                                        {concluida ? (
                                          <CheckCircle2 className="h-5 w-5" />
                                        ) : disponivel ? (
                                          <Sparkles className="h-5 w-5" />
                                        ) : (
                                          <Lock className="h-4 w-4" />
                                        )}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-[#0d1f55]/55">
                                          Missão {idx + 1}
                                        </div>
                                        <div className="text-sm font-black text-[#0d1f55] leading-tight line-clamp-2">
                                          {h.titulo}
                                        </div>
                                        <div className="mt-1">
                                          <MasteryBadge nivel={dominio[h.codigo] ?? null} />
                                        </div>
                                      </div>

                                    </div>
                                  );
                                  return disponivel ? (
                                    <Link
                                      key={h.codigo}
                                      to="/escola-brilha/$codigo"
                                      params={{ codigo: h.codigo }}
                                    >
                                      {Card}
                                    </Link>
                                  ) : (
                                    <div key={h.codigo}>{Card}</div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Shell>
  );
}
