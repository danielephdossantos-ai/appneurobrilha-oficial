// Tipos da Anamnese Científica v2 (16 etapas)
// IMPORTANTE: este sistema NÃO realiza diagnóstico clínico.

export type Likert = 0 | 1 | 2 | 3 | 4; // 0=Nunca .. 4=Muito frequentemente
export type SimNao = "sim" | "nao" | "nao_sei";
export type RiskLevel = "verde" | "amarelo" | "laranja" | "vermelho";

export interface Step01_Identificacao {
  nome: string;
  data_nascimento: string; // ISO yyyy-mm-dd
  idade: number;
  sexo: "feminino" | "masculino" | "outro" | "nao_informado";
  serie: string;
  responsavel: string;
  escola: string;
  professor: string;
}

export interface Step02_Gestacao {
  gravidez_planejada: SimNao;
  prematuro: SimNao;
  semanas_gestacao: number | null;
  peso_nascer_kg: number | null;
  uti_neonatal: SimNao;
  complicacoes_parto: SimNao;
  sofrimento_fetal: SimNao;
  anoxia: SimNao;
  medicamentos_gestacao: SimNao;
  infeccoes_gestacao: SimNao;
}

export interface Step03_Marcos {
  // idade em meses, null = não lembra
  sustentou_cabeca: number | null;
  sentou_sozinho: number | null;
  engatinhou: number | null;
  andou: number | null;
  primeiras_palavras: number | null;
  frases: number | null;
  compreensao_verbal: Likert;
  contato_visual: Likert;
  brincadeiras_compartilhadas: Likert;
  interacao_outras_criancas: Likert;
}

export interface Step04_HistoricoMedico {
  convulsoes: SimNao;
  epilepsia: SimNao;
  deficiencia_auditiva: SimNao;
  deficiencia_visual: SimNao;
  transtornos_neurologicos: SimNao;
  medicamentos_uso: string;
  terapias_atuais: string;
}

export interface Step05_HistoricoFamiliar {
  tdah: SimNao;
  tea: SimNao;
  dislexia: SimNao;
  deficiencia_intelectual: SimNao;
  transtornos_psiquiatricos: SimNao;
  dificuldades_escolares: SimNao;
}

export interface Step06_Escolar {
  reconhece_letras: Likert;
  reconhece_silabas: Likert;
  le_palavras: Likert;
  le_frases: Likert;
  le_textos: Likert;
  copia_palavras: Likert;
  escreve_espontaneamente: Likert;
  troca_letras: Likert;
  organiza_frases: Likert;
  reconhece_numeros: Likert;
  conta_objetos: Likert;
  adicao: Likert;
  subtracao: Likert;
  problemas_simples: Likert;
}

export interface Step07_Atencao {
  distrai_facil: Likert;
  esquece_instrucoes: Likert;
  perde_objetos: Likert;
  dificuldade_concluir: Likert;
  evita_concentracao: Likert;
  mantem_foco_escolar: Likert; // invertida (alto = bom)
}

export interface Step08_Hiperatividade {
  levanta_constantemente: Likert;
  corre_excessivamente: Likert;
  interrompe_conversas: Likert;
  responde_antes: Likert;
  dificuldade_esperar: Likert;
}

export interface Step09_ComunicacaoSocial {
  responde_chamado: Likert; // invertida
  mantem_contato_visual: Likert; // invertida
  compartilha_interesses: Likert; // invertida
  demonstra_emocoes: Likert; // invertida
  entende_expressoes: Likert; // invertida
}

export interface Step10_Repetitivos {
  alinha_objetos: Likert;
  movimentos_repetitivos: Likert;
  interesses_restritos: Likert;
  resistencia_mudancas: Likert;
  rotinas_rigidas: Likert;
}

export interface Step11_Sensorial {
  sensibilidade_sons: Likert;
  sensibilidade_luz: Likert;
  sensibilidade_toque: Likert;
  seletividade_alimentar: Likert;
  busca_estimulos: Likert;
}

export interface Step12_Linguagem {
  compreende_instrucoes: Likert; // invertida
  nomeia_objetos: Likert; // invertida
  conta_historias: Likert; // invertida
  formula_frases: Likert; // invertida
  trocas_fonologicas: Likert;
}

export interface Step13_Memoria {
  recorda_instrucoes: Likert; // invertida
  recorda_historias: Likert; // invertida
  memoriza_sequencias: Likert; // invertida
  reconhece_informacoes: Likert; // invertida
}

export interface Step14_Motora {
  segura_lapis: Likert; // invertida
  recorta: Likert; // invertida
  abotoa: Likert; // invertida
  manipula_pequenos: Likert; // invertida
  corre: Likert; // invertida
  salta: Likert; // invertida
  equilibra: Likert; // invertida
  chuta_bola: Likert; // invertida
}

export interface Step15_Emocional {
  ansiedade: Likert;
  irritabilidade: Likert;
  baixa_autoestima: Likert;
  frustracao: Likert;
  mudancas_humor: Likert;
}

export interface Step16_Autonomia {
  alimentacao: Likert; // invertida
  higiene: Likert; // invertida
  vestuario: Likert; // invertida
  organizacao_materiais: Likert; // invertida
  independencia_diaria: Likert; // invertida
}

export interface AnamneseV2Responses {
  step1?: Partial<Step01_Identificacao>;
  step2?: Partial<Step02_Gestacao>;
  step3?: Partial<Step03_Marcos>;
  step4?: Partial<Step04_HistoricoMedico>;
  step5?: Partial<Step05_HistoricoFamiliar>;
  step6?: Partial<Step06_Escolar>;
  step7?: Partial<Step07_Atencao>;
  step8?: Partial<Step08_Hiperatividade>;
  step9?: Partial<Step09_ComunicacaoSocial>;
  step10?: Partial<Step10_Repetitivos>;
  step11?: Partial<Step11_Sensorial>;
  step12?: Partial<Step12_Linguagem>;
  step13?: Partial<Step13_Memoria>;
  step14?: Partial<Step14_Motora>;
  step15?: Partial<Step15_Emocional>;
  step16?: Partial<Step16_Autonomia>;
}

export interface PerfilScores {
  cognitivo: number; // 0-100 (maior = mais indicadores)
  escolar: number;
  comportamental: number;
  socioemocional: number;
  adaptativo: number;
}

export interface RiskMap {
  cognitivo: RiskLevel;
  escolar: RiskLevel;
  comportamental: RiskLevel;
  socioemocional: RiskLevel;
  adaptativo: RiskLevel;
  global: RiskLevel;
}

export const TOTAL_STEPS = 16;

export const STEP_TITLES: Record<number, string> = {
  1: "Identificação",
  2: "Gestação e nascimento",
  3: "Marcos do desenvolvimento",
  4: "Histórico médico",
  5: "Histórico familiar",
  6: "Desempenho escolar",
  7: "Atenção e funções executivas",
  8: "Hiperatividade e impulsividade",
  9: "Comunicação social",
  10: "Comportamentos repetitivos",
  11: "Processamento sensorial",
  12: "Linguagem",
  13: "Memória",
  14: "Coordenação motora",
  15: "Aspectos emocionais",
  16: "Autonomia",
};
