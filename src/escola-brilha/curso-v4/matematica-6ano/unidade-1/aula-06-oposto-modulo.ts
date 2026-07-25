import type { AulaV4 } from "../../types";

export const aula06_opostoModulo: AulaV4 = {
  slug: "u1-06-oposto-modulo",
  titulo: "Oposto e módulo",
  iconeTrilha: "🪞",
  bncc: ["EF06MA03"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "O espelho do zero",
    historia:
      "{NOME}, cada número tem um GÊMEO do outro lado do zero — o OPOSTO. E cada número tem uma DISTÂNCIA até o zero — o MÓDULO.",
  },

  momento02_exploracao: {
    instrucao: "Observe: 4 e −4 são espelhados no zero.",
    cenas: [
      { tipo: "texto", texto: "OPOSTO: mesmo número, sinal trocado. Oposto de 5 é −5.", destaque: true },
      { tipo: "texto", texto: "MÓDULO |x|: distância até zero. Sempre ≥ 0." },
      {
        tipo: "retaNumerica",
        min: -6,
        max: 6,
        passo: 1,
        destacar: [
          { valor: -4, rotulo: "−4", cor: "#f97316" },
          { valor: 0, rotulo: "0" },
          { valor: 4, rotulo: "4", cor: "#0ea5e9" },
        ],
        intervalos: [
          { de: -4, ate: 0, cor: "#fdba74", rotulo: "4 passos" },
          { de: 0, ate: 4, cor: "#7dd3fc", rotulo: "4 passos" },
        ],
        legenda: "|−4| = 4 e |4| = 4 → mesma distância do zero.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Quanto vale |−9|?",
    pista: "Distância do −9 até o zero: conte os passos.",
    revelacao: "|−9| = 9. Nove passos até o zero.",
  },

  momento04_explicacao: {
    titulo: "Regras práticas",
    etapas: [
      {
        texto: "Oposto: troca só o sinal.",
        exemploReal: {
          contexto: "Oposto de 12 é −12. Oposto de −3 é 3.",
          visualMat: {
            tipo: "retaNumerica",
            min: -15,
            max: 15,
            passo: 3,
            destacar: [
              { valor: -12, rotulo: "−12", cor: "#ef4444" },
              { valor: 0, rotulo: "0" },
              { valor: 12, rotulo: "12", cor: "#22c55e" },
            ],
          },
          destaque: "Sempre à mesma distância do zero, em lados opostos.",
        },
      },
      {
        texto: "Módulo tira o sinal negativo.",
        exemploReal: {
          contexto: "|−15| = 15 · |8| = 8 · |0| = 0.",
          visualMat: {
            tipo: "tabela",
            titulo: "Módulos",
            cabecalhos: ["Número", "Módulo"],
            linhas: [
              { rotulo: "−15", valores: ["−15", "15"] },
              { rotulo: "8", valores: ["8", "8"] },
              { rotulo: "0", valores: ["0", "0"] },
              { rotulo: "−7", valores: ["−7", "7"] },
            ],
          },
          destaque: "Módulo é sempre ≥ 0.",
        },
      },
      {
        texto: "Oposto do oposto = número original.",
        exemploReal: {
          contexto: "Oposto de (oposto de 4) = oposto de −4 = 4.",
          destaque: "Dois espelhos consecutivos voltam ao mesmo lugar.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Ache o oposto e o módulo de −12.",
    resposta: "Oposto = 12 · Módulo = 12",
    visualMat: {
      tipo: "retaNumerica",
      min: -15,
      max: 15,
      passo: 3,
      destacar: [
        { valor: -12, rotulo: "−12", cor: "#ef4444" },
        { valor: 0, rotulo: "0" },
        { valor: 12, rotulo: "12 (oposto)", cor: "#22c55e" },
      ],
      intervalos: [{ de: -12, ate: 0, cor: "#fca5a5", rotulo: "|−12| = 12" }],
    },
    passos: [
      "Oposto: troca o sinal. −12 → 12.",
      "Módulo: distância até 0 = 12 passos.",
      "Coincidem em valor porque estão à mesma distância do zero.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Oposto de −7?",
    dica: "Troca o sinal.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7" }, { nome: "−7" }, { nome: "0" }],
      respostaCerta: "7",
      feedbackAcerto: "🎯 Sinal trocado.",
      feedbackErro: "Só troca o sinal: −7 → 7.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Qual vale mais: |−10| ou 8?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "|−10| = 10" }, { nome: "8" }, { nome: "Iguais" }],
      respostaCerta: "|−10| = 10",
      feedbackAcerto: "🎯 10 > 8.",
      feedbackErro: "|−10| = 10, e 10 > 8.",
    },
  },

  momento08_aplicacao: {
    contexto: "Elevador saiu do térreo (0). Foi ao −3 (subsolo 3) e depois ao +5 (5º andar).",
    problema: "Andou mais na descida ou na subida?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Na subida (|+5|=5)" }, { nome: "Na descida (|−3|=3)" }, { nome: "Igual" }],
      respostaCerta: "Na subida (|+5|=5)",
      feedbackAcerto: "🎯 5 > 3.",
      feedbackErro: "|+5| = 5 e |−3| = 3.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Oposto: troca o sinal.",
      "Módulo: distância até 0, sempre ≥ 0.",
      "|−a| = |a|. Oposto do oposto = original.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Oposto de 6:", opcoes: ["−6", "6", "0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Troca o sinal." },
      { pergunta: "|−15|:", opcoes: ["15", "−15", "0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Módulo é sempre ≥ 0." },
      { pergunta: "Oposto de −20:", opcoes: ["20", "−20", "0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "−20 → 20." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Reta com espelho",
    materiais: ["Papel, régua"],
    passos: [
      "Desenhe uma reta de −5 a 5.",
      "Marque 3 pares OPOSTOS (ex.: 2 e −2).",
      "Escreva o módulo de cada um.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 90 },
};
