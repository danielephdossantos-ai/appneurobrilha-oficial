import { createFileRoute, Link } from "@tanstack/react-router";
import { cursoLerComAurora } from "@/escola-brilha/curso-ler-com-aurora/aulas";
import { cursoLerComAuroraFase2 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase2";
import { cursoLerComAuroraFase3 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase3";
import { cursoLerComAuroraFase4 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase4";
import { cursoLerComAuroraFase5 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase5";
import { cursoLerComAuroraFase6 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase6";
import { cursoLerComAuroraFase7 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase7";
import { cursoLerComAuroraFase8 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase8";

import type { CursoEI } from "@/escola-brilha/curso-portugues-ei/types";

/**
 * Trilha Duolingo do curso "Ler com Aurora".
 * Fases 1 (Consciência Fonológica) e 2 (Princípio Alfabético).
 * Modo teste: todas as missões destravadas.
 */
export const Route = createFileRoute("/escola-brilha/ler-com-aurora/")({
  head: () => ({
    meta: [
      { title: "Ler com Aurora · Escola Brilha" },
      {
        name: "description",
        content:
          "Trilha de alfabetização baseada na ciência da leitura (NRP, PNA, Ehri, Heggerty, Longcamp). 40 missões de 15 min/dia.",
      },
    ],
  }),
  component: TrilhaLerComAurora,
});

function loadConcluidas(): Set<string> {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem("eb.ler-aurora.concluidas") : null;
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function FaseBloco({
  fase,
  curso,
  concluidas,
  gradiente,
  badge,
}: {
  fase: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  curso: CursoEI;
  concluidas: Set<string>;
  gradiente: string;
  badge: string;
}) {
  const aulasFlat = curso.unidades.flatMap((u) => u.aulas);
  const total = aulasFlat.length;
  const feitas = aulasFlat.filter((a) => concluidas.has(a.slug)).length;
  const progresso = Math.round((feitas / total) * 100);

  return (
    <section className="mt-8">
      <div
        className="rounded-3xl px-5 py-4 mb-4 shadow-xl"
        style={{ background: gradiente }}
      >
        <p className="text-[10px] tracking-widest font-black text-white/90">
          {badge}
        </p>
        <h2 className="text-2xl font-black text-white leading-tight">
          {curso.titulo}
        </h2>
        <p className="text-white/90 text-xs mt-1">{curso.descricao}</p>
        <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-white">
          <span>Fase {fase} · {feitas}/{total} missões</span>
          <span>{progresso}%</span>
        </div>
        <div className="mt-1 h-2 rounded-full bg-black/25 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-300 to-lime-400"
            style={{ width: `${progresso}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        {curso.unidades.map((u) => (
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
                      to="/escola-brilha/ler-com-aurora/$aula"
                      params={{ aula: a.slug }}
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
                        <div className="text-[9px] opacity-70 mt-0.5">
                          Missão {flatIdx + 1}/{total}
                        </div>
                      </div>
                      {feito && (
                        <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 grid place-items-center text-white text-sm">
                          ✓
                        </div>
                      )}
                      {i === 0 && flatIdx === 0 && !feito && (
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
    </section>
  );
}

function TrilhaLerComAurora() {
  const concluidas = loadConcluidas();
  const totalGeral =
    cursoLerComAurora.unidades.flatMap((u) => u.aulas).length +
    cursoLerComAuroraFase2.unidades.flatMap((u) => u.aulas).length +
    cursoLerComAuroraFase3.unidades.flatMap((u) => u.aulas).length +
    cursoLerComAuroraFase4.unidades.flatMap((u) => u.aulas).length +
    cursoLerComAuroraFase5.unidades.flatMap((u) => u.aulas).length +
    cursoLerComAuroraFase6.unidades.flatMap((u) => u.aulas).length +
    cursoLerComAuroraFase7.unidades.flatMap((u) => u.aulas).length +
    cursoLerComAuroraFase8.unidades.flatMap((u) => u.aulas).length;


  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-500 via-orange-600 to-purple-800 text-white">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <Link to="/" className="text-white/80 text-sm">◂ Voltar</Link>

        <header className="text-center mt-3 mb-6">
          <p className="text-yellow-200 font-bold text-xs tracking-wider">
            ALFABETIZAÇÃO ATÉ 6 ANOS · CIÊNCIA DA LEITURA
          </p>
          <h1 className="text-3xl sm:text-4xl font-black mt-1">Ler com Aurora</h1>
          <p className="text-yellow-100 text-sm mt-1">
            {totalGeral} missões · 15 min/dia · Pré II + 1º Ano
          </p>
        </header>

        <div className="rounded-2xl bg-amber-300/90 text-amber-950 px-4 py-2 text-xs font-bold text-center mb-2">
          🔓 Modo teste: todas as {totalGeral} missões destravadas
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <Link
            to="/escola-brilha/ler-com-aurora/diagnostico"
            className="rounded-2xl bg-white/10 border-2 border-white/15 px-4 py-3 text-center active:scale-[0.98]"
          >
            <div className="text-lg">🧭</div>
            <div className="text-[11px] font-black uppercase tracking-widest text-yellow-200">Diagnóstico</div>
            <div className="text-[10px] text-white/75 mt-0.5">Descubra por onde começar</div>
          </Link>
          <Link
            to="/escola-brilha/ler-com-aurora/painel"
            className="rounded-2xl bg-white/10 border-2 border-white/15 px-4 py-3 text-center active:scale-[0.98]"
          >
            <div className="text-lg">📊</div>
            <div className="text-[11px] font-black uppercase tracking-widest text-yellow-200">Painel do Adulto</div>
            <div className="text-[10px] text-white/75 mt-0.5">Acompanhe o progresso</div>
          </Link>
        </div>

        <FaseBloco
          fase={1}
          curso={cursoLerComAurora}
          concluidas={concluidas}
          gradiente="linear-gradient(135deg,#f59e0b,#ea580c)"
          badge="FASE 1 · CONSCIÊNCIA FONOLÓGICA"
        />

        <FaseBloco
          fase={2}
          curso={cursoLerComAuroraFase2}
          concluidas={concluidas}
          gradiente="linear-gradient(135deg,#7c3aed,#4338ca)"
          badge="FASE 2 · PRINCÍPIO ALFABÉTICO"
        />

        <FaseBloco
          fase={3}
          curso={cursoLerComAuroraFase3}
          concluidas={concluidas}
          gradiente="linear-gradient(135deg,#0ea5e9,#0c4a6e)"
          badge="FASE 3 · DECODIFICAÇÃO SILÁBICA (CV)"
        />

        <FaseBloco
          fase={4}
          curso={cursoLerComAuroraFase4}
          concluidas={concluidas}
          gradiente="linear-gradient(135deg,#f43f5e,#881337)"
          badge="FASE 4 · FLUÊNCIA E COMPREENSÃO"
        />

        <FaseBloco
          fase={5}
          curso={cursoLerComAuroraFase5}
          concluidas={concluidas}
          gradiente="linear-gradient(135deg,#10b981,#064e3b)"
          badge="FASE 5 · ORTOGRAFIA INICIAL"
        />

        <FaseBloco
          fase={6}
          curso={cursoLerComAuroraFase6}
          concluidas={concluidas}
          gradiente="linear-gradient(135deg,#facc15,#78350f)"
          badge="FASE 6 · FLUÊNCIA VERDADEIRA (completa 4/4)"
        />

        <FaseBloco
          fase={7}
          curso={cursoLerComAuroraFase7}
          concluidas={concluidas}
          gradiente="linear-gradient(135deg,#a855f7,#3b0764)"
          badge="FASE 7 · VOCABULÁRIO ATIVO (completa 4/4)"
        />

        <FaseBloco
          fase={8}
          curso={cursoLerComAuroraFase8}
          concluidas={concluidas}
          gradiente="linear-gradient(135deg,#0ea5e9,#0c4a6e)"
          badge="FASE 8 · COMPREENSÃO ESTRATÉGICA (completa 4/4)"
        />




        <div className="mt-10 rounded-2xl bg-black/30 p-4 text-xs text-white/80">
          <p className="font-bold text-yellow-200 mb-1">📚 Base científica</p>
          <p>
            Não prometemos prazos — cada criança aprende no próprio ritmo.
            Usamos técnicas com evidência: consciência fonológica (Heggerty,
            NRP 2000), princípio alfabético (Ehri 2005), traçado motor
            (Longcamp 2008), caixas de Elkonin (1973), deleção fonêmica,
            ensino explícito de correspondência grafema-fonema (PNA-MEC
            2019) e ortografia por padrões regulares (Morais 2020).
          </p>
        </div>
      </div>
    </div>
  );
}
