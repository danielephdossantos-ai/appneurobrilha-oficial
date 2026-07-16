import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAppState } from "@/core/store";
import { listAulas } from "@/escola-brilha/registry";
import { listAulasArte } from "@/escola-brilha/arte-2ano/registry";
import { mascoteDaDisciplina } from "@/escola-brilha/mascotes-disciplina";
import { temaDaDisciplina, slugDisc } from "@/escola-brilha/missoes-tema";
import { DiplomaBrilha } from "@/components/DiplomaBrilha";
import type { MascotePersonagem } from "@/escola-brilha/mascotes-personagens";

/**
 * Trilha visual estilo Duolingo para séries que NÃO viraram Curso v4
 * (Educação Infantil, 1º Ano, etc.).
 * As aulas continuam sendo as habilidades BNCC já existentes — só o
 * visual da lista muda. Ao concluir todas, destrava um diploma
 * usando o mascote fixo da disciplina.
 */

const SERIES_LABEL: Record<string, string> = {
  "educacao-infantil": "Educação Infantil",
  "1ano": "1º Ano",
  "2ano": "2º Ano",
  "3ano": "3º Ano",
  "4ano": "4º Ano",
  "5ano": "5º Ano",
  "6ano": "6º Ano",
  "7ano": "7º Ano",
  "8ano": "8º Ano",
  "9ano": "9º Ano",
};

function serieMatches(rowAno: string, serieSlug: string): boolean {
  const label = SERIES_LABEL[serieSlug];
  if (!label) return false;
  const a = (rowAno || "").trim();
  if (a === label) return true;
  const m = a.match(/(\d)[ºo]?\s*ao\s*(\d)[ºo]?\s*Ano/i);
  if (m && label !== "Educação Infantil") {
    const alvo = parseInt(label, 10);
    return alvo >= parseInt(m[1], 10) && alvo <= parseInt(m[2], 10);
  }
  return false;
}

export const Route = createFileRoute("/escola-brilha/trilha/$serie/$disc")({
  head: ({ params }) => ({
    meta: [
      { title: `Trilha ${params.disc} — Escola Brilha` },
      { name: "description", content: "Trilha visual de aprendizagem." },
    ],
  }),
  component: TrilhaSerieDisc,
});

type HabRow = { codigo: string; titulo: string; ano: string };

function TrilhaSerieDisc() {
  const { serie, disc } = Route.useParams();
  const navigate = useNavigate();
  const { activeChild } = useAppState();
  const mascote = mascoteDaDisciplina(disc);
  const tema = temaDaDisciplina(disc);
  const [habilidades, setHabilidades] = useState<HabRow[]>([]);
  const [concluidas, setConcluidas] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [modoLivre, setModoLivre] = useState(true);
  const [showDiploma, setShowDiploma] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    setModoLivre(!params.has("aluno"));
  }, []);

  const escritas = useMemo(() => new Set(listAulas().map((a) => a.codigo.toUpperCase())), []);

  const isArte2ano = serie === "2ano" && disc === "arte";

  useEffect(() => {
    if (isArte2ano) {
      // Arte 2ano tem registry próprio e roteia para /escola-brilha/arte/2ano/$aula
      const rows: HabRow[] = listAulasArte()
        .sort((a, b) => (a.unidade - b.unidade) || (a.aula - b.aula))
        .map((a) => ({ codigo: a.id, titulo: `U${a.unidade} · ${a.titulo}`, ano: "2º Ano" }));
      setHabilidades(rows);
      setLoading(false);
      return;
    }
    (async () => {
      const PAGE = 1000;
      const acc: Array<{ codigo_bncc: string; titulo: string | null; ano: string | null; disciplina: string | null }> = [];
      for (let offset = 0; ; offset += PAGE) {
        const { data, error } = await supabase
          .from("bncc_habilidades")
          .select("codigo_bncc, titulo, ano, disciplina")
          .order("codigo_bncc")
          .range(offset, offset + PAGE - 1);
        if (error || !data || data.length === 0) break;
        acc.push(...data);
        if (data.length < PAGE) break;
      }
      const rows: HabRow[] = acc
        .filter((r) => slugDisc(r.disciplina ?? "") === disc)
        .filter((r) => serieMatches(r.ano ?? "", serie))
        .filter((r) => escritas.has(r.codigo_bncc.toUpperCase()))
        .map((r) => ({ codigo: r.codigo_bncc, titulo: r.titulo ?? r.codigo_bncc, ano: r.ano ?? "" }))
        .sort((a, b) => a.codigo.localeCompare(b.codigo));
      setHabilidades(rows);
      setLoading(false);
    })();
  }, [serie, disc, escritas, isArte2ano]);

  useEffect(() => {
    if (!activeChild?.id) return;
    (async () => {
      const { data } = await supabase
        .from("escola_progresso")
        .select("codigo_bncc, concluida")
        .eq("child_id", activeChild.id);
      const map = new Set<string>();
      for (const r of (data ?? []) as Array<{ codigo_bncc: string; concluida: boolean | null }>) {
        if (r.concluida) map.add(r.codigo_bncc.toUpperCase());
      }
      setConcluidas(map);
    })();
  }, [activeChild?.id]);

  const proximoIdx = habilidades.findIndex((h) => !concluidas.has(h.codigo.toUpperCase()));
  const totalConcluidas = habilidades.filter((h) => concluidas.has(h.codigo.toUpperCase())).length;
  const tudoConcluido = habilidades.length > 0 && totalConcluidas >= habilidades.length;
  const serieLabel = SERIES_LABEL[serie] ?? serie;

  const mascoteDiploma: MascotePersonagem = {
    id: mascote.slug,
    nome: mascote.nome,
    img: mascote.imagem,
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{ background: `linear-gradient(180deg, ${mascote.corSecundaria}, #0a1642)` }}
    >
      <header className="sticky top-0 z-10 backdrop-blur bg-black/30 border-b border-white/10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/escola-brilha" className="text-sm text-white/70 hover:text-white">
            ← Escola Brilha
          </Link>
          <div className="text-xs text-white/60">
            {totalConcluidas} / {habilidades.length} aulas
          </div>
        </div>
        <div className="max-w-2xl mx-auto px-4 pb-4 flex items-center gap-3">
          <img src={mascote.imagem} alt={mascote.nome} className="h-16 w-16 object-contain drop-shadow-lg" />
          <div>
            <div className="text-xs uppercase tracking-wider text-amber-300">
              {serieLabel} · {mascote.papel}
            </div>
            <h1 className="text-2xl font-black">
              {tema.emoji} {tema.nome}
            </h1>
            <p className="text-xs text-white/70 mt-0.5">Com {mascote.nome} — {mascote.personalidade}.</p>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center text-white/70 py-16">Carregando trilha…</div>
        ) : habilidades.length === 0 ? (
          <div className="text-center border border-dashed border-white/20 rounded-xl p-8 text-white/70">
            🚧 Ainda não temos aulas escritas para {serieLabel} · {tema.nome}. Volte em breve!
          </div>
        ) : (
          <div className="space-y-6">
            {habilidades.map((h, i) => {
              const cod = h.codigo.toUpperCase();
              const concluida = concluidas.has(cod);
              const desbloqueada = modoLivre || i === proximoIdx || concluida;
              const eProxima = i === proximoIdx && !concluida;
              const align = i % 2 === 0 ? "justify-start" : "justify-end";
              return (
                <div key={h.codigo} className={`flex ${align}`}>
                  <button
                    disabled={!desbloqueada}
                    onClick={() =>
                      isArte2ano
                        ? navigate({ to: "/escola-brilha/arte/2ano/$aula", params: { aula: h.codigo } })
                        : navigate({ to: "/escola-brilha/$codigo", params: { codigo: h.codigo } })
                    }
                    className={`group relative w-40 h-40 rounded-full grid place-items-center transition ${
                      desbloqueada
                        ? "text-[#0d1f55] shadow-xl hover:scale-105"
                        : "bg-white/10 text-white/40 cursor-not-allowed"
                    } ${eProxima ? "ring-4 ring-amber-300 animate-pulse" : ""}`}
                    style={
                      desbloqueada
                        ? {
                            background: `linear-gradient(135deg, ${mascote.corPrimaria}, #fde68a)`,
                          }
                        : undefined
                    }
                  >
                    <div className="text-center px-3">
                      <div className="text-4xl">{tema.emoji}</div>
                      <div className="text-[11px] font-bold mt-1 leading-tight line-clamp-3">
                        {h.titulo}
                      </div>
                    </div>
                    {concluida && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 grid place-items-center text-white text-lg">
                        ✓
                      </div>
                    )}
                    {!desbloqueada && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white/20 grid place-items-center">
                        🔒
                      </div>
                    )}
                  </button>
                </div>
              );
            })}

            {/* Diploma final */}
            <section className="pt-6">
              <div className="text-center mb-4">
                <div className="text-xs uppercase text-amber-300 tracking-widest">
                  Grande Conquista
                </div>
                <h2 className="text-2xl font-black">🎓 Diploma de {tema.nome}</h2>
              </div>
              <button
                type="button"
                disabled={!(modoLivre || tudoConcluido)}
                onClick={() => setShowDiploma(true)}
                className={`block w-full rounded-2xl p-6 text-center transition ${
                  modoLivre || tudoConcluido
                    ? "bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 text-[#1a0d3d] font-black shadow-2xl hover:scale-[1.02]"
                    : "bg-white/5 text-white/50 border border-dashed border-white/20 cursor-not-allowed"
                }`}
              >
                <div className="text-5xl mb-2">{modoLivre || tudoConcluido ? "🏅" : "🔒"}</div>
                <div className="text-lg">
                  {modoLivre || tudoConcluido
                    ? `Ver meu Diploma com ${mascote.nome}!`
                    : "Trancado — termine todas as aulas pra ganhar"}
                </div>
                {!(modoLivre || tudoConcluido) && (
                  <div className="mt-3 max-w-xs mx-auto">
                    <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-amber-400 transition-all"
                        style={{
                          width: `${Math.round((totalConcluidas / habilidades.length) * 100)}%`,
                        }}
                      />
                    </div>
                    <div className="text-xs mt-1">
                      {totalConcluidas} de {habilidades.length} aulas
                    </div>
                  </div>
                )}
              </button>
            </section>
          </div>
        )}
      </main>

      {showDiploma && (
        <DiplomaBrilha
          aluno={activeChild?.nome ?? "Pequeno Explorador"}
          titulo={tema.nome}
          curso={`${tema.nome} — ${serieLabel}`}
          descricao={`Por concluir todas as aulas de ${tema.nome} do ${serieLabel} ao lado de ${mascote.nome}, com muita curiosidade e coragem.`}
          mascote={mascoteDiploma}
          onFechar={() => setShowDiploma(false)}
        />
      )}
    </div>
  );
}
