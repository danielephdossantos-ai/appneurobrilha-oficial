import type { AulaV4 } from "../../types";

export const aula04_subtrairSemTrocar: AulaV4 = {
  slug: "u2-04-subtrair-sem-trocar",
  titulo: "Subtrair até 9.999 (sem trocar)",
  iconeTrilha: "➖",
  bncc: ["EF04MA03", "EF04MA05"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Tirando do total",
    historia:
      "{NOME}, quando o número de cima é maior que o de baixo em CADA coluna, a subtração é direta: só subtrair coluna por coluna.",
  },
  momento02_exploracao: {
    instrucao: "Arme e subtraia da direita pra esquerda.",
    cenas: [
      { tipo: "texto", texto: "Se em toda coluna o de cima ≥ o de baixo, não precisa trocar.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como saber se preciso pedir emprestado?",
    pista: "Olhe cada coluna antes de começar.",
    revelacao: "Se em NENHUMA o de cima é menor, é subtração direta.",
  },
  momento04_explicacao: {
    titulo: "Subtração direta",
    etapas: [
      {
        texto: "Vamos subtrair 4.687 − 2.354.",
        exemploReal: {
          contexto: "Confira: 7≥4, 8≥5, 6≥3, 4≥2. Nenhuma troca.",
          destaque: "4.687 − 2.354 = 2.333.",
          contaPassoAPasso: {
            operacao: "sub",
            operandos: [4687, 2354],
            resultado: 2333,
            passos: [
              { coluna: "U", fala: "7 − 4 = 3.", digito: 3 },
              { coluna: "D", fala: "8 − 5 = 3.", digito: 3 },
              { coluna: "C", fala: "6 − 3 = 3.", digito: 3 },
              { coluna: "UM", fala: "4 − 2 = 2.", digito: 2 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Subtraia 5.876 − 3.245.",
    passos: ["U: 6−5=1.", "D: 7−4=3.", "C: 8−2=6.", "UM: 5−3=2."],
    resposta: "2.631",
    casasValor: { numero: 2631, mostrarDecomposicao: true, extenso: "dois mil, seiscentos e trinta e um" },
  },
  momento06_praticaGuiada: {
    enunciado: "6.798 − 2.354 = ?",
    dica: "Coluna por coluna, começando pela unidade.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "sub",
      operandos: [6798, 2354],
      resultado: 4444,
      modo: "pratica",
      perguntaFinal: "Resultado?",
      opcoes: [4444, 4344, 4544],
      feedbackAcerto: "🎯 8−4=4, 9−5=4, 7−3=4, 6−2=4 → 4.444.",
      feedbackErro: "Subtraia coluna a coluna: 4.444.",
      passos: [
        { coluna: "U", fala: "8 − 4 = 4.", digito: 4 },
        { coluna: "D", fala: "9 − 5 = 4.", digito: 4 },
        { coluna: "C", fala: "7 − 3 = 4.", digito: 4 },
        { coluna: "UM", fala: "6 − 2 = 4.", digito: 4 },
      ],
    },
  },
  momento07_praticaIndependente: {
    enunciado: "7.865 − 3.432 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4.433" }, { nome: "4.333" }, { nome: "4.533" }],
      respostaCerta: "4.433",
      feedbackAcerto: "🎯 4.433.",
      feedbackErro: "5−2=3, 6−3=3, 8−4=4, 7−3=4 → 4.433.",
    },
  },
  momento08_aplicacao: {
    contexto: "O Reino tinha 5.879 sacas de milho. Foram entregues 2.435.",
    problema: "Sobraram:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3.444" }, { nome: "3.344" }, { nome: "3.544" }],
      respostaCerta: "3.444",
      feedbackAcerto: "🎯 3.444 sacas.",
      feedbackErro: "5.879 − 2.435 = 3.444.",
    },
  },
  momento09_revisao: {
    pontos: ["Sem troca = de cima ≥ de baixo em todas.", "Da direita pra esquerda."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "4.586 − 2.341 = ?", opcoes: ["2.245", "2.145", "2.345"], correta: 0, feedbackAcerto: "🎉 2.245.", feedbackErro: "Coluna a coluna: 2.245." },
      { pergunta: "8.976 − 4.523 = ?", opcoes: ["4.453", "4.353", "4.553"], correta: 0, feedbackAcerto: "🎉 4.453.", feedbackErro: "6−3=3, 7−2=5, 9−5=4, 8−4=4." },
      { pergunta: "6.548 − 3.104 = ?", opcoes: ["3.444", "3.344", "3.544"], correta: 0, feedbackAcerto: "🎉 3.444.", feedbackErro: "8−4=4, 4−0=4, 5−1=4, 6−3=3." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Sem emprestar",
    materiais: ["Papel"],
    passos: ["Escreva 2 números de 4 algarismos em que cada dígito de cima é maior/igual ao de baixo.", "Subtraia armado.", "Confira."],
    registro: "📸 Foto da conta.",
  },
  recompensa: { xp: 180, moedas: 90 },
};
