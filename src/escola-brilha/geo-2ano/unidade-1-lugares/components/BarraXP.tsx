import { useEffect, useState } from "react";
import { Sparkles, Coins } from "lucide-react";

/** Contador animado que "roda" até o valor alvo. */
function useCountUp(target: number, duration = 700) {
  const [value, setValue] = useState(target);
  useEffect(() => {
    const start = value;
    const delta = target - start;
    if (delta === 0) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(start + delta * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return value;
}

export function BarraXP({ xp, moedas }: { xp: number; moedas: number }) {
  const xpShown = useCountUp(xp);
  const moedasShown = useCountUp(moedas);
  return (
    <div className="fixed top-3 right-3 z-40 flex gap-2">
      <div className="flex items-center gap-2 rounded-full bg-primary/90 backdrop-blur px-4 py-2 shadow-lg border-2 border-primary-foreground/20">
        <Sparkles className="h-5 w-5 text-primary-foreground" />
        <span className="text-primary-foreground font-black text-lg tabular-nums">{xpShown}</span>
        <span className="text-primary-foreground/80 text-xs font-bold">XP</span>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-amber-400/90 backdrop-blur px-4 py-2 shadow-lg border-2 border-amber-100/40">
        <Coins className="h-5 w-5 text-amber-900" />
        <span className="text-amber-900 font-black text-lg tabular-nums">{moedasShown}</span>
        <span className="text-amber-900/80 text-xs font-bold">MOEDAS</span>
      </div>
    </div>
  );
}
