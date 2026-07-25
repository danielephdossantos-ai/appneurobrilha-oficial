import type { AulaV4 } from "../../types";

export const aula07_missaoFinalU4: AulaV4 = {
  slug: "u4-07-missao-final",
  titulo: "Missão Final: Repartidor(a) do Reino",
  iconeTrilha: "🏆",
  bncc: ["EF04MA07", "EF04MA27"],
  duracaoMin: 25,
  metodologias: ["cpa", "vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "Prova do Repartidor",
    historia:
      "{NOME}, hora de repartir o Reino: divisão exata, com resto, na chave, ÷10/100/1000 e problemas de repartir e agrupar.",
  },
  momento02_exploracao: {
    instrucao: "Aquecimento.",
    cenas: [
      { tipo: "tabuada", fator: 8, ate: 10, titulo: "Tabuada do 8" },
      { tipo: "texto", texto: "Divisão começa pela MAIOR casa. Resto SEMPRE < divisor.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como conferir uma divisão?",
    pista: "Use a multiplicação.",
    revelacao: "Quociente × divisor + resto = dividendo. Se bate, tá certo.",
  },
  momento04_explicacao: {
    titulo: "Prova real",
    etapas: [
      {
        texto: "247 ÷ 6 = 41, resto 1.",
        exemploReal: {
          contexto: "Confira: 41 × 6 + 1 = 246 + 1 = 247. ✅",
          destaque: "Bate.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Divida 285 ÷ 5.",
    passos: ["28÷5=5(r 3), traz 5 → 35÷5=7.", "Resultado: 57, resto 0."],
    resposta: "57",
  },
  momento06_praticaGuiada: {
    enunciado: "168 ÷ 3 = ?",
    dica: "Comece pela centena.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "56" }, { nome: "54" }, { nome: "58" }],
      respostaCerta: "56",
      feedbackAcerto: "🎯 56.",
      feedbackErro: "1÷3 não dá, 16÷3=5(r 1), 18÷3=6 → 56.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "76 ÷ 9 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8, resto 4" }, { nome: "7, resto 13" }, { nome: "9, resto 0" }],
      respostaCerta: "8, resto 4",
      feedbackAcerto: "🎯 8 e sobra 4.",
      feedbackErro: "9×8=72; 76−72=4.",
    },
  },
  momento08_aplicacao: {
    contexto: "R$ 456 divididos igualmente entre 8 amigos.",
    problema: "Quanto para cada e quanto sobra?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 57 cada, sobra 0" }, { nome: "R$ 56 cada, sobram R$ 8" }, { nome: "R$ 58 cada, sobram −R$ 8" }],
      respostaCerta: "R$ 57 cada, sobra 0",
      feedbackAcerto: "🎯 R$ 57 exato.",
      feedbackErro: "456 ÷ 8 = 57, resto 0.",
    },
  },
  momento09_revisao: {
    pontos: ["Divisão pela maior casa.", "Resto < divisor.", "Prova real: q × d + r = D."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "144 ÷ 4 = ?", opcoes: ["36", "34", "38"], correta: 0, feedbackAcerto: "🎉 36.", feedbackErro: "14÷4=3(r 2), 24÷4=6 → 36." },
      { pergunta: "85 ÷ 6 = ?", opcoes: ["14, resto 1", "13, resto 7", "15, resto −5"], correta: 0, feedbackAcerto: "🎉 14 e sobra 1.", feedbackErro: "6×14=84; 85−84=1." },
      { pergunta: "3.000 ÷ 100 = ?", opcoes: ["30", "3", "300"], correta: 0, feedbackAcerto: "🎉 30.", feedbackErro: "Apagar 2 zeros." },
      { pergunta: "Terça parte de 96 = ?", opcoes: ["32", "30", "34"], correta: 0, feedbackAcerto: "🎉 32.", feedbackErro: "96÷3=32." },
      { pergunta: "108 alunos em 9 turmas: por turma?", opcoes: ["12", "10", "14"], correta: 0, feedbackAcerto: "🎉 12.", feedbackErro: "108÷9=12." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma do Repartidor",
    materiais: ["Papel"],
    passos: ["Faça 3 divisões: 1 exata na chave, 1 com resto, 1 problema de repartir.", "Aplique a prova real."],
    registro: "📸 Foto das 3 divisões conferidas.",
  },
  recompensa: { xp: 250, moedas: 130, medalha: "Repartidor(a) do Reino" },
};
