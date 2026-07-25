import type { AulaV4 } from "../../types";

export const aula06_problemasFracoesDecimais: AulaV4 = {
  slug: "u5-06-problemas-fracoes-decimais",
  titulo: "Problemas de frações e decimais",
  iconeTrilha: "🧩",
  bncc: ["EF04MA09", "EF04MA10", "EF04MA25"],
  duracaoMin: 22,
  metodologias: ["vergnaud", "rme"],

  momento01_motivacao: {
    titulo: "Do mundo real ao número",
    historia:
      "{NOME}, dinheiro, comida e distâncias usam decimais e frações o tempo todo. Ler o problema devagar e enxergar a fração/decimal é o segredo.",
  },
  momento02_exploracao: {
    instrucao: "Traduzir palavras em números.",
    cenas: [
      { tipo: "texto", texto: "'Metade' = 1/2 = 0,5. 'Um quarto' = 1/4 = 0,25.", destaque: true },
      { tipo: "texto", texto: "'A décima parte' = 1/10 = 0,1." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Metade de R$ 20 é o mesmo que 0,5 × 20?",
    pista: "Metade = ÷2.",
    revelacao: "SIM: metade de 20 = 10 = 0,5 × 20. Fração e decimal descrevem a mesma coisa.",
  },
  momento04_explicacao: {
    titulo: "Estratégia",
    etapas: [
      {
        texto: "1) Sublinhe a fração/decimal. 2) Ache o inteiro. 3) Aplique a operação certa.",
        exemploReal: {
          contexto: "1/4 de 40 balas.",
          destaque: "40 ÷ 4 = 10 balas.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "1/3 de 60 laranjas é:",
    passos: ["Fração 1/3.", "60 ÷ 3 = 20."],
    resposta: "20 laranjas",
  },
  momento06_praticaGuiada: {
    enunciado: "Metade de R$ 24.",
    dica: "÷2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 12" }, { nome: "R$ 14" }, { nome: "R$ 10" }],
      respostaCerta: "R$ 12",
      feedbackAcerto: "🎯 R$ 12.",
      feedbackErro: "24÷2=12.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "0,25 de R$ 200 é:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 50" }, { nome: "R$ 25" }, { nome: "R$ 40" }],
      respostaCerta: "R$ 50",
      feedbackAcerto: "🎯 R$ 50.",
      feedbackErro: "0,25 = 1/4. 200÷4=50.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma pizza tem 8 fatias. Ana comeu 3 e Bruno comeu 2.",
    problema: "Que fração da pizza sobrou?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3/8" }, { nome: "5/8" }, { nome: "6/8" }],
      respostaCerta: "3/8",
      feedbackAcerto: "🎯 3/8.",
      feedbackErro: "Comeram 5 → sobra 8−5=3 de 8.",
    },
  },
  momento09_revisao: {
    pontos: ["Metade=÷2 · Terça=÷3 · Quarta=÷4.", "Fração e decimal descrevem a mesma parte."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1/2 de 80 = ?", opcoes: ["40", "20", "60"], correta: 0, feedbackAcerto: "🎉 40.", feedbackErro: "80÷2=40." },
      { pergunta: "1/5 de 100 = ?", opcoes: ["20", "10", "25"], correta: 0, feedbackAcerto: "🎉 20.", feedbackErro: "100÷5=20." },
      { pergunta: "R$ 15,50 + R$ 4,25 = ?", opcoes: ["R$ 19,75", "R$ 19,25", "R$ 20,00"], correta: 0, feedbackAcerto: "🎉 R$ 19,75.", feedbackErro: "Alinhe a vírgula." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Fração no Prato",
    materiais: ["Um alimento partido"],
    passos: ["Corte uma fruta/pão em 4.", "Coma 1 pedaço.", "Escreva a fração comida e a que sobrou."],
    registro: "📸 Foto com as frações escritas.",
  },
  recompensa: { xp: 220, moedas: 110 },
};
