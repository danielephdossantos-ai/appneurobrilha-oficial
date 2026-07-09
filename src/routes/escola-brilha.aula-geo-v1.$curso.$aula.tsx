import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PlayerGeoV1 } from "@/escola-brilha/curso-v4/geografia-3ano/player/PlayerGeoV1";
import {
  getAulaGeoV1FromCurso,
  getCursoGeoV1,
  getProximaAulaGeoV1,
} from "@/escola-brilha/curso-v4/registry";

export const Route = createFileRoute("/escola-brilha/aula-geo-v1/$curso/$aula")({
  head: ({ params }) => ({
    meta: [
      { title: `Aula ${params.aula} — Cartógrafo` },
      { name: "description", content: "Aula Geografia — player customizado 3º ao 9º ano." },
    ],
  }),
  component: AulaGeoV1Page,
});

const CHAVE_PROGRESSO = (slug: string) => `eb.v4.progresso.${slug}`;

function marcarConcluida(cursoSlug: string, aulaSlug: string) {
  try {
    const raw = localStorage.getItem(CHAVE_PROGRESSO(cursoSlug));
    const arr: string[] = raw ? JSON.parse(raw) : [];
    if (!arr.includes(aulaSlug)) {
      arr.push(aulaSlug);
      localStorage.setItem(CHAVE_PROGRESSO(cursoSlug), JSON.stringify(arr));
    }
  } catch {
    /* ignore */
  }
}

function AulaGeoV1Page() {
  const { curso, aula } = Route.useParams();
  const navigate = useNavigate();
  const dados = getAulaGeoV1FromCurso(curso, aula);
  const [mostrarFinal, setMostrarFinal] = useState(false);

  // Sempre rolar ao topo quando a aula muda (inclusive na navegação inline).
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [aula]);

  if (!dados) {
    return (
      <div className="min-h-screen grid place-items-center bg-[#0d1f55] text-white text-center p-6">
        <div>
          <div className="text-4xl mb-3">🧭</div>
          Aula de Geografia não encontrada.
          <button
            onClick={() => navigate({ to: "/escola-brilha/curso/$slug", params: { slug: curso } })}
            className="block mx-auto mt-4 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-sm"
          >
            ← Voltar à trilha
          </button>
        </div>
      </div>
    );
  }

  const sair = () =>
    navigate({ to: "/escola-brilha/curso/$slug", params: { slug: curso } });

  const concluir = () => {
    marcarConcluida(curso, aula);
    const proxima = getProximaAulaGeoV1(curso, aula);
    if (proxima) {
      // Carrega a próxima aula inline — o `key={aula}` no Player garante remontagem limpa.
      navigate({
        to: "/escola-brilha/aula-geo-v1/$curso/$aula",
        params: { curso, aula: proxima.aula.slug },
        replace: false,
      });
    } else {
      // Última aula do curso → comemoração final.
      setMostrarFinal(true);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  };

  if (mostrarFinal) {
    const cursoInfo = getCursoGeoV1(curso);
    return <CelebracaoFinalCurso curso={curso} titulo={cursoInfo?.titulo ?? "Curso"} onSair={sair} />;
  }

  return <PlayerGeoV1 key={aula} aula={dados.aula} onSair={sair} onConcluir={concluir} />;
}

function CelebracaoFinalCurso({
  curso,
  titulo,
  onSair,
}: {
  curso: string;
  titulo: string;
  onSair: () => void;
}) {
  const navigate = useNavigate();
  const confetes = Array.from({ length: 60 }, (_, i) => i);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1f55] via-[#1a0d3d] to-[#0d1f55] text-white overflow-hidden relative">
      {/* Chuva de confetes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {confetes.map((i) => {
          const cor = ["#FFC93C", "#22C55E", "#4C9EFF", "#F472B6", "#FB923C"][i % 5];
          const left = (i * 37) % 100;
          const delay = (i % 20) * 0.15;
          const dur = 3 + (i % 5);
          return (
            <motion.div
              key={i}
              initial={{ y: -40, rotate: 0, opacity: 0 }}
              animate={{ y: "110vh", rotate: 720, opacity: [0, 1, 1, 0] }}
              transition={{ duration: dur, delay, repeat: Infinity, ease: "linear" }}
              className="absolute w-3 h-3 rounded-sm"
              style={{ left: `${left}%`, background: cor }}
            />
          );
        })}
      </div>

      <div className="relative max-w-2xl mx-auto px-6 py-16 text-center space-y-8">
        <motion.div
          initial={{ scale: 0.4, rotate: -30, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
          className="text-7xl"
        >
          🏆
        </motion.div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-amber-300">
            Escola Brilha · 3º Ano concluído
          </div>
          <h1 className="text-4xl font-black mt-2">Você fechou o {titulo}!</h1>
          <p className="text-white/80 mt-3 leading-relaxed">
            Todas as unidades exploradas, todos os selos conquistados. Aurora, Brilha e a turma
            estão orgulhosos! 🎉
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 pt-4">
          <button
            onClick={() =>
              navigate({
                to: "/escola-brilha/atlas-final/$curso",
                params: { curso },
              })
            }
            className="w-full py-4 rounded-2xl font-black text-lg bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-[#1a0d3d] shadow-2xl hover:scale-[1.01] transition"
          >
            🌍 Abrir meu Atlas Final do Município
          </button>
          <button
            onClick={onSair}
            className="w-full py-3 rounded-2xl font-semibold bg-white/10 border border-white/20 hover:bg-white/15 transition"
          >
            ← Voltar à trilha
          </button>
        </div>
      </div>
    </div>
  );
}
