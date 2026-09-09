/**
 * Motor de Explicação Inteligente
 * -------------------------------
 * Uma mesma habilidade BNCC pode ser ensinada de 5 formas diferentes:
 *
 *   1. narrativa     — história curta com personagens
 *   2. visual        — ícones/emojis + descrição de imagem mental
 *   3. exemplos      — vários exemplos do dia a dia
 *   4. passo_a_passo — procedimento numerado
 *   5. resumida      — 1 frase-chave direto ao ponto
 *
 * Regras de ouro:
 *  - Nunca alterar o objetivo pedagógico da habilidade BNCC.
 *  - Nunca repetir EXATAMENTE a mesma explicação (histórico persistido).
 *  - Se o aluno errar/pedir ajuda, o motor escolhe AUTOMATICAMENTE outra
 *    forma que ainda não foi usada nesta sessão.
 *  - Se todas as formas já foram usadas, gera uma variante com contexto
 *    novo (via `exemplosParaHabilidade`) para manter a explicação inédita.
 */

import { exemplosParaHabilidade, type ContextoExemplo } from "./exemplos-contexto";

export type EstiloExplicacao =
  | "narrativa"
  | "visual"
  | "exemplos"
  | "passo_a_passo"
  | "resumida";

export const ESTILOS_EXPLICACAO: EstiloExplicacao[] = [
  "narrativa",
  "visual",
  "exemplos",
  "passo_a_passo",
  "resumida",
];

export const NOME_ESTILO: Record<EstiloExplicacao, string> = {
  narrativa: "Explicação Narrativa",
  visual: "Explicação Visual",
  exemplos: "Explicação com Exemplos",
  passo_a_passo: "Explicação Passo a Passo",
  resumida: "Explicação Resumida",
};

export const EMOJI_ESTILO: Record<EstiloExplicacao, string> = {
  narrativa: "📖",
  visual: "🖼️",
  exemplos: "💡",
  passo_a_passo: "🪜",
  resumida: "⚡",
};

export type Explicacao = {
  estilo: EstiloExplicacao;
  nome: string;
  emoji: string;
  titulo: string;
  paragrafos: string[];
  passos?: string[];
  exemplos?: string[];
  visual?: { emoji: string; legenda: string }[];
  variante: number;
  assinatura: string;
};

export type OpcoesExplicacao = {
  codigoBncc: string;
  conceito: string;
  disciplina?: string;
  serie?: string;
  contextos?: ContextoExemplo[];
  /** Estilo desejado; se omitido, o motor decide (rotativo). */
  estilo?: EstiloExplicacao;
  /** Estilos que já foram usados nesta sessão — evitados quando possível. */
  jaUsados?: EstiloExplicacao[];
};

const STORAGE_KEY = "eb_explicacao_hist_v1";

type Historico = Record<string, { estilos: EstiloExplicacao[]; assinaturas: string[] }>;

function carregarHist(): Historico {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}") as Historico;
  } catch {
    return {};
  }
}

function salvarHist(h: Historico) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(h));
  } catch {
    // silencioso
  }
}

function assinar(e: Omit<Explicacao, "assinatura" | "variante">): string {
  const base = [
    e.estilo,
    e.titulo,
    ...(e.paragrafos ?? []),
    ...(e.passos ?? []),
    ...(e.exemplos ?? []),
    ...((e.visual ?? []).map((v) => v.emoji + v.legenda)),
  ].join("|");
  let h = 0;
  for (let i = 0; i < base.length; i++) h = (h * 31 + base.charCodeAt(i)) | 0;
  return `${e.estilo}:${(h >>> 0).toString(36)}`;
}

/**
 * Escolhe o próximo estilo, priorizando:
 *   1) estilo pedido explicitamente
 *   2) estilos ainda NÃO usados nesta sessão
 *   3) estilos ainda NÃO usados no histórico persistido
 *   4) rotativo por rodada
 */
export function proximoEstilo(
  codigoBncc: string,
  jaUsados: EstiloExplicacao[] = [],
  preferido?: EstiloExplicacao,
): EstiloExplicacao {
  if (preferido) return preferido;
  const hist = carregarHist()[codigoBncc]?.estilos ?? [];
  const sessao = new Set(jaUsados);
  const persistido = new Set(hist);
  const inedito = ESTILOS_EXPLICACAO.find((e) => !sessao.has(e) && !persistido.has(e));
  if (inedito) return inedito;
  const inSessao = ESTILOS_EXPLICACAO.find((e) => !sessao.has(e));
  if (inSessao) return inSessao;
  const rodada = hist.length % ESTILOS_EXPLICACAO.length;
  return ESTILOS_EXPLICACAO[rodada];
}

// ---------- construtores por estilo ----------

function narrativa(o: OpcoesExplicacao, variante: number): Explicacao {
  const contextos = o.contextos ?? ["cotidiano", "familia", "escola"];
  const exs = exemplosParaHabilidade(o.codigoBncc, {
    contextos,
    limite: 3,
    objetivo: o.conceito,
  });
  const cena = exs[variante % Math.max(1, exs.length)];
  const partes: string[] = [
    `Era uma vez uma situação bem parecida com a nossa aula de hoje sobre ${o.conceito}.`,
    cena
      ? `${cena.enunciado} Foi aí que apareceu ${o.conceito.toLowerCase()} — e tudo fez sentido.`
      : `Um personagem precisou usar ${o.conceito.toLowerCase()} para resolver um pequeno problema.`,
    `No fim, ele percebeu que ${o.conceito.toLowerCase()} ajuda a gente todo dia.`,
  ];
  return finalizar({
    estilo: "narrativa",
    nome: NOME_ESTILO.narrativa,
    emoji: EMOJI_ESTILO.narrativa,
    titulo: `Uma historinha sobre ${o.conceito}`,
    paragrafos: partes,
  }, variante);
}

function visual(o: OpcoesExplicacao, variante: number): Explicacao {
  const exs = exemplosParaHabilidade(o.codigoBncc, {
    contextos: o.contextos,
    limite: 4,
    objetivo: o.conceito,
  });
  const cenas = exs.slice(0, 4).map((e) => ({
    emoji: e.titulo.split(" ")[0] ?? "✨",
    legenda: e.enunciado,
  }));
  const fallback = [
    { emoji: "👀", legenda: `Observe ${o.conceito.toLowerCase()} ao seu redor.` },
    { emoji: "🧠", legenda: "Imagine a cena na sua cabeça." },
    { emoji: "🎯", legenda: "Aponte para o exemplo que você entendeu." },
  ];
  return finalizar({
    estilo: "visual",
    nome: NOME_ESTILO.visual,
    emoji: EMOJI_ESTILO.visual,
    titulo: `Imagine ${o.conceito}`,
    paragrafos: [
      `Vamos ver ${o.conceito.toLowerCase()} com imagens mentais — sem muita leitura.`,
    ],
    visual: cenas.length > 0 ? cenas : fallback,
  }, variante);
}

function exemplos(o: OpcoesExplicacao, variante: number): Explicacao {
  const exs = exemplosParaHabilidade(o.codigoBncc, {
    contextos: o.contextos,
    limite: 5,
    objetivo: o.conceito,
  });
  const lista = exs.slice(variante % 3, (variante % 3) + 4).map((e) => e.enunciado);
  return finalizar({
    estilo: "exemplos",
    nome: NOME_ESTILO.exemplos,
    emoji: EMOJI_ESTILO.exemplos,
    titulo: `${o.conceito} em exemplos do dia a dia`,
    paragrafos: [
      `A melhor forma de entender ${o.conceito.toLowerCase()} é vendo em situações reais:`,
    ],
    exemplos: lista.length > 0 ? lista : [
      `Um exemplo simples de ${o.conceito.toLowerCase()} em casa.`,
      `Um exemplo de ${o.conceito.toLowerCase()} na escola.`,
      `Um exemplo de ${o.conceito.toLowerCase()} numa brincadeira.`,
    ],
  }, variante);
}

function passoAPasso(o: OpcoesExplicacao, variante: number): Explicacao {
  const passos = [
    `Leia com calma o que a atividade pede sobre ${o.conceito.toLowerCase()}.`,
    `Marque as palavras-chave — o que precisa ser feito?`,
    `Faça um exemplo pequeno primeiro, com números ou objetos simples.`,
    `Confira: o resultado faz sentido para ${o.conceito.toLowerCase()}?`,
    `Se sim, aplique o mesmo caminho no exercício.`,
  ];
  // Gira a ordem em variantes ≥ 1 para nunca ser idêntica.
  const rotacionados =
    variante === 0 ? passos : [...passos.slice(variante % passos.length), ...passos.slice(0, variante % passos.length)];
  return finalizar({
    estilo: "passo_a_passo",
    nome: NOME_ESTILO.passo_a_passo,
    emoji: EMOJI_ESTILO.passo_a_passo,
    titulo: `Como fazer ${o.conceito} passo a passo`,
    paragrafos: [
      `Vamos organizar em passos para ficar fácil de seguir:`,
    ],
    passos: rotacionados,
  }, variante);
}

function resumida(o: OpcoesExplicacao, variante: number): Explicacao {
  const frases = [
    `Em uma frase: ${o.conceito} é o que a gente usa para resolver a atividade de hoje.`,
    `Resumindo: ${o.conceito} aparece sempre que precisamos organizar, comparar ou entender algo.`,
    `Direto ao ponto: sem ${o.conceito.toLowerCase()}, a resposta fica incompleta.`,
  ];
  return finalizar({
    estilo: "resumida",
    nome: NOME_ESTILO.resumida,
    emoji: EMOJI_ESTILO.resumida,
    titulo: `${o.conceito} — versão curta`,
    paragrafos: [frases[variante % frases.length]],
  }, variante);
}

function finalizar(
  base: Omit<Explicacao, "assinatura" | "variante">,
  variante: number,
): Explicacao {
  return { ...base, variante, assinatura: assinar(base) };
}

const CONSTRUTORES: Record<EstiloExplicacao, (o: OpcoesExplicacao, v: number) => Explicacao> = {
  narrativa,
  visual,
  exemplos,
  passo_a_passo: passoAPasso,
  resumida,
};

/**
 * Gera uma explicação inédita. Se a assinatura já existe no histórico,
 * incrementa a variante até encontrar uma combinação nova (nunca repete
 * exatamente a mesma explicação).
 */
export function gerarExplicacao(o: OpcoesExplicacao): Explicacao {
  const estilo = proximoEstilo(o.codigoBncc, o.jaUsados, o.estilo);
  const hist = carregarHist();
  const chave = o.codigoBncc;
  const usadas = new Set(hist[chave]?.assinaturas ?? []);
  let variante = 0;
  let e = CONSTRUTORES[estilo](o, variante);
  while (usadas.has(e.assinatura) && variante < 25) {
    variante += 1;
    e = CONSTRUTORES[estilo](o, variante);
  }
  const registro = hist[chave] ?? { estilos: [], assinaturas: [] };
  registro.estilos = [...registro.estilos, estilo].slice(-20);
  registro.assinaturas = [...registro.assinaturas, e.assinatura].slice(-40);
  hist[chave] = registro;
  salvarHist(hist);
  return e;
}

/**
 * Ao detectar dificuldade (erro, pedido de ajuda, tempo estourado),
 * troca AUTOMATICAMENTE para outra forma de explicar o mesmo conceito.
 */
export function reexplicar(
  o: OpcoesExplicacao,
  atual: Explicacao | null,
): Explicacao {
  const jaUsados = new Set([...(o.jaUsados ?? [])]);
  if (atual) jaUsados.add(atual.estilo);
  return gerarExplicacao({ ...o, jaUsados: Array.from(jaUsados), estilo: undefined });
}

export function reiniciarHistoricoExplicacao(codigoBncc?: string): void {
  if (typeof window === "undefined") return;
  if (!codigoBncc) {
    window.localStorage.removeItem(STORAGE_KEY);
    return;
  }
  const hist = carregarHist();
  delete hist[codigoBncc];
  salvarHist(hist);
}

export const MotorExplicacao = {
  estilos: ESTILOS_EXPLICACAO,
  nomes: NOME_ESTILO,
  emojis: EMOJI_ESTILO,
  proximoEstilo,
  gerar: gerarExplicacao,
  reexplicar,
  reiniciarHistorico: reiniciarHistoricoExplicacao,
};
