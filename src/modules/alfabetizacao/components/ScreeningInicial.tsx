import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Sparkles, X } from "lucide-react";
import { objetoImg } from "@/data/neuro-treino/objetos";
import { useVoz } from "../hooks/useVoz";
import {
  gerarScreening,
  calcularPosicaoInicial,
  type ItemScreening,
} from "../engine/screening";

interface Props {
  childId: string;
  onFinish: (progressoInicial: Record<string, number>) => void;
  onSkip: () => void;
}

// Fase E — Screening inicial (10 itens de baseline).
// Reusa geradores existentes, mas com UI enxuta e sem feedback pedagógico
// intermediário (é medição, não prática).
export function ScreeningInicial({ childId: _childId, onFinish, onSkip }: Props) {
  const [itens] = useState<ItemScreening[]>(() => gerarScreening());
  const [respostas, setRespostas] = useState<boolean[]>([]);
  const [i, setI] = useState(0);
  const [travado, setTravado] = useState(false);
  const [terminado, setTerminado] = useState<ReturnType<typeof calcularPosicaoInicial> | null>(null);
  const { falar, parar } = useVoz();

  const atual = itens[i];
  const isNumero = atual?.rodada.tipo === "segmentacao" || atual?.rodada.tipo === "contagem-fonemas";
  const opcoes = useMemo(() => atual?.rodada.imagens ?? [], [atual]);
  const numeroOpcoes = atual?.rodada.numeroOpcoes ?? [];
  const referencia = useMemo(() => {
    // Para tipos que pedem "combina com X", a 1ª imagem é a referência.
    if (["rima", "aliteracao", "som-final", "substituicao-fonema"].includes(atual?.rodada.tipo ?? "")) {
      return opcoes[0];
    }
    return null;
  }, [atual, opcoes]);
  const gradeOpcoes = referencia ? opcoes.slice(1) : opcoes;
  const textoPergunta = atual?.rodada.instrucaoVisual ?? atual?.rodada.instrucaoFalada ?? "";

  useEffect(() => {
    if (!atual) return;
    const t = setTimeout(() => falar(atual.rodada.instrucaoFalada), 300);
    return () => {
      clearTimeout(t);
      parar();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  function responder(escolha: string) {
    if (travado || !atual) return;
    setTravado(true);
    const acertou = escolha === atual.rodada.correta;
    const novas = [...respostas, acertou];
    setRespostas(novas);
    setTimeout(() => {
      if (i + 1 >= itens.length) {
        const r = calcularPosicaoInicial(itens, novas);
        setTerminado(r);
      } else {
        setI(i + 1);
        setTravado(false);
      }
    }, 700);
  }

  if (terminado) {
    const dominados = terminado.resumo.filter((r) => r.dominado);
    return (
      <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#3A1F5C] to-[#1F1233] flex items-center justify-center p-6">
        <div className="max-w-lg w-full rounded-3xl bg-white/10 backdrop-blur border border-white/20 p-8 text-white text-center">
          <Sparkles className="w-14 h-14 mx-auto text-amber-300" />
          <h2 className="text-3xl font-black mt-3">Prontinho! 🎉</h2>
          <p className="text-white/80 mt-2">
            Fizemos um teste rapidinho pra saber por onde começar sua aventura.
          </p>
          <div className="mt-5 space-y-2 text-left">
            {terminado.resumo.map((r) => (
              <div
                key={r.bloco}
                className={`rounded-xl px-4 py-2 flex items-center justify-between ${
                  r.dominado
                    ? "bg-emerald-500/20 border border-emerald-400/40"
                    : r.acertos > 0
                    ? "bg-amber-500/20 border border-amber-400/40"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                <span className="font-bold capitalize">{r.bloco}</span>
                <span className="text-sm">
                  {r.acertos}/{r.total} {r.dominado ? "✅" : r.acertos > 0 ? "🟡" : "•"}
                </span>
              </div>
            ))}
          </div>
          {dominados.length > 0 && (
            <p className="text-sm text-emerald-200 mt-4">
              Você já é craque em {dominados.map((d) => d.bloco).join(", ")}! Vamos direto ao próximo.
            </p>
          )}
          <button
            onClick={() => onFinish(terminado.progressoInicial)}
            className="mt-6 w-full py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black text-lg shadow-lg hover:scale-[1.02] transition"
          >
            Começar minha trilha
          </button>
        </div>
      </div>
    );
  }

  if (!atual) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#3A1F5C] to-[#1F1233] flex flex-col p-4">
      {/* Header */}
      <div className="flex items-center justify-between max-w-3xl mx-auto w-full">
        <button
          onClick={onSkip}
          className="px-3 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold flex items-center gap-1 hover:bg-white/20"
        >
          <X className="w-3 h-3" /> Pular teste
        </button>
        <div className="text-white/80 text-sm font-bold">
          Item {i + 1} / {itens.length}
        </div>
        <button
          onClick={() => falar(atual.rodada.instrucaoFalada)}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center"
          aria-label="Ouvir de novo"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>

      {/* Barra progresso */}
      <div className="max-w-3xl mx-auto w-full mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-300 to-orange-500 transition-all"
          style={{ width: `${((i + 1) / itens.length) * 100}%` }}
        />
      </div>

      {/* Instrução */}
      <div className="max-w-3xl mx-auto w-full mt-6 text-center">
        <p className="text-white/90 font-bold text-lg leading-snug">
          {textoPergunta}
        </p>
      </div>

      {/* Referência (rima/aliteração etc) */}
      {referencia && (
        <div className="max-w-3xl mx-auto mt-4 flex justify-center">
          <div className="w-28 h-28 rounded-2xl bg-white/10 border border-white/30 p-2 flex items-center justify-center">
            <img
              src={objetoImg(referencia)}
              alt={referencia}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Grid de opções */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className={`grid gap-3 w-full max-w-2xl px-2 ${
              isNumero ? "grid-cols-4" : gradeOpcoes.length <= 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"
            }`}
          >
            {isNumero
              ? numeroOpcoes.map((n) => (
                  <button
                    key={n}
                    disabled={travado}
                    onClick={() => responder(String(n))}
                    className="aspect-square rounded-3xl bg-white/15 border-2 border-white/30 text-white text-6xl font-black hover:scale-[1.03] active:scale-95 transition disabled:opacity-50"
                  >
                    {n}
                  </button>
                ))
              : gradeOpcoes.map((op) => (
                  <button
                    key={op}
                    disabled={travado}
                    onClick={() => responder(op)}
                    className="aspect-square rounded-3xl bg-white/15 border-2 border-white/30 p-3 hover:scale-[1.03] active:scale-95 transition disabled:opacity-50"
                  >
                    <img
                      src={objetoImg(op)}
                      alt={op}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="text-center text-white/50 text-xs pb-4">
        Este é um teste rápido — sem pressa e sem pontuação. Serve pra colocar você no ponto certo da trilha.
      </p>
    </div>
  );
}
