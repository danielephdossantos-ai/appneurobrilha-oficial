import type { AulaV4 } from "../../types";

export const aula07_missaoFinalU2: AulaV4 = {
  slug: "u2-07-missao-final",
  titulo: "Missão Final: Contador do Reino",
  iconeTrilha: "🏆",
  bncc: ["EF04MA03", "EF04MA05", "EF04MA13"],
  duracaoMin: 25,
  metodologias: ["cpa", "vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "Prova do Contador",
    historia:
      "{NOME}, quem passar nesta prova vira Contador(a) Oficial do Reino: sabe somar, subtrair e resolver problemas com números até 9.999.",
  },
  momento02_exploracao: {
    instrucao: "Reveja rapidinho.",
    cenas: [
      { tipo: "texto", texto: "Soma com 'vai 1': passou de 9 sobe 1 pra ESQUERDA.", destaque: true },
      { tipo: "texto", texto: "Subtração com troca: −1 na esquerda, +10 na direita." },
      { tipo: "texto", texto: "Problema: leia com calma e ache a palavra-chave." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Qual o passo mais importante?",
    pista: "Antes das contas.",
    revelacao: "ENTENDER o problema. Se você entende, escolhe + ou − na hora.",
  },
  momento04_explicacao: {
    titulo: "Estratégia da prova",
    etapas: [
      {
        texto: "1. Leia. 2. Arme. 3. Comece pela unidade. 4. Cheque.",
        exemploReal: {
          contexto: "3.487 + 2.596 armado.",
          destaque: "3.487 + 2.596 = 6.083.",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [3487, 2596],
            resultado: 6083,
            passos: [
              { coluna: "U", fala: "7 + 6 = 13 (3, vai 1).", digito: 3, vaiUm: 1 },
              { coluna: "D", fala: "8 + 9 + 1 = 18 (8, vai 1).", digito: 8, vaiUm: 1 },
              { coluna: "C", fala: "4 + 5 + 1 = 10 (0, vai 1).", digito: 0, vaiUm: 1 },
              { coluna: "UM", fala: "3 + 2 + 1 = 6.", digito: 6 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Subtraia 7.203 − 3.478.",
    passos: [
      "U: 3−8 não dá → 13−8=5. D vira −1 (era 0 → cascata).",
      "D: 0 já virou. Empresta de C (2 vira 1). 10−7=3.",
      "C: 1 − 4 não dá → 11−4=7. UM vira 6.",
      "UM: 6−3=3.",
    ],
    resposta: "3.725",
    casasValor: { numero: 3725, mostrarDecomposicao: true, extenso: "três mil, setecentos e vinte e cinco" },
  },
  momento06_praticaGuiada: {
    enunciado: "4.567 + 3.298 = ?",
    dica: "Coluna a coluna. Não esqueça o 'vai 1'.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [4567, 3298],
      resultado: 7865,
      modo: "pratica",
      perguntaFinal: "Total?",
      opcoes: [7865, 7765, 7965],
      feedbackAcerto: "🎯 7.865.",
      feedbackErro: "7+8=15, 6+9+1=16, 5+2+1=8, 4+3=7 → 7.865.",
      passos: [
        { coluna: "U", fala: "7 + 8 = 15 (5, vai 1).", digito: 5, vaiUm: 1 },
        { coluna: "D", fala: "6 + 9 + 1 = 16 (6, vai 1).", digito: 6, vaiUm: 1 },
        { coluna: "C", fala: "5 + 2 + 1 = 8.", digito: 8 },
        { coluna: "UM", fala: "4 + 3 = 7.", digito: 7 },
      ],
    },
  },
  momento07_praticaIndependente: {
    enunciado: "8.234 − 2.876 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5.358" }, { nome: "5.258" }, { nome: "5.458" }],
      respostaCerta: "5.358",
      feedbackAcerto: "🎯 5.358.",
      feedbackErro: "Empréstimos em U, D e C: 5.358.",
    },
  },
  momento08_aplicacao: {
    contexto: "A biblioteca real tinha 6.500 livros. Doou 1.870 e comprou 2.150.",
    problema: "Novo total:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6.780" }, { nome: "6.680" }, { nome: "6.880" }],
      respostaCerta: "6.780",
      feedbackAcerto: "🎯 6.780 (6.500−1.870+2.150).",
      feedbackErro: "Passo 1: 6.500−1.870=4.630. Passo 2: 4.630+2.150=6.780.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Soma reagrupa quando coluna passa de 9.",
      "Subtração troca quando o de cima é menor.",
      "Cascata pelos zeros.",
      "Problema: leia a ação → escolha + ou −.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2.586 + 3.799 = ?", opcoes: ["6.385", "6.285", "6.485"], correta: 0, feedbackAcerto: "🎉 6.385.", feedbackErro: "Coluna a coluna com reagrupamentos: 6.385." },
      { pergunta: "5.000 − 1.876 = ?", opcoes: ["3.124", "3.024", "3.224"], correta: 0, feedbackAcerto: "🎉 3.124 (cascata pelos zeros).", feedbackErro: "Empréstimo em cascata: 3.124." },
      { pergunta: "Tinha 4.230, gastou 1.560, ganhou 2.100. Ficou com:", opcoes: ["4.770", "4.670", "4.870"], correta: 0, feedbackAcerto: "🎉 4.770.", feedbackErro: "4.230−1.560=2.670. 2.670+2.100=4.770." },
      { pergunta: "Diferença entre 7.500 e 3.276:", opcoes: ["4.224", "4.124", "4.324"], correta: 0, feedbackAcerto: "🎉 4.224.", feedbackErro: "7.500−3.276=4.224." },
      { pergunta: "3.245 + 1.876 + 892 = ?", opcoes: ["6.013", "5.913", "6.113"], correta: 0, feedbackAcerto: "🎉 6.013.", feedbackErro: "Soma em etapas: 3.245+1.876=5.121; 5.121+892=6.013." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma de Contador",
    materiais: ["Papel", "Caneta"],
    passos: [
      "Peça a alguém dois problemas: 1 de soma e 1 de subtração com números até 9.999.",
      "Arme e resolva.",
      "Explique cada 'vai 1' ou empréstimo em voz alta.",
    ],
    registro: "📸 Foto das contas resolvidas.",
  },
  recompensa: { xp: 250, moedas: 130, medalha: "Contador(a) do Reino" },
};
