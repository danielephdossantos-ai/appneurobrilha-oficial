import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw, Check, BookOpen } from "lucide-react";

import imgFeliz from "@/assets/brilha-vida/emocoes/feliz.png";
import imgTriste from "@/assets/brilha-vida/emocoes/triste.png";
import imgConfuso from "@/assets/brilha-vida/emocoes/confuso.png";

/**
 * Histórias Sociais
 * Pequenas histórias do dia a dia em que a criança escolhe a melhor atitude.
 * Cada escolha mostra a consequência e ensina por que aquela é a melhor.
 */

type Opcao = { texto: string; certo: boolean; feedback: string };
type Historia = { titulo: string; cena: string; img: string; opcoes: Opcao[] };

const HISTORIAS: Historia[] = [
  {
    titulo: "O lápis emprestado",
    cena: "Lucas esqueceu o estojo e pede seu lápis emprestado. Você tem dois iguais.",
    img: imgConfuso,
    opcoes: [
      { texto: "Empresto e digo que devolva no fim da aula.", certo: true, feedback: "Ajudar amigos com gentileza fortalece a amizade. 💛" },
      { texto: "Digo que não emprestou e guardo na mochila.", certo: false, feedback: "Lucas ficaria triste. Quando podemos ajudar, vale a pena." },
      { texto: "Empresto, mas fico bravo sem dizer.", certo: false, feedback: "Se algo te incomoda, é melhor falar com calma." },
    ],
  },
  {
    titulo: "A nova colega",
    cena: "Chegou uma aluna nova e ninguém quer brincar com ela no recreio.",
    img: imgTriste,
    opcoes: [
      { texto: "Convido para brincar comigo e meus amigos.", certo: true, feedback: "Acolher quem está sozinho é um superpoder! ✨" },
      { texto: "Olho de longe e continuo brincando.", certo: false, feedback: "Imagine como ela está se sentindo. Um 'oi' já ajuda muito." },
      { texto: "Rio com os colegas porque ela está sozinha.", certo: false, feedback: "Isso magoa. Trate o outro como você gosta de ser tratado." },
    ],
  },
  {
    titulo: "O brinquedo quebrado",
    cena: "Sem querer, você quebrou o carrinho do seu primo.",
    img: imgConfuso,
    opcoes: [
      { texto: "Conto a verdade e peço desculpa.", certo: true, feedback: "Ser honesto e pedir desculpa mostra coragem de verdade." },
      { texto: "Escondo o carrinho atrás do sofá.", certo: false, feedback: "Esconder só piora. A verdade sempre aparece." },
      { texto: "Falo que foi o cachorro.", certo: false, feedback: "Mentir machuca a confiança de quem te ama." },
    ],
  },
  {
    titulo: "A vez do amigo",
    cena: "Você está jogando há muito tempo e seu irmão também quer jogar.",
    img: imgFeliz,
    opcoes: [
      { texto: "Termino essa fase e passo o controle.", certo: true, feedback: "Dividir o tempo é uma forma de cuidado. 🎮" },
      { texto: "Falo 'mais cinco minutinhos' e jogo o dia todo.", certo: false, feedback: "Combinar e cumprir é importante para a confiança." },
      { texto: "Grito que é meu e não solto.", certo: false, feedback: "Gritar afasta. Conversar aproxima." },
    ],
  },
];

export function HistoriasSociais({ onClose }: { onClose: () => void }) {
  const historias = useMemo(() => [...HISTORIAS].sort(() => Math.random() - 0.5), []);
  const [idx, setIdx] = useState(0);
  const [escolhaIdx, setEscolhaIdx] = useState<number | null>(null);

  const h = historias[idx];
  const escolha = escolhaIdx !== null ? h.opcoes[escolhaIdx] : null;

  const proxima = () => {
    if (idx + 1 >= historias.length) {
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
    setEscolhaIdx(null);
  };

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1 flex items-center gap-2">
        <BookOpen className="text-emerald-500" /> Histórias Sociais
      </h2>
      <p className="text-sm text-slate-600 font-medium mb-4 text-center max-w-md">
        Leia a cena e escolha a melhor atitude.
      </p>
      <div className="text-xs font-bold text-emerald-600 mb-4">
        História {idx + 1} de {historias.length}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="w-full max-w-xl"
        >
          <div className="bg-white rounded-3xl p-5 shadow-lg border-2 border-emerald-100 mb-4 flex gap-4 items-start">
            <img src={h.img} alt="" aria-hidden className="w-20 h-20 object-contain shrink-0" />
            <div>
              <h3 className="font-black text-slate-800 mb-1">{h.titulo}</h3>
              <p className="text-sm text-slate-700 font-medium">{h.cena}</p>
            </div>
          </div>

          <div className="space-y-2">
            {h.opcoes.map((o, i) => {
              const ativo = escolhaIdx === i;
              const desabilitado = escolhaIdx !== null && !ativo;
              return (
                <button
                  key={i}
                  onClick={() => escolhaIdx === null && setEscolhaIdx(i)}
                  disabled={escolhaIdx !== null}
                  className={`w-full text-left p-4 rounded-2xl border-2 font-bold text-sm transition-all ${
                    ativo
                      ? o.certo
                        ? "bg-emerald-50 border-emerald-400 text-emerald-800"
                        : "bg-amber-50 border-amber-400 text-amber-800"
                      : desabilitado
                      ? "bg-white border-slate-100 text-slate-400 opacity-60"
                      : "bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:scale-[1.01]"
                  }`}
                >
                  {o.texto}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {escolha && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-2xl border-2 text-center ${
                  escolha.certo
                    ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                    : "bg-amber-50 border-amber-300 text-amber-800"
                }`}
              >
                <div className="flex items-center justify-center gap-2 font-black mb-1">
                  {escolha.certo ? <><Check size={18} /> Excelente escolha!</> : <>Vamos pensar de novo…</>}
                </div>
                <p className="text-sm font-medium">{escolha.feedback}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      <div className="mt-auto pt-6 flex gap-3">
        {escolha && (
          <button
            onClick={proxima}
            className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            Próxima história →
          </button>
        )}
        <button
          onClick={onClose}
          className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 flex items-center gap-2"
        >
          <RotateCcw size={16} /> Sair
        </button>
      </div>
    </div>
  );
}
