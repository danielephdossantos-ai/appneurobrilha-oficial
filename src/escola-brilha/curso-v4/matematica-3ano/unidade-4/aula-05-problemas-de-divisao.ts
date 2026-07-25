import type { AulaV4 } from "../../types";

export const aula05_problemasDivisao: AulaV4 = {
  slug: "u4-05-problemas-divisao",
  titulo: "Problemas de Dividir",
  iconeTrilha: "🧩",
  bncc: ["EF03MA10"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Palavras que pedem dividir",
    historia: "'Repartir igualmente', 'quantos grupos', 'quanto para cada' → chamam a DIVISÃO.",
  },
  momento02_exploracao: {
    instrucao: "Palavras-chave.",
    cenas: [
      { tipo: "texto", texto: "Repartir · Cada · Igualmente · Quantos grupos → DIVISÃO." },
      { tipo: "texto", texto: "Cuidado: 'ao todo' → soma; 'sobrou' → subtração.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como escolher entre soma, subtração, multiplicação e divisão?",
    pista: "Leia devagar. Anote os números. Ache a pergunta.",
    revelacao: "As palavras-chave revelam a operação.",
  },
  momento04_explicacao: {
    titulo: "Estratégia de problema",
    etapas: [
      {
        texto: "Enunciado: '48 lápis em 6 estojos iguais. Quantos por estojo?'",
        exemploReal: {
          contexto: "'Igualmente' → divisão.",
          destaque: "48 ÷ 6 = 8.",
          contaPassoAPasso: {
            operacao: "div",
            operandos: [48, 6],
            resultado: 8,
            passos: [{ coluna: "U", fala: "48 ÷ 6 = 8. Cada estojo tem 8 lápis.", digito: 8 }],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "36 crianças em times de 6. Quantos times?",
    passos: ["'Quantos grupos' → divisão.", "36 ÷ 6 = 6."],
    resposta: "6 times",
    casasValor: { numero: 6, mostrarDecomposicao: false, extenso: "seis" },
  },
  momento06_praticaGuiada: {
    enunciado: "24 flores em 3 vasos iguais. Cada vaso:",
    dica: "'Iguais' → divisão.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8" }, { nome: "7" }, { nome: "9" }],
      respostaCerta: "8",
      feedbackAcerto: "🎉 24 ÷ 3 = 8.",
      feedbackErro: "8×3=24.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "45 balas para 5 amigos. Cada um:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "9" }, { nome: "8" }, { nome: "10" }],
      respostaCerta: "9",
      feedbackAcerto: "🎯 45 ÷ 5 = 9.",
      feedbackErro: "9×5=45.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma professora tem 32 alunos e forma duplas.",
    problema: "Quantas duplas?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "16" }, { nome: "14" }, { nome: "18" }],
      respostaCerta: "16",
      feedbackAcerto: "🎯 32 ÷ 2 = 16.",
      feedbackErro: "16×2=32.",
    },
  },
  momento09_revisao: {
    pontos: ["Leia o problema.", "Ache a palavra-chave.", "Escolha a operação."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "'Repartir igualmente' pede qual conta?",
      opcoes: [{ nome: "Divisão" }, { nome: "Soma" }, { nome: "Multiplicação" }],
      respostaCerta: "Divisão",
      feedbackAcerto: "🎉 Divisão.",
      feedbackErro: "Repartir → dividir.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "28 doces para 7 crianças. Cada uma:", opcoes: ["4", "3", "5"], correta: 0, feedbackAcerto: "🎉 4.", feedbackErro: "28÷7=4." },
      { pergunta: "60 cadeiras em 6 fileiras. Cada fileira:", opcoes: ["10", "8", "12"], correta: 0, feedbackAcerto: "🎉 10.", feedbackErro: "60÷6=10." },
      { pergunta: "42 pães em 7 sacos. Cada saco:", opcoes: ["6", "5", "7"], correta: 0, feedbackAcerto: "🎉 6.", feedbackErro: "42÷7=6." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Repartir do jantar 2",
    materiais: ["Refeição em porções"],
    passos: ["Conte quantas pessoas jantarão.", "Reparta um alimento igualmente."],
    registro: "📸 Foto das porções.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
