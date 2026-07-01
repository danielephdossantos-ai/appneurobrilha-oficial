import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Volume2, VolumeX, CheckCircle2 } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useDeviceTTS } from "@/hooks/useDeviceTTS";
import { useAppState } from "@/core/store";
import { supabase } from "@/integrations/supabase/client";
import type { Aula } from "../types";
import { useProgresso } from "../useProgresso";
import { Objetivo } from "./blocos/Objetivo";
import { Introducao } from "./blocos/Introducao";
import { Explicacao } from "./blocos/Explicacao";
import { Exemplo } from "./blocos/Exemplo";
import { ExemploCotidiano } from "./blocos/ExemploCotidiano";
import { PraticaGuiada } from "./blocos/PraticaGuiada";
import { PraticaIndependente } from "./blocos/PraticaIndependente";
import { Curiosidade } from "./blocos/Curiosidade";
import { Desafio } from "./blocos/Desafio";
import { Resumo } from "./blocos/Resumo";
import { Revisao } from "./blocos/Revisao";
import { Quiz } from "./blocos/Quiz";
import { Resultado } from "./blocos/Resultado";

const BLOCOS = [
  { id: "objetivo", nome: "Objetivo" },
  { id: "introducao", nome: "Introdução" },
  { id: "explicacao", nome: "Explicação" },
  { id: "exemplo", nome: "Exemplo" },
  { id: "cotidiano", nome: "No dia a dia" },
  { id: "guiada", nome: "Prática guiada" },
  { id: "independente", nome: "Prática sozinho" },
  { id: "curiosidade", nome: "Curiosidade" },
  { id: "desafio", nome: "Desafio" },
  { id: "resumo", nome: "Resumo" },
  { id: "revisao", nome: "Revisão" },
  { id: "quiz", nome: "Quiz" },
  { id: "resultado", nome: "Resultado" },
];

export function AulaPlayer({ aula }: { aula: Aula }) {
  const navigate = useNavigate();
  const { activeChild } = useAppState();
  const { progresso, salvar } = useProgresso(activeChild?.id, aula.codigo);
  const [idx, setIdx] = useState(progresso.bloco_atual);
  const [acertos, setAcertos] = useState(0);
  const tts = useDeviceTTS();

  const texto = useMemo(() => textoDoBloco(aula, idx), [aula, idx]);

  const speak = () => (tts.speaking ? tts.stop() : tts.speak(texto));

  const next = async () => {
    tts.stop();
    if (idx < BLOCOS.length - 1) {
      const novo = idx + 1;
      setIdx(novo);
      await salvar(novo);
    } else {
      await salvar(idx, true);
      if (activeChild?.id) {
        await supabase.rpc("add_brilhocoins", { child_id: activeChild.id, amount: 20 });
      }
    }
  };

  const prev = () => {
    tts.stop();
    if (idx > 0) setIdx(idx - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1f55] to-[#050a2c] text-white pb-24">
      {/* Header */}
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

      {/* Barra de progresso */}
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

      {/* Conteúdo */}
      <div className="px-4 pt-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {renderBloco(aula, idx, { acertos, setAcertos, onQuizEnd: next })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav inferior */}
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
    case "objetivo":
      return a.objetivo;
    case "introducao":
      return a.introducao;
    case "explicacao":
      return a.explicacao;
    case "exemplo":
      return a.exemplo;
    case "cotidiano":
      return a.exemploCotidiano;
    case "guiada":
      return `${a.praticaGuiada.enunciado}. Resposta: ${a.praticaGuiada.resposta}. ${a.praticaGuiada.explicacao}`;
    case "independente":
      return a.praticaIndependente.enunciado;
    case "curiosidade":
      return a.curiosidade;
    case "desafio":
      return a.desafio.enunciado;
    case "resumo":
      return a.resumo;
    case "revisao":
      return `${a.revisao.dica}. Palavras-chave: ${a.revisao.palavrasChave.join(", ")}.`;
    case "quiz":
      return "Quiz da aula. Escolha a resposta certa.";
    case "resultado":
      return a.fechamento;
    default:
      return "";
  }
}

function renderBloco(
  a: Aula,
  i: number,
  ctx: { acertos: number; setAcertos: (n: number) => void; onQuizEnd: () => void },
) {
  switch (BLOCOS[i].id) {
    case "objetivo":
      return <Objetivo texto={a.objetivo} />;
    case "introducao":
      return <Introducao texto={a.introducao} />;
    case "explicacao":
      return <Explicacao texto={a.explicacao} />;
    case "exemplo":
      return <Exemplo texto={a.exemplo} />;
    case "cotidiano":
      return <ExemploCotidiano texto={a.exemploCotidiano} />;
    case "guiada":
      return <PraticaGuiada dados={a.praticaGuiada} />;
    case "independente":
      return <PraticaIndependente dados={a.praticaIndependente} />;
    case "curiosidade":
      return <Curiosidade texto={a.curiosidade} />;
    case "desafio":
      return <Desafio dados={a.desafio} />;
    case "resumo":
      return <Resumo texto={a.resumo} />;
    case "revisao":
      return <Revisao dados={a.revisao} />;
    case "quiz":
      return (
        <Quiz
          questoes={a.quiz}
          onFinish={(n) => {
            ctx.setAcertos(n);
            ctx.onQuizEnd();
          }}
        />
      );
    case "resultado":
      return <Resultado texto={a.fechamento} acertos={ctx.acertos} total={a.quiz.length} />;
    default:
      return null;
  }
}
