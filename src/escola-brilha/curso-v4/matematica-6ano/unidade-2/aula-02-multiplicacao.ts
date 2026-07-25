import type { AulaV4 } from "../../types";

export const aula02_multiplicacao: AulaV4 = {
  slug: "u2-02-multiplicacao",
  titulo: "Multiplicação — dois e três algarismos",
  iconeTrilha: "✖️",
  bncc: ["EF06MA03"],
  duracaoMin: 24,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Multiplicar em escala",
    historia:
      "{NOME}, no Laboratório multiplicamos em ESCALA. 245 × 12? 348 × 25? Vamos montar direitinho e usar a tabuada como ferramenta.",
  },

  momento02_exploracao: {
    instrucao: "A tabuada é o mapa. Ela responde os produtos básicos.",
    cenas: [
      { tipo: "texto", texto: "Regra: multiplique por CADA algarismo do 2º número; desloque a linha uma casa pra ESQUERDA em cada nível.", destaque: true },
      { tipo: "tabuada", fator: 7, titulo: "Tabuada do 7 (referência)" },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Quanto é 245 × 12?",
    pista: "Multiplique 245 × 2 (unidade) e 245 × 1 (dezena, com 0 no fim).",
    revelacao: "245 × 12 = 2.940. Somando 490 + 2450.",
  },

  momento04_explicacao: {
    titulo: "Multiplicação em duas linhas",
    etapas: [
      {
        texto: "Multiplique 245 pela UNIDADE (2) do multiplicador.",
        exemploReal: {
          contexto: "245 × 2",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [245, 2],
            resultado: 490,
            passos: [
              { coluna: "U", fala: "2 × 5 = 10 → escreve 0, vai 1", digito: 0, vaiUm: 1 },
              { coluna: "D", fala: "2 × 4 + 1 = 9", digito: 9 },
              { coluna: "C", fala: "2 × 2 = 4", digito: 4 },
            ],
          },
          destaque: "245 × 2 = 490.",
        },
      },
      {
        texto: "Multiplique 245 pela DEZENA (1) — resultado desloca 1 casa pra esquerda (colocando 0 na unidade).",
        exemploReal: {
          contexto: "245 × 10",
          visualMat: {
            tipo: "tabela",
            titulo: "Deslocamento de casa",
            cabecalhos: ["Passo", "Resultado"],
            linhas: [
              { rotulo: "245 × 2", valores: ["245 × 2", "490"] },
              { rotulo: "245 × 10", valores: ["245 × 1 desloca 1 casa", "2.450"] },
              { rotulo: "Soma", valores: ["490 + 2.450", "2.940"] },
            ],
          },
          destaque: "245 × 12 = 490 + 2.450 = 2.940.",
        },
      },
      {
        texto: "Multiplicar por 100 = acrescentar 2 zeros. Por 1.000 = 3 zeros.",
        exemploReal: {
          contexto: "37 × 1.000",
          destaque: "37 × 1.000 = 37.000 (só acrescentei 3 zeros).",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Uma escola tem 18 turmas com 32 alunos cada. Total?",
    resposta: "576 alunos",
    contaPassoAPasso: {
      operacao: "mult",
      operandos: [32, 18],
      resultado: 576,
      passos: [
        { coluna: "U", fala: "8 × 2 = 16 → 6, vai 1", digito: 6, vaiUm: 1 },
        { coluna: "D", fala: "8 × 3 + 1 = 25 → forma linha 256", digito: 5, vaiUm: 2 },
        { coluna: "UM", fala: "linha 320 (32 × 1 deslocado); somando: 576" },
      ],
    },
    passos: ["32 × 8 = 256.", "32 × 10 = 320.", "256 + 320 = 576."],
  },

  momento06_praticaGuiada: {
    enunciado: "Quanto é 125 × 40?",
    dica: "125 × 4 e depois acrescente 1 zero.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "5.000" }, { nome: "500" }, { nome: "50.000" }],
      respostaCerta: "5.000",
      feedbackAcerto: "🎯 125 × 4 = 500 → × 10 = 5.000.",
      feedbackErro: "125 × 4 = 500 e depois × 10.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Calcule 236 × 25.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "5.900" }, { nome: "5.400" }, { nome: "6.100" }],
      respostaCerta: "5.900",
      feedbackAcerto: "🎯 236 × 5 = 1.180 e 236 × 20 = 4.720. Soma 5.900.",
      feedbackErro: "236 × 5 + 236 × 20.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um caminhão leva 145 caixas por viagem. Fez 12 viagens.",
    problema: "Quantas caixas transportou ao todo?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1.740" }, { nome: "1.640" }, { nome: "1.840" }],
      respostaCerta: "1.740",
      feedbackAcerto: "🎯 145 × 12 = 1.740.",
      feedbackErro: "145 × 2 + 145 × 10.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Multiplique por cada algarismo, uma linha de cada vez.",
      "Cada nova linha desloca 1 casa pra esquerda.",
      "× 10 → 1 zero, × 100 → 2 zeros, × 1.000 → 3 zeros.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "45 × 100 =", opcoes: ["4.500", "450", "45.000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "×100 acrescenta 2 zeros." },
      { pergunta: "12 × 15 =", opcoes: ["180", "170", "160"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "12 × 5 + 12 × 10." },
      { pergunta: "125 × 8 =", opcoes: ["1.000", "900", "1.125"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "125 × 8 = 1.000." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Multiplicação real",
    materiais: ["Notinhas de mercado"],
    passos: ["Pegue um produto com preço em R$.", "Multiplique por quantas unidades sua família consome no mês."],
    registro: "📸 Foto da conta armada.",
  },
  recompensa: { xp: 160, moedas: 85 },
};
