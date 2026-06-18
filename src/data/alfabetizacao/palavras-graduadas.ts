// ============================================================
// Banco de PALAVRAS GRADUADAS
// Cada palavra é classificada por:
//  - silabas:    quantidade (1 a 5)
//  - frequencia: "muito-alta" | "alta" | "media" | "baixa"
//  - complexidade fonológica: 1 a 5
//      1 = CV simples (BO-LA)
//      2 = CV repetido com sílabas conhecidas (BA-NA-NA)
//      3 = CVC ou ditongo (PEI-XE, MAR)
//      4 = encontro consonantal (PRA-TO, FLO-RES-TA)
//      5 = dígrafo / sílaba complexa (CHU-VA, PAS-SA-RI-NHO)
//  - nivel: 1 a 5 — índice composto (dificuldade global)
//      derivado de  ceil((silabas + complexidade + pesoFrequencia)/3)
// ============================================================

export type Frequencia = "muito-alta" | "alta" | "media" | "baixa";

export interface PalavraGraduada {
  palavra: string;          // sempre em maiúsculas, com hífen entre sílabas opcional
  silabas: string[];        // ["BO", "LA"]
  qtdSilabas: number;
  frequencia: Frequencia;
  complexidade: 1 | 2 | 3 | 4 | 5;
  nivel: 1 | 2 | 3 | 4 | 5;
  tags?: string[];          // ex: ["animal", "fruta", "cotidiano"]
}

const PESO_FREQ: Record<Frequencia, number> = {
  "muito-alta": 1,
  alta: 2,
  media: 3,
  baixa: 4,
};

function calcNivel(
  qtdSilabas: number,
  complexidade: number,
  frequencia: Frequencia,
): 1 | 2 | 3 | 4 | 5 {
  const score = Math.ceil((qtdSilabas + complexidade + PESO_FREQ[frequencia]) / 3);
  return Math.max(1, Math.min(5, score)) as 1 | 2 | 3 | 4 | 5;
}

function p(
  silabas: string[],
  frequencia: Frequencia,
  complexidade: 1 | 2 | 3 | 4 | 5,
  tags: string[] = [],
): PalavraGraduada {
  const palavra = silabas.join("");
  const qtdSilabas = silabas.length;
  return {
    palavra,
    silabas,
    qtdSilabas,
    frequencia,
    complexidade,
    nivel: calcNivel(qtdSilabas, complexidade, frequencia),
    tags,
  };
}

// ────────────────────────────────────────────────────────────
// Banco inicial — categorizado por tema, varia em todas as dimensões
// ────────────────────────────────────────────────────────────
export const PALAVRAS_GRADUADAS: PalavraGraduada[] = [
  // 1 sílaba — CV simples / CVC
  p(["SOL"], "muito-alta", 1, ["natureza"]),
  p(["LUA"], "muito-alta", 1, ["natureza"]),
  p(["PÉ"], "muito-alta", 1, ["corpo"]),
  p(["MÃO"], "muito-alta", 1, ["corpo"]),
  p(["MAR"], "alta", 3, ["natureza"]),
  p(["PÃO"], "muito-alta", 1, ["comida"]),
  p(["FLOR"], "alta", 4, ["natureza"]),
  p(["CRUZ"], "media", 4),

  // 2 sílabas — base CV
  p(["BO", "LA"], "muito-alta", 1, ["brinquedo"]),
  p(["CA", "SA"], "muito-alta", 1, ["lugar"]),
  p(["GA", "TO"], "muito-alta", 1, ["animal"]),
  p(["PA", "TO"], "muito-alta", 1, ["animal"]),
  p(["RA", "TO"], "alta", 1, ["animal"]),
  p(["SA", "PO"], "alta", 1, ["animal"]),
  p(["VA", "CA"], "alta", 1, ["animal"]),
  p(["MA", "ÇÃ"], "muito-alta", 2, ["fruta"]),
  p(["ME", "SA"], "muito-alta", 1, ["objeto"]),
  p(["LI", "VRO"], "alta", 4, ["objeto"]),
  p(["PEI", "XE"], "alta", 3, ["animal"]),
  p(["CHU", "VA"], "alta", 5, ["natureza"]),
  p(["FO", "GO"], "alta", 1, ["natureza"]),
  p(["PRA", "TO"], "alta", 4, ["objeto"]),

  // 3 sílabas
  p(["BA", "NA", "NA"], "muito-alta", 2, ["fruta"]),
  p(["MO", "RAN", "GO"], "alta", 3, ["fruta"]),
  p(["CA", "VA", "LO"], "alta", 1, ["animal"]),
  p(["MA", "CA", "CO"], "alta", 1, ["animal"]),
  p(["SA", "PA", "TO"], "alta", 1, ["roupa"]),
  p(["CA", "CHO", "RRO"], "muito-alta", 5, ["animal"]),
  p(["JA", "NE", "LA"], "alta", 1, ["lugar"]),
  p(["ES", "CO", "LA"], "muito-alta", 3, ["lugar"]),
  p(["GE", "LA", "DO"], "media", 1),
  p(["CHO", "CO", "LA"], "alta", 5, ["comida"]),

  // 4 sílabas
  p(["BOR", "BO", "LE", "TA"], "alta", 3, ["animal"]),
  p(["TE", "LE", "FO", "NE"], "alta", 1, ["objeto"]),
  p(["TE", "LE", "VI", "SÃO"], "alta", 3, ["objeto"]),
  p(["CO", "MI", "DI", "NHA"], "media", 5, ["comida"]),
  p(["PAS", "SA", "RI", "NHO"], "media", 5, ["animal"]),
  p(["BRIN", "CA", "DEI", "RA"], "alta", 4, ["lazer"]),

  // 5 sílabas
  p(["DI", "NOS", "SAU", "RO"], "alta", 4, ["animal"]),
  p(["HE", "LI", "CÓP", "TE", "RO"], "media", 4, ["transporte"]),
  p(["CA", "LEN", "DA", "RI", "O"], "baixa", 3),
];

// ────────────────────────────────────────────────────────────
// Índices auxiliares para consulta rápida pelo gerador de atividades
// ────────────────────────────────────────────────────────────
export const PALAVRAS_POR_NIVEL: Record<1 | 2 | 3 | 4 | 5, PalavraGraduada[]> = {
  1: PALAVRAS_GRADUADAS.filter((w) => w.nivel === 1),
  2: PALAVRAS_GRADUADAS.filter((w) => w.nivel === 2),
  3: PALAVRAS_GRADUADAS.filter((w) => w.nivel === 3),
  4: PALAVRAS_GRADUADAS.filter((w) => w.nivel === 4),
  5: PALAVRAS_GRADUADAS.filter((w) => w.nivel === 5),
};

export const PALAVRAS_POR_SILABAS: Record<number, PalavraGraduada[]> =
  PALAVRAS_GRADUADAS.reduce<Record<number, PalavraGraduada[]>>((acc, w) => {
    (acc[w.qtdSilabas] ||= []).push(w);
    return acc;
  }, {});

export const PALAVRAS_POR_FREQUENCIA: Record<Frequencia, PalavraGraduada[]> = {
  "muito-alta": PALAVRAS_GRADUADAS.filter((w) => w.frequencia === "muito-alta"),
  alta: PALAVRAS_GRADUADAS.filter((w) => w.frequencia === "alta"),
  media: PALAVRAS_GRADUADAS.filter((w) => w.frequencia === "media"),
  baixa: PALAVRAS_GRADUADAS.filter((w) => w.frequencia === "baixa"),
};

// ────────────────────────────────────────────────────────────
// Seleção adaptativa: pega N palavras para o nível-alvo,
// preferindo as de frequência mais alta primeiro.
// ────────────────────────────────────────────────────────────
export function selecionarPalavras(
  nivelAlvo: 1 | 2 | 3 | 4 | 5,
  quantidade: number,
  filtros?: { qtdSilabas?: number; tag?: string },
): PalavraGraduada[] {
  const ordemFreq: Frequencia[] = ["muito-alta", "alta", "media", "baixa"];
  let pool = PALAVRAS_POR_NIVEL[nivelAlvo];
  if (filtros?.qtdSilabas) pool = pool.filter((w) => w.qtdSilabas === filtros.qtdSilabas);
  if (filtros?.tag) pool = pool.filter((w) => w.tags?.includes(filtros.tag!));

  const ordenadas = [...pool].sort(
    (a, b) => ordemFreq.indexOf(a.frequencia) - ordemFreq.indexOf(b.frequencia),
  );
  return ordenadas.slice(0, quantidade);
}
