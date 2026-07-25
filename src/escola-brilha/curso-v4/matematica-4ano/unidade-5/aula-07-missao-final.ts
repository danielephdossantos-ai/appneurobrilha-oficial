import type { AulaV4 } from "../../types";

export const aula07_missaoFinalU5: AulaV4 = {
  slug: "u5-07-missao-final",
  titulo: "Missão Final: Domador(a) de Frações e Decimais",
  iconeTrilha: "🏆",
  bncc: ["EF04MA09", "EF04MA10", "EF04MA25"],
  duracaoMin: 25,
  metodologias: ["cpa", "vergnaud", "skemp", "rme"],

  momento01_motivacao: {
    titulo: "Prova das Partes",
    historia:
      "{NOME}, para virar Domador(a) das frações e decimais: leia, escreva, compare, some e resolva problemas.",
  },
  momento02_exploracao: {
    instrucao: "Aquecimento.",
    cenas: [
      { tipo: "texto", texto: "Metade=1/2=0,5 · Quarto=1/4=0,25 · Décimo=1/10=0,1.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Quem é maior: 0,5 ou 1/3?",
    pista: "Compare no mesmo idioma.",
    revelacao: "0,5 = 5/10. 1/3 ≈ 0,33. Então 0,5 > 1/3.",
  },
  momento04_explicacao: {
    titulo: "Roteiro",
    etapas: [
      {
        texto: "Fração → decimal: divida numerador por denominador. Decimal → fração: leia a última casa.",
        exemploReal: {
          contexto: "0,3 = 3/10. 0,25 = 25/100 = 1/4.",
          destaque: "É só ler.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Escreva 3/4 em decimal.",
    passos: ["3 ÷ 4 = 0,75.", "Ou multiplique por 25 em cima e embaixo: 75/100 = 0,75."],
    resposta: "0,75",
  },
  momento06_praticaGuiada: {
    enunciado: "0,25 em fração:",
    dica: "2 casas após vírgula = centésimos.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1/4" }, { nome: "1/25" }, { nome: "25" }],
      respostaCerta: "1/4",
      feedbackAcerto: "🎯 1/4 (25/100 simplificado).",
      feedbackErro: "25/100 = 1/4.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "1/2 de 46 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "23" }, { nome: "24" }, { nome: "22" }],
      respostaCerta: "23",
      feedbackAcerto: "🎯 23.",
      feedbackErro: "46÷2=23.",
    },
  },
  momento08_aplicacao: {
    contexto: "Ana comprou 3 itens: R$ 4,50, R$ 7,25 e R$ 2,80.",
    problema: "Total:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 14,55" }, { nome: "R$ 13,55" }, { nome: "R$ 14,05" }],
      respostaCerta: "R$ 14,55",
      feedbackAcerto: "🎯 R$ 14,55.",
      feedbackErro: "50+25+80=155 centavos (1,55); 4+7+2=13; 13+1,55=14,55.",
    },
  },
  momento09_revisao: {
    pontos: ["Fração e decimal descrevem partes iguais.", "Alinhe a vírgula para somar."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1/4 em decimal:", opcoes: ["0,25", "0,4", "0,1"], correta: 0, feedbackAcerto: "🎉 0,25.", feedbackErro: "1÷4=0,25." },
      { pergunta: "Maior: 3/8 ou 5/8?", opcoes: ["5/8", "3/8", "Iguais"], correta: 0, feedbackAcerto: "🎉 5/8.", feedbackErro: "Mesmo denom." },
      { pergunta: "0,3 + 0,5 = ?", opcoes: ["0,8", "0,53", "0,15"], correta: 0, feedbackAcerto: "🎉 0,8.", feedbackErro: "3+5=8 décimos." },
      { pergunta: "1/3 de 90 = ?", opcoes: ["30", "20", "45"], correta: 0, feedbackAcerto: "🎉 30.", feedbackErro: "90÷3=30." },
      { pergunta: "R$ 20 − R$ 7,50 = ?", opcoes: ["R$ 12,50", "R$ 13,50", "R$ 12,00"], correta: 0, feedbackAcerto: "🎉 R$ 12,50.", feedbackErro: "Alinhe vírgula: 12,50." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma das Partes",
    materiais: ["Papel"],
    passos: ["Faça 3 mini-provas: 1 fração ↔ decimal; 1 comparação; 1 problema com dinheiro."],
    registro: "📸 Foto das 3 respostas.",
  },
  recompensa: { xp: 250, moedas: 130, medalha: "Domador(a) das Partes" },
};
