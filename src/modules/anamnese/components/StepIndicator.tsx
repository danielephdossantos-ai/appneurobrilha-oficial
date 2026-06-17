import { Progress } from "@/components/ui/progress";
import { STEP_TITLES, TOTAL_STEPS, stepPosition } from "../v2/types";

interface Props {
  current: number;
}
export function StepIndicator({ current }: Props) {
  const pos = stepPosition(current);
  const pct = Math.round((pos / TOTAL_STEPS) * 100);
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs md:text-sm font-medium">
        <span className="text-primary">
          Etapa {pos} de {TOTAL_STEPS}
        </span>
        <span className="text-muted-foreground">{pct}%</span>
      </div>
      <Progress value={pct} className="h-2" />
      <p className="text-sm md:text-base font-semibold">{STEP_TITLES[current]}</p>
    </div>
  );
}
