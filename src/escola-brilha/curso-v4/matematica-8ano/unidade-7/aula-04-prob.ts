import type { AulaV4 } from "../../types";

export const aula04_prob: AulaV4 = {
  slug: "u7-04-prob",
  titulo: "Probabilidade",
  iconeTrilha: "🎯",
  bncc: ["EF08MA22"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Chance de acontecer",
    historia:
      "{NOME}, probabilidade é chance. P = casos favoráveis / casos possíveis.",
  },
  momento02_exploracao: {
    instrucao: "Regra.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "P = f / t",
        cabecalhos: ["Símbolo", "Significado"],
        linhas: [
          { rotulo: "f", valores: ["favoráveis"] },
          { rotulo: "t", valores: ["total"] },
        ],
      },
      { tipo: "texto", texto: "0 ≤ P ≤ 1. Multiplique por 100 para %.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "P de tirar 6 num dado?",
    pista: "1 caso favorável em 6.",
    revelacao: "1/6.",
  },
  momento04_explicacao: {
    titulo: "Exemplos",
    etapas: [
      {
        texto: "Dado.",
        exemploReal: {
          contexto: "P de par (2,4,6).",
          visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Cálculo"], linhas: [{ rotulo: "1", valores: ["3/6", "1/2 = 50%"] }] },
          destaque: "50%.",
        },
      },
      {
        texto: "Baralho.",
        exemploReal: {
          contexto: "P de copas em 52 cartas.",
          visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Cálculo"], linhas: [{ rotulo: "1", valores: ["13/52", "1/4 = 25%"] }] },
          destaque: "25%.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Urna com 4 bolas: 2 azuis, 2 vermelhas. P(azul).",
    resposta: "1/2",
    visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Valor"], linhas: [{ rotulo: "1", valores: ["2/4", "1/2"] }] },
    passos: ["2/4 = 1/2."],
  },
  momento06_praticaGuiada: {
    enunciado: "Dado. P(ímpar).",
    dica: "3/6.",
    interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "1/2" }, { nome: "1/6" }, { nome: "1/3" }], respostaCerta: "1/2", feedbackAcerto: "🎯", feedbackErro: "1,3,5." },
  },
  momento07_praticaIndependente: {
    enunciado: "Urna 3 verdes 7 azuis. P(verde).",
    interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "3/10" }, { nome: "7/10" }, { nome: "1/3" }], respostaCerta: "3/10", feedbackAcerto: "🎯", feedbackErro: "f/t." },
  },
  momento08_aplicacao: {
    contexto: "Rifa 200 números, 5 premiados.",
    problema: "P de ganhar:",
    interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "1/40" }, { nome: "5/100" }, { nome: "1/5" }], respostaCerta: "1/40", feedbackAcerto: "🎯 5/200.", feedbackErro: "Simplifica." },
  },
  momento09_revisao: {
    pontos: ["P = f/t.", "Sempre entre 0 e 1.", "Multiplique por 100 pra %."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Moeda: P(cara)", opcoes: ["1/2", "1/4", "1"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1/2." },
      { pergunta: "Dado: P(6)", opcoes: ["1/6", "1/2", "1/3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1 em 6." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Sorteio",
    materiais: ["Papel"],
    passos: ["Faça uma urna simples.", "Calcule as P antes de tirar."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
