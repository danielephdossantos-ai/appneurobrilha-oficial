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
      "{NOME}, no Laboratório multiplicamos em ESCALA. 245 × 12? 348 × 25? Vamos montar a conta como no caderno, com parciais, sobras e deslocamento.",
  },

  momento02_exploracao: {
    instrucao: "A multiplicação grande nasce em linhas: uma linha pela unidade, outra pela dezena, depois somamos as parciais.",
    cenas: [
      { tipo: "texto", texto: "Regra: multiplique por CADA algarismo do 2º número; cada nova linha anda uma casa para a ESQUERDA.", destaque: true },
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
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [245, 10],
            resultado: 2450,
            passos: [
              { coluna: "U", fala: "O 0 está na unidade: 0 × 245 = 0. Essa linha só marca a casa da unidade.", digito: 0 },
              { coluna: "D", fala: "Agora uso o 1 da dezena. Como ele vale 10, a linha começa uma casa à esquerda.", digito: 5 },
              { coluna: "C", fala: "1 × 4 = 4. Escrevo 4 na centena.", digito: 4 },
              { coluna: "UM", fala: "1 × 2 = 2. Escrevo 2 no milhar. Resultado: 2.450.", digito: 2 },
            ],
          },
          destaque: "245 × 10 = 2.450 porque a linha da dezena anda uma casa para a esquerda.",
        },
      },
      {
        texto: "Multiplicar por 100 = acrescentar 2 zeros. Por 1.000 = 3 zeros.",
        exemploReal: {
          contexto: "37 × 1.000",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [37, 1000],
            resultado: 37000,
            passos: [
              { coluna: "U", fala: "Os três zeros do 1.000 ocupam unidade, dezena e centena: essas casas ficam com zero.", digito: 0 },
              { coluna: "UM", fala: "O 1 está na casa do milhar. Então 37 será escrito começando três casas à esquerda.", digito: 7 },
              { coluna: "DM", fala: "1 × 3 = 3. Escrevo 3 na dezena de milhar.", digito: 3 },
            ],
          },
          destaque: "37 × 1.000 = 37.000 porque o 37 desloca três casas para a esquerda.",
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
        { coluna: "C", fala: "Termino a primeira linha: 256. Agora começo a dezena: 1 × 2 = 2, mas fica deslocado uma casa.", digito: 2 },
        { coluna: "C", fala: "1 × 3 = 3. A segunda linha fica 320.", digito: 3 },
        { fala: "Somo as parciais: 256 + 320 = 576." },
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
