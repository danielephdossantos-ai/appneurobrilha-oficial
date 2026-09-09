/**
 * Banco Nacional de Erros Frequentes
 * -----------------------------------
 * Para cada habilidade BNCC, catalogamos:
 *
 *   • erros mais comuns
 *   • possíveis causas
 *   • estratégias para correção
 *   • exemplos corretivos
 *   • novas atividades recomendadas
 *
 * Quando o aluno comete um erro conhecido (via `detectar`), o motor devolve
 * automaticamente a estratégia correspondente para o Player exibir.
 *
 * Sem catálogo específico para uma habilidade, o motor usa entradas
 * GENÉRICAS por disciplina (Matemática, Português, Ciências, etc.),
 * derivadas do prefixo BNCC (MA, LP, CI, HI, GE, AR, EF, ER).
 */

import type { TipoAtividade } from "../atividades";

export type CausaErro =
  | "atencao"
  | "compreensao_enunciado"
  | "lacuna_pre_requisito"
  | "estrategia_incorreta"
  | "confusao_conceitual"
  | "sobrecarga_cognitiva"
  | "leitura_insuficiente"
  | "impulsividade";

export interface EntradaErro {
  /** Chave curta e estável do erro (usada para detecção). */
  chave: string;
  /** Descrição do erro observado. */
  descricao: string;
  /** Palavras/padrões que sugerem esse erro (case-insensitive). */
  sinais: string[];
  causas: CausaErro[];
  estrategias: string[];
  exemplosCorretivos: string[];
  atividadesRecomendadas: TipoAtividade[];
}

export interface CatalogoErrosHabilidade {
  codigoBncc: string;      // "EF01MA01" ou prefixo genérico "MA"
  disciplina: string;
  entradas: EntradaErro[];
}

// =====================================================================
// Catálogos GENÉRICOS por disciplina (fallback)
// =====================================================================

const GEN_MA: EntradaErro[] = [
  {
    chave: "troca_operacao",
    descricao: "Somar quando o problema pedia subtrair (ou vice-versa).",
    sinais: ["mais", "menos", "sobrou", "faltou", "juntou", "tirou"],
    causas: ["compreensao_enunciado", "leitura_insuficiente"],
    estrategias: [
      "Ler o enunciado em voz alta e sublinhar a palavra-chave.",
      "Desenhar a situação antes de escolher a operação.",
    ],
    exemplosCorretivos: [
      "Se sobraram 3 maçãs, começamos com mais e tiramos → é subtração.",
      "Se juntamos os grupos, é adição.",
    ],
    atividadesRecomendadas: ["observacao", "arrastar", "multipla_escolha"],
  },
  {
    chave: "contagem_pulou",
    descricao: "Pular ou repetir número ao contar.",
    sinais: ["3, 4, 6", "7, 9", "conta rápido"],
    causas: ["atencao", "impulsividade"],
    estrategias: [
      "Contar apontando cada objeto uma única vez.",
      "Contar em voz alta e devagar, um número por batida.",
    ],
    exemplosCorretivos: ["1 → 2 → 3 → 4 → 5, tocando cada figura."],
    atividadesRecomendadas: ["observacao", "ordenar"],
  },
  {
    chave: "valor_posicional",
    descricao: "Confundir dezena com unidade (ex: 23 lido como 32).",
    sinais: ["inverteu", "trocou dezena"],
    causas: ["confusao_conceitual", "lacuna_pre_requisito"],
    estrategias: [
      "Usar material dourado ou palitinhos em grupos de 10.",
      "Escrever o número na tabela D | U antes de responder.",
    ],
    exemplosCorretivos: ["23 = 2 dezenas + 3 unidades = 20 + 3."],
    atividadesRecomendadas: ["arrastar", "multipla_escolha", "completar"],
  },
];

const GEN_LP: EntradaErro[] = [
  {
    chave: "troca_letras_som",
    descricao: "Trocar letras com sons próximos (p/b, t/d, f/v, c/g).",
    sinais: ["bato/pato", "dado/tado", "vaca/faca"],
    causas: ["confusao_conceitual", "atencao"],
    estrategias: [
      "Falar a palavra devagar prolongando o som inicial.",
      "Comparar pares mínimos com apoio de imagem.",
    ],
    exemplosCorretivos: ["🐱 gato x 🎂 bolo — o som muda no começo."],
    atividadesRecomendadas: ["completar", "ligar", "multipla_escolha"],
  },
  {
    chave: "omitir_letra",
    descricao: "Comer letras ao escrever (ex: 'caro' por 'carro').",
    sinais: ["caro", "buriga", "boneca sem 'o'"],
    causas: ["atencao", "leitura_insuficiente"],
    estrategias: [
      "Bater palmas por sílaba antes de escrever.",
      "Reler a palavra apontando cada letra.",
    ],
    exemplosCorretivos: ["car-ro → 2 batidas → 5 letras."],
    atividadesRecomendadas: ["completar", "completar", "interpretacao"],
  },
  {
    chave: "ignora_pontuacao",
    descricao: "Ler sem respeitar ponto final ou vírgula.",
    sinais: ["leitura corrida", "sem pausa"],
    causas: ["impulsividade", "compreensao_enunciado"],
    estrategias: [
      "Marcar cada ponto com um respiro visível.",
      "Ler junto com o professor virtual, imitando o ritmo.",
    ],
    exemplosCorretivos: ["'Vamos, comer, vovó.' x 'Vamos comer, vovó.'"],
    atividadesRecomendadas: ["interpretacao", "multipla_escolha"],
  },
];

const GEN_CI: EntradaErro[] = [
  {
    chave: "conclusao_sem_evidencia",
    descricao: "Concluir sem observar o experimento até o fim.",
    sinais: ["chutou", "não observou"],
    causas: ["impulsividade", "atencao"],
    estrategias: [
      "Registrar cada etapa numa tabela antes de concluir.",
      "Repetir a observação com o vídeo em câmera lenta.",
    ],
    exemplosCorretivos: ["Observar → anotar → só depois concluir."],
    atividadesRecomendadas: ["observacao", "multipla_escolha"],
  },
];

const GEN_HI: EntradaErro[] = [
  {
    chave: "linha_do_tempo",
    descricao: "Confundir a ordem cronológica dos fatos.",
    sinais: ["fora de ordem", "antes/depois trocado"],
    causas: ["confusao_conceitual", "sobrecarga_cognitiva"],
    estrategias: [
      "Montar linha do tempo visual com cartões.",
      "Perguntar sempre: o que veio ANTES disso?",
    ],
    exemplosCorretivos: ["1500 vem antes de 1822."],
    atividadesRecomendadas: ["ordenar", "multipla_escolha"],
  },
];

const GEN_GE: EntradaErro[] = [
  {
    chave: "escala_espacial",
    descricao: "Confundir bairro, cidade, estado e país.",
    sinais: ["bairro/cidade trocados"],
    causas: ["confusao_conceitual"],
    estrategias: ["Usar bonecas russas mentais: bairro dentro da cidade dentro do estado."],
    exemplosCorretivos: ["🏠 casa → 🏘️ bairro → 🏙️ cidade → 🌎 país."],
    atividadesRecomendadas: ["observacao", "multipla_escolha"],
  },
];

const GEN_AR: EntradaErro[] = [
  {
    chave: "copia_sem_expressao",
    descricao: "Reproduzir sem explorar cor, forma ou sentimento.",
    sinais: ["copiou igual", "sem cor"],
    causas: ["compreensao_enunciado"],
    estrategias: ["Perguntar antes: como você se sente vendo isso?"],
    exemplosCorretivos: ["Mesma paisagem com cores quentes x frias."],
    atividadesRecomendadas: ["desenho", "multipla_escolha"],
  },
];

const GEN_EF: EntradaErro[] = [
  {
    chave: "movimento_impreciso",
    descricao: "Realizar o movimento sem sequência ou coordenação.",
    sinais: ["saltou etapas"],
    causas: ["atencao", "sobrecarga_cognitiva"],
    estrategias: ["Quebrar o movimento em 3 passos e treinar um por vez."],
    exemplosCorretivos: ["1) posição inicial → 2) impulso → 3) chegada."],
    atividadesRecomendadas: ["ordenar", "multipla_escolha"],
  },
];

const GEN_ER: EntradaErro[] = [
  {
    chave: "julgamento_sem_respeito",
    descricao: "Julgar outra tradição como certa/errada.",
    sinais: ["errado", "esquisito"],
    causas: ["confusao_conceitual"],
    estrategias: ["Substituir 'errado' por 'diferente' e listar semelhanças."],
    exemplosCorretivos: ["Todas as tradições valorizam a família, de formas diferentes."],
    atividadesRecomendadas: ["multipla_escolha", "completar"],
  },
];

const DISCIPLINA_POR_PREFIXO: Record<string, { disciplina: string; entradas: EntradaErro[] }> = {
  MA: { disciplina: "Matemática", entradas: GEN_MA },
  LP: { disciplina: "Língua Portuguesa", entradas: GEN_LP },
  CI: { disciplina: "Ciências", entradas: GEN_CI },
  HI: { disciplina: "História", entradas: GEN_HI },
  GE: { disciplina: "Geografia", entradas: GEN_GE },
  AR: { disciplina: "Arte", entradas: GEN_AR },
  EF: { disciplina: "Educação Física", entradas: GEN_EF },
  ER: { disciplina: "Ensino Religioso", entradas: GEN_ER },
};

// =====================================================================
// Catálogos ESPECÍFICOS por habilidade (crescem com o tempo)
// =====================================================================

const CATALOGO_ESPECIFICO: Record<string, EntradaErro[]> = {
  EF01MA01: [
    {
      chave: "pular_um_numero",
      descricao: "Contagem de 1 a 20 pulando um número.",
      sinais: ["1,2,3,5", "13,15"],
      causas: ["atencao", "impulsividade"],
      estrategias: [
        "Contar apontando cada bolinha uma vez.",
        "Usar o ritmo: 'um... dois... três...'.",
      ],
      exemplosCorretivos: ["🎈🎈🎈🎈🎈 = 1,2,3,4,5"],
      atividadesRecomendadas: ["observacao", "ordenar"],
    },
    {
      chave: "recitar_sem_contar",
      descricao: "Recitar números decorados sem associar à quantidade.",
      sinais: ["conta sem olhar", "número sem objeto"],
      causas: ["confusao_conceitual"],
      estrategias: ["Tocar cada objeto ao dizer o número (correspondência um-a-um)."],
      exemplosCorretivos: ["🍎(1) 🍎(2) 🍎(3) → total = 3"],
      atividadesRecomendadas: ["observacao", "arrastar"],
    },
  ],
  EF01MA02: [
    {
      chave: "quantidade_maior_menor",
      descricao: "Confundir 'maior que' com 'menor que'.",
      sinais: ["maior", "menor", "mais", "menos"],
      causas: ["confusao_conceitual"],
      estrategias: [
        "Boca do jacaré (>) sempre come o maior.",
        "Comparar duas pilhas de objetos antes de responder.",
      ],
      exemplosCorretivos: ["🍎🍎🍎🍎 (4) > 🍎🍎 (2)"],
      atividadesRecomendadas: ["multipla_escolha", "arrastar"],
    },
  ],
};

function prefixoDisciplina(codigoBncc: string): string {
  const m = codigoBncc.toUpperCase().match(/^EF\d{2}([A-Z]{2})/);
  if (m) return m[1];
  const alt = codigoBncc.toUpperCase().match(/^EI/);
  if (alt) return "LP"; // Educação Infantil aproxima linguagem
  return "MA";
}

export function catalogoDaHabilidade(codigoBncc: string): CatalogoErrosHabilidade {
  const cod = codigoBncc.toUpperCase();
  const especificas = CATALOGO_ESPECIFICO[cod] ?? [];
  const px = prefixoDisciplina(cod);
  const gen = DISCIPLINA_POR_PREFIXO[px] ?? DISCIPLINA_POR_PREFIXO.MA;
  // as específicas têm prioridade — vêm primeiro
  const entradas = [...especificas, ...gen.entradas];
  return { codigoBncc: cod, disciplina: gen.disciplina, entradas };
}

// =====================================================================
// Detecção automática de erro conhecido
// =====================================================================

export interface SinalErroObservado {
  respostaAluno?: string;
  respostaEsperada?: string;
  tempoRespostaMs?: number;
  tentativas?: number;
  usouDica?: boolean;
  chavePista?: string; // se a atividade já sabe qual erro categorizar
}

export interface DeteccaoErro {
  entrada: EntradaErro;
  confianca: number;   // 0-1
  estrategiaSugerida: string;
  exemploCorretivo: string;
  atividadesRecomendadas: TipoAtividade[];
}

function normaliza(s: string): string {
  return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function detectarErro(
  codigoBncc: string,
  sinal: SinalErroObservado,
): DeteccaoErro | null {
  const cat = catalogoDaHabilidade(codigoBncc);

  // 1) chave explícita da atividade — match direto
  if (sinal.chavePista) {
    const chave = sinal.chavePista;
    const hit = cat.entradas.find((e) => e.chave === chave);
    if (hit) return montar(hit, 1);
  }

  // 2) match por sinais na resposta do aluno
  const resposta = normaliza(sinal.respostaAluno ?? "");
  if (resposta) {
    let melhor: { e: EntradaErro; hits: number } | null = null;
    for (const e of cat.entradas) {
      const hits = e.sinais.reduce(
        (acc, s) => acc + (resposta.includes(normaliza(s)) ? 1 : 0),
        0,
      );
      if (hits > 0 && (!melhor || hits > melhor.hits)) melhor = { e, hits };
    }
    if (melhor) {
      const conf = Math.min(1, 0.5 + melhor.hits * 0.2);
      return montar(melhor.e, conf);
    }
  }

  // 3) heurística por tentativas/tempo/dica — devolve entrada genérica de atenção
  const muitasTentativas = (sinal.tentativas ?? 1) >= 3;
  const respostaLenta = (sinal.tempoRespostaMs ?? 0) > 45_000;
  if (muitasTentativas || respostaLenta || sinal.usouDica) {
    const generica: EntradaErro = {
      chave: muitasTentativas ? "muitas_tentativas" : respostaLenta ? "tempo_alto" : "usou_dica",
      descricao: muitasTentativas
        ? "Várias tentativas sem acertar."
        : respostaLenta
          ? "Levou muito tempo para responder."
          : "Precisou de dica para responder.",
      sinais: [],
      causas: ["atencao", "sobrecarga_cognitiva"],
      estrategias: [
        "Simplificar o enunciado e reduzir o número de opções.",
        "Reexplicar em outro estilo (visual, exemplos, passo a passo).",
        "Fazer uma pausa curta antes da próxima questão.",
      ],
      exemplosCorretivos: ["Vamos por partes: primeiro entender, depois responder."],
      atividadesRecomendadas: ["observacao", "multipla_escolha"],
    };
    return montar(generica, 0.5);
  }

  return null;
}

function montar(e: EntradaErro, confianca: number): DeteccaoErro {
  return {
    entrada: e,
    confianca,
    estrategiaSugerida: e.estrategias[0] ?? "Reexplicar com outro estilo.",
    exemploCorretivo: e.exemplosCorretivos[0] ?? "",
    atividadesRecomendadas: e.atividadesRecomendadas,
  };
}

// =====================================================================
// Fachada
// =====================================================================

export const BancoErrosFrequentes = {
  catalogo: catalogoDaHabilidade,
  detectar: detectarErro,
  disciplinas: DISCIPLINA_POR_PREFIXO,
};

export type BancoErrosFrequentesAPI = typeof BancoErrosFrequentes;
