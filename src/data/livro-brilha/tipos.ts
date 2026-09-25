export type Nivel = "Descobrir" | "Aprender" | "Desafiar";

export type Tocavel = {
  emoji: string;
  rotulo: string;
  fala: string;
  /** posição percentual dentro da ilustração */
  x: number;
  y: number;
};

export type Opcao = {
  texto: string;
  correta: boolean;
};

export type Atividade = {
  pergunta: string;
  opcoes: Opcao[];
  acerto: string;
  dica: string;
};

export type Cena = {
  titulo: string;
  narracao: string;
  textoVisual: string;
  tocaveis: Tocavel[];
  atividade: Atividade;
  habilidade: string;
};

export type Aprendemos = {
  palavras: string;
  sons: string;
  emocao: string;
  habilidade: string;
};

export type Historia = {
  id: string;
  numero: number;
  titulo: string;
  tema: string;
  nivel: Nivel;
  emoji: string;
  faixa: string;
  objetivo: string;
  personagens: string;
  teatro: string;
  cenas: Cena[];
  aprendemos: Aprendemos;
};

export type HistoriaResumo = {
  id: string;
  numero: number;
  titulo: string;
  tema: string;
  nivel: Nivel;
  emoji: string;
  pronta: boolean;
};
