import { useState } from "react";
import { X, Check, RotateCcw, Plus, Trash2 } from "lucide-react";
import { VozGuia } from "./shared/VozGuia";

/**
 * Cronograma Visual (Visual Schedule) — TEACCH / suporte visual para TEA/TDAH.
 * Sequência de atividades do dia com pictogramas. A criança marca cada
 * atividade como concluída, reduzindo ansiedade por previsibilidade.
 */

type Bloco = { id: string; emoji: string; label: string; horario?: string; feito: boolean };

const BLOCOS_INICIAIS: Bloco[] = [
  { id: "1", emoji: "☀️", label: "Acordar", horario: "07:00", feito: false },
  { id: "2", emoji: "🍽️", label: "Café da manhã", horario: "07:30", feito: false },
  { id: "3", emoji: "🦷", label: "Escovar dente", horario: "08:00", feito: false },
  { id: "4", emoji: "📚", label: "Estudar", horario: "09:00", feito: false },
  { id: "5", emoji: "🎨", label: "Brincar", horario: "10:30", feito: false },
  { id: "6", emoji: "🍝", label: "Almoçar", horario: "12:00", feito: false },
  { id: "7", emoji: "😴", label: "Descansar", horario: "13:00", feito: false },
  { id: "8", emoji: "🛁", label: "Banho", horario: "18:00", feito: false },
  { id: "9", emoji: "🌙", label: "Dormir", horario: "20:30", feito: false },
];

const OPCOES = [
  "☀️ Acordar",
  "🍽️ Comer",
  "🦷 Escovar dente",
  "📚 Estudar",
  "🎨 Brincar",
  "🛁 Banho",
  "😴 Descansar",
  "🌙 Dormir",
  "🚗 Sair",
  "🎮 Jogar",
  "🚴 Passear",
  "💊 Remédio",
  "👨‍⚕️ Médico",
  "🏫 Escola",
];

export function CronogramaVisual({ onClose }: { onClose: () => void }) {
  const [blocos, setBlocos] = useState<Bloco[]>(BLOCOS_INICIAIS);
  const [editando, setEditando] = useState(false);

  const marcar = (id: string) =>
    setBlocos((b) => b.map((x) => (x.id === id ? { ...x, feito: !x.feito } : x)));

  const remover = (id: string) => setBlocos((b) => b.filter((x) => x.id !== id));

  const adicionar = (op: string) => {
    const [emoji, ...labelParts] = op.split(" ");
    setBlocos((b) => [
      ...b,
      { id: crypto.randomUUID(), emoji, label: labelParts.join(" "), feito: false },
    ]);
  };

  const resetar = () => setBlocos((b) => b.map((x) => ({ ...x, feito: false })));

  const concluidos = blocos.filter((b) => b.feito).length;
  const progresso = blocos.length ? Math.round((concluidos / blocos.length) * 100) : 0;

  return (
    <div className="relative min-h-[70vh] p-6 bg-gradient-to-b from-sky-50 via-white to-lilac/10 rounded-[2rem] overflow-hidden">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive transition-colors z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1">Meu Dia em Cartões</h2>
      <p className="text-sm text-slate-500 mb-3 font-medium max-w-md">
        Cada cartão é uma parte do seu dia. Toque em cada um quando terminar.
      </p>

      <VozGuia texto="Este é o seu dia em cartões. Cada figura mostra uma coisa que vai acontecer. Quando você terminar cada uma, toque no cartão pra colocar o certinho verde." />

      {/* Progresso */}
      <div className="my-3">
        <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
          <span>Progresso do dia</span>
          <span>{concluidos}/{blocos.length}</span>
        </div>
        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-emerald-500 transition-all"
            style={{ width: `${progresso}%` }}
          />
        </div>
      </div>

      {/* Blocos */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {blocos.map((b, i) => (
          <button
            key={b.id}
            onClick={() => marcar(b.id)}
            className={`relative p-3 rounded-2xl border-2 text-left transition-all ${
              b.feito
                ? "bg-emerald-50 border-emerald-400 opacity-70"
                : "bg-white border-slate-200 hover:border-primary hover:scale-[1.02]"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="text-3xl">{b.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold text-slate-400">{i + 1}º {b.horario || ""}</div>
                <div className={`text-sm font-black text-slate-700 truncate ${b.feito ? "line-through" : ""}`}>
                  {b.label}
                </div>
              </div>
              {b.feito && <Check size={20} className="text-emerald-600 shrink-0" />}
            </div>
            {editando && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  remover(b.id);
                }}
                className="absolute -top-2 -right-2 bg-destructive text-white rounded-full p-1"
                aria-label="Remover"
              >
                <Trash2 size={12} />
              </button>
            )}
          </button>
        ))}
      </div>

      {editando && (
        <div className="p-3 bg-white rounded-2xl border-2 border-dashed border-slate-200 mb-4">
          <div className="text-xs font-black text-slate-600 mb-2">Adicionar cartão</div>
          <div className="flex flex-wrap gap-1.5">
            {OPCOES.map((op) => (
              <button
                key={op}
                onClick={() => adicionar(op)}
                className="px-2 py-1 bg-slate-50 hover:bg-primary hover:text-white rounded-full text-xs font-bold border border-slate-200 transition-colors"
              >
                {op}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-2 justify-center flex-wrap">
        <button
          onClick={() => setEditando((e) => !e)}
          className="px-4 py-2 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold inline-flex items-center gap-1"
        >
          <Plus size={16} /> {editando ? "Concluir" : "Personalizar"}
        </button>
        <button
          onClick={resetar}
          className="px-4 py-2 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold inline-flex items-center gap-1"
        >
          <RotateCcw size={16} /> Novo dia
        </button>
      </div>

      <p className="mt-6 text-[10px] text-slate-400 text-center">
        Base clínica: Visual Schedules — TEACCH (Schopler & Mesibov) — previsibilidade reduz ansiedade em TEA.
      </p>
    </div>
  );
}
