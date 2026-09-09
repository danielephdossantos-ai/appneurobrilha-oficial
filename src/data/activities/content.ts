export interface ContentItem {
  id: string;
  value: string;
  type: "text" | "image" | "math";
  category: string;
  difficulty: number; // 1-10
  tags: string[];
}

export const CONTENT_DATABASE: ContentItem[] = [
  // Educação Infantil (Level 0)
  {
    id: "ei-001",
    value: "🍎",
    type: "text",
    category: "fruit",
    difficulty: 1,
    tags: ["contagem", "EI03ET07"],
  },
  {
    id: "ei-002",
    value: "🍌",
    type: "text",
    category: "fruit",
    difficulty: 1,
    tags: ["contagem", "EI03ET07"],
  },
  {
    id: "ei-003",
    value: "🐶",
    type: "text",
    category: "animal",
    difficulty: 1,
    tags: ["visual", "EI03CG05"],
  },

  // 1º Ano (Level 1)
  {
    id: "ef1-001",
    value: "BOLA",
    type: "text",
    category: "phonics",
    difficulty: 2,
    tags: ["alfabetizacao", "EF01LP02"],
  },
  {
    id: "ef1-002",
    value: "CASA",
    type: "text",
    category: "phonics",
    difficulty: 2,
    tags: ["alfabetizacao", "EF01LP02"],
  },

  // 3º Ano (Level 3)
  {
    id: "ef3-001",
    value: "O sol brilha forte no céu azul.",
    type: "text",
    category: "reading",
    difficulty: 4,
    tags: ["leitura", "EF03LP01"],
  },
  {
    id: "ef3-002",
    value: "25 + 15",
    type: "math",
    category: "math-op",
    difficulty: 4,
    tags: ["matematica", "EF03MA05"],
  },

  // 5º Ano (Level 5)
  {
    id: "ef5-001",
    value: "A Floresta Amazônica é a maior floresta tropical do mundo.",
    type: "text",
    category: "interpretation",
    difficulty: 6,
    tags: ["interpretacao", "EF05LP01"],
  },
  {
    id: "ef5-002",
    value: "150 / 5",
    type: "math",
    category: "math-op",
    difficulty: 6,
    tags: ["matematica", "EF05MA07"],
  },

  // 9º Ano (Level 9)
  {
    id: "ef9-001",
    value: "x² - 5x + 6 = 0",
    type: "math",
    category: "math-advanced",
    difficulty: 9,
    tags: ["matematica", "EF09MA01"],
  },
  {
    id: "ef9-002",
    value: "O machismo estrutural impacta a economia global.",
    type: "text",
    category: "interpretation",
    difficulty: 9,
    tags: ["interpretacao", "EF09LP03"],
  },

  // Automatic variations generator for demo
  ...Array.from({ length: 100 }).map((_, i) => ({
    id: `auto-ei-${i}`,
    value: `🍎`.repeat((i % 5) + 1),
    type: "text" as const,
    category: "count",
    difficulty: 1,
    tags: ["contagem", "EI03ET07"],
  })),
  ...Array.from({ length: 200 }).map((_, i) => ({
    id: `auto-ef9-${i}`,
    value: `${Math.floor(Math.random() * 100)}x + ${Math.floor(Math.random() * 50)} = ${Math.floor(Math.random() * 500)}`,
    type: "math" as const,
    category: "algebra",
    difficulty: 9,
    tags: ["matematica", "EF09MA01"],
  })),
];
