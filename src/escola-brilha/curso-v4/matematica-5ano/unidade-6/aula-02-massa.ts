import type { AulaV4 } from "../../types";

export const aula02_massa: AulaV4 = {
  slug: "u6-02-massa",
  titulo: "Massa: t, kg, g, mg",
  iconeTrilha: "⚖️",
  bncc: ["EF05MA19"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Pesado ou leve?",
    historia: "{NOME}, para medir massa temos tonelada (t), quilograma (kg), grama (g) e miligrama (mg). Cada passo grande é × 1.000.",
  },
  momento02_exploracao: {
    instrucao: "Escala.",
    cenas: [
      { tipo: "texto", texto: "1 t = 1.000 kg · 1 kg = 1.000 g · 1 g = 1.000 mg.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "1,5 kg em g?",
    pista: "× 1.000.",
    revelacao: "1.500 g.",
  },
  momento04_explicacao: {
    titulo: "Exemplos",
    etapas: [
      { texto: "2,3 kg = 2.300 g." },
      { texto: "500 g = 0,5 kg." },
      { texto: "1,25 t = 1.250 kg." },
    ],
  },
  momento05_modelagem: {
    enunciado: "0,75 kg em g.",
    resposta: "750 g",
    passos: ["× 1.000.", "= 750."],
  },
  momento06_praticaGuiada: {
    enunciado: "2.400 g em kg.",
    dica: "÷ 1.000.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2,4 kg" }, { nome: "24 kg" }, { nome: "0,24 kg" }],
      respostaCerta: "2,4 kg",
      feedbackAcerto: "🎯",
      feedbackErro: "2.400 ÷ 1.000 = 2,4.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "3 t em kg.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3.000 kg" }, { nome: "300 kg" }, { nome: "30.000 kg" }],
      respostaCerta: "3.000 kg",
      feedbackAcerto: "🎯",
      feedbackErro: "3.000 kg.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma padaria vendeu 15 pães de 250 g cada.",
    problema: "Massa total em kg?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3,75 kg" }, { nome: "3,5 kg" }, { nome: "4 kg" }],
      respostaCerta: "3,75 kg",
      feedbackAcerto: "🎯 15 × 250 = 3.750 g = 3,75 kg.",
      feedbackErro: "3,75 kg.",
    },
  },
  momento09_revisao: {
    pontos: ["Cada salto = × 1.000.", "Para cima: dividir. Para baixo: multiplicar."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2 kg = ? g", opcoes: ["2000", "200", "20"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2.000." },
      { pergunta: "500 g = ? kg", opcoes: ["0,5", "5", "50"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "0,5." },
      { pergunta: "0,25 t = ? kg", opcoes: ["250", "25", "2500"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "250 kg." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Balança da cozinha",
    materiais: ["Balança"],
    passos: ["Pese 3 alimentos.", "Escreva em g e kg."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 140, moedas: 75 },
};
