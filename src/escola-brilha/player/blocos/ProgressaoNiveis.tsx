import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Lock, CheckCircle2, XCircle, Sparkles, RefreshCw } from "lucide-react";
import { Secao } from "./Secao";
import type { Aula, QuizItem } from "../../types";
import { useMetricasAula, precisaIntervir, type Dificuldade } from "../personalizacao";
import { PainelAdaptativo } from "../PainelAdaptativo";


/**
 * Progressão automática Fácil → Médio → Difícil.
 * Portão de domínio (default 70%) — só libera o próximo nível quando a criança
 * demonstra domínio do anterior. Registra desempenho por nível em localStorage
 * e devolve o resultado agregado (acertos/erros da última rodada de cada
 * nível) via `onProgress` pro player somar no contador da aula.
 */
type Nivel = "facil" | "medio" | "dificil";
const ORDEM: Nivel[] = ["facil", "medio", "dificil"];

const META: Record<Nivel, { rotulo: string; sub: string; cor: string; icon: string }> = {
  facil:   { rotulo: "Nível Fácil",   sub: "Aprendizagem inicial",     cor: "#34D399", icon: "🌱" },
  medio:   { rotulo: "Nível Médio",   sub: "Aplicação do conceito",    cor: "#FBBF24", icon: "🚀" },
  dificil: { rotulo: "Nível Difícil", sub: "Problemas mais elaborados", cor: "#F472B6", icon: "🏆" },
};

type Desempenho = {
  acertos: number;
  total: number;
  tentativas: number;
  dominado: boolean;
  ultimaEm?: string;
};

type Registro = Partial<Record<Nivel, Desempenho>>;

function chave(childId: string | undefined, codigo: string) {
  return `eb:niveis:${childId ?? "anon"}:${codigo}`;
}

function ler(childId: string | undefined, codigo: string): Registro {
  try {
    return JSON.parse(localStorage.getItem(chave(childId, codigo)) ?? "{}");
  } catch {
    return {};
  }
}
function gravar(childId: string | undefined, codigo: string, reg: Registro) {
  try {
    localStorage.setItem(chave(childId, codigo), JSON.stringify(reg));
  } catch {
    /* silencioso */
  }
}

export function ProgressaoNiveis({
  aula,
  childId,
  onProgress,
}: {
  aula: Aula;
  childId?: string;
  /** Chamado a cada rodada finalizada — o player soma no contador global. */
  onProgress?: (delta: { acertos: number; erros: number }) => void;
}) {
  const niveis = aula.niveis!;
  const dominio = niveis.dominioMinimo ?? 70;

  const disponiveis = useMemo<Nivel[]>(
    () => ORDEM.filter((n) => (niveis[n]?.length ?? 0) > 0),
    [niveis],
  );

  const [reg, setReg] = useState<Registro>(() => ler(childId, aula.codigo));
  const [nivelAtual, setNivelAtual] = useState<Nivel>(() => {
    const r = ler(childId, aula.codigo);
    for (const n of disponiveis) if (!r[n]?.dominado) return n;
    return disponiveis[disponiveis.length - 1];
  });

  const tracker = useMetricasAula(childId, aula.codigo);
  const [intervencao, setIntervencao] = useState<{ motivo?: string } | null>(null);

  useEffect(() => {
    gravar(childId, aula.codigo, reg);
  }, [reg, childId, aula.codigo]);


  const desbloqueado = (n: Nivel) => {
    const i = disponiveis.indexOf(n);
    if (i <= 0) return true;
    const anterior = disponiveis[i - 1];
    return !!reg[anterior]?.dominado;
  };

  return (
    <Secao icon={Layers} rotulo="Progressão por níveis" cor="#60A5FA">
      {/* Trilha dos níveis */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {disponiveis.map((n) => {
          const on = desbloqueado(n);
          const done = reg[n]?.dominado;
          const ativo = nivelAtual === n;
          return (
            <button
              key={n}
              disabled={!on}
              onClick={() => setNivelAtual(n)}
              className={`rounded-2xl p-2 border-2 text-left transition-all ${
                ativo ? "scale-[1.02]" : ""
              } ${on ? "opacity-100" : "opacity-40"} ${
                done ? "border-white/40" : "border-white/15"
              }`}
              style={{
                background: on ? `${META[n].cor}22` : "rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex items-center gap-1 text-lg">
                <span>{META[n].icon}</span>
                {!on && <Lock className="h-3 w-3 text-white/60" />}
                {done && <CheckCircle2 className="h-3 w-3" style={{ color: META[n].cor }} />}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest mt-1" style={{ color: META[n].cor }}>
                {META[n].rotulo}
              </div>
              <div className="text-[10px] text-white/60 leading-tight">{META[n].sub}</div>
              {reg[n] && (
                <div className="text-[10px] text-white/70 mt-1 font-black">
                  {reg[n]!.acertos}/{reg[n]!.total}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {!desbloqueado(nivelAtual) ? (
        <div className="rounded-2xl bg-white/10 p-4 text-center text-sm">
          <Lock className="h-5 w-5 inline mr-1" /> Complete o nível anterior com pelo menos {dominio}% de acertos pra desbloquear.
        </div>
      ) : (
        <RodadaNivel
          key={nivelAtual}
          nivel={nivelAtual}
          questoes={niveis[nivelAtual]!}
          dominioMinimo={dominio}
          tracker={tracker}
          onDificuldadeDetectada={(motivo) => setIntervencao({ motivo })}
          onFim={(acertos, total) => {
            const dominado = Math.round((acertos / total) * 100) >= dominio;
            const anterior = reg[nivelAtual];
            const novoReg: Registro = {
              ...reg,
              [nivelAtual]: {
                acertos,
                total,
                tentativas: (anterior?.tentativas ?? 0) + 1,
                dominado: dominado || !!anterior?.dominado,
                ultimaEm: new Date().toISOString(),
              },
            };
            setReg(novoReg);
            onProgress?.({ acertos, erros: total - acertos });
            if (dominado) {
              const i = disponiveis.indexOf(nivelAtual);
              const prox = disponiveis[i + 1];
              if (prox) setTimeout(() => setNivelAtual(prox), 900);
            }
          }}
        />
      )}

      {/* painel de reforço automático quando dificuldade é detectada */}
      {intervencao && (
        <PainelAdaptativo
          aula={aula}
          motivo={intervencao.motivo}
          onFechar={() => {
            tracker.zerarSequencia();
            setIntervencao(null);
          }}
        />
      )}
    </Secao>
  );
}


/* -------------------- rodada de perguntas de um nível -------------------- */

function RodadaNivel({
  nivel,
  questoes,
  dominioMinimo,
  tracker,
  onDificuldadeDetectada,
  onFim,
}: {
  nivel: Nivel;
  questoes: QuizItem[];
  dominioMinimo: number;
  tracker: ReturnType<typeof useMetricasAula>;
  onDificuldadeDetectada: (motivo?: string) => void;
  onFim: (acertos: number, total: number) => void;
}) {
  const [i, setI] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [acertos, setAcertos] = useState(0);
  const [terminado, setTerminado] = useState(false);
  const registradaRef = useRef(false);
  const q = questoes[i];

  // marca início da questão (base pro tempo de resposta)
  useEffect(() => {
    tracker.marcarInicioQuestao();
    registradaRef.current = false;
  }, [i, tracker]);

  const escolher = (idx: number) => {
    if (escolha !== null) return;
    const correta = idx === q.correta;
    setEscolha(idx);
    if (correta) setAcertos((n) => n + 1);
    if (!correta) tracker.registrarTentativa();
    if (!registradaRef.current) {
      registradaRef.current = true;
      tracker.registrarResposta({
        bloco: `exercicios:${nivel}`,
        correta,
        dificuldade: nivel as Dificuldade,
      });
    }
  };
  const avancar = () => {
    // antes de avançar, checa se precisa de intervenção adaptativa
    const check = precisaIntervir(tracker.metricas);
    if (check.intervir) {
      onDificuldadeDetectada(check.motivo);
      return;
    }
    if (i + 1 < questoes.length) {
      setI(i + 1);
      setEscolha(null);
    } else {
      setTerminado(true);
      onFim(acertos, questoes.length);
    }
  };
  const reiniciar = () => {
    setI(0); setEscolha(null); setAcertos(0); setTerminado(false);
  };


  if (terminado) {
    const pct = Math.round((acertos / questoes.length) * 100);
    const ok = pct >= dominioMinimo;
    return (
      <div className="rounded-2xl bg-white/10 p-4 text-center">
        <div className="text-3xl mb-2">{ok ? "🎉" : "💪"}</div>
        <div className="font-black text-lg mb-1">
          {acertos} / {questoes.length} corretos ({pct}%)
        </div>
        <div className="text-sm text-white/80 mb-3">
          {ok
            ? `Domínio confirmado no ${META[nivel].rotulo.toLowerCase()}! Próximo nível liberado.`
            : `Precisa de pelo menos ${dominioMinimo}% pra avançar. Tente de novo — cada tentativa fica registrada.`}
        </div>
        <button
          onClick={reiniciar}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#0d1f55] font-black"
        >
          <RefreshCw className="h-4 w-4" /> Tentar de novo
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/60 mb-2">
        <span style={{ color: META[nivel].cor }}>{META[nivel].rotulo}</span>
        <span>Pergunta {i + 1} de {questoes.length}</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="rounded-2xl bg-white/10 border border-white/20 p-3"
        >
          <p className="font-black mb-3">{q.pergunta}</p>
          <VisualQuestao visual={q.visual} />

          <div className="space-y-2">
            {q.opcoes.map((op, k) => {
              const certa = k === q.correta;
              const sel = escolha === k;
              const revelado = escolha !== null;
              return (
                <button
                  key={k}
                  onClick={() => escolher(k)}
                  disabled={revelado}
                  className={`w-full text-left px-3 py-2 rounded-xl font-black flex items-center justify-between ${
                    revelado
                      ? certa
                        ? "bg-[#22C55E] text-[#0d1f55]"
                        : sel
                          ? "bg-[#EF4444] text-white"
                          : "bg-white/15 text-white/70"
                      : "bg-white text-[#0d1f55]"
                  }`}
                >
                  <span>{op}</span>
                  {revelado && certa && <CheckCircle2 className="h-4 w-4" />}
                  {revelado && sel && !certa && <XCircle className="h-4 w-4" />}
                </button>
              );
            })}
          </div>
          {escolha !== null && (
            <div className="mt-3 rounded-xl bg-white/10 p-2 text-sm border border-white/15 flex gap-2 items-start">
              <Sparkles className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{q.explicacao}</span>
            </div>
          )}
          {escolha !== null && (
            <button
              onClick={avancar}
              className="mt-3 w-full h-10 rounded-xl bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C] text-[#0d1f55] font-black"
            >
              {i + 1 < questoes.length ? "Próxima" : "Ver resultado"}
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
