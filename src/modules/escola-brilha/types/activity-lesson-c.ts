export type BNCCArea =
  | "linguagens"
  | "matematica"
  | "ciencias_natureza"
  | "ciencias_humanas"
  | "ensino_religioso";

export interface ActivityLessonC {
  id: string;
  title: string;
  mission_question: string;
  subject: string;
  area: BNCCArea;
  area_label: string;
  grade: string;
  grade_range: string;
  bncc_code: string;
  bncc_description: string;
  xp: number;
  color: {
    from: string;
    to: string;
    accent: string;
  };

  screens: {
    missao: {
      intro: string;
      objectives: string[];
      context_emoji: string;
      context_text: string;
    };
    exploracao: {
      instruction: string;
      texto: string;
      pontos_destaque: Array<{ emoji: string; text: string }>;
      mascot_tip: string;
    };
    pontos_chave: {
      intro: string;
      points: Array<{ icon: string; title: string; text: string }>;
    };
    exemplo_aplicado: {
      title: string;
      scenario: string;
      scenario_emoji: string;
      analysis: string[];
      conclusion: string;
      visual_steps?: {
        build: Array<{ text: string; role: "unknown" | "coef" | "number" | "op" | "eq" | "paren" }>;
        steps: Array<{
          id: number;
          action: string;
          action_symbol: string;
          accent: string;
          explanation: string;
          before: Array<{
            text: string;
            role: "unknown" | "coef" | "number" | "op" | "eq" | "paren";
            dim?: boolean;
            strike?: boolean;
          }>;
          result: Array<{
            text: string;
            role: "unknown" | "coef" | "number" | "op" | "eq" | "paren";
          }>;
        }>;
        verification: string;
      };
    };
    desafio: {
      question: string;
      context?: string;
      options: Array<{
        letter: "A" | "B" | "C" | "D";
        text: string;
        isCorrect: boolean;
      }>;
      explanation: string;
    };
  };
}
