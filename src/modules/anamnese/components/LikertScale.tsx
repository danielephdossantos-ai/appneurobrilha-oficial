import { cn } from "@/utils/utils";
import type { Likert } from "../v2/types";

const LABELS = ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito frequentemente"];

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
      <div className="grid grid-cols-5 gap-1.5">
        {LABELS.map((lbl, i) => {
          const active = value === i;
          return (
            <button
              key={i}
              type="button"
              onClick={() => onChange(i as Likert)}
              className={cn(
                "rounded-lg border-2 px-1 py-2 text-[10px] md:text-xs font-medium transition-all",
                "hover:border-primary hover:bg-primary/5",
                active
                  ? "border-primary bg-primary text-primary-foreground shadow-md"
                  : "border-border bg-card text-foreground",
              )}
            >
              <div className="text-base md:text-lg font-bold">{i}</div>
              <div className="leading-tight">{lbl}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
