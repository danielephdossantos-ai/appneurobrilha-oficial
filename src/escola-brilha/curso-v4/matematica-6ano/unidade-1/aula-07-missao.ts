import type { AulaV4 } from "../../types";

export const aula07_missao: AulaV4 = {
  slug: "u1-07-missao",
  titulo: "Missão do Laboratório — Cientista dos Números",
  iconeTrilha: "🏅",
  bncc: ["EF06MA01", "EF06MA02", "EF06MA03"],
  duracaoMin: 25,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Formatura do Laboratório",
    historia:
      "{NOME}, hoje é o dia da MISSÃO. Você recebe dados reais e precisa usar TUDO da Unidade 1: ler bilhões, comparar, arredondar, localizar na reta, trabalhar com negativos.",
  },
  momento02_exploracao: {
    instrucao: "Cheque suas ferramentas.",
    cenas: [
      { tipo: "texto", texto: "Ferramentas: classes numéricas · comparação por dígitos · arredondamento · reta com negativos · oposto e módulo.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "O laboratório funciona com uma regra: SEMPRE HIPÓTESE → TESTE → CONCLUSÃO.",
    pista: "Antes de responder, escreva mentalmente o que você acha.",
    revelacao: "Cientistas não chutam: eles verificam.",
  },
  momento04_explicacao: {
    titulo: "Estratégias que valem para tudo",
    etapas: [
      { texto: "Números grandes: separe em classes." },
      { texto: "Comparar: dígitos primeiro, tamanho depois." },
      { texto: "Arredondar: olhar o dígito à direita." },
      { texto: "Negativos: olhar a reta, direita é maior." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Escreva 1.500.000.000 por extenso.",
    resposta: "Um bilhão e quinhentos milhões",
    passos: ["Separe por classes: 1 · 500 · 000 · 000.", "1 bilhão + 500 milhões."],
  },
  momento06_praticaGuiada: {
    enunciado: "Arredonde 4.762 para o milhar.",
    dica: "Dígito à direita da casa dos milhares.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5.000" }, { nome: "4.000" }, { nome: "4.700" }],
      respostaCerta: "5.000",
      feedbackAcerto: "🎯 7≥5.",
      feedbackErro: "7≥5 → sobe.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Ordene do menor pro maior: −5 · 2 · 0 · −1 · 4.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Ordem correta:",
      opcoes: [
        { nome: "−5 · −1 · 0 · 2 · 4" },
        { nome: "0 · −1 · −5 · 2 · 4" },
        { nome: "4 · 2 · 0 · −1 · −5" },
      ],
      respostaCerta: "−5 · −1 · 0 · 2 · 4",
      feedbackAcerto: "🎯",
      feedbackErro: "Da esquerda pra direita da reta.",
    },
  },
  momento08_aplicacao: {
    contexto:
      "Um submarino desce até −180 m. Depois sobe 120 m.",
    problema: "Em qual profundidade fica agora?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "−60 m" }, { nome: "−300 m" }, { nome: "60 m" }],
      respostaCerta: "−60 m",
      feedbackAcerto: "🎯 −180 + 120 = −60.",
      feedbackErro: "Subir 120 desde −180 → −60.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Você virou Cientista dos Números do Laboratório.",
      "Ferramentas travadas: bilhões, comparação, arredondamento, reta, negativos.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "3.000.000.000 é igual a:",
        opcoes: ["3 bilhões", "3 milhões", "300 milhões"],
        correta: 0,
        feedbackAcerto: "🎉",
        feedbackErro: "3 bi.",
      },
      {
        pergunta: "|−12| vale:",
        opcoes: ["12", "−12", "0"],
        correta: 0,
        feedbackAcerto: "🎉",
        feedbackErro: "12.",
      },
      {
        pergunta: "Arredondar 78.499 para o milhar:",
        opcoes: ["78.000", "79.000", "80.000"],
        correta: 0,
        feedbackAcerto: "🎉",
        feedbackErro: "4<5.",
      },
      {
        pergunta: "Maior entre −3, 0, −10, 2:",
        opcoes: ["2", "0", "−3"],
        correta: 0,
        feedbackAcerto: "🎉",
        feedbackErro: "2 fica mais à direita.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma de Cientista dos Números",
    materiais: ["Papel, canetas"],
    passos: [
      "Faça seu diploma: 'Cientista dos Números — Unidade 1'.",
      "Escreva 3 exemplos reais de números que você aprendeu a interpretar (bilhão, negativo, arredondado).",
      "Mostre pra família.",
    ],
    registro: "📸 Foto do diploma.",
  },
  recompensa: { xp: 240, moedas: 125, medalha: "Cientista dos Números" },
};
