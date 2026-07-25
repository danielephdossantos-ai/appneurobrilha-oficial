import type { AulaV4 } from "../../types";

export const aula03_primos: AulaV4 = {
  slug: "u3-03-primos",
  titulo: "Números primos e fatoração",
  iconeTrilha: "💎",
  bncc: ["EF06MA05"],
  duracaoMin: 24,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Os tijolos da matemática",
    historia: "{NOME}, tem números que só têm 2 divisores: 1 e ele mesmo. São os PRIMOS. Todo número inteiro pode ser 'quebrado' num produto de primos.",
  },

  momento02_exploracao: {
    instrucao: "Primos até 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.",
    cenas: [
      { tipo: "texto", texto: "PRIMO = exatamente 2 divisores (1 e ele mesmo).", destaque: true },
      {
        tipo: "tabela",
        titulo: "Primos vs compostos",
        cabecalhos: ["Número", "Divisores", "Tipo"],
        linhas: [
          { rotulo: "2", valores: ["2", "1, 2", "Primo ✅"] },
          { rotulo: "3", valores: ["3", "1, 3", "Primo ✅"] },
          { rotulo: "4", valores: ["4", "1, 2, 4", "Composto"] },
          { rotulo: "5", valores: ["5", "1, 5", "Primo ✅"] },
          { rotulo: "6", valores: ["6", "1, 2, 3, 6", "Composto"] },
          { rotulo: "7", valores: ["7", "1, 7", "Primo ✅"] },
          { rotulo: "9", valores: ["9", "1, 3, 9", "Composto"] },
        ],
      },
      { tipo: "texto", texto: "1 NÃO é primo (só tem 1 divisor).", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como decompor 60 em primos?",
    pista: "Vá dividindo pelos menores primos: 2, 3, 5, 7…",
    revelacao: "60 = 2² × 3 × 5.",
  },

  momento04_explicacao: {
    titulo: "Fatoração em primos",
    etapas: [
      {
        texto: "Divida sucessivamente pelo MENOR primo que couber.",
        exemploReal: {
          contexto: "Fatoração de 60",
          visualMat: {
            tipo: "tabela",
            titulo: "60 → primos",
            cabecalhos: ["Dividendo", "Primo", "Quociente"],
            linhas: [
              { rotulo: "1", valores: ["60", "2", "30"] },
              { rotulo: "2", valores: ["30", "2", "15"] },
              { rotulo: "3", valores: ["15", "3", "5"] },
              { rotulo: "4", valores: ["5", "5", "1"] },
            ],
          },
          destaque: "60 = 2 × 2 × 3 × 5 = 2² × 3 × 5.",
        },
      },
      {
        texto: "A fatoração é ÚNICA (Teorema Fundamental da Aritmética).",
        exemploReal: {
          contexto: "Não importa a ordem: 24 = 2³ × 3.",
          destaque: "Cada composto tem UMA e só uma fatoração em primos.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Fatore 84 em primos.",
    resposta: "84 = 2² × 3 × 7",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Dividendo", "Primo"],
      linhas: [
        { rotulo: "1", valores: ["1", "84", "2"] },
        { rotulo: "2", valores: ["2", "42", "2"] },
        { rotulo: "3", valores: ["3", "21", "3"] },
        { rotulo: "4", valores: ["4", "7", "7"] },
      ],
    },
    passos: ["84 ÷ 2 = 42.", "42 ÷ 2 = 21.", "21 ÷ 3 = 7.", "7 ÷ 7 = 1.", "Resposta: 2²·3·7."],
  },

  momento06_praticaGuiada: {
    enunciado: "Qual desses é primo?",
    dica: "Só 2 divisores.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "17" }, { nome: "21" }, { nome: "27" }],
      respostaCerta: "17",
      feedbackAcerto: "🎯 17 só tem 1 e 17.",
      feedbackErro: "21 = 3×7, 27 = 3³.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Fatore 45.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3² × 5" }, { nome: "5 × 9" }, { nome: "3 × 15" }],
      respostaCerta: "3² × 5",
      feedbackAcerto: "🎯 45 = 3 × 3 × 5.",
      feedbackErro: "9 e 15 NÃO são primos. Só primos!",
    },
  },

  momento08_aplicacao: {
    contexto: "Criptografia usa primos GIGANTES para proteger senhas.",
    problema: "Por quê? Porque fatorar um produto de primos enormes é MUITO difícil, mesmo pro computador.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Isso mostra que primos são:",
      opcoes: [{ nome: "Fundamentais na tecnologia" }, { nome: "Sem uso real" }, { nome: "Só de escola" }],
      respostaCerta: "Fundamentais na tecnologia",
      feedbackAcerto: "🎯 RSA, Pix, bancos: tudo usa primos.",
      feedbackErro: "Sem primos não existiria internet segura.",
    },
  },

  momento09_revisao: {
    pontos: ["Primo = 2 divisores.", "Fatoração = quebrar em primos.", "É única."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Menor primo:", opcoes: ["2", "1", "3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1 não é primo." },
      { pergunta: "1 é primo?", opcoes: ["Não", "Sim"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Só 1 divisor." },
      { pergunta: "Fatoração de 20:", opcoes: ["2² × 5", "4 × 5", "2 × 10"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Só primos." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Escadinha de primos",
    materiais: ["Papel"],
    passos: ["Escolha um número entre 30 e 100.", "Fatore em primos (escadinha).", "Peça pra família conferir."],
    registro: "📸 Foto da fatoração.",
  },
  recompensa: { xp: 170, moedas: 90 },
};
