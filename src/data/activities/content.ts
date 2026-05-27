
export interface ContentItem {
  id: string;
  value: string;
  type: "text" | "image" | "math";
  category: string;
  difficulty: number; // 1-10
  tags: string[];
}

export const CONTENT_DATABASE: ContentItem[] = [
  // Português - Consciência Fonológica
  { id: "p-001", value: "BOLA", type: "text", category: "phonics", difficulty: 1, tags: ["vogais", "simples"] },
  { id: "p-002", value: "CASA", type: "text", category: "phonics", difficulty: 1, tags: ["vogais", "simples"] },
  { id: "p-003", value: "GATO", type: "text", category: "phonics", difficulty: 1, tags: ["vogais", "simples"] },
  { id: "p-004", value: "CACHORRO", type: "text", category: "phonics", difficulty: 3, tags: ["silabas", "complexo"] },
  
  // Matemática Visual
  { id: "m-001", value: "1", type: "text", category: "math", difficulty: 1, tags: ["numeros"] },
  { id: "m-002", value: "2", type: "text", category: "math", difficulty: 1, tags: ["numeros"] },
  { id: "m-003", value: "3", type: "text", category: "math", difficulty: 1, tags: ["numeros"] },
  
  // Imagens (Placeholders for now)
  { id: "i-001", value: "🍎", type: "text", category: "fruit", difficulty: 1, tags: ["maça", "visual"] },
  { id: "i-002", value: "🍌", type: "text", category: "fruit", difficulty: 1, tags: ["banana", "visual"] },
  { id: "i-003", value: "🐶", type: "text", category: "animal", difficulty: 1, tags: ["dog", "visual"] },
  { id: "i-004", value: "🐱", type: "text", category: "animal", difficulty: 1, tags: ["cat", "visual"] },

  // Add more mock items to simulate "thousands" of variations
  ...Array.from({ length: 100 }).map((_, i) => ({
    id: `auto-math-${i}`,
    value: `${Math.floor(Math.random() * 10)} + ${Math.floor(Math.random() * 10)}`,
    type: "math" as const,
    category: "math-operation",
    difficulty: Math.floor(i / 25) + 1,
    tags: ["addition"]
  })),
  ...Array.from({ length: 100 }).map((_, i) => ({
    id: `auto-word-${i}`,
    value: ["Leão", "Zebra", "Elefante", "Girafa", "Macaco"][i % 5],
    type: "text" as const,
    category: "animals",
    difficulty: 2,
    tags: ["vocabulary"]
  }))
];
