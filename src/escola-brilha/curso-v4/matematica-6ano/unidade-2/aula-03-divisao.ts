import type { AulaV4 } from "../../types";

export const aula03_divisao: AulaV4 = {
  slug: "u2-03-divisao",
  titulo: "Divisão pela chave — com 2 algarismos no divisor",
  iconeTrilha: "➗",
  bncc: ["EF06MA03"],
  duracaoMin: 26,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Dividir de verdade",
    historia:
      "{NOME}, quando o divisor tem 2 algarismos (12, 25, 47…), a tabuada sozinha não resolve. A CHAVE resolve, passo a passo.",
  },

  momento02_exploracao: {
    instrucao: "Divisão pela chave: pegar bloco, dividir, subtrair, descer o próximo.",
    cenas: [
      { tipo: "texto", texto: "Pense: 'quantas vezes o DIVISOR cabe no bloco que peguei?'", destaque: true },
      { tipo: "tabuada", fator: 12, titulo: "Tabuada do 12 (referência pra 720 ÷ 12)" },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Quanto é 720 ÷ 12?",
    pista: "Quantas vezes 12 cabe em 72? E em 0?",
    revelacao: "12 × 6 = 72 → cabe 6 vezes. Sobra 0. Desce o 0 → 0 ÷ 12 = 0. Resultado: 60.",
  },

  momento04_explicacao: {
    titulo: "Passo a passo pela chave",
    etapas: [
      {
        texto: "Pegue o menor bloco onde o divisor CABE. Divida, escreva no quociente, multiplique e subtraia.",
        exemploReal: {
          contexto: "720 ÷ 12",
          contaPassoAPasso: {
            operacao: "div",
            operandos: [720, 12],
            resultado: 60,
            passos: [
              { fala: "12 cabe em 72? Sim, 6 vezes (12 × 6 = 72)." },
              { fala: "Escrevo 6 no quociente. 72 − 72 = 0." },
              { fala: "Desce o 0. 0 ÷ 12 = 0 — escrevo 0 no quociente." },
              { fala: "Quociente: 60. Resto: 0." },
            ],
          },
          destaque: "12 cabe 6 vezes em 72 · 6 × 12 = 72 · resto 0 · desce 0 · 0 ÷ 12 = 0.",
        },
      },
      {
        texto: "Divisão com resto: se o resto NÃO é zero, escrevemos como 'sobrou tanto'.",
        exemploReal: {
          contexto: "857 ÷ 15",
          contaPassoAPasso: {
            operacao: "div",
            operandos: [857, 15],
            resultado: 57,
            passos: [
              { fala: "15 cabe em 85? 15 × 5 = 75. Cabe 5 vezes." },
              { fala: "85 − 75 = 10. Desce o 7 → 107." },
              { fala: "15 cabe em 107? 15 × 7 = 105. Cabe 7 vezes." },
              { fala: "107 − 105 = 2. Fim. Quociente 57, resto 2." },
            ],
          },
          destaque: "Quociente 57, resto 2. Prova: 57 × 15 + 2 = 857.",
        },
      },
      {
        texto: "Prova real da divisão: quociente × divisor + resto = dividendo.",
        exemploReal: {
          contexto: "Confira 857 = 57 × 15 + 2.",
          visualMat: {
            tipo: "tabela",
            titulo: "Prova real",
            cabecalhos: ["Quociente × Divisor", "+ Resto", "= Dividendo"],
            linhas: [{ rotulo: "857 ÷ 15", valores: ["57 × 15 = 855", "+ 2", "= 857 ✅"] }],
          },
          destaque: "Se der o dividendo, a divisão está correta.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Distribuir 480 balas para 16 crianças igualmente.",
    resposta: "30 balas cada",
    contaPassoAPasso: {
      operacao: "div",
      operandos: [480, 16],
      resultado: 30,
      passos: [
        { fala: "16 cabe em 48? 16 × 3 = 48. Cabe 3 vezes." },
        { fala: "48 − 48 = 0. Desce o 0." },
        { fala: "0 ÷ 16 = 0." },
        { fala: "Quociente: 30, resto 0." },
      ],
    },
    passos: [
      "16 cabe em 48? 16 × 3 = 48 → 3.",
      "Sobra 0. Desce o 0.",
      "0 ÷ 16 = 0.",
      "Resultado: 30 balas por criança.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Calcule 936 ÷ 12.",
    dica: "12 cabe em 93 quantas vezes? Depois desça o 6.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quociente:",
      opcoes: [{ nome: "78" }, { nome: "68" }, { nome: "88" }],
      respostaCerta: "78",
      feedbackAcerto: "🎯 12 × 78 = 936.",
      feedbackErro: "12 × 7 = 84, resto 9, desce 6 → 96 ÷ 12 = 8.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Calcule 725 ÷ 25.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quociente:",
      opcoes: [{ nome: "29" }, { nome: "28" }, { nome: "30" }],
      respostaCerta: "29",
      feedbackAcerto: "🎯 25 × 29 = 725.",
      feedbackErro: "25 × 29 = 725 (exato).",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma padaria produz 1.440 pães por dia, embalados em pacotes de 12.",
    problema: "Quantos pacotes formam-se?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "120" }, { nome: "144" }, { nome: "12" }],
      respostaCerta: "120",
      feedbackAcerto: "🎯 1.440 ÷ 12 = 120.",
      feedbackErro: "1.440 ÷ 12 = 120 pacotes.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Divisão pela CHAVE: pegar bloco, dividir, multiplicar, subtrair, descer.",
      "Quociente × Divisor + Resto = Dividendo.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "144 ÷ 12 =", opcoes: ["12", "13", "11"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "12 × 12 = 144." },
      { pergunta: "500 ÷ 25 =", opcoes: ["20", "25", "15"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "25 × 20 = 500." },
      { pergunta: "Resto de 100 ÷ 14:", opcoes: ["2", "0", "4"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "14 × 7 = 98, resto 2." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Divisão do lanche",
    materiais: ["Balas ou frutas"],
    passos: ["Pegue uma quantidade em casa.", "Divida igualmente entre pessoas.", "Confira: sobra o quê?"],
    registro: "📸 Foto da conta pela chave.",
  },
  recompensa: { xp: 170, moedas: 90 },
};
