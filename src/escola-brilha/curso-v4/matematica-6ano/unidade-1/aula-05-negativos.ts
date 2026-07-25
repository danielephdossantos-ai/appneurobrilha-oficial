import type { AulaV4 } from "../../types";

export const aula05_negativos: AulaV4 = {
  slug: "u1-05-negativos",
  titulo: "Números negativos — o outro lado do zero",
  iconeTrilha: "🌡️",
  bncc: ["EF06MA03"],
  duracaoMin: 24,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Existe menos que zero?",
    historia:
      "{NOME}, você já viu −5°C no termômetro? Ou saldo −200 no banco? Existem números MENORES que zero. Ficam do OUTRO lado do zero, à esquerda. São os NEGATIVOS.",
  },

  momento02_exploracao: {
    instrucao: "A reta ganha o lado ESQUERDO.",
    cenas: [
      { tipo: "texto", texto: "Negativos ficam à ESQUERDA do zero e vêm com o sinal −.", destaque: true },
      {
        tipo: "retaNumerica",
        min: -5,
        max: 5,
        passo: 1,
        destacar: [
          { valor: -3, rotulo: "−3" },
          { valor: 0, rotulo: "0" },
          { valor: 3, rotulo: "3" },
        ],
        intervalos: [
          { de: -5, ate: 0, cor: "#f97316", rotulo: "negativos" },
          { de: 0, ate: 5, cor: "#0ea5e9", rotulo: "positivos" },
        ],
        legenda: "0 divide o mundo em dois lados.",
      },
      { tipo: "texto", texto: "A regra continua: DIREITA = MAIOR. Então −2 > −5." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Qual é maior: −2 ou −7?",
    pista: "Localize os dois na reta. Direita = maior.",
    revelacao: "−2 fica à DIREITA de −7 → −2 > −7. Cuidado: nos negativos, 'número grande' = mais à esquerda = MENOR.",
  },

  momento04_explicacao: {
    titulo: "Onde vivem os negativos",
    etapas: [
      {
        texto: "Temperatura no inverno.",
        exemploReal: {
          contexto: "Cidade no inverno: −10°C · −3°C.",
          visualMat: {
            tipo: "retaNumerica",
            min: -15,
            max: 5,
            passo: 5,
            destacar: [
              { valor: -10, rotulo: "−10°C", cor: "#3b82f6" },
              { valor: -3, rotulo: "−3°C", cor: "#3b82f6" },
              { valor: 0, rotulo: "0°C" },
            ],
          },
          destaque: "−10 fica MAIS à esquerda → mais FRIO que −3.",
        },
      },
      {
        texto: "Saldo bancário devendo.",
        exemploReal: {
          contexto: "Conta com R$ −150 = está devendo 150.",
          visualMat: {
            tipo: "retaNumerica",
            min: -200,
            max: 200,
            passo: 50,
            destacar: [
              { valor: -150, rotulo: "−150", cor: "#ef4444" },
              { valor: 0, rotulo: "0" },
            ],
            intervalos: [{ de: -200, ate: 0, cor: "#fca5a5", rotulo: "dívida" }],
          },
          destaque: "Negativo no banco = dívida.",
        },
      },
      {
        texto: "Profundidade abaixo do mar / subsolos de prédio.",
        exemploReal: {
          contexto: "Mergulhador: −40 m. Elevador: subsolo −2.",
          visualMat: {
            tipo: "retaNumerica",
            min: -50,
            max: 10,
            passo: 10,
            destacar: [
              { valor: -40, rotulo: "−40 m" },
              { valor: -2, rotulo: "−2 (subsolo)" },
              { valor: 0, rotulo: "0 (superfície)" },
            ],
          },
          destaque: "Quanto MAIS negativo, mais fundo.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Ordenar do MENOR pro MAIOR: 3 · −4 · 0 · −1 · 2.",
    resposta: "−4 < −1 < 0 < 2 < 3",
    visualMat: {
      tipo: "retaNumerica",
      min: -5,
      max: 5,
      passo: 1,
      destacar: [
        { valor: -4, rotulo: "−4", cor: "#ef4444" },
        { valor: -1, rotulo: "−1", cor: "#f97316" },
        { valor: 0, rotulo: "0" },
        { valor: 2, rotulo: "2", cor: "#22c55e" },
        { valor: 3, rotulo: "3", cor: "#0ea5e9" },
      ],
      legenda: "Lendo da esquerda pra direita = do menor pro maior.",
    },
    passos: [
      "Coloque cada um na reta.",
      "Comece pelo MAIS À ESQUERDA (menor): −4.",
      "Vá pra direita: −4 → −1 → 0 → 2 → 3.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Compare: −6 __ −2.",
    dica: "Na reta, −6 fica mais à esquerda.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "<" }, { nome: ">" }, { nome: "=" }],
      respostaCerta: "<",
      feedbackAcerto: "🎯 −6 < −2.",
      feedbackErro: "Mais à esquerda = MENOR.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Ordene: −8 · 1 · −3 · 0.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Do menor pro maior:",
      opcoes: [
        { nome: "−8 · −3 · 0 · 1" },
        { nome: "1 · 0 · −3 · −8" },
        { nome: "−3 · −8 · 0 · 1" },
      ],
      respostaCerta: "−8 · −3 · 0 · 1",
      feedbackAcerto: "🎯 Esquerda → direita.",
      feedbackErro: "Da esquerda pra direita da reta.",
    },
  },

  momento08_aplicacao: {
    contexto: "Termômetros pela manhã: cidade A −4°C · B 2°C · C −9°C · D 0°C.",
    problema: "Cidade mais FRIA?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "C (−9°C)" }, { nome: "A (−4°C)" }, { nome: "D (0°C)" }],
      respostaCerta: "C (−9°C)",
      feedbackAcerto: "🎯 −9 é o menor → mais frio.",
      feedbackErro: "−9 fica mais à esquerda da reta.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Negativos: à esquerda do zero, com sinal −.",
      "Regra da reta: direita = maior.",
      "Entre dois negativos, o de MAIOR módulo é o MENOR.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "−5 __ −1:", opcoes: ["<", ">", "="], correta: 0, feedbackAcerto: "🎉", feedbackErro: "−5 fica à esquerda." },
      { pergunta: "Menor de: 0, −2, 3, −6:", opcoes: ["−6", "−2", "0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "−6 é o mais à esquerda." },
      { pergunta: "Saldo de R$ −80 significa:", opcoes: ["Devo 80", "Tenho 80", "Zero"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Negativo = dívida." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça-negativo",
    materiais: ["Notícias, celular"],
    passos: [
      "Encontre 3 situações com número negativo (temperatura, saldo, elevador).",
      "Marque cada uma numa reta desenhada no papel.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 90 },
};
