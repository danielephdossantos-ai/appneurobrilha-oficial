
import { PedagogicalActivity } from "../validation/schemas";

export const PEDAGOGICAL_TEMPLATES: Record<string, Partial<PedagogicalActivity>> = {
  "MAT_CONTAGEM_B": {
    category: "Matemática",
    habilidadeBNCC: "EF01MA01",
    objetivo: "Relacionar números e quantidades",
    idadeMinima: 5,
    idadeMaxima: 7,
    dificuldade: "easy",
    pesoCognitivo: 2,
    tipoSensorial: "visual",
    recompensa: { stars: 5, coins: 10, energy: 2 }
  },
  "LP_ALFABETO_B": {
    category: "Língua Portuguesa",
    habilidadeBNCC: "EF01LP02",
    objetivo: "Identificar fonemas e grafemas",
    idadeMinima: 6,
    idadeMaxima: 8,
    dificuldade: "easy",
    pesoCognitivo: 3,
    tipoSensorial: "mixed",
    recompensa: { stars: 5, coins: 10, energy: 3 }
  }
};
