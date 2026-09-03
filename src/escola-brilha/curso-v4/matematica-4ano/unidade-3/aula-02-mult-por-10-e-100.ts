import type { AulaV4 } from "../../types";

export const aula02_multPor10E100: AulaV4 = {
  slug: "u3-02-mult-por-10-e-100",
  titulo: "Multiplicar por 10, 100 e 1.000",
  iconeTrilha: "0️⃣",
  bncc: ["EF04MA04"],
  duracaoMin: 20,
  metodologias: ["skemp", "rme"],

  momento01_motivacao: {
    titulo: "Valores dez, cem e mil vezes maiores",
    historia:
      "{NOME}, multiplicar por 10, 100 ou 1.000 faz cada algarismo ocupar uma casa de valor maior.",
  },
  momento02_exploracao: {
    instrucao: "Repare no padrão.",
    cenas: [
      { tipo: "texto", texto: "×10 desloca cada algarismo 1 casa para a esquerda; ×100 desloca 2; ×1000 desloca 3.", destaque: true },
      { tipo: "texto", texto: "Ex.: 34 × 10 = 340. 34 × 100 = 3.400. 34 × 1000 = 34.000." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que funciona?",
    pista: "Pense em casas de valor.",
    revelacao: "Cada fator 10 desloca o valor uma casa para a esquerda no quadro posicional.",
  },
  momento04_explicacao: {
    titulo: "Deslocamento no quadro posicional",
    etapas: [
      {
        texto: "Multiplicar por 100 faz cada algarismo passar duas casas para valores maiores.",
        exemploReal: {
          contexto: "45 × 100.",
          destaque: "45 × 100 = 4.500: 4 dezenas viram 4 milhares e 5 unidades viram 5 centenas.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Quanto é 27 × 1000?",
    passos: ["Multiplicar por 1.000 desloca cada valor três casas.", "2 dezenas passam a 2 dezenas de milhar e 7 unidades passam a 7 milhares.", "Resultado: 27.000."],
    resposta: "27.000",
    casasValor: { numero: 27000, mostrarDecomposicao: true, extenso: "vinte e sete mil" },
  },
  momento06_praticaGuiada: {
    enunciado: "56 × 100 = ?",
    dica: "Desloque cada algarismo duas casas para valores maiores.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5.600" }, { nome: "560" }, { nome: "56.000" }],
      respostaCerta: "5.600",
      feedbackAcerto: "🎯 5.600.",
      feedbackErro: "Ao multiplicar por 100, cada algarismo passa a ocupar uma casa de valor cem vezes maior.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "82 × 10 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "820" }, { nome: "82" }, { nome: "8.200" }],
      respostaCerta: "820",
      feedbackAcerto: "🎯 820.",
      feedbackErro: "Ao multiplicar por 10, cada algarismo passa para a casa imediatamente maior.",
    },
  },
  momento08_aplicacao: {
    contexto: "Cada caminhão do Reino carrega 100 caixas.",
    problema: "37 caminhões carregam quantas caixas?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3.700" }, { nome: "370" }, { nome: "37.000" }],
      respostaCerta: "3.700",
      feedbackAcerto: "🎯 3.700 caixas.",
      feedbackErro: "37 × 100 = 3.700.",
    },
  },
  momento09_revisao: {
    pontos: ["×10 desloca uma casa; ×100, duas; ×1.000, três.", "Os zeros registram as casas que ficam vazias."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "45 × 10 = ?", opcoes: ["450", "45", "4.500"], correta: 0, feedbackAcerto: "🎉 Quatro dezenas e cinco unidades passam a quatro centenas e cinco dezenas: 450.", feedbackErro: "Cada algarismo muda uma casa para a esquerda: 45 × 10 = 450." },
      { pergunta: "12 × 100 = ?", opcoes: ["1.200", "120", "12.000"], correta: 0, feedbackAcerto: "🎉 Os valores avançam duas casas: 12 × 100 = 1.200.", feedbackErro: "Uma dezena vira um milhar e duas unidades viram duas centenas: 1.200." },
      { pergunta: "8 × 1000 = ?", opcoes: ["8.000", "800", "80.000"], correta: 0, feedbackAcerto: "🎉 O 8 passa da unidade para a unidade de milhar: 8.000.", feedbackErro: "Multiplicar por 1.000 torna o valor mil vezes maior: 8 × 1.000 = 8.000." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Quadro de valor posicional",
    materiais: ["Papel"],
    passos: ["Escolha um número de 2 algarismos.", "Multiplique por 10, 100 e 1.000.", "Escreva os três resultados."],
    registro: "📸 Foto dos três resultados.",
  },
  recompensa: { xp: 180, moedas: 90 },
};
