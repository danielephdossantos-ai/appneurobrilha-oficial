import { useState } from "react";
import { X, Check, ArrowRight, RotateCcw } from "lucide-react";
import { VozGuia } from "./shared/VozGuia";

/**
 * First–Then Board (Primeiro / Depois) — princípio de Premack (ABA)
 * Ferramenta visual para reduzir recusa e apoiar transições em TEA/TDAH:
 * "Primeiro (tarefa menos preferida) → Depois (reforçador preferido)".
 */

type Opcao = { emoji: string; label: string };

const PRIMEIRO: Opcao[] = [
  { emoji: "📚", label: "Estudar" },
  { emoji: "🦷", label: "Escovar dente" },
  { emoji: "🛁", label: "Tomar banho" },
  { emoji: "🍽️", label: "Almoçar" },
  { emoji: "👕", label: "Vestir roupa" },
  { emoji: "🧹", label: "Guardar brinquedo" },
  { emoji: "✏️", label: "Fazer lição" },
  { emoji: "💊", label: "Tomar remédio" },
];

const DEPOIS: Opcao[] = [
  { emoji: "🎮", label: "Videogame" },
  { emoji: "📺", label: "Desenho" },
  { emoji: "🍦", label: "Sorvete" },
  { emoji: "🧸", label: "Brincar" },
  { emoji: "🚴", label: "Passear" },
  { emoji: "🎨", label: "Pintar" },
  { emoji: "🍪", label: "Biscoito" },
  { emoji: "🤗", label: "Abraço" },
];

export function FirstThenBoard({ onClose }: { onClose: () => void }) {
  const [primeiro, setPrimeiro] = useState<Opcao | null>(null);
  const [depois, setDepois] = useState<Opcao | null>(null);
  const [primeiroFeito, setPrimeiroFeito] = useState(false);
  const [celebrar, setCelebrar] = useState(false);

  const reset = () => {
    setPrimeiro(null);
    setDepois(null);
    setPrimeiroFeito(false);
    setCelebrar(false);
  };

  const montado = primeiro && depois;

  return (
    <div className="relative min-h-[70vh] p-6 bg-gradient-to-b from-amber-50 via-white to-sky-50 rounded-[2rem] overflow-hidden">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive transition-colors z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1">Primeiro… Depois</h2>
      <p className="text-sm text-slate-500 mb-3 font-medium max-w-md">
        Combine agora o que vem primeiro e o que vem depois. Isso ajuda a saber o que esperar.
      </p>

      <VozGuia texto="Escolha primeiro a tarefa que precisa fazer. Depois escolha a recompensa que vem em seguida. Quando terminar a tarefa, toque no botão pra ganhar sua recompensa." />

      {/* Cartões grandes lado a lado */}
      <div className="grid grid-cols-2 gap-3 my-5">
        <Cartao titulo="Primeiro" cor="bg-amber-200" borda="border-amber-500" opcao={primeiro} feito={primeiroFeito} />
        <Cartao titulo="Depois" cor="bg-emerald-200" borda="border-emerald-500" opcao={depois} feito={celebrar} />
      </div>

      {montado && !primeiroFeito && (
        <div className="text-center mb-4">
          <button
            onClick={() => setPrimeiroFeito(true)}
            className="px-6 py-3 bg-amber-500 text-white rounded-2xl font-black shadow-glow hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            <Check size={20} /> Terminei o Primeiro
          </button>
        </div>
      )}

      {primeiroFeito && !celebrar && (
        <div className="text-center mb-4">
          <button
            onClick={() => setCelebrar(true)}
            className="px-6 py-3 bg-emerald-500 text-white rounded-2xl font-black shadow-glow hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            <ArrowRight size={20} /> Ganhar Depois
          </button>
        </div>
      )}

      {celebrar && (
        <div className="text-center mb-4 animate-fade-in">
          <div className="text-5xl mb-2">🎉</div>
          <p className="font-black text-emerald-600">Parabéns! Você cumpriu o combinado.</p>
          <button
            onClick={reset}
            className="mt-3 px-5 py-2 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold inline-flex items-center gap-2"
          >
            <RotateCcw size={16} /> Novo combinado
          </button>
        </div>
      )}

      {/* Seletores */}
      {!primeiroFeito && (
        <div className="space-y-4">
          <Seletor
            titulo="Escolha o Primeiro"
            cor="amber"
            opcoes={PRIMEIRO}
            selecionada={primeiro}
            onSelect={setPrimeiro}
          />
          <Seletor
            titulo="Escolha o Depois"
            cor="emerald"
            opcoes={DEPOIS}
            selecionada={depois}
            onSelect={setDepois}
          />
        </div>
      )}

      <p className="mt-6 text-[10px] text-slate-400 text-center">
        Base clínica: Princípio de Premack (Premack, 1959) — ABA / suportes visuais TEACCH.
      </p>
    </div>
  );
}

function Cartao({
  titulo,
  cor,
  borda,
  opcao,
  feito,
}: {
  titulo: string;
  cor: string;
  borda: string;
  opcao: Opcao | null;
  feito: boolean;
}) {
  return (
    <div className={`rounded-3xl border-4 ${borda} ${cor} p-4 min-h-[140px] flex flex-col items-center justify-center relative shadow-md`}>
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 py-0.5 rounded-full text-xs font-black text-slate-700 border-2 border-slate-200">
        {titulo}
      </div>
      {opcao ? (
        <>
          <div className={`text-6xl mb-1 ${feito ? "opacity-30" : ""}`}>{opcao.emoji}</div>
          <div className={`text-sm font-black text-slate-700 ${feito ? "line-through opacity-40" : ""}`}>
            {opcao.label}
          </div>
          {feito && <div className="absolute inset-0 flex items-center justify-center text-6xl">✅</div>}
        </>
      ) : (
        <div className="text-4xl opacity-40">?</div>
      )}
    </div>
  );
}

function Seletor({
  titulo,
  cor,
  opcoes,
  selecionada,
  onSelect,
}: {
  titulo: string;
  cor: "amber" | "emerald";
  opcoes: Opcao[];
  selecionada: Opcao | null;
  onSelect: (o: Opcao) => void;
}) {
  const ring = cor === "amber" ? "ring-amber-500" : "ring-emerald-500";
  return (
    <div>
      <div className="text-xs font-black text-slate-600 mb-1">{titulo}</div>
      <div className="grid grid-cols-4 gap-2">
        {opcoes.map((o) => {
          const ativa = selecionada?.label === o.label;
          return (
            <button
              key={o.label}
              onClick={() => onSelect(o)}
              className={`p-2 bg-white rounded-2xl border-2 border-slate-100 hover:scale-105 transition-transform flex flex-col items-center ${
                ativa ? `ring-4 ${ring} scale-105` : ""
              }`}
            >
              <div className="text-3xl">{o.emoji}</div>
              <div className="text-[10px] font-bold text-slate-600 leading-tight">{o.label}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
