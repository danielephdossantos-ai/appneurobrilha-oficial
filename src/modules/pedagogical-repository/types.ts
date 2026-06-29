/**
 * LessonContent — modelo único e obrigatório de aula.
 * Toda aula é identificada pelo código BNCC e tem todos os campos preenchidos.
 * Nenhum texto é gerado dinamicamente — tudo vem do banco.
 */

export interface PassoAPasso {
  ordem: number;
  titulo: string;
  descricao: string;
}

export interface AtividadeItem {
  enunciado: string;
  resposta: string;
  dica?: string;
}

export interface QuizQuestao {
  pergunta: string;
  alternativas: string[];
  correta: number; // índice da alternativa correta
  explicacao: string;
}

export interface PalavraImportante {
  termo: string;
  definicao: string;
}

export interface LessonContent {
  id: string;
  codigo_bncc: string;
  ano: string;
  disciplina: string;
  titulo: string;
  objetivo: string;
  introducao: string;
  explicacao: string;
  contextualizacao: string;
  exemplo1: string;
  exemplo2: string;
  analogia: string;
  passo_a_passo: PassoAPasso[];
  curiosidade: string;
  erro_comum: string;
  atividade_guiada: AtividadeItem[];
  atividade_pratica: AtividadeItem[];
  desafio: AtividadeItem;
  quiz: QuizQuestao[];
  respostas: string[];
  resumo: string;
  revisao: string;
  palavras_chave: PalavraImportante[];
  nivel: "facil" | "medio" | "dificil" | string;
  tempo_estimado: number; // minutos
  materiais: string[];
  video: string;
  imagem: string;
  tags: string[];

}

export const LESSON_CONTENT_REQUIRED_FIELDS: (keyof LessonContent)[] = [
  "id",
  "codigo_bncc",
  "ano",
  "disciplina",
  "titulo",
  "objetivo",
  "introducao",
  "explicacao",
  "contexto",
  "exemplo1",
  "exemplo2",
  "analogia",
  "passo_a_passo",
  "curiosidade",
  "erro_comum",
  "atividade_guiada",
  "atividade_pratica",
  "desafio",
  "quiz",
  "respostas",
  "resumo",
  "revisao",
  "palavras_importantes",
  "nivel",
  "tempo_estimado",
  "materiais",
  "video_url",
  "imagem_url",
  "tags",
];
