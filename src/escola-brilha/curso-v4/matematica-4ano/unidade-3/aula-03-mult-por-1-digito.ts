import type { AulaV4 } from "../../types";

export const aula03_multPor1Digito: AulaV4 = {
  slug: "u3-03-mult-por-1-digito",
  titulo: "Multiplicar por 1 algarismo",
  iconeTrilha: "🧮",
  bncc: ["EF04MA06"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Conta armada com ×",
    historia:
      "{NOME}, pra multiplicar 234 × 3, arme como na soma. O de baixo passa em CADA dígito do de cima, começando pela unidade.",
  },
  momento02_exploracao: {
    instrucao: "Passo a passo.",
    cenas: [
      { tipo: "texto", texto: "Multiplico U, depois D, depois C. Se passa de 9, guardo o 'vai'.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como funciona o 'vai' na multiplicação?",
    pista: "É como na soma, mas o transporte vem da multiplicação.",
    revelacao: "Se 3 × 8 = 24, escrevo 4 e 'vai 2' pra próxima. Na próxima, primeiro multiplico, DEPOIS somo o 'vai'.",
  },
  momento04_explicacao: {
    titulo: "Algoritmo padrão",
    etapas: [
      {
        texto: "Vamos multiplicar 234 × 3.",
        exemploReal: {
          contexto: "Multiplicando coluna a coluna com 'vai'.",
          destaque: "234 × 3 = 702.",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [234, 3],
            resultado: 702,
            passos: [
              { coluna: "U", fala: "3 × 4 = 12. Escrevo 2, vai 1.", digito: 2, vaiUm: 1 },
              { coluna: "D", fala: "3 × 3 = 9. Somo o 'vai 1' → 10. Escrevo 0, vai 1.", digito: 0, vaiUm: 1 },
              { coluna: "C", fala: "3 × 2 = 6. Somo o 'vai 1' → 7. Escrevo 7.", digito: 7 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Multiplique 158 × 4.",
    passos: [
      "U: 4×8=32 (2, vai 3).",
      "D: 4×5=20 +3=23 (3, vai 2).",
      "C: 4×1=4 +2=6.",
      "Resultado: 632.",
    ],
    resposta: "632",
    casasValor: { numero: 632, mostrarDecomposicao: true, extenso: "seiscentos e trinta e dois" },
  },
  momento06_praticaGuiada: {
    enunciado: "247 × 3 = ?",
    dica: "Multiplica, soma o 'vai', escreve.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "mult",
      operandos: [247, 3],
      resultado: 741,
      modo: "pratica",
      perguntaFinal: "Resultado?",
      opcoes: [741, 641, 841],
      feedbackAcerto: "🎯 741.",
      feedbackErro: "3×7=21(1,v2), 3×4=12+2=14(4,v1), 3×2=6+1=7 → 741.",
      passos: [
        { coluna: "U", fala: "3 × 7 = 21 (1, vai 2).", digito: 1, vaiUm: 2 },
        { coluna: "D", fala: "3 × 4 = 12 + 2 = 14 (4, vai 1).", digito: 4, vaiUm: 1 },
        { coluna: "C", fala: "3 × 2 = 6 + 1 = 7.", digito: 7 },
      ],
    },
  },
  momento07_praticaIndependente: {
    enunciado: "356 × 4 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1.424" }, { nome: "1.324" }, { nome: "1.524" }],
      respostaCerta: "1.424",
      feedbackAcerto: "🎯 1.424.",
      feedbackErro: "4×6=24, 4×5=20+2=22, 4×3=12+2=14 → 1.424.",
    },
  },
  momento08_aplicacao: {
    contexto: "Cada saco tem 285 grãos.",
    problema: "5 sacos têm quantos grãos?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1.425" }, { nome: "1.325" }, { nome: "1.525" }],
      respostaCerta: "1.425",
      feedbackAcerto: "🎯 1.425 grãos.",
      feedbackErro: "285 × 5 = 1.425.",
    },
  },
  momento09_revisao: {
    pontos: ["Multiplique U → D → C.", "'Vai' entra na PRÓXIMA coluna, DEPOIS da multiplicação."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "123 × 4 = ?", opcoes: ["492", "482", "512"], correta: 0, feedbackAcerto: "🎉 492.", feedbackErro: "4×3=12, 4×2+1=9, 4×1=4 → 492." },
      { pergunta: "215 × 6 = ?", opcoes: ["1.290", "1.190", "1.390"], correta: 0, feedbackAcerto: "🎉 1.290.", feedbackErro: "6×5=30, 6×1+3=9, 6×2=12 → 1.290." },
      { pergunta: "308 × 7 = ?", opcoes: ["2.156", "2.056", "2.256"], correta: 0, feedbackAcerto: "🎉 2.156.", feedbackErro: "7×8=56, 7×0+5=5, 7×3=21 → 2.156." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Feira do Reino",
    materiais: ["Papel"],
    passos: ["Escolha um preço de 3 algarismos.", "Multiplique por 4 (pra 4 amigos).", "Arme e resolva."],
    registro: "📸 Foto da conta.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
