import type { AulaV4 } from "../../types";

export const aula01_divisaoPor1Digito: AulaV4 = {
  slug: "u4-01-divisao-por-1-digito",
  titulo: "Divisão pela chave (por 1 dígito)",
  iconeTrilha: "➗",
  bncc: ["EF05MA07"],
  duracaoMin: 24,
  metodologias: ["skemp", "cpa"],

  momento01_motivacao: {
    titulo: "A CHAVE da divisão",
    historia: "{NOME}, no 5º ano usamos o método da CHAVE: dividendo | divisor. Vai dividindo casa por casa, da esquerda pra direita.",
  },
  momento02_exploracao: {
    instrucao: "Roteiro da chave.",
    cenas: [
      { tipo: "texto", texto: "1º Ache quantas vezes o divisor cabe no primeiro dígito (ou nos dois primeiros).", destaque: true },
      { tipo: "texto", texto: "2º Multiplica pra baixo, subtrai, DESCE o próximo dígito." },
      { tipo: "texto", texto: "3º Repete até acabar." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "852 ÷ 4?",
    pista: "8 ÷ 4 = 2. Depois 5 ÷ 4 = 1 (resta 1, desce 2 → 12). 12 ÷ 4 = 3.",
    revelacao: "852 ÷ 4 = 213.",
  },
  momento04_explicacao: {
    titulo: "Exemplo passo a passo",
    etapas: [
      { texto: "684 ÷ 3." },
      { texto: "1º 6 ÷ 3 = 2. Multiplica 2×3=6. Subtrai 6−6=0." },
      { texto: "2º Desce o 8. 8 ÷ 3 = 2. Multiplica 2×3=6. Subtrai 8−6=2." },
      { texto: "3º Desce o 4. 24 ÷ 3 = 8. Multiplica 8×3=24. Subtrai 0." },
      { texto: "Resultado: 228, resto 0." },
    ],
  },
  momento05_modelagem: {
    enunciado: "936 ÷ 4.",
    resposta: "234",
    passos: ["9 ÷ 4 = 2, resta 1.", "Desce 3 → 13 ÷ 4 = 3, resta 1.", "Desce 6 → 16 ÷ 4 = 4.", "= 234."],
  },
  momento06_praticaGuiada: {
    enunciado: "Juntos: 728 ÷ 4.",
    dica: "7÷4=1, resta 3.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "182" }, { nome: "172" }, { nome: "192" }],
      respostaCerta: "182",
      feedbackAcerto: "🎯 7÷4=1r3 · 32÷4=8 · 8÷4=2 → 182.",
      feedbackErro: "728 ÷ 4 = 182.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Sua vez: 645 ÷ 5.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "129" }, { nome: "128" }, { nome: "139" }],
      respostaCerta: "129",
      feedbackAcerto: "🎯",
      feedbackErro: "6÷5=1r1 · 14÷5=2r4 · 45÷5=9 → 129.",
    },
  },
  momento08_aplicacao: {
    contexto: "486 laranjas em 6 caixas iguais.",
    problema: "Quantas por caixa?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "81" }, { nome: "71" }, { nome: "91" }],
      respostaCerta: "81",
      feedbackAcerto: "🎯 486 ÷ 6 = 81.",
      feedbackErro: "48÷6=8, 6÷6=1 → 81.",
    },
  },
  momento09_revisao: {
    pontos: ["Dividendo | divisor.", "Divide, multiplica, subtrai, desce.", "Termina quando acabam os dígitos do dividendo."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "246 ÷ 3 = ?", opcoes: ["82", "72", "92"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "82." },
      { pergunta: "735 ÷ 5 = ?", opcoes: ["147", "137", "157"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "147." },
      { pergunta: "864 ÷ 4 = ?", opcoes: ["216", "206", "226"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "216." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Dividir na cozinha",
    materiais: ["Papel"],
    passos: ["Escolha uma receita.", "Divida o total em porções pela chave."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 85 },
};
