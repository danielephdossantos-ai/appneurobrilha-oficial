import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw, Check, Sparkles } from "lucide-react";

import { url as imgFeliz } from "@/assets/brilha-vida/emocoes/feliz.png.asset.json";
import { url as imgTranquilo } from "@/assets/brilha-vida/emocoes/tranquilo.png.asset.json";
import { url as imgConfuso } from "@/assets/brilha-vida/emocoes/confuso.png.asset.json";
import { url as imgTriste } from "@/assets/brilha-vida/emocoes/triste.png.asset.json";
import { url as imgBravo } from "@/assets/brilha-vida/emocoes/bravo.png.asset.json";

/**
 * Emoji Mágico
 * Jogo de associação: a criança lê (ou ouve) uma cena curta e escolhe
 * o rostinho que combina com a emoção daquela situação.
 */

type EmocaoId = "feliz" | "tranquilo" | "confuso" | "triste" | "bravo";

const EMOCOES: Record<EmocaoId, { img: string; nome: string; cor: string }> = {
  feliz: { img: imgFeliz, nome: "Feliz", cor: "#ec4899" },
  tranquilo: { img: imgTranquilo, nome: "Tranquilo", cor: "#22c55e" },
  confuso: { img: imgConfuso, nome: "Confuso", cor: "#eab308" },
  triste: { img: imgTriste, nome: "Triste", cor: "#f97316" },
  bravo: { img: imgBravo, nome: "Bravo", cor: "#ef4444" },
};

const CENAS: { texto: string; resposta: EmocaoId; explica: string }[] = [
  {
    texto: "Você ganhou de presente o brinquedo que mais queria!",
    resposta: "feliz",
    explica: "Ganhar algo especial deixa o coração quentinho de alegria.",
  },
  {
    texto: "Seu amigo pegou seu lápis sem pedir e quebrou.",
    resposta: "bravo",
    explica: "É normal ficar bravo. Conte para ele como se sentiu, sem gritar.",
  },
  {
    texto: "Sua avó está viajando e você está com muita saudade.",
    resposta: "triste",
    explica: "Saudade dói. Vale desenhar a vovó ou ligar pra ela.",
  },
  {
    texto: "A professora mudou a regra do jogo e você não entendeu.",
    resposta: "confuso",
    explica: "Tudo bem não entender. Levante a mão e peça pra explicar de novo.",
  },
  {
    texto: "Você terminou a tarefa e está descansando no sofá ouvindo música.",
    resposta: "tranquilo",
    explica: "Que delícia de momento! Aproveite a calma.",
  },
  {
    texto: "Você foi escolhido para apresentar primeiro na frente da turma.",
    resposta: "confuso",
    explica: "Frio na barriga é normal. Respire fundo, você consegue.",
  },
  {
    texto: "Seu cachorrinho veio te dar um beijo molhado de manhã.",
    resposta: "feliz",
    explica: "Bichinhos enchem nosso coração de amor!",
  },
];

export function EmojiMagico({ onClose }: { onClose: () => void }) {
  const cenas = useMemo(() => [...CENAS].sort(() => Math.random() - 0.5).slice(0, 5), []);
  const [idx, setIdx] = useState(0);
  const [escolha, setEscolha] = useState<EmocaoId | null>(null);
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false);

  const cena = cenas[idx];
  const acertou = escolha === cena?.resposta;

  const proxima = () => {
    if (idx + 1 >= cenas.length) {
      setFim(true);
      return;
    }
    setIdx(idx + 1);
    setEscolha(null);
  };

  const reiniciar = () => {
    setIdx(0);
    setEscolha(null);
    setAcertos(0);
    setFim(false);
  };

  if (fim) {
    return (
      <div className="relative min-h-[70vh] flex flex-col items-center justify-center p-6 rounded-[2rem] bg-gradient-to-b from-amber-50 to-pink-50">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
        >
          <X size={22} />
        </button>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
          className="text-7xl mb-4"
        >
          🎉
        </motion.div>
        <h3 className="text-2xl font-black text-slate-800 mb-2">Jogo finalizado!</h3>
        <p className="text-slate-600 font-bold mb-6">
          Você acertou {acertos} de {cenas.length} emoções!
        </p>
        <div className="flex gap-3">
          <button
            onClick={reiniciar}
            className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50"
          >
            <RotateCcw size={16} /> Jogar de novo
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            Pronto
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1 flex items-center gap-2">
        <Sparkles className="text-amber-400" /> Emoji Mágico
      </h2>
      <p className="text-sm text-slate-600 font-medium mb-2 text-center max-w-md">
        Que emoção combina com essa cena?
      </p>
      <div className="text-xs font-bold text-primary mb-4">
        Cena {idx + 1} de {cenas.length}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-white rounded-3xl p-6 shadow-lg border-2 border-slate-100 max-w-md w-full mb-4 text-center"
        >
          <p className="text-base font-black text-slate-800 leading-snug">{cena.texto}</p>
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-5 gap-2 w-full max-w-2xl">
        {(Object.keys(EMOCOES) as EmocaoId[]).map((id) => {
          const e = EMOCOES[id];
          const ativo = escolha === id;
          const correto = escolha && id === cena.resposta;
          const erradoSelecionado = ativo && !acertou;
          return (
            <button
              key={id}
              onClick={() => {
                if (escolha) return;
                setEscolha(id);
                if (id === cena.resposta) setAcertos((a) => a + 1);
              }}
              disabled={!!escolha}
              className={`flex flex-col items-center gap-1 p-3 rounded-2xl bg-white border-2 transition-all ${
                correto
                  ? "border-emerald-400 bg-emerald-50 scale-105"
                  : erradoSelecionado
                  ? "border-red-400 bg-red-50"
                  : "border-slate-100 hover:border-slate-300 hover:scale-105"
              } ${escolha && !correto && !erradoSelecionado ? "opacity-40" : ""}`}
            >
              <img src={e.img} alt={e.nome} className="w-14 h-14 object-contain" />
              <span className="text-xs font-black text-slate-700">{e.nome}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {escolha && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-4 rounded-2xl border-2 max-w-md text-center ${
              acertou
                ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                : "bg-amber-50 border-amber-300 text-amber-800"
            }`}
          >
            <div className="flex items-center justify-center gap-2 font-black mb-1">
              {acertou ? <><Check size={18} /> Acertou!</> : <>Quase! O combinado era {EMOCOES[cena.resposta].nome.toLowerCase()}.</>}
            </div>
            <p className="text-sm font-medium">{cena.explica}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-6 flex gap-3">
        {escolha && (
          <button
            onClick={proxima}
            className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            {idx + 1 >= cenas.length ? "Ver resultado" : "Próxima cena →"}
          </button>
        )}
      </div>
    </div>
  );
}
