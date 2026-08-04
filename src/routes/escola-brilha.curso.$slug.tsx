import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { getCursoAny, listAulasFlat } from "@/escola-brilha/curso-v4/registry";
import { getPerfilPedagogico } from "@/escola-brilha/curso-v4/pedagogia";
import { CartaoSondagem } from "@/escola-brilha/curso-v4/player-portugues/CartaoSondagem";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/utils";


/**
 * Trilha do Curso v4.1 — estilo Duolingo.
 * Aluno vê o mapa completo (motivação), mas só a próxima aula fica
 * desbloqueada. Progresso mora em localStorage por enquanto (depois
 * vai pro Supabase quando a estrutura estabilizar).
 *
 * Modo revisão: adicionar ?livre=1 na URL destrava tudo (para você e
 * eu revisarmos sem precisar "jogar" as anteriores).
 */
export const Route = createFileRoute("/escola-brilha/curso/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Curso ${params.slug} — Escola Brilha` },
      { name: "description", content: "Trilha de aprendizagem gamificada." },
    ],
  }),
  component: TrilhaCurso,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-white bg-[#0d1f55]">
      Curso não encontrado.
    </div>
  ),
});

const CHAVE_PROGRESSO = (slug: string) => `eb.v4.progresso.${slug}`;

function TrilhaCurso() {
  const { slug } = Route.useParams();
  const navigate = useNavigate();
  const curso = getCursoAny(slug);
  const aulas = listAulasFlat(slug);
  const perfilPedagogico = curso ? getPerfilPedagogico(curso) : undefined;
  const ehPortugues = curso?.tipoAula === "portugues";
  const ehGeoV1 = curso?.tipoAula === "geo-v1";
  const ehArteV1 = curso?.tipoAula === "arte-v1";
  const isExtra = slug === "portugues-aulas-extras";

  const [concluidas, setConcluidas] = useState<Set<string>>(new Set());
  const [modoLivre, setModoLivre] = useState(true);
  const [termoBusca, setTermoBusca] = useState("");
  const [filtroDificuldade, setFiltroDificuldade] = useState<string>("todos");
  const [mostrarRelatorio, setMostrarRelatorio] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    setModoLivre(!params.has("aluno"));
    try {
      const raw = localStorage.getItem(CHAVE_PROGRESSO(slug));
      if (raw) setConcluidas(new Set(JSON.parse(raw)));
    } catch {
      /* ignore */
    }
  }, [slug]);

  if (!curso) {
    return (
      <div className="min-h-screen grid place-items-center text-white bg-[#0d1f55]">
        Curso não encontrado.
      </div>
    );
  }

  const proximoIdx = aulas.findIndex((a) => !concluidas.has(a.slug));

  const sinonimosBusca: Record<string, string[]> = {
    "porquês": ["porque", "por que", "porquê", "por quê"],
    "crase": ["acentuação", "acento", "grave"],
    "z": ["som de z", "s com som de z"],
    "acentuação": ["acento", "agudo", "circunflexo", "til"],
    "verbos": ["passado", "futuro", "aram", "arao"]
  };

  const unidadesFiltradas = curso.unidades.map(u => ({
    ...u,
    aulas: u.aulas.filter(a => {
      const termo = termoBusca.toLowerCase();
      const matchDificuldade = filtroDificuldade === "todos" || (a as any).difficulty === filtroDificuldade;
      if (!matchDificuldade) return false;

      const titulo = a.titulo.toLowerCase();
      const descricao = (a as any).descricao?.toLowerCase() || "";
      const matchesBase = titulo.includes(termo) || descricao.includes(termo);
      
      if (matchesBase) return true;

      // Busca por sinônimos
      for (const [chave, lista] of Object.entries(sinonimosBusca)) {
        if (chave.includes(termo) || termo.includes(chave)) {
          if (lista.some(s => titulo.includes(s) || descricao.includes(s))) return true;
        }
      }
      return false;
    })
  })).filter(u => u.aulas.length > 0 || termoBusca === "");

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: `linear-gradient(180deg, ${curso.corSecundaria}, #0a1642)`,
      }}
    >
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/escola-brilha" className="text-sm text-white/70 hover:text-white">
            ← Escola Brilha
          </Link>
          <div className="text-xs text-white/60">
            {concluidas.size} / {aulas.length} aulas completas
          </div>
        </div>
        <div className="max-w-2xl mx-auto px-4 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-300">
                {curso.disciplina} · {curso.ano}
              </div>
              <h1 className="text-3xl font-black">{curso.titulo}</h1>
            </div>
            {isExtra && (
              <div className="flex flex-col gap-2">
                <div className="relative group">
                  <input 
                    type="text"
                    placeholder="Digite a dúvida (ex: porquês, crase)..."
                    value={termoBusca}
                    onChange={(e) => setTermoBusca(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 ring-amber-400 w-full md:w-80 transition-all"
                  />
                </div>
                <div className="flex gap-2">
                  <select 
                    value={filtroDificuldade}
                    onChange={(e) => setFiltroDificuldade(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg px-2 py-1 text-[10px] font-bold uppercase outline-none focus:ring-1 ring-amber-400"
                  >
                    <option value="todos" className="bg-slate-900">Todos Níveis</option>
                    <option value="facil" className="bg-slate-900">🟢 Fácil</option>
                    <option value="medio" className="bg-slate-900">🟡 Médio</option>
                    <option value="desafio" className="bg-slate-900">🔴 Desafio</option>
                  </select>
                  <button 
                    onClick={() => setMostrarRelatorio(true)}
                    className="bg-amber-500/20 border border-amber-500/50 text-amber-300 rounded-lg px-2 py-1 text-[10px] font-bold uppercase hover:bg-amber-500/30 transition"
                  >
                    📊 Relatório do Aluno
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <p className="text-sm text-white/70 mt-1">{curso.descricao}</p>
          
          {perfilPedagogico && (
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-white/90">
              <div className="text-[10px] uppercase tracking-[0.35em] text-amber-300">Padrão pedagógico</div>
              <div className="font-bold text-base mt-1">{perfilPedagogico.titulo}</div>
              <p className="text-white/70 mt-1">{perfilPedagogico.descricao}</p>
            </div>
          )}
        </div>
      </header>


      <main className="max-w-2xl mx-auto px-4 py-8 space-y-10">
        {(slug === "portugues-1ano" || slug === "portugues-2ano") && (
          <CartaoSondagem
            cursoSlug={slug}
            onIrParaUnidade={(unidadeSlug) => {
              const alvo = curso.unidades.find((u) => u.slug === unidadeSlug);
              const primeira = alvo?.aulas[0];
              if (primeira) {
                navigate({
                  to: "/escola-brilha/aula-pt-v4/$curso/$aula",
                  params: { curso: slug, aula: primeira.slug },
                });
              }
            }}
          />
        )}
        {unidadesFiltradas.map((u) => {
          const aulasConcluidasNaUnidade = u.aulas.filter(a => concluidas.has(a.slug)).length;
          return (
          <section key={u.slug}>

            <div className="text-center mb-6">
              <div className="text-xs uppercase text-white/50 flex items-center justify-center gap-2">
                Unidade {u.numero} 
                <span className="bg-white/10 px-2 py-0.5 rounded-full text-[10px]">
                  {aulasConcluidasNaUnidade} / {u.aulas.length} Aulas Concluídas
                </span>
              </div>
              <h2 className="text-2xl font-bold" style={{ color: u.corTema }}>
                {u.titulo}
              </h2>
              <div className="text-sm text-white/60">{u.subtitulo}</div>
            </div>


            {u.aulas.length === 0 && (
              <div className="text-center text-white/50 py-8 border border-dashed border-white/20 rounded-xl">
                🚧 Aulas em produção. Volte em breve!
              </div>
            )}

            <div className="space-y-6">
              {u.aulas.map((a, i) => {
                const flatIdx = aulas.findIndex((x) => x.slug === a.slug);
                const concluida = concluidas.has(a.slug);
                const desbloqueada = modoLivre || flatIdx === proximoIdx || concluida;
                const eProxima = flatIdx === proximoIdx && !concluida;
                const align = i % 2 === 0 ? "justify-start" : "justify-end";
                return (
                  <div key={a.slug} className={`flex ${align}`}>
                    <button
                      disabled={!desbloqueada}
                      onClick={() => {
                        if (ehArteV1) {
                          navigate({
                            to: "/escola-brilha/aula-arte-v1/$curso/$aula",
                            params: { curso: slug, aula: a.slug },
                          });
                        } else if (ehGeoV1) {
                          navigate({
                            to: "/escola-brilha/aula-geo-v1/$curso/$aula",
                            params: { curso: slug, aula: a.slug },
                          });
                        } else if (ehPortugues) {
                          const isExtra = slug === "portugues-aulas-extras";
                          if (isExtra) {
                            navigate({
                              to: ("/escola-brilha/aula-extra-pt/" + slug + "/" + a.slug) as any,
                            });
                          } else {
                            navigate({
                              to: "/escola-brilha/aula-pt-v4/$curso/$aula",
                              params: { curso: slug, aula: a.slug },
                            });
                          }
                        } else {
                          navigate({
                            to: "/escola-brilha/aula-v4/$curso/$aula",
                            params: { curso: slug, aula: a.slug },
                            search: modoLivre ? { livre: "1" } : undefined,
                          });
                        }
                      }}
                      className={`group relative w-40 h-40 rounded-full grid place-items-center transition ${
                        desbloqueada
                          ? "bg-gradient-to-br from-amber-300 to-amber-500 text-[#0d1f55] shadow-xl hover:scale-105"
                          : "bg-white/10 text-white/40 cursor-not-allowed"
                      } ${eProxima ? "ring-4 ring-amber-300 animate-pulse" : ""}`}
                    >
                      <div className="text-center px-3">
                        {(a as any).difficulty && (
                          <div className={cn(
                            "absolute top-4 left-1/2 -translate-x-1/2 text-[8px] font-bold uppercase px-2 py-0.5 rounded-full border",
                            (a as any).difficulty === "facil" ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300" :
                            (a as any).difficulty === "medio" ? "bg-amber-500/20 border-amber-500/50 text-amber-300" :
                            "bg-rose-500/20 border-rose-500/50 text-rose-300"
                          )}>
                            {(a as any).difficulty === "facil" ? "🟢 Fácil" : (a as any).difficulty === "medio" ? "🟡 Médio" : "🔴 Desafio"}
                          </div>
                        )}
                        <div className="text-4xl mt-2">{a.iconeTrilha}</div>
                        <div className="text-xs font-bold mt-1 leading-tight">
                          {a.titulo}
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
            </div>
          </section>
        ); })}

        {ehPortugues && curso.praticasCurriculares && curso.praticasCurriculares.length > 0 && (
          <PraticasCurricularesCards praticas={curso.praticasCurriculares} corPrimaria={curso.corPrimaria} cursoSlug={slug} />
        )}

        {/* Atlas Final — destravado só quando todas as aulas estão concluídas */}
        <AtlasFinalCard
          cursoSlug={slug}
          totalAulas={aulas.length}
          concluidas={concluidas.size}
          modoLivre={modoLivre}
        />
      </main>
    </div>
  );

}

function PraticasCurricularesCards({
  praticas,
  corPrimaria,
  cursoSlug,
}: {
  praticas: { emoji?: string; titulo: string; descricao: string; itens: string[] }[];
  corPrimaria: string;
  cursoSlug: string;
}) {
  const serieRotina = cursoSlug === "portugues-2ano" ? ("2" as const) : ("1" as const);
  const temRotina = cursoSlug === "portugues-1ano" || cursoSlug === "portugues-2ano";
  return (
    <section className="space-y-4">
      <div className="text-center">
        <div className="text-xs uppercase tracking-widest text-white/50">Currículo estudantil anual</div>
        <h2 className="text-xl font-bold mt-1">Práticas complementares</h2>
        <p className="text-sm text-white/60 mt-1">Atividades que acontecem em sala, fora do app.</p>
      </div>
      <div className="grid gap-4">
        {praticas.map((p) => (
          <div
            key={p.titulo}
            className="rounded-2xl p-5 border border-white/10 bg-white/5"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{p.emoji || "📚"}</span>
              <h3 className="font-bold text-lg" style={{ color: corPrimaria }}>
                {p.titulo}
              </h3>
            </div>
            <p className="text-sm text-white/70 mb-3">{p.descricao}</p>
            <ul className="space-y-2">
              {p.itens.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                  <span className="text-amber-300">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {temRotina && p.titulo.toLowerCase().includes("escrita") && (
              <Link
                to="/rotina-escrita"
                search={{ serie: serieRotina }}
                className="mt-4 block text-center rounded-xl px-4 py-3 font-black text-[#0d1f55] bg-amber-300 hover:bg-amber-200 transition-colors"
              >
                ⏰ Criar rotina diária com lembrete no celular
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

  );
}

function RelatorioAlunoModal({ aberto, onFechar, aulas, concluidas }: { 
  aberto: boolean; 
  onFechar: () => void;
  aulas: any[];
  concluidas: Set<string>;
}) {
  const stats = useMemo(() => {
    const res = {
      fase1: { facil: 0, medio: 0, desafio: 0, concluidas: 0 },
      fase2: { facil: 0, medio: 0, desafio: 0, concluidas: 0 },
      fase3: { facil: 0, medio: 0, desafio: 0, concluidas: 0 },
    };

    aulas.forEach(a => {
      const fase = a.fase || "fase1";
      const diff = a.difficulty || "facil";
      const foiConcluida = concluidas.has(a.slug);
      
      const faseKey = fase as keyof typeof res;
      if (res[faseKey]) {
        if (foiConcluida) {
          res[faseKey].concluidas++;
          if (diff === "facil") res[faseKey].facil++;
          if (diff === "medio") res[faseKey].medio++;
          if (diff === "desafio") res[faseKey].desafio++;
        }
      }
    });

    return res;
  }, [aulas, concluidas]);

  if (!aberto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        onClick={onFechar}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-slate-900 border border-white/10 rounded-[2rem] p-8 w-full max-w-xl shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-400" />
        
        <h2 className="text-2xl font-black mb-6">📊 Relatório do Aluno</h2>
        
        <div className="space-y-6">
          <FaseCard titulo="🔴 Fase 1: Lúdica" stats={stats.fase1} />
          <FaseCard titulo="🟡 Fase 2: Detetive" stats={stats.fase2} />
          <FaseCard titulo="🔵 Fase 3: Analítica" stats={stats.fase3} />
        </div>

        <button 
          onClick={onFechar}
          className="w-full mt-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 font-bold transition"
        >
          Fechar Relatório
        </button>
      </motion.div>
    </div>
  );
}

function FaseCard({ titulo, stats }: { titulo: string, stats: any }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <h3 className="font-bold mb-3">{titulo}</h3>
      <div className="grid grid-cols-3 gap-2">
        <StatBadge label="Fácil" count={stats.facil} cor="emerald" />
        <StatBadge label="Médio" count={stats.medio} cor="amber" />
        <StatBadge label="Desafio" count={stats.desafio} cor="rose" />
      </div>
      <div className="mt-3 text-[10px] text-white/40 uppercase font-black">
        Total Concluídas: {stats.concluidas}
      </div>
    </div>
  );
}

function StatBadge({ label, count, cor }: { label: string, count: number, cor: string }) {
  const cores: Record<string, string> = {
    emerald: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    amber: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    rose: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  };
  return (
    <div className={cn("px-2 py-1 rounded-lg border text-center", cores[cor])}>
      <div className="text-[10px] uppercase font-black leading-tight">{label}</div>
      <div className="text-lg font-black">{count}</div>
    </div>
  );
}

function AtlasFinalCard({
  cursoSlug,
  totalAulas,
  concluidas,
  modoLivre,
}: {
  cursoSlug: string;
  totalAulas: number;
  concluidas: number;
  modoLivre: boolean;
}) {
  const destravado = modoLivre || (totalAulas > 0 && concluidas >= totalAulas);
  const percent = totalAulas === 0 ? 0 : Math.round((concluidas / totalAulas) * 100);
  return (
    <section className="pt-6">
      <div className="text-center mb-4">
        <div className="text-xs uppercase text-amber-300 tracking-widest">
          Missão Final
        </div>
        <h2 className="text-2xl font-black">🎓 Grande Projeto Final</h2>
      </div>
      <Link
        to="/escola-brilha/atlas-final/$curso"
        params={{ curso: cursoSlug }}
        search={modoLivre ? { livre: "1" } : undefined}
        aria-disabled={!destravado}
        className={`block rounded-2xl p-6 text-center transition ${
          destravado
            ? "bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 text-[#1a0d3d] font-black shadow-2xl hover:scale-[1.02]"
            : "bg-white/5 text-white/50 border border-dashed border-white/20 cursor-not-allowed"
        }`}
        onClick={(e) => {
          if (!destravado) e.preventDefault();
        }}
      >
        <div className="text-5xl mb-2">{destravado ? "🎓" : "🔒"}</div>
        <div className="text-lg">
          {destravado
            ? "Abrir meu Livro Mágico do Explorador!"
            : "Trancado — termine todas as aulas pra destravar"}
        </div>
        {!destravado && (
          <div className="mt-3 max-w-xs mx-auto">
            <div className="bg-white/10 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-amber-400 transition-all"
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="text-xs mt-1">
              {concluidas} de {totalAulas} aulas ({percent}%)
            </div>
          </div>
        )}
      </Link>
    </section>
  );
}
