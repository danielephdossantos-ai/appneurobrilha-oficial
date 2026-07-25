import type { AulaV4 } from "../../types";

export const aula02_divisaoNaChave: AulaV4 = {
  slug: "u4-02-divisao-na-chave",
  titulo: "Divisão na chave",
  iconeTrilha: "🔑",
  bncc: ["EF04MA07"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "A chave da divisão",
    historia:
      "{NOME}, para dividir números grandes, usamos a CHAVE. Dividendo dentro, divisor fora, e vamos por casas: primeiro a CENTENA, depois DEZENA, depois UNIDADE.",
  },
  momento02_exploracao: {
    instrucao: "Da esquerda pra direita (ao contrário da soma).",
    cenas: [
      { tipo: "texto", texto: "Divisão começa pela MAIOR casa do dividendo, não pela unidade.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que começar pela maior casa?",
    pista: "Pense: 246 tem 2 centenas. Quero repartir centenas primeiro.",
    revelacao: "Começar pela maior deixa o resto entrar como sobra pra próxima casa (é o oposto da soma).",
  },
  momento04_explicacao: {
    titulo: "Passo a passo na chave",
    etapas: [
      {
        texto: "Divida 246 ÷ 2.",
        exemploReal: {
          contexto: "Passo 1: 2 (centenas) ÷ 2 = 1. Passo 2: 4 (dezenas) ÷ 2 = 2. Passo 3: 6 (unidades) ÷ 2 = 3.",
          destaque: "246 ÷ 2 = 123. Divisão exata (resto 0).",
        },
      },
      {
        texto: "Quando a casa não é suficiente, agrupamos com a próxima.",
        exemploReal: {
          contexto: "Divida 132 ÷ 4: 1 é menor que 4 → uso 13. 13÷4=3, resto 1. Traz o 2 → 12. 12÷4=3.",
          destaque: "132 ÷ 4 = 33.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Divida 168 ÷ 4.",
    passos: [
      "1 é menor que 4 → uso 16.",
      "16 ÷ 4 = 4 (resto 0). Escrevo 4.",
      "Baixo o 8: 8 ÷ 4 = 2. Escrevo 2.",
      "Resultado: 42, resto 0.",
    ],
    resposta: "42",
  },
  momento06_praticaGuiada: {
    enunciado: "255 ÷ 5 = ?",
    dica: "Comece pela centena. Se não for suficiente, agrupe com a dezena.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "51" }, { nome: "50" }, { nome: "52" }],
      respostaCerta: "51",
      feedbackAcerto: "🎯 51.",
      feedbackErro: "25÷5=5 (resto 0), 5÷5=1 → 51.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "156 ÷ 3 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "52" }, { nome: "42" }, { nome: "62" }],
      respostaCerta: "52",
      feedbackAcerto: "🎯 52.",
      feedbackErro: "15÷3=5, 6÷3=2 → 52.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma escola tem 216 alunos divididos igualmente em 6 turmas.",
    problema: "Quantos alunos por turma?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "36" }, { nome: "34" }, { nome: "40" }],
      respostaCerta: "36",
      feedbackAcerto: "🎯 36 alunos.",
      feedbackErro: "216÷6: 21÷6=3(r 3), traz 6 → 36÷6=6 → 36.",
    },
  },
  momento09_revisao: {
    pontos: ["Divisão começa pela maior casa.", "Se a casa é menor que o divisor, agrupa com a próxima."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "126 ÷ 2 = ?", opcoes: ["63", "62", "64"], correta: 0, feedbackAcerto: "🎉 63.", feedbackErro: "1÷2 não dá → 12÷2=6, 6÷2=3 → 63." },
      { pergunta: "184 ÷ 4 = ?", opcoes: ["46", "44", "48"], correta: 0, feedbackAcerto: "🎉 46.", feedbackErro: "18÷4=4(r 2), traz 4 → 24÷4=6 → 46." },
      { pergunta: "312 ÷ 6 = ?", opcoes: ["52", "42", "62"], correta: 0, feedbackAcerto: "🎉 52.", feedbackErro: "31÷6=5(r 1), traz 2 → 12÷6=2 → 52." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Chave da Divisão",
    materiais: ["Papel"],
    passos: ["Peça 3 números de 3 algarismos para dividir por 2, 3 e 4.", "Faça na chave.", "Marque o resto de cada passo."],
    registro: "📸 Foto das divisões na chave.",
  },
  recompensa: { xp: 220, moedas: 110 },
};
