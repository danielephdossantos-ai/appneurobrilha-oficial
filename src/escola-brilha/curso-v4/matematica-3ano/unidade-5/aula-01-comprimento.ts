import type { AulaV4 } from "../../types";

export const aula01_comprimento: AulaV4 = {
  slug: "u5-01-comprimento",
  titulo: "Metros e Centímetros",
  iconeTrilha: "📏",
  bncc: ["EF03MA17"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Quanto mede?",
    historia: "A régua mede em centímetros (cm). A trena mede em metros (m). 1 m = 100 cm.",
  },
  momento02_exploracao: {
    instrucao: "Unidades de comprimento.",
    cenas: [
      { tipo: "texto", texto: "1 m = 100 cm. Uma porta ≈ 2 m. Um lápis ≈ 15 cm." },
      { tipo: "texto", texto: "Escolha a unidade certa: prédios em metros, dedos em centímetros.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como transformar m em cm?",
    pista: "Multiplique por 100.",
    revelacao: "3 m = 300 cm. 250 cm = 2 m e 50 cm.",
  },
  momento04_explicacao: {
    titulo: "Do metro ao centímetro",
    etapas: [
      {
        texto: "2 m tem quantos cm?",
        exemploReal: {
          contexto: "1 m = 100 cm.",
          destaque: "2 m = 200 cm.",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [2, 100],
            resultado: 200,
            passos: [{ coluna: "U", fala: "2 × 100 = 200. Escrevo 200 cm.", digito: 0 }],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "150 cm = quantos m?",
    passos: ["150 ÷ 100 = 1, resto 50.", "1 m e 50 cm."],
    resposta: "1 m e 50 cm",
    casasValor: { numero: 150, mostrarDecomposicao: true, extenso: "cento e cinquenta" },
  },
  momento06_praticaGuiada: {
    enunciado: "3 m = ? cm",
    dica: "Multiplique por 100.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "300" }, { nome: "30" }, { nome: "3000" }],
      respostaCerta: "300",
      feedbackAcerto: "🎉 300 cm.",
      feedbackErro: "3×100=300.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "500 cm = ? m",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5" }, { nome: "50" }, { nome: "0,5" }],
      respostaCerta: "5",
      feedbackAcerto: "🎯 500 ÷ 100 = 5.",
      feedbackErro: "5×100=500.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma mesa mede 120 cm.",
    problema: "Isso equivale a:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1 m e 20 cm" }, { nome: "12 m" }, { nome: "1 m e 2 cm" }],
      respostaCerta: "1 m e 20 cm",
      feedbackAcerto: "🎯 120 cm = 1 m 20 cm.",
      feedbackErro: "100 cm = 1 m; sobra 20 cm.",
    },
  },
  momento09_revisao: {
    pontos: ["1 m = 100 cm.", "m → cm: ×100. cm → m: ÷100."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "4 m em cm?",
      opcoes: [{ nome: "400" }, { nome: "40" }, { nome: "4000" }],
      respostaCerta: "400",
      feedbackAcerto: "🎉 400.",
      feedbackErro: "4×100=400.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1 m = ? cm", opcoes: ["100", "10", "1000"], correta: 0, feedbackAcerto: "🎉 100.", feedbackErro: "1 m = 100 cm." },
      { pergunta: "250 cm = ?", opcoes: ["2 m 50 cm", "25 m", "2 m 5 cm"], correta: 0, feedbackAcerto: "🎉 2 m 50 cm.", feedbackErro: "250 = 200 + 50." },
      { pergunta: "5 m + 30 cm = ?", opcoes: ["530 cm", "35 cm", "5030 cm"], correta: 0, feedbackAcerto: "🎉 530 cm.", feedbackErro: "5×100+30=530." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Medindo a casa",
    materiais: ["Régua ou fita métrica"],
    passos: ["Meça 3 objetos.", "Anote em cm.", "Converta para m se der."],
    registro: "📸 Foto das medidas.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
