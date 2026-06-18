import { cn } from "@/utils/utils";
import type { Likert } from "../v2/types";

// Simplificado: 3 opções claras (sem confundir o pai com escala de 5).
// Mapeadas pro tipo Likert (0..4) pra não quebrar o cálculo dos scores.
const OPCOES: { label: string; value: Likert }[] = [
  { label: "Não", value: 0 },
  { label: "Às vezes", value: 2 },
  { label: "Sim", value: 4 },
];

interface Props {
  label: string;
  value: Likert | undefined;
  onChange: (v: Likert) => void;
  hint?: string;
}

export function LikertScale({ label, value, onChange, hint }: Props) {
  return (
    <div className="space-y-2 py-3 border-b border-border last:border-b-0">
      <div>
        <p className="font-medium text-sm md:text-base">{label}</p>
        {hint && <p className="text-xs text-muted-foreground mt-0.5">{hint}</p>}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {OPCOES.map(({ label: lbl, value: v }) => {
          // "Às vezes" também ativa se valor antigo for 1, 2 ou 3 (compat)
          const active =
            value === v ||
            (v === 2 && (value === 1 || value === 3));
          return (
            <button
              key={lbl}
              type="button"
              onClick={() => onChange(v)}
              className={cn(
                "rounded-xl border-2 px-2 py-3 text-sm md:text-base font-bold transition-all",
                "hover:border-primary hover:bg-primary/5",
                active
                  ? "border-primary bg-primary text-primary-foreground shadow-md"
                  : "border-border bg-card text-foreground",
              )}
            >
              {lbl}
            </button>
          );
        })}
      </div>
    </div>
  );
}
