import { cn } from "@/utils/utils";
import type { SimNao } from "../v2/types";

interface Props {
  label: string;
  value: SimNao | undefined;
  onChange: (v: SimNao) => void;
  hint?: string;
}

const OPTS: { value: SimNao; label: string }[] = [
  { value: "sim", label: "Sim" },
  { value: "nao", label: "Não" },
  { value: "nao_sei", label: "Não sei" },
];

export function YesNoField({ label, value, onChange, hint }: Props) {
  return (
    <div className="space-y-2 py-3 border-b border-border last:border-b-0">
      <div>
        <p className="font-medium text-sm md:text-base">{label}</p>
        {hint && <p className="text-xs text-muted-foreground mt-0.5">{hint}</p>}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {OPTS.map((o) => {
          const active = value === o.value;
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onChange(o.value)}
              className={cn(
                "rounded-lg border-2 px-3 py-2 text-sm font-medium transition-all",
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:border-primary/50",
              )}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
