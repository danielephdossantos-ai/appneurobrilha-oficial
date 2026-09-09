import type { AulaV4 } from "../../types";

export const aula02_somaVariosNumeros: AulaV4 = {
  slug: "u2-02-soma-varios-numeros",
  titulo: "Somando 3 números de uma vez",
  iconeTrilha: "➕",
  bncc: ["EF05MA07"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Três colunas, um resultado",
    historia: "{NOME}, o Império recebe 3 tributos diferentes. Somar 3 números de uma vez é igual a somar 2 — só precisa cuidar do 'vai 1'.",
  },
  momento02_exploracao: {
    instrucao: "Uma linha por parcela.",
    cenas: [{ tipo: "texto", texto: "Arme as 3 parcelas alinhadas e some coluna a coluna.", destaque: true }],
  },
  momento03_descoberta: {
    perguntaGuia: "Como somar 7 + 8 + 6?",
    pista: "Some duas primeiro: 7 + 8 = 15, depois +6 = 21.",
    revelacao: "Escrevo 1 e vai 2 pra próxima coluna.",
  },
  momento04_explicacao: {
    titulo: "Soma de 3 parcelas passo a passo",
    etapas: [
      {
        texto: "Vamos ver 3.487 + 2.658 + 1.246.",
        exemploReal: {
          contexto: "3 parcelas armadas:",
          destaque: "= 7.391.",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [3487, 2658, 1246],
            resultado: 7391,
            passos: [
              { coluna: "U", fala: "7 + 8 + 6 = 21 · 1, vai 2.", digito: 1, vaiUm: 2 },
              { coluna: "D", fala: "8 + 5 + 4 + 2 = 19 · 9, vai 1.", digito: 9, vaiUm: 1 },
              { coluna: "C", fala: "4 + 6 + 2 + 1 = 13 · 3, vai 1.", digito: 3, vaiUm: 1 },
              { coluna: "UM", fala: "3 + 2 + 1 + 1 = 7.", digito: 7 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Some 245 + 378 + 156.",
    resposta: "779",
    passos: ["U: 5+8+6=19 (9, vai 1).", "D: 4+7+5+1=17 (7, vai 1).", "C: 2+3+1+1=7."],
    contaPassoAPasso: {
      operacao: "soma",
      operandos: [245, 378, 156],
      resultado: 779,
      passos: [
        { coluna: "U", fala: "5 + 8 + 6 = 19 · 9, vai 1.", digito: 9, vaiUm: 1 },
        { coluna: "D", fala: "4 + 7 + 5 + 1 = 17 · 7, vai 1.", digito: 7, vaiUm: 1 },
        { coluna: "C", fala: "2 + 3 + 1 + 1 = 7.", digito: 7 },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Juntos: 526 + 384 + 197.",
    dica: "Comece pelas U.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [526, 384, 197],
      resultado: 1107,
      modo: "explicacao",
      passos: [
        { coluna: "U", fala: "6 + 4 + 7 = 17 · 7, vai 1.", digito: 7, vaiUm: 1 },
        { coluna: "D", fala: "2 + 8 + 9 + 1 = 20 · 0, vai 2.", digito: 0, vaiUm: 2 },
        { coluna: "C", fala: "5 + 3 + 1 + 2 = 11 · 1, vai 1.", digito: 1, vaiUm: 1 },
        { coluna: "UM", fala: "0 + 0 + 0 + 1 = 1.", digito: 1 },
      ],
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Sua vez: 218 + 435 + 129.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Total?",
      opcoes: [{ nome: "782" }, { nome: "772" }, { nome: "792" }],
      respostaCerta: "782",
      feedbackAcerto: "🎯",
      feedbackErro: "218 + 435 + 129 = 782.",
    },
  },
  momento08_aplicacao: {
    contexto: "Três feiras: 1.240 · 985 · 1.815 quilos de fruta.",
    problema: "Total?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4.040 kg" }, { nome: "3.940 kg" }, { nome: "4.140 kg" }],
      respostaCerta: "4.040 kg",
      feedbackAcerto: "🎯",
      feedbackErro: "1.240 + 985 + 1.815 = 4.040.",
    },
  },
  momento09_revisao: {
    pontos: ["Alinhe todas as parcelas.", "Some duas por vez.", "'Vai 1' pode virar 'vai 2' ou 'vai 3'."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "127 + 245 + 386 = ?", opcoes: ["758", "748", "768"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "758." },
      { pergunta: "1.500 + 2.375 + 1.125 = ?", opcoes: ["5.000", "4.900", "5.100"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "5.000." },
      { pergunta: "84 + 158 + 267 = ?", opcoes: ["509", "499", "519"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "509." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "3 parcelas da sacola",
    materiais: ["Nota fiscal"],
    passos: ["Escolha 3 itens da mesma nota.", "Some os valores no papel."],
    registro: "📸 Foto da conta.",
  },
  recompensa: { xp: 140, moedas: 75 },
};
