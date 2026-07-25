import type { AulaV4 } from "../../types";

export const aula02_fracoesEquivalentes: AulaV4 = {
  slug: "u5-02-fracoes-equivalentes",
  titulo: "Frações equivalentes",
  iconeTrilha: "🟰",
  bncc: ["EF04MA09"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Mesma quantidade, escritas diferentes",
    historia:
      "{NOME}, 1/2 é igual a 2/4 e a 4/8. Todas são a METADE, escritas de formas diferentes. São FRAÇÕES EQUIVALENTES.",
  },
  momento02_exploracao: {
    instrucao: "Olhe as barras.",
    cenas: [
      { tipo: "texto", texto: "Barra em 2 (1 pintada) = barra em 4 (2 pintadas) = barra em 8 (4 pintadas).", destaque: true },
      { tipo: "texto", texto: "1/2 = 2/4 = 4/8." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como obter uma equivalente?",
    pista: "Multiplique numerador E denominador pelo MESMO número.",
    revelacao: "Se você faz a mesma coisa em cima e embaixo, a fração NÃO muda de valor.",
  },
  momento04_explicacao: {
    titulo: "Obter frações equivalentes",
    etapas: [
      {
        texto: "×2 em cima e embaixo: 1/3 → 2/6.",
        exemploReal: {
          contexto: "Dobrar as duas partes.",
          destaque: "1/3 = 2/6.",
        },
      },
      {
        texto: "×3: 1/3 → 3/9. ×4: 1/3 → 4/12. Todas EQUIVALENTES.",
        exemploReal: {
          contexto: "Confira: em 9 partes iguais, 3 pintadas dá 1/3 do todo.",
          destaque: "1/3 = 3/9 = 4/12.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Encontre uma equivalente de 2/5 multiplicando por 3.",
    passos: ["2×3=6.", "5×3=15.", "Equivalente: 6/15."],
    resposta: "6/15",
  },
  momento06_praticaGuiada: {
    enunciado: "1/4 é equivalente a:",
    dica: "Multiplique em cima e embaixo pelo mesmo número.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2/8" }, { nome: "1/8" }, { nome: "3/4" }],
      respostaCerta: "2/8",
      feedbackAcerto: "🎯 2/8 = 1/4.",
      feedbackErro: "×2 nos dois: 1/4 = 2/8.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "3/5 é equivalente a:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6/10" }, { nome: "5/3" }, { nome: "3/10" }],
      respostaCerta: "6/10",
      feedbackAcerto: "🎯 6/10.",
      feedbackErro: "×2: 3/5=6/10.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma pizza cortada em 6 fatias, Ana comeu 2.",
    problema: "Que fração equivalente representa o mesmo (dividida em 12)?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4/12" }, { nome: "2/12" }, { nome: "6/12" }],
      respostaCerta: "4/12",
      feedbackAcerto: "🎯 4/12 = 2/6.",
      feedbackErro: "×2: 2/6=4/12.",
    },
  },
  momento09_revisao: {
    pontos: ["Multiplicar em cima E embaixo pelo mesmo número mantém o valor."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Equivalente de 1/2:", opcoes: ["2/4", "1/3", "3/2"], correta: 0, feedbackAcerto: "🎉 2/4.", feedbackErro: "×2." },
      { pergunta: "Equivalente de 2/3:", opcoes: ["4/6", "3/2", "2/6"], correta: 0, feedbackAcerto: "🎉 4/6.", feedbackErro: "×2." },
      { pergunta: "Equivalente de 3/4:", opcoes: ["6/8", "4/3", "3/8"], correta: 0, feedbackAcerto: "🎉 6/8.", feedbackErro: "×2." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Faixas equivalentes",
    materiais: ["3 tiras de papel iguais"],
    passos: ["Corte uma em 2, outra em 4 e outra em 8 partes iguais.", "Pinte metade de cada uma.", "Confirme que 1/2 = 2/4 = 4/8."],
    registro: "📸 Foto das 3 tiras.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
