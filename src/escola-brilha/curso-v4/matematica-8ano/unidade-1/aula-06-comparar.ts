import type { AulaV4 } from "../../types";

export const aula06_comparar: AulaV4 = {
  slug: "u1-06-comparar",
  titulo: "Comparar e ordenar em notação científica",
  iconeTrilha: "📏",
  bncc: ["EF08MA01"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Qual é o MAIOR?",
    historia:
      "{NOME}, entre 3 · 10⁵ e 8 · 10⁴, qual é maior? Se olhar só a mantissa, você erra. Na Oficina, EXPOENTE manda primeiro.",
  },

  momento02_exploracao: {
    instrucao: "Compare pares em NC.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Comparações",
        cabecalhos: ["A", "B", "Maior"],
        linhas: [
          { rotulo: "1", valores: ["3 · 10⁵", "8 · 10⁴", "A"] },
          { rotulo: "2", valores: ["2 · 10³", "5 · 10³", "B"] },
          { rotulo: "3", valores: ["1 · 10⁻²", "3 · 10⁻⁵", "A"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Qual regra sempre funciona?",
    pista: "Expoente maior = número maior. Empatou? Compara mantissa.",
    revelacao: "Ordem: 1º expoente, 2º mantissa.",
  },

  momento04_explicacao: {
    titulo: "Comparar em 2 passos",
    etapas: [
      {
        texto: "Passo 1: MAIOR expoente = MAIOR número (com mesmo sinal). Cuidado com expoentes negativos.",
        exemploReal: {
          contexto: "Compare 3 · 10⁵ e 8 · 10⁴.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Número", "Expoente"],
            linhas: [
              { rotulo: "A", valores: ["3 · 10⁵", "5"] },
              { rotulo: "B", valores: ["8 · 10⁴", "4"] },
            ],
          },
          destaque: "5 > 4 → A > B, mesmo com mantissa menor.",
        },
      },
      {
        texto: "Passo 2: expoentes IGUAIS → compare mantissas.",
        exemploReal: {
          contexto: "Compare 2 · 10³ e 5 · 10³.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Número", "Mantissa"],
            linhas: [
              { rotulo: "A", valores: ["2 · 10³", "2"] },
              { rotulo: "B", valores: ["5 · 10³", "5"] },
            ],
          },
          destaque: "5 > 2 → B > A.",
        },
      },
      {
        texto: "Expoente negativo: −2 > −5 (mais próximo do zero).",
        exemploReal: {
          contexto: "Compare 1 · 10⁻² e 3 · 10⁻⁵.",
          visualMat: {
            tipo: "retaNumerica",
            min: -6,
            max: -1,
            passo: 1,
            destacar: [
              { valor: -5, rotulo: "3·10⁻⁵", cor: "#ef4444" },
              { valor: -2, rotulo: "1·10⁻²", cor: "#10b981" },
            ],
          },
          destaque: "−2 fica à direita de −5 → 1·10⁻² > 3·10⁻⁵.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Ordene do menor pro maior: 4·10³, 9·10², 2·10⁴.",
    resposta: "9·10² < 4·10³ < 2·10⁴",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Número", "Expoente"],
      linhas: [
        { rotulo: "A", valores: ["9·10²", "2"] },
        { rotulo: "B", valores: ["4·10³", "3"] },
        { rotulo: "C", valores: ["2·10⁴", "4"] },
      ],
    },
    passos: ["Compare pelos expoentes: 2 < 3 < 4.", "Ordem: 9·10² < 4·10³ < 2·10⁴."],
  },

  momento06_praticaGuiada: {
    enunciado: "Qual é maior: 6 · 10⁷ ou 9 · 10⁶?",
    dica: "Expoente primeiro.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6 · 10⁷" }, { nome: "9 · 10⁶" }, { nome: "iguais" }],
      respostaCerta: "6 · 10⁷",
      feedbackAcerto: "🎯 Expoente 7 > 6.",
      feedbackErro: "Mantissa só decide se o expoente empatar.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Ordene: 3·10⁻², 8·10⁻⁴, 5·10⁻².",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Do MENOR ao MAIOR:",
      opcoes: [
        { nome: "8·10⁻⁴ < 3·10⁻² < 5·10⁻²" },
        { nome: "3·10⁻² < 5·10⁻² < 8·10⁻⁴" },
        { nome: "5·10⁻² < 3·10⁻² < 8·10⁻⁴" },
      ],
      respostaCerta: "8·10⁻⁴ < 3·10⁻² < 5·10⁻²",
      feedbackAcerto: "🎯 −4 < −2, depois 3 < 5.",
      feedbackErro: "Expoente −4 é o menor.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Massa da Terra ≈ 5,97 · 10²⁴ kg · Marte ≈ 6,42 · 10²³ kg · Vênus ≈ 4,87 · 10²⁴ kg.",
    problema: "Qual planeta tem a maior massa?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Terra" }, { nome: "Vênus" }, { nome: "Marte" }],
      respostaCerta: "Terra",
      feedbackAcerto: "🎯 Expoente 24 e mantissa 5,97 maior que 4,87.",
      feedbackErro: "Compare mantissas dos que têm expoente 24.",
    },
  },

  momento09_revisao: {
    pontos: [
      "1º compare expoentes.",
      "2º empatou → compare mantissas.",
      "Cuidado com sinais nos expoentes.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Maior: 4·10⁵ ou 9·10⁴?", opcoes: ["4·10⁵", "9·10⁴", "iguais"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "5 > 4." },
      { pergunta: "Maior: 2·10³ ou 5·10³?", opcoes: ["5·10³", "2·10³", "iguais"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Empate no expoente → mantissa." },
      { pergunta: "Maior: 1·10⁻² ou 1·10⁻⁵?", opcoes: ["1·10⁻²", "1·10⁻⁵", "iguais"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "−2 > −5." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Recorde do mundo",
    materiais: ["Internet/livro"],
    passos: ["Encontre 3 números gigantes (planetas, distâncias).", "Ordene do menor pro maior."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
