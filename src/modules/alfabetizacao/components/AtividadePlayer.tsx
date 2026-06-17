import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EtapaCurricular } from "../data/etapas";
import { gerarPorTipo, Rodada } from "../engine/gerador";
import { useVoz } from "../hooks/useVoz";
import { objetoImg } from "@/data/neuro-treino/objetos";
import { Volume2, X, Check, Sparkles } from "lucide-react";

interface Props {
  etapa: EtapaCurricular;
  acertosAtuais: number;
  onAcerto: () => void;
  onSair: () => void;
}

export function AtividadePlayer({ etapa, acertosAtuais, onAcerto, onSair }: Props) {
  const { falar, parar } = useVoz();
  const [rodada, setRodada] = useState<Rodada>(() =>
    gerarPorTipo(etapa.atividades[Math.floor(Math.random() * etapa.atividades.length)]),
  );
  const [feedback, setFeedback] = useState<"acerto" | "erro" | null>(null);
  const [travado, setTravado] = useState(false);

  const progressoPct = useMemo(
    () => Math.min(100, Math.round((acertosAtuais / etapa.alvo) * 100)),
    [acertosAtuais, etapa.alvo],
  );

  // Toca instrução ao mudar de rodada
  useEffect(() => {
    falar(rodada.instrucaoFalada);
    return () => parar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rodada]);

  function proximaRodada() {
    const tipo = etapa.atividades[Math.floor(Math.random() * etapa.atividades.length)];
    setRodada(gerarPorTipo(tipo));
    setFeedback(null);
    setTravado(false);
  }

  function responder(resposta: string) {
    if (travado) return;
    setTravado(true);
    const ok = resposta === rodada.correta;
    setFeedback(ok ? "acerto" : "erro");
    if (ok) {
      falar("Muito bem!");
      onAcerto();
      setTimeout(proximaRodada, 1400);
    } else {
      falar("Quase! Tenta de novo.");
      setTimeout(() => {
        setFeedback(null);
        setTravado(false);
      }, 1200);
    }
  }

  const isSegmentacao = rodada.tipo === "segmentacao";

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
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <span>{etapa.emoji}</span>
            <span>{etapa.titulo}</span>
          </div>
          <div className="mt-1 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${etapa.cor} transition-all`}
              style={{ width: `${progressoPct}%` }}
            />
          </div>
        </div>
        <button
          onClick={() => falar(rodada.instrucaoFalada)}
          className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg hover:bg-indigo-600"
          aria-label="Ouvir de novo"
        >
          <Volume2 className="w-6 h-6" />
        </button>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-8">
        {/* Para rima/aliteração, a primeira imagem é o "alvo" da pergunta */}
        {(rodada.tipo === "rima" || rodada.tipo === "aliteracao") && (
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">
              Palavra de referência
            </span>
            <ImgChip nome={rodada.imagens[0]} tamanho="md" onClick={() => falar(rodada.imagens[0].toLowerCase())} />
          </div>
        )}

        {isSegmentacao ? (
          <>
            <ImgChip nome={rodada.imagens[0]} tamanho="lg" onClick={() => falar(rodada.imagens[0].toLowerCase())} />
            <div className="grid grid-cols-4 gap-3 w-full max-w-md">
              {rodada.numeroOpcoes!.map((n) => (
                <button
                  key={n}
                  onClick={() => responder(String(n))}
                  disabled={travado}
                  className="aspect-square rounded-2xl bg-white border-4 border-indigo-200 text-4xl font-black text-indigo-600 shadow-md hover:scale-105 transition-transform disabled:opacity-50"
                >
                  {n}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-3xl">
            {(rodada.tipo === "rima" || rodada.tipo === "aliteracao"
              ? rodada.imagens.slice(1)
              : rodada.imagens
            ).map((nome) => (
              <ImgChip
                key={nome}
                nome={nome}
                tamanho="lg"
                selecionavel
                onClick={() => responder(nome)}
                disabled={travado}
              />
            ))}
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
}: {
  nome: string;
  tamanho: "md" | "lg";
  onClick?: () => void;
  selecionavel?: boolean;
  disabled?: boolean;
}) {
  const src = objetoImg(nome);
  const size = tamanho === "lg" ? "h-32 sm:h-40" : "h-24 sm:h-28";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${size} aspect-square rounded-3xl bg-white shadow-md flex items-center justify-center p-3 ${
        selecionavel ? "border-4 border-indigo-200 hover:scale-105" : "border-2 border-slate-100"
      } transition-transform disabled:opacity-50`}
    >
      {src ? (
        <img src={src} alt="" className="max-h-full max-w-full object-contain" />
      ) : (
        <span className="text-5xl">❓</span>
      )}
    </button>
  );
}
