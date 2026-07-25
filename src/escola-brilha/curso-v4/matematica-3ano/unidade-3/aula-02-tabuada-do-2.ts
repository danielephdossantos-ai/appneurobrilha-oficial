import type { AulaV4 } from "../../types";

export const aula02_tabuadaDo2: AulaV4 = {
  slug: "u3-02-tabuada-2",
  titulo: "Tabuada do 2",
  iconeTrilha: "2️⃣",
  bncc: ["EF03MA07"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "De 2 em 2",
    historia: "Contar de 2 em 2 é a tabuada do 2. É a mesma coisa que DOBRAR um número.",
  },
  momento02_exploracao: {
    instrucao: "Multiplicar por 2 = dobrar.",
    cenas: [
      { tipo: "texto", texto: "1×2=2 · 2×2=4 · 3×2=6 · 4×2=8 · 5×2=10." },
      { tipo: "texto", texto: "6×2=12 · 7×2=14 · 8×2=16 · 9×2=18 · 10×2=20.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como dobrar um número?",
    pista: "Some ele com ele mesmo.",
    revelacao: "n × 2 = n + n.",
  },
  momento04_explicacao: {
    titulo: "Dobrar é multiplicar por 2",
    etapas: [
      {
        texto: "7 × 2: peça 7 pares de meias. 7+7=14.",
        exemploReal: {
          contexto: "Cada par tem 2 meias.",
          destaque: "7 × 2 = 14.",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [7, 2],
            resultado: 14,
            passos: [
              { coluna: "U", fala: "7 vezes 2 = 14. Escrevo 4 na unidade.", digito: 4 },
              { coluna: "D", fala: "Escrevo 1 na dezena.", digito: 1 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "8 × 2 = ?",
    passos: ["Dobre 8.", "8+8=16."],
    resposta: "8 × 2 = 16",
    casasValor: { numero: 16, mostrarDecomposicao: true, extenso: "dezesseis" },
  },
  momento06_praticaGuiada: {
    enunciado: "6 × 2 = ?",
    dica: "Dobre o 6.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "12" }, { nome: "10" }, { nome: "14" }],
      respostaCerta: "12",
      feedbackAcerto: "🎉 6+6=12.",
      feedbackErro: "6+6=12.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "9 × 2 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "18" }, { nome: "16" }, { nome: "20" }],
      respostaCerta: "18",
      feedbackAcerto: "🎯 18.",
      feedbackErro: "9+9=18.",
    },
  },
  momento08_aplicacao: {
    contexto: "10 bicicletas na loja. Cada bicicleta tem 2 rodas.",
    problema: "Total de rodas:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "20" }, { nome: "18" }, { nome: "22" }],
      respostaCerta: "20",
      feedbackAcerto: "🎯 10 × 2 = 20.",
      feedbackErro: "10+10=20.",
    },
  },
  momento09_revisao: {
    pontos: ["Multiplicar por 2 = dobrar.", "Tabuada do 2 sempre resulta em número par."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "5 × 2 = ?",
      opcoes: [{ nome: "10" }, { nome: "8" }, { nome: "12" }],
      respostaCerta: "10",
      feedbackAcerto: "🎉 10.",
      feedbackErro: "5+5=10.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "4 × 2 = ?", opcoes: ["8", "6", "10"], correta: 0, feedbackAcerto: "🎉 8.", feedbackErro: "4+4=8." },
      { pergunta: "7 × 2 = ?", opcoes: ["14", "12", "16"], correta: 0, feedbackAcerto: "🎉 14.", feedbackErro: "7+7=14." },
      { pergunta: "10 × 2 = ?", opcoes: ["20", "18", "22"], correta: 0, feedbackAcerto: "🎉 20.", feedbackErro: "10+10=20." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Cartaz do 2",
    materiais: ["Papel", "Caneta"],
    passos: ["Escreva a tabuada do 2 até 10.", "Desenhe pares (olhos, mãos, sapatos)."],
    registro: "📸 Foto do cartaz.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
