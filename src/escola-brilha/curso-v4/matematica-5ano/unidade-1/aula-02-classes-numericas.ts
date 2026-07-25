import type { AulaV4 } from "../../types";

export const aula02_classesNumericas: AulaV4 = {
  slug: "u1-02-classes-numericas",
  titulo: "As duas classes: milhares e unidades simples",
  iconeTrilha: "🏷️",
  bncc: ["EF05MA01"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Dois grupos que salvam a leitura",
    historia:
      "{NOME}, quando o número fica grande, a gente separa em CLASSES: a classe dos MILHARES (CM · DM · UM) e a das UNIDADES SIMPLES (C · D · U). É por isso que existe o ponto: 325.478.",
  },
  momento02_exploracao: {
    instrucao: "Observe as classes.",
    cenas: [
      { tipo: "texto", texto: "Classe dos MILHARES → CM · DM · UM.", destaque: true },
      { tipo: "texto", texto: "Classe das UNIDADES SIMPLES → C · D · U." },
      { tipo: "texto", texto: "Ler: primeiro a classe da esquerda + 'mil' + a classe da direita.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que 325.478 se lê 'trezentos e vinte e cinco MIL, quatrocentos e setenta e oito'?",
    pista: "Duas classes: leia cada uma e ligue com 'mil'.",
    revelacao: "Classe dos milhares (325) = 'trezentos e vinte e cinco mil'. Classe das unidades (478) = 'quatrocentos e setenta e oito'.",
  },
  momento04_explicacao: {
    titulo: "Ler + somar as duas classes",
    etapas: [
      {
        texto: "Some as duas classes de 325.478 e confirme o total.",
        exemploReal: {
          contexto: "Escreva como soma das classes:",
          destaque: "325.000 + 478 = 325.478.",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [325000, 478],
            resultado: 325478,
            passos: [
              { coluna: "U", fala: "0 + 8 = 8.", digito: 8 },
              { coluna: "D", fala: "0 + 7 = 7.", digito: 7 },
              { coluna: "C", fala: "0 + 4 = 4.", digito: 4 },
              { coluna: "UM", fala: "5 + 0 = 5.", digito: 5 },
              { coluna: "DM", fala: "2 + 0 = 2.", digito: 2 },
              { coluna: "CM", fala: "3 + 0 = 3.", digito: 3 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Escreva 'quatrocentos e sete mil, trinta' como número e confirme somando as classes.",
    resposta: "407.030",
    passos: ["Classe milhares: 407.", "Classe unidades: 030.", "407.000 + 30 = 407.030."],
  },
  momento06_praticaGuiada: {
    enunciado: "Escreva 'duzentos e dez mil, cinco'.",
    dica: "Duas classes: 210 e 005.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o número?",
      opcoes: [{ nome: "210.005" }, { nome: "210.050" }, { nome: "21.005" }],
      respostaCerta: "210.005",
      feedbackAcerto: "🎯 210.005!",
      feedbackErro: "210 mil + 5 = 210.005.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Como se lê 604.020?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha a leitura:",
      opcoes: [
        { nome: "seiscentos e quatro mil, vinte" },
        { nome: "seiscentos e quarenta mil, dois" },
        { nome: "sessenta e quatro mil, vinte" },
      ],
      respostaCerta: "seiscentos e quatro mil, vinte",
      feedbackAcerto: "🎯 Exato.",
      feedbackErro: "Classe 604 = 'seiscentos e quatro mil'; classe 020 = 'vinte'.",
    },
  },
  momento08_aplicacao: {
    contexto: "Um estádio tem 82.500 lugares.",
    problema: "Como se lê?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "oitenta e dois mil e quinhentos" },
        { nome: "oitocentos e vinte e cinco mil" },
        { nome: "oito mil, duzentos e cinquenta" },
      ],
      respostaCerta: "oitenta e dois mil e quinhentos",
      feedbackAcerto: "🎯",
      feedbackErro: "82 (milhares) + 500 (unidades) = 82.500.",
    },
  },
  momento09_revisao: {
    pontos: ["Duas classes: MILHARES (CM/DM/UM) e UNIDADES SIMPLES (C/D/U).", "Ponto separa as classes.", "Leitura: classe milhares + 'mil' + classe unidades."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Como se escreve 'noventa mil e nove'?", opcoes: ["90.009", "90.090", "9.009"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "90 mil + 9 = 90.009." },
      { pergunta: "512.030 se lê:", opcoes: ["quinhentos e doze mil e trinta", "cinquenta e um mil e duzentos", "cinco milhões"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Classe 512 + classe 030." },
      { pergunta: "Qual tem 6 algarismos?", opcoes: ["100.000", "10.000", "1.000"], correta: 0, feedbackAcerto: "🎉 100.000.", feedbackErro: "Conte os algarismos: 1-0-0-0-0-0." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Ache as classes",
    materiais: ["Jornal ou celular"],
    passos: ["Encontre 3 números de 6 algarismos.", "Marque com risquinho onde termina cada classe.", "Leia em voz alta."],
    registro: "📸 Foto marcada.",
  },
  recompensa: { xp: 130, moedas: 70 },
};
