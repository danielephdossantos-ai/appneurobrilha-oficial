import type { AulaV4 } from "../../types";

export const aula01_aumentoDesconto: AulaV4 = {
  slug: "u5-01-aumento-desconto",
  titulo: "Aumentos e descontos sucessivos",
  iconeTrilha: "📈",
  bncc: ["EF08MA04"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "20% + 20% NÃO é 40%",
    historia:
      "{NOME}, na loja o preço subiu 20% e depois caiu 20%. Voltou ao valor original? NÃO. Vamos entender por quê.",
  },
  momento02_exploracao: {
    instrucao: "Descubra.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "R$ 100 sofre aumento de 20% e depois desconto de 20%",
        cabecalhos: ["Passo", "Cálculo", "Valor"],
        linhas: [
          { rotulo: "1", valores: ["+20% de 100", "R$ 120"] },
          { rotulo: "2", valores: ["−20% de 120", "R$ 96"] },
          { rotulo: "3", valores: ["Diferença", "R$ 4 a menos"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como calcular RÁPIDO?",
    pista: "Multiplique por (1 + i) pra aumento e (1 − i) pra desconto.",
    revelacao: "Fator multiplicativo!",
  },
  momento04_explicacao: {
    titulo: "Fator multiplicativo",
    etapas: [
      {
        texto: "Aumento de i%.",
        exemploReal: {
          contexto: "Aumento 15% sobre R$ 200",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["fator", "1 + 0,15 = 1,15"] },
              { rotulo: "2", valores: ["×", "200 × 1,15"] },
              { rotulo: "3", valores: ["=", "R$ 230"] },
            ],
          },
          destaque: "R$ 230.",
        },
      },
      {
        texto: "Desconto de i%.",
        exemploReal: {
          contexto: "Desconto 30% sobre R$ 150",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["fator", "1 − 0,30 = 0,70"] },
              { rotulo: "2", valores: ["×", "150 × 0,70"] },
              { rotulo: "3", valores: ["=", "R$ 105"] },
            ],
          },
          destaque: "R$ 105.",
        },
      },
      {
        texto: "Sucessivos: multiplique os fatores.",
        exemploReal: {
          contexto: "+20% depois −20% sobre R$ 100",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["fatores", "1,20 × 0,80"] },
              { rotulo: "2", valores: ["=", "0,96"] },
              { rotulo: "3", valores: ["×100", "R$ 96"] },
            ],
          },
          destaque: "4% de perda real.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "R$ 500 com 10% aumento seguido de 10% desconto.",
    resposta: "R$ 495",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["fatores", "1,10 × 0,90 = 0,99"] },
        { rotulo: "2", valores: ["×500", "495"] },
      ],
    },
    passos: ["1,10 × 0,90 = 0,99.", "500 × 0,99 = 495."],
  },
  momento06_praticaGuiada: {
    enunciado: "R$ 80 com aumento de 25%.",
    dica: "× 1,25.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Novo preço:",
      opcoes: [{ nome: "R$ 100" }, { nome: "R$ 105" }, { nome: "R$ 95" }],
      respostaCerta: "R$ 100",
      feedbackAcerto: "🎯",
      feedbackErro: "80 × 1,25 = 100.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "R$ 200 com desconto de 15%.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Novo preço:",
      opcoes: [{ nome: "R$ 170" }, { nome: "R$ 185" }, { nome: "R$ 175" }],
      respostaCerta: "R$ 170",
      feedbackAcerto: "🎯 200 × 0,85 = 170.",
      feedbackErro: "Fator = 0,85.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma calça de R$ 200 sobe 20% e depois cai 10%.",
    problema: "Preço final:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 216" }, { nome: "R$ 220" }, { nome: "R$ 200" }],
      respostaCerta: "R$ 216",
      feedbackAcerto: "🎯 200 × 1,20 × 0,90 = 216.",
      feedbackErro: "Multiplique os fatores.",
    },
  },
  momento09_revisao: {
    pontos: ["Aumento de i%: × (1+i).", "Desconto de i%: × (1−i).", "Sucessivos: multiplica os fatores. NÃO some %."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "10% de 200 =", opcoes: ["20", "10", "2"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "10/100 · 200." },
      { pergunta: "50 +10% =", opcoes: ["55", "60", "45"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "× 1,10." },
      { pergunta: "100 −25% =", opcoes: ["75", "25", "125"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "× 0,75." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Detetive de promoção",
    materiais: ["Papel"],
    passos: ["Ache 3 preços com desconto.", "Confirme se o desconto anunciado bate."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
