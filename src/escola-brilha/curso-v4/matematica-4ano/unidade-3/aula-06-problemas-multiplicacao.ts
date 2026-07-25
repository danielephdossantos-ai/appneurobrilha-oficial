import type { AulaV4 } from "../../types";

export const aula06_problemasMultiplicacao: AulaV4 = {
  slug: "u3-06-problemas-multiplicacao",
  titulo: "Problemas de multiplicação",
  iconeTrilha: "🧩",
  bncc: ["EF04MA06", "EF04MA26"],
  duracaoMin: 22,
  metodologias: ["vergnaud", "rme"],

  momento01_motivacao: {
    titulo: "Quando usar ×?",
    historia:
      "{NOME}, use × quando 'grupos iguais se repetem'. Ex.: 12 caixas com 25 laranjas cada. Uma caixa tem 25; 12 caixas iguais → 12 × 25.",
  },
  momento02_exploracao: {
    instrucao: "Palavras-chave.",
    cenas: [
      { tipo: "texto", texto: "'Cada' + 'quantos ao todo' = multiplicação.", destaque: true },
      { tipo: "texto", texto: "'Dobro', 'triplo', 'vezes' = multiplicação." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "'20 pacotes com 6 balas cada' e '6 pacotes com 20 balas cada' — mesmo total?",
    pista: "Multiplique.",
    revelacao: "Sim! 20 × 6 = 6 × 20 = 120. A ordem não muda o total (propriedade comutativa).",
  },
  momento04_explicacao: {
    titulo: "Estruturas de multiplicação",
    etapas: [
      {
        texto: "Grupos iguais: 8 cestas × 12 ovos = 96 ovos.",
        exemploReal: {
          contexto: "Fazenda do Reino.",
          destaque: "8 × 12 = 96 ovos.",
        },
      },
      {
        texto: "Combinação: 4 blusas × 3 calças = 12 roupas diferentes.",
        exemploReal: {
          contexto: "Guarda-roupa.",
          destaque: "4 × 3 = 12 combinações.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Cada ônibus leva 42 pessoas. 8 ônibus levam quantas?",
    passos: ["Grupos iguais → ×.", "42 × 8 = 336."],
    resposta: "336 pessoas",
    casasValor: { numero: 336, mostrarDecomposicao: true, extenso: "trezentos e trinta e seis" },
  },
  momento06_praticaGuiada: {
    enunciado: "Cada mesa acomoda 6 alunos. Quantos alunos em 15 mesas?",
    dica: "×.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "90" }, { nome: "80" }, { nome: "100" }],
      respostaCerta: "90",
      feedbackAcerto: "🎯 90 alunos.",
      feedbackErro: "6×15=90.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Ana tem 4 cadernos, cada um com 32 páginas. Quantas páginas ao todo?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "128" }, { nome: "124" }, { nome: "132" }],
      respostaCerta: "128",
      feedbackAcerto: "🎯 128 páginas.",
      feedbackErro: "4×32=128.",
    },
  },
  momento08_aplicacao: {
    contexto: "Cada camisa custa R$ 45.",
    problema: "Quanto custam 6 camisas?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 270" }, { nome: "R$ 260" }, { nome: "R$ 280" }],
      respostaCerta: "R$ 270",
      feedbackAcerto: "🎯 R$ 270.",
      feedbackErro: "45×6=270.",
    },
  },
  momento09_revisao: {
    pontos: ["'Cada' + 'quantos no total' = ×.", "Ordem não muda o total."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "8 caixas × 25 lápis = ?", opcoes: ["200", "150", "250"], correta: 0, feedbackAcerto: "🎉 200.", feedbackErro: "8×25=200." },
      { pergunta: "12 pacotes × 30 balas = ?", opcoes: ["360", "300", "420"], correta: 0, feedbackAcerto: "🎉 360.", feedbackErro: "12×30=360." },
      { pergunta: "5 blusas × 4 calças = combinações?", opcoes: ["20", "9", "25"], correta: 0, feedbackAcerto: "🎉 20.", feedbackErro: "5×4=20." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Feirinha em Casa",
    materiais: ["Papel"],
    passos: ["Escolha um produto e quanto custa a unidade.", "Combine uma quantidade.", "Calcule o total."],
    registro: "📸 Foto da conta.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
