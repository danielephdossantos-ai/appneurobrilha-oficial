import type { AulaV4 } from "../../types";

export const aula02_somarComReagrupar: AulaV4 = {
  slug: "u2-02-somar-com-reagrupar",
  titulo: "Somar com 'vai 1' até 10.000",
  iconeTrilha: "🔟",
  bncc: ["EF04MA03", "EF04MA05"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Passou de 9!",
    historia:
      "{NOME}, quando a soma de uma coluna passa de 9, a gente reagrupa: 10 U viram 1 D · 10 D viram 1 C · 10 C viram 1 UM. O 'vai 1' sobe pra coluna vizinha à ESQUERDA.",
  },
  momento02_exploracao: {
    instrucao: "Repare no reagrupamento.",
    cenas: [
      { tipo: "texto", texto: "13 = 1 dezena + 3 unidades.", destaque: true },
      { tipo: "texto", texto: "Escrevo 3 na coluna e 'vai 1' pra próxima." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Aonde vai o 1?",
    pista: "Sempre pra coluna vizinha à ESQUERDA — nunca em cima do próprio dígito.",
    revelacao: "Se U passa de 9, o 'vai 1' vai pra D. Se D passa de 9, vai pra C. E assim por diante.",
  },
  momento04_explicacao: {
    titulo: "Soma com reagrupamento até 4 casas",
    etapas: [
      {
        texto: "Vamos somar 2.578 + 1.264.",
        exemploReal: {
          contexto: "Reagrupa em U (12 → 2 e vai 1) e em D (14 → 4 e vai 1).",
          destaque: "2.578 + 1.264 = 3.842.",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [2578, 1264],
            resultado: 3842,
            passos: [
              { coluna: "U", fala: "8 + 4 = 12. Escrevo 2, vai 1 pra dezena.", digito: 2, vaiUm: 1 },
              { coluna: "D", fala: "7 + 6 + 1 = 14. Escrevo 4, vai 1 pra centena.", digito: 4, vaiUm: 1 },
              { coluna: "C", fala: "5 + 2 + 1 = 8. Escrevo 8.", digito: 8 },
              { coluna: "UM", fala: "2 + 1 = 3. Escrevo 3.", digito: 3 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Some 3.487 + 1.256.",
    passos: [
      "U: 7+6=13 (3, vai 1).",
      "D: 8+5+1=14 (4, vai 1).",
      "C: 4+2+1=7.",
      "UM: 3+1=4.",
    ],
    resposta: "4.743",
    casasValor: { numero: 4743, mostrarDecomposicao: true, extenso: "quatro mil, setecentos e quarenta e três" },
  },
  momento06_praticaGuiada: {
    enunciado: "1.376 + 2.489 = ?",
    dica: "Se uma coluna passa de 9, escreva a unidade dela e mande 1 pra próxima.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [1376, 2489],
      resultado: 3865,
      modo: "pratica",
      perguntaFinal: "Total?",
      opcoes: [3865, 3765, 3965],
      feedbackAcerto: "🎯 6+9=15(5, vai 1), 7+8+1=16(6, vai 1), 3+4+1=8, 1+2=3 → 3.865.",
      feedbackErro: "Coluna a coluna com 'vai 1': 3.865.",
      passos: [
        { coluna: "U", fala: "6 + 9 = 15. Escrevo 5, vai 1.", digito: 5, vaiUm: 1 },
        { coluna: "D", fala: "7 + 8 + 1 = 16. Escrevo 6, vai 1.", digito: 6, vaiUm: 1 },
        { coluna: "C", fala: "3 + 4 + 1 = 8.", digito: 8 },
        { coluna: "UM", fala: "1 + 2 = 3.", digito: 3 },
      ],
    },
  },
  momento07_praticaIndependente: {
    enunciado: "2.657 + 1.198 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3.855" }, { nome: "3.755" }, { nome: "3.955" }],
      respostaCerta: "3.855",
      feedbackAcerto: "🎯 3.855.",
      feedbackErro: "7+8=15(5, vai 1), 5+9+1=15(5, vai 1), 6+1+1=8, 2+1=3 → 3.855.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma fábrica produziu 2.489 pães na segunda e 1.657 na terça.",
    problema: "Total dos dois dias:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4.146" }, { nome: "4.046" }, { nome: "4.246" }],
      respostaCerta: "4.146",
      feedbackAcerto: "🎯 4.146 pães.",
      feedbackErro: "9+7=16(6, vai 1), 8+5+1=14(4, vai 1), 4+6+1=11(1, vai 1), 2+1+1=4 → 4.146.",
    },
  },
  momento09_revisao: {
    pontos: ["Passou de 9? Reagrupa.", "'Vai 1' vai pra ESQUERDA.", "Nunca escreva dois dígitos numa mesma coluna."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1.567 + 2.278 = ?", opcoes: ["3.845", "3.745", "3.945"], correta: 0, feedbackAcerto: "🎉 3.845.", feedbackErro: "Reagrupe: 3.845." },
      { pergunta: "2.395 + 1.687 = ?", opcoes: ["4.082", "3.982", "4.182"], correta: 0, feedbackAcerto: "🎉 4.082.", feedbackErro: "5+7=12, 9+8+1=18, 3+6+1=10, 2+1+1=4 → 4.082." },
      { pergunta: "4.567 + 3.245 = ?", opcoes: ["7.812", "7.712", "7.912"], correta: 0, feedbackAcerto: "🎉 7.812.", feedbackErro: "Coluna a coluna: 7.812." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Vai 1 em Família",
    materiais: ["Papel", "Caneta"],
    passos: ["Peça 2 números de 4 dígitos com pelo menos um 'vai 1'.", "Arme e some.", "Explique cada 'vai 1' em voz alta."],
    registro: "📸 Foto da conta armada.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
