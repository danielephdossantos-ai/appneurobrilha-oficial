/**
 * Sondagem Inicial de Leitura — 1º Ano (Fase 9)
 * ------------------------------------------------------------------
 * 8 itens curtos, todos falados, do mais simples (som inicial) ao mais
 * difícil (compreensão de frase). O resultado NÃO trava nada: ele só
 * SUGERE por onde a criança deve começar a trilha, para que quem já
 * decodifica não perca tempo e quem ainda não ouve os sons comece no
 * lugar certo (consciência fonêmica).
 */

export type ItemSondagem = {
  id: string;
  /** O que a professora fala em voz alta. */
  fala: string;
  /** Pergunta escrita (adulto acompanha). */
  pergunta: string;
  opcoes: string[];
  correta: number;
  /** Habilidade sondada — usada no relatório do responsável. */
  habilidade: string;
};

export const ITENS_SONDAGEM: ItemSondagem[] = [
  {
    id: "s1",
    fala: "Qual palavra começa com o som mmm? Mala, bola ou pato?",
    pergunta: "Qual começa com o som /m/?",
    opcoes: ["MALA", "BOLA", "PATO"],
    correta: 0,
    habilidade: "Som inicial (consciência fonêmica)",
  },
  {
    id: "s2",
    fala: "Toque na letra que faz o som aaa.",
    pergunta: "Qual letra faz o som /a/?",
    opcoes: ["A", "M", "T"],
    correta: 0,
    habilidade: "Letra e som (relação grafema–fonema)",
  },
  {
    id: "s3",
    fala: "Toque na sílaba bá.",
    pergunta: "Onde está BA?",
    opcoes: ["DA", "BA", "PA"],
    correta: 1,
    habilidade: "Leitura de sílaba simples",
  },
  {
    id: "s4",
    fala: "Toque na palavra bola.",
    pergunta: "Onde está BOLA?",
    opcoes: ["BOCA", "MOLA", "BOLA"],
    correta: 2,
    habilidade: "Leitura de palavra de 2 sílabas",
  },
  {
    id: "s5",
    fala: "Toque na palavra sapato.",
    pergunta: "Onde está SAPATO?",
    opcoes: ["SAPATO", "SABONETE", "SAPINHO"],
    correta: 0,
    habilidade: "Leitura de palavra de 3 sílabas",
  },
  {
    id: "s6",
    fala: "Toque na palavrinha teimosa muito.",
    pergunta: "Onde está MUITO?",
    opcoes: ["MUITO", "MUNDO", "MUITA"],
    correta: 0,
    habilidade: "Palavra de alta frequência (irregular)",
  },
  {
    id: "s7",
    fala: "Toque na frase que diz: o gato dorme.",
    pergunta: "Qual frase diz: O GATO DORME.?",
    opcoes: ["O GATO CORRE.", "O GATO DORME.", "O PATO DORME."],
    correta: 1,
    habilidade: "Leitura de frase",
  },
  {
    id: "s8",
    fala:
      "Ouça: A LUA APARECE À NOITE. Agora responda: quando a lua aparece?",
    pergunta: "A LUA APARECE À NOITE. Quando a lua aparece?",
    opcoes: ["De manhã", "À noite", "No almoço"],
    correta: 1,
    habilidade: "Compreensão de frase lida",
  },
];

export type ResultadoSondagem = {
  acertos: number;
  total: number;
  /** Slug da unidade sugerida como ponto de entrada. */
  unidadeSugerida: string;
  tituloUnidade: string;
  mensagem: string;
  feitoEm: string;
  erros: string[];
};

export function avaliarSondagem(
  respostas: number[],
): Omit<ResultadoSondagem, "feitoEm"> {
  let acertos = 0;
  const erros: string[] = [];
  ITENS_SONDAGEM.forEach((item, i) => {
    if (respostas[i] === item.correta) acertos += 1;
    else erros.push(item.habilidade);
  });

  if (acertos <= 2) {
    return {
      acertos,
      total: ITENS_SONDAGEM.length,
      unidadeSugerida: "unidade-7-ouvido-magico",
      tituloUnidade: "Unidade 1 — O Ouvido Mágico",
      mensagem:
        "Vamos começar do começo, ouvindo os sons das palavras. É assim que a leitura nasce — e é rápido!",
      erros,
    };
  }
  if (acertos <= 4) {
    return {
      acertos,
      total: ITENS_SONDAGEM.length,
      unidadeSugerida: "unidade-1-alfabeto-magico",
      tituloUnidade: "Unidade 2 — As chaves do alfabeto",
      mensagem:
        "Você já ouve os sons! Agora vamos casar cada som com a letra dele.",
      erros,
    };
  }
  if (acertos <= 6) {
    return {
      acertos,
      total: ITENS_SONDAGEM.length,
      unidadeSugerida: "unidade-2-fabrica-de-silabas",
      tituloUnidade: "Unidade 3 — Sílabas",
      mensagem:
        "Você já conhece as letras. Bora juntar em sílabas e formar palavras!",
      erros,
    };
  }
  return {
    acertos,
    total: ITENS_SONDAGEM.length,
    unidadeSugerida: "unidade-3-palavras-viram-frases",
    tituloUnidade: "Unidade 4 — Palavras viram frases",
    mensagem:
      "Uau! Você já lê palavras. Vamos direto para as frases e os textos.",
    erros,
  };
}

export const CHAVE_SONDAGEM = (cursoSlug: string) =>
  `eb.v4.sondagem.${cursoSlug}`;

export function lerSondagem(cursoSlug: string): ResultadoSondagem | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CHAVE_SONDAGEM(cursoSlug));
    return raw ? (JSON.parse(raw) as ResultadoSondagem) : null;
  } catch {
    return null;
  }
}

export function salvarSondagem(cursoSlug: string, r: ResultadoSondagem) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CHAVE_SONDAGEM(cursoSlug), JSON.stringify(r));
  } catch {
    /* ignore */
  }
}

export function limparSondagem(cursoSlug: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(CHAVE_SONDAGEM(cursoSlug));
  } catch {
    /* ignore */
  }
}
