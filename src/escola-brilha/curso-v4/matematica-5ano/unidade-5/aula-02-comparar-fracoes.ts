import type { AulaV4 } from "../../types";

export const aula02_compararFracoes: AulaV4 = {
  slug: "u5-02-comparar-fracoes",
  titulo: "Comparar frações",
  iconeTrilha: "⚖️",
  bncc: ["EF05MA04"],
  duracaoMin: 20,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "Qual pedaço é maior?",
    historia: "{NOME}, comparar frações é olhar quem tem o pedaço maior — não é olhar só os números.",
  },
  momento02_exploracao: {
    instrucao: "Três casos.",
    cenas: [
      { tipo: "texto", texto: "Mesmo DENOMINADOR: quem tem numerador maior é maior. 3/5 > 2/5.", destaque: true },
      { tipo: "texto", texto: "Mesmo NUMERADOR: quem tem denominador MENOR é maior. 3/4 > 3/8." },
      { tipo: "texto", texto: "Nada em comum: iguale denominadores (mmc ou multiplicação cruzada)." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "2/3 ou 3/5?",
    pista: "Multiplicação cruzada: 2×5=10 vs 3×3=9.",
    revelacao: "10 > 9 → 2/3 > 3/5.",
  },
  momento04_explicacao: {
    titulo: "Comparação cruzada",
    etapas: [
      { texto: "Regra: a/b vs c/d. Compare a×d com c×b." },
      { texto: "Se a×d > c×b → a/b > c/d." },
      { texto: "3/4 vs 5/6: 3×6=18 vs 5×4=20 → 3/4 < 5/6." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Compare 4/7 e 3/5.",
    resposta: "4/7 < 3/5",
    passos: ["4×5=20, 3×7=21.", "20 < 21 → 4/7 < 3/5."],
  },
  momento06_praticaGuiada: {
    enunciado: "5/8 ou 2/3?",
    dica: "Cruzada.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Maior:",
      opcoes: [{ nome: "2/3" }, { nome: "5/8" }, { nome: "iguais" }],
      respostaCerta: "2/3",
      feedbackAcerto: "🎯 2×8=16, 5×3=15 → 2/3.",
      feedbackErro: "2/3 é maior.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "3/4 ou 5/6?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Maior:",
      opcoes: [{ nome: "5/6" }, { nome: "3/4" }, { nome: "iguais" }],
      respostaCerta: "5/6",
      feedbackAcerto: "🎯 5×4=20 > 3×6=18.",
      feedbackErro: "5/6 > 3/4.",
    },
  },
  momento08_aplicacao: {
    contexto: "Ana comeu 3/8 do bolo. João comeu 2/5.",
    problema: "Quem comeu mais?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "João (2/5)" }, { nome: "Ana (3/8)" }, { nome: "iguais" }],
      respostaCerta: "João (2/5)",
      feedbackAcerto: "🎯 2×8=16 vs 3×5=15.",
      feedbackErro: "2/5 > 3/8.",
    },
  },
  momento09_revisao: {
    pontos: ["Mesmo denominador: numerador decide.", "Mesmo numerador: denominador MENOR = maior.", "Nada igual: cruzada."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2/5 vs 3/5:", opcoes: ["3/5", "2/5", "iguais"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3/5 é maior." },
      { pergunta: "1/2 vs 1/3:", opcoes: ["1/2", "1/3", "iguais"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Denominador menor = maior → 1/2." },
      { pergunta: "3/7 vs 4/9:", opcoes: ["4/9", "3/7", "iguais"], correta: 0, feedbackAcerto: "🎉 3×9=27, 4×7=28.", feedbackErro: "4/9 é maior." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Barras de chocolate",
    materiais: ["Papel"],
    passos: ["Desenhe 2 barras iguais.", "Divida uma em 4 e outra em 6.", "Pinte 3/4 e 4/6. Compare visualmente."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 150, moedas: 80 },
};
