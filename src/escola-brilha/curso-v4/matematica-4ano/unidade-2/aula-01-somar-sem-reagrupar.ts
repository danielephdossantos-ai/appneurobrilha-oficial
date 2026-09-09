import type { AulaV4 } from "../../types";

export const aula01_somarSemReagrupar: AulaV4 = {
  slug: "u2-01-somar-sem-reagrupar",
  titulo: "Somando até 9.999 (sem reagrupar)",
  iconeTrilha: "➕",
  bncc: ["EF04MA03", "EF04MA05"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp", "rme"],

  momento01_motivacao: {
    titulo: "O Reino cresceu!",
    historia:
      "{NOME}, o escriba do Reino trouxe dois pergaminhos: 3.241 famílias na Vila do Sol e 2.145 na Vila da Lua. Quantas famílias há nas duas juntas?",
  },
  momento02_exploracao: {
    instrucao: "Somando coluna por coluna, sem passar de 9.",
    cenas: [
      { tipo: "texto", texto: "Arme por casas: UM · C · D · U.", destaque: true },
      { tipo: "texto", texto: "Sempre começamos pela UNIDADE." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que sempre começar pela unidade?",
    pista: "Se alguma coluna passar de 9, o 'vai 1' precisa entrar na próxima.",
    revelacao: "Da direita pra esquerda: U → D → C → UM. Assim a gente nunca se perde.",
  },
  momento04_explicacao: {
    titulo: "Soma coluna a coluna",
    etapas: [
      {
        texto: "Vamos somar 3.241 + 2.145 armado.",
        exemploReal: {
          contexto: "Nenhuma coluna passa de 9, então não tem 'vai 1'.",
          destaque: "3.241 + 2.145 = 5.386.",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [3241, 2145],
            resultado: 5386,
            passos: [
              { coluna: "U", fala: "1 + 5 = 6.", digito: 6 },
              { coluna: "D", fala: "4 + 4 = 8.", digito: 8 },
              { coluna: "C", fala: "2 + 1 = 3.", digito: 3 },
              { coluna: "UM", fala: "3 + 2 = 5.", digito: 5 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Some 4.130 + 2.250.",
    passos: ["U: 0+0=0.", "D: 3+5=8.", "C: 1+2=3.", "UM: 4+2=6."],
    resposta: "6.380",
    casasValor: { numero: 6380, mostrarDecomposicao: true, extenso: "seis mil, trezentos e oitenta" },
  },
  momento06_praticaGuiada: {
    enunciado: "5.132 + 2.416 = ?",
    dica: "Comece pela unidade.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [5132, 2416],
      resultado: 7548,
      modo: "pratica",
      perguntaFinal: "Total?",
      opcoes: [7548, 7548, 7648],
      feedbackAcerto: "🎯 2+6=8, 3+1=4, 1+4=5, 5+2=7 → 7.548.",
      feedbackErro: "Coluna a coluna: 7.548.",
      passos: [
        { coluna: "U", fala: "2 + 6 = 8.", digito: 8 },
        { coluna: "D", fala: "3 + 1 = 4.", digito: 4 },
        { coluna: "C", fala: "1 + 4 = 5.", digito: 5 },
        { coluna: "UM", fala: "5 + 2 = 7.", digito: 7 },
      ],
    },
  },
  momento07_praticaIndependente: {
    enunciado: "3.210 + 4.560 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7.770" }, { nome: "7.670" }, { nome: "8.770" }],
      respostaCerta: "7.770",
      feedbackAcerto: "🎯 7.770.",
      feedbackErro: "0+0=0, 1+6=7, 2+5=7, 3+4=7 → 7.770.",
    },
  },
  momento08_aplicacao: {
    contexto: "A Vila do Sol tem 3.412 moradores e a Vila do Vento tem 2.150.",
    problema: "Quantos moradores ao todo?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5.562" }, { nome: "5.462" }, { nome: "5.652" }],
      respostaCerta: "5.562",
      feedbackAcerto: "🎯 5.562 moradores.",
      feedbackErro: "3.412 + 2.150 = 5.562.",
    },
  },
  momento09_revisao: {
    pontos: ["Some da direita pra esquerda.", "Sem passar de 9 nenhuma coluna, não tem 'vai 1'."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2.310 + 1.250 = ?", opcoes: ["3.560", "3.650", "3.460"], correta: 0, feedbackAcerto: "🎉 3.560.", feedbackErro: "0+0=0, 1+5=6, 3+2=5, 2+1=3." },
      { pergunta: "4.201 + 3.150 = ?", opcoes: ["7.351", "7.451", "7.251"], correta: 0, feedbackAcerto: "🎉 7.351.", feedbackErro: "Coluna a coluna: 7.351." },
      { pergunta: "5.030 + 2.140 = ?", opcoes: ["7.170", "7.070", "7.270"], correta: 0, feedbackAcerto: "🎉 7.170.", feedbackErro: "5.030+2.140=7.170." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Contas do Reino",
    materiais: ["Papel", "Caneta"],
    passos: ["Peça a alguém 2 números de 4 algarismos sem reagrupamento (sem coluna >9 na soma).", "Arme e some.", "Confira."],
    registro: "📸 Foto da conta armada.",
  },
  recompensa: { xp: 180, moedas: 90 },
};
