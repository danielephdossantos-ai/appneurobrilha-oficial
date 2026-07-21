import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cursosInglesEI } from "@/escola-brilha/curso-ingles-ei/registry";
import type { CursoIng } from "@/escola-brilha/curso-ingles-ei/types";

/**
 * Trilha visual estilo Duolingo do Inglês EI.
 * Cada nível (Maternal, Pré I, Pré II) tem sua trilha em zig-zag.
 * Aulas seguem o mesmo esqueleto de 11 momentos — só o visual do
 * índice muda pra ficar igual às outras categorias.
 */
export const Route = createFileRoute("/escola-brilha/ingles-ei/")({
  head: () => ({
    meta: [
      { title: "My First English — Trilha de Inglês EI" },
      {
        name: "description",
        content:
          "Trilha visual de inglês oral para 3 a 6 anos com música, imitação, brincadeira e repetição espaçada.",
      },
      { property: "og:title", content: "My First English — Trilha de Inglês EI" },
      {
        property: "og:description",
        content: "Inglês oral pra Maternal, Pré I e Pré II com técnicas científicas de aquisição de segunda língua.",
      },
    ],
  }),
  component: IndiceInglesEI,
});

function IndiceInglesEI() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-fuchsia-900 to-pink-900 text-white">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <Link to="/" className="text-white/80 text-sm">◂ Voltar</Link>
        <header className="text-center mt-3 mb-6">
          <p className="text-yellow-300 font-bold text-xs tracking-wider">
            EDUCAÇÃO INFANTIL · MÉTODO SPEB
          </p>
          <h1 className="text-3xl sm:text-4xl font-black mt-2">My First English</h1>
          <p className="text-white/80 mt-2 text-sm max-w-xl mx-auto">
            Ouvir, imitar, brincar e cantar. Sem leitura — só oralidade, música e imagens.
          </p>
        </header>

        <CienciaBox />

        <div className="grid gap-6 mt-6">
          {cursosInglesEI.map((curso) => (
            <TrilhaCurso key={curso.slug} curso={curso} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/60">
          Semana 1 do Maternal disponível. Semanas 2–4 e Pré I / Pré II entram após validação cena por cena.
        </p>
      </div>
    </div>
  );
}

function CienciaBox() {
  return (
    <details className="rounded-2xl bg-white/10 border border-white/20 p-4 text-sm">
      <summary className="cursor-pointer font-black text-yellow-200">
        🧠 Como uma criança de 3 anos aprende inglês? (base científica)
      </summary>
      <ul className="mt-3 space-y-2 text-white/90 text-[13px] leading-relaxed">
        <li>
          <b>Período sensível (Kuhl, 2010):</b> 0–7 anos o cérebro ainda ouve TODOS os sons.
          É a melhor fase pra pegar sotaque nativo — por isso a narração usa voz nativa en-US.
        </li>
        <li>
          <b>Input compreensível (Krashen):</b> criança entende pela IMAGEM + gesto + tom, não pela tradução. Toda palavra-alvo aparece com foto e ação.
        </li>
        <li>
          <b>TPR — Total Physical Response (Asher):</b> "Wave!", "Jump!", "Touch your nose!" — o corpo grava antes da fala. Cada aula tem 1 momento de faz-de-conta.
        </li>
        <li>
          <b>Repetição espaçada (Ellis, Nation):</b> cada palavra reaparece 6× na mesma aula e volta em aulas seguintes.
        </li>
        <li>
          <b>Música e ritmo (Patel, 2011):</b> canção curta fixa entonação e melodia da língua — 1 verso cantável em toda aula.
        </li>
        <li>
          <b>Zero tradução direta:</b> a criança aprende inglês DE inglês, ouvindo em contexto. Português só entra pra dar segurança emocional.
        </li>
        <li>
          <b>Missão em família:</b> 5 min por dia de uso real em casa — a evidência mais forte de retenção em EI.
        </li>
      </ul>
    </details>
  );
}

function TrilhaCurso({ curso }: { curso: CursoIng }) {
  const [concluidas, setConcluidas] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(`eb.ei.en.concluidas.${curso.slug}`);
      const list: string[] = raw ? JSON.parse(raw) : [];
      setConcluidas(new Set(list));
    } catch {
      /* ignore */
    }
  }, [curso.slug]);

  const todasAulas = curso.unidades.flatMap((u) => u.aulas);
  const total = todasAulas.length;
  const feitas = todasAulas.filter((a) => concluidas.has(a.slug)).length;
  const proximaIdx = todasAulas.findIndex((a) => !concluidas.has(a.slug));
  const tudoConcluido = total > 0 && feitas >= total;

  return (
    <div
      className="rounded-3xl p-5 shadow-xl border-2 border-white/15"
      style={{
        background: `linear-gradient(160deg, ${curso.corSecundaria}, ${curso.corPrimaria})`,
      }}
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-white/20 grid place-items-center overflow-hidden shrink-0 ring-2 ring-amber-300">
          <img src={curso.mascoteUrl} alt="Teacher Buddy" className="w-14 h-14 object-contain" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-widest text-white/90 font-black">
            {curso.serieLabel} · com Teacher Buddy
          </p>
          <h2 className="text-xl font-black leading-tight">{curso.titulo}</h2>
          <p className="text-[11px] text-white/85 mt-0.5">
            {feitas}/{total} aulas · {curso.unidades.length} semana(s)
          </p>
          <div className="mt-2 bg-black/25 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-amber-300 transition-all"
              style={{ width: total > 0 ? `${(feitas / total) * 100}%` : "0%" }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {curso.unidades.map((u) => (
          <div key={u.slug}>
            <div className="text-center mb-3">
              <div className="inline-block bg-black/40 rounded-full px-3 py-1 text-[11px] uppercase tracking-wider font-black text-yellow-300">
                {u.titulo}
              </div>
              {u.subtitulo && (
                <div className="text-[11px] text-white/80 mt-1">{u.subtitulo}</div>
              )}
            </div>

            <div className="space-y-4">
              {u.aulas.map((a) => {
                const globalIdx = todasAulas.findIndex((x) => x.slug === a.slug);
                const feita = concluidas.has(a.slug);
                const eProxima = globalIdx === proximaIdx && !feita;
                const align = globalIdx % 2 === 0 ? "justify-start" : "justify-end";
                return (
                  <div key={a.slug} className={`flex ${align}`}>
                    <Link
                      to="/escola-brilha/ingles-ei/$serie/$aula"
                      params={{ serie: curso.serie, aula: a.slug }}
                      className={`group relative w-36 h-36 rounded-full grid place-items-center shadow-xl active:scale-95 transition ${
                        eProxima ? "ring-4 ring-amber-300 animate-pulse" : ""
                      }`}
                      style={{
                        background: feita
                          ? "linear-gradient(135deg, #34d399, #059669)"
                          : "linear-gradient(135deg, #fde68a, #f59e0b)",
                        color: "#1a0d3d",
                      }}
                    >
                      <div className="text-center px-3">
                        <div className="text-3xl">{a.icone ?? "🎧"}</div>
                        <div className="text-[11px] font-black mt-1 leading-tight line-clamp-3">
                          {a.titulo}
                        </div>
                      </div>
                      {feita && (
                        <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-emerald-500 grid place-items-center text-white text-lg border-2 border-white">
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

        {/* Diploma final por nível */}
        <div className="pt-2">
          <div
            className={`rounded-2xl p-5 text-center ${
              tudoConcluido
                ? "bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 text-[#1a0d3d] font-black shadow-2xl"
                : "bg-white/10 border border-dashed border-white/25 text-white/70"
            }`}
          >
            <div className="text-4xl mb-1">{tudoConcluido ? "🏅" : "🔒"}</div>
            <div className="text-sm font-black">
              {tudoConcluido
                ? `Little English Star — ${curso.serieLabel}`
                : `Diploma trancado — conclua as ${total} aulas`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
