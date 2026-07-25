import type { AulaV4 } from "../../types";

export const aula04_notacaoPequeno: AulaV4 = {
  slug: "u1-04-notacao-pequeno",
  titulo: "Notação científica — números pequenos",
  iconeTrilha: "🔬",
  bncc: ["EF08MA01"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Coisas minúsculas",
    historia:
      "{NOME}, o diâmetro de um vírus é 0,0000001 m. Escrever assim é confuso. Use notação científica com expoente NEGATIVO: 1 · 10⁻⁷.",
  },

  momento02_exploracao: {
    instrucao: "Compare formas de escrever o mesmo número pequeno.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Pequenos → notação científica",
        cabecalhos: ["Comum", "Notação científica"],
        linhas: [
          { rotulo: "0,3", valores: ["0,3", "3 · 10⁻¹"] },
          { rotulo: "0,004", valores: ["0,004", "4 · 10⁻³"] },
          { rotulo: "0,00025", valores: ["0,00025", "2,5 · 10⁻⁴"] },
          { rotulo: "0,000000012", valores: ["0,000000012", "1,2 · 10⁻⁸"] },
        ],
      },
      { tipo: "texto", texto: "Regra: ande com a vírgula pra DIREITA até deixar 1 dígito ≠ 0 antes dela. Expoente NEGATIVO." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "0,0007 tem quantas casas antes do 7?",
    pista: "Ande até 7,0 — quatro casas pra direita.",
    revelacao: "0,0007 = 7 · 10⁻⁴.",
  },

  momento04_explicacao: {
    titulo: "Números pequenos passo a passo",
    etapas: [
      {
        texto: "Ande a vírgula pra direita até 1 dígito ≠ 0 antes dela; conte as casas.",
        exemploReal: {
          contexto: "Transforme 0,00025 em notação científica.",
          visualMat: {
            tipo: "notacaoCientifica",
            numero: "0,00025",
            coeficiente: "2,5",
            expoente: -4,
            legenda: "Número pequeno → expoente negativo",
          },
          destaque: "0,00025 = 2,5 · 10⁻⁴.",
        },
      },
      {
        texto: "Número pequeno → expoente NEGATIVO. Grande → positivo.",
        exemploReal: {
          contexto: "Compare",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Original", "Tipo", "NC"],
            linhas: [
              { rotulo: "0,003", valores: ["0,003", "pequeno", "3 · 10⁻³"] },
              { rotulo: "3.000", valores: ["3.000", "grande", "3 · 10³"] },
              { rotulo: "0,0125", valores: ["0,0125", "pequeno", "1,25 · 10⁻²"] },
            ],
          },
          destaque: "Sinal do expoente diz se é grande ou pequeno.",
        },
      },
      {
        texto: "Voltar da NC para o comum: 10⁻ⁿ → ande a vírgula n casas para a ESQUERDA.",
        exemploReal: {
          contexto: "5,2 · 10⁻³",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Ação"],
            linhas: [
              { rotulo: "1", valores: ["mantissa", "5,2"] },
              { rotulo: "2", valores: ["ande 3 casas p/ esquerda", "0,0052"] },
              { rotulo: "3", valores: ["resultado", "0,0052"] },
            ],
          },
          destaque: "5,2 · 10⁻³ = 0,0052.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Escreva 0,000048 em notação científica.",
    resposta: "4,8 · 10⁻⁵",
    visualMat: {
      tipo: "notacaoCientifica",
      numero: "0,000048",
      coeficiente: "4,8",
      expoente: -5,
      legenda: "Modelagem",
    },
    passos: ["Andei até 4,8.", "5 casas.", "= 4,8 · 10⁻⁵."],
  },

  momento06_praticaGuiada: {
    enunciado: "0,006 em NC é:",
    dica: "3 casas pra direita.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6 · 10⁻³" }, { nome: "6 · 10³" }, { nome: "0,6 · 10⁻²" }],
      respostaCerta: "6 · 10⁻³",
      feedbackAcerto: "🎯",
      feedbackErro: "Pequeno → expoente negativo.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "2,3 · 10⁻² =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "0,023" }, { nome: "0,23" }, { nome: "0,0023" }],
      respostaCerta: "0,023",
      feedbackAcerto: "🎯 2 casas p/ esquerda.",
      feedbackErro: "Expoente −2 → ande 2 casas.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um glóbulo vermelho mede ≈ 7 · 10⁻⁶ m.",
    problema: "Em decimal, quanto é?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "0,000007 m" }, { nome: "0,00007 m" }, { nome: "0,0000007 m" }],
      respostaCerta: "0,000007 m",
      feedbackAcerto: "🎯 6 casas p/ esquerda.",
      feedbackErro: "10⁻⁶ = 6 casas.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Pequeno → expoente negativo.",
      "Conte as casas até o primeiro dígito ≠ 0.",
      "Volta: 10⁻ⁿ = anda n casas p/ esquerda.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "0,05 em NC:", opcoes: ["5 · 10⁻²", "5 · 10²", "0,5 · 10⁻¹"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2 casas." },
      { pergunta: "8 · 10⁻⁴ =", opcoes: ["0,0008", "0,008", "0,00008"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "4 casas." },
      { pergunta: "0,000091 em NC:", opcoes: ["9,1 · 10⁻⁵", "9,1 · 10⁻⁴", "91 · 10⁻⁶"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Ande até 9,1 → 5 casas." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Coisas minúsculas",
    materiais: ["Régua/tabela"],
    passos: [
      "Liste 3 objetos muito pequenos (fio de cabelo, célula, átomo).",
      "Escreva a medida em NC.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
