// SPEB 1.0 — Sistema Pedagógico Escola Brilha (História)
// Contrato dos 13 blocos da trilha metodológica

export type BlocoTipo =
  | "missao"
  | "narrativa"
  | "observacao_fonte"
  | "investigacao"
  | "ensino_explicito"
  | "eu_faco"
  | "nos_fazemos"
  | "voce_faz"
  | "aplicacao_cotidiano"
  | "minijogo"
  | "quiz"
  | "missao_familia"
  | "portfolio_museu";

export interface AulaHistoria {
  curso: string; // "historia-2ano"
  ano: string; // "2º Ano"
  unidade: number; // 1..7
  aula: number; // 1..N
  titulo_unidade: string;
  slug: string; // "aula-01-tempo-conta-historias"
  meta_narrativa: {
    item_perdido: string; // "Engrenagem de Bronze do Relógio do Tempo"
    dialogo_aurora: string;
  };
  trilha: {
    "01_missao": { titulo: string; descricao: string };
    "02_narrativa": { personagem: string; texto: string };
    "03_observacao_fonte": {
      tipo_fonte: string;
      instrucao_lupa: string;
      imagem_passado: string;
      detalhe_passado: string;
      imagem_presente: string;
      detalhe_presente: string;
    };
    "04_investigacao": {
      pergunta_pista: string;
      pistas_disponiveis: string[];
      resposta_pista_index: number;
    };
    "05_ensino_explicito": {
      conceito: string;
      explicacao: string; // markdown-lite (** para negrito, * para bullet)
    };
    "06_eu_faco": { exemplo_professor: string };
    "07_nos_fazemos": {
      atividade_guiada: string;
      associacoes: Array<{ evento: string; tempo_correto: "Passado (Ontem)" | "Presente (Hoje)" | "Futuro (Amanhã)" }>;
    };
    "08_voce_faz": { exercicio_autonomo: string };
    "09_aplicacao_cotidiano": { texto_pratico: string };
    "10_minijogo": {
      nome: string;
      mecanica: string;
      alvo_correto: string; // "Passado" | "Presente" | "Futuro"
    };
    "11_quiz": {
      pergunta: string;
      alternativas: Array<{ texto: string; correta: boolean }>;
      feedback_professor: string;
    };
    "12_missao_familia": { titulo: string; tarefa: string };
    "13_portfolio_sala_museu": { nome_sala: string; item_salvo: string };
  };
  recompensas: {
    xp: number;
    moedas: number;
    item_conquistado: string; // "Engrenagem de Bronze"
    engrenagem_indice: number; // 1..7
  };
}
