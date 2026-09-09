import { Progress } from "@/components/ui/progress";
import { STEP_TITLES, ACTIVE_STEPS } from "../v2/types";

interface Props { current: number; steps?: number[]; }
export function StepIndicator({ current, steps = ACTIVE_STEPS }: Props) {
  const idx = Math.max(0, steps.indexOf(current));
  const pos = idx + 1;
  const total = Math.max(1, steps.length);
  const pct = Math.round((pos / total) * 100);
  return <div className="space-y-2"><div className="flex justify-between text-xs md:text-sm font-medium"><span className="text-primary">Etapa {pos} de {total}</span><span className="text-muted-foreground">{pct}%</span></div><Progress value={pct} className="h-2"/><p className="text-sm md:text-base font-semibold">{STEP_TITLES[current]}</p></div>;
}
