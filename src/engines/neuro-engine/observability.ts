export interface AdaptiveObservation {
  profile: string;
  trigger: string;
  summary: string;
  details: Record<string, unknown>;
}

export function summarizeAdaptiveEvent(input: {
  profile: string;
  trigger: string;
  adjustment: Record<string, unknown> | object;
  state: Record<string, unknown>;
}): AdaptiveObservation {
  const profile = input.profile ?? "Tipico";
  const trigger = input.trigger ?? "PERIODIC_UPDATE";

  const summary = [
    `Perfil ${profile}`,
    trigger === "FATIGUE_BREAK_REQUIRED" ? "recomendou pausa" : "mantém fluxo",
    adjustmentHasStrongSimplification(input.adjustment) ? "com simplificação intensa" : "com ajuste moderado",
  ].join(" - ");

  return {
    profile,
    trigger,
    summary,
    details: {
      adjustment: input.adjustment,
      state: input.state,
    },
  };
}

function adjustmentHasStrongSimplification(adjustment: Record<string, unknown> | object): boolean {
  const a = adjustment as Record<string, unknown>;
  return Boolean(a.stimuliReduction || a.interfaceSimplification);
}
