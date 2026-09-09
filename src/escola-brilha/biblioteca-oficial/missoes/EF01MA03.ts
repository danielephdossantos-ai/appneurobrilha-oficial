import type { MissaoOficial } from "../types";

/**
 * EF01MA03 — Missão Oficial
 * BNCC: Estimar e comparar quantidades de objetos de dois conjuntos
 * (em torno de 20 elementos), por estimativa e/ou por correspondência
 * (um a um, dois a dois), para indicar "tem mais", "tem menos" ou
 * "tem a mesma quantidade".
 */
const missao: MissaoOficial = {
  codigo: "EF01MA03",
  etapa: "Ensino Fundamental",
  ano: "1º Ano",
  disciplina: "Matemática",
  unidadeTematica: "Números",
  objetoConhecimento:
    "Quantificação de elementos de uma coleção: estimativas, contagem um a um, pareamento ou outros agrupamentos e comparação",

  missaoPrincipal: {
    titulo: "Quem tem mais? Quem tem menos?",
    descricao:
      "Comparar dois montinhos de coisas e descobrir qual tem MAIS, qual tem MENOS ou se estão IGUAIS.",
  },

  narrativa: {
    titulo: "A merenda do Pip e da Pipa",
    contexto:
      "Pip trouxe uvas na lancheira. Pipa trouxe morangos. Os dois querem saber quem trouxe mais fruta.",
    problema:
      "Sem contar tudo, dá pra descobrir só olhando e emparelhando? A recreio começa já!",
    convite: "Bora ajudar Pip e Pipa a comparar sem se enrolar?",
  },

  explicacao: {
    texto:
      "Pra comparar duas quantidades, a gente pode ESTIMAR (só olhando) ou fazer CORRESPONDÊNCIA: coloca um item do grupo A ao lado de um item do grupo B. Se sobrou em A, A tem MAIS. Se sobrou em B, B tem MAIS. Se acabou junto, é IGUAL.",
    niveis: {
      nivel1: "Compare colocando lado a lado: um pra cá, um pra lá.",
      nivel2: "Se sobrar de um lado, esse lado tem MAIS.",
      nivel3: "Se acabar ao mesmo tempo, tem a MESMA quantidade.",
      nivel4: "Na vida: pares de meias — se sobra uma, tem uma a mais.",
    },
  },

  exemplos: [
    {
      enunciado: "Pip tem 7 uvas. Pipa tem 5 morangos. Quem tem mais?",
      passos: [
        "Coloque cada uva ao lado de um morango (um pra um).",
        "Depois de 5 pares, sobraram 2 uvas sem par.",
        "Sobrou do lado do Pip → Pip tem MAIS.",
      ],
      resposta: "Pip tem mais (2 a mais).",
      contextoCotidiano: "Comparar frutas na lancheira.",
    },
    {
      enunciado: "Uma bandeja com 10 biscoitos e outra com 10 biscoitos.",
      passos: [
        "Faça pareamento um a um.",
        "Todos os biscoitos formaram par, nenhum sobrou.",
        "Quantidade IGUAL.",
      ],
      resposta: "Têm a mesma quantidade.",
      contextoCotidiano: "Dividir biscoitos entre dois amigos.",
    },
    {
      enunciado:
        "Olhando de longe: uma cesta parece bem mais cheia que a outra. Isso é o quê?",
      passos: [
        "A gente não contou um por um.",
        "Só comparou o TAMANHO dos montinhos.",
        "Isso se chama ESTIMATIVA.",
      ],
      resposta: "Estimativa (comparação aproximada).",
    },
  ],

  atividades: [
    {
      enunciado:
        "6 carrinhos azuis e 4 carrinhos vermelhos. Fazendo pares, quantos sobram? De qual cor?",
      resposta: "Sobram 2 azuis. Azuis têm MAIS.",
      dica: "Pareie um azul com um vermelho até acabar o vermelho.",
      nivel: "facil",
    },
    {
      enunciado:
        "8 lápis na caixa A e 8 lápis na caixa B. Depois do pareamento, qual tem mais?",
      resposta: "Nenhuma — têm a MESMA quantidade.",
      nivel: "facil",
    },
    {
      enunciado:
        "Olhe rápido: um pote cheio de bolinhas e um pote com 3 bolinhas. Qual tem MENOS?",
      resposta: "O pote com 3 bolinhas tem MENOS (estimativa).",
      nivel: "medio",
    },
    {
      enunciado:
        "9 estrelinhas de um lado e 12 do outro. Sem contar tudo, dá pra saber quem tem mais? Como?",
      resposta:
        "Sim — parear um a um; sobram 3 no lado de 12, então esse lado tem mais.",
      dica: "Parear é comparar sem precisar do resultado exato.",
      nivel: "medio",
    },
  ],

  desafios: [
    {
      enunciado:
        "Time A tem 15 bolinhas de gude. Time B tem 18. Sem somar, use pareamento e diga quantas o time B tem A MAIS.",
      resposta: "3 a mais (as 3 que sobram depois de parear 15 com 15).",
      nivel: "dificil",
    },
    {
      enunciado:
        "Duas caixas parecem cheias iguais, mas uma tem bolas grandes e outra tem bolas pequenas. Estimativa serve aqui?",
      resposta:
        "Não confia — tamanhos diferentes enganam a estimativa. Melhor parear ou contar.",
      nivel: "dificil",
    },
  ],

  quiz: [
    {
      pergunta:
        "No pareamento, se SOBROU item do lado A, o lado A tem…",
      opcoes: ["Menos", "Mais", "A mesma quantidade"],
      correta: 1,
      explicacao: "Sobrou = tem MAIS.",
    },
    {
      pergunta:
        "Dois grupos acabaram ao mesmo tempo no pareamento. Isso quer dizer:",
      opcoes: ["Um tem mais", "Um tem menos", "Têm a mesma quantidade"],
      correta: 2,
      explicacao: "Terminaram juntos → IGUAIS.",
    },
    {
      pergunta:
        "Comparar 'no olhômetro', sem contar tudo, chama-se:",
      opcoes: ["Pareamento", "Estimativa", "Contagem exata"],
      correta: 1,
      explicacao: "Só olhando = estimativa.",
    },
    {
      pergunta:
        "Pip tem 10 figurinhas. Pipa tem 7. Quem tem MENOS?",
      opcoes: ["Pip", "Pipa", "Estão iguais"],
      correta: 1,
      explicacao: "7 é menor que 10, então Pipa tem menos.",
    },
  ],

  resumo: {
    pontos: [
      "MAIS: sobra do lado que tem mais no pareamento.",
      "MENOS: acaba primeiro no pareamento.",
      "IGUAL: acabam juntos, nada sobra.",
      "ESTIMATIVA: comparação só olhando, sem contar tudo.",
    ],
    dica: "Na dúvida, pareie um a um — o lado que sobrar tem mais.",
  },

  revisao: {
    retomada:
      "Retomar com objetos reais: tampinhas, feijões, brinquedos. Pareie dois grupos de até 20.",
    perguntasRevisao: [
      {
        pergunta: "Sobrou 2 do lado direito. Qual lado tem mais?",
        resposta: "O lado direito.",
      },
      {
        pergunta: "Pareamento acabou junto. E aí?",
        resposta: "Têm a mesma quantidade.",
      },
      {
        pergunta: "Comparar só olhando é o quê?",
        resposta: "Estimativa.",
      },
    ],
  },

  miniJogo: {
    nome: "Mais, Menos ou Igual",
    tipo: "arrastar",
    descricao:
      "Arrastar itens de dois grupos formando pares e escolher: MAIS, MENOS ou IGUAL.",
  },

  adaptacoes: [
    {
      publico: "TEA",
      estrategias: [
        "Usar sempre os mesmos objetos por rodada.",
        "Cartões visuais com as 3 respostas fixas (MAIS / MENOS / IGUAL).",
      ],
      recursos: ["Bandejas divididas em duas partes"],
    },
    {
      publico: "TDAH",
      estrategias: [
        "Rodadas curtas (até 3 pareamentos).",
        "Reforço imediato ao acertar (som/animação da mascote).",
      ],
    },
    {
      publico: "Dislexia",
      estrategias: [
        "Evitar textos longos — falar as instruções em voz alta.",
        "Ícones grandes ao invés de palavras nas escolhas.",
      ],
    },
    {
      publico: "Discalculia",
      estrategias: [
        "Muito material concreto (tampinhas, feijões).",
        "Cores diferentes por grupo pra ajudar a distinguir.",
      ],
      recursos: ["Tampinhas azuis e vermelhas"],
    },
    {
      publico: "Geral",
      estrategias: ["Fazer o pareamento junto com a criança em voz alta."],
    },
  ],

  objetivos: [
    "Comparar duas coleções usando pareamento um a um.",
    "Identificar 'tem mais', 'tem menos' e 'tem a mesma quantidade'.",
    "Estimar comparações sem contar todos os itens.",
    "Reconhecer quando a estimativa engana (tamanhos diferentes).",
  ],

  competencias: [
    "BNCC Geral 2 — Pensamento científico, crítico e criativo.",
    "Matemática — Números: comparação de quantidades.",
    "Raciocínio lógico: correspondência biunívoca.",
  ],

  meta: {
    versao: "1.0.0",
    atualizadoEm: "2026-07-02",
    autor: "equipe",
  },
};

export default missao;
