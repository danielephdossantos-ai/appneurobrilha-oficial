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
      "{NOME}, você já viu −5°C no termômetro? Ou saldo −200 no banco? Existem números MENORES que zero. Eles ficam do OUTRO lado do zero, à esquerda. São os NEGATIVOS.",
  },
  momento02_exploracao: {
    instrucao: "A reta ganha o lado esquerdo.",
    cenas: [
      { tipo: "texto", texto: "Números negativos vêm à ESQUERDA do zero. Ficam com o sinal −.", destaque: true },
      { tipo: "retaNumerica", min: -5, max: 5, passo: 1, destacar: [{ valor: -3, rotulo: "−3" }, { valor: 0, rotulo: "0" }, { valor: 3, rotulo: "3" }], intervalos: [{ de: -5, ate: 0, cor: "#f97316", rotulo: "negativos" }, { de: 0, ate: 5, cor: "#0ea5e9", rotulo: "positivos" }], legenda: "0 divide o mundo em dois lados." },
      { tipo: "texto", texto: "Regra continua: quem está mais à DIREITA é MAIOR. Então −2 > −5 (é 'menos pior')." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Qual é maior: −2 ou −7?",
    pista: "Localize os dois na reta. Direita = maior.",
    revelacao: "−2 fica à direita de −7 → −2 > −7. Cuidado: nos negativos, quem parece 'maior número' fica pra ESQUERDA.",
  },
  momento04_explicacao: {
    titulo: "Onde vivem os negativos",
    etapas: [
      { texto: "Temperatura no inverno: −10°C, −3°C." },
      { texto: "Saldo bancário devendo: −150 reais." },
      { texto: "Profundidade abaixo do mar: −40 m." },
      { texto: "Andar do subsolo: −1, −2." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Ordenar do MENOR pro MAIOR: 3 · −4 · 0 · −1 · 2.",
    resposta: "−4 < −1 < 0 < 2 < 3",
    passos: [
      "Coloque cada um na reta.",
      "Comece pelo MAIS À ESQUERDA (o menor de todos): −4.",
      "Vá pra direita: −4, −1, 0, 2, 3.",
    ],
  },
  momento06_praticaGuiada: {
    enunciado: "Compare: −6 __ −2.",
    dica: "Reta: −6 fica mais à esquerda.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "<" }, { nome: ">" }, { nome: "=" }],
      respostaCerta: "<",
      feedbackAcerto: "🎯 −6 < −2.",
      feedbackErro: "Mais à esquerda = menor.",
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
      feedbackAcerto: "🎯",
      feedbackErro: "Da esquerda pra direita na reta.",
    },
  },
  momento08_aplicacao: {
    contexto: "Termômetros pela manhã: cidade A −4°C · B 2°C · C −9°C · D 0°C.",
    problema: "Cidade mais FRIA?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "C" }, { nome: "A" }, { nome: "D" }],
      respostaCerta: "C",
      feedbackAcerto: "🎯 −9 é o menor → mais frio.",
      feedbackErro: "−9 fica mais à esquerda.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Negativos ficam à esquerda do zero.",
      "Regra da reta continua: direita = maior.",
      "Entre dois negativos, o de MAIOR número absoluto é o MENOR.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "−5 __ −1:",
        opcoes: ["<", ">", "="],
        correta: 0,
        feedbackAcerto: "🎉",
        feedbackErro: "−5 fica à esquerda.",
      },
      {
        pergunta: "Menor: 0, −2, 3, −6:",
        opcoes: ["−6", "−2", "0"],
        correta: 0,
        feedbackAcerto: "🎉",
        feedbackErro: "−6.",
      },
      {
        pergunta: "Saldo de R$ −80 significa:",
        opcoes: ["Devo 80", "Tenho 80", "Zero"],
        correta: 0,
        feedbackAcerto: "🎉",
        feedbackErro: "Negativo = dívida.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Caça-negativo",
    materiais: ["Notícias, celular"],
    passos: [
      "Encontre 3 situações com número negativo (temperatura, saldo, elevador).",
      "Anote e explique o significado.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 90 },
};
