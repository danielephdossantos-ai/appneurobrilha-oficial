import type { AulaV4 } from "../../types";

export const aula05_dobroTriploQuadruplo: AulaV4 = {
  slug: "u3-05-dobro-triplo-quadruplo",
  titulo: "Dobro, triplo, quádruplo",
  iconeTrilha: "🎯",
  bncc: ["EF04MA04", "EF04MA06"],
  duracaoMin: 20,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Palavras da multiplicação",
    historia:
      "{NOME}, dobro é ×2. Triplo é ×3. Quádruplo é ×4. Décuplo é ×10. É a maneira elegante de dizer 'multiplicar por'.",
  },
  momento02_exploracao: {
    instrucao: "Aprenda as palavras.",
    cenas: [
      { tipo: "texto", texto: "Dobro = ×2 · Triplo = ×3 · Quádruplo = ×4 · Quíntuplo = ×5.", destaque: true },
      { tipo: "texto", texto: "Décuplo = ×10 · Cêntuplo = ×100." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Qual a diferença entre 'dobro de 50' e '50 a mais'?",
    pista: "Dobro é multiplicar por 2. 'A mais' é somar.",
    revelacao: "Dobro de 50 = 100. 50 + 50 (a mais) também dá 100 — porque dobro É somar 2 vezes.",
  },
  momento04_explicacao: {
    titulo: "Da palavra ao cálculo",
    etapas: [
      {
        texto: "Triplo de 240 = 240 × 3.",
        exemploReal: {
          contexto: "3 × 240.",
          destaque: "Triplo de 240 = 720.",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [240, 3],
            resultado: 720,
            passos: [
              { coluna: "U", fala: "3 × 0 = 0.", digito: 0 },
              { coluna: "D", fala: "3 × 4 = 12 (2, vai 1).", digito: 2, vaiUm: 1 },
              { coluna: "C", fala: "3 × 2 = 6 + 1 = 7.", digito: 7 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Qual o quádruplo de 125?",
    passos: ["Quádruplo = ×4.", "125 × 4 = 500."],
    resposta: "500",
    casasValor: { numero: 500, mostrarDecomposicao: true, extenso: "quinhentos" },
  },
  momento06_praticaGuiada: {
    enunciado: "Dobro de 234 = ?",
    dica: "×2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "468" }, { nome: "234" }, { nome: "236" }],
      respostaCerta: "468",
      feedbackAcerto: "🎯 468.",
      feedbackErro: "234×2=468.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Triplo de 156 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "468" }, { nome: "312" }, { nome: "156" }],
      respostaCerta: "468",
      feedbackAcerto: "🎯 468.",
      feedbackErro: "156×3=468.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma cesta tem 45 maçãs.",
    problema: "Quantas maçãs no quíntuplo de cestas iguais?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "225" }, { nome: "215" }, { nome: "235" }],
      respostaCerta: "225",
      feedbackAcerto: "🎯 225.",
      feedbackErro: "45×5=225.",
    },
  },
  momento09_revisao: {
    pontos: ["Dobro=×2 · Triplo=×3 · Quádruplo=×4 · Quíntuplo=×5 · Décuplo=×10."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Dobro de 87 = ?", opcoes: ["174", "164", "184"], correta: 0, feedbackAcerto: "🎉 174.", feedbackErro: "87×2=174." },
      { pergunta: "Triplo de 62 = ?", opcoes: ["186", "176", "196"], correta: 0, feedbackAcerto: "🎉 186.", feedbackErro: "62×3=186." },
      { pergunta: "Quádruplo de 125 = ?", opcoes: ["500", "400", "600"], correta: 0, feedbackAcerto: "🎉 500.", feedbackErro: "125×4=500." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Palavras Multiplicadoras",
    materiais: ["Papel"],
    passos: ["Escolha 3 números.", "Calcule dobro, triplo e quádruplo de cada um.", "Escreva por extenso."],
    registro: "📸 Foto do papel.",
  },
  recompensa: { xp: 180, moedas: 90 },
};
