import { useState, useMemo, useRef, useEffect } from "react";
import { ArrowLeft, Volume2, VolumeX, CheckCircle2, Headphones, Square } from "lucide-react";

import { useNavigate } from "@tanstack/react-router";
import { useDeviceTTS } from "@/hooks/useDeviceTTS";
import { useAppState } from "@/core/store";
import { supabase } from "@/integrations/supabase/client";
import type { Aula } from "../types";
import { useProgresso } from "../useProgresso";
import { Missao } from "./blocos/Missao";
import { Narrativa } from "./blocos/Narrativa";
import { Objetivos } from "./blocos/Objetivos";
import { Explicacao } from "./blocos/Explicacao";
import { ExemploResolvido } from "./blocos/ExemploResolvido";
import { AtividadeGuiada } from "./blocos/AtividadeGuiada";
import { Exercicios } from "./blocos/Exercicios";
import { ProgressaoNiveis } from "./blocos/ProgressaoNiveis";
import { Desafio } from "./blocos/Desafio";
import { Quiz } from "./blocos/Quiz";
import { Revisao } from "./blocos/Revisao";
import { Curiosidade } from "./blocos/Curiosidade";
import { Conclusao } from "./blocos/Conclusao";
import { Minijogo } from "./blocos/Minijogo";
import { MissaoFamilia } from "./blocos/MissaoFamilia";


import { Diagnostico } from "./blocos/Diagnostico";
import { MultiModal } from "./MultiModal";
import { ProfessorVirtual } from "./ProfessorVirtual";

/**
 * Player único de aulas do Escola Brilha.
 * Funciona pra Educação Infantil até o 9º Ano — carrega qualquer aula
 * a partir do código BNCC via registry.
 *
 * === MÉTODO BRILHA DE APRENDIZAGEM ===
 * Toda aula segue obrigatoriamente 5 etapas, distribuídas em 10 blocos:
 *  1. DESCOBRIR   → Missão · Objetivos          (curiosidade, cotidiano)
 *  2. ENTENDER    → Explicação · Exemplo        (teoria em pedaços)
 *  3. EXPLORAR    → Prática Guiada              (observar, comparar)
 *  4. PRATICAR    → Exercícios · Desafio        (guiada → independente)
 *  5. CONQUISTAR  → Quiz · Resumo · Conclusão   (domínio da habilidade)
 */
const BLOCOS_BASE = [
  { id: "narrativa",  nome: "História",       etapa: 1, etapaNome: "Descobrir"  },
  { id: "missao",     nome: "Missão",         etapa: 1, etapaNome: "Descobrir"  },
  { id: "objetivos",  nome: "Objetivos",      etapa: 1, etapaNome: "Descobrir"  },
  { id: "explicacao", nome: "Explicação",     etapa: 2, etapaNome: "Entender"   },
  { id: "aprendendo", nome: "Aprendendo",     etapa: 2, etapaNome: "Entender"   },
  { id: "exemplo",    nome: "Exemplo",        etapa: 2, etapaNome: "Entender"   },
  { id: "guiada",     nome: "Prática Guiada", etapa: 3, etapaNome: "Explorar"   },
  { id: "exercicios", nome: "Exercícios",     etapa: 4, etapaNome: "Praticar"   },
  { id: "desafio",    nome: "Desafio",        etapa: 4, etapaNome: "Praticar"   },
  { id: "minijogo",   nome: "Minijogo",       etapa: 4, etapaNome: "Praticar"   },
  { id: "quiz",        nome: "Quiz",           etapa: 5, etapaNome: "Conquistar" },
  { id: "resumo",      nome: "Resumo",         etapa: 5, etapaNome: "Conquistar" },
  { id: "curiosidade", nome: "Curiosidade",    etapa: 5, etapaNome: "Conquistar" },
  { id: "familia",     nome: "Missão em Família", etapa: 5, etapaNome: "Conquistar" },
  { id: "conclusao",   nome: "Conclusão",      etapa: 5, etapaNome: "Conquistar" },
] as const;



type BlocoId = typeof BLOCOS_BASE[number]["id"];

const ETAPAS_METODO = [
  { n: 1, nome: "Descobrir",  cor: "#FFC93C" },
  { n: 2, nome: "Entender",   cor: "#4C9EFF" },
  { n: 3, nome: "Explorar",   cor: "#A78BFA" },
  { n: 4, nome: "Praticar",   cor: "#34D399" },
  { n: 5, nome: "Conquistar", cor: "#FF8A4C" },
] as const;

export function AulaPlayer({
  aula,
  onConcluir,
}: {
  aula: Aula;
  /** Disparado APÓS o registro de conclusão no backend. Usado pelo
   *  UniversalPlayer para auto-redirecionar quando a missão atual
   *  é de recuperação e existe uma missão principal aguardando. */
  onConcluir?: (info: { codigo: string; desempenho: number }) => void;
}) {
  const navigate = useNavigate();
  const { activeChild } = useAppState();
  const { progresso, salvar } = useProgresso(activeChild?.id, aula.codigo);
  const BLOCOS = useMemo(
    () =>
      BLOCOS_BASE.filter((b) => {
        if (b.id === "narrativa" && !aula.narrativa) return false;
        if (b.id === "curiosidade" && !aula.curiosidade) return false;
        if (b.id === "minijogo" && !aula.minijogo) return false;
        if (b.id === "familia" && !aula.missaoFamilia) return false;
        return true;
      }),
    [aula.narrativa, aula.curiosidade, aula.minijogo, aula.missaoFamilia],
  );


  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [retomado, setRetomado] = useState(false);
  const [emDiagnostico, setEmDiagnostico] = useState(false);
  const tts = useDeviceTTS();
  const inicioBloco = useRef<number>(Date.now());
  const tentativaContada = useRef(false);

  const temDiagnostico = (aula.diagnostico?.length ?? 0) > 0;
  // Diagnóstico é ÚNICO por criança: se já respondeu em qualquer habilidade,
  // nunca mais aparece. Verificamos globalmente antes de mostrar.
  const [diagnosticoGlobalFeito, setDiagnosticoGlobalFeito] = useState<boolean | null>(null);

  useEffect(() => {
    if (!activeChild?.id) return;
    let vivo = true;
    (async () => {
      const { data } = await supabase
        .from("escola_progresso")
        .select("child_id")
        .eq("child_id", activeChild.id)
        .eq("diagnostico_feito", true)
        .limit(1)
        .maybeSingle();
      if (!vivo) return;
      setDiagnosticoGlobalFeito(!!data);
    })();
    return () => { vivo = false; };
  }, [activeChild?.id]);

  useEffect(() => {
    if (progresso.carregado && !retomado && diagnosticoGlobalFeito !== null) {
      setAcertos(progresso.acertos);
      setErros(progresso.erros);
      inicioBloco.current = Date.now();
      setRetomado(true);
      if (
        temDiagnostico &&
        !progresso.diagnostico_feito &&
        !diagnosticoGlobalFeito &&
        !progresso.concluida
      ) {
        setEmDiagnostico(true);
      }
      if (!tentativaContada.current) {
        tentativaContada.current = true;
        void salvar({ tentativas: (progresso.tentativas ?? 0) + 1 });
      }
    }
  }, [progresso, retomado, salvar, temDiagnostico, diagnosticoGlobalFeito]);

  // Texto CURTO (só a missão) — usado pelo ícone do topo.
  const textoCurto = useMemo(() => aula.missao ?? aula.titulo, [aula]);
  // Texto COMPLETO da aula — lê tudo, do começo ao fim, na ordem dos blocos.
  const textoCompleto = useMemo(() => montarTextoAula(aula), [aula]);
  const speak = () => (tts.speaking ? tts.stop() : tts.speak(textoCurto, { rate: 0.95 }));
  const speakTudo = () => (tts.speaking ? tts.stop() : tts.speak(textoCompleto, { rate: 0.9 }));
  const tempoDoBloco = () => Math.max(0, Math.round((Date.now() - inicioBloco.current) / 1000));


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

  // Modo TELA ÚNICA (rolagem): renderiza todos os blocos empilhados.
  // A criança rola a página inteira — sem botão "Próximo".
  const concluirAula = async () => {
    tts.stop();
    const gasto = tempoDoBloco();
    inicioBloco.current = Date.now();
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
      bloco_atual: BLOCOS.length - 1,
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
      const desempenho = Math.round((acertos / total) * 100);
      await supabase.rpc("registrar_conclusao_aula", {
        _child_id: activeChild.id,
        _codigo_bncc: aula.codigo,
        _desempenho: desempenho,
        _tipo: "aula",
      });
      onConcluir?.({ codigo: aula.codigo, desempenho });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1f55] to-[#050a2c] text-white pb-16">
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
        <div className="flex gap-1 mb-2" aria-label="Método Brilha: Descobrir, Entender, Explorar, Praticar, Conquistar">
          {ETAPAS_METODO.map((e) => (
            <div
              key={e.n}
              className="flex-1 h-1.5 rounded-full"
              style={{ background: e.cor }}
              title={e.nome}
            />
          ))}
        </div>
      </div>

      {tts.supported && (
        <div className="px-4 pt-3">
          <button
            onClick={speakTudo}
            className={`w-full h-14 rounded-2xl font-black flex items-center justify-center gap-2 active:scale-[0.98] shadow-lg transition-colors ${
              tts.speaking
                ? "bg-gradient-to-r from-[#EF4444] to-[#F97316] text-white"
                : "bg-gradient-to-r from-[#22C55E] to-[#10B981] text-white"
            }`}
            aria-label={tts.speaking ? "Parar leitura da aula" : "Escutar toda a explicação da aula"}
          >
            {tts.speaking ? (
              <>
                <Square className="h-5 w-5 fill-current" /> Parar leitura
              </>
            ) : (
              <>
                <Headphones className="h-5 w-5" /> Escutar explicação da aula
              </>
            )}
          </button>
          <p className="text-center text-[11px] font-black uppercase tracking-widest text-white/60 mt-1">
            O professor lê a aula toda em voz alta
          </p>
        </div>
      )}


      <div className="px-4 pt-5">
        {emDiagnostico ? (
          <Diagnostico
            aula={aula}
            onFinish={async ({ acertos: a, total, resultado }) => {
              await salvar({
                diagnostico_feito: true,
                diagnostico_acertos: a,
                diagnostico_total: total,
                diagnostico_resultado: resultado,
              });
              inicioBloco.current = Date.now();
              setEmDiagnostico(false);
            }}
          />
        ) : (
          <div className="space-y-8">
            {BLOCOS.map((bloco, i) => {
              const etapa = ETAPAS_METODO[bloco.etapa - 1];
              return (
                <section
                  key={bloco.id}
                  id={`bloco-${bloco.id}`}
                  className="scroll-mt-24"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="inline-block h-2.5 w-2.5 rounded-full"
                      style={{ background: etapa.cor }}
                    />
                    <span
                      className="text-[10px] font-black uppercase tracking-widest"
                      style={{ color: etapa.cor }}
                    >
                      Etapa {bloco.etapa} · {etapa.nome}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                      · {bloco.nome}
                    </span>
                    <span className="ml-auto text-[10px] font-black text-white/40">
                      {i + 1}/{BLOCOS.length}
                    </span>
                  </div>
                  {renderBloco(aula, bloco.id, {
                    acertos,
                    erros,
                    childId: activeChild?.id,
                    setAcertos,
                    setErros,
                    onQuizEnd: concluirAula,
                  })}
                  <ProfessorVirtual
                    aula={aula}
                    blocoId={bloco.id}
                    idade={activeChild?.idade}
                    nomeCrianca={activeChild?.nome}
                    acertos={acertos}
                    erros={erros}
                    childId={activeChild?.id}
                  />
                </section>
              );
            })}

            <div className="pt-4">
              <button
                onClick={concluirAula}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C] text-[#0d1f55] font-black flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                Concluir aula <CheckCircle2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


function renderBloco(
  a: Aula,
  blocoId: BlocoId,
  ctx: {
    acertos: number;
    erros: number;
    childId?: string;
    setAcertos: (n: number) => void;
    setErros: (n: number) => void;
    onQuizEnd: () => void;
  },
) {
  switch (blocoId) {
    case "narrativa":
      return a.narrativa ? <Narrativa dados={a.narrativa} /> : null;
    case "missao":
      return <Missao texto={a.missao} />;
    case "objetivos":
      return <Objetivos itens={a.objetivos} />;
    case "explicacao":
      return (
        <>
          <Explicacao texto={a.explicacao} aula={a} />
          <div className="mt-4">
            <MultiModal aula={a} />
          </div>
        </>
      );
    case "exemplo":
      return <ExemploResolvido dados={a.exemploResolvido} />;
    case "guiada":
      return <AtividadeGuiada dados={a.atividadeGuiada} />;
    case "exercicios":
      if (a.niveis && (a.niveis.facil?.length || a.niveis.medio?.length || a.niveis.dificil?.length)) {
        return (
          <ProgressaoNiveis
            aula={a}
            childId={ctx.childId}
            onProgress={({ acertos, erros }) => {
              ctx.setAcertos(ctx.acertos + acertos);
              ctx.setErros(ctx.erros + erros);
            }}
          />
        );
      }
      return <Exercicios itens={a.exercicios} />;
    case "desafio":
      return <Desafio dados={a.desafio} />;
    case "minijogo":
      return a.minijogo ? <Minijogo dados={a.minijogo} /> : null;
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
    case "curiosidade":
      return a.curiosidade ? <Curiosidade dados={a.curiosidade} /> : null;
    case "familia":
      return a.missaoFamilia ? <MissaoFamilia dados={a.missaoFamilia} /> : null;
    case "conclusao":
      return <Conclusao texto={a.conclusao} acertos={ctx.acertos} total={a.quiz.length} codigoAtual={a.codigo} />;


    default:
      return null;
  }
}

/**
 * Monta o texto completo da aula para o botão "Escutar explicação".
 * Inclui todos os blocos, na ordem em que aparecem na tela.
 */
function montarTextoAula(a: Aula): string {
  const partes: string[] = [];
  const add = (s?: string | null) => {
    const t = (s ?? "").toString().trim();
    if (t) partes.push(t);
  };

  add(a.titulo);
  if (a.narrativa) {
    add(a.narrativa.titulo);
    add(a.narrativa.contexto);
    add(a.narrativa.problema);
    add(a.narrativa.convite);
  }
  add("Missão.");
  add(a.missao);
  if (a.objetivos?.length) {
    add("Nossos objetivos são:");
    a.objetivos.forEach((o) => add(o));
  }
  add("Vamos à explicação.");
  add(a.explicacao);
  if (a.explicacaoAtiva?.length) {
    a.explicacaoAtiva.forEach((p) => {
      add(p.texto);
      if (p.exemplo) add(`Exemplo: ${p.exemplo}`);
    });
  }
  if (a.exemploResolvido) {
    add("Vamos ver um exemplo.");
    add(a.exemploResolvido.enunciado);
    a.exemploResolvido.passos?.forEach((p) => add(p));
    add(`Resposta: ${a.exemploResolvido.resposta}`);
  }
  if (a.atividadeGuiada) {
    add("Agora a prática guiada.");
    add(a.atividadeGuiada.enunciado);
    add(a.atividadeGuiada.explicacao);
    add(`Resposta: ${a.atividadeGuiada.resposta}`);
  }
  if (a.exercicios?.length) {
    add("Vamos treinar.");
    a.exercicios.forEach((e, i) => {
      add(`Exercício ${i + 1}. ${e.enunciado}`);
      if (e.dica) add(`Dica: ${e.dica}`);
    });
  }
  if (a.desafio?.enunciado) {
    add("Desafio.");
    add(a.desafio.enunciado);
  }
  if (a.revisao) {
    add("Resumo.");
    a.revisao.pontos?.forEach((p) => add(p));
    if (a.revisao.dica) add(`Dica: ${a.revisao.dica}`);
  }
  if (a.curiosidade?.texto) {
    add("Você sabia?");
    add(a.curiosidade.texto);
  }
  if (a.conclusao) {
    add("Conclusão.");
    add(a.conclusao);
  }
  return partes.join(". ").replace(/\.\.+/g, ".");
}

