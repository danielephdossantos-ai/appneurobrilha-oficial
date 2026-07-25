import type { AulaV4 } from "../../types";

export const aula04_tabuadas4e5: AulaV4 = {
  slug: "u3-04-tabuadas-4-5",
  titulo: "Tabuadas do 4 e do 5",
  iconeTrilha: "🖐️",
  bncc: ["EF03MA07"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Mão e cadeirinhas",
    historia: "A mão tem 5 dedos: contar de 5 em 5 é fácil. Cadeirinhas com 4 pernas: contar de 4 em 4 vira multiplicação.",
  },
  momento02_exploracao: {
    instrucao: "Duas tabuadas úteis.",
    cenas: [
      { tipo: "tabuada", fator: 4, ate: 10, titulo: "Tabuada do 4" },
      { tipo: "tabuada", fator: 5, ate: 10, titulo: "Tabuada do 5", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Truque do 5?",
    pista: "Termina em 0 ou 5.",
    revelacao: "n × 5 sempre termina em 0 (n par) ou 5 (n ímpar).",
  },
  momento04_explicacao: {
    titulo: "Padrões do 4 e do 5",
    etapas: [
      {
        texto: "7 × 5: peça 7 mãos. 7×5=35.",
        exemploReal: {
          contexto: "Cada mão = 5 dedos.",
          destaque: "7 × 5 = 35.",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [7, 5],
            resultado: 35,
            passos: [
              { coluna: "U", fala: "7 vezes 5 = 35. Escrevo 5 na unidade.", digito: 5 },
              { coluna: "D", fala: "Escrevo 3 na dezena.", digito: 3 },
            ],
          },
        },
      },
      {
        texto: "6 × 4: seis cadeirinhas com 4 pernas.",
        exemploReal: {
          contexto: "Cada cadeira = 4 pernas.",
          destaque: "6 × 4 = 24.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "8 × 5 = ?",
    passos: ["Termina em 0 (8 par).", "8×5=40."],
    resposta: "8 × 5 = 40",
    casasValor: { numero: 40, mostrarDecomposicao: true, extenso: "quarenta" },
  },
  momento06_praticaGuiada: {
    enunciado: "6 × 4 = ?",
    dica: "6 grupos de 4.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "24" }, { nome: "20" }, { nome: "28" }],
      respostaCerta: "24",
      feedbackAcerto: "🎉 24.",
      feedbackErro: "4+4+4+4+4+4=24.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "9 × 5 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "45" }, { nome: "40" }, { nome: "50" }],
      respostaCerta: "45",
      feedbackAcerto: "🎯 45.",
      feedbackErro: "9 ímpar → termina em 5. 45.",
    },
  },
  momento08_aplicacao: {
    contexto: "7 carros no estacionamento, cada um com 4 rodas.",
    problema: "Total de rodas:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "28" }, { nome: "24" }, { nome: "32" }],
      respostaCerta: "28",
      feedbackAcerto: "🎯 7 × 4 = 28.",
      feedbackErro: "7×4=28.",
    },
  },
  momento09_revisao: {
    pontos: ["×5 termina em 0 ou 5.", "×4 = dobro do dobro."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "10 × 4 = ?",
      opcoes: [{ nome: "40" }, { nome: "36" }, { nome: "44" }],
      respostaCerta: "40",
      feedbackAcerto: "🎉 40.",
      feedbackErro: "10×4=40.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "5 × 4 = ?", opcoes: ["20", "16", "24"], correta: 0, feedbackAcerto: "🎉 20.", feedbackErro: "5×4=20." },
      { pergunta: "6 × 5 = ?", opcoes: ["30", "25", "35"], correta: 0, feedbackAcerto: "🎉 30.", feedbackErro: "6×5=30." },
      { pergunta: "9 × 4 = ?", opcoes: ["36", "32", "40"], correta: 0, feedbackAcerto: "🎉 36.", feedbackErro: "9×4=36." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Mão e cadeira",
    materiais: ["Contar dedos", "Contar pés de móveis"],
    passos: ["Conte dedos de 5 em 5.", "Conte pés de cadeiras de 4 em 4."],
    registro: "📸 Foto da atividade.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
