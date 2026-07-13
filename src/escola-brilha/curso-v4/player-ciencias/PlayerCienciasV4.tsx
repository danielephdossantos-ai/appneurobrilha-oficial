import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { AulaPortuguesV4 } from "../types";
import { stopSpeaking } from "@/lib/native-tts";
import { PrevisaoTitulo } from "../player-portugues/blocos/PrevisaoTitulo";
import { CardVocabulario } from "../player-portugues/blocos/CardVocabulario";
import { LeituraIlustrada } from "../player-portugues/blocos/LeituraIlustrada";
import { QuizTexto } from "../player-portugues/blocos/QuizTexto";
import { OrdenarSequencia } from "../player-portugues/blocos/OrdenarSequencia";
import { ArrastarParaAlvo } from "../player-portugues/blocos/ArrastarParaAlvo";
import { SelecionarItens } from "../player-portugues/blocos/SelecionarItens";
import { MontarPalavra } from "../player-portugues/blocos/MontarPalavra";
import { EnsinoVisual } from "../player-portugues/blocos/EnsinoVisual";
import { LaboratorioClima } from "../player-portugues/blocos/LaboratorioClima";
import { ArquitetoLugar } from "../player-portugues/blocos/ArquitetoLugar";
import { MissaoFamiliaFoto } from "../player-portugues/blocos/MissaoFamiliaFoto";
import { MesaInvestigador } from "./blocos/MesaInvestigador";

/**
 * PlayerCienciasV4 — mesmo esqueleto de 11 momentos, identidade visual
 * própria de "aula de ciência": laboratório roxo/violeta, tipografia mono
 * científica, badges "AMOSTRA N/11", acento neon lime. Rótulos das seções
 * seguem RIGOROSAMENTE a lista pedida pelo pedagogo:
 *
 *   🎬 Motivação · 🔮 Previsão · 📚 Vocabulário · 📖 Leitura guiada ·
 *   🧠 Compreensão · 🎭 Personagens & lugar · 🧩 Sequência · 💪 Você lê ·
 *   🎮 Minijogo · 🔁 Revisão · ✅ Avaliação · 🏠 Missão em Família
 */

type Props = {
  aula: AulaPortuguesV4;
  cursoSlug: string;
  voltarPara: string;
  onConcluir?: () => void;
};

// LABELS TRAVADOS — não renomear.
const MOMENTOS_BASE = [
  { id: "m1", label: "🎬 Motivação" },
  { id: "m2", label: "🔮 Previsão" },
  { id: "m3", label: "📚 Vocabulário" },
  { id: "mev", label: "🧠 Ensino visual", opcional: true },
  { id: "m4", label: "📖 Leitura guiada" },
  { id: "m5", label: "🧠 Compreensão" },
  { id: "m6", label: "🎭 Personagens & lugar" },
  { id: "m7", label: "🧩 Sequência" },
  { id: "m8", label: "💪 Você lê" },
  { id: "mmini", label: "🎮 Minijogo", opcional: true },
  { id: "mlab", label: "🔬 Laboratório", opcional: true },
  { id: "m9", label: "🔁 Revisão" },
  { id: "m10", label: "✅ Avaliação" },
  { id: "m11", label: "🏠 Missão em Família" },
] as const;

// Fundo "papel de laboratório" — grade roxa sutil + moléculas.
const BG_LAB =
  "radial-gradient(circle at 20% 10%, rgba(168,85,247,0.25), transparent 45%)," +
  "radial-gradient(circle at 85% 80%, rgba(34,211,238,0.18), transparent 40%)," +
  "linear-gradient(180deg, #2a0f5c 0%, #17093a 55%, #0d0524 100%)";

const BG_GRID =
  "linear-gradient(rgba(196,181,253,0.06) 1px, transparent 1px)," +
  "linear-gradient(90deg, rgba(196,181,253,0.06) 1px, transparent 1px)";

export function PlayerCienciasV4({ aula, cursoSlug, voltarPara, onConcluir }: Props) {
  const [ativo, setAtivo] = useState<string>("m1");

  const MOMENTOS = MOMENTOS_BASE.filter(
    (m) =>
      !("opcional" in m && m.opcional) ||
      (m.id === "mmini" && !!aula.momento_minijogo) ||
      (m.id === "mlab" && !!aula.momento_laboratorio) ||
      (m.id === "mev" && !!aula.momento_ensinoVisual),
  );

  useEffect(() => {
    const els = MOMENTOS.map((m) => document.getElementById(m.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) setAtivo(vis[0].target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [aula.slug]);

  useEffect(() => () => stopSpeaking(), []);

  const total = MOMENTOS.length;

  return (
    <div
      className="min-h-screen text-violet-50"
      style={{ background: BG_LAB }}
    >
      {/* camada de grade tipo caderno de laboratório */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-40"
        style={{ backgroundImage: BG_GRID, backgroundSize: "32px 32px" }}
      />

      <header className="sticky top-0 z-20 backdrop-blur bg-[#17093a]/85 border-b border-violet-400/25">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            to="/escola-brilha/curso/$slug"
            params={{ slug: cursoSlug }}
            className="text-xs font-mono text-violet-200/80 hover:text-white"
          >
            ← Laboratório
          </Link>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-lime-300/90">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime-300 animate-pulse" />
              Laboratório Escola Brilha · Amostra ativa
            </div>
            <div className="text-sm md:text-base font-black truncate text-white">
              🧪 {aula.titulo}
            </div>
          </div>
          <div className="hidden sm:block text-[10px] font-mono text-violet-200/60">
            EXP-{aula.slug.slice(-4).toUpperCase()}
          </div>
        </div>
      </header>

      <div className="relative max-w-5xl mx-auto px-4 py-6 lg:flex lg:gap-6">
        <aside className="hidden lg:block w-60 shrink-0">
          <div className="sticky top-24 space-y-1 rounded-2xl bg-[#1f0a4e]/60 border border-violet-400/20 p-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-lime-300/90 px-2 pb-2 border-b border-violet-400/20 mb-2">
              📋 Roteiro do experimento
            </div>
            {MOMENTOS.map((m, i) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className={`block text-xs px-3 py-2 rounded-lg transition font-mono ${
                  ativo === m.id
                    ? "bg-lime-300 text-[#17093a] font-bold shadow-[0_0_18px_rgba(190,242,100,0.35)]"
                    : "text-violet-100/75 hover:bg-violet-400/10"
                }`}
              >
                <span className="opacity-60 mr-1.5">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {m.label}
              </a>
            ))}
          </div>
        </aside>

        <main className="flex-1 space-y-6 min-w-0">
          {/* M1 · Motivação */}
          <Secao id="m1" n={1} total={total} label="🎬 Motivação" sub="Observação inicial">
            {aula.momento01_motivacao.imagemUrl && (
              <div className="mx-auto mb-3 w-28 h-28 rounded-2xl bg-white/5 border border-violet-300/30 grid place-items-center">
                <img
                  src={aula.momento01_motivacao.imagemUrl}
                  alt=""
                  className="w-24 h-24 object-contain drop-shadow"
                />
              </div>
            )}
            <h3 className="text-xl font-black text-lime-200 text-center">
              {aula.momento01_motivacao.titulo}
            </h3>
            <p className="text-violet-50/90 leading-relaxed text-center max-w-2xl mx-auto mt-2">
              {aula.momento01_motivacao.historia}
            </p>
          </Secao>

          {/* M2 · Previsão */}
          <Secao id="m2" n={2} total={total} label="🔮 Previsão" sub="Hipótese inicial">
            <Instrucao>{aula.momento02_previsao.instrucao}</Instrucao>
            <PrevisaoTitulo data={aula.momento02_previsao.bloco} />
          </Secao>

          {/* M3 · Vocabulário */}
          <Secao id="m3" n={3} total={total} label="📚 Vocabulário" sub="Termos científicos">
            <Instrucao>{aula.momento03_vocabulario.instrucao}</Instrucao>
            <div className="grid md:grid-cols-2 gap-3">
              {aula.momento03_vocabulario.cards.map((c) => (
                <CardVocabulario key={c.palavra} card={c} />
              ))}
            </div>
          </Secao>

          {/* Ensino visual (opcional) */}
          {aula.momento_ensinoVisual && (
            <Secao
              id="mev"
              n={0}
              total={total}
              label={`🧠 ${aula.momento_ensinoVisual.titulo}`}
              sub="Demonstração guiada"
            >
              <Instrucao>{aula.momento_ensinoVisual.instrucao}</Instrucao>
              <div className="space-y-5">
                {aula.momento_ensinoVisual.blocos.map((b, i) => (
                  <EnsinoVisual key={i} bloco={b} />
                ))}
              </div>
            </Secao>
          )}

          {/* M4 · Leitura guiada */}
          <Secao id="m4" n={4} total={total} label="📖 Leitura guiada" sub="Texto científico com apoio">
            <Instrucao>{aula.momento04_leituraGuiada.instrucao}</Instrucao>
            <LeituraIlustrada data={aula.momento04_leituraGuiada.leitura} />
          </Secao>

          {/* M5 · Compreensão */}
          <Secao id="m5" n={5} total={total} label="🧠 Compreensão" sub="Checagem de entendimento">
            <Instrucao>{aula.momento05_compreensao.instrucao}</Instrucao>
            <div className="space-y-3">
              {aula.momento05_compreensao.perguntas.map((q, i) => (
                <QuizTexto key={i} quiz={q} />
              ))}
            </div>
          </Secao>

          {/* M6 · Personagens & lugar */}
          <Secao id="m6" n={6} total={total} label="🎭 Personagens & lugar" sub="Quem e onde acontece">
            <Instrucao>{aula.momento06_personagensCenario.instrucao}</Instrucao>
            <div className="space-y-3">
              {aula.momento06_personagensCenario.perguntas.map((q, i) => (
                <QuizTexto key={i} quiz={q} />
              ))}
            </div>
          </Secao>

          {/* M7 · Sequência */}
          <Secao id="m7" n={7} total={total} label="🧩 Sequência" sub="Ordem do procedimento">
            <Instrucao>{aula.momento07_sequencia.instrucao}</Instrucao>
            <OrdenarSequencia data={aula.momento07_sequencia.bloco} />
          </Secao>

          {/* M8 · Você lê */}
          <Secao id="m8" n={8} total={total} label="💪 Você lê" sub="Leitura independente">
            <Instrucao>{aula.momento08_leituraIndependente.instrucao}</Instrucao>
            <div className="space-y-4">
              <LeituraIlustrada data={aula.momento08_leituraIndependente.leitura} />
              <div className="space-y-3">
                {aula.momento08_leituraIndependente.perguntas.map((q, i) => (
                  <QuizTexto key={i} quiz={q} />
                ))}
              </div>
            </div>
          </Secao>

          {/* Minijogo (opcional) */}
          {aula.momento_minijogo &&
            (() => {
              const jogo = aula.momento_minijogo.jogo;
              return (
                <Secao
                  id="mmini"
                  n={9}
                  total={total}
                  label="🎮 Minijogo"
                  sub={aula.momento_minijogo.titulo}
                >
                  <Instrucao>{aula.momento_minijogo.instrucao}</Instrucao>
                  {jogo.tipo === "arrastarParaAlvo" && <ArrastarParaAlvo data={jogo.bloco} />}
                  {jogo.tipo === "selecionarItens" && <SelecionarItens data={jogo.bloco} />}
                  {jogo.tipo === "montarPalavra" && <MontarPalavra data={jogo.bloco} />}
                  {jogo.tipo === "ordenarSequencia" && <OrdenarSequencia data={jogo.bloco} />}
                  {jogo.tipo === "laboratorioClima" && <LaboratorioClima data={jogo.bloco} />}
                  {jogo.tipo === "arquitetoLugar" && <ArquitetoLugar data={jogo.bloco} />}
                </Secao>
              );
            })()}

          {/* Laboratório (opcional) */}
          {aula.momento_laboratorio && (
            <Secao
              id="mlab"
              n={0}
              total={total}
              label={`🔬 ${aula.momento_laboratorio.titulo}`}
              sub="Experimento controlado"
            >
              <Instrucao>{aula.momento_laboratorio.instrucao}</Instrucao>
              <LaboratorioClima data={aula.momento_laboratorio.bloco} />
            </Secao>
          )}

          {/* M9 · Revisão */}
          <Secao id="m9" n={10} total={total} label="🔁 Revisão" sub="Registro no caderno">
            <div className="rounded-xl bg-[#0d0524]/60 border border-violet-300/25 p-4 font-mono text-sm">
              <div className="text-[10px] uppercase tracking-[0.25em] text-lime-300 mb-2">
                📓 Caderno científico
              </div>
              <ul className="space-y-1.5">
                {aula.momento09_revisao.pontos.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-violet-50/95">
                    <span className="text-lime-300">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            {aula.momento09_revisao.miniDesafio && (
              <div className="mt-4">
                <QuizTexto quiz={aula.momento09_revisao.miniDesafio} />
              </div>
            )}
          </Secao>

          {/* M10 · Avaliação */}
          <Secao id="m10" n={11} total={total} label="✅ Avaliação" sub="Verificação final">
            <div className="space-y-3">
              {aula.momento10_avaliacao.perguntas.map((q, i) => (
                <QuizTexto key={i} quiz={q} />
              ))}
            </div>
          </Secao>

          {/* M11 · Missão em Família */}
          <Secao id="m11" n={12} total={total} label="🏠 Missão em Família" sub="Experimento em casa">
            <div className="rounded-2xl bg-[#0d0524]/70 border border-lime-300/30 p-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-lime-300 bg-lime-300/10 border border-lime-300/40 px-2 py-0.5 rounded">
                  🔬 Diário do Cientista
                </span>
              </div>
              <h4 className="text-lg font-bold text-lime-200">
                {aula.momento11_missaoFamilia.titulo}
              </h4>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-violet-200/70 mb-1">
                  🧪 Materiais
                </div>
                <ul className="list-disc list-inside text-sm text-violet-50/90">
                  {aula.momento11_missaoFamilia.materiais.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-violet-200/70 mb-1">
                  📋 Procedimento
                </div>
                <ol className="list-decimal list-inside text-sm text-violet-50/90 space-y-1">
                  {aula.momento11_missaoFamilia.passos.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ol>
              </div>
              <div className="text-sm text-violet-50/90 pt-1">
                <span className="text-lime-200 font-bold">📸 Registro:</span>{" "}
                {aula.momento11_missaoFamilia.registro}
              </div>
              <MissaoFamiliaFoto cursoSlug={cursoSlug} aulaSlug={aula.slug} />
            </div>
          </Secao>

          <div className="pt-6 flex flex-col items-center gap-3">
            <button
              onClick={() => onConcluir?.()}
              className="px-8 py-4 rounded-xl bg-lime-300 text-[#17093a] font-black text-lg hover:bg-lime-200 shadow-[0_0_30px_rgba(190,242,100,0.35)]"
            >
              🧪 Fechar experimento
            </button>
            <Link to={voltarPara} className="text-xs text-violet-200/60 hover:text-white font-mono">
              Sair do laboratório
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

function Secao({
  id,
  n,
  total,
  label,
  sub,
  children,
}: {
  id: string;
  n: number;
  total: number;
  label: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 relative rounded-2xl bg-[#1f0a4e]/70 border border-violet-300/25 p-5 md:p-6 shadow-[0_4px_30px_rgba(88,28,135,0.25)] backdrop-blur-sm"
    >
      <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r bg-gradient-to-b from-lime-300 via-fuchsia-400 to-violet-400" />
      <div className="flex items-center justify-between gap-3 mb-3 pl-2">
        <div className="text-sm md:text-base font-black text-white tracking-tight">
          {label}
          {sub && (
            <span className="ml-2 text-[11px] font-mono font-normal text-violet-200/70 uppercase tracking-widest">
              · {sub}
            </span>
          )}
        </div>
        {n > 0 && (
          <span className="shrink-0 text-[10px] font-mono text-lime-300 bg-lime-300/10 border border-lime-300/40 rounded px-2 py-0.5">
            AMOSTRA {String(n).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
        )}
      </div>
      <div className="space-y-3 pl-2">{children}</div>
    </section>
  );
}

function Instrucao({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-violet-100/85 italic border-l-2 border-lime-300/50 pl-3">
      {children}
    </p>
  );
}
