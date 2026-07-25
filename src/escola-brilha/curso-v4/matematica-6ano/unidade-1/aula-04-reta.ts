import type { AulaV4 } from "../../types";

export const aula04_reta: AulaV4 = {
  slug: "u1-04-reta",
  titulo: "A reta numérica",
  iconeTrilha: "📏",
  bncc: ["EF06MA03"],
  duracaoMin: 20,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "Toda a matemática numa reta",
    historia:
      "{NOME}, no Laboratório TUDO se organiza numa RETA. Cada número tem um LUGAR ÚNICO. Direita = maior. Esquerda = menor.",
  },

  momento02_exploracao: {
    instrucao: "Observe a reta abaixo.",
    cenas: [
      { tipo: "texto", texto: "Traço com setas nas pontas. Ticks igualmente espaçados. Um ponto = um número.", destaque: true },
      {
        tipo: "retaNumerica",
        min: 0,
        max: 10,
        passo: 1,
        destacar: [
          { valor: 3, rotulo: "3" },
          { valor: 7, rotulo: "7" },
        ],
        legenda: "Cada tick = 1 unidade. 3 fica à ESQUERDA de 7 → 3 < 7.",
      },
      { tipo: "texto", texto: "Regra de ouro: mais à DIREITA = MAIOR." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se 4 está à esquerda de 9, qual é maior?",
    pista: "Direita = maior.",
    revelacao: "9 é maior. 4 < 9.",
  },

  momento04_explicacao: {
    titulo: "Escalas diferentes",
    etapas: [
      {
        texto: "O PASSO pode ser 1, 5, 10, 100… O que importa é ser CONSTANTE.",
        exemploReal: {
          contexto: "Reta de 0 a 100 com passo 10.",
          visualMat: {
            tipo: "retaNumerica",
            min: 0,
            max: 100,
            passo: 10,
            destacar: [
              { valor: 30, rotulo: "30" },
              { valor: 70, rotulo: "70" },
            ],
          },
          destaque: "Mesma distância entre ticks vizinhos = escala válida.",
        },
      },
      {
        texto: "Um número ENTRE dois ticks fica proporcionalmente no meio.",
        exemploReal: {
          contexto: "Reta 0–100, passo 10. Onde fica 45?",
          visualMat: {
            tipo: "retaNumerica",
            min: 0,
            max: 100,
            passo: 10,
            destacar: [
              { valor: 40, rotulo: "40" },
              { valor: 45, rotulo: "45", cor: "#ef4444" },
              { valor: 50, rotulo: "50" },
            ],
          },
          destaque: "45 = meio caminho entre 40 e 50.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Localize 45 numa reta de 0 a 100 com passo 10.",
    resposta: "Bem no meio entre 40 e 50.",
    visualMat: {
      tipo: "retaNumerica",
      min: 0,
      max: 100,
      passo: 10,
      destacar: [
        { valor: 40, rotulo: "40" },
        { valor: 45, rotulo: "45", cor: "#ef4444" },
        { valor: 50, rotulo: "50" },
      ],
      legenda: "45 fica entre 40 e 50, exatamente no meio.",
    },
    passos: [
      "Ticks são 0, 10, 20, 30, 40, 50…",
      "45 fica ENTRE 40 e 50.",
      "É metade do caminho → ponto no meio.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Onde fica 25 numa reta de 0 a 50 com passo 5?",
    dica: "5, 10, 15, 20, 25… conte os ticks.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "Exatamente no meio da reta" },
        { nome: "Perto do 50" },
        { nome: "Perto do 0" },
      ],
      respostaCerta: "Exatamente no meio da reta",
      feedbackAcerto: "🎯 25 é metade de 50.",
      feedbackErro: "25 = metade de 50.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Reta 0–100 com passo 10. Qual está mais à direita: 37 ou 74?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "74" }, { nome: "37" }, { nome: "Iguais" }],
      respostaCerta: "74",
      feedbackAcerto: "🎯 74 > 37.",
      feedbackErro: "Maior → mais à direita.",
    },
  },

  momento08_aplicacao: {
    contexto: "Termômetro: manhã 18°C · tarde 27°C · noite 22°C.",
    problema: "Ordene do menor pro maior:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Ordem:",
      opcoes: [{ nome: "18 · 22 · 27" }, { nome: "27 · 22 · 18" }, { nome: "22 · 18 · 27" }],
      respostaCerta: "18 · 22 · 27",
      feedbackAcerto: "🎯 Esquerda pra direita = menor → maior.",
      feedbackErro: "Da esquerda pra direita da reta.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Cada número tem UM lugar na reta.",
      "Direita = maior. Esquerda = menor.",
      "Passo constante entre ticks.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Numa reta, 8 fica:", opcoes: ["À direita de 5", "À esquerda de 5", "No mesmo ponto de 5"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "8 > 5 → direita." },
      { pergunta: "Passo constante significa:", opcoes: ["Mesma distância entre ticks", "Ticks aleatórios", "Só marcar o zero"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Distância constante." },
      { pergunta: "Metade do caminho entre 0 e 60:", opcoes: ["30", "20", "40"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "60 ÷ 2 = 30." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Reta do dia",
    materiais: ["Papel, régua"],
    passos: [
      "Desenhe uma reta de 0 a 20 com passo 2.",
      "Marque 3 idades da sua família.",
      "Diga quem é mais novo e mais velho.",
    ],
    registro: "📸 Foto da reta.",
  },
  recompensa: { xp: 150, moedas: 80 },
};
