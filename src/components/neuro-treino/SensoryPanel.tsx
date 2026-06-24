import { useState } from "react";
import { Moon, Film, VolumeX, Palette, Hand, RotateCcw, ChevronDown } from "lucide-react";
import { useSensoryProfile, type SensoryProfile } from "@/hooks/useSensoryProfile";

const TOGGLES: {
  key: keyof SensoryProfile;
  label: string;
  desc: string;
  Icon: typeof Moon;
}[] = [
  { key: "reduceMotion", label: "Reduzir animações", desc: "Sem pulsar, tremer ou crescer", Icon: Film },
  { key: "reduceSound", label: "Reduzir sons", desc: "Muta efeitos sonoros", Icon: VolumeX },
  { key: "softColors", label: "Cores suaves", desc: "Sem vermelho/coral forte", Icon: Palette },
  { key: "largerTargets", label: "Alvos maiores", desc: "Botões 20% maiores", Icon: Hand },
];

export function SensoryPanel() {
  const { profile, toggle, update, reset } = useSensoryProfile();
  const [open, setOpen] = useState(false);

  const activeCount =
    (profile.lowStim ? 4 : 0) +
    (!profile.lowStim
      ? TOGGLES.reduce((acc, t) => acc + (profile[t.key] ? 1 : 0), 0)
      : 0);

  return (
    <div className="mb-5 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900 bg-indigo-50/60 dark:bg-indigo-950/30 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left"
      >
        <div className="h-9 w-9 rounded-xl bg-indigo-500/15 flex items-center justify-center shrink-0">
          <Moon className="h-4 w-4 text-indigo-600 dark:text-indigo-300" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm text-indigo-900 dark:text-indigo-100">
            Modo Sensorial
          </div>
          <div className="text-xs text-indigo-700/80 dark:text-indigo-300/80">
            {profile.lowStim
              ? "Baixa estimulação ativa"
              : activeCount > 0
              ? `${activeCount} ajuste${activeCount > 1 ? "s" : ""} ativo${activeCount > 1 ? "s" : ""}`
              : "Toque para personalizar"}
          </div>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-indigo-600 dark:text-indigo-300 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-indigo-200/60 dark:border-indigo-900/60 pt-3">
          {/* Master switch */}
          <label className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-800 cursor-pointer">
            <div className="h-10 w-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <Moon className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm">Baixa estimulação</div>
              <div className="text-xs text-muted-foreground">
                Liga todos os ajustes de uma vez
              </div>
            </div>
            <Switch checked={profile.lowStim} onChange={() => toggle("lowStim")} />
          </label>

          {/* Individual toggles (desabilitados quando lowStim está on) */}
          <div className={`space-y-2 ${profile.lowStim ? "opacity-50 pointer-events-none" : ""}`}>
            {TOGGLES.map(({ key, label, desc, Icon }) => (
              <label
                key={key}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 cursor-pointer"
              >
                <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
                  <Icon className="h-4 w-4 text-foreground/70" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm">{label}</div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </div>
                <Switch
                  checked={profile.lowStim || profile[key]}
                  onChange={() => toggle(key)}
                />
              </label>
            ))}
          </div>

          <button
            type="button"
            onClick={reset}
            className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground py-2"
          >
            <RotateCcw className="h-3 w-3" /> Voltar ao padrão
          </button>
        </div>
      )}
    </div>
  );
}

function Switch({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={(e) => {
        e.preventDefault();
        onChange();
      }}
      className={`relative w-11 h-6 rounded-full transition-colors ${
        checked ? "bg-indigo-500" : "bg-muted"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
}
