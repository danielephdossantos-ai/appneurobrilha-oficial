import { describe, it, expect } from "vitest";
import { buildAdaptiveUIState, getAdaptiveSummary } from "./adaptation-utils";

describe("buildAdaptiveUIState", () => {
  it("applies a simplified and low-stimulus UI for TEA", () => {
    const state = buildAdaptiveUIState(
      {
        visualComplexity: "low",
        stimuliReduction: true,
        interfaceSimplification: true,
        difficultyScale: 0.8,
        positiveReinforcementFrequency: 0.9,
        suggestBreak: false,
        audioAdaptation: { volume: 0.5, pacing: "slow" },
        animationIntensity: "none",
        maxInformationDensity: 3,
      },
      "TEA",
    );

    expect(state.simplifiedUI).toBe(true);
    expect(state.stimuliOpacity).toBe("0.3");
    expect(state.fontSize).toBe(17.6);
    expect(state.maxItemsPerScreen).toBe(3);
  });

  it("keeps a more dynamic UI for TDAH while preserving focus support", () => {
    const state = buildAdaptiveUIState(
      {
        visualComplexity: "low",
        stimuliReduction: true,
        interfaceSimplification: true,
        difficultyScale: 0.9,
        positiveReinforcementFrequency: 1.0,
        suggestBreak: false,
        audioAdaptation: { volume: 0.7, pacing: "normal" },
        animationIntensity: "low",
        maxInformationDensity: 2,
      },
      "TDAH",
    );

    expect(state.simplifiedUI).toBe(true);
    expect(state.stimuliOpacity).toBe("0.3");
    expect(state.animationSpeedMultiplier).toBe(1.25);
    expect(state.maxItemsPerScreen).toBe(2);
  });
});

describe("getAdaptiveSummary", () => {
  it("returns a concise explanation for the active adaptation", () => {
    const summary = getAdaptiveSummary(
      {
        visualComplexity: "low",
        stimuliReduction: true,
        interfaceSimplification: true,
        difficultyScale: 0.8,
        positiveReinforcementFrequency: 0.9,
        suggestBreak: false,
        audioAdaptation: { volume: 0.5, pacing: "slow" },
        animationIntensity: "none",
        maxInformationDensity: 3,
      },
      "TEA",
    );

    expect(summary.title).toContain("Modo adaptativo");
    expect(summary.description).toContain("simplificada");
    expect(summary.badges).toContain("TEA");
  });
});
