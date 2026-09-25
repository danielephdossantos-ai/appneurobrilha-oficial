/** Estrutura reutilizável dos livros interativos NeuroBrilha. */

export type Expressao = "alegre" | "triste" | "curiosa";
export type Som = "toque" | "acerto" | "pista" | "pio" | "coaxar" | "palma" | "virar" | "festa";
export type Voz = "narrador" | "fofa" | "tico" | "sapo" | "objeto";
export type Ambiente = "folhas" | "agua" | "brilho" | "nuvens";

export interface Ator {
  /** chave da ilustração */
  img: string;
  nome: string;
  x: number; // % centro
  y: number; // % base
  tamanho: number; // % largura da cena
  expressao?: Expressao;
  /** animação contínua */
  vida?: "respirar" | "balancar" | "voar";
  /** 1º toque, 2º toque, ... (faz ciclo) */
  falas: string[];
  voz?: Voz;
  som?: Som;
  /** expressão ao ser tocado */
  reacao?: Expressao;
}

export interface Opcao {
  texto: string;
  img?: string;
  expressao?: Expressao;
  correta?: boolean;
}

export type Jogo =
  | { tipo: "escolha"; habilidade: string; pergunta: string; ouvir?: Som; opcoes: Opcao[]; acerto: string; dicas: string[] }
  | { tipo: "encontre"; habilidade: string; pergunta: string; img: string; posicoes: { x: number; y: number }[]; acerto: string }
  | { tipo: "silaba"; habilidade: string; palavra: string; silabas: string[]; acerto: string }
  | { tipo: "memoria"; habilidade: string; pergunta: string; imgs: string[]; acerto: string }
  | { tipo: "sequencia"; habilidade: string; pergunta: string; passos: { texto: string; img: string; expressao?: Expressao }[]; acerto: string; dica: string }
  | { tipo: "teatro"; habilidade: string; passos: { pedido: string; expressao?: Expressao }[]; acerto: string };

export interface Cena {
  titulo: string;
  cenario: string;
  ambiente?: Ambiente[];
  narracao: string;
  /** palavras destacadas no texto → sílabas */
  destaques?: Record<string, string[]>;
  atores: Ator[];
  /** ENSINAR antes de cobrar: falas mostradas uma a uma */
  ensinar?: string[];
  jogo?: Jogo;
  objetivo: string;
}

export interface Ficha {
  faixa: string;
  objetivo: string;
  habilidades: string[];
  vocabulario: string[];
  letrasSons: string;
  silabas: string;
  matematica: string;
  emocao: string;
  jogos: string[];
  cenarios: string[];
  personagens: string[];
  teatro: string;
  final: string;
}

export interface Livro {
  id: string;
  titulo: string;
  ficha: Ficha;
  cenas: Cena[];
  aprendemos: { titulo: string; itens: string[] }[];
  desafioFinal: Extract<Jogo, { tipo: "escolha" }>;
}
