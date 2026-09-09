/**
 * Métodos científicos utilizados em cada tipo de atividade do
 * Alfabetização Brilha, com a referência bibliográfica curta e o pilar
 * do National Reading Panel (NRP, 2000) correspondente.
 *
 * Fontes:
 *  - National Reading Panel (2000). Report of the National Reading Panel.
 *  - Adams, M.J. (1990). Beginning to Read: Thinking and Learning about Print.
 *  - Ehri, L.C. (2005). Learning to Read Words: Theory, Findings, and Issues.
 *  - Dehaene, S. (2009). Reading in the Brain / Os Neurônios da Leitura.
 *  - Rosenshine, B. (2012). Principles of Instruction.
 *  - Cooper, Heron & Heward (2020). Applied Behavior Analysis (ABA).
 *  - Vygotsky, L. (1978). Mind in Society (ZDP).
 *  - Ebbinghaus / Bjork — Prática distribuída (SRS).
 */

export type NrpPillar =
  | "consciencia-fonologica"
  | "fonica"
  | "fluencia"
  | "vocabulario"
  | "compreensao";

export const NRP_PILLAR_LABEL: Record<NrpPillar, string> = {
  "consciencia-fonologica": "Consciência Fonológica",
  fonica: "Fônica (letra ↔ som)",
  fluencia: "Fluência",
  vocabulario: "Vocabulário",
  compreensao: "Compreensão",
};

export interface MetodoCientifico {
  /** Nome curto para badge (ex.: "Método Fônico Sistemático"). */
  nome: string;
  /** Referência resumida (autor + ano). */
  base: string;
  /** Pilar do National Reading Panel. */
  pilar: NrpPillar;
  /** Descrição de 1 linha do que o método faz. */
  descricao: string;
}

/**
 * Mapeamento por tipo de atividade gerada pelo `gerador.ts`.
 * Se um tipo não estiver aqui, cai no fallback definido em `metodoDoTipo`.
 */
const METODO_POR_TIPO: Record<string, MetodoCientifico> = {
  "vogal-som": {
    nome: "Método Fônico Sistemático",
    base: "Ehri (2005) · Dehaene (2009)",
    pilar: "fonica",
    descricao: "Associação explícita entre grafema (vogal) e som inicial da palavra.",
  },
  "som-inicial": {
    nome: "Consciência Fonêmica (som inicial)",
    base: "National Reading Panel (2000) · Adams (1990)",
    pilar: "consciencia-fonologica",
    descricao: "Identificar o primeiro fonema da palavra — preditor #1 da leitura.",
  },
  "som-final": {
    nome: "Consciência Fonêmica (som final)",
    base: "National Reading Panel (2000)",
    pilar: "consciencia-fonologica",
    descricao: "Identificar o último fonema — base para rima e escrita.",
  },
  "som-meio": {
    nome: "Consciência Fonêmica (som medial)",
    base: "National Reading Panel (2000)",
    pilar: "consciencia-fonologica",
    descricao: "Identificar o som do meio da palavra (habilidade mais avançada).",
  },
  rima: {
    nome: "Consciência Fonológica de Rimas",
    base: "Adams (1990) · Bradley & Bryant",
    pilar: "consciencia-fonologica",
    descricao: "Perceber que palavras terminam parecido — porta de entrada da alfabetização.",
  },
  aliteracao: {
    nome: "Consciência Fonológica de Aliteração",
    base: "Adams (1990)",
    pilar: "consciencia-fonologica",
    descricao: "Perceber palavras que começam com o mesmo som.",
  },
  segmentacao: {
    nome: "Segmentação Silábica",
    base: "National Reading Panel (2000) · Capovilla",
    pilar: "consciencia-fonologica",
    descricao: "Quebrar a palavra em sílabas — habilidade metafonológica intermediária.",
  },
  fusao: {
    nome: "Fusão Silábica",
    base: "Orton-Gillingham · Ehri (2005)",
    pilar: "fonica",
    descricao: "Juntar sílabas para formar a palavra — passo direto para a leitura decodificada.",
  },
  "contagem-fonemas": {
    nome: "Consciência Fonêmica (contagem)",
    base: "National Reading Panel (2000)",
    pilar: "consciencia-fonologica",
    descricao: "Contar os sons da palavra — habilidade fonêmica de alto nível.",
  },
  "substituicao-fonema": {
    nome: "Manipulação Fonêmica (substituição)",
    base: "National Reading Panel (2000) · Adams (1990)",
    pilar: "consciencia-fonologica",
    descricao: "Trocar um fonema por outro — o preditor mais forte de leitura fluente.",
  },
  "categorizacao-som": {
    nome: "Categorização de Sons",
    base: "Bradley & Bryant (1983)",
    pilar: "consciencia-fonologica",
    descricao: "Agrupar palavras pelo som — treino auditivo pré-leitor.",
  },
  "frase-imagem": {
    nome: "Compreensão Frasal com Suporte Visual",
    base: "Rosenshine (2012) · Vygotsky (ZDP)",
    pilar: "compreensao",
    descricao: "Ler uma frase e conectar ao referente visual — construção de sentido.",
  },
  "texto-compreensao": {
    nome: "Compreensão Leitora com Perguntas Literais",
    base: "National Reading Panel (2000) · Hattie (Feedback)",
    pilar: "compreensao",
    descricao: "Ler um trecho curto e responder — treino de compreensão literal.",
  },
};

/** Retorna o método científico do tipo, com fallback seguro. */
export function metodoDoTipo(tipo: string): MetodoCientifico {
  return (
    METODO_POR_TIPO[tipo] ?? {
      nome: "Instrução Explícita Multissensorial",
      base: "Rosenshine (2012) · Orton-Gillingham",
      pilar: "fonica",
      descricao:
        "Ver + ouvir + falar + tocar ao mesmo tempo, com modelagem passo a passo antes da prática.",
    }
  );
}

/**
 * Método principal de uma ETAPA (usado na tela de intro).
 * Deriva pelo primeiro tipo de atividade da etapa; se a etapa mistura tipos,
 * escolhe um resumo mais amplo.
 */
const METODO_POR_ETAPA: Record<string, MetodoCientifico> = {
  vogais: metodoDoTipo("vogal-som"),
  silabas: {
    nome: "Consciência Silábica + Fusão (Orton-Gillingham)",
    base: "Orton-Gillingham · Ehri (2005)",
    pilar: "fonica",
    descricao:
      "Segmentar e juntar sílabas de forma multissensorial (ver, ouvir, falar, tocar).",
  },
  palavras: {
    nome: "Consciência Fonêmica (som inicial + rima + aliteração)",
    base: "National Reading Panel (2000) · Adams (1990)",
    pilar: "consciencia-fonologica",
    descricao: "Treino dos fonemas — o preditor mais forte de leitura fluente.",
  },
  fonemas: {
    nome: "Manipulação Fonêmica Explícita",
    base: "National Reading Panel (2000)",
    pilar: "consciencia-fonologica",
    descricao:
      "Identificar, contar, categorizar e substituir fonemas — nível mais avançado da consciência fonológica.",
  },
  frases: metodoDoTipo("frase-imagem"),
  textos: metodoDoTipo("texto-compreensao"),
  compreensao: metodoDoTipo("texto-compreensao"),
};

export function metodoDaEtapa(etapaId: string): MetodoCientifico {
  return METODO_POR_ETAPA[etapaId] ?? metodoDoTipo("");
}

/** Rótulo curto do pilar NRP para badge (max ~24 chars). */
export function pilarLabel(pilar: NrpPillar): string {
  return NRP_PILLAR_LABEL[pilar];
}
