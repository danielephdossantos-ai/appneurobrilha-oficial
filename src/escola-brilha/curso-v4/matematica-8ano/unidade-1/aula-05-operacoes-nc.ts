import type { AulaV4 } from "../../types";

export const aula05_operacoesNC: AulaV4 = {
  slug: "u1-05-operacoes-nc",
  titulo: "Operar com notação científica",
  iconeTrilha: "✖️",
  bncc: ["EF08MA01"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Contas que nem calculadora comum aguenta",
    historia:
      "{NOME}, quando o número é enorme ou minúsculo, usar NC para multiplicar/dividir é MUITO mais rápido. A oficina agora combina mantissas e expoentes.",
  },

  momento02_exploracao: {
    instrucao: "Compare a mesma conta em NC e em decimal.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Operações em NC",
        cabecalhos: ["Operação", "Regra"],
        linhas: [
          { rotulo: "×", valores: ["multiplicação", "multiplique mantissas · SOMA expoentes"] },
          { rotulo: "÷", valores: ["divisão", "divida mantissas · SUBTRAI expoentes"] },
          { rotulo: "+/−", valores: ["soma/sub", "iguale expoentes primeiro"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "(2 · 10³) · (3 · 10⁴) = ?",
    pista: "2 · 3 = 6. Expoentes 3 + 4 = 7.",
    revelacao: "= 6 · 10⁷.",
  },

  momento04_explicacao: {
    titulo: "Multiplicação, divisão e soma",
    etapas: [
      {
        texto: "Multiplicação: mantissas × mantissas, expoentes + expoentes.",
        exemploReal: {
          contexto: "(4 · 10³) · (2 · 10²)",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["mantissas", "4 · 2 = 8"] },
              { rotulo: "2", valores: ["expoentes", "3 + 2 = 5"] },
              { rotulo: "3", valores: ["resultado", "8 · 10⁵"] },
            ],
          },
          destaque: "= 8 · 10⁵.",
        },
      },
      {
        texto: "Divisão: mantissas ÷ mantissas, expoentes − expoentes.",
        exemploReal: {
          contexto: "(9 · 10⁸) ÷ (3 · 10²)",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["mantissas", "9 ÷ 3 = 3"] },
              { rotulo: "2", valores: ["expoentes", "8 − 2 = 6"] },
              { rotulo: "3", valores: ["resultado", "3 · 10⁶"] },
            ],
          },
          destaque: "= 3 · 10⁶.",
        },
      },
      {
        texto: "Soma/subtração: converta todas para o MESMO expoente.",
        exemploReal: {
          contexto: "2 · 10⁴ + 3 · 10³",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["igualar expoentes", "3 · 10³ = 0,3 · 10⁴"] },
              { rotulo: "2", valores: ["somar mantissas", "2 + 0,3 = 2,3"] },
              { rotulo: "3", valores: ["resultado", "2,3 · 10⁴"] },
            ],
          },
          destaque: "= 2,3 · 10⁴.",
        },
      },
      {
        texto: "Se a mantissa passar de 10, AJUSTE.",
        exemploReal: {
          contexto: "5 · 10³ · 4 · 10² = 20 · 10⁵ → ajuste.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["mantissa", "5 · 4 = 20"] },
              { rotulo: "2", valores: ["ajuste", "20 = 2 · 10¹"] },
              { rotulo: "3", valores: ["reescrita", "2 · 10⁶"] },
            ],
          },
          destaque: "Mantissa deve ficar entre 1 e 10.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "(6 · 10⁵) · (2 · 10³) = ?",
    resposta: "1,2 · 10⁹",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["mantissas", "6 · 2 = 12"] },
        { rotulo: "2", valores: ["expoentes", "5 + 3 = 8"] },
        { rotulo: "3", valores: ["ajuste", "12 · 10⁸ = 1,2 · 10⁹"] },
      ],
    },
    passos: ["6·2 = 12.", "5+3 = 8 → 12 · 10⁸.", "Ajuste: 1,2 · 10⁹."],
  },

  momento06_praticaGuiada: {
    enunciado: "(3 · 10⁴) · (2 · 10⁵) =",
    dica: "Mantissas × / expoentes +.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6 · 10⁹" }, { nome: "6 · 10²⁰" }, { nome: "5 · 10⁹" }],
      respostaCerta: "6 · 10⁹",
      feedbackAcerto: "🎯 3·2 = 6, 4+5 = 9.",
      feedbackErro: "Multiplicação: soma expoentes.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "(8 · 10⁶) ÷ (2 · 10²) =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4 · 10⁴" }, { nome: "4 · 10⁸" }, { nome: "10 · 10⁴" }],
      respostaCerta: "4 · 10⁴",
      feedbackAcerto: "🎯 8÷2 = 4, 6−2 = 4.",
      feedbackErro: "Divisão: subtrai expoentes.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A luz percorre 3 · 10⁸ m/s. Em 60 s (1 min) ela viaja quantos metros?",
    problema: "Multiplique 3 · 10⁸ por 60.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1,8 · 10¹⁰ m" }, { nome: "3 · 10⁶⁰ m" }, { nome: "1,8 · 10⁹ m" }],
      respostaCerta: "1,8 · 10¹⁰ m",
      feedbackAcerto: "🎯 3·60 = 180 · 10⁸ = 1,8 · 10¹⁰.",
      feedbackErro: "3·60=180 → 1,8·10² · 10⁸.",
    },
  },

  momento09_revisao: {
    pontos: [
      "× : mantissas × / expoentes +.",
      "÷ : mantissas ÷ / expoentes −.",
      "+/− : iguale expoentes primeiro.",
      "Mantissa sempre entre 1 e 10.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "(2·10³)·(4·10²) =", opcoes: ["8 · 10⁵", "8 · 10⁶", "6 · 10⁵"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2·4=8, 3+2=5." },
      { pergunta: "(6·10⁵)÷(3·10²) =", opcoes: ["2 · 10³", "3 · 10³", "2 · 10⁷"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "6÷3, 5−2." },
      { pergunta: "10⁻³ · 10⁵ =", opcoes: ["10²", "10⁻¹⁵", "10⁸"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "−3 + 5 = 2." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Contas com NC no dia",
    materiais: ["Papel"],
    passos: ["Escreva 2 multiplicações e 2 divisões em NC.", "Resolva e mostre o passo do expoente."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
