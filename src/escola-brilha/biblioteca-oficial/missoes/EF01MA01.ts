import type { MissaoOficial } from "../types";

/**
 * EF01MA01 — Aula 001 · Biblioteca Pedagógica Escola Brilha (Coleção 01)
 * Ensino Fundamental I · 1º Ano · Matemática
 * BNCC: Utilizar números naturais como indicador de quantidade ou de ordem
 * em diferentes situações cotidianas e reconhecer códigos de identificação.
 *
 * Duração estimada: 15 a 20 minutos
 * Faixa etária: 6 anos · Nível: Fácil · Pré-requisito: nenhum
 */
const missao: MissaoOficial = {
  codigo: "EF01MA01",
  etapa: "Ensino Fundamental",
  ano: "1º Ano",
  disciplina: "Matemática",
  unidadeTematica: "Números",
  objetoConhecimento:
    "Contagem de rotina, contagem ascendente e descendente e reconhecimento de números no contexto diário",

  missaoPrincipal: {
    titulo: "Os Detetives dos Números",
    descricao:
      "Ajudar o esquilo Brilha a descobrir que os números podem CONTAR, indicar POSIÇÃO ou IDENTIFICAR pessoas, lugares e objetos.",
  },

  narrativa: {
    titulo: "O esquilo Brilha e os números da floresta",
    contexto:
      "O esquilo Brilha acordou animado. Quando saiu da sua casinha, percebeu que os números estavam por toda parte: na árvore havia 3 passarinhos, no lago nadavam 5 peixes, a casa do coelho tinha o número 18 e o ônibus da floresta era o 207.",
    problema:
      "Brilha ficou curioso: 'Será que todos esses números servem para a mesma coisa?'",
    convite: "Vamos ajudá-lo a descobrir!",
  },

  explicacao: {
    texto:
      "Hoje você vai aprender que os números podem servir para três coisas diferentes: contar quantidades, indicar posição (1º, 2º, 3º…) e identificar pessoas, lugares e objetos, como o número de uma casa ou de um ônibus.",
    niveis: {
      nivel1: "Números podem: contar, indicar posição ou identificar.",
      nivel2:
        "5 peixes = contagem. 1º lugar = posição. Casa 18 = identificação.",
      nivel3:
        "Se dá pra contar 1, 2, 3… é quantidade. Se mostra quem chegou antes, é ordem. Se só dá nome ao objeto, é identificação.",
      nivel4:
        "Olhe em casa: idade = contagem; página do livro = ordem; número do apartamento = identificação.",
    },
  },

  exemplos: [
    {
      enunciado: "Na tela aparecem: 🍎🍎🍎🍎. Quantas maçãs existem?",
      passos: [
        "Aponte para cada maçã e conte: 1, 2, 3, 4.",
        "Pare quando não sobrar nenhuma maçã sem contar.",
      ],
      resposta: "4 maçãs — os números também servem para contar.",
      contextoCotidiano: "Contar frutas na fruteira de casa.",
    },
    {
      enunciado:
        "Três crianças correndo: 🥇 Ana, 🥈 Pedro, 🥉 Lucas. Quem chegou em primeiro lugar?",
      passos: [
        "Observe o pódio: o 🥇 é o primeiro colocado.",
        "Ana está com a medalha de ouro.",
      ],
      resposta: "Ana. Quando usamos 1º, 2º ou 3º estamos indicando ORDEM.",
      contextoCotidiano: "Fila do lanche na escola.",
    },
    {
      enunciado: "🏠 Casa 25. O número 25 está contando ou identificando?",
      passos: [
        "Existem 25 casas ali na tela? Não.",
        "O 25 só serve para dizer QUAL é aquela casa.",
      ],
      resposta: "Identificando.",
      contextoCotidiano: "Número da casa onde você mora.",
    },
  ],

  atividades: [
    {
      enunciado:
        "🚌 Ônibus 315. O número serve para contar passageiros ou identificar o ônibus?",
      resposta: "Identificar o ônibus.",
      dica: "Pergunte: existem 315 passageiros ali dentro? Se não, é identificação.",
      nivel: "facil",
    },
    {
      enunciado: "Na tela aparecem ⭐⭐⭐⭐⭐⭐. Quantas estrelas existem?",
      resposta: "6 estrelas.",
      dica: "Conte apontando uma por uma.",
      nivel: "facil",
    },
    {
      enunciado: "Camisa 10 do jogador. Contagem, ordem ou identificação?",
      resposta: "Identificação — o 10 é o número da camisa dele.",
      nivel: "medio",
    },
    {
      enunciado: "Senha 43 na padaria. Contagem, ordem ou identificação?",
      resposta: "Identificação — a senha só identifica sua vez.",
      nivel: "medio",
    },
  ],

  desafios: [
    {
      enunciado:
        "Desafio Brilha: arraste cada item para o lugar certo — Quantidade, Ordem ou Identificação. Itens: 8 bananas · Casa 72 · 2º lugar · Camisa 10 · 5 gatos · Senha 43.",
      resposta:
        "Quantidade: 8 bananas, 5 gatos. Ordem: 2º lugar. Identificação: Casa 72, Camisa 10, Senha 43.",
      nivel: "dificil",
    },
    {
      enunciado:
        "Missão em Casa: procure com a família 5 números diferentes e diga para que cada um serve (ex.: Casa 18 → identifica; 7 bananas → quantidade; 1º colocado → ordem).",
      resposta:
        "Cada número encontrado deve ser classificado em contagem, ordem ou identificação.",
      nivel: "medio",
    },
  ],

  quiz: [
    {
      pergunta: "Existem 9 lápis. O número indica:",
      opcoes: ["Ordem", "Quantidade", "Identificação"],
      correta: 1,
      explicacao: "O 9 está dizendo QUANTOS lápis existem — é quantidade.",
    },
    {
      pergunta: "Casa número 81. O número indica:",
      opcoes: ["Identificação", "Quantidade"],
      correta: 0,
      explicacao: "O 81 apenas identifica qual é aquela casa.",
    },
    {
      pergunta: "Maria ficou em 2º lugar. O número indica:",
      opcoes: ["Ordem", "Quantidade"],
      correta: 0,
      explicacao: "2º mostra a POSIÇÃO em que Maria chegou.",
    },
  ],

  resumo: {
    pontos: [
      "Alguns números contam quantidades.",
      "Outros mostram posição (1º, 2º, 3º…).",
      "Outros identificam pessoas, lugares e objetos.",
      "Os números aparecem em casas, relógios, placas, telefones, calendários e até nas camisas dos jogadores.",
    ],
    dica: "Ao ver um número, pergunte: ele CONTA, ORDENA ou IDENTIFICA?",
  },

  revisao: {
    retomada:
      "Retomar os três usos com exemplos do dia da criança: idade (contagem), lugar na fila (ordem) e número da casa (identificação).",
    perguntasRevisao: [
      { pergunta: "7 bananas — para que serve o número?", resposta: "Quantidade." },
      { pergunta: "Casa 18 — para que serve o número?", resposta: "Identificação." },
      { pergunta: "1º colocado — para que serve o número?", resposta: "Ordem." },
    ],
  },

  miniJogo: {
    nome: "Detetives dos Números",
    tipo: "arrastar",
    descricao:
      "Arraste cada item (8 bananas, Casa 72, 2º lugar, Camisa 10, 5 gatos, Senha 43) para a caixa correta: Quantidade, Ordem ou Identificação.",
    refInterativa: "detetives-dos-numeros",
  },

  adaptacoes: [
    {
      publico: "TEA",
      estrategias: [
        "Cartões visuais fixos para cada categoria (contar/ordem/identificar).",
        "Sequência previsível de fases com sinalização visual entre blocos.",
      ],
      recursos: ["Pictogramas das três categorias", "Cronograma visual da missão"],
    },
    {
      publico: "TDAH",
      estrategias: [
        "Fases curtas com feedback imediato após cada resposta.",
        "Pausas ativas entre a Fase 3 e o Desafio Brilha.",
      ],
      recursos: ["Timer visual", "Recompensas rápidas (XP e moedas)"],
    },
    {
      publico: "Discalculia",
      estrategias: [
        "Manipular objetos reais (tampinhas, frutas) antes de contar na tela.",
        "Repetir o mesmo modelo várias vezes com apoio.",
      ],
      recursos: ["Material dourado ou tampinhas", "Fichas de contagem"],
    },
    {
      publico: "Dislexia",
      estrategias: [
        "Ler enunciados em voz alta com o professor virtual.",
        "Reforçar com ícones (🍎, 🏠, 🚌) além do número escrito.",
      ],
    },
    {
      publico: "Geral",
      estrategias: [
        "Permitir que a criança explique com as próprias palavras.",
        "Valorizar tentativas antes de confirmar a resposta.",
      ],
    },
  ],

  objetivos: [
    "Reconhecer números que contam quantidade.",
    "Reconhecer números que indicam posição (ordem).",
    "Reconhecer números usados como identificação.",
    "Classificar números do cotidiano nas três categorias.",
  ],

  competencias: [
    "BNCC Geral 2 — Pensamento científico, crítico e criativo.",
    "BNCC Geral 4 — Comunicação (leitura de números no cotidiano).",
    "Matemática — Números: significado e uso social.",
    "Letramento matemático inicial.",
  ],

  meta: {
    versao: "2.0.0",
    atualizadoEm: "2026-07-03",
    autor: "equipe",
  },
};

export default missao;
