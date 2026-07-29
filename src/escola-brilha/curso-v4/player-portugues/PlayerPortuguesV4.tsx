import { createContext, useContext, useEffect, useState } from "react";

/** Ativa o visual infantil (1º ano) nos blocos internos do player. */
const KidsCtx = createContext(false);
import { Link } from "@tanstack/react-router";
import type { AulaPortuguesV4 } from "../types";
import { stopSpeaking } from "@/lib/native-tts";
import { PrevisaoTitulo } from "./blocos/PrevisaoTitulo";
import { CardVocabulario } from "./blocos/CardVocabulario";
import { LeituraIlustrada } from "./blocos/LeituraIlustrada";
import { QuizTexto } from "./blocos/QuizTexto";
import { OrdenarSequencia } from "./blocos/OrdenarSequencia";
import { ArrastarParaAlvo } from "./blocos/ArrastarParaAlvo";
import { SelecionarItens } from "./blocos/SelecionarItens";
import { MontarPalavra } from "./blocos/MontarPalavra";
import { EnsinoVisual } from "./blocos/EnsinoVisual";
import { LaboratorioClima } from "./blocos/LaboratorioClima";
import { ArquitetoLugar } from "./blocos/ArquitetoLugar";
import { BotaoOuvirCena } from "@/escola-brilha/curso-v4/shared/BotaoOuvirCena";
import { MissaoFamiliaFoto } from "./blocos/MissaoFamiliaFoto";

/**
 * Player Português v4 — tela única com scroll, 11 momentos.
 * Mesma estrutura do PlayerV4 de Matemática, mas com blocos próprios
 * pra leitura, previsão, vocabulário, sequência e quiz textual.
 */

type Props = {
  aula: AulaPortuguesV4;
  cursoSlug: string;
  voltarPara: string;
  onConcluir?: () => void;
};

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

/** Cores por momento — usadas só no skin infantil (1º ano). */
const CORES_KIDS: Record<string, string> = {
  m1: "#f472b6",
  m2: "#38bdf8",
  m3: "#fbbf24",
  mev: "#a78bfa",
  m4: "#34d399",
  m5: "#f97316",
  m6: "#e879f9",
  m7: "#60a5fa",
  m8: "#facc15",
  mmini: "#fb7185",
  mlab: "#2dd4bf",
  m9: "#c084fc",
  m10: "#4ade80",
  m11: "#fca5a5",
};

export function PlayerPortuguesV4({ aula, cursoSlug, voltarPara, onConcluir }: Props) {
  const [ativo, setAtivo] = useState<string>("m1");
  // Skin infantil: Português do 1º e 2º ano.
  const kids = cursoSlug === "portugues-1ano" || cursoSlug === "portugues-2ano";

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

  const idxAtivo = Math.max(0, MOMENTOS.findIndex((m) => m.id === ativo));
  const progresso = ((idxAtivo + 1) / MOMENTOS.length) * 100;

  return (
    <KidsCtx.Provider value={kids}>
    <div
      className={
        kids
          ? "min-h-screen relative overflow-x-hidden bg-[linear-gradient(180deg,#2b1258_0%,#4c1d95_35%,#6d28d9_70%,#3b0764_100%)] text-white"
          : "min-h-screen bg-gradient-to-b from-[#3b1e6b] to-[#1a0d3d] text-white"
      }
    >
      {kids && (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
          {[
            { t: "6%", l: "8%", s: 26, d: "0s" },
            { t: "18%", l: "82%", s: 18, d: ".6s" },
            { t: "38%", l: "12%", s: 16, d: "1.2s" },
            { t: "58%", l: "88%", s: 22, d: ".3s" },
            { t: "74%", l: "6%", s: 20, d: "1.6s" },
            { t: "88%", l: "76%", s: 16, d: ".9s" },
          ].map((e, i) => (
            <span
              key={i}
              className="absolute animate-pulse"
              style={{ top: e.t, left: e.l, fontSize: e.s, animationDelay: e.d }}
            >
              {i % 2 ? "⭐" : "✨"}
            </span>
          ))}
        </div>
      )}

      <header
        className={
          kids
            ? "sticky top-0 z-20 bg-[#2b1258]/95 backdrop-blur border-b-4 border-amber-300/70"
            : "sticky top-0 z-20 bg-[#1a0d3d]/95 backdrop-blur border-b border-white/10"
        }
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            to="/escola-brilha/curso/$slug"
            params={{ slug: cursoSlug }}
            className={
              kids
                ? "shrink-0 h-10 px-4 grid place-items-center rounded-full bg-amber-400 text-[#2b1258] text-sm font-black active:scale-95 transition"
                : "text-sm text-white/70 hover:text-white"
            }
          >
            ← Trilha
          </Link>
          <div className="flex-1 min-w-0">
            <div className={kids ? "text-base font-black truncate" : "text-sm font-bold truncate"}>
              {kids ? "📖 " : ""}
              {aula.titulo}
            </div>
            {kids ? (
              <div className="mt-1 flex items-center gap-2">
                <div className="h-2.5 flex-1 rounded-full bg-white/15 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#fbbf24,#f472b6,#38bdf8)] transition-all duration-500"
                    style={{ width: `${progresso}%` }}
                  />
                </div>
                <span className="shrink-0 text-[10px] font-black text-amber-200">
                  {idxAtivo + 1}/{MOMENTOS.length}
                </span>
              </div>
            ) : (
              <div className="text-[10px] text-white/60">Role para descer a aula ↓</div>
            )}
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-6 lg:flex lg:gap-6">
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24 space-y-1">
            {MOMENTOS.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className={
                  kids
                    ? `block text-xs px-3 py-2.5 rounded-2xl font-bold transition ${
                        ativo === m.id
                          ? "text-[#2b1258] scale-[1.03] shadow-lg"
                          : "text-white/75 bg-white/5 hover:bg-white/15"
                      }`
                    : `block text-xs px-3 py-2 rounded-lg transition ${
                        ativo === m.id
                          ? "bg-amber-400 text-[#1a0d3d] font-bold"
                          : "text-white/70 hover:bg-white/10"
                      }`
                }
                style={
                  kids && ativo === m.id
                    ? { background: CORES_KIDS[m.id] ?? "#fbbf24" }
                    : undefined
                }
              >
                {m.label}
              </a>
            ))}
          </div>
        </aside>

        <main className={kids ? "flex-1 space-y-6 min-w-0" : "flex-1 space-y-8 min-w-0"}>

          {/* M1 · Motivação */}
          <Secao id="m1" label="🎬 Motivação">
            <div className={kids ? "flex flex-col items-center gap-3" : undefined}>
              {aula.momento01_motivacao.imagemUrl && (
                <img
                  src={aula.momento01_motivacao.imagemUrl}
                  alt=""
                  className={
                    kids
                      ? "w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,.35)] animate-[bounce_3s_ease-in-out_infinite]"
                      : "w-24 h-24 object-contain mx-auto mb-3 drop-shadow"
                  }
                />
              )}
              <h3
                className={
                  kids
                    ? "text-2xl md:text-3xl font-black text-amber-200 text-center"
                    : "text-xl font-black text-amber-200 text-center"
                }
              >
                {aula.momento01_motivacao.titulo}
              </h3>
              <p
                className={
                  kids
                    ? "relative rounded-3xl bg-white/95 text-[#2b1258] font-semibold text-center max-w-2xl px-5 py-4 text-lg leading-relaxed shadow-lg"
                    : "text-white/90 leading-relaxed text-center max-w-2xl mx-auto mt-2"
                }
              >
                {aula.momento01_motivacao.historia}
              </p>
            </div>
          </Secao>


          {/* M2 · Previsão */}
          <Secao id="m2" label="🔮 Previsão">
            <Instrucao>{aula.momento02_previsao.instrucao}</Instrucao>
            <PrevisaoTitulo data={aula.momento02_previsao.bloco} />
          </Secao>

          {/* M3 · Vocabulário */}
          <Secao id="m3" label="📚 Palavras novas">
            <Instrucao>{aula.momento03_vocabulario.instrucao}</Instrucao>
            <div className="grid md:grid-cols-2 gap-3">
              {aula.momento03_vocabulario.cards.map((c) => (
                <CardVocabulario key={c.palavra} card={c} />
              ))}
            </div>
          </Secao>

          {/* ENSINO VISUAL (opcional) — ensina o pré-requisito ANTES de cobrar. */}
          {aula.momento_ensinoVisual && (
            <Secao id="mev" label={`🧠 ${aula.momento_ensinoVisual.titulo}`}>
              <Instrucao>{aula.momento_ensinoVisual.instrucao}</Instrucao>
              <div className="space-y-5">
                {aula.momento_ensinoVisual.blocos.map((b, i) => (
                  <EnsinoVisual key={i} bloco={b} />
                ))}
              </div>
            </Secao>
          )}

          {/* M4 · Leitura guiada */}
          <Secao id="m4" label="📖 Leitura guiada">
            <Instrucao>{aula.momento04_leituraGuiada.instrucao}</Instrucao>
            <LeituraIlustrada data={aula.momento04_leituraGuiada.leitura} />
          </Secao>

          {/* M5 · Compreensão */}
          <Secao id="m5" label="🧠 Entendi?">
            <Instrucao>{aula.momento05_compreensao.instrucao}</Instrucao>
            <div className="space-y-3">
              {aula.momento05_compreensao.perguntas.map((q, i) => (
                <QuizTexto key={i} quiz={q} />
              ))}
            </div>
          </Secao>

          {/* M6 · Personagens & cenário */}
          <Secao id="m6" label="🎭 Personagens e lugar">
            <Instrucao>{aula.momento06_personagensCenario.instrucao}</Instrucao>
            <div className="space-y-3">
              {aula.momento06_personagensCenario.perguntas.map((q, i) => (
                <QuizTexto key={i} quiz={q} />
              ))}
            </div>
          </Secao>

          {/* M7 · Sequência */}
          <Secao id="m7" label="🧩 Ordem da história">
            <Instrucao>{aula.momento07_sequencia.instrucao}</Instrucao>
            <OrdenarSequencia data={aula.momento07_sequencia.bloco} />
          </Secao>

          {/* M8 · Leitura independente */}
          <Secao id="m8" label="💪 Você lê sozinho">
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
                <Secao id="mmini" label={`🎮 ${aula.momento_minijogo.titulo}`}>
                  <Instrucao>{aula.momento_minijogo.instrucao}</Instrucao>
                  {jogo.tipo === "arrastarParaAlvo" && (
                    <ArrastarParaAlvo data={jogo.bloco} />
                  )}
                  {jogo.tipo === "selecionarItens" && (
                    <SelecionarItens data={jogo.bloco} />
                  )}
                  {jogo.tipo === "montarPalavra" && (
                    <MontarPalavra data={jogo.bloco} />
                  )}
                  {jogo.tipo === "ordenarSequencia" && (
                    <OrdenarSequencia data={jogo.bloco} />
                  )}
                  {jogo.tipo === "laboratorioClima" && (
                    <LaboratorioClima data={jogo.bloco} />
                  )}
                  {jogo.tipo === "arquitetoLugar" && (
                    <ArquitetoLugar data={jogo.bloco} />
                  )}
                </Secao>
              );
            })()}

          {/* Laboratório do Explorador (opcional) */}
          {aula.momento_laboratorio && (
            <Secao
              id="mlab"
              label={`🔬 ${aula.momento_laboratorio.titulo}`}
            >
              <Instrucao>{aula.momento_laboratorio.instrucao}</Instrucao>
              <LaboratorioClima data={aula.momento_laboratorio.bloco} />
            </Secao>
          )}

          {/* M9 · Revisão */}
          <Secao id="m9" label="🔁 Revisão">
            <ul className="space-y-2">
              {aula.momento09_revisao.pontos.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-white/90">
                  <span className="text-amber-300">✔</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            {aula.momento09_revisao.miniDesafio && (
              <div className="mt-4">
                <QuizTexto quiz={aula.momento09_revisao.miniDesafio} />
              </div>
            )}
          </Secao>

          {/* M10 · Avaliação */}
          <Secao id="m10" label="✅ Avaliação">
            <div className="space-y-3">
              {aula.momento10_avaliacao.perguntas.map((q, i) => (
                <QuizTexto key={i} quiz={q} />
              ))}
            </div>
          </Secao>

          {/* M11 · Missão em família */}
          <Secao id="m11" label="🏠 Missão em Família">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-3">
              <h4 className="text-lg font-bold text-amber-200">
                {aula.momento11_missaoFamilia.titulo}
              </h4>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/60 mb-1">
                  Materiais
                </div>
                <ul className="list-disc list-inside text-sm text-white/85">
                  {aula.momento11_missaoFamilia.materiais.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/60 mb-1">
                  Passo a passo
                </div>
                <ol className="list-decimal list-inside text-sm text-white/85 space-y-1">
                  {aula.momento11_missaoFamilia.passos.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ol>
              </div>
              <div className="text-sm text-white/85 pt-1">
                <span className="text-amber-200 font-bold">📸 Registro:</span>{" "}
                {aula.momento11_missaoFamilia.registro}
              </div>
              <MissaoFamiliaFoto cursoSlug={cursoSlug} aulaSlug={aula.slug} />
            </div>
          </Secao>

          <div className="pt-6 flex flex-col items-center gap-3">
            <button
              onClick={() => onConcluir?.()}
              className={
                kids
                  ? "px-10 py-5 rounded-full bg-[linear-gradient(90deg,#fbbf24,#f472b6)] text-[#2b1258] font-black text-xl shadow-[0_8px_0_rgba(0,0,0,.25)] active:translate-y-1 active:shadow-[0_3px_0_rgba(0,0,0,.25)] transition"
                  : "px-8 py-4 rounded-xl bg-amber-400 text-[#1a0d3d] font-black text-lg hover:bg-amber-300"
              }
            >
              🎉 Concluir aula
            </button>
            <Link to={voltarPara} className="text-xs text-white/50 hover:text-white/80">
              Sair para a trilha
            </Link>
          </div>
        </main>
      </div>
      <BotaoOuvirCena selector={`#${ativo}`} />
    </div>
    </KidsCtx.Provider>
  );
}

function Secao({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  const kids = useContext(KidsCtx);
  const cor = CORES_KIDS[id] ?? "#fbbf24";
  const emoji = label.trim().split(" ")[0];
  const texto = label.trim().split(" ").slice(1).join(" ");

  if (!kids) {
    return (
      <section
        id={id}
        className="scroll-mt-24 rounded-3xl bg-white/5 border border-white/10 p-5 md:p-6"
      >
        <div className="text-[11px] uppercase tracking-widest text-amber-300 mb-3">
          {label}
        </div>
        <div className="space-y-3">{children}</div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-[2rem] overflow-hidden border-4 shadow-[0_10px_0_rgba(0,0,0,.22)]"
      style={{ borderColor: cor, background: "rgba(255,255,255,0.07)" }}
    >
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ background: cor }}
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/90 text-2xl shadow-inner">
          {emoji}
        </span>
        <span className="min-w-0 truncate text-lg font-black text-[#2b1258] drop-shadow-sm">
          {texto}
        </span>
      </div>
      <div className="space-y-4 p-4 md:p-6 text-[1.05rem] leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Instrucao({ children }: { children: React.ReactNode }) {
  const kids = useContext(KidsCtx);
  if (!kids) return <p className="text-sm text-white/80 italic">{children}</p>;
  return (
    <div className="flex items-start gap-2 rounded-2xl bg-white/12 border-2 border-white/20 px-4 py-3">
      <span className="text-xl leading-none">🗣️</span>
      <p className="min-w-0 text-base font-bold text-white">{children}</p>
    </div>
  );
}

