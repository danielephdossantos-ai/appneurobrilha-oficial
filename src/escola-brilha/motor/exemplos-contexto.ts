/**
 * Exemplos por Contexto — Motor Pedagógico
 * -----------------------------------------
 * Cada habilidade BNCC recebe UM CONJUNTO de exemplos pedagógicos
 * variados, sempre ancorados em contextos concretos da vida da criança.
 *
 * Contextos padrão (obrigatórios como catálogo):
 *   família · escola · animais · natureza · esportes · alimentação
 *   brincadeiras · tecnologia · cultura brasileira · situações do cotidiano
 *
 * Regras:
 *   • Todo exemplo DEVE facilitar a compreensão da habilidade.
 *   • O objetivo pedagógico da BNCC NUNCA é alterado (só o contexto).
 *   • Se a habilidade tiver exemplos curados (`EXEMPLOS_CURADOS[codigo]`),
 *     eles vêm primeiro. Caso contrário, o gerador procedural garante
 *     pelo menos um exemplo por contexto solicitado.
 */

export type ContextoExemplo =
  | "familia"
  | "escola"
  | "animais"
  | "natureza"
  | "esportes"
  | "alimentacao"
  | "brincadeiras"
  | "tecnologia"
  | "cultura_brasileira"
  | "cotidiano";

export const CONTEXTOS: ContextoExemplo[] = [
  "familia",
  "escola",
  "animais",
  "natureza",
  "esportes",
  "alimentacao",
  "brincadeiras",
  "tecnologia",
  "cultura_brasileira",
  "cotidiano",
];

export const NOMES_CONTEXTO: Record<ContextoExemplo, string> = {
  familia: "Família",
  escola: "Escola",
  animais: "Animais",
  natureza: "Natureza",
  esportes: "Esportes",
  alimentacao: "Alimentação",
  brincadeiras: "Brincadeiras",
  tecnologia: "Tecnologia",
  cultura_brasileira: "Cultura Brasileira",
  cotidiano: "Cotidiano",
};

export const EMOJI_CONTEXTO: Record<ContextoExemplo, string> = {
  familia: "👨‍👩‍👧",
  escola: "🏫",
  animais: "🐶",
  natureza: "🌳",
  esportes: "⚽",
  alimentacao: "🍎",
  brincadeiras: "🪁",
  tecnologia: "💻",
  cultura_brasileira: "🇧🇷",
  cotidiano: "🏠",
};

/** Cenas concretas usadas pelo gerador procedural. */
const CENAS: Record<ContextoExemplo, string[]> = {
  familia: [
    "no almoço em família",
    "ajudando a mãe a arrumar a mesa",
    "brincando com o irmão mais novo",
    "no aniversário do primo",
  ],
  escola: [
    "na sala de aula",
    "no recreio com os colegas",
    "na hora do lanche",
    "durante a atividade em grupo",
  ],
  animais: [
    "passeando com o cachorro",
    "observando as formigas no jardim",
    "no zoológico",
    "cuidando do gato de estimação",
  ],
  natureza: [
    "no parque",
    "olhando as nuvens",
    "colhendo folhas no jardim",
    "assistindo à chuva pela janela",
  ],
  esportes: [
    "jogando futebol na praça",
    "andando de bicicleta",
    "pulando corda",
    "correndo com os amigos",
  ],
  alimentacao: [
    "preparando um lanche",
    "escolhendo frutas na feira",
    "dividindo o bolo em pedaços iguais",
    "montando a marmita",
  ],
  brincadeiras: [
    "brincando de esconde-esconde",
    "montando um quebra-cabeça",
    "fazendo um desenho",
    "brincando de mercadinho",
  ],
  tecnologia: [
    "usando o tablet para aprender",
    "assistindo a um vídeo educativo",
    "conversando por vídeo com a avó",
    "gravando um áudio no celular",
  ],
  cultura_brasileira: [
    "na festa junina",
    "ouvindo uma cantiga popular",
    "provando comidas típicas do Brasil",
    "brincando de amarelinha",
  ],
  cotidiano: [
    "indo ao mercado",
    "esperando o ônibus",
    "arrumando o quarto",
    "escovando os dentes antes de dormir",
  ],
};

export type Exemplo = {
  contexto: ContextoExemplo;
  titulo: string;
  cena: string;
  enunciado: string;
  facilita: string;
};

/**
 * Exemplos CURADOS por código BNCC.
 * Chave = código BNCC em UPPERCASE. Adicione entradas conforme cada
 * habilidade for produzida com curadoria fina — o gerador procedural
 * cobre as demais automaticamente para nunca deixar habilidade sem
 * exemplos.
 */
export const EXEMPLOS_CURADOS: Record<string, Exemplo[]> = {};

/**
 * Gera um exemplo procedural para uma habilidade num contexto.
 * O gerador é intencionalmente genérico: transforma disciplina + verbo
 * pedagógico + cena num enunciado curto que serve de âncora concreta.
 */
function gerarProcedural(
  codigoBncc: string,
  contexto: ContextoExemplo,
  objetivo: string | undefined,
  idx: number,
): Exemplo {
  const disciplinaSigla = codigoBncc.slice(4, 6).toUpperCase();
  const verboPor: Record<string, string> = {
    MA: "conte, compare ou meça",
    LP: "leia, escreva ou converse sobre",
    CI: "observe e descreva",
    HI: "conte a história de",
    GE: "localize e descreva",
    AR: "represente com desenho ou som",
    EF: "movimente-se e experimente",
    EN: "nomeie em inglês",
    ER: "converse com respeito sobre",
    EO: "explore com todos os sentidos",
  };
  const verbo = verboPor[disciplinaSigla] ?? "observe e explique";
  const cenas = CENAS[contexto];
  const cena = cenas[idx % cenas.length];
  const foco = objetivo && objetivo.length > 0 ? objetivo : "o que está sendo aprendido";

  return {
    contexto,
    titulo: `${EMOJI_CONTEXTO[contexto]} ${NOMES_CONTEXTO[contexto]}`,
    cena,
    enunciado: `${cena.charAt(0).toUpperCase()}${cena.slice(1)}, ${verbo} ${foco}.`,
    facilita:
      `Traz a habilidade para uma cena que a criança já vive, ` +
      `ajudando a conectar o conteúdo abstrato ao ${NOMES_CONTEXTO[contexto].toLowerCase()}.`,
  };
}

export type OpcoesExemplos = {
  /** contextos desejados; padrão = todos */
  contextos?: ContextoExemplo[];
  /** limite total de exemplos retornados; padrão = 6 */
  limite?: number;
  /** objetivo BNCC da habilidade (usado no enunciado procedural) */
  objetivo?: string;
};

/**
 * Retorna a lista final de exemplos para uma habilidade.
 *   1. Curados (se existirem) — filtrados pelos contextos pedidos.
 *   2. Procedurais — preenchem contextos ainda sem exemplo até o limite.
 */
export function exemplosParaHabilidade(
  codigoBncc: string,
  opts: OpcoesExemplos = {},
): Exemplo[] {
  const codigo = (codigoBncc || "").toUpperCase().trim();
  const contextos = opts.contextos && opts.contextos.length > 0 ? opts.contextos : CONTEXTOS;
  const limite = Math.max(1, Math.min(20, opts.limite ?? 6));

  const curados = (EXEMPLOS_CURADOS[codigo] ?? []).filter((e) => contextos.includes(e.contexto));
  const cobertos = new Set(curados.map((e) => e.contexto));

  const procedurais: Exemplo[] = [];
  let i = 0;
  for (const ctx of contextos) {
    if (cobertos.has(ctx)) continue;
    procedurais.push(gerarProcedural(codigo, ctx, opts.objetivo, i));
    i += 1;
  }

  return [...curados, ...procedurais].slice(0, limite);
}

export const ExemplosContexto = {
  contextos: CONTEXTOS,
  nomes: NOMES_CONTEXTO,
  emojis: EMOJI_CONTEXTO,
  para: exemplosParaHabilidade,
  curados: EXEMPLOS_CURADOS,
};
