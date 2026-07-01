import type { MissaoOficial } from "../types";

/**
 * EF01MA02 — Missão Oficial
 * BNCC: Contar de maneira exata ou aproximada, usando estratégias como
 * pareamento e outros agrupamentos.
 */
const missao: MissaoOficial = {
  codigo: "EF01MA02",
  disciplina: "Matemática",
  ano: "1º Ano",

  missaoPrincipal: {
    titulo: "Jeitos Espertos de Contar",
    descricao: "Aprender a contar rápido usando pareamento, agrupamentos e estimativa.",
  },

  narrativa: {
    titulo: "A festa da Lila",
    contexto: "A coelhinha Lila faz aniversário e a mãe pediu ajuda pra contar os brigadeiros.",
    problema: "Contar de um em um vai demorar demais — a festa começa em 5 minutos!",
    convite: "Vamos descobrir jeitos espertos de contar e salvar a festa da Lila?",
  },

  explicacao: {
    texto:
      "Podemos contar de forma EXATA (um a um, sem pular) ou APROXIMADA (chutando perto). Pra ir mais rápido, agrupamos: de 2 em 2 (pareamento), de 5 em 5 ou de 10 em 10.",
    niveis: {
      nivel1: "Contar rápido: junte em grupinhos iguais e conte os grupos.",
      nivel2: "10 dedos: dá pra contar de 2 em 2 (2, 4, 6, 8, 10).",
      nivel3: "Ovos numa caixa de 6: um olhar e você sabe — é agrupamento visual.",
      nivel4: "Na feira: 'mais ou menos 20 bananas' é estimativa, contagem aproximada.",
    },
  },

  exemplos: [
    {
      enunciado: "Como contar 10 meias rapidinho?",
      passos: ["Junte de 2 em 2 (cada par).", "Conte os pares: 1, 2, 3, 4, 5 pares.", "5 pares = 10 meias."],
      resposta: "5 pares = 10 meias.",
      contextoCotidiano: "Guardar meias no armário.",
    },
    {
      enunciado: "Olhar rápido: um punhado de balas parece ter mais ou menos 10.",
      passos: ["Não conte uma a uma.", "Compare com um grupo de 10 conhecido.", "Chute próximo."],
      resposta: "Isso é contagem APROXIMADA.",
    },
  ],

  atividades: [
    {
      enunciado: "Conte 8 lápis agrupando de 2 em 2. Quantos pares?",
      resposta: "4 pares.",
      dica: "8 ÷ 2 = 4.",
      nivel: "facil",
    },
    {
      enunciado: "Numa caixa de ovos com 12, quantos grupinhos de 6?",
      resposta: "2 grupos de 6.",
      nivel: "medio",
    },
    {
      enunciado: "Estime quantas crianças cabem numa sala pequena: 5, 25 ou 200?",
      resposta: "Cerca de 25 — é estimativa razoável.",
      nivel: "medio",
    },
  ],

  desafios: [
    {
      enunciado: "20 brigadeiros na bandeja. Conte de 5 em 5. Quantos grupos?",
      resposta: "4 grupos de 5 = 20.",
      nivel: "dificil",
    },
  ],

  quiz: [
    {
      pergunta: "Contar de 2 em 2 em 10 dedos dá:",
      opcoes: ["3 pares", "5 pares", "10 pares"],
      correta: 1,
      explicacao: "10 ÷ 2 = 5 pares.",
    },
    {
      pergunta: "Chutar 'mais ou menos 20' sem contar um a um é:",
      opcoes: ["Exata", "Aproximada", "Errada"],
      correta: 1,
      explicacao: "É a contagem aproximada (estimativa).",
    },
    {
      pergunta: "Depois de 5, 10, vem…",
      opcoes: ["11", "15", "20"],
      correta: 1,
      explicacao: "De 5 em 5: 5, 10, 15.",
    },
    {
      pergunta: "Qual é melhor pra contar 30 tampinhas rápido?",
      opcoes: ["Uma a uma", "De 10 em 10", "Adivinhar sem olhar"],
      correta: 1,
      explicacao: "Agrupar de 10 em 10 é bem mais rápido.",
    },
  ],

  resumo: {
    pontos: [
      "Contagem exata: uma a uma, sem pular.",
      "Contagem aproximada: chute próximo (estimativa).",
      "Pareamento: de 2 em 2 acelera muito.",
      "Agrupamentos (5, 10) contam grandes quantidades.",
    ],
    dica: "Antes de contar, pergunte: 'dá pra juntar em grupinhos iguais?'.",
  },

  revisao: {
    retomada: "Retomar com objetos reais: tampinhas, dedos, brinquedos.",
    perguntasRevisao: [
      { pergunta: "10 meias em pares dá quantos pares?", resposta: "5 pares." },
      { pergunta: "Estimar é contar exato?", resposta: "Não — é aproximado." },
      { pergunta: "Depois de 10, contando de 5 em 5?", resposta: "15." },
    ],
  },

  miniJogo: {
    nome: "Agrupa & Conta",
    tipo: "arrastar",
    descricao: "Arrastar objetos para formar grupos iguais e contar os grupos.",
  },

  adaptacoes: [
    {
      publico: "TEA",
      estrategias: ["Rotina visual dos grupos.", "Mesma quantidade de itens por rodada."],
      recursos: ["Bandejas com divisórias"],
    },
    {
      publico: "TDAH",
      estrategias: ["Rodadas curtas.", "Reforço imediato ao acertar."],
    },
    {
      publico: "Discalculia",
      estrategias: ["Muitos objetos concretos.", "Grupos coloridos por quantidade."],
      recursos: ["Tampinhas coloridas"],
    },
    {
      publico: "Geral",
      estrategias: ["Contar em voz alta com a criança."],
    },
  ],

  objetivos: [
    "Contar quantidades de forma exata.",
    "Estimar quantidades (aproximada).",
    "Aplicar pareamento (2 em 2).",
    "Usar agrupamentos (5 e 10) pra acelerar.",
  ],

  competencias: [
    "BNCC Geral 2 — Pensamento científico e crítico.",
    "Matemática — Números e operações: estratégias de contagem.",
    "Raciocínio lógico inicial.",
  ],

  meta: {
    versao: "1.0.0",
    atualizadoEm: "2026-07-01",
    autor: "equipe",
  },
};

export default missao;
