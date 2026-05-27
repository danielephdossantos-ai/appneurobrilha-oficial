export type SensoryMode = "visual" | "auditivo" | "motor" | "combinado";

export class SensoryEngine {
  static adapt(profile: any) {
    return {
      mode: "visual" as SensoryMode,
      brightness: 1,
      contrast: 1
    };
  }
}
