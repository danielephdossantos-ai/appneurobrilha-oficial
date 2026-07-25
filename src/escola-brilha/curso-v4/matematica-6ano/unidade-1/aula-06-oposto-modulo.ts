import type { AulaV4 } from "../../types";

export const aula06_opostoModulo: AulaV4 = {
  slug: "u1-06-oposto-modulo",
  titulo: "Oposto e módulo",
  iconeTrilha: "🪞",
  bncc: ["EF06MA03"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "O espelho do zero",
    historia:
      "{NOME}, cada número tem um GÊMEO do outro lado do zero. É o OPOSTO. E cada número tem uma DISTÂNCIA do zero — é o MÓDULO. Duas ideias novas, muito usadas na álgebra.",
  },
  momento02_exploracao: {
    instrucao: "Definições.",
    cenas: [
      { tipo: "texto", texto: "OPOSTO de um número: mesmo número, sinal trocado. Oposto de 5 é −5. Oposto de −7 é 7.", destaque: true },
      { tipo: "texto", texto: "MÓDULO (|x|): a distância do número até o zero. Sempre positivo ou zero." },
      { tipo: "retaNumerica", min: -6, max: 6, passo: 1, destacar: [{ valor: -4, rotulo: "−4" }, { valor: 4, rotulo: "4" }], intervalos: [{ de: -4, ate: 0, cor: "#f97316", rotulo: "4 passos" }, { de: 0, ate: 4, cor: "#0ea5e9", rotulo: "4 passos" }], legenda: "|−4| = 4 e |4| = 4 → mesma distância." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Quanto vale |−9|?",
    pista: "Distância do −9 até o zero.",
    revelacao: "|−9| = 9.",
  },
  momento04_explicacao: {
    titulo: "Regras práticas",
    etapas: [
      { texto: "Oposto: só trocar o sinal. Oposto de 12 = −12. Oposto de −3 = 3." },
      { texto: "Módulo: 'tira o sinal negativo'. |−15| = 15. |8| = 8. |0| = 0." },
      { texto: "Oposto do oposto = número original. Oposto de (oposto de 4) = oposto de −4 = 4." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Ache o oposto e o módulo de −12.",
    resposta: "Oposto = 12 · Módulo = 12",
    passos: [
      "Oposto: troca o sinal. −12 → 12.",
      "Módulo: distância até 0 = 12.",
      "Coincidem em valor porque −12 e 12 estão à mesma distância do zero.",
    ],
  },
  momento06_praticaGuiada: {
    enunciado: "Oposto de −7?",
    dica: "Troca o sinal.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7" }, { nome: "−7" }, { nome: "0" }],
      respostaCerta: "7",
      feedbackAcerto: "🎯",
      feedbackErro: "Troca o sinal.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Qual vale mais: |−10| ou 8?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "|−10| = 10" }, { nome: "8" }, { nome: "Iguais" }],
      respostaCerta: "|−10| = 10",
      feedbackAcerto: "🎯 10 > 8.",
      feedbackErro: "|−10| = 10.",
    },
  },
  momento08_aplicacao: {
    contexto: "Elevador saiu do térreo (0). Foi ao −3 (subsolo 3) e depois ao +5 (5º andar).",
    problema: "Andou mais na descida ou na subida?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "Na subida (|+5|=5)" },
        { nome: "Na descida (|−3|=3)" },
        { nome: "Igual" },
      ],
      respostaCerta: "Na subida (|+5|=5)",
      feedbackAcerto: "🎯 5 > 3.",
      feedbackErro: "|+5|=5 e |−3|=3.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Oposto: troca o sinal.",
      "Módulo: distância até zero, sempre ≥ 0.",
      "|−a| = |a|. Oposto do oposto = número original.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Oposto de 6:", opcoes: ["−6", "6", "0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "−6." },
      { pergunta: "|−15|:", opcoes: ["15", "−15", "0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "15." },
      { pergunta: "Oposto de −20:", opcoes: ["20", "−20", "0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "20." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Reta com espelho",
    materiais: ["Papel, régua"],
    passos: [
      "Desenhe uma reta de −5 a 5.",
      "Marque 3 pares OPOSTOS (ex.: 2 e −2).",
      "Escreva o módulo de cada um.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 90 },
};
