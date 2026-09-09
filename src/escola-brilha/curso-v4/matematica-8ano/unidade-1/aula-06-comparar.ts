import type { AulaV4 } from "../../types";

/**
 * Aula 06 · U1 — Comparar e ordenar em notação científica.
 * Padrão piloto: passo a passo + Professor + armadilha do expoente negativo.
 */
export const aula06_comparar: AulaV4 = {
  slug: "u1-06-comparar",
  titulo: "Comparar e ordenar em notação científica",
  iconeTrilha: "📏",
  bncc: ["EF08MA01"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Qual é o MAIOR?",
    historia:
      "{NOME}, entre 3 · 10⁵ e 8 · 10⁴, qual é maior? Se você olhar só a mantissa (‘8 > 3’), erra. Na notação científica, EXPOENTE manda primeiro.",
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
      {
        tipo: "texto",
        texto:
          "🔑 Prioridade: (1) maior expoente vence; (2) empatou o expoente → maior mantissa vence.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Qual regra sempre funciona para comparar em NC?",
    pista: "Expoente maior = número maior. Empatou? Compara mantissa.",
    revelacao: "1º expoente, 2º mantissa.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Qual é maior: 3 · 10⁵ ou 8 · 10⁴?",
      passos: [
        { expr: "3 · 10⁵ = 300.000", explica: "Convertido para comum.", status: "neutro", professor: "Convertendo, fica óbvio: 300.000 ao lado de 80.000." },
        { expr: "8 · 10⁴ = 80.000", explica: "Convertido para comum.", status: "ok" },
        { expr: "300.000 > 80.000", explica: "3·10⁵ vence.", status: "ok", professor: "Repare: a mantissa de A (3) é MENOR que a de B (8), mas A é maior porque o expoente 5 supera o expoente 4. Expoente domina." },
        { expr: "Regra: expoente > → número >", explica: "Vale sempre (mantissas positivas em NC).", status: "ok" },
      ],
      fatorada: "3 · 10⁵ > 8 · 10⁴",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Comparar em 2 passos",
    etapas: [
      {
        texto: "Passo 1: expoente MAIOR = número maior (mantissas positivas em NC).",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3 · 10⁵ vs 8 · 10⁴",
            passos: [
              { expr: "Expoente de A = 5", explica: "Anoto o expoente.", status: "neutro" },
              { expr: "Expoente de B = 4", explica: "Anoto.", status: "ok" },
              { expr: "5 > 4 → A > B", explica: "Expoente decide.", status: "ok", professor: "Como a mantissa em NC está sempre em [1, 10), o expoente sozinho já define a ordem de grandeza." },
            ],
            fatorada: "A > B",
          },
          destaque: "Expoente maior = número maior, mesmo com mantissa menor.",
        },
      },

      {
        texto: "Passo 2: expoentes IGUAIS → compare mantissas.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2 · 10³ vs 5 · 10³",
            passos: [
              { expr: "Expoentes iguais (= 3)", explica: "Empate no expoente.", status: "neutro" },
              { expr: "Mantissa A = 2, B = 5", explica: "Comparo mantissas.", status: "ok" },
              { expr: "5 > 2 → B > A", explica: "Mantissa decide.", status: "ok" },
            ],
            fatorada: "B > A",
          },
          destaque: "Empate no expoente → mantissa desempata.",
        },
      },

      {
        texto: "⚠️ Armadilha: com expoentes NEGATIVOS, −2 > −5. Não confunda com a mantissa.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "1 · 10⁻² vs 3 · 10⁻⁵",
            passos: [
              { expr: "Expoentes: −2 e −5", explica: "Comparo com sinal.", status: "neutro", professor: "Cuidado: −2 é MAIOR que −5 porque está mais à direita na reta numérica. Fica mais perto do zero." },
              { expr: "−2 > −5 → A > B", explica: "Expoente maior vence.", status: "ok" },
              { expr: "1 · 10⁻² = 0,01", explica: "Confiro.", status: "ok" },
              { expr: "3 · 10⁻⁵ = 0,00003", explica: "Confiro.", status: "ok", professor: "0,01 > 0,00003. A mantissa 3 sendo maior que 1 não muda nada: quem manda é o expoente." },
            ],
            fatorada: "1·10⁻² > 3·10⁻⁵",
          },
          destaque: "Expoente negativo: mais próximo de 0 = maior.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: ordene do menor pro maior: 4·10³, 9·10², 2·10⁴.",
    resposta: "9·10² < 4·10³ < 2·10⁴",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Ordenar: 4·10³, 9·10², 2·10⁴",
      passos: [
        { expr: "Expoentes: 3, 2, 4", explica: "Anoto expoentes.", status: "neutro" },
        { expr: "Do menor: 2 < 3 < 4", explica: "Ordeno pelo expoente.", status: "ok", professor: "Todas as mantissas em NC estão em [1, 10). O expoente é suficiente para ordenar." },
        { expr: "9·10² < 4·10³ < 2·10⁴", explica: "Resposta.", status: "ok" },
      ],
      fatorada: "9·10² < 4·10³ < 2·10⁴",
      legenda: "Modelagem",
    },
    passos: ["Expoentes 2 < 3 < 4.", "Ordem: 9·10² < 4·10³ < 2·10⁴."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: qual é maior, 6 · 10⁷ ou 9 · 10⁶?",
    dica: "Expoente primeiro.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "6 · 10⁷ vs 9 · 10⁶",
      passos: [
        { expr: "Expoentes: 7 e 6", explica: "Comparo.", status: "neutro" },
        { expr: "7 > 6 → 6 · 10⁷ vence", explica: "Mesmo com mantissa menor.", status: "ok" },
      ],
      fatorada: "6 · 10⁷ > 9 · 10⁶",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6 · 10⁷" }, { nome: "9 · 10⁶" }, { nome: "iguais" }],
      respostaCerta: "6 · 10⁷",
      feedbackAcerto: "🎯 Expoente 7 > 6.",
      feedbackErro: "Mantissa só decide quando o expoente EMPATA. Aqui 7 > 6, então 6·10⁷ vence.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: ordene do MENOR para o MAIOR — 3·10⁻², 8·10⁻⁴, 5·10⁻².",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Ordenar: 3·10⁻², 8·10⁻⁴, 5·10⁻²",
      passos: [
        { expr: "Expoentes: −2, −4, −2", explica: "Anoto.", status: "neutro" },
        { expr: "−4 < −2 → 8·10⁻⁴ é o menor", explica: "Expoente mais negativo = menor.", status: "ok" },
        { expr: "Empate em −2 → compara mantissas 3 e 5", explica: "3 < 5.", status: "ok" },
        { expr: "8·10⁻⁴ < 3·10⁻² < 5·10⁻²", explica: "Resposta.", status: "ok" },
      ],
      fatorada: "8·10⁻⁴ < 3·10⁻² < 5·10⁻²",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Do MENOR ao MAIOR:",
      opcoes: [
        { nome: "8·10⁻⁴ < 3·10⁻² < 5·10⁻²" },
        { nome: "3·10⁻² < 5·10⁻² < 8·10⁻⁴" },
        { nome: "5·10⁻² < 3·10⁻² < 8·10⁻⁴" },
      ],
      respostaCerta: "8·10⁻⁴ < 3·10⁻² < 5·10⁻²",
      feedbackAcerto: "🎯 −4 < −2 (com sinal). Empate → mantissa.",
      feedbackErro: "Expoente −4 é MENOR que −2 (mais longe do zero à esquerda). Depois, empate em −2 → compara mantissa: 3 < 5.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Terra ≈ 5,97 · 10²⁴ kg · Marte ≈ 6,42 · 10²³ kg · Vênus ≈ 4,87 · 10²⁴ kg.",
    problema: "Qual planeta tem a MAIOR massa?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Terra vs Marte vs Vênus",
      passos: [
        { expr: "Expoentes: 24, 23, 24", explica: "Anoto.", status: "neutro" },
        { expr: "Marte (23) sai — menor expoente", explica: "Menor.", status: "ok", professor: "Mesmo com mantissa 6,42, Marte tem expoente 23 e perde para os dois de 24." },
        { expr: "Terra vs Vênus: mantissas 5,97 e 4,87", explica: "Empate no expoente.", status: "ok" },
        { expr: "5,97 > 4,87 → Terra vence", explica: "Mantissa decide.", status: "ok" },
      ],
      fatorada: "Terra > Vênus > Marte",
      legenda: "Aplicação — astronomia",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Terra" }, { nome: "Vênus" }, { nome: "Marte" }],
      respostaCerta: "Terra",
      feedbackAcerto: "🎯 Expoente 24 empata Terra/Vênus; mantissa 5,97 > 4,87.",
      feedbackErro: "Descarte Marte pelo expoente (23). Entre Terra e Vênus (24), compare mantissa: 5,97 > 4,87.",
    },
  },

  momento09_revisao: {
    pontos: [
      "1º compare expoentes (com sinal).",
      "2º empatou → compare mantissas.",
      "Expoente negativo: mais próximo de 0 é MAIOR.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Maior: 4·10⁵ ou 9·10⁴?", opcoes: ["4·10⁵", "9·10⁴", "iguais"], correta: 0, feedbackAcerto: "🎉 5 > 4.", feedbackErro: "Expoente domina: 5 > 4 → 4·10⁵ é maior, mesmo com mantissa menor." },
      { pergunta: "Maior: 2·10³ ou 5·10³?", opcoes: ["5·10³", "2·10³", "iguais"], correta: 0, feedbackAcerto: "🎉 Empate → mantissa.", feedbackErro: "Expoentes iguais → mantissa maior vence: 5 > 2." },
      { pergunta: "Maior: 1·10⁻² ou 1·10⁻⁵?", opcoes: ["1·10⁻²", "1·10⁻⁵", "iguais"], correta: 0, feedbackAcerto: "🎉 −2 > −5.", feedbackErro: "Na reta: −2 fica à direita de −5 → −2 > −5. Logo 1·10⁻² > 1·10⁻⁵." },
      { pergunta: "Maior: 9·10⁻³ ou 2·10⁻²?", opcoes: ["2·10⁻²", "9·10⁻³", "iguais"], correta: 0, feedbackAcerto: "🎉 −2 > −3 domina.", feedbackErro: "Cuidado: −2 > −3. Expoente decide antes da mantissa: 2·10⁻² = 0,02 e 9·10⁻³ = 0,009." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Recorde do mundo",
    materiais: ["Internet/livro"],
    passos: [
      "Encontre 3 números gigantes (planetas, distâncias, populações).",
      "Escreva em NC.",
      "Ordene do menor para o maior explicando 1º pelo expoente, 2º pela mantissa.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
