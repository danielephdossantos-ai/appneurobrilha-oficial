import type { AulaV4 } from "../../types";

/**
 * Aula 4 · U1 — "Ler e escrever até 10.000"
 * BNCC: EF04MA01. Base: RME · Skemp.
 */
export const aula04_lerEscreverAte10000: AulaV4 = {
  slug: "u1-04-ler-escrever-ate-10000",
  titulo: "Ler e escrever até 10.000",
  iconeTrilha: "📜",
  bncc: ["EF04MA01"],
  duracaoMin: 20,
  metodologias: ["rme", "skemp"],

  momento01_motivacao: {
    titulo: "Escrever certo é chegar certo",
    historia:
      "{NOME}, o carteiro do Reino errou um endereço: 'rua dos Cravos, 4.008' virou '4.080'. A carta foi parar 8 casas depois. Um zero faz TODA a diferença.",
  },

  momento02_exploracao: {
    instrucao: "Ler começa da esquerda. Escrever por extenso segue a mesma ordem.",
    cenas: [
      { tipo: "texto", texto: "2.345 → 'dois mil, trezentos e quarenta e cinco'.", destaque: true },
      { tipo: "texto", texto: "3.008 → 'três mil e oito' (dezena e centena vazias, mas os zeros SEGURAM)." },
      { tipo: "texto", texto: "7.070 → 'sete mil e setenta'." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que 'e' aparece em alguns lugares na escrita por extenso?",
    pista: "O 'e' liga UM com centena, centena com dezena, dezena com unidade.",
    revelacao:
      "Ex.: 3.245 → 'três mil, duzentos e quarenta e cinco'. Sempre com 'e' entre C-D e D-U.",
  },

  momento04_explicacao: {
    titulo: "Regras de escrita",
    etapas: [
      {
        texto: "Escrever é traduzir cada casa para nome: milhar, centena, dezena, unidade.",
        exemploReal: {
          contexto: "6.428 →",
          casasValor: { numero: 6428, extenso: "seis mil, quatrocentos e vinte e oito", mostrarDecomposicao: true },
          destaque: "seis mil · quatrocentos · e vinte · e oito.",
        },
      },
      {
        texto: "Se uma casa é 0, ela desaparece da leitura — mas o zero fica no número.",
        exemploReal: {
          contexto: "4.008 →",
          casasValor: { numero: 4008, extenso: "quatro mil e oito", mostrarDecomposicao: true },
          destaque: "'Quatro mil e oito'. Não se lê 'zero centena, zero dezena'.",
        },
      },
      {
        texto: "Cuidado: 4.008 ≠ 4.080 ≠ 4.800.",
        exemploReal: {
          contexto: "Compare:",
          casasValor: { numero: 4080, extenso: "quatro mil e oitenta", mostrarDecomposicao: true },
          destaque: "4.080 = 'quatro mil e oitenta'. O 8 agora está na DEZENA.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Escreva por extenso: 5.203.",
    resposta: "cinco mil, duzentos e três",
    casasValor: { numero: 5203, mostrarDecomposicao: true, extenso: "cinco mil, duzentos e três" },
    passos: [
      "Milhar: 5 → cinco mil.",
      "Centena: 2 → duzentos.",
      "Dezena: 0 → some da leitura.",
      "Unidade: 3 → e três.",
      "Junto: 'cinco mil, duzentos e três'.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Escreva o número que se lê 'nove mil e vinte'.",
    dica: "Milhar = 9. Sem centena (0). Dezena = 2. Sem unidade (0).",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o número:",
      opcoes: [{ nome: "9.020" }, { nome: "9.200" }, { nome: "9.002" }],
      respostaCerta: "9.020",
      feedbackAcerto: "🎯 9 (UM) · 0 (C) · 2 (D) · 0 (U) → 9.020.",
      feedbackErro: "Vinte = 2 dezenas. Centena e unidade estão vazias: 0 nas duas → 9.020.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Qual é 'seis mil, quatrocentos e cinco'?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6.450" }, { nome: "6.405" }, { nome: "6.045" }],
      respostaCerta: "6.405",
      feedbackAcerto: "🎯 6 (UM) · 4 (C) · 0 (D) · 5 (U) → 6.405.",
      feedbackErro: "Sem dezenas: 0 na D. 6.405.",
    },
  },

  momento08_aplicacao: {
    contexto: "O carteiro precisa escolher entre 3 endereços parecidos.",
    problema: "Qual é 'quatro mil e oito'?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4.008" }, { nome: "4.080" }, { nome: "4.800" }],
      respostaCerta: "4.008",
      feedbackAcerto: "🎯 8 na UNIDADE, C e D vazias → 4.008.",
      feedbackErro: "'e oito' = 8 unidades. Casas C e D ficam com 0. 4.008.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Leitura começa pela esquerda (milhar).",
      "Casas com 0 somem da leitura mas ficam no número.",
      "Cuidado com zeros no meio: mudam o valor.",
      "'e' liga milhar com centena e as demais casas.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Como se lê 3.070?",
        opcoes: ["três mil e setenta", "três mil e setecentos", "trezentos e setenta"],
        correta: 0,
        feedbackAcerto: "🎉 7 na dezena = setenta. 'Três mil e setenta'.",
        feedbackErro: "O 7 está na DEZENA (segunda da direita) → setenta.",
      },
      {
        pergunta: "Como se escreve 'oito mil e cinco'?",
        opcoes: ["8.005", "8.050", "8.500"],
        correta: 0,
        feedbackAcerto: "🎉 5 na unidade, C e D com 0. 8.005.",
        feedbackErro: "'e cinco' = 5 unidades. Zeros seguram C e D. 8.005.",
      },
      {
        pergunta: "Qual desses é 'dois mil, cento e dezoito'?",
        opcoes: ["2.180", "2.118", "2.018"],
        correta: 1,
        feedbackAcerto: "🎉 2 (UM) · 1 (C) · 1 (D) · 8 (U) → 2.118.",
        feedbackErro: "Cento = 1 centena. Dezoito = 1 dezena + 8 unidades. 2.118.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "O jogo dos zeros",
    materiais: ["Papel", "Caneta"],
    passos: [
      "Escreva 5 números por extenso, sendo 2 com zero no meio.",
      "Troque com alguém: escreva os números que o outro ditou.",
      "Confiram juntos.",
    ],
    registro: "📸 Foto do papel.",
  },

  recompensa: { xp: 115, moedas: 60 },
};
