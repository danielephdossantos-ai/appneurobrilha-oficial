import type { AulaV4 } from "../../types";

/** Aula 04 · U7 — Probabilidade: experimentos aleatórios e cálculo. */
export const aula04_probabilidade: AulaV4 = {
  slug: "u7-04-probabilidade",
  titulo: "A Matemática da Sorte",
  iconeTrilha: "🎲",
  bncc: ["EF07MA34"],
  duracaoMin: 32,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Sorte tem conta",
    historia:
      "{NOME}, jogar um dado parece pura sorte, mas a matemática sabe exatamente qual é a chance de sair 6: uma em seis. Probabilidade não adivinha o futuro — ela mede o TAMANHO da chance. É assim que a meteorologia diz '70% de chuva' e que o hospital calcula risco.",
  },

  momento02_exploracao: {
    instrucao: "Todo experimento aleatório tem um espaço amostral: a lista de tudo que pode acontecer.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Espaço amostral de três experimentos",
        cabecalhos: ["Experimento", "Resultados possíveis", "Quantos"],
        linhas: [
          { rotulo: "Moeda", valores: ["cara, coroa", 2] },
          { rotulo: "Dado comum", valores: ["1, 2, 3, 4, 5, 6", 6] },
          { rotulo: "Sorteio de 1 carta de 4", valores: ["A, B, C, D", 4] },
        ],
      },
      {
        tipo: "escalaProb",
        itens: [
          { evento: "Sair 7 num dado comum", nivel: "impossivel" },
          { evento: "Sair 6 num dado comum", nivel: "pouco" },
          { evento: "Sair número par num dado", nivel: "provavel" },
          { evento: "Sair número menor que 6", nivel: "muito" },
          { evento: "Sair número de 1 a 6", nivel: "certo" },
        ],
      },
      { tipo: "texto", texto: "🔑 P = casos favoráveis ÷ casos possíveis. O resultado fica sempre entre 0 e 1.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que a probabilidade nunca passa de 1 (ou 100%)?",
    pista: "Compare o número de casos favoráveis com o de casos possíveis.",
    revelacao: "Porque os casos favoráveis são sempre uma PARTE dos possíveis. No máximo eles se igualam, e aí P = 1 (evento certo).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Limites da probabilidade",
      passos: [
        { expr: "P(sair 7 no dado) = 0 ÷ 6 = 0", explica: "Evento impossível.", status: "x" },
        { expr: "P(sair 6) = 1 ÷ 6 ≈ 0,167 → 16,7%", explica: "Um caso entre seis.", status: "neutro" },
        {
          expr: "P(sair de 1 a 6) = 6 ÷ 6 = 1 → 100%",
          explica: "Evento certo.",
          status: "ok",
          professor:
            "Todo resultado de probabilidade vive entre 0 e 1. Se sua conta der 1,5 ou um número negativo, houve erro: provavelmente você trocou favoráveis por possíveis na divisão.",
        },
      ],
      fatorada: "0 ≤ P ≤ 1",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Calcular, converter e comparar probabilidades",
    etapas: [
      {
        texto: "FÓRMULA: P(evento) = número de casos favoráveis ÷ número de casos possíveis.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Probabilidade de sair número par num dado",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "P(par) no dado",
            passos: [
              { expr: "favoráveis: 2, 4, 6 → 3", explica: "Conto os pares.", status: "neutro" },
              { expr: "possíveis: 1 a 6 → 6", explica: "Espaço amostral.", status: "neutro" },
              {
                expr: "P = 3 ÷ 6 = 1/2 = 50%",
                explica: "Metade das chances.",
                status: "ok",
                professor:
                  "Simplifique sempre a fração: 3/6 vira 1/2. E lembre que o dado precisa ser honesto (não viciado) para que todos os seis resultados sejam igualmente prováveis.",
              },
            ],
            fatorada: "1/2 = 50%",
          },
          destaque: "Conte os favoráveis com cuidado.",
        },
      },
      {
        texto: "TRÊS LINGUAGENS: fração, decimal e porcentagem dizem a mesma coisa.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Uma bola vermelha entre 5 bolas",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "P(vermelha) = 1/5",
            passos: [
              { expr: "fração: 1/5", explica: "Um favorável em cinco.", status: "neutro" },
              { expr: "decimal: 1 ÷ 5 = 0,2", explica: "Divido.", status: "neutro" },
              { expr: "porcentagem: 0,2 × 100 = 20%", explica: "Mesma chance.", status: "ok" },
            ],
            fatorada: "1/5 = 0,2 = 20%",
          },
          destaque: "Escolha a linguagem que o problema pede.",
        },
      },
      {
        texto: "EVENTO COMPLEMENTAR: a chance de NÃO acontecer é 1 menos a chance de acontecer.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Probabilidade de NÃO sair 6 no dado",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "P(não 6) = 1 − P(6)",
            passos: [
              { expr: "P(6) = 1/6", explica: "Evento original.", status: "neutro" },
              { expr: "P(não 6) = 1 − 1/6 = 5/6", explica: "Complemento.", status: "ok" },
              {
                expr: "5/6 ≈ 83,3%",
                explica: "Bem mais provável.",
                status: "ok",
                professor:
                  "O complemento poupa trabalho: contar os cinco casos favoráveis dá o mesmo resultado, mas em problemas grandes ('pelo menos um') calcular o contrário é muito mais rápido.",
              },
            ],
            fatorada: "5/6",
          },
          destaque: "P(A) + P(não A) = 1.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: numa urna há 4 bolas vermelhas, 3 azuis e 3 verdes. Qual é a probabilidade de sortear uma bola azul?",
    resposta: "3/10 = 30%",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "P(azul)",
      passos: [
        { expr: "total = 4 + 3 + 3 = 10 bolas", explica: "Casos possíveis.", status: "neutro" },
        { expr: "favoráveis = 3 azuis", explica: "Casos favoráveis.", status: "neutro" },
        { expr: "P = 3 ÷ 10 = 0,3 = 30%", explica: "Probabilidade.", status: "ok" },
        {
          expr: "P(não azul) = 7/10 = 70%",
          explica: "Complemento.",
          status: "ok",
          professor:
            "Confira somando todas as cores: 4/10 + 3/10 + 3/10 = 10/10 = 1. Quando o espaço amostral está completo, as probabilidades sempre somam 1.",
        },
      ],
      fatorada: "30%",
      legenda: "Brilha resolve",
    },
    passos: ["Conto o total de casos possíveis.", "Conto os favoráveis.", "Divido e simplifico.", "Converto para porcentagem."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: qual é a probabilidade de sair cara ao jogar uma moeda honesta?",
    dica: "São dois resultados igualmente possíveis.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "P(cara)",
      passos: [
        { expr: "favoráveis = 1 (cara)", explica: "Um resultado.", status: "neutro" },
        { expr: "P = 1 ÷ 2 = 50%", explica: "Metade.", status: "ok" },
      ],
      fatorada: "50%",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "50%" }, { nome: "100%" }, { nome: "25%" }],
      respostaCerta: "50%",
      feedbackAcerto: "🎯 1 em 2.",
      feedbackErro: "A moeda tem dois lados igualmente possíveis, então a chance de cara é 1 ÷ 2 = 50%.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: num dado comum, qual é a probabilidade de sair um número maior que 4?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "P(maior que 4)",
      passos: [
        { expr: "favoráveis: 5 e 6 → 2", explica: "Só dois números.", status: "neutro" },
        { expr: "P = 2 ÷ 6 = 1/3 ≈ 33,3%", explica: "Simplifiquei.", status: "ok" },
      ],
      fatorada: "1/3",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1/3" }, { nome: "1/2" }, { nome: "1/6" }],
      respostaCerta: "1/3",
      feedbackAcerto: "🎯 2 em 6 simplifica para 1/3.",
      feedbackErro: "'Maior que 4' são apenas o 5 e o 6 (o 4 não conta): 2 ÷ 6 = 1/3.",
    },
  },

  momento08_aplicacao: {
    contexto: "Numa rifa escolar foram vendidos 200 bilhetes e sua família comprou 8.",
    problema: "Qual é a chance de a sua família ganhar o prêmio único?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "P(ganhar) = 8 ÷ 200",
      passos: [
        { expr: "favoráveis = 8 bilhetes", explica: "Os seus.", status: "neutro" },
        { expr: "P = 8 ÷ 200 = 0,04", explica: "Divido.", status: "ok" },
        {
          expr: "0,04 × 100 = 4%",
          explica: "Chance de ganhar.",
          status: "ok",
          professor:
            "E a chance de NÃO ganhar é 96%. Comprar o dobro de bilhetes dobra a probabilidade (para 8%), mas ela continua pequena. Probabilidade ajuda a decidir com a cabeça, não com a esperança.",
        },
      ],
      fatorada: "4%",
      legenda: "Aplicação — rifa da escola",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4%" }, { nome: "8%" }, { nome: "40%" }],
      respostaCerta: "4%",
      feedbackAcerto: "🎯 8 ÷ 200 = 0,04.",
      feedbackErro: "8 é a quantidade de bilhetes, não a porcentagem. Divida pelo total: 8 ÷ 200 = 0,04 → 4%.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Experimento aleatório: resultado não é previsível, mas os possíveis são conhecidos.",
      "Espaço amostral é a lista de todos os resultados possíveis.",
      "P = casos favoráveis ÷ casos possíveis.",
      "0 ≤ P ≤ 1 (0 = impossível, 1 = certo).",
      "P(não A) = 1 − P(A).",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "A probabilidade de sair 3 num dado comum é:", opcoes: ["1/6", "1/3", "3/6"], correta: 0, feedbackAcerto: "🎉 Um caso favorável em seis.", feedbackErro: "Existe só um lado com 3, entre seis lados possíveis: P = 1/6." },
      { pergunta: "A probabilidade de um evento impossível é:", opcoes: ["0", "1", "0,5"], correta: 0, feedbackAcerto: "🎉 Nenhum caso favorável.", feedbackErro: "Se não há caso favorável, P = 0 ÷ possíveis = 0. O valor 1 é do evento certo." },
      { pergunta: "Numa urna com 2 bolas brancas e 8 pretas, P(branca) é:", opcoes: ["20%", "25%", "80%"], correta: 0, feedbackAcerto: "🎉 2 ÷ 10 = 0,2.", feedbackErro: "O total é 10 bolas, não 8: P = 2 ÷ 10 = 0,2 → 20%." },
      { pergunta: "Se P(chover) = 30%, então P(não chover) é:", opcoes: ["70%", "30%", "100%"], correta: 0, feedbackAcerto: "🎉 Complemento de 100%.", feedbackErro: "O evento contrário completa 100%: 100 − 30 = 70%." },
      { pergunta: "Ao jogar uma moeda honesta, cara e coroa têm chance de:", opcoes: ["50% cada", "60% e 40%", "depende do último resultado"], correta: 0, feedbackAcerto: "🎉 Moeda honesta é 50/50.", feedbackErro: "Cada jogada é independente das anteriores: a chance continua 50% para cada lado." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Experimento com o dado",
    materiais: ["Um dado", "Caderno"],
    passos: [
      "Jogue o dado 60 vezes e anote cada resultado numa tabela.",
      "Calcule a frequência de cada número e compare com a probabilidade teórica (10 vezes cada).",
      "Discuta por que o resultado real fica PERTO, mas raramente igual ao teórico.",
    ],
    registro: "📸 Foto da tabela dos 60 lançamentos com a comparação.",
  },
  recompensa: { xp: 255, moedas: 135, medalha: "Mestre da Probabilidade" },
};
