import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { AulaGeografiaV4 } from "../types";
import { stopSpeaking } from "@/lib/native-tts";
import { Motivacao } from "./blocos/Motivacao";
import { GaleriaLugares } from "./blocos/GaleriaLugares";
import { ModoInvestigador } from "./blocos/ModoInvestigador";

/**
 * Player Geografia v4 — estética de campo/expedição.
 * Fundo escuro noturno, verde-scanner como cor de destaque.
 * Etapa A: apenas Motivação + Galeria + Modo Investigador estão
 * renderizados; as demais seções aparecem como "em construção" só
 * pra confirmar o esqueleto (serão substituídas nas Etapas B/C).
 */

type Props = {
  aula: AulaGeografiaV4;
  cursoSlug: string;
  voltarPara: string;
  onConcluir?: () => void;
};

const MOMENTOS = [
  { id: "m1", label: "🛰️ Missão" },
  { id: "m2", label: "📸 Galeria" },
  { id: "m3", label: "🔎 Investigador" },
  { id: "m4", label: "🤔 Hipóteses" },
  { id: "m5", label: "⚖️ Comparar" },
  { id: "m6", label: "📊 Painel" },
  { id: "m7", label: "🕵️ Sozinho" },
  { id: "m8", label: "🧪 Laboratório" },
  { id: "m9", label: "🏗️ Arquiteto" },
  { id: "m10", label: "🏠 Em Família" },
] as const;

export function PlayerGeografiaV4({ aula, cursoSlug, voltarPara, onConcluir }: Props) {
  const [ativo, setAtivo] = useState<string>("m1");

  useEffect(() => {
    const els = MOMENTOS.map((m) => document.getElementById(m.id)).filter(
      Boolean,
    ) as HTMLElement[];
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#031b1a] via-[#04252b] to-[#020a15] text-white">
      <header className="sticky top-0 z-20 bg-[#020a15]/95 backdrop-blur border-b border-emerald-400/20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            to="/escola-brilha/curso/$slug"
            params={{ slug: cursoSlug }}
            className="text-sm text-emerald-200/70 hover:text-white"
          >
            ← Trilha
          </Link>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] uppercase tracking-[0.25em] text-emerald-300 font-bold">
              🛰️ Expedição GeoBrilha
            </div>
            <div className="text-sm font-bold truncate">{aula.titulo}</div>
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
                    ? "bg-emerald-400 text-slate-950 font-bold"
                    : "text-emerald-100/70 hover:bg-white/10"
                }`}
              >
                {m.label}
              </a>
            ))}
          </div>
        </aside>

        <main className="flex-1 space-y-8 min-w-0">
          {/* M1 · Motivação */}
          <section id="m1" className="scroll-mt-24">
            <Motivacao
              titulo={aula.momento01_motivacao.titulo}
              historia={aula.momento01_motivacao.historia}
              personagem={aula.momento01_motivacao.personagem}
            />
          </section>

          {/* M2 · Galeria */}
          <Secao id="m2" label="📸 Galeria dos Lugares">
            <GaleriaLugares data={aula.momento02_galeria.bloco} />
          </Secao>

          {/* M3 · Modo Investigador (um por lugar) */}
          <section id="m3" className="scroll-mt-24 space-y-4">
            <div className="text-[11px] uppercase tracking-widest text-emerald-300">
              🔎 Modo Investigador
            </div>
            {aula.momento03_investigador.blocos.map((b) => (
              <ModoInvestigador key={b.lugarId} data={b} />
            ))}
          </section>

          {/* Etapas B/C — placeholders só pra o esqueleto ficar visível */}
          <EmBreve id="m4" label="🤔 Hipóteses" descricao="Você escolhe o porquê de cada moradia. Vem na Etapa B." />
          <EmBreve id="m5" label="⚖️ Comparar" descricao="Duas fotos lado a lado. Vem na Etapa B." />
          <EmBreve id="m6" label="📊 Painel comparativo" descricao="Tabela final com todas as descobertas. Vem na Etapa B." />
          <EmBreve id="m7" label="🕵️ Investigação livre" descricao="Foto nova pra você caçar pistas sozinho. Vem na Etapa C." />
          <EmBreve id="m8" label="🧪 Laboratório do Explorador" descricao="Muda o clima e o terreno, veja a moradia mudar. Vem na Etapa C." />
          <EmBreve id="m9" label="🏗️ Arquiteto do Lugar Certo" descricao="Minijogo: construa a casa certa. Vem na Etapa C." />

          {/* M10 · Missão em família */}
          <Secao id="m10" label="🏠 Missão em Família">
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-emerald-200">
                {aula.momento10_missaoFamilia.titulo}
              </h4>
              <ol className="list-decimal list-inside text-sm text-white/85 space-y-1">
                {aula.momento10_missaoFamilia.passos.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ol>
              <div className="text-sm text-white/85 pt-1">
                <span className="text-emerald-300 font-bold">📓 Diário do GeoExplorador:</span>{" "}
                {aula.momento10_missaoFamilia.registro}
              </div>
            </div>
          </Secao>

          <div className="pt-6 flex flex-col items-center gap-3">
            <button
              onClick={() => onConcluir?.()}
              className="px-8 py-4 rounded-xl bg-emerald-400 text-slate-950 font-black text-lg hover:bg-emerald-300"
            >
              🎉 Concluir expedição
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
    <section
      id={id}
      className="scroll-mt-24 rounded-3xl bg-white/5 border border-emerald-400/20 p-5 md:p-6"
    >
      <div className="text-[11px] uppercase tracking-widest text-emerald-300 mb-3">
        {label}
      </div>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function EmBreve({ id, label, descricao }: { id: string; label: string; descricao: string }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-3xl border border-dashed border-emerald-400/25 bg-white/[0.02] p-5 text-center"
    >
      <div className="text-[11px] uppercase tracking-widest text-emerald-300 mb-1">
        {label}
      </div>
      <div className="text-white/60 text-sm">{descricao}</div>
    </section>
  );
}
