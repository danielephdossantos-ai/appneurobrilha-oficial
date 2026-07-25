import type { AulaV4 } from "../../types";

export const aula06_problemasMedidas: AulaV4 = {
  slug: "u5-06-problemas-medidas",
  titulo: "Problemas com Medidas",
  iconeTrilha: "🧮",
  bncc: ["EF03MA17", "EF03MA19", "EF03MA20"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Medida certa",
    historia: "Nas receitas, no supermercado, no relógio — medir é essencial.",
  },
  momento02_exploracao: {
    instrucao: "Escolha a unidade.",
    cenas: [
      { tipo: "texto", texto: "Comprimento: cm, m." },
      { tipo: "texto", texto: "Massa: g, kg. Capacidade: mL, L. Tempo: min, h. Dinheiro: R$.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Qual unidade escolher?",
    pista: "Depende do que se mede.",
    revelacao: "Coisas pequenas em cm, g, mL. Grandes em m, kg, L.",
  },
  momento04_explicacao: {
    titulo: "Problema completo",
    etapas: [
      {
        texto: "Uma receita pede 250 g de farinha 4 vezes.",
        exemploReal: {
          contexto: "4 × 250.",
          destaque: "1000 g = 1 kg.",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [4, 250],
            resultado: 1000,
            passos: [{ coluna: "U", fala: "4 × 250 = 1000. Isto é 1 kg.", digito: 0 }],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Fita de 3 m; cortou 120 cm. Sobra?",
    passos: ["3 m = 300 cm.", "300 − 120 = 180.", "1 m e 80 cm."],
    resposta: "1 m e 80 cm",
    casasValor: { numero: 180, mostrarDecomposicao: true, extenso: "cento e oitenta" },
  },
  momento06_praticaGuiada: {
    enunciado: "Garrafa de 2 L. Bebi 500 mL. Sobra?",
    dica: "2000 − 500.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1500 mL" }, { nome: "500 mL" }, { nome: "2500 mL" }],
      respostaCerta: "1500 mL",
      feedbackAcerto: "🎉 1500 mL.",
      feedbackErro: "2000−500=1500.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "3 pacotes de 500 g = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1 kg 500 g" }, { nome: "1500 kg" }, { nome: "500 kg" }],
      respostaCerta: "1 kg 500 g",
      feedbackAcerto: "🎯 3×500=1500 g.",
      feedbackErro: "1500 g = 1 kg 500 g.",
    },
  },
  momento08_aplicacao: {
    contexto: "Vou almoçar às 12h e o preparo leva 45 min.",
    problema: "A que horas começar?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "11h15" }, { nome: "11h45" }, { nome: "12h45" }],
      respostaCerta: "11h15",
      feedbackAcerto: "🎯 12h − 45 min = 11h15.",
      feedbackErro: "12h − 45 min = 11h15.",
    },
  },
  momento09_revisao: {
    pontos: ["Escolha a unidade.", "Converta quando precisar."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "R$ 15 − R$ 6,50 = ?",
      opcoes: [{ nome: "R$ 8,50" }, { nome: "R$ 8,00" }, { nome: "R$ 9,50" }],
      respostaCerta: "R$ 8,50",
      feedbackAcerto: "🎉 R$ 8,50.",
      feedbackErro: "15−6,50=8,50.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "5 fitas de 40 cm = ?", opcoes: ["200 cm", "45 cm", "20 cm"], correta: 0, feedbackAcerto: "🎉 200 cm.", feedbackErro: "5×40=200." },
      { pergunta: "1 kg − 400 g = ?", opcoes: ["600 g", "400 g", "1400 g"], correta: 0, feedbackAcerto: "🎉 600 g.", feedbackErro: "1000−400=600." },
      { pergunta: "Meia hora + 20 min = ?", opcoes: ["50 min", "30 min", "1 h"], correta: 0, feedbackAcerto: "🎉 50 min.", feedbackErro: "30+20=50." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diário do medidor",
    materiais: ["Régua", "Balança", "Relógio"],
    passos: ["Meça 1 comprimento, 1 massa, 1 tempo."],
    registro: "📸 Foto do diário.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
