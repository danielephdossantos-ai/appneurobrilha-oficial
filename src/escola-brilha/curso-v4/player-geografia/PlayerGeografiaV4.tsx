import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { AulaGeografiaV4 } from "../types";
import { stopSpeaking } from "@/lib/native-tts";
import { QuizTexto } from "../player-portugues/blocos/QuizTexto";
import { OrdenarSequencia } from "../player-portugues/blocos/OrdenarSequencia";
import { ArrastarParaAlvo } from "../player-portugues/blocos/ArrastarParaAlvo";
import { SelecionarItens } from "../player-portugues/blocos/SelecionarItens";
import { MapaClicavel } from "./blocos/MapaClicavel";
import { ComparadorLadoALado } from "./blocos/ComparadorLadoALado";
import { OrientacaoEspacial } from "./blocos/OrientacaoEspacial";

/**
 * Player Geografia v4 — 14 momentos visíveis (SPEB 1.0 · Geografia).
 * Sem TTS automática. Toda aula é observar, explorar, comparar, descobrir.
 */

type Props = {
  aula: AulaGeografiaV4;
  cursoSlug: string;
  voltarPara: string;
  onConcluir?: () => void;
};

const MOMENTOS = [
  { id: "m1", label: "🎯 Missão" },
  { id: "m2", label: "📖 Narrativa" },
  { id: "m3", label: "🖼 Exploração visual" },
  { id: "m4", label: "🔍 Observação" },
  { id: "m5", label: "👩‍🏫 Ensino explícito" },
  { id: "m6", label: "👨‍🏫 Eu faço" },
  { id: "m7", label: "🤝 Nós fazemos" },
  { id: "m8", label: "✍️ Você faz" },
  { id: "m9", label: "🌍 Aplicação" },
  { id: "m10", label: "🎮 Minijogo" },
  { id: "m11", label: "❓ Quiz" },
  { id: "m12", label: "👨‍👩‍👧 Família" },
  { id: "m13", label: "📊 Avaliação" },
  { id: "m14", label: "⭐ Continuação" },
] as const;

export function PlayerGeografiaV4({ aula, cursoSlug, voltarPara, onConcluir }: Props) {
  const [ativo, setAtivo] = useState<string>("m1");

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

  const m3 = aula.momento03_exploracaoVisual;
  const m7 = aula.momento07_nosFazemos;
  const m8 = aula.momento08_voceFaz;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b3d2e] to-[#082414] text-white">
      <header className="sticky top-0 z-20 bg-[#082414]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            to="/escola-brilha/curso/$slug"
            params={{ slug: cursoSlug }}
            className="text-sm text-white/70 hover:text-white"
          >
            ← Trilha
          </Link>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold truncate">{aula.titulo}</div>
            <div className="text-[10px] text-white/60">Role para descer a aula ↓</div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6 lg:flex lg:gap-6">
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24 space-y-1">
            {MOMENTOS.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className={`block text-xs px-3 py-2 rounded-lg transition ${
                  ativo === m.id
                    ? "bg-amber-400 text-[#082414] font-bold"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                {m.label}
              </a>
            ))}
          </div>
        </aside>

        <main className="flex-1 space-y-8 min-w-0">
          <Secao id="m1" label="🎯 Missão">
            {aula.momento01_missao.imagemUrl && (
              <img src={aula.momento01_missao.imagemUrl} alt="" className="w-24 h-24 object-contain mx-auto mb-3 drop-shadow" />
            )}
            <p className="text-xl font-black text-amber-200 text-center">
              {aula.momento01_missao.texto}
            </p>
          </Secao>

          <Secao id="m2" label="📖 Narrativa">
            {aula.momento02_narrativa.imagemUrl && (
              <img src={aula.momento02_narrativa.imagemUrl} alt="" className="w-24 h-24 object-contain mx-auto mb-3 drop-shadow" />
            )}
            <h3 className="text-xl font-black text-amber-200 text-center">
              {aula.momento02_narrativa.titulo}
            </h3>
            <p className="text-white/90 leading-relaxed text-center max-w-2xl mx-auto mt-2">
              {aula.momento02_narrativa.historia}
            </p>
          </Secao>

          <Secao id="m3" label="🖼 Exploração visual">
            <Instrucao>{m3.instrucao}</Instrucao>
            {m3.mapa && <MapaClicavel data={m3.mapa} />}
            {m3.comparador && <ComparadorLadoALado data={m3.comparador} />}
            {m3.galeria && (
              <GaleriaInterativa
                cards={m3.galeria.map((f) => ({
                  imagemUrl: f.imagemUrl,
                  titulo: f.legenda,
                  descricao: f.legenda,
                }))}
              />
            )}
          </Secao>

          <Secao id="m4" label="🔍 Observação">
            <p className="text-lg font-black text-amber-200 text-center">
              🤔 {aula.momento04_observacao.perguntaGuia}
            </p>
            <ul className="mt-3 space-y-2 max-w-xl mx-auto">
              {aula.momento04_observacao.pistas.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-white/90 bg-white/5 rounded-xl px-3 py-2 border border-white/10">
                  <span className="text-amber-300">🔎</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 p-3 rounded-2xl bg-amber-400 text-[#082414] font-bold text-center">
              💡 {aula.momento04_observacao.revelacao}
            </div>
          </Secao>

          <Secao id="m5" label="👩‍🏫 Ensino explícito">
            <h3 className="text-xl font-black text-amber-200 text-center mb-3">
              {aula.momento05_ensinoExplicito.titulo}
            </h3>
            <div className="space-y-3">
              {aula.momento05_ensinoExplicito.etapas.map((e, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 p-3">
                  {e.imagemUrl && (
                    <img src={e.imagemUrl} alt="" className="w-16 h-16 object-contain shrink-0" />
                  )}
                  <div className="flex-1">
                    <div className="text-xs font-bold text-amber-300 mb-1">Passo {i + 1}</div>
                    <div className="text-white/90 leading-snug">{e.texto}</div>
                  </div>
                </div>
              ))}
            </div>
          </Secao>

          <Secao id="m6" label="👨‍🏫 Eu faço (Brilha resolve)">
            <p className="text-base font-bold text-white/90 text-center mb-3">
              {aula.momento06_euFaco.enunciado}
            </p>
            {aula.momento06_euFaco.visualUrl && (
              <img src={aula.momento06_euFaco.visualUrl} alt="" className="w-32 h-32 object-contain mx-auto mb-3" />
            )}
            <ol className="space-y-2 max-w-xl mx-auto">
              {aula.momento06_euFaco.passos.map((p, i) => (
                <li key={i} className="flex gap-3 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-amber-400 text-[#082414] font-black grid place-items-center text-sm">{i + 1}</span>
                  <span className="text-white/90 leading-snug">{p}</span>
                </li>
              ))}
            </ol>
          </Secao>

          <Secao id="m7" label="🤝 Nós fazemos (junto)">
            <p className="text-base font-bold text-white/90 text-center mb-2">
              {m7.enunciado}
            </p>
            <div className="text-sm bg-amber-100 text-amber-900 rounded-xl px-3 py-2 border-2 border-amber-300 max-w-xl mx-auto mb-3">
              💡 <span className="font-bold">Dica:</span> {m7.dica}
            </div>
            {m7.mapa && <MapaClicavel data={m7.mapa} />}
            {m7.comparador && <ComparadorLadoALado data={m7.comparador} />}
            {m7.orientacao && <OrientacaoEspacial data={m7.orientacao} />}
            {m7.quiz && <QuizTexto quiz={m7.quiz} />}
          </Secao>

          <Secao id="m8" label="✍️ Você faz (sozinho)">
            <p className="text-base font-bold text-white/90 text-center mb-3">
              {m8.enunciado}
            </p>
            {m8.mapa && <MapaClicavel data={m8.mapa} />}
            {m8.comparador && <ComparadorLadoALado data={m8.comparador} />}
            {m8.orientacao && <OrientacaoEspacial data={m8.orientacao} />}
            {m8.quiz && <QuizTexto quiz={m8.quiz} />}
          </Secao>

          <Secao id="m9" label="🌍 Aplicação no cotidiano">
            <div className="text-sm text-white/70 italic mb-1">
              {aula.momento09_aplicacaoCotidiano.contexto}
            </div>
            <div className="text-base font-bold text-amber-200 mb-3">
              {aula.momento09_aplicacaoCotidiano.problema}
            </div>
            <QuizTexto quiz={aula.momento09_aplicacaoCotidiano.quiz} />
          </Secao>

          <Secao id="m10" label={`🎮 ${aula.momento10_minijogo.titulo}`}>
            <Instrucao>{aula.momento10_minijogo.instrucao}</Instrucao>
            {(() => {
              const j = aula.momento10_minijogo.jogo;
              if (j.tipo === "arrastarParaAlvo") return <ArrastarParaAlvo data={j.bloco} />;
              if (j.tipo === "ordenarSequencia") return <OrdenarSequencia data={j.bloco} />;
              if (j.tipo === "selecionarItens") return <SelecionarItens data={j.bloco} />;
              if (j.tipo === "mapaClicavel") return <MapaClicavel data={j.bloco} />;
              if (j.tipo === "orientacaoEspacial") return <OrientacaoEspacial data={j.bloco} />;
              if (j.tipo === "galeriaExploracao") return <GaleriaInterativa cards={j.bloco.cards} instrucaoExtra={j.bloco.instrucao} />;
              return null;
            })()}
          </Secao>

          <Secao id="m11" label="❓ Quiz">
            <Instrucao>{aula.momento11_quiz.instrucao}</Instrucao>
            <div className="space-y-3">
              {aula.momento11_quiz.perguntas.map((q, i) => (
                <QuizTexto key={i} quiz={q} />
              ))}
            </div>
          </Secao>

          <Secao id="m12" label="👨‍👩‍👧 Missão em Família">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-3">
              <h4 className="text-lg font-bold text-amber-200">
                {aula.momento12_missaoFamilia.titulo}
              </h4>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/60 mb-1">Materiais</div>
                <ul className="list-disc list-inside text-sm text-white/85">
                  {aula.momento12_missaoFamilia.materiais.map((m, i) => <li key={i}>{m}</li>)}
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/60 mb-1">Passo a passo</div>
                <ol className="list-decimal list-inside text-sm text-white/85 space-y-1">
                  {aula.momento12_missaoFamilia.passos.map((p, i) => <li key={i}>{p}</li>)}
                </ol>
              </div>
              <div className="text-sm text-white/85 pt-1">
                <span className="text-amber-200 font-bold">📸 Registro:</span>{" "}
                {aula.momento12_missaoFamilia.registro}
              </div>
            </div>
          </Secao>

          <Secao id="m13" label="📊 Avaliação">
            <div className="space-y-3">
              {aula.momento13_avaliacao.perguntas.map((q, i) => (
                <QuizTexto key={i} quiz={q} />
              ))}
            </div>
          </Secao>

          <Secao id="m14" label="⭐ Continuação da jornada">
            {aula.momento14_continuacao.imagemUrl && (
              <img src={aula.momento14_continuacao.imagemUrl} alt="" className="w-24 h-24 object-contain mx-auto mb-2" />
            )}
            <p className="text-lg font-black text-amber-200 text-center">
              {aula.momento14_continuacao.texto}
            </p>
            <div className="mt-3 flex items-center justify-center gap-4 text-sm text-white/80">
              <span>⭐ {aula.recompensa.xp} XP</span>
              <span>🪙 {aula.recompensa.moedas}</span>
              {aula.recompensa.medalha && <span>🏅 {aula.recompensa.medalha}</span>}
            </div>
          </Secao>

          <div className="pt-6 flex flex-col items-center gap-3">
            <button
              onClick={() => onConcluir?.()}
              className="px-8 py-4 rounded-xl bg-amber-400 text-[#082414] font-black text-lg hover:bg-amber-300"
            >
              🎉 Concluir aula
            </button>
            <Link to={voltarPara} className="text-xs text-white/50 hover:text-white/80">
              Sair para a trilha
            </Link>
          </div>
        </main>
      </div>
    </div>
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
  return (
    <section id={id} className="scroll-mt-24 rounded-3xl bg-white/5 border border-white/10 p-5 md:p-6">
      <div className="text-[11px] uppercase tracking-widest text-amber-300 mb-3">{label}</div>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Instrucao({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-white/80 italic">{children}</p>;
}
