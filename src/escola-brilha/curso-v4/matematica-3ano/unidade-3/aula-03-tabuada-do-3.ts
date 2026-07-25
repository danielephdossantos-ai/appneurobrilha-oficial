import type { AulaV4 } from "../../types";

export const aula03_tabuadaDo3: AulaV4 = {
  slug: "u3-03-tabuada-3",
  titulo: "Tabuada do 3",
  iconeTrilha: "3️⃣",
  bncc: ["EF03MA07"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "De 3 em 3",
    historia: "Contar de 3 em 3: 3, 6, 9, 12… É a tabuada do 3.",
  },
  momento02_exploracao: {
    instrucao: "Some 3 a cada passo.",
    cenas: [
      { tipo: "texto", texto: "1×3=3 · 2×3=6 · 3×3=9 · 4×3=12 · 5×3=15." },
      { tipo: "texto", texto: "6×3=18 · 7×3=21 · 8×3=24 · 9×3=27 · 10×3=30.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como achar 7 × 3?",
    pista: "Some 3 sete vezes ou lembre 6×3=18 e some mais 3.",
    revelacao: "Você pode partir do próximo/anterior conhecido.",
  },
  momento04_explicacao: {
    titulo: "De 3 em 3",
    etapas: [
      {
        texto: "6 × 3: seis grupos de 3. 3+3+3+3+3+3=18.",
        exemploReal: {
          contexto: "6 pacotinhos com 3 balas cada.",
          destaque: "6 × 3 = 18.",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [6, 3],
            resultado: 18,
            passos: [
              { coluna: "U", fala: "6 vezes 3 = 18. Escrevo 8 na unidade.", digito: 8 },
              { coluna: "D", fala: "Escrevo 1 na dezena.", digito: 1 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "7 × 3 = ?",
    passos: ["Parta de 6×3=18.", "Some mais 3.", "18+3=21."],
    resposta: "7 × 3 = 21",
    casasValor: { numero: 21, mostrarDecomposicao: true, extenso: "vinte e um" },
  },
  momento06_praticaGuiada: {
    enunciado: "5 × 3 = ?",
    dica: "3+3+3+3+3.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "15" }, { nome: "12" }, { nome: "18" }],
      respostaCerta: "15",
      feedbackAcerto: "🎉 15.",
      feedbackErro: "3×5=15.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "8 × 3 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "24" }, { nome: "21" }, { nome: "27" }],
      respostaCerta: "24",
      feedbackAcerto: "🎯 24.",
      feedbackErro: "7×3=21, +3=24.",
    },
  },
  momento08_aplicacao: {
    contexto: "Cada triciclo tem 3 rodas. Há 9 triciclos.",
    problema: "Total de rodas:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "27" }, { nome: "24" }, { nome: "30" }],
      respostaCerta: "27",
      feedbackAcerto: "🎯 9 × 3 = 27.",
      feedbackErro: "9×3=27.",
    },
  },
  momento09_revisao: {
    pontos: ["De 3 em 3.", "Você pode 'saltar' partindo de um resultado conhecido."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "10 × 3 = ?",
      opcoes: [{ nome: "30" }, { nome: "27" }, { nome: "33" }],
      respostaCerta: "30",
      feedbackAcerto: "🎉 30.",
      feedbackErro: "10×3=30.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "4 × 3 = ?", opcoes: ["12", "9", "15"], correta: 0, feedbackAcerto: "🎉 12.", feedbackErro: "3+3+3+3=12." },
      { pergunta: "6 × 3 = ?", opcoes: ["18", "15", "21"], correta: 0, feedbackAcerto: "🎉 18.", feedbackErro: "6×3=18." },
      { pergunta: "9 × 3 = ?", opcoes: ["27", "24", "30"], correta: 0, feedbackAcerto: "🎉 27.", feedbackErro: "9×3=27." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Trio de tudo",
    materiais: ["Objetos em grupos de 3"],
    passos: ["Encontre 5 conjuntos de 3 em casa.", "Some tudo: 5×3=15."],
    registro: "📸 Foto dos conjuntos.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
