/**
 * Ciências 2º ano — Identidade visual PRÓPRIA (laboratório roxo).
 * Módulo isolado: NÃO se registra no registry central de curso-v4.
 * Rota dedicada em /escola-brilha/ciencias-2ano/$aula.
 *
 * Metáfora: cada uma das 11 categorias fixas é uma cena de laboratório.
 */

// ---------- Cenas (uma por categoria fixa) ---------------------------

/** 01 — Motivação: cortina do laboratório sobe, revela a bancada. */
export type CenaBancadaAbrindo = {
  tipo: "bancadaAbrindo";
  aurora: string;              // fala inicial da Aurora
  imagemUrl: string;           // bancada-laboratorio.jpg
  brilhaUrl: string;           // brilha-cientista.png (transparent)
  titulo: string;              // "Missão Cientistas da Natureza"
  historia: string;            // texto da história
  ctaTexto: string;            // "Começar Missão"
};

/** 02 — Previsão: qual tubo vai reagir? */
export type CenaHipoteseTubos = {
  tipo: "hipoteseTubos";
  aurora: string;
  pergunta: string;
  tubos: Array<{
    id: string;
    cor: string;               // hex (#a855f7, #22d3ee, #4ade80)
    rotulo: string;            // nome curto embaixo
    emoji: string;             // ícone dentro do tubo
  }>;
  respostaCerta: string;
  feedbackAcerto: string;
  feedbackErro: string;
  falaFinal: string;
};

/** 03 — Vocabulário: 4 placas de Petri ABERTAS com termos científicos. */
export type CenaPlacasPetri = {
  tipo: "placasPetri";
  aurora: string;
  instrucao: string;
  placas: Array<{
    id: string;
    termo: string;             // "OBSERVAR"
    emoji: string;             // 👀
    corFundo: string;          // hex
    explicacao: string;        // frase curta pra criança 7a
    exemplo: string;           // "Ex.: olhar uma folha com atenção"
  }>;
  falaFinal: string;
};

/** 04 — Leitura guiada: prancheta do cientista, Aurora narra ao entrar. */
export type CenaPranchetaCientista = {
  tipo: "pranchetaCientista";
  aurora: string;              // fala curta antes do texto
  titulo: string;              // "Como pensa um cientista?"
  paragrafos: string[];        // 2-3 parágrafos curtos
  imagemUrl?: string;          // ilustração ao lado
  falaFinal: string;
};

/** 05 — Compreensão: microscópio com 3 amostras. Toca pra ver o que é. */
export type CenaMicroscopioZoom = {
  tipo: "microscopioZoom";
  aurora: string;
  instrucao: string;
  microscopioUrl: string;
  amostras: Array<{
    id: string;
    emoji: string;             // 🍃 💧 🐜
    rotulo: string;            // "Folha"
    descoberta: string;        // "Tem nervuras que levam água..."
  }>;
  falaFinal: string;
};

/** 06 — Personagens & lugar: cena com pins nos instrumentos. */
export type CenaHabitatPins = {
  tipo: "habitatPins";
  aurora: string;
  instrucao: string;
  cenarioUrl: string;          // bancada com pontos
  pontos: Array<{
    id: string;
    x: number;                 // 0-100
    y: number;                 // 0-100
    emoji: string;             // 🔬 🧪 📒 🔍 ⚗️
    titulo: string;            // "Microscópio"
    texto: string;             // pra que serve
  }>;
  falaFinal: string;
};

/** 07 — Você lê: diário de campo, texto grande direto. */
export type CenaDiarioCampo = {
  tipo: "diarioCampo";
  aurora: string;
  tituloLivro: string;         // "Diário do Cientista"
  subtitulo?: string;          // "Página 1 — Minha 1ª observação"
  paragrafos: string[];
  falaFinal: string;
};

/** 08 — Minijogo: experimento — escolhe hipótese, vê reação, marca resultado. */
export type CenaExperimentoMisturar = {
  tipo: "experimentoMisturar";
  aurora: string;
  contexto: string;            // "Vamos ver: o gelo derrete mais rápido no SOL ou na SOMBRA?"
  bequerUrl: string;
  hipoteses: Array<{
    id: string;
    emoji: string;
    rotulo: string;
  }>;
  respostaCerta: string;
  animacaoTexto: string;       // texto que aparece durante a "experiência"
  feedbackAcerto: string;
  feedbackErro: string;
  falaFinal: string;
};

/** 09 — Revisão: quadro com 5 descobertas que acendem em sequência. */
export type CenaQuadroDescobertas = {
  tipo: "quadroDescobertas";
  aurora: string;
  instrucao: string;
  descobertas: Array<{
    id: string;
    emoji: string;
    titulo: string;            // "1. Observar"
    texto: string;             // frase curta explicando
  }>;
  falaFinal: string;
};

/** 10 — Avaliação: quiz do carimbo. 5 perguntas. */
export type CenaCarimboCientista = {
  tipo: "carimboCientista";
  aurora: string;
  instrucao: string;
  perguntas: Array<{
    id: string;
    pergunta: string;
    opcoes: Array<{ id: string; texto: string; emoji?: string; correta?: boolean }>;
    feedbackAcerto: string;
    feedbackErro: string;
  }>;
  selo: {
    nome: string;              // "Cristal da Observação"
    subtitulo: string;
    emoji: string;             // 💎
    cor: string;               // gradient tailwind
  };
  falaFinal: string;
};

/** 11 — Missão em família: cartão com câmera para registrar. */
export type CenaMissaoCampo = {
  tipo: "missaoCampo";
  aurora: string;
  titulo: string;
  materiais: string[];
  passos: string[];
  registro: string;
  falaFinal: string;
};

export type CenaCiencias =
  | CenaBancadaAbrindo
  | CenaHipoteseTubos
  | CenaPlacasPetri
  | CenaPranchetaCientista
  | CenaMicroscopioZoom
  | CenaHabitatPins
  | CenaDiarioCampo
  | CenaExperimentoMisturar
  | CenaQuadroDescobertas
  | CenaCarimboCientista
  | CenaMissaoCampo;

// ---------- Aula ----------------------------------------------------

export type AulaCiencias = {
  slug: string;
  titulo: string;
  iconeTrilha: string;
  bncc: string[];
  duracaoMin: number;

  cena01_motivacao: CenaBancadaAbrindo;
  cena02_previsao: CenaHipoteseTubos;
  cena03_vocabulario: CenaPlacasPetri;
  cena04_leituraGuiada: CenaPranchetaCientista;
  cena05_compreensao: CenaMicroscopioZoom;
  cena06_personagensLugar: CenaHabitatPins;
  cena07_voceLe: CenaDiarioCampo;
  cena08_minijogo: CenaExperimentoMisturar;
  cena09_revisao: CenaQuadroDescobertas;
  cena10_avaliacao: CenaCarimboCientista;
  cena11_missaoFamilia: CenaMissaoCampo;

  recompensa: {
    xp: number;
    moedas: number;
    medalha?: string;
    cristal?: string;          // nome do cristal desbloqueado no laboratório
  };
};

// ---------- Registry local -------------------------------------------

const aulas: Record<string, AulaCiencias> = {};

export function registrarAula(aula: AulaCiencias) {
  aulas[aula.slug] = aula;
}

export function getAulaCiencias(slug: string): AulaCiencias | undefined {
  return aulas[slug];
}

export function listarAulasCiencias(): AulaCiencias[] {
  return Object.values(aulas);
}
