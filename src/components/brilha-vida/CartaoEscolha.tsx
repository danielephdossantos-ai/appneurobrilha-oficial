import { useState } from "react";
import { X, RotateCcw } from "lucide-react";
import { VozGuia } from "./shared/VozGuia";

/**
 * Cartão de Escolha (Choice Board) — ABA / DTT.
 * Oferece 2–3 opções controladas para reduzir recusa e aumentar autonomia.
 * Especialmente eficaz em TEA e TOD: a criança sente controle sem sair da rotina.
 */

type Cenario = {
  id: string;
  pergunta: string;
  opcoes: { emoji: string; label: string }[];
};

const CENARIOS: Cenario[] = [
  {
    id: "roupa",
    pergunta: "Qual roupa você quer vestir hoje?",
    opcoes: [
      { emoji: "👕", label: "Camiseta" },
      { emoji: "🧥", label: "Blusa" },
    ],
  },
  {
    id: "fruta",
    pergunta: "Qual fruta você quer no lanche?",
    opcoes: [
      { emoji: "🍎", label: "Maçã" },
      { emoji: "🍌", label: "Banana" },
      { emoji: "🍇", label: "Uva" },
    ],
  },
  {
    id: "brincar",
    pergunta: "Do que você quer brincar agora?",
    opcoes: [
      { emoji: "🧩", label: "Quebra-cabeça" },
      { emoji: "🎨", label: "Pintar" },
      { emoji: "🧸", label: "Bichinhos" },
    ],
  },
  {
    id: "livro",
    pergunta: "Qual história antes de dormir?",
    opcoes: [
      { emoji: "🦁", label: "Do leão" },
      { emoji: "🐰", label: "Do coelho" },
    ],
  },
  {
    id: "calma",
    pergunta: "Como quer se acalmar?",
    opcoes: [
      { emoji: "🫁", label: "Respirar" },
      { emoji: "🎵", label: "Música" },
      { emoji: "🤗", label: "Abraço" },
    ],
  },
  {
    id: "banho",
    pergunta: "Antes do banho ou depois?",
    opcoes: [
      { emoji: "🛁", label: "Antes" },
      { emoji: "🕐", label: "Depois" },
    ],
  },
];

export function CartaoEscolha({ onClose }: { onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const [escolhida, setEscolhida] = useState<string | null>(null);

  const cenario = CENARIOS[idx];

  const proximo = () => {
    setIdx((i) => (i + 1) % CENARIOS.length);
    setEscolhida(null);
  };

  const reset = () => {
    setIdx(0);
    setEscolhida(null);
  };

  return (
    <div className="relative min-h-[70vh] p-6 bg-gradient-to-b from-teal-50 via-white to-sky-50 rounded-[2rem] overflow-hidden">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive transition-colors z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1">Você Escolhe</h2>
      <p className="text-sm text-slate-500 mb-3 font-medium max-w-md">
        Aqui não tem resposta errada. Toque na opção que você prefere.
      </p>

      <VozGuia texto={cenario.pergunta} />

      <div className="bg-white rounded-3xl border-4 border-teal-300 p-5 my-4 shadow-lg">
        <p className="text-lg font-black text-slate-800 text-center mb-4">{cenario.pergunta}</p>

        <div
          className={`grid gap-3 ${
            cenario.opcoes.length === 2 ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          {cenario.opcoes.map((o) => {
            const ativa = escolhida === o.label;
            const alguemEscolhida = escolhida !== null;
            return (
              <button
                key={o.label}
                onClick={() => setEscolhida(o.label)}
                disabled={alguemEscolhida && !ativa}
                className={`p-4 rounded-2xl border-4 flex flex-col items-center gap-1 transition-all ${
                  ativa
                    ? "border-teal-500 bg-teal-50 scale-105 shadow-glow"
                    : alguemEscolhida
                    ? "border-slate-200 bg-slate-50 opacity-40"
                    : "border-slate-200 bg-white hover:border-teal-400 hover:scale-105"
                }`}
              >
                <div className="text-5xl">{o.emoji}</div>
                <div className="text-sm font-black text-slate-700">{o.label}</div>
                {ativa && <div className="text-lg">✅</div>}
              </button>
            );
          })}
        </div>
      </div>

      {escolhida && (
        <div className="text-center mb-3 animate-fade-in">
          <p className="font-black text-teal-600">Ótima escolha! Você decidiu: {escolhida}.</p>
        </div>
      )}

      <div className="flex gap-2 justify-center">
        <button
          onClick={proximo}
          className="px-5 py-3 bg-primary text-white rounded-2xl font-black shadow-glow hover:scale-105 transition-transform"
        >
          Próxima escolha →
        </button>
        <button
          onClick={reset}
          className="px-4 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold inline-flex items-center gap-2"
        >
          <RotateCcw size={16} /> Recomeçar
        </button>
      </div>

      <p className="mt-6 text-[10px] text-slate-400 text-center">
        Base clínica: Choice Boards (ABA / DTT) — oferecer escolhas controladas reduz recusa e amplia autonomia.
      </p>
    </div>
  );
}
