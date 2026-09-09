export interface EtapaPedagogica {
  nivel: number;
  titulo: string;
  objetivos: string[];
  sugereCursiva: boolean;
}

export const MOTOR_PEDAGOGICO: EtapaPedagogica[] = [
  {
    nivel: 1,
    titulo: "PRÉ-ESCRITA E PREPARAÇÃO",
    objetivos: [
      "Traçados",
      "Direção dos movimentos",
      "Coordenação visuomotora",
      "Controle do lápis/caneta",
      "Reconhecimento de formas",
      "Preparação para formação das letras"
    ],
    sugereCursiva: false
  },
  {
    nivel: 2,
    titulo: "LETRAS E SONS",
    objetivos: [
      "Identificação de letras",
      "Associação fonema-grafema",
      "Formação das letras",
      "Reconhecimento visual",
      "Escrita de letras",
      "Diferenciação de letras semelhantes"
    ],
    sugereCursiva: false
  },
  {
    nivel: 3,
    titulo: "SÍLABAS",
    objetivos: [
      "Formação de sílabas",
      "Leitura e escrita",
      "Combinação de sons",
      "Ditado de sílabas",
      "Construção gradual de palavras"
    ],
    sugereCursiva: false
  },
  {
    nivel: 4,
    titulo: "PALAVRAS",
    objetivos: [
      "Palavras simples",
      "Palavras regulares",
      "Palavras de dificuldade crescente",
      "Ditado",
      "Cópia significativa",
      "Escrita sem modelo",
      "Revisão"
    ],
    sugereCursiva: false
  },
  {
    nivel: 5,
    titulo: "FRASES",
    objetivos: [
      "Organização de palavras",
      "Construção de frases",
      "Completar frases",
      "Escrever frases a partir de imagens",
      "Produção independente"
    ],
    sugereCursiva: false
  },
  {
    nivel: 6,
    titulo: "PEQUENOS TEXTOS",
    objetivos: [
      "Sequência de imagens",
      "Descrição",
      "Pequenas narrativas",
      "Reescrita",
      "Produção autoral",
      "Revisão orientada"
    ],
    sugereCursiva: false
  },
  {
    nivel: 7,
    titulo: "ORTOGRAFIA E FLUÊNCIA",
    objetivos: [
      "Padrões ortográficos",
      "Palavras de maior complexidade",
      "Revisão cumulativa",
      "Ditado",
      "Autocorreção",
      "Produção escrita"
    ],
    sugereCursiva: true
  },
  {
    nivel: 8,
    titulo: "ESCRITA CURSIVA",
    objetivos: [
      "Movimentos básicos",
      "Letras isoladas",
      "Ligação entre letras",
      "Sílabas",
      "Palavras",
      "Frases",
      "Pequenos textos"
    ],
    sugereCursiva: true
  }
];
