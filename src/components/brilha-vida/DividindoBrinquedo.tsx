import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw, Check, Heart } from "lucide-react";

import imgFeliz from "@/assets/brilha-vida/emocoes/feliz.png";
import imgTriste from "@/assets/brilha-vida/emocoes/triste.png";

/**
 * Dividindo o Brinquedo
 * Tela única: dois personagens e uma "caixa" com brinquedos.
 * A criança escolhe COMO dividir; respostas certas aumentam o "Medidor da Amizade".
 */

type Item = { emoji: string; nome: string };
const ITENS: Item[] = [
  { emoji: "🧸", nome: "Ursinho" },
  { emoji: "🚗", nome: "Carrinho" },
  { emoji: "🪀", nome: "Ioiô" },
  { emoji: "🎨", nome: "Tintas" },
  { emoji: "⚽", nome: "Bola" },
  { emoji: "🧩", nome: "Quebra-cabeça" },
];

type Acao = { texto: string; pts: number; feedback: string };
const ACOES: Acao[] = [
  { texto: "Dou um para o amigo e fico com outro.", pts: 2, feedback: "Dividir é cuidar do outro. 💛" },
  { texto: "Brincamos juntos com os dois.", pts: 3, feedback: "Brincar junto é ainda mais divertido!" },
  { texto: "Combinamos um tempo pra cada um.", pts: 2, feedback: "Combinar regras evita briga." },
  { texto: "Fico com todos. Depois ele brinca.", pts: 0, feedback: "Esperar muito deixa o amigo triste. Vamos tentar de novo." },
  { texto: "Escondo pra ele não pegar.", pts: -1, feedback: "Esconder machuca a amizade. Que tal compartilhar?" },
];

export function DividindoBrinquedo({ onClose }: { onClose: () => void }) {
  const [rodada, setRodada] = useState(0);
  const [medidor, setMedidor] = useState(50); // 0-100
  const [escolha, setEscolha] = useState<number | null>(null);

  const item = ITENS[rodada % ITENS.length];
  const acaoEscolhida = escolha !== null ? ACOES[escolha] : null;
  const venceu = medidor >= 90;
  const perdeu = medidor <= 10;
  const fim = venceu || perdeu;

  const escolher = (i: number) => {
    if (escolha !== null || fim) return;
    setEscolha(i);
    setMedidor((m) => Math.max(0, Math.min(100, m + ACOES[i].pts * 10)));
  };

  const proxima = () => {
    setEscolha(null);
    setRodada((r) => r + 1);
  };

  const reiniciar = () => {
    setRodada(0);
    setMedidor(50);
    setEscolha(null);
  };

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1 flex items-center gap-2">
        <Heart className="text-pink-500 fill-pink-500" /> Dividindo o Brinquedo
      </h2>
      <p className="text-sm text-slate-600 font-medium mb-4 text-center max-w-md">
        Encha o medidor da amizade escolhendo boas atitudes.
      </p>

      {/* Medidor */}
      <div className="w-full max-w-md mb-6">
        <div className="flex justify-between text-xs font-black text-slate-500 mb-1">
          <span>😞</span>
          <span>Medidor da Amizade</span>
          <span>💖</span>
        </div>
        <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            animate={{
              width: `${medidor}%`,
              background:
                medidor >= 70 ? "#ec4899" : medidor >= 40 ? "#fbbf24" : "#f87171",
            }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>

      {!fim ? (
        <>
          <div className="bg-white rounded-3xl p-5 shadow-lg border-2 border-pink-100 mb-4 flex items-center gap-4 w-full max-w-md">
            <img src={imgFeliz} alt="você" className="w-16 h-16 object-contain" />
            <div className="flex-1 text-center">
              <div className="text-5xl mb-1" aria-hidden>{item.emoji}</div>
              <div className="text-xs font-black text-slate-500">Vocês querem brincar com:</div>
              <div className="font-black text-slate-800">{item.nome}</div>
            </div>
            <img src={imgTriste} alt="amigo" className="w-16 h-16 object-contain" />
          </div>

          <div className="w-full max-w-md space-y-2">
            {ACOES.map((a, i) => {
              const ativo = escolha === i;
              const desab = escolha !== null && !ativo;
              return (
                <button
                  key={i}
                  onClick={() => escolher(i)}
                  disabled={escolha !== null}
                  className={`w-full text-left p-3 rounded-2xl border-2 font-bold text-sm transition-all ${
                    ativo
                      ? a.pts > 0
                        ? "bg-emerald-50 border-emerald-400 text-emerald-800"
                        : "bg-amber-50 border-amber-400 text-amber-800"
                      : desab
                      ? "bg-white border-slate-100 text-slate-400 opacity-60"
                      : "bg-white border-slate-200 text-slate-700 hover:border-pink-300"
                  }`}
                >
                  {a.texto}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {acaoEscolhida && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 rounded-2xl text-sm font-bold text-center max-w-md ${
                  acaoEscolhida.pts > 0
                    ? "bg-emerald-50 text-emerald-800"
                    : "bg-amber-50 text-amber-800"
                }`}
              >
                {acaoEscolhida.feedback}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`bg-white rounded-3xl p-6 shadow-xl border-4 max-w-md text-center ${
            venceu ? "border-pink-400" : "border-amber-400"
          }`}
        >
          <div className="text-6xl mb-2">{venceu ? "💖" : "💔"}</div>
          <h3 className="font-black text-xl text-slate-800 mb-2">
            {venceu ? "Vocês são grandes amigos!" : "Vamos tentar de novo"}
          </h3>
          <p className="text-sm text-slate-600 font-medium">
            {venceu
              ? "Dividir e brincar juntos fortalece a amizade de verdade."
              : "Algumas atitudes machucam quem amamos. Toda hora dá pra começar de novo."}
          </p>
        </motion.div>
      )}

      <div className="mt-auto pt-6 flex gap-3">
        {!fim && escolha !== null && (
          <button
            onClick={proxima}
            className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            Próxima cena →
          </button>
        )}
        {fim && (
          <button
            onClick={reiniciar}
            className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50"
          >
            <RotateCcw size={16} /> Jogar de novo
          </button>
        )}
        <button
          onClick={onClose}
          className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 flex items-center gap-2"
        >
          <Check size={16} /> Pronto
        </button>
      </div>
    </div>
  );
}
