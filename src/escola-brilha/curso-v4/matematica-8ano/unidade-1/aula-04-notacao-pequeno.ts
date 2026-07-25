import type { AulaV4 } from "../../types";

/**
 * Aula 04 · U1 — Notação científica para números PEQUENOS.
 * Padrão piloto: passo a passo com contagem de casas + Professor + armadilha do sinal.
 */
export const aula04_notacaoPequeno: AulaV4 = {
  slug: "u1-04-notacao-pequeno",
  titulo: "Notação científica — números pequenos",
  iconeTrilha: "🔬",
  bncc: ["EF08MA01"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Coisas minúsculas",
    historia:
      "{NOME}, o diâmetro de um vírus é 0,0000001 m. Escrever assim confunde. Notação científica com expoente NEGATIVO resolve: 1 · 10⁻⁷. Cuidado: expoente negativo NÃO significa número negativo. 10⁻⁷ é POSITIVO — só bem pequeno.",
  },

  momento02_exploracao: {
    instrucao: "Compare formas de escrever o mesmo número pequeno.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Pequenos → notação científica",
        cabecalhos: ["Comum", "Notação científica", "Casas movidas"],
        linhas: [
          { rotulo: "0,3", valores: ["0,3", "3 · 10⁻¹", "1"] },
          { rotulo: "0,004", valores: ["0,004", "4 · 10⁻³", "3"] },
          { rotulo: "0,00025", valores: ["0,00025", "2,5 · 10⁻⁴", "4"] },
          { rotulo: "0,000000012", valores: ["0,000000012", "1,2 · 10⁻⁸", "8"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "🔑 Regra: ande com a vírgula pra DIREITA até deixar 1 dígito ≠ 0 antes dela. Número pequeno → expoente NEGATIVO.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como transformar 0,0007 em a · 10ⁿ com 1 ≤ a < 10?",
    pista: "A vírgula anda pra DIREITA até chegar depois do 7. Conte as casas.",
    revelacao: "0,0007 → 7 (andei 4 casas para a direita) → 7 · 10⁻⁴.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "0,0007 → NC",
      passos: [
        { expr: "0,0007", explica: "Vírgula original.", status: "neutro", professor: "Preciso levar a vírgula até depois do primeiro dígito diferente de zero." },
        { expr: "0,007 (1 casa)", explica: "Movo 1 casa à direita.", status: "ok" },
        { expr: "0,07 (2 casas)", explica: "Continuo.", status: "ok" },
        { expr: "0,7 (3 casas)", explica: "Ainda não é ≥ 1.", status: "ok" },
        { expr: "7, (4 casas) → mantissa = 7", explica: "Parei quando o 7 ficou antes da vírgula.", status: "ok", professor: "Mantissa = 7 (entre 1 e 10 ✅). Andei 4 casas para a DIREITA → expoente NEGATIVO. Isso indica número pequeno." },
        { expr: "= 7 · 10⁻⁴", explica: "Expoente = −(casas).", status: "ok", professor: "Número pequeno → expoente sempre NEGATIVO. Aqui, −4." },
      ],
      fatorada: "0,0007 = 7 · 10⁻⁴",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Números pequenos passo a passo",
    etapas: [
      {
        texto: "Ande a vírgula pra DIREITA até 1 dígito ≠ 0 antes dela. Conte as casas — esse é o expoente NEGATIVO.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "0,00025 → NC",
            passos: [
              { expr: "0,00025", explica: "Vírgula original.", status: "neutro" },
              { expr: "0,0025 (1) → 0,025 (2) → 0,25 (3) → 2,5 (4)", explica: "Andei 4 casas.", status: "ok", professor: "Parei em 2,5 porque 2,5 está entre 1 e 10." },
              { expr: "Mantissa = 2,5 · 10⁻⁴", explica: "Casas → expoente negativo.", status: "ok", professor: "4 casas para a direita → expoente −4. Regra: pequeno → negativo." },
            ],
            fatorada: "0,00025 = 2,5 · 10⁻⁴",
          },
          destaque: "Pequeno → expoente NEGATIVO. Não confunda com número negativo.",
        },
      },

      {
        texto: "Voltar da NC pra comum: expoente negativo → vírgula pra ESQUERDA. Completa com zeros se faltar dígito.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "5,2 · 10⁻³ → comum",
            passos: [
              { expr: "5,2 · 10⁻³", explica: "Expoente −3 → 3 casas à esquerda.", status: "neutro", professor: "Regra: expoente NEGATIVO manda a vírgula pra ESQUERDA. 3 casas." },
              { expr: "0,52 (1 casa) → 0,052 (2) → 0,0052 (3)", explica: "Ando e completa com zeros.", status: "ok", professor: "Quando o dígito acaba, completo com zeros à esquerda." },
              { expr: "= 0,0052", explica: "Resposta.", status: "ok" },
            ],
            fatorada: "5,2 · 10⁻³ = 0,0052",
          },
          destaque: "Expoente negativo = vírgula pra ESQUERDA.",
        },
      },

      {
        texto: "⚠️ Armadilha: 10⁻³ é POSITIVO, não negativo.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "10⁻³ é positivo ou negativo?",
            passos: [
              { expr: "10⁻³ = 1/10³", explica: "Expoente negativo INVERTE.", status: "neutro", professor: "Da aula 02: a⁻ⁿ = 1/aⁿ. O expoente negativo INVERTE, não vira sinal negativo." },
              { expr: "10³ = 1000", explica: "Base positiva elevada a positivo é positivo.", status: "ok" },
              { expr: "10⁻³ = 1/1000 = 0,001", explica: "Positivo pequeno.", status: "ok", professor: "0,001 é POSITIVO. Está entre 0 e 1, mas nunca deixa de ser positivo. Número negativo seria −0,001 (com sinal). Sinal do EXPOENTE não é sinal do VALOR." },
              { expr: "≠ −1000", explica: "Contra-exemplo.", status: "erro", professor: "Se alguém disser que 10⁻³ = −1000, está errando dois conceitos: (i) confundindo sinal do expoente com sinal do valor, e (ii) mudando o módulo." },
            ],
            fatorada: "10⁻³ = 0,001 (positivo, pequeno)",
          },
          destaque: "Sinal do expoente diz TAMANHO, não sinal do número.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: escreva 0,000048 em notação científica.",
    resposta: "4,8 · 10⁻⁵",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "0,000048 → NC",
      passos: [
        { expr: "0,000048", explica: "Vírgula original.", status: "neutro" },
        { expr: "→ 4,8 (após 5 casas)", explica: "Ando até 4,8.", status: "ok", professor: "4,8 está entre 1 e 10 ✅. Andei 5 casas à direita." },
        { expr: "= 4,8 · 10⁻⁵", explica: "Pequeno → expoente negativo.", status: "ok" },
      ],
      fatorada: "0,000048 = 4,8 · 10⁻⁵",
      legenda: "Modelagem",
    },
    passos: ["Ando até 4,8.", "5 casas à direita.", "= 4,8 · 10⁻⁵."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: 0,006 em NC.",
    dica: "3 casas para a direita. Mantissa = 6.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "0,006 → NC",
      passos: [
        { expr: "0,006 → 0,06 → 0,6 → 6, (3 casas)", explica: "Ando 3 casas.", status: "ok" },
        { expr: "= 6 · 10⁻³", explica: "Pequeno → expoente negativo.", status: "ok" },
      ],
      fatorada: "0,006 = 6 · 10⁻³",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6 · 10⁻³" }, { nome: "6 · 10³" }, { nome: "0,6 · 10⁻²" }],
      respostaCerta: "6 · 10⁻³",
      feedbackAcerto: "🎯 Pequeno → expoente negativo.",
      feedbackErro: "Número pequeno EXIGE expoente NEGATIVO. E 0,6 não é mantissa válida (precisa ser ≥ 1).",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: 2,3 · 10⁻² = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2,3 · 10⁻² → comum",
      passos: [
        { expr: "2,3 · 10⁻²", explica: "Expoente −2 → 2 casas à esquerda.", status: "neutro" },
        { expr: "0,23 (1 casa) → 0,023 (2 casas)", explica: "Completa com zeros.", status: "ok" },
      ],
      fatorada: "2,3 · 10⁻² = 0,023",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "0,023" }, { nome: "0,23" }, { nome: "0,0023" }],
      respostaCerta: "0,023",
      feedbackAcerto: "🎯 2 casas para a esquerda.",
      feedbackErro: "Expoente −2 = 2 casas para a esquerda, completando com zero à esquerda.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um glóbulo vermelho mede ≈ 7 · 10⁻⁶ m.",
    problema: "Em decimal, quanto é?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "7 · 10⁻⁶ → comum",
      passos: [
        { expr: "7 · 10⁻⁶", explica: "Expoente −6 → 6 casas à esquerda.", status: "neutro", professor: "Número pequeno: vírgula anda para a esquerda. 6 casas." },
        { expr: "0,7 → 0,07 → 0,007 → 0,0007 → 0,00007 → 0,000007", explica: "Vou completando com zeros.", status: "ok" },
        { expr: "= 0,000007 m", explica: "Resposta.", status: "ok", professor: "7 micrômetros. Ainda é POSITIVO — o expoente negativo só disse que é pequeno." },
      ],
      fatorada: "7 · 10⁻⁶ = 0,000007 m",
      legenda: "Aplicação — biologia",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "0,000007 m" }, { nome: "0,00007 m" }, { nome: "0,0000007 m" }],
      respostaCerta: "0,000007 m",
      feedbackAcerto: "🎯 6 casas para a esquerda.",
      feedbackErro: "10⁻⁶ = 6 casas para a ESQUERDA. Conte de novo colocando zeros à esquerda.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Pequeno → expoente NEGATIVO. Grande → expoente positivo.",
      "Conte as casas até o primeiro dígito ≠ 0.",
      "Volta: 10⁻ⁿ = ande n casas para a ESQUERDA.",
      "Expoente negativo ≠ número negativo. 10⁻³ = 0,001 (positivo).",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "0,05 em NC:", opcoes: ["5 · 10⁻²", "5 · 10²", "0,5 · 10⁻¹"], correta: 0, feedbackAcerto: "🎉 2 casas → 10⁻².", feedbackErro: "Pequeno → expoente NEGATIVO. Mantissa precisa ser ≥ 1 (0,5 não vale)." },
      { pergunta: "8 · 10⁻⁴ =", opcoes: ["0,0008", "0,008", "0,00008"], correta: 0, feedbackAcerto: "🎉 4 casas à esquerda.", feedbackErro: "Expoente −4 = 4 casas pra esquerda: 0,0008." },
      { pergunta: "0,000091 em NC:", opcoes: ["9,1 · 10⁻⁵", "9,1 · 10⁻⁴", "91 · 10⁻⁶"], correta: 0, feedbackAcerto: "🎉 Andei até 9,1 → 5 casas.", feedbackErro: "Ande até sobrar 1 dígito ≠ 0 antes da vírgula: 9,1. Conte 5 casas." },
      { pergunta: "10⁻³ é:", opcoes: ["0,001 (positivo)", "−1000", "−0,001"], correta: 0, feedbackAcerto: "🎉 Expoente negativo INVERTE, o número continua positivo.", feedbackErro: "Sinal do EXPOENTE não é sinal do VALOR. 10⁻³ = 1/1000 = 0,001, POSITIVO." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Coisas minúsculas",
    materiais: ["Régua/tabela"],
    passos: [
      "Liste 3 objetos muito pequenos (fio de cabelo, célula, átomo).",
      "Escreva cada medida em notação científica.",
      "Explique que expoente negativo não deixa o número negativo.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
