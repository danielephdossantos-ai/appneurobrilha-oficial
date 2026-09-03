import type { AulaV4 } from "../../types";

/** Aula 05 · U4 — Sequências recursivas, fórmulas e equivalência. */
export const aula05_sequencias: AulaV4 = {
  slug: "u4-05-sequencias",
  titulo: "Laboratório de Sequências",
  iconeTrilha: "🔢",
  bncc: ["EF07MA14", "EF07MA15", "EF07MA16"],
  duracaoMin: 35,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Descobrir a regra, não apenas o próximo",
    historia: "{NOME}, a sequência 4, 7, 10, 13 cresce de 3 em 3. Mas como achar o centésimo termo sem escrever os 99 anteriores? Hoje você aprende duas formas de descrever sequências e transforma o padrão em uma fórmula.",
  },

  momento02_exploracao: {
    instrucao: "Compare regras que usam o termo anterior com regras que calculam qualquer posição diretamente.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Duas maneiras de produzir uma sequência",
        cabecalhos: ["Sequência", "Regra", "Classificação"],
        linhas: [
          { rotulo: "A", valores: ["4, 7, 10, 13, ...", "comece em 4 e some 3", "recursiva"] },
          { rotulo: "B", valores: ["4, 7, 10, 13, ...", "na posição n, calcule 3n + 1", "não recursiva"] },
          { rotulo: "C", valores: ["2, 4, 8, 16, ...", "dobre o termo anterior", "recursiva"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Regra recursiva depende do termo anterior. Regra não recursiva usa a posição n e encontra o termo diretamente." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que a fórmula 3n + 1 produz 4, 7, 10 e 13?",
    pista: "Substitua n por 1, 2, 3 e 4.",
    revelacao: "3·1 + 1 = 4, 3·2 + 1 = 7, 3·3 + 1 = 10 e 3·4 + 1 = 13. A letra n indica a posição do termo.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "aₙ = 3n + 1",
      passos: [
        { expr: "a₁ = 3·1 + 1 = 4", explica: "Primeira posição.", status: "neutro" },
        { expr: "a₂ = 3·2 + 1 = 7", explica: "Segunda posição.", status: "ok" },
        { expr: "a₃ = 3·3 + 1 = 10", explica: "Terceira posição.", status: "ok" },
        { expr: "a₄ = 3·4 + 1 = 13", explica: "Quarta posição.", status: "ok" },
      ],
      fatorada: "4, 7, 10, 13, ...",
      legenda: "A fórmula gera cada termo pela posição",
    },
  },

  momento04_explicacao: {
    titulo: "Classificar, representar e comparar regras",
    etapas: [
      {
        texto: "REGRA RECURSIVA: informa o primeiro termo e como obter o próximo a partir do anterior.",
        exemploReal: {
          contexto: "Na sequência 5, 9, 13, 17, ... começamos em 5 e somamos 4 a cada passo.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "a₁ = 5; aₙ = aₙ₋₁ + 4",
            passos: [
              { expr: "5 + 4 = 9", explica: "Do primeiro ao segundo.", status: "neutro" },
              { expr: "9 + 4 = 13", explica: "Do segundo ao terceiro.", status: "ok" },
            ],
            fatorada: "Depende do termo anterior",
          },
          destaque: "Sem conhecer o termo anterior, a regra recursiva não avança.",
        },
      },
      {
        texto: "REGRA NÃO RECURSIVA: usa a posição n para calcular diretamente o termo desejado.",
        exemploReal: {
          contexto: "A mesma sequência 5, 9, 13, 17, ... pode ser escrita como aₙ = 4n + 1.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "aₙ = 4n + 1",
            passos: [
              { expr: "a₁ = 4·1 + 1 = 5", explica: "Confere o início.", status: "neutro" },
              { expr: "a₁₀ = 4·10 + 1 = 41", explica: "Vai direto ao décimo termo.", status: "ok" },
            ],
            fatorada: "Não depende do termo anterior",
          },
          destaque: "A fórmula permite saltar para qualquer posição.",
        },
      },
      {
        texto: "EXPRESSÕES EQUIVALENTES podem ter aparências diferentes e gerar exatamente os mesmos termos.",
        exemploReal: {
          contexto: "Compare 4n + 1, 1 + 4n e 5 + 4(n − 1).",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "5 + 4(n − 1)",
            passos: [
              { expr: "5 + 4n − 4", explica: "Aplico a distributiva.", status: "neutro" },
              { expr: "= 4n + 1", explica: "Reduzo os números.", status: "ok" },
              { expr: "1 + 4n = 4n + 1", explica: "A soma pode trocar de ordem.", status: "ok" },
            ],
            fatorada: "As três expressões são equivalentes",
          },
          destaque: "Equivalência é comprovada pela transformação algébrica, não apenas por aparência.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha encontra o 20º termo de 7, 12, 17, 22, ...",
    resposta: "102",
    passos: [
      "A diferença constante é 5, então a regra tem 5n.",
      "Para n = 1, 5·1 = 5; faltam 2 para chegar ao primeiro termo 7.",
      "A fórmula é aₙ = 5n + 2.",
      "a₂₀ = 5·20 + 2 = 102.",
    ],
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "aₙ = 5n + 2",
      passos: [
        { expr: "a₁ = 5·1 + 2 = 7", explica: "Confiro o primeiro termo.", status: "neutro" },
        { expr: "a₂₀ = 5·20 + 2", explica: "Substituo n por 20.", status: "ok" },
        { expr: "= 100 + 2 = 102", explica: "Calculo.", status: "ok" },
      ],
      fatorada: "20º termo = 102",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: classifique a regra 'comece em 6 e some 2 ao termo anterior'.",
    dica: "Pergunte se a regra precisa conhecer o termo anterior.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a classificação?",
      opcoes: [{ nome: "Recursiva" }, { nome: "Não recursiva" }, { nome: "Equação" }, { nome: "Proporção" }],
      respostaCerta: "Recursiva",
      feedbackAcerto: "🎯 A regra usa explicitamente o termo anterior, portanto é recursiva.",
      feedbackErro: "A expressão 'termo anterior' é a pista decisiva: a regra é recursiva.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: qual fórmula gera 3, 7, 11, 15, ...?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha a regra não recursiva:",
      opcoes: [{ nome: "aₙ = 4n − 1" }, { nome: "aₙ = 3n + 1" }, { nome: "aₙ = 4n + 1" }, { nome: "aₙ = n + 4" }],
      respostaCerta: "aₙ = 4n − 1",
      feedbackAcerto: "🎯 A diferença é 4 e, para n = 1, 4·1 − 1 = 3.",
      feedbackErro: "A diferença constante indica 4n. Para o primeiro termo ser 3, subtraímos 1: 4n − 1.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um mosaico tem 6 peças na figura 1 e recebe 3 peças novas a cada figura.",
    problema: "Quantas peças terá a figura 25?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "pₙ = 6 + 3(n − 1)",
      passos: [
        { expr: "pₙ = 6 + 3n − 3 = 3n + 3", explica: "Escrevo fórmula equivalente.", status: "neutro" },
        { expr: "p₂₅ = 3·25 + 3 = 78", explica: "Calculo a posição 25.", status: "ok" },
      ],
      fatorada: "78 peças",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha a quantidade:",
      opcoes: [{ nome: "78 peças" }, { nome: "75 peças" }, { nome: "81 peças" }, { nome: "31 peças" }],
      respostaCerta: "78 peças",
      feedbackAcerto: "🎯 6 + 24 aumentos de 3 = 6 + 72 = 78.",
      feedbackErro: "Da figura 1 à 25 há 24 aumentos: 6 + 3·24 = 78.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Recursiva: depende do termo anterior; não recursiva: calcula pela posição n.",
      "Numa sequência aritmética, a diferença constante aparece multiplicando n.",
      "Teste a fórmula em n = 1 e em mais uma posição antes de aceitá-la.",
      "Expressões diferentes podem ser equivalentes e gerar a mesma sequência.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "A regra 'a₁ = 2 e cada termo é o dobro do anterior' é:", opcoes: ["recursiva", "não recursiva", "uma proporção", "uma equação do 1º grau"], correta: 0, feedbackAcerto: "🎉 Ela depende do termo anterior.", feedbackErro: "Como cada termo é calculado usando o anterior, a regra é recursiva." },
      { pergunta: "Qual é o 10º termo de aₙ = 3n + 2?", opcoes: ["32", "30", "35", "15"], correta: 0, feedbackAcerto: "🎉 a₁₀ = 3·10 + 2 = 32.", feedbackErro: "Substitua n por 10: 30 + 2 = 32." },
      { pergunta: "Qual expressão é equivalente a 8 + 2(n − 1)?", opcoes: ["2n + 6", "2n + 7", "2n + 8", "10n − 1"], correta: 0, feedbackAcerto: "🎉 8 + 2n − 2 = 2n + 6.", feedbackErro: "Distribua o 2 e reduza: 8 + 2n − 2 = 2n + 6." },
      { pergunta: "Qual fórmula gera 5, 8, 11, 14, ...?", opcoes: ["3n + 2", "5n + 3", "3n + 5", "n + 4"], correta: 0, feedbackAcerto: "🎉 A diferença é 3 e 3·1 + 2 = 5.", feedbackErro: "Use 3n por causa da diferença 3 e some 2 para obter o primeiro termo 5." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Padrões da casa",
    materiais: ["Papel", "Lápis", "Objetos pequenos iguais"],
    passos: [
      "Monte uma figura com 4 objetos e acrescente 3 objetos em cada nova figura.",
      "Registre as quantidades das cinco primeiras figuras.",
      "Escreva a regra recursiva e a fórmula pela posição n.",
      "Use a fórmula para prever a figura 20 e confira o cálculo com alguém da família.",
    ],
    registro: "📸 Foto das figuras e do cálculo da fórmula.",
  },
  recompensa: { xp: 240, moedas: 120, medalha: "Detetive de Padrões" },
};
