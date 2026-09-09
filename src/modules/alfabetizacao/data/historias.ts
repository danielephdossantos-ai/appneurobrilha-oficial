// Mini-textos para as etapas 4-6. Tudo será LIDO POR VOZ (TTS) — a criança
// não precisa ler. As opções de resposta são IMAGENS.

export interface FraseImagem {
  id: string;
  fraseFalada: string;
  respostaCorreta: string; // nome em OBJETO_IMG
  distratores: string[];
}

export const FRASES: FraseImagem[] = [
  { id: "f1", fraseFalada: "O gato subiu na árvore.", respostaCorreta: "GATO", distratores: ["BOLA", "BANANA"] },
  { id: "f2", fraseFalada: "O sol está brilhando no céu.", respostaCorreta: "SOL", distratores: ["LUA", "CHUVA"] },
  { id: "f3", fraseFalada: "A abelha voa perto da flor.", respostaCorreta: "ABELHA", distratores: ["PEIXE", "VACA"] },
  { id: "f4", fraseFalada: "O cachorro corre atrás da bola.", respostaCorreta: "CACHORRO", distratores: ["TIGRE", "URSO"] },
  { id: "f5", fraseFalada: "A vaca come capim no campo.", respostaCorreta: "VACA", distratores: ["GALO", "RATO"] },
  { id: "f6", fraseFalada: "O peixe nada na água.", respostaCorreta: "PEIXE", distratores: ["SAPO", "PATO"] },
];

export interface MiniHistoria {
  id: string;
  texto: string;
  pergunta: string;
  respostaCorreta: string;
  distratores: string[];
}

export const HISTORIAS: MiniHistoria[] = [
  {
    id: "h1",
    texto: "Era uma vez um coelho que adorava cenoura. Todo dia ele ia ao jardim buscar uma bem fresquinha.",
    pergunta: "O que o coelho ia buscar?",
    respostaCorreta: "CENOURA",
    distratores: ["BANANA", "UVA"],
  },
  {
    id: "h2",
    texto: "A borboleta voou de flor em flor até encontrar um lugar bem colorido pra descansar.",
    pergunta: "Quem voou de flor em flor?",
    respostaCorreta: "BORBOLETA",
    distratores: ["ABELHA", "PASSARO"],
  },
  {
    id: "h3",
    texto: "Na floresta, o leão rugiu bem alto e todos os animais se assustaram.",
    pergunta: "Quem rugiu na floresta?",
    respostaCorreta: "LEAO",
    distratores: ["TIGRE", "URSO"],
  },
  {
    id: "h4",
    texto: "O macaco subiu na árvore para pegar uma fruta doce e amarela.",
    pergunta: "Qual fruta o macaco pegou?",
    respostaCorreta: "BANANA",
    distratores: ["MORANGO", "UVA"],
  },
];
