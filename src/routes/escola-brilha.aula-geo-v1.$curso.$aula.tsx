import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [proximaPendente, setProximaPendente] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [aula]);

  const tocarCheck = () => {
    try {
      const AC = (window as any).AudioContext || (window as any).webkitAudioContext;
      if (!AC) return;
      const ctx = new AC();
      const now = ctx.currentTime;
      const notes = [
        { f: 880, t: 0 },
        { f: 1318, t: 0.12 },
      ];
      notes.forEach(({ f, t }) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = f;
        g.gain.setValueAtTime(0.0001, now + t);
        g.gain.exponentialRampToValueAtTime(0.25, now + t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, now + t + 0.28);
        osc.connect(g).connect(ctx.destination);
        osc.start(now + t);
        osc.stop(now + t + 0.3);
      });
    } catch {
      /* ignore */
    }
  };

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
      tocarCheck();
      setProximaPendente(proxima.aula.slug);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      setTimeout(() => {
        navigate({
          to: "/escola-brilha/aula-geo-v1/$curso/$aula",
          params: { curso, aula: proxima.aula.slug },
          replace: false,
        });
        setProximaPendente(null);
      }, 2000);
    } else {
      setMostrarFinal(true);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  };

  if (mostrarFinal) {
    const cursoInfo = getCursoGeoV1(curso);
    return <CelebracaoFinalCurso curso={curso} titulo={cursoInfo?.titulo ?? "Curso"} onSair={sair} />;
  }

  return (
    <>
      <PlayerGeoV1 key={aula} aula={dados.aula} onSair={sair} onConcluir={concluir} />
      <AnimatePresence>
        {proximaPendente && <MissaoDesbloqueada />}
      </AnimatePresence>
      <audio ref={audioRef} preload="auto" />
    </>
  );
}

function MissaoDesbloqueada() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d1f55]/85 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.5, rotate: -8, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
        className="relative bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 rounded-3xl px-10 py-8 shadow-2xl text-center max-w-sm mx-6"
      >
        {/* Halo brilhante */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          animate={{ boxShadow: ["0 0 0px #fde68a", "0 0 60px #fde68a", "0 0 0px #fde68a"] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        />
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.5, times: [0, 0.6, 1] }}
            className="mx-auto w-24 h-24 rounded-full bg-white/30 flex items-center justify-center text-6xl mb-3 border-4 border-white/60"
          >
            🛡️
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            className="absolute top-0 right-0 w-12 h-12 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center text-2xl text-white shadow-lg"
          >
            ✔
          </motion.div>
          <div className="text-xs uppercase tracking-[0.3em] text-[#5b3a00] font-bold">
            Escola Brilha
          </div>
          <div className="text-2xl font-black text-[#3d2500] mt-1">
            Missão Desbloqueada!
          </div>
          <div className="text-sm text-[#5b3a00] mt-2 font-semibold">
            Preparando a próxima aventura…
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
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
