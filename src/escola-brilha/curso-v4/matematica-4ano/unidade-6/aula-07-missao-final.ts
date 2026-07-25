import type { AulaV4 } from "../../types";

export const aula07_missaoFinalU6: AulaV4 = {
  slug: "u6-07-missao-final",
  titulo: "Missão Final: Medidor(a) do Reino",
  iconeTrilha: "🏆",
  bncc: ["EF04MA20", "EF04MA21", "EF04MA22", "EF04MA23", "EF04MA24"],
  duracaoMin: 25,
  metodologias: ["rme", "cpa"],

  momento01_motivacao: {
    titulo: "Prova das Medidas",
    historia:
      "{NOME}, medir é dominar o Reino: comprimento, massa, capacidade, tempo, dinheiro e perímetro.",
  },
  momento02_exploracao: {
    instrucao: "Cheat-sheet.",
    cenas: [
      { tipo: "texto", texto: "1 m=100 cm · 1 cm=10 mm · 1 kg=1000 g · 1 L=1000 mL · 1 h=60 min · 1 R$=100 centavos.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Qual unidade escolher?",
    pista: "Depende do tamanho.",
    revelacao: "Grande → unidade grande (m, kg, L). Pequeno → pequena (cm, g, mL).",
  },
  momento04_explicacao: {
    titulo: "Roteiro",
    etapas: [
      {
        texto: "1. Leia. 2. Identifique a unidade. 3. Converta se preciso. 4. Opere.",
        exemploReal: {
          contexto: "2 m e 30 cm + 1 m e 80 cm.",
          destaque: "2,30 + 1,80 = 4,10 m.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "2 kg e 500 g + 1 kg e 750 g",
    passos: ["500+750=1.250 g = 1 kg e 250 g.", "2+1+1 = 4 kg e 250 g."],
    resposta: "4 kg e 250 g",
  },
  momento06_praticaGuiada: {
    enunciado: "3 h 40 min + 1 h 30 min = ?",
    dica: "Some minutos, ajuste se passar de 60.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5 h 10 min" }, { nome: "4 h 70 min" }, { nome: "5 h" }],
      respostaCerta: "5 h 10 min",
      feedbackAcerto: "🎯 5 h 10 min.",
      feedbackErro: "40+30=70 min = 1 h 10 min. 3+1+1=5 h 10 min.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Perímetro de um retângulo 9 × 6:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "30" }, { nome: "54" }, { nome: "15" }],
      respostaCerta: "30",
      feedbackAcerto: "🎯 30.",
      feedbackErro: "2×(9+6)=30.",
    },
  },
  momento08_aplicacao: {
    contexto: "Compra: 2 kg de arroz a R$ 8,50/kg e 1,5 kg de feijão a R$ 12,00/kg.",
    problema: "Total:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 35,00" }, { nome: "R$ 34,00" }, { nome: "R$ 36,00" }],
      respostaCerta: "R$ 35,00",
      feedbackAcerto: "🎯 R$ 35,00.",
      feedbackErro: "2×8,50=17. 1,5×12=18. 17+18=35.",
    },
  },
  momento09_revisao: {
    pontos: ["Comprimento, massa, capacidade → base 10/100/1.000.", "Tempo → base 60.", "Dinheiro → 100 centavos = 1 real."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "3 m = ? cm", opcoes: ["300", "30", "3.000"], correta: 0, feedbackAcerto: "🎉 300.", feedbackErro: "×100." },
      { pergunta: "1 kg e 200 g = ? g", opcoes: ["1.200", "1.020", "12.000"], correta: 0, feedbackAcerto: "🎉 1.200.", feedbackErro: "1.000+200=1.200." },
      { pergunta: "2 h 15 min = ? min", opcoes: ["135", "215", "125"], correta: 0, feedbackAcerto: "🎉 135.", feedbackErro: "120+15=135." },
      { pergunta: "R$ 50 − R$ 27,80 = ?", opcoes: ["R$ 22,20", "R$ 23,20", "R$ 22,80"], correta: 0, feedbackAcerto: "🎉 R$ 22,20.", feedbackErro: "50,00−27,80=22,20." },
      { pergunta: "Quadrado lado 11. P?", opcoes: ["44", "22", "121"], correta: 0, feedbackAcerto: "🎉 44.", feedbackErro: "4×11=44." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma do Medidor",
    materiais: ["Régua", "Balança", "Copo medidor"],
    passos: ["Faça uma tabela com 5 medidas (m, cm, kg, g, L, mL).", "Anote e converta."],
    registro: "📸 Foto da tabela.",
  },
  recompensa: { xp: 250, moedas: 130, medalha: "Medidor(a) do Reino" },
};
