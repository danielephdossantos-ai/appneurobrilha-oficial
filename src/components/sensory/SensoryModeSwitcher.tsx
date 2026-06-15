import { SensoryMode, SensoryEngine } from "@/engines/regulation-engine/sensory-engine";
import { useAppState } from "@/core/store";
import { Card } from "../Layout";
import { Moon, Zap, Target, VolumeX, Gift, Check } from "lucide-react";

const MODES: { id: SensoryMode; icon: any; color: string; desc: string }[] = [
  {
    id: "calmante",
    icon: Moon,
    color: "bg-blue-100 text-blue-600",
    desc: "Cores suaves, ritmo lento e poucas distrações.",
  },
  {
    id: "foco",
    icon: Target,
    color: "bg-purple-100 text-purple-600",
    desc: "Equilíbrio ideal para concentração profunda.",
  },
  {
    id: "hiperfoco",
    icon: Zap,
    color: "bg-orange-100 text-orange-600",
    desc: "Estímulos intensos para quando o interesse é alto.",
  },
  {
    id: "baixa-estimulacao",
    icon: VolumeX,
    color: "bg-slate-100 text-slate-600",
    desc: "Mínimo de animações e sons. Ideal para sobrecarga.",
  },
  {
    id: "recompensa-intensa",
    icon: Gift,
    color: "bg-pink-100 text-pink-600",
    desc: "Comemorações extras e feedbacks entusiasmados.",
  },
];

export function SensoryModeSwitcher() {
  const { activeChild, updateChild } = useAppState();

  if (!activeChild) return null;

  const currentMode = activeChild.sensory_mode || "foco";

  const handleModeChange = (mode: SensoryMode) => {
    updateChild(activeChild.id, { sensory_mode: mode });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-extrabold text-lg">Sistema Sensorial</h3>
        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-black uppercase tracking-widest">
          Ativo
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {MODES.map((mode) => (
          <button
            key={mode.id}
            onClick={() => handleModeChange(mode.id)}
            className={`flex items-start gap-4 p-4 rounded-2xl border-2 transition-all text-left group ${
              currentMode === mode.id
                ? "border-primary bg-primary/5 shadow-soft"
                : "border-border bg-card hover:border-primary/40"
            }`}
          >
            <div
              className={`h-12 w-12 rounded-xl shrink-0 grid place-items-center ${mode.color} transition-transform group-hover:scale-110`}
            >
              <mode.icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-bold">{SensoryEngine.getModeLabel(mode.id)}</span>
                {currentMode === mode.id && <Check className="h-4 w-4 text-primary" />}
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{mode.desc}</p>
            </div>
          </button>
        ))}
      </div>

      <p className="text-[10px] text-muted-foreground italic px-2">
        * O sistema ajusta automaticamente velocidade, estímulos, cores e reforços com base no modo
        selecionado.
      </p>
    </div>
  );
}
