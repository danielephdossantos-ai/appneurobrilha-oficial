/**
 * Recomenda a fase inicial da trilha "Ler com Aurora" a partir da
 * anamnese respondida pelo adulto (Step 6 · Escolar) e da idade da criança.
 *
 * Escala Likert (Step 6): 0 = Nunca .. 4 = Muito frequentemente
 * Fontes: reconhece_letras, reconhece_silabas, le_palavras, le_frases, le_textos.
 */

export type FaseAurora = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface Step6ParaAurora {
  reconhece_letras?: number;
  reconhece_silabas?: number;
  le_palavras?: number;
  le_frases?: number;
  le_textos?: number;
}

export interface RecomendacaoAurora {
  fase: FaseAurora;
  nome: string;
  motivo: string;
  slugInicial: string;
}

const NOMES_FASE: Record<FaseAurora, string> = {
  1: "Consciência Fonológica",
  2: "Princípio Alfabético",
  3: "Decodificação Silábica",
  4: "Fluência e Compreensão",
  5: "Ortografia Inicial",
  6: "Fluência Verdadeira",
  7: "Vocabulário Ativo",
  8: "Compreensão Estratégica",
};

const SLUG_INICIAL: Record<FaseAurora, string> = {
  1: "f1-s1-d1-escuta-viva",
  2: "f2-s1-d1-som-do-a",
  3: "f3-s1-d1-familia-p",
  4: "f4-s1-d1-frase-simples",
  5: "f5-s1-d1-lh",
  6: "f6-s1-d1-leitura-3-rounds",
  7: "f7-s1-d1-sinonimos",
  8: "f8-s1-d1-prever-plantar",
};

/**
 * Regra pedagógica (Ehri 2005 + PNA 2019 + Heggerty):
 *  - Não reconhece letras           → Fase 1 (consciência fonológica)
 *  - Reconhece letras, não sílabas  → Fase 2 (princípio alfabético)
 *  - Reconhece sílabas, não palavras→ Fase 3 (decodificação silábica)
 *  - Lê palavras, não frases        → Fase 4 (fluência e compreensão)
 *  - Lê frases, não textos          → Fase 5 (ortografia inicial)
 *  - Lê textos com naturalidade     → Fase 6 (fluência verdadeira)
 *
 * Idade também trava: menor de 4 anos nunca começa depois da Fase 2.
 */
export function recomendarFaseAurora(
  step6: Step6ParaAurora | null | undefined,
  idade: number | null | undefined,
): RecomendacaoAurora {
  const s = step6 ?? {};
  const letras = s.reconhece_letras ?? 0;
  const silabas = s.reconhece_silabas ?? 0;
  const palavras = s.le_palavras ?? 0;
  const frases = s.le_frases ?? 0;
  const textos = s.le_textos ?? 0;

  let fase: FaseAurora;
  let motivo: string;

  if (textos >= 3) {
    fase = 6;
    motivo = "A criança já lê pequenos textos — vamos trabalhar fluência e prosódia.";
  } else if (frases >= 3) {
    fase = 5;
    motivo = "A criança já lê frases — vamos consolidar a ortografia inicial (LH, NH, R/RR…).";
  } else if (palavras >= 3) {
    fase = 4;
    motivo = "A criança já lê palavras — vamos avançar para frases e compreensão.";
  } else if (silabas >= 2) {
    fase = 3;
    motivo = "A criança reconhece sílabas — vamos juntar sílabas para ler palavras.";
  } else if (letras >= 2) {
    fase = 2;
    motivo = "A criança reconhece letras — vamos ligar cada letra ao seu som.";
  } else {
    fase = 1;
    motivo = "Vamos começar pelo início: ouvir e brincar com os sons das palavras.";
  }

  // Trava por idade — sob 4 anos, no máximo Fase 2.
  if (typeof idade === "number" && idade > 0 && idade < 4 && fase > 2) {
    fase = 2;
    motivo = "A criança tem menos de 4 anos — começamos pelo princípio alfabético, sem pressa.";
  }

  return {
    fase,
    nome: NOMES_FASE[fase],
    motivo,
    slugInicial: SLUG_INICIAL[fase],
  };
}
