import type { AulaV4 } from "../../types";

export const aula07_missaoFinalU3: AulaV4 = {
  slug: "u3-07-missao-final",
  titulo: "Missão Final: Mestre da Multiplicação",
  iconeTrilha: "🏆",
  bncc: ["EF04MA04", "EF04MA06", "EF04MA26"],
  duracaoMin: 25,
  metodologias: ["cpa", "vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "Prova do Mestre",
    historia:
      "{NOME}, para virar Mestre da Multiplicação você precisa dominar: tabuada, ×10/100/1000, 1 e 2 dígitos, dobro/triplo e problemas.",
  },
  momento02_exploracao: {
    instrucao: "Aquecimento.",
    cenas: [
      { tipo: "tabuada", fator: 7, ate: 10, titulo: "Tabuada do 7" },
      { tipo: "texto", texto: "×10 → 1 zero. ×100 → 2 zeros.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Qual estratégia funciona sempre?",
    pista: "Todas as multiplicações têm um padrão.",
    revelacao: "Arme, multiplique da unidade pra esquerda, guarde o 'vai', some as parciais quando forem 2 linhas.",
  },
  momento04_explicacao: {
    titulo: "Roteiro rápido",
    etapas: [
      {
        texto: "Multiplicação 2 dígitos × 2 dígitos: 2 parciais, 1 soma.",
        exemploReal: {
          contexto: "56 × 34.",
          destaque: "56×4=224 · 56×3=168(→1.680) · 224+1.680=1.904.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Multiplique 148 × 5.",
    passos: [
      "U: 5×8=40 (0, vai 4).",
      "D: 5×4=20+4=24 (4, vai 2).",
      "C: 5×1=5+2=7.",
      "Resultado: 740.",
    ],
    resposta: "740",
    casasValor: { numero: 740, mostrarDecomposicao: true, extenso: "setecentos e quarenta" },
  },
  momento06_praticaGuiada: {
    enunciado: "34 × 12 = ?",
    dica: "Duas parciais.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "408" }, { nome: "398" }, { nome: "418" }],
      respostaCerta: "408",
      feedbackAcerto: "🎯 408.",
      feedbackErro: "34×2=68, 34×1=34(→340). 68+340=408.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "27 × 15 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "405" }, { nome: "395" }, { nome: "415" }],
      respostaCerta: "405",
      feedbackAcerto: "🎯 405.",
      feedbackErro: "27×5=135, 27×1=27(→270). 135+270=405.",
    },
  },
  momento08_aplicacao: {
    contexto: "O ourives faz 24 anéis por dia.",
    problema: "Quantos anéis em 25 dias?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "600" }, { nome: "580" }, { nome: "620" }],
      respostaCerta: "600",
      feedbackAcerto: "🎯 600 anéis.",
      feedbackErro: "24×25=600.",
    },
  },
  momento09_revisao: {
    pontos: ["Tabuada é a régua.", "×10/100/1000 = colar zeros.", "×2 dígitos = 2 parciais + soma."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "9 × 8 = ?", opcoes: ["72", "64", "81"], correta: 0, feedbackAcerto: "🎉 72.", feedbackErro: "Linha do 8: 72." },
      { pergunta: "125 × 4 = ?", opcoes: ["500", "480", "520"], correta: 0, feedbackAcerto: "🎉 500.", feedbackErro: "4×5=20, 4×2+2=10, 4×1+1=5 → 500." },
      { pergunta: "56 × 100 = ?", opcoes: ["5.600", "560", "56.000"], correta: 0, feedbackAcerto: "🎉 5.600.", feedbackErro: "×100 → 2 zeros." },
      { pergunta: "23 × 14 = ?", opcoes: ["322", "312", "332"], correta: 0, feedbackAcerto: "🎉 322.", feedbackErro: "23×4=92, 23×1=23(→230). 92+230=322." },
      { pergunta: "Triplo de 235 = ?", opcoes: ["705", "605", "805"], correta: 0, feedbackAcerto: "🎉 705.", feedbackErro: "235×3=705." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma do Mestre",
    materiais: ["Papel"],
    passos: ["Peça a alguém 3 multiplicações: uma por 1 dígito, uma por 2 dígitos e uma com dobro/triplo.", "Resolva armado."],
    registro: "📸 Foto das 3 contas.",
  },
  recompensa: { xp: 250, moedas: 130, medalha: "Mestre da Multiplicação" },
};
