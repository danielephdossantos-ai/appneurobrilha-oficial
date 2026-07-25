import type { AulaV4 } from "../../types";

export const aula05_missaoFinal: AulaV4 = {
  slug: "u7-05-missao-final",
  titulo: "Missão Final — Cientista Chefe do Laboratório",
  iconeTrilha: "🏆",
  bncc: [
    "EF06MA01",
    "EF06MA03",
    "EF06MA06",
    "EF06MA08",
    "EF06MA10",
    "EF06MA13",
    "EF06MA15",
    "EF06MA24",
    "EF06MA31",
  ],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Formatura do 6º ano",
    historia: "{NOME}, você atravessou 7 unidades. Hoje é a MISSÃO FINAL: usar TUDO o que aprendeu.",
  },

  momento02_exploracao: {
    instrucao: "Todo o kit do Laboratório.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "🧰 Ferramentas do 6º ano",
        cabecalhos: ["Unidade", "Ferramenta"],
        linhas: [
          { rotulo: "U1", valores: ["U1", "Bilhões, reta, negativos"] },
          { rotulo: "U2", valores: ["U2", "+ − × ÷, potência, raiz"] },
          { rotulo: "U3", valores: ["U3", "Primos, MMC, MDC"] },
          { rotulo: "U4", valores: ["U4", "Frações"] },
          { rotulo: "U5", valores: ["U5", "Decimais, %"] },
          { rotulo: "U6", valores: ["U6", "Razão, proporção, equação"] },
          { rotulo: "U7", valores: ["U7", "Geometria, medidas, estatística"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Um problema pode misturar TUDO?",
    pista: "Sim — assim como na vida real.",
    revelacao: "Cientistas usam várias ferramentas juntas.",
  },

  momento04_explicacao: {
    titulo: "Combos finais",
    etapas: [
      {
        texto: "Real: piso de sala + custo.",
        exemploReal: {
          contexto: "Sala 5×4 m, cerâmica R$ 30/m²",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["Área", "20 m²"] },
              { rotulo: "2", valores: ["Custo", "20 × 30 = R$ 600"] },
            ],
          },
          destaque: "R$ 600.",
        },
      },
      {
        texto: "Real: velocidade média.",
        exemploReal: {
          contexto: "240 km em 3 h",
          destaque: "v = 80 km/h.",
        },
      },
      {
        texto: "Real: desconto e comparação.",
        exemploReal: {
          contexto: "Loja A: R$ 100 com 20% off. Loja B: R$ 85.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Loja", "Cálculo", "Preço final"],
            linhas: [
              { rotulo: "A", valores: ["A", "100 × 0,80", "80"] },
              { rotulo: "B", valores: ["B", "85", "85"] },
            ],
          },
          destaque: "Loja A sai mais barato.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Piscina 6×4×1,5 m. Volume em L? (1 m³ = 1.000 L)",
    resposta: "36.000 L",
    passos: ["V = 6·4·1,5 = 36 m³.", "36 × 1.000 = 36.000 L."],
  },

  momento06_praticaGuiada: {
    enunciado: "Preço R$ 200 com 15% off.",
    dica: "15% de 200 = 30.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Preço final:",
      opcoes: [{ nome: "R$ 170" }, { nome: "R$ 185" }, { nome: "R$ 230" }],
      respostaCerta: "R$ 170",
      feedbackAcerto: "🎯 200 − 30.",
      feedbackErro: "15% de 200 = 30.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "MMC(6, 10):",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "30" }, { nome: "60" }, { nome: "16" }],
      respostaCerta: "30",
      feedbackAcerto: "🎯 6=2·3, 10=2·5 → MMC=2·3·5=30.",
      feedbackErro: "Fatore.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um cientista descobriu que 20% de 1.500 amostras deram positivo.",
    problema: "Quantas amostras positivas?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "300" }, { nome: "150" }, { nome: "200" }],
      respostaCerta: "300",
      feedbackAcerto: "🎯 20% de 1.500 = 300.",
      feedbackErro: "1.500 × 0,2.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Você concluiu o 6º ano de Matemática.",
      "Bilhões, negativos, primos, frações, decimais, álgebra, geometria e estatística: todos travados.",
      "Está pronto(a) pro 7º ano.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1 bilhão =", opcoes: ["10⁹", "10⁶", "10¹²"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "9 zeros." },
      { pergunta: "MDC(15, 25):", opcoes: ["5", "3", "75"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Comum = 5." },
      { pergunta: "Área quadrado lado 6:", opcoes: ["36", "24", "12"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "l²." },
      { pergunta: "Média de 4, 5, 6, 5:", opcoes: ["5", "6", "4"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "20 ÷ 4." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma Cientista Chefe",
    materiais: ["Papel, canetas"],
    passos: [
      "Faça o diploma 'Cientista Chefe do Laboratório dos Números'.",
      "Escreva 3 coisas que mais aprendeu no 6º ano.",
      "Mostre pra família.",
    ],
    registro: "📸 Foto do diploma.",
  },
  recompensa: { xp: 300, moedas: 150, medalha: "Cientista Chefe" },
};
