import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EtapaCurricular } from "../data/etapas";
import { gerarPorTipo, Rodada } from "../engine/gerador";
import { useVoz } from "../hooks/useVoz";
import { useAdaptiveDifficulty } from "../hooks/useAdaptiveDifficulty";
import { objetoImg } from "@/data/neuro-treino/objetos";
import { Volume2, X, Check, Sparkles, TrendingUp, TrendingDown, Lightbulb } from "lucide-react";

interface Props {
  etapa: EtapaCurricular;
  acertosAtuais: number;
  childId: string;
  onAcerto: () => void;
  onSair: () => void;
}

// Tipos que usam o grid de números em vez de imagens.
const TIPOS_NUMERO = new Set(["segmentacao", "contagem-fonemas"]);
// Tipos que exibem uma "palavra de referência" antes do grid.
const TIPOS_COM_REFERENCIA = new Set([
  "rima",
  "aliteracao",
  "som-final",
  "substituicao-fonema",
]);

export function AtividadePlayer({ etapa, acertosAtuais, childId, onAcerto, onSair }: Props) {
  const { falar, parar } = useVoz();
  const { nivel, registrar } = useAdaptiveDifficulty(childId);
  const [rodada, setRodada] = useState<Rodada>(() =>
    gerarPorTipo(
      etapa.atividades[Math.floor(Math.random() * etapa.atividades.length)],
      nivel,
    ),
  );
  const [feedback, setFeedback] = useState<"acerto" | "erro" | null>(null);
  const [travado, setTravado] = useState(false);
  const [ajuste, setAjuste] = useState<"subiu" | "desceu" | null>(null);
  const [errosNaRodada, setErrosNaRodada] = useState(0);
  const [revelar, setRevelar] = useState(false); // destaca a resposta certa após 2 erros
  const [ultimaRegra, setUltimaRegra] = useState<string | null>(null);
  const timers = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  const progressoPct = useMemo(
    () => Math.min(100, Math.round((acertosAtuais / etapa.alvo) * 100)),
    [acertosAtuais, etapa.alvo],
  );

  function agendar(fn: () => void, ms: number) {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
  }
  function limparTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  useEffect(() => {
    falar(rodada.instrucaoFalada);
    return () => {
      limparTimers();
      parar();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rodada]);

  function proximaRodada(nivelAtual: number) {
    limparTimers();
    const tipo = etapa.atividades[Math.floor(Math.random() * etapa.atividades.length)];
    setRodada(gerarPorTipo(tipo, nivelAtual));
    setFeedback(null);
    setTravado(false);
    setErrosNaRodada(0);
    setRevelar(false);
    setUltimaRegra(null);
  }

  function responder(resposta: string) {
    if (travado) return;
    setTravado(true);
    const ok = resposta === rodada.correta;
    setFeedback(ok ? "acerto" : "erro");
    const nivelAntes = nivel;
    const nivelDepois = registrar(ok);
    if (nivelDepois > nivelAntes) {
      setAjuste("subiu");
      agendar(() => setAjuste(null), 1800);
    } else if (nivelDepois < nivelAntes) {
      setAjuste("desceu");
      agendar(() => setAjuste(null), 1800);
    }

    if (ok) {
      falar("Isso! " + rodada.regra);
      onAcerto();
      agendar(() => proximaRodada(nivelDepois), 2200);
      return;
    }

    // ERRO: Professor Digital explica a regra e mostra o som certo.
    const novoErros = errosNaRodada + 1;
    setErrosNaRodada(novoErros);
    setUltimaRegra(rodada.regra);

    if (novoErros >= 2) {
      // Revela a resposta certa e avança sem contar acerto.
      setRevelar(true);
      falar(`Olha só. ${rodada.regra} Vamos para a próxima.`);
      agendar(() => proximaRodada(nivelDepois), 4200);
    } else {
      // Primeira tentativa errada: explica e libera nova tentativa.
      falar(`Ainda não. ${rodada.regra}`);
      agendar(() => {
        setFeedback(null);
        setTravado(false);
      }, 3200);
    }
  }

  const usaGridNumero = TIPOS_NUMERO.has(rodada.tipo);
  const usaReferencia = TIPOS_COM_REFERENCIA.has(rodada.tipo);
  const imagensGrid = usaReferencia ? rodada.imagens.slice(1) : rodada.imagens;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex flex-col">
      {/* Top bar */}
      <div className="flex items-center gap-3 p-4 border-b bg-white/80 backdrop-blur">
        <button
          onClick={onSair}
          className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200"
          aria-label="Sair"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <span>{etapa.emoji}</span>
            <span className="truncate">{etapa.titulo}</span>
          </div>
          <div className="mt-1 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${etapa.cor} transition-all`}
              style={{ width: `${progressoPct}%` }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-600"
            title="Dificuldade adaptativa atual"
          >
            Nível {nivel}
          </div>
          {ultimaRegra && (
            <button
              onClick={() => falar(ultimaRegra)}
              className="w-11 h-11 rounded-full bg-amber-400 text-white flex items-center justify-center shadow hover:bg-amber-500"
              aria-label="Ouvir a explicação"
              title="Ouvir a dica do Professor"
            >
              <Lightbulb className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={() => falar(rodada.instrucaoFalada)}
            className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg hover:bg-indigo-600"
            aria-label="Ouvir a pergunta"
          >
            <Volume2 className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {ajuste && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            className={`mx-auto mt-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow flex items-center gap-2 ${
              ajuste === "subiu" ? "bg-emerald-500 text-white" : "bg-amber-500 text-white"
            }`}
          >
            {ajuste === "subiu" ? (
              <>
                <TrendingUp className="w-4 h-4" /> Você está craque! Ficou mais difícil
              </>
            ) : (
              <>
                <TrendingDown className="w-4 h-4" /> Vou facilitar um pouquinho
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Balão do Professor Digital com a regra quando erra */}
      <AnimatePresence>
        {feedback === "erro" && ultimaRegra && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="mx-auto mt-3 w-[92%] max-w-2xl rounded-2xl bg-white shadow-lg border-l-4 border-amber-400 px-4 py-3 flex items-start gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-sm text-slate-700 leading-snug">
              <div className="text-[10px] font-black uppercase tracking-wider text-amber-600 mb-0.5">
                Professor Brilha
              </div>
              {ultimaRegra}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
        {usaReferencia && (
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">
              Palavra de referência
            </span>
            <ImgChip
              nome={rodada.imagens[0]}
              tamanho="md"
              onClick={() => falar(rodada.imagens[0].toLowerCase())}
            />
          </div>
        )}

        {usaGridNumero ? (
          <>
            <ImgChip
              nome={rodada.imagens[0]}
              tamanho="lg"
              onClick={() => falar(rodada.imagens[0].toLowerCase())}
            />
            <div className="grid grid-cols-4 gap-3 w-full max-w-md">
              {rodada.numeroOpcoes!.map((n) => {
                const isCorreta = String(n) === rodada.correta;
                const destaque = revelar && isCorreta;
                return (
                  <button
                    key={n}
                    onClick={() => responder(String(n))}
                    disabled={travado}
                    className={`aspect-square rounded-2xl border-4 text-4xl font-black shadow-md transition-all disabled:opacity-60 ${
                      destaque
                        ? "border-emerald-500 bg-emerald-50 text-emerald-600 ring-4 ring-emerald-300 scale-105"
                        : "border-indigo-200 bg-white text-indigo-600 hover:scale-105"
                    }`}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <div
            className={`grid gap-4 w-full max-w-3xl ${
              imagensGrid.length === 4
                ? "grid-cols-2"
                : "grid-cols-2 sm:grid-cols-3"
            }`}
          >
            {imagensGrid.map((nome) => {
              const isCorreta = nome === rodada.correta;
              const destaque = revelar && isCorreta;
              return (
                <ImgChip
                  key={nome}
                  nome={nome}
                  tamanho="lg"
                  selecionavel
                  destaque={destaque}
                  onClick={() => responder(nome)}
                  disabled={travado}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div
              className={`w-32 h-32 rounded-full flex items-center justify-center shadow-2xl ${
                feedback === "acerto" ? "bg-emerald-500" : "bg-rose-500"
              }`}
            >
              {feedback === "acerto" ? (
                <Sparkles className="w-16 h-16 text-white" />
              ) : (
                <X className="w-16 h-16 text-white" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ImgChip({
  nome,
  tamanho,
  onClick,
  selecionavel,
  disabled,
  destaque,
}: {
  nome: string;
  tamanho: "md" | "lg";
  onClick?: () => void;
  selecionavel?: boolean;
  disabled?: boolean;
  destaque?: boolean;
}) {
  const src = objetoImg(nome);
  const size = tamanho === "lg" ? "h-32 sm:h-40" : "h-24 sm:h-28";
  const borda = destaque
    ? "border-emerald-500 ring-4 ring-emerald-300 scale-105"
    : selecionavel
      ? "border-indigo-200 hover:scale-105"
      : "border-slate-100";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${size} aspect-square rounded-3xl bg-white shadow-md flex items-center justify-center p-3 border-4 ${borda} transition-all disabled:opacity-60`}
    >
      {src ? (
        <img src={src} alt="" className="max-h-full max-w-full object-contain" />
      ) : (
        <span className="text-5xl">❓</span>
      )}
    </button>
  );
}
