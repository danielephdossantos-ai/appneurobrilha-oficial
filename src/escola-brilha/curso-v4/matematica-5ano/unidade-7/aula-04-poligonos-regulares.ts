import type { AulaV4 } from "../../types";

export const aula04_poligonosRegulares: AulaV4 = {
  slug: "u7-04-poligonos-regulares",
  titulo: "Polígonos regulares",
  iconeTrilha: "🔷",
  bncc: ["EF05MA16"],
  duracaoMin: 20,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "Todos os lados iguais",
    historia: "{NOME}, um polígono REGULAR tem TODOS os lados iguais e TODOS os ângulos iguais. Ex.: triângulo equilátero, quadrado, pentágono regular…",
  },
  momento02_exploracao: {
    instrucao: "Nomes.",
    cenas: [
      { tipo: "texto", texto: "3 lados = triângulo. 4 = quadrado. 5 = pentágono. 6 = hexágono. 8 = octógono.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Quantos lados tem um hexágono?",
    pista: "'Hexa' = 6.",
    revelacao: "6 lados.",
  },
  momento04_explicacao: {
    titulo: "Regular vs irregular",
    etapas: [
      { texto: "Regular: todos os lados e ângulos IGUAIS." },
      { texto: "Perímetro do regular: lado × número de lados." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Pentágono regular com lado 6 cm.",
    resposta: "P = 30 cm",
    passos: ["5 lados.", "6 × 5 = 30."],
  },
  momento06_praticaGuiada: {
    enunciado: "Hexágono regular lado 4.",
    dica: "6 lados.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Perímetro:",
      opcoes: [{ nome: "24" }, { nome: "18" }, { nome: "30" }],
      respostaCerta: "24",
      feedbackAcerto: "🎯 6×4.",
      feedbackErro: "24.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Octógono regular lado 5.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Perímetro:",
      opcoes: [{ nome: "40" }, { nome: "35" }, { nome: "45" }],
      respostaCerta: "40",
      feedbackAcerto: "🎯 8×5.",
      feedbackErro: "40.",
    },
  },
  momento08_aplicacao: {
    contexto: "Placa hexagonal com lado 12 cm.",
    problema: "Perímetro?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "72 cm" }, { nome: "60 cm" }, { nome: "84 cm" }],
      respostaCerta: "72 cm",
      feedbackAcerto: "🎯",
      feedbackErro: "72.",
    },
  },
  momento09_revisao: {
    pontos: ["Regular = tudo igual.", "P = lado × n."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Quadrado lado 7:", opcoes: ["28", "21", "35"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "28." },
      { pergunta: "Nome de 5 lados:", opcoes: ["pentágono", "hexágono", "quadrilátero"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Pentágono." },
      { pergunta: "Triângulo eq. lado 9:", opcoes: ["27", "18", "36"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "27." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Caça aos polígonos",
    materiais: ["Câmera"],
    passos: ["Fotografe 5 polígonos regulares na rua."],
    registro: "📸 Fotos.",
  },
  recompensa: { xp: 140, moedas: 75 },
};
