import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Volume2, X, Lock, BookOpen, Sparkles, Check } from "lucide-react";
import {
  HISTORIAS_GRADUADAS,
  HistoriaGraduada,
  calcularNivelLeitor,
  historiasParaNivel,
} from "../data/historias-graduadas";
import { useProgressoAlfa } from "../hooks/useProgressoAlfa";
import { useVoz } from "../hooks/useVoz";
import { objetoImg } from "@/data/neuro-treino/objetos";

interface Props {
  childId: string;
  childName?: string;
  onSair?: () => void;
}

export function BibliotecaHistorias({ childId, childName, onSair }: Props) {
  const { progresso } = useProgressoAlfa(childId);
  const nivelLeitor = useMemo(() => calcularNivelLeitor(progresso), [progresso]);
  const disponiveis = HISTORIAS_GRADUADAS;
  const [ativa, setAtiva] = useState<HistoriaGraduada | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-white p-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center gap-3 mb-6">
          {onSair && (
            <button
              onClick={onSair}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </button>
          )}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow text-xs font-bold text-rose-600">
              <BookOpen className="w-3 h-3" /> Biblioteca Graduada
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 mt-1">
              Histórias para você {childName ? `, ${childName}` : ""}
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Seu nível leitor é <strong>{nivelLeitor}</strong> — todas as histórias estão abertas para você ler à vontade.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {HISTORIAS_GRADUADAS.map((h) => {
            const desbloq = disponiveis.includes(h);
            return (
              <button
                key={h.id}
                disabled={!desbloq}
                onClick={() => desbloq && setAtiva(h)}
                className={`relative rounded-3xl shadow-md p-4 text-left transition-transform ${
                  desbloq ? "bg-white hover:scale-105" : "bg-slate-100"
                }`}
              >
                <div
                  className={`aspect-square rounded-2xl mb-3 flex items-center justify-center ${
                    desbloq
                      ? "bg-gradient-to-br from-rose-100 to-amber-100"
                      : "bg-slate-200"
                  }`}
                >
                  {desbloq ? (
                    <img src={objetoImg(h.capa)} alt="" className="max-h-[70%] max-w-[70%] object-contain" />
                  ) : (
                    <Lock className="w-8 h-8 text-slate-400" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">
                    Nível {h.nivel}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {h.paginas.length} pág.
                  </span>
                </div>
                <h3 className={`font-black text-sm mt-1 ${desbloq ? "text-slate-800" : "text-slate-400"}`}>
                  {h.titulo}
                </h3>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {ativa && (
          <LeitorHistoria historia={ativa} onSair={() => setAtiva(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function LeitorHistoria({
  historia,
  onSair,
}: {
  historia: HistoriaGraduada;
  onSair: () => void;
}) {
  const { falar, parar } = useVoz();
  const [pagina, setPagina] = useState(0);
  const [fase, setFase] = useState<"leitura" | "perguntas" | "fim">("leitura");
  const [perguntaIdx, setPerguntaIdx] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [feedback, setFeedback] = useState<"ok" | "err" | null>(null);

  const totalPag = historia.paginas.length;
  const pAtual = historia.paginas[pagina];

  function ouvir() {
    if (fase === "leitura") falar(pAtual.texto);
    else if (fase === "perguntas") falar(historia.perguntas[perguntaIdx].pergunta);
  }

  function proxPag() {
    if (pagina < totalPag - 1) {
      setPagina(pagina + 1);
      setTimeout(() => falar(historia.paginas[pagina + 1].texto), 200);
    } else {
      parar();
      setFase("perguntas");
      setTimeout(() => falar(historia.perguntas[0].pergunta), 300);
    }
  }

  function antPag() {
    if (pagina > 0) {
      setPagina(pagina - 1);
      setTimeout(() => falar(historia.paginas[pagina - 1].texto), 200);
    }
  }

  function responder(opt: string) {
    if (feedback) return;
    const p = historia.perguntas[perguntaIdx];
    const ok = opt === p.correta;
    setFeedback(ok ? "ok" : "err");
    if (ok) {
      setAcertos(acertos + 1);
      falar("Isso mesmo!");
    } else {
      falar("Quase. Vamos tentar de novo.");
    }
    setTimeout(() => {
      setFeedback(null);
      if (ok) {
        if (perguntaIdx < historia.perguntas.length - 1) {
          setPerguntaIdx(perguntaIdx + 1);
          setTimeout(() => falar(historia.perguntas[perguntaIdx + 1].pergunta), 200);
        } else {
          setFase("fim");
        }
      }
    }, 1200);
  }

  // Toca a primeira página automaticamente ao abrir
  useState(() => {
    setTimeout(() => falar(pAtual.texto), 250);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-amber-50 to-rose-100 flex flex-col"
    >
      <div className="flex items-center gap-3 p-4 border-b bg-white/80 backdrop-blur">
        <button
          onClick={() => {
            parar();
            onSair();
          }}
          className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>
        <div className="flex-1">
          <div className="text-xs font-bold text-rose-500 uppercase tracking-wider">
            Nível {historia.nivel}
          </div>
          <div className="font-black text-slate-800">{historia.titulo}</div>
        </div>
        <button
          onClick={ouvir}
          className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center shadow"
        >
          <Volume2 className="w-6 h-6" />
        </button>
      </div>

      {fase === "leitura" && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
          <div className="bg-white rounded-3xl shadow-xl p-6 max-w-md w-full flex flex-col items-center gap-4">
            <img src={objetoImg(pAtual.imagem)} alt="" className="h-48 object-contain" />
            <p className="text-center text-lg font-medium text-slate-700">
              {pAtual.texto}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={antPag}
              disabled={pagina === 0}
              className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center disabled:opacity-30"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="text-sm font-bold text-slate-500">
              {pagina + 1} / {totalPag}
            </div>
            <button
              onClick={proxPag}
              className="w-12 h-12 rounded-full bg-rose-500 text-white shadow flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {fase === "perguntas" && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
          <div className="text-center">
            <div className="text-xs font-bold text-rose-500 uppercase tracking-wider">
              Pergunta {perguntaIdx + 1} / {historia.perguntas.length}
            </div>
            <p className="text-slate-600 text-sm mt-1">Toque na imagem certa</p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-2xl w-full">
            {shuffleOnce(historia.perguntas[perguntaIdx], perguntaIdx).map((nome) => (
              <button
                key={nome}
                onClick={() => responder(nome)}
                className="aspect-square rounded-3xl bg-white shadow-md border-4 border-rose-200 p-3 flex items-center justify-center hover:scale-105 transition-transform"
              >
                <img src={objetoImg(nome)} alt="" className="max-h-full max-w-full object-contain" />
              </button>
            ))}
          </div>
        </div>
      )}

      {fase === "fim" && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 gap-4 text-center">
          <Sparkles className="w-20 h-20 text-amber-500" />
          <h2 className="text-3xl font-black text-slate-800">Você leu tudinho!</h2>
          <p className="text-slate-600">
            Acertou {acertos} de {historia.perguntas.length} perguntas.
          </p>
          <button
            onClick={() => {
              parar();
              onSair();
            }}
            className="mt-4 px-6 py-3 rounded-full bg-rose-500 text-white font-bold shadow-lg"
          >
            Voltar para a biblioteca
          </button>
        </div>
      )}

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div
              className={`w-28 h-28 rounded-full flex items-center justify-center shadow-2xl ${
                feedback === "ok" ? "bg-emerald-500" : "bg-rose-500"
              }`}
            >
              {feedback === "ok" ? (
                <Check className="w-14 h-14 text-white" />
              ) : (
                <X className="w-14 h-14 text-white" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Embaralhamento determinístico por pergunta para estabilidade entre re-renders
function shuffleOnce(p: { correta: string; distratores: string[] }, seed: number): string[] {
  const arr = [p.correta, ...p.distratores];
  // Fisher-Yates pseudoaleatório com seed simples
  let s = seed + 1;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
