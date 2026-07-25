import type { AulaV4 } from "../../types";

export const aula02_lucroPrejuizo: AulaV4 = {
  slug: "u5-02-lucro-prejuizo",
  titulo: "Lucro e prejuízo em porcentagem",
  iconeTrilha: "💰",
  bncc: ["EF08MA04"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "O comerciante calcula %",
    historia:
      "{NOME}, quem vende quer saber quanto lucrou (%). Quem compra quer saber quanto pagou a mais.",
  },
  momento02_exploracao: {
    instrucao: "Fórmulas.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Definições",
        cabecalhos: ["Termo", "Fórmula"],
        linhas: [
          { rotulo: "1", valores: ["Lucro %", "(venda − custo) / custo × 100"] },
          { rotulo: "2", valores: ["Prejuízo %", "(custo − venda) / custo × 100"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Sobre qual valor calculamos?",
    pista: "Sempre sobre o CUSTO.",
    revelacao: "Custo é a base.",
  },
  momento04_explicacao: {
    titulo: "Exemplos",
    etapas: [
      {
        texto: "Lucro.",
        exemploReal: {
          contexto: "Comprou por R$ 80, vendeu por R$ 100.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["lucro R$", "20"] },
              { rotulo: "2", valores: ["÷ custo", "20/80 = 0,25"] },
              { rotulo: "3", valores: ["×100", "25%"] },
            ],
          },
          destaque: "Lucro de 25%.",
        },
      },
      {
        texto: "Prejuízo.",
        exemploReal: {
          contexto: "Comprou por R$ 200, vendeu por R$ 150.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["prejuízo R$", "50"] },
              { rotulo: "2", valores: ["÷ custo", "50/200 = 0,25"] },
              { rotulo: "3", valores: ["×100", "25%"] },
            ],
          },
          destaque: "Prejuízo de 25%.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Comprou por R$ 40, vendeu por R$ 50.",
    resposta: "Lucro 25%",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["lucro", "10"] },
        { rotulo: "2", valores: ["÷40", "0,25"] },
        { rotulo: "3", valores: ["%", "25%"] },
      ],
    },
    passos: ["Lucro R$ 10.", "10/40 = 0,25.", "25%."],
  },
  momento06_praticaGuiada: {
    enunciado: "Custo 100, venda 130.",
    dica: "30/100.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Lucro %:",
      opcoes: [{ nome: "30%" }, { nome: "10%" }, { nome: "130%" }],
      respostaCerta: "30%",
      feedbackAcerto: "🎯",
      feedbackErro: "30/100 = 30%.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Custo 250, venda 200.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Prejuízo %:",
      opcoes: [{ nome: "20%" }, { nome: "25%" }, { nome: "10%" }],
      respostaCerta: "20%",
      feedbackAcerto: "🎯 50/250 = 20%.",
      feedbackErro: "Sempre sobre o custo.",
    },
  },
  momento08_aplicacao: {
    contexto: "Loja compra celular por R$ 800, quer 40% de lucro.",
    problema: "Preço de venda:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 1120" }, { nome: "R$ 840" }, { nome: "R$ 1200" }],
      respostaCerta: "R$ 1120",
      feedbackAcerto: "🎯 800 × 1,40.",
      feedbackErro: "40% de 800 = 320. 800 + 320.",
    },
  },
  momento09_revisao: {
    pontos: ["Lucro/prejuízo sobre CUSTO.", "Divide e ×100 pra achar %.", "Preço venda = custo × (1 + lucro%)."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "50/100 =", opcoes: ["50%", "5%", "500%"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "×100." },
      { pergunta: "Lucro 25% sobre 200 =", opcoes: ["R$ 50", "R$ 25", "R$ 250"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "0,25 × 200." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Pequeno comércio",
    materiais: ["Papel"],
    passos: ["Simule uma venda com custo e preço.", "Calcule lucro %."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
