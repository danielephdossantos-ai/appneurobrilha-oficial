import type { AulaV4 } from "../../types";

export const aula03_compararFracoes: AulaV4 = {
  slug: "u5-03-comparar-fracoes",
  titulo: "Comparar frações",
  iconeTrilha: "⚖️",
  bncc: ["EF04MA10"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Qual pedaço é maior?",
    historia:
      "{NOME}, comparar frações depende do que muda: se o denominador é IGUAL, compara o numerador. Se o numerador é IGUAL, compara pelo denominador (menor = maior pedaço).",
  },
  momento02_exploracao: {
    instrucao: "Dois casos fáceis.",
    cenas: [
      { tipo: "texto", texto: "Mesmo denominador: 3/8 e 5/8 → 5/8 é maior (mais pedaços iguais).", destaque: true },
      { tipo: "texto", texto: "Mesmo numerador: 1/4 e 1/8 → 1/4 é maior (pedaço maior)." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que 1/4 > 1/8?",
    pista: "Denominador MENOR = partes MAIORES.",
    revelacao: "Cortar em 4 dá pedaço maior do que cortar em 8. Denominador menor, fração maior (mesmo numerador).",
  },
  momento04_explicacao: {
    titulo: "Regras de comparação",
    etapas: [
      {
        texto: "Mesmo denominador: compare os numeradores.",
        exemploReal: {
          contexto: "2/7 e 5/7.",
          destaque: "5/7 > 2/7.",
        },
      },
      {
        texto: "Mesmo numerador: quem tem denominador menor é maior.",
        exemploReal: {
          contexto: "3/5 e 3/10.",
          destaque: "3/5 > 3/10.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Compare 4/9 e 7/9.",
    passos: ["Mesmo denominador (9).", "Compara numeradores: 7 > 4.", "7/9 > 4/9."],
    resposta: "7/9 é maior",
  },
  momento06_praticaGuiada: {
    enunciado: "Qual é maior: 2/6 ou 5/6?",
    dica: "Mesmo denominador.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5/6" }, { nome: "2/6" }, { nome: "São iguais" }],
      respostaCerta: "5/6",
      feedbackAcerto: "🎯 5/6.",
      feedbackErro: "Mais pedaços iguais = maior.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Qual é maior: 1/3 ou 1/6?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1/3" }, { nome: "1/6" }, { nome: "São iguais" }],
      respostaCerta: "1/3",
      feedbackAcerto: "🎯 1/3 (denominador menor, pedaço maior).",
      feedbackErro: "Denominador menor com mesmo numerador = maior.",
    },
  },
  momento08_aplicacao: {
    contexto: "Ana comeu 3/8 da barra. Bruno comeu 5/8 da mesma barra.",
    problema: "Quem comeu mais?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Bruno" }, { nome: "Ana" }, { nome: "Iguais" }],
      respostaCerta: "Bruno",
      feedbackAcerto: "🎯 Bruno (5/8 > 3/8).",
      feedbackErro: "5 > 3 no numerador.",
    },
  },
  momento09_revisao: {
    pontos: ["Mesmo denom: > numerador.", "Mesmo num: < denominador é maior."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Maior: 2/5 ou 4/5?", opcoes: ["4/5", "2/5", "Iguais"], correta: 0, feedbackAcerto: "🎉 4/5.", feedbackErro: "Mesmo denom, maior num." },
      { pergunta: "Maior: 1/2 ou 1/4?", opcoes: ["1/2", "1/4", "Iguais"], correta: 0, feedbackAcerto: "🎉 1/2.", feedbackErro: "Denom menor = maior." },
      { pergunta: "Maior: 3/7 ou 6/7?", opcoes: ["6/7", "3/7", "Iguais"], correta: 0, feedbackAcerto: "🎉 6/7.", feedbackErro: "6 > 3." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Duelo de Frações",
    materiais: ["Papel"],
    passos: ["Escreva 5 pares de frações.", "Compare qual é maior em cada par.", "Explique a regra usada."],
    registro: "📸 Foto do papel.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
