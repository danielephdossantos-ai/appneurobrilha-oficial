import type { AulaV4 } from "../../types";

export const aula06_missao: AulaV4 = {
  slug: "u5-06-missao",
  titulo: "Missão — Mestre das Proporcionalidades",
  iconeTrilha: "🏅",
  bncc: ["EF08MA04", "EF08MA12", "EF08MA13"],
  duracaoMin: 25,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Kit da vida real",
    historia:
      "{NOME}, tudo que aprendeu na U5 é usado no dia a dia: preços, juros, receitas, velocidade.",
  },
  momento02_exploracao: {
    instrucao: "Kit.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Decisão",
        cabecalhos: ["Situação", "Ferramenta"],
        linhas: [
          { rotulo: "1", valores: ["Aumento/desconto", "Fator (1±i)"] },
          { rotulo: "2", valores: ["Lucro/prejuízo", "(V−C)/C"] },
          { rotulo: "3", valores: ["Juros", "J = C·i·t"] },
          { rotulo: "4", valores: ["Direta", "Cruzado"] },
          { rotulo: "5", valores: ["Inversa", "Produto = produto"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como escolher a ferramenta?",
    pista: "Leia com atenção; 'a mais/a menos %' → fator; 'em X tempo' → juros.",
    revelacao: "Cada palavra dá pista.",
  },
  momento04_explicacao: {
    titulo: "Combos",
    etapas: [
      {
        texto: "Preço + juros.",
        exemploReal: {
          contexto: "Produto R$ 500 em 4× com juros de 2% am total.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["J", "500·0,02·4 = 40"] },
              { rotulo: "2", valores: ["M", "540"] },
            ],
          },
          destaque: "R$ 540 total.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Lucro de 30% sobre custo de R$ 200. Preço de venda:",
    resposta: "R$ 260",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["fator", "1,30"] },
        { rotulo: "2", valores: ["×", "260"] },
      ],
    },
    passos: ["200 × 1,30 = 260."],
  },
  momento06_praticaGuiada: {
    enunciado: "6 op → 8 dias. 4 op → ?",
    dica: "Inversa.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "dias =",
      opcoes: [{ nome: "12" }, { nome: "6" }, { nome: "10" }],
      respostaCerta: "12",
      feedbackAcerto: "🎯 6·8=4·x.",
      feedbackErro: "48/4.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Preço R$ 80 com desconto de 25%. Novo preço:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 60" }, { nome: "R$ 20" }, { nome: "R$ 55" }],
      respostaCerta: "R$ 60",
      feedbackAcerto: "🎯 × 0,75.",
      feedbackErro: "Fator 0,75.",
    },
  },
  momento08_aplicacao: {
    contexto:
      "Empréstimo R$ 1500 a 3% am por 6 meses.",
    problema: "Montante:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "M =",
      opcoes: [{ nome: "R$ 1770" }, { nome: "R$ 270" }, { nome: "R$ 1800" }],
      respostaCerta: "R$ 1770",
      feedbackAcerto: "🎯 J=270.",
      feedbackErro: "1500·0,03·6=270; +1500.",
    },
  },
  momento09_revisao: {
    pontos: ["Cada situação, uma ferramenta.", "Palavras dão pista.", "Sempre verifique se o sentido faz sentido."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "50 +10% =", opcoes: ["55", "45", "60"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "× 1,10." },
      { pergunta: "3 op 12d. 4 op:", opcoes: ["9d", "16d", "12d"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Inversa." },
      { pergunta: "C=100, i=1% am, t=5m. J=", opcoes: ["5", "1", "50"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "100·0,01·5." },
      { pergunta: "20% de 200 =", opcoes: ["40", "20", "10"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "0,20·200." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma de Consumidor Consciente",
    materiais: ["Papel"],
    passos: ["Diploma: 'Mestre das Proporcionalidades'.", "Cite 3 momentos do dia em que usou %."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 230, moedas: 115, medalha: "Mestre das Proporcionalidades" },
};
