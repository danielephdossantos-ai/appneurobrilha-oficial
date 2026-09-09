import type { AulaV4 } from "../../types";

export const aula03_compararOrdenar: AulaV4 = {
  slug: "u1-03-comparar-ordenar",
  titulo: "Comparar e ordenar até 1.000.000",
  iconeTrilha: "🔢",
  bncc: ["EF05MA01"],
  duracaoMin: 20,
  metodologias: ["skemp", "kamii"],

  momento01_motivacao: {
    titulo: "Qual reino tem mais gente?",
    historia:
      "{NOME}, o Imperador quer saber qual reino é o mais populoso. Não é conta armada — é COMPARAÇÃO: quem tem mais na primeira casa da esquerda?",
  },
  momento02_exploracao: {
    instrucao: "Comparar da esquerda pra direita.",
    cenas: [
      { tipo: "texto", texto: "1º Conte quantos algarismos. Quem tem MAIS algarismos é maior.", destaque: true },
      { tipo: "texto", texto: "2º Se empatar em algarismos, compare da esquerda pra direita." },
      { tipo: "texto", texto: "Símbolos: > (maior), < (menor), = (igual)." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "425.318 e 425.813 — qual é maior?",
    pista: "Até UM eles são iguais (425). Continue.",
    revelacao: "Na centena: 3 < 8. Então 425.813 > 425.318.",
  },
  momento04_explicacao: {
    titulo: "Ordenar (sem casas de valor — é COMPARAÇÃO)",
    etapas: [
      {
        texto: "Ordenar 84.500, 84.050, 84.005 em ordem crescente.",
        exemploReal: {
          contexto: "Todos empatam em DM/UM (8·4). Olhe a centena:",
          visualMat: {
            tipo: "tabela",
            titulo: "Comparação classe a classe",
            cabecalhos: ["Número", "DM", "UM", "C", "D", "U"],
            linhas: [
              { rotulo: "84.500", valores: ["8", "4", "5", "0", "0"] },
              { rotulo: "84.050", valores: ["8", "4", "0", "5", "0"] },
              { rotulo: "84.005", valores: ["8", "4", "0", "0", "5"] },
            ],
            destacar: { coluna: 3 },
          },
          destaque: "Centenas: 5, 0, 0 → 84.005 < 84.050 < 84.500.",
        },
      },
      {
        texto: "Se um tem 6 algarismos e outro tem 5, o de 6 já é maior — nem precisa comparar dígitos.",
        exemploReal: {
          contexto: "125.000 e 98.500 na reta numérica:",
          visualMat: {
            tipo: "retaNumerica",
            min: 0,
            max: 150000,
            passo: 25000,
            destacar: [
              { valor: 98500, rotulo: "98.500", cor: "#f97316" },
              { valor: 125000, rotulo: "125.000", cor: "#10b981" },
            ],
          },
          destaque: "125.000 fica MAIS À DIREITA → é maior.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Ordene em ordem CRESCENTE: 452.108 · 425.108 · 425.810.",
    resposta: "425.108 < 425.810 < 452.108",
    visualMat: {
      tipo: "tabela",
      titulo: "Comparação por casa",
      cabecalhos: ["Número", "CM", "DM", "UM", "C", "D", "U"],
      linhas: [
        { rotulo: "452.108", valores: ["4", "5", "2", "1", "0", "8"] },
        { rotulo: "425.108", valores: ["4", "2", "5", "1", "0", "8"] },
        { rotulo: "425.810", valores: ["4", "2", "5", "8", "1", "0"] },
      ],
      destacar: { coluna: 2 },
    },
    passos: [
      "Todos com 6 algarismos.",
      "CM: todos 4.",
      "DM: 5, 2, 2 → 452.108 é o maior.",
      "Entre 425.108 e 425.810 comparo a centena: 1 < 8 → 425.108 é o menor.",
    ],
  },
  momento06_praticaGuiada: {
    enunciado: "Qual é MAIOR: 316.400 ou 316.040?",
    dica: "Compare classe a classe da esquerda pra direita.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "316.400" }, { nome: "316.040" }, { nome: "iguais" }],
      respostaCerta: "316.400",
      feedbackAcerto: "🎯 Na centena, 4 > 0.",
      feedbackErro: "Até UM empatam. Na C: 4 > 0 → 316.400 é maior.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Complete com >, <, =: 208.400 __ 280.400.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o símbolo:",
      opcoes: [{ nome: "<" }, { nome: ">" }, { nome: "=" }],
      respostaCerta: "<",
      feedbackAcerto: "🎯 Na DM, 0 < 8.",
      feedbackErro: "CM: 2 = 2. DM: 0 < 8 → 208.400 < 280.400.",
    },
  },
  momento08_aplicacao: {
    contexto: "Populações: A=98.500 · B=100.200 · C=98.050.",
    problema: "Qual é a MENOR?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "C (98.050)" }, { nome: "A (98.500)" }, { nome: "B (100.200)" }],
      respostaCerta: "C (98.050)",
      feedbackAcerto: "🎯 A e C têm 5 algarismos; B tem 6 → B é o maior. Entre A e C, C < A na centena.",
      feedbackErro: "B tem 6 algarismos → é o maior. Entre A e C, olhe a centena: 0 < 5 → C < A.",
    },
  },
  momento09_revisao: {
    pontos: ["Mais algarismos → maior.", "Empatou? Compare da esquerda pra direita.", "Ordem crescente = do menor pro maior."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Qual é o maior?", opcoes: ["540.100", "504.100", "450.100"], correta: 0, feedbackAcerto: "🎉 CM: 5, 5, 4. Entre 540 e 504, na DM: 4 > 0.", feedbackErro: "Compare CM/DM: 540.100 vence." },
      { pergunta: "216.300 __ 216.030", opcoes: ["<", ">", "="], correta: 1, feedbackAcerto: "🎉 Na C: 3 > 0.", feedbackErro: "Empata até UM. C: 3 > 0." },
      { pergunta: "Ordem crescente: 305.100 · 350.100 · 300.510", opcoes: ["300.510 < 305.100 < 350.100", "305.100 < 300.510 < 350.100", "350.100 < 305.100 < 300.510"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Todos começam com 3. Compare DM/UM." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Ranking de números",
    materiais: ["Papel", "Rótulos, notas fiscais"],
    passos: ["Anote 5 números grandes que ache em casa.", "Ordene do menor pro maior.", "Explique o critério em voz alta."],
    registro: "📸 Foto do ranking.",
  },
  recompensa: { xp: 130, moedas: 70 },
};
