import { describe, it, expect } from "vitest";
import { AnamnesisEngine } from "./AnamnesisEngine";
import { AnamnesisData } from "../types";

describe("AnamnesisEngine", () => {
  const mockData: AnamnesisData = {
    pedagogical: {
      age: 7,
      schooling: "Fundamental 1",
      grade: "2º ano",
      literacy_level: "initial",
      math_level: "initial",
      reading_ability: 30,
      writing_ability: 20,
    },
    cognitive: {
      attention: 30,
      memory: 85,
      focus: 40,
      impulsivity: 75,
      organization: 20,
    },
    sensory: {
      auditory_sensitivity: 80,
      visual_sensitivity: 90,
      tactile_sensitivity: 50,
      movement_sensitivity: 40,
      general_sensitivity: 85,
    },
    behavioral: {
      routine_stability: 40,
      interests: ["Dinossauros"],
      motivators: ["Estrelas"],
      main_difficulties: ["Focar em tarefas longas"],
    },
  };

  it("should generate adaptation rules based on sensory sensitivity", () => {
    const profile = AnamnesisEngine.interpret(mockData);
    expect(profile.adaptation_rules.visual_clutter_reduction).toBe(true);
    expect(profile.adaptation_rules.audio_reinforcement_needed).toBe(true);
  });

  it("should identify strengths and focus areas", () => {
    const profile = AnamnesisEngine.interpret(mockData);
    expect(profile.strengths).toContain("Memória excepcional");
    expect(profile.focus_areas).toContain("Treino de atenção sustentada");
  });

  it("should calculate correct average scores", () => {
    const profile = AnamnesisEngine.interpret(mockData);
    expect(profile.scores.pedagogical).toBe(25);
    expect(profile.scores.cognitive).toBeCloseTo(51.66, 1);
  });
});
