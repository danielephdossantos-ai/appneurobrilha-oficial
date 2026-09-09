import type { AulaV4 } from "../../types";

export const aula05_subtrairComTrocar: AulaV4 = {
  slug: "u2-05-subtrair-com-trocar",
  titulo: "Pedir emprestado até UM",
  iconeTrilha: "🔄",
  bncc: ["EF04MA03", "EF04MA05"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "E se o de cima é menor?",
    historia:
      "{NOME}, quando o dígito de cima é MENOR que o de baixo, a gente pede emprestado da coluna vizinha à ESQUERDA. 1 D vira 10 U · 1 C vira 10 D · 1 UM vira 10 C.",
  },
  momento02_exploracao: {
    instrucao: "Regra do empréstimo.",
    cenas: [
      { tipo: "texto", texto: "Corto o dígito da esquerda (−1) e engordo o da direita (+10).", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "O empréstimo pode 'pular' uma casa?",
    pista: "Se a vizinha à esquerda é ZERO, ela também precisa emprestar antes.",
    revelacao: "Empréstimo em cascata: se a vizinha é 0, ela empresta primeiro da próxima.",
  },
  momento04_explicacao: {
    titulo: "Subtração com troca",
    etapas: [
      {
        texto: "Vamos subtrair 5.342 − 1.586.",
        exemploReal: {
          contexto: "Troca em U (2<6), em D (4<8) e em C (3<5).",
          destaque: "5.342 − 1.586 = 3.756.",
          contaPassoAPasso: {
            operacao: "sub",
            operandos: [5342, 1586],
            resultado: 3756,
            passos: [
              { coluna: "U", fala: "2 − 6 não dá. Pego 1 D: 2 vira 12. 12 − 6 = 6.", digito: 6, porque: "1 D = 10 U" },
              { coluna: "D", fala: "4 virou 3. 3 − 8 não dá. Pego 1 C: 3 vira 13. 13 − 8 = 5.", digito: 5, porque: "1 C = 10 D" },
              { coluna: "C", fala: "3 virou 2. 2 − 5 não dá. Pego 1 UM: 2 vira 12. 12 − 5 = 7.", digito: 7, porque: "1 UM = 10 C" },
              { coluna: "UM", fala: "5 virou 4. 4 − 1 = 3.", digito: 3 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Subtraia 6.234 − 2.876.",
    passos: [
      "U: 4−6 não dá → 14−6=8. D vira 2.",
      "D: 2−7 não dá → 12−7=5. C vira 1.",
      "C: 1−8 não dá → 11−8=3. UM vira 5.",
      "UM: 5−2=3.",
    ],
    resposta: "3.358",
    casasValor: { numero: 3358, mostrarDecomposicao: true, extenso: "três mil, trezentos e cinquenta e oito" },
  },
  momento06_praticaGuiada: {
    enunciado: "4.523 − 1.876 = ?",
    dica: "Se o de cima é menor, empreste 10 da esquerda (e −1 lá).",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "sub",
      operandos: [4523, 1876],
      resultado: 2647,
      modo: "pratica",
      perguntaFinal: "Resultado?",
      opcoes: [2647, 2547, 2747],
      feedbackAcerto: "🎯 2.647.",
      feedbackErro: "Empréstimos em U, D e C → 2.647.",
      passos: [
        { coluna: "U", fala: "3 − 6 não dá. 13 − 6 = 7. D vira 1.", digito: 7 },
        { coluna: "D", fala: "1 − 7 não dá. 11 − 7 = 4. C vira 4.", digito: 4 },
        { coluna: "C", fala: "4 − 8 não dá. 14 − 8 = 6. UM vira 3.", digito: 6 },
        { coluna: "UM", fala: "3 − 1 = 2.", digito: 2 },
      ],
    },
  },
  momento07_praticaIndependente: {
    enunciado: "7.312 − 2.845 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4.467" }, { nome: "4.367" }, { nome: "4.567" }],
      respostaCerta: "4.467",
      feedbackAcerto: "🎯 4.467.",
      feedbackErro: "12−5=7, 10−4=6, 12−8=4, 6−2=4 → 4.467.",
    },
  },
  momento08_aplicacao: {
    contexto: "O celeiro tinha 6.005 sacos. Foram usados 2.478.",
    problema: "Sobraram:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3.527" }, { nome: "3.427" }, { nome: "3.627" }],
      respostaCerta: "3.527",
      feedbackAcerto: "🎯 3.527 sacos (com empréstimo em cascata pelos zeros).",
      feedbackErro: "Pelos zeros, o empréstimo vem lá do UM em cascata → 3.527.",
    },
  },
  momento09_revisao: {
    pontos: ["Empréstimo: −1 na esquerda, +10 na direita.", "Zero no meio empresta em cascata."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "8.421 − 3.586 = ?", opcoes: ["4.835", "4.735", "4.935"], correta: 0, feedbackAcerto: "🎉 4.835.", feedbackErro: "Empréstimos em U e D: 4.835." },
      { pergunta: "5.000 − 1.234 = ?", opcoes: ["3.766", "3.666", "3.866"], correta: 0, feedbackAcerto: "🎉 3.766 (cascata pelos zeros).", feedbackErro: "Cascata: UM cede 1 pra C, C pra D, D pra U → 3.766." },
      { pergunta: "9.302 − 4.578 = ?", opcoes: ["4.724", "4.624", "4.824"], correta: 0, feedbackAcerto: "🎉 4.724.", feedbackErro: "Empréstimos em U (via zero) e C: 4.724." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Empréstimo Marcado",
    materiais: ["Papel", "Caneta vermelha"],
    passos: ["Peça 2 números de 4 algarismos em que sobra empréstimo.", "Arme e subtraia.", "Marque em VERMELHO cada corte/troca."],
    registro: "📸 Foto da conta com as marcas.",
  },
  recompensa: { xp: 220, moedas: 110 },
};
