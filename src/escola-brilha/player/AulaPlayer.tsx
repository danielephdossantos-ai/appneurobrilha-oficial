import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Volume2, VolumeX, CheckCircle2 } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useDeviceTTS } from "@/hooks/useDeviceTTS";
import { useAppState } from "@/core/store";
import { supabase } from "@/integrations/supabase/client";
import type { Aula } from "../types";
import { useProgresso } from "../useProgresso";
import { Missao } from "./blocos/Missao";
import { Objetivos } from "./blocos/Objetivos";
import { Explicacao } from "./blocos/Explicacao";
import { ExemploResolvido } from "./blocos/ExemploResolvido";
import { AtividadeGuiada } from "./blocos/AtividadeGuiada";
import { Exercicios } from "./blocos/Exercicios";
import { Desafio } from "./blocos/Desafio";
import { Quiz } from "./blocos/Quiz";
import { Revisao } from "./blocos/Revisao";
import { Conclusao } from "./blocos/Conclusao";

/**
 * Player único de aulas do Escola Brilha.
 * Funciona pra Educação Infantil até o 9º Ano — carrega qualquer aula
 * a partir do código BNCC via registry.
 *
 * Fluxo fixo de 10 blocos:
 *  Missão → Objetivos → Explicação → Exemplo → Prática Guiada →
 *  Exercícios → Desafio → Quiz → Resumo → Conclusão
 */
const BLOCOS = [
  { id: "missao", nome: "Missão" },
  { id: "objetivos", nome: "Objetivos" },
  { id: "explicacao", nome: "Explicação" },
  { id: "exemplo", nome: "Exemplo" },
  { id: "guiada", nome: "Prática Guiada" },
  { id: "exercicios", nome: "Exercícios" },
  { id: "desafio", nome: "Desafio" },
  { id: "quiz", nome: "Quiz" },
  { id: "resumo", nome: "Resumo" },
  { id: "conclusao", nome: "Conclusão" },
] as const;

export function AulaPlayer({ aula }: { aula: Aula }) {
  const navigate = useNavigate();
  const { activeChild } = useAppState();
  const { progresso, salvar } = useProgresso(activeChild?.id, aula.codigo);
  const [idx, setIdx] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [retomado, setRetomado] = useState(false);
  const tts = useDeviceTTS();
  const inicioBloco = useRef<number>(Date.now());
  const tentativaContada = useRef(false);

  useEffect(() => {
    if (progresso.carregado && !retomado) {
      const alvo = progresso.concluida ? 0 : Math.min(progresso.bloco_atual, BLOCOS.length - 1);
      setIdx(alvo);
      setAcertos(progresso.acertos);
      setErros(progresso.erros);
      inicioBloco.current = Date.now();
      setRetomado(true);
      if (!tentativaContada.current) {
        tentativaContada.current = true;
        void salvar({ tentativas: (progresso.tentativas ?? 0) + 1 });
      }
    }
  }, [progresso, retomado, salvar]);

  const texto = useMemo(() => textoDoBloco(aula, idx), [aula, idx]);
  const speak = () => (tts.speaking ? tts.stop() : tts.speak(texto));
  const tempoDoBloco = () => Math.max(0, Math.round((Date.now() - inicioBloco.current) / 1000));

  const next = async () => {
    tts.stop();
    const gasto = tempoDoBloco();
    inicioBloco.current = Date.now();
    if (idx < BLOCOS.length - 1) {
      const novo = idx + 1;
      setIdx(novo);
      const percentual = Math.round(((novo + 1) / BLOCOS.length) * 100);
      await salvar({
        bloco_atual: novo,
        adicionar_tempo_segundos: gasto,
        percentual,
        acertos,
        erros,
      });
    } else {
      const total = aula.quiz.length || 1;
      const nota = Math.round((acertos / total) * 100) / 10;
      const estrelas =
        acertos >= total
          ? 3
          : acertos >= Math.ceil(total * 0.7)
            ? 2
            : acertos >= Math.ceil(total * 0.4)
              ? 1
              : 0;
      await salvar({
        bloco_atual: idx,
        concluida: true,
        adicionar_tempo_segundos: gasto,
        percentual: 100,
        acertos,
        erros,
        nota,
        estrelas,
      });
      if (activeChild?.id) {
        await supabase.rpc("add_brilhocoins", { child_id: activeChild.id, amount: 20 });
      }
    }
  };

  const prev = () => {
    tts.stop();
    if (idx > 0) {
      const gasto = tempoDoBloco();
      inicioBloco.current = Date.now();
      const novo = idx - 1;
      setIdx(novo);
      void salvar({ bloco_atual: novo, adicionar_tempo_segundos: gasto });
    }
  };

  useEffect(() => {
    const flush = () => {
      const gasto = tempoDoBloco();
      if (gasto > 0) {
        inicioBloco.current = Date.now();
        void salvar({ adicionar_tempo_segundos: gasto });
      }
    };
    const onHide = () => {
      if (document.visibilityState === "hidden") flush();
    };
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", flush);
    return () => {
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", flush);
      flush();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1f55] to-[#050a2c] text-white pb-24">
      <div className="sticky top-0 z-20 bg-[#0d1f55]/95 backdrop-blur border-b-2 border-white/10 px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => navigate({ to: "/escola-brilha" })}
          className="h-10 w-10 rounded-xl bg-white/15 grid place-items-center active:scale-95"
          aria-label="Voltar"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
            {aula.disciplina} · {aula.ano} · {aula.codigo}
          </div>
          <div className="text-sm font-black truncate">{aula.titulo}</div>
        </div>
        <button
          onClick={speak}
          className="h-10 w-10 rounded-xl bg-white/15 grid place-items-center active:scale-95"
          aria-label={tts.speaking ? "Parar leitura" : "Ler em voz alta"}
        >
          {tts.speaking ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>

      <div className="px-4 pt-3">
        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/60 mb-1.5">
          <span>{BLOCOS[idx].nome}</span>
          <span>
            {idx + 1} / {BLOCOS.length}
          </span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C]"
            animate={{ width: `${((idx + 1) / BLOCOS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="px-4 pt-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {renderBloco(aula, idx, { acertos, setAcertos, setErros, onQuizEnd: next })}
          </motion.div>
        </AnimatePresence>
      </div>

      {BLOCOS[idx].id !== "quiz" && (
        <div className="fixed bottom-0 left-0 right-0 z-20 px-4 py-3 bg-[#0d1f55]/95 backdrop-blur border-t-2 border-white/10 flex items-center gap-3">
          <button
            onClick={prev}
            disabled={idx === 0}
            className="h-12 w-12 rounded-2xl bg-white/15 grid place-items-center disabled:opacity-30 active:scale-95"
            aria-label="Anterior"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="flex-1 h-12 rounded-2xl bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C] text-[#0d1f55] font-black flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            {idx === BLOCOS.length - 1 ? (
              <>
                Concluir <CheckCircle2 className="h-5 w-5" />
              </>
            ) : (
              <>
                Próximo <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

function textoDoBloco(a: Aula, i: number): string {
  switch (BLOCOS[i].id) {
    case "missao":
      return a.missao;
    case "objetivos":
      return `Objetivos: ${a.objetivos.join(". ")}.`;
    case "explicacao":
      return a.explicacao;
    case "exemplo":
      return `${a.exemploResolvido.enunciado}. Passos: ${a.exemploResolvido.passos.join(". ")}. Resposta: ${a.exemploResolvido.resposta}.`;
    case "guiada":
      return `${a.atividadeGuiada.enunciado}. Resposta: ${a.atividadeGuiada.resposta}. ${a.atividadeGuiada.explicacao}`;
    case "exercicios":
      return `Exercícios: ${a.exercicios.map((e, k) => `${k + 1}. ${e.enunciado}`).join(" ")}`;
    case "desafio":
      return a.desafio.enunciado;
    case "quiz":
      return "Quiz da aula. Escolha a resposta certa.";
    case "resumo":
      return `Resumo: ${a.revisao.pontos.join(". ")}. Dica: ${a.revisao.dica}.`;
    case "conclusao":
      return a.conclusao;
    default:
      return "";
  }
}

function renderBloco(
  a: Aula,
  i: number,
  ctx: {
    acertos: number;
    setAcertos: (n: number) => void;
    setErros: (n: number) => void;
    onQuizEnd: () => void;
  },
) {
  switch (BLOCOS[i].id) {
    case "missao":
      return <Missao texto={a.missao} />;
    case "objetivos":
      return <Objetivos itens={a.objetivos} />;
    case "explicacao":
      return <Explicacao texto={a.explicacao} />;
    case "exemplo":
      return <ExemploResolvido dados={a.exemploResolvido} />;
    case "guiada":
      return <AtividadeGuiada dados={a.atividadeGuiada} />;
    case "exercicios":
      return <Exercicios itens={a.exercicios} />;
    case "desafio":
      return <Desafio dados={a.desafio} />;
    case "quiz":
      return (
        <Quiz
          questoes={a.quiz}
          onFinish={(n: number) => {
            ctx.setAcertos(n);
            ctx.setErros(Math.max(0, a.quiz.length - n));
            ctx.onQuizEnd();
          }}
        />
      );
    case "resumo":
      return <Revisao dados={a.revisao} />;
    case "conclusao":
      return <Conclusao texto={a.conclusao} acertos={ctx.acertos} total={a.quiz.length} />;
    default:
      return null;
  }
}
