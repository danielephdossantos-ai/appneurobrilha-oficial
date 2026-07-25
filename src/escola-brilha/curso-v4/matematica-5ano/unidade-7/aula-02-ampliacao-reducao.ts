import type { AulaV4 } from "../../types";

export const aula02_ampliacaoReducao: AulaV4 = {
  slug: "u7-02-ampliacao-reducao",
  titulo: "Ampliar e reduzir figuras",
  iconeTrilha: "🔍",
  bncc: ["EF05MA17"],
  duracaoMin: 20,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "Mesma forma, tamanho diferente",
    historia: "{NOME}, para ampliar ou reduzir uma figura, multiplicamos TODOS os lados pelo mesmo número (fator de escala).",
  },
  momento02_exploracao: {
    instrucao: "Regra.",
    cenas: [
      { tipo: "texto", texto: "Ampliar: multiplique todos os lados por um número > 1.", destaque: true },
      { tipo: "texto", texto: "Reduzir: multiplique por um número < 1 (ou divida)." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Retângulo 3×2 ampliado por 2?",
    pista: "Multiplique cada lado.",
    revelacao: "Fica 6×4.",
  },
  momento04_explicacao: {
    titulo: "Fator de escala",
    etapas: [
      { texto: "3×2 × 2 = 6×4 (dobrado)." },
      { texto: "12×8 ÷ 4 = 3×2 (reduzido à quarta parte)." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Quadrado 4 cm dobrado.",
    resposta: "Quadrado 8 cm",
    passos: ["Cada lado × 2.", "= 8 cm."],
  },
  momento06_praticaGuiada: {
    enunciado: "Retângulo 6×4 reduzido pela metade.",
    dica: "÷ 2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Novo:",
      opcoes: [{ nome: "3×2" }, { nome: "4×2" }, { nome: "6×2" }],
      respostaCerta: "3×2",
      feedbackAcerto: "🎯",
      feedbackErro: "3×2.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Triângulo lados 2, 3, 4 ampliado por 3.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Novos lados:",
      opcoes: [{ nome: "6, 9, 12" }, { nome: "5, 6, 7" }, { nome: "2, 3, 4" }],
      respostaCerta: "6, 9, 12",
      feedbackAcerto: "🎯",
      feedbackErro: "6, 9, 12.",
    },
  },
  momento08_aplicacao: {
    contexto: "Foto 10×15 cm ampliada para o dobro.",
    problema: "Novo tamanho?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "20×30 cm" }, { nome: "10×30 cm" }, { nome: "20×15 cm" }],
      respostaCerta: "20×30 cm",
      feedbackAcerto: "🎯",
      feedbackErro: "20×30.",
    },
  },
  momento09_revisao: {
    pontos: ["Mesmo fator em TODOS os lados.", "Mesma forma, tamanho diferente."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "5×3 dobrado:", opcoes: ["10×6", "5×6", "10×3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "10×6." },
      { pergunta: "12×8 ÷ 4:", opcoes: ["3×2", "6×4", "4×2"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3×2." },
      { pergunta: "Quadrado 7 triplicado:", opcoes: ["21", "14", "10"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "21." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Papel dobrado",
    materiais: ["Papel"],
    passos: ["Desenhe uma figura.", "Copie ampliada em outra folha (fator 2)."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 140, moedas: 75 },
};
