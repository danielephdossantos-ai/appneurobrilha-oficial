import type { AulaV4 } from "../../types";

export const aula05_missao: AulaV4 = {
  slug: "u3-05-missao",
  titulo: "Missão — Detetive dos Divisores",
  iconeTrilha: "🏅",
  bncc: ["EF06MA04", "EF06MA05", "EF06MA06"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Fechando a Unidade",
    historia: "{NOME}, você já sabe múltiplos, divisores, primos, MMC e MDC. Hoje: missão de detetive.",
  },

  momento02_exploracao: {
    instrucao: "Kit consolidado.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Resumo",
        cabecalhos: ["Ferramenta", "Truque"],
        linhas: [
          { rotulo: "Múltiplos", valores: ["Múltiplos", "n × 1, n × 2, n × 3…"] },
          { rotulo: "Divisores", valores: ["Divisores", "Resto zero"] },
          { rotulo: "Primos", valores: ["Primos", "Só 2 divisores"] },
          { rotulo: "MMC", valores: ["MMC", "Todos primos, maior expoente"] },
          { rotulo: "MDC", valores: ["MDC", "Comuns, menor expoente"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Fatoração pode resolver TUDO?",
    pista: "MMC, MDC, simplificação, divisibilidade…",
    revelacao: "Sim. Fatoração é o alicerce.",
  },

  momento04_explicacao: {
    titulo: "Estratégia integrada",
    etapas: [
      {
        texto: "Toda vez que aparecer 'juntos', 'ao mesmo tempo', 'ciclo': MMC.",
        exemploReal: {
          contexto: "Dois relógios batem a cada 4 e 6 segundos.",
          destaque: "Batem juntos a cada MMC(4,6) = 12 s.",
        },
      },
      {
        texto: "Toda vez que aparecer 'dividir em partes iguais', 'pedaços máximos': MDC.",
        exemploReal: {
          contexto: "Cortar duas fitas de 24 e 36 cm em pedaços iguais e MAIORES possíveis.",
          destaque: "Pedaços de MDC(24,36) = 12 cm.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "MMC(15, 20).",
    resposta: "60",
    passos: ["15 = 3 × 5.", "20 = 2² × 5.", "MMC = 2² × 3 × 5 = 60."],
  },

  momento06_praticaGuiada: {
    enunciado: "Qual é primo?",
    dica: "Divisores?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "19" }, { nome: "21" }, { nome: "25" }],
      respostaCerta: "19",
      feedbackAcerto: "🎯 19 só tem 1 e 19.",
      feedbackErro: "21 = 3·7, 25 = 5².",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "MDC(18, 30)?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6" }, { nome: "2" }, { nome: "90" }],
      respostaCerta: "6",
      feedbackAcerto: "🎯 18 = 2·3², 30 = 2·3·5 → MDC = 2·3 = 6.",
      feedbackErro: "Fatore os dois.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma pizzaria vende pizza de 8 fatias e refri de 12. Comprando quantos combos, sobra zero?",
    problema: "Mínimo de fatias/latas iguais?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "MMC?",
      opcoes: [{ nome: "24" }, { nome: "20" }, { nome: "96" }],
      respostaCerta: "24",
      feedbackAcerto: "🎯 MMC(8,12) = 24.",
      feedbackErro: "8 = 2³, 12 = 2²·3 → MMC = 2³·3 = 24.",
    },
  },

  momento09_revisao: {
    pontos: ["Você virou Detetive dos Divisores.", "Toda pergunta com 'juntos' ou 'iguais' vem daqui."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Múltiplos de 4:", opcoes: ["0,4,8,12…", "1,4,7,10…", "4,5,6…"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "×1, ×2…" },
      { pergunta: "MMC(3, 4):", opcoes: ["12", "6", "7"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Primos entre si." },
      { pergunta: "1 é primo?", opcoes: ["Não", "Sim"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Só 1 divisor." },
      { pergunta: "MDC(9, 12):", opcoes: ["3", "1", "36"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Comum: 3." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma Detetive",
    materiais: ["Papel"],
    passos: ["Escreva 2 situações reais: uma de MMC, outra de MDC.", "Resolva."],
    registro: "📸 Foto do diploma.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Detetive dos Divisores" },
};
