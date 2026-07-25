import type { AulaV4 } from "../../types";

export const aula04_expressoes: AulaV4 = {
  slug: "u2-04-expressoes",
  titulo: "Expressões numéricas — ordem das operações",
  iconeTrilha: "🧮",
  bncc: ["EF06MA03"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "A ordem que salva",
    historia:
      "{NOME}, quando uma conta tem +, −, ×, ÷ e parênteses TUDO junto, precisamos de uma ORDEM. Se cada um resolve por onde quer, a resposta muda.",
  },

  momento02_exploracao: {
    instrucao: "Memorize a HIERARQUIA.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Ordem das operações",
        cabecalhos: ["Prioridade", "O que resolver"],
        linhas: [
          { rotulo: "1º", valores: ["1º", "( ) parênteses, [ ] colchetes, { } chaves — de dentro pra fora"] },
          { rotulo: "2º", valores: ["2º", "Potências e raízes"] },
          { rotulo: "3º", valores: ["3º", "× e ÷ — da esquerda pra direita"] },
          { rotulo: "4º", valores: ["4º", "+ e − — da esquerda pra direita"] },
        ],
        destacar: { linha: 0 },
      },
      { tipo: "texto", texto: "REGRA: parênteses primeiro. Depois potência. Depois × ÷. Depois + −.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Quanto é 3 + 4 × 2?",
    pista: "× ANTES de +.",
    revelacao: "4 × 2 = 8; depois 3 + 8 = 11. Resposta: 11 (NÃO 14).",
  },

  momento04_explicacao: {
    titulo: "Aplicando a hierarquia",
    etapas: [
      {
        texto: "Sem parênteses: faça × ÷ primeiro, depois + −.",
        exemploReal: {
          contexto: "20 − 6 × 2 + 1",
          visualMat: {
            tipo: "tabela",
            titulo: "Passo a passo",
            cabecalhos: ["Passo", "Expressão", "Resultado"],
            linhas: [
              { rotulo: "1", valores: ["1", "6 × 2", "12"] },
              { rotulo: "2", valores: ["2", "20 − 12 + 1", "9"] },
            ],
          },
          destaque: "20 − 6 × 2 + 1 = 9.",
        },
      },
      {
        texto: "Com parênteses: resolva DENTRO deles primeiro.",
        exemploReal: {
          contexto: "(20 − 6) × 2 + 1",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Expressão", "Resultado"],
            linhas: [
              { rotulo: "1", valores: ["1 (parênteses)", "20 − 6", "14"] },
              { rotulo: "2", valores: ["2 (×)", "14 × 2", "28"] },
              { rotulo: "3", valores: ["3 (+)", "28 + 1", "29"] },
            ],
          },
          destaque: "Mesmos números, resposta DIFERENTE: 29.",
        },
      },
      {
        texto: "Colchetes e chaves: sempre de DENTRO pra FORA.",
        exemploReal: {
          contexto: "2 × [3 + (10 − 6)]",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Expressão", "Resultado"],
            linhas: [
              { rotulo: "1", valores: ["parênteses", "10 − 6", "4"] },
              { rotulo: "2", valores: ["colchetes", "3 + 4", "7"] },
              { rotulo: "3", valores: ["fora", "2 × 7", "14"] },
            ],
          },
          destaque: "Sempre de dentro pra fora.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Calcule: 40 − (5 + 3) × 4.",
    resposta: "8",
    passos: [
      "Parênteses: 5 + 3 = 8.",
      "Multiplicação: 8 × 4 = 32.",
      "Subtração: 40 − 32 = 8.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Calcule: 10 + 6 ÷ 2.",
    dica: "÷ antes de +.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "13" }, { nome: "8" }, { nome: "16" }],
      respostaCerta: "13",
      feedbackAcerto: "🎯 6 ÷ 2 = 3 · 10 + 3 = 13.",
      feedbackErro: "÷ antes de +.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Calcule: (12 + 8) ÷ 4 + 3 × 2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "11" }, { nome: "10" }, { nome: "13" }],
      respostaCerta: "11",
      feedbackAcerto: "🎯 (20) ÷ 4 + 6 = 5 + 6 = 11.",
      feedbackErro: "Parênteses, depois ÷ e ×, depois +.",
    },
  },

  momento08_aplicacao: {
    contexto: "Pedro tinha R$ 50. Comprou 3 lanches de R$ 8 e 1 suco de R$ 6.",
    problema: "Quanto sobrou? Expressão: 50 − (3 × 8 + 6).",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 20" }, { nome: "R$ 30" }, { nome: "R$ 12" }],
      respostaCerta: "R$ 20",
      feedbackAcerto: "🎯 3×8=24, +6=30, 50−30=20.",
      feedbackErro: "Dentro dos parênteses primeiro.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Ordem: ( ) → potência → × ÷ → + −.",
      "Sempre de DENTRO pra FORA nos parênteses.",
      "× e ÷ têm o MESMO peso — resolva na ordem que aparecem.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "5 + 2 × 3 =", opcoes: ["11", "21", "13"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "× antes de +." },
      { pergunta: "(5 + 2) × 3 =", opcoes: ["21", "11", "13"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Parênteses primeiro." },
      { pergunta: "20 ÷ (2 + 3) =", opcoes: ["4", "13", "5"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "(2+3)=5, 20÷5=4." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Expressão do troco",
    materiais: ["Papel"],
    passos: ["Invente uma compra com 2 produtos.", "Escreva a expressão do troco com parênteses.", "Resolva."],
    registro: "📸 Foto da expressão.",
  },
  recompensa: { xp: 160, moedas: 85 },
};
