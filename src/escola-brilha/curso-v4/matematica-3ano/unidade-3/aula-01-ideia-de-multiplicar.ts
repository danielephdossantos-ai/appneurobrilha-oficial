import type { AulaV4 } from "../../types";

export const aula01_ideiaMultiplicar: AulaV4 = {
  slug: "u3-01-ideia-multiplicar",
  titulo: "Somar Muitas Vezes Igual",
  iconeTrilha: "✖️",
  bncc: ["EF03MA07"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Grupos iguais",
    historia:
      "Brilha viu 4 caixas com 3 maçãs cada. Contou 3+3+3+3=12. Existe um jeito mais rápido: MULTIPLICAR.",
  },
  momento02_exploracao: {
    instrucao: "Multiplicar = somar parcelas iguais.",
    cenas: [
      { tipo: "texto", texto: "3+3+3+3 = 4 vezes o 3 = 4 × 3." },
      { tipo: "texto", texto: "4 × 3 = 12.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Quando dá pra multiplicar?",
    pista: "Quando os grupos são iguais.",
    revelacao: "Multiplicação encurta somas de parcelas iguais.",
  },
  momento04_explicacao: {
    titulo: "De soma para multiplicação",
    etapas: [
      {
        texto: "5 grupos de 2 = 2+2+2+2+2 = 10. Ou 5 × 2 = 10.",
        exemploReal: {
          contexto: "Cinco pares de meias = 10 meias.",
          destaque: "5 × 2 = 10.",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [5, 2],
            resultado: 10,
            passos: [
              { coluna: "U", fala: "5 vezes 2 = 10. Escrevo 0 na unidade e 1 na dezena.", digito: 0 },
              { coluna: "D", fala: "Dezena: escrevo 1.", digito: 1 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "3 caixas com 4 lápis cada. Total?",
    passos: ["4+4+4 = 12.", "3 × 4 = 12."],
    resposta: "3 × 4 = 12",
    casasValor: { numero: 12, mostrarDecomposicao: true, extenso: "doze" },
  },
  momento06_praticaGuiada: {
    enunciado: "6 × 2 = ?",
    dica: "6 grupos de 2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "12" }, { nome: "10" }, { nome: "14" }],
      respostaCerta: "12",
      feedbackAcerto: "🎉 2+2+2+2+2+2=12.",
      feedbackErro: "Some 2 seis vezes.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "4 × 5 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "20" }, { nome: "15" }, { nome: "25" }],
      respostaCerta: "20",
      feedbackAcerto: "🎯 20.",
      feedbackErro: "5+5+5+5=20.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma bandeja tem 3 fileiras com 5 pães cada.",
    problema: "Total de pães:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "15" }, { nome: "12" }, { nome: "18" }],
      respostaCerta: "15",
      feedbackAcerto: "🎯 3 × 5 = 15.",
      feedbackErro: "5+5+5=15.",
    },
  },
  momento09_revisao: {
    pontos: ["Grupos iguais → multiplicação.", "a × b = somar b, a vezes."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "2 × 7 = ?",
      opcoes: [{ nome: "14" }, { nome: "12" }, { nome: "16" }],
      respostaCerta: "14",
      feedbackAcerto: "🎉 7+7=14.",
      feedbackErro: "7+7=14.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "3 × 6 = ?",
        opcoes: ["18", "15", "21"],
        correta: 0,
        feedbackAcerto: "🎉 18.",
        feedbackErro: "6+6+6=18.",
      },
      {
        pergunta: "4 × 4 = ?",
        opcoes: ["16", "12", "20"],
        correta: 0,
        feedbackAcerto: "🎉 16.",
        feedbackErro: "4+4+4+4=16.",
      },
      {
        pergunta: "5 × 5 = ?",
        opcoes: ["25", "20", "30"],
        correta: 0,
        feedbackAcerto: "🎉 25.",
        feedbackErro: "5+5+5+5+5=25.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Grupos em casa",
    materiais: ["Feijões ou tampinhas"],
    passos: ["Faça 4 grupos de 3.", "Some e depois multiplique."],
    registro: "📸 Foto dos grupos.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
