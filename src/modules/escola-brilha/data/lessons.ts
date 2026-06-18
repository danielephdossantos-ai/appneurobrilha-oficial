import { Lesson } from "../types/lesson";

export { MATH_1ANO_LESSON } from "./math-1ano";
export { PORTUGUES_1ANO_LESSON } from "./portugues-1ano";


export { PORTUGUES_2ANO_LESSON } from "./portugues-2ano";
export { MATH_2ANO_LESSON } from "./math-2ano";



export const LANG_LESSON: Lesson = {
  id: "brincando-com-rimas",
  title: "Brincando com Rimas",
  bncc_field: "escuta_fala",
  skill_bncc: "EI03EF02",
  steps: [
    {
      id: "r1",
      phase: "explanation",
      type: "explanation",
      mascot: "pip",
      speech: "Vamos descobrir as rimas!",
      elements: [
        {
          id: "c",
          type: "text",
          content: "casa",
          position: { x: -60, y: 0 },
          animation: "bounce",
          delay: 0.3,
        },
        {
          id: "a",
          type: "text",
          content: "asa",
          position: { x: 60, y: 0 },
          animation: "bounce",
          delay: 0.7,
        },
      ],
    },
    {
      id: "r2",
      phase: "practice",
      type: "interaction",
      mascot: "pipa",
      speech: "O que rima com CASA?",
      elements: [
        {
          id: "ref",
          type: "text",
          content: "casa",
          position: { x: 0, y: 0 },
          animation: "pop",
          delay: 0.2,
        },
      ],
      interaction: { type: "click", correctAnswer: "asa", options: ["bola", "asa"] },
    },
  ],
};
