import type { AulaV4 } from "../../types";

export const aula05_probSistemas: AulaV4 = {
  slug: "u4-05-prob-sistemas",
  titulo: "Problemas com sistemas",
  iconeTrilha: "🧠",
  bncc: ["EF08MA08"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Traduzir e escolher o método",
    historia:
      "{NOME}, situações reais raramente vêm em equações prontas. Você TRADUZ e escolhe substituição ou adição.",
  },
  momento02_exploracao: {
    instrucao: "Traduzindo.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Problema-modelo",
        cabecalhos: ["Trecho", "Álgebra"],
        linhas: [
          { rotulo: "1", valores: ["2 pães + 1 leite = R$ 8", "2p + l = 8"] },
          { rotulo: "2", valores: ["3 pães + 2 leites = R$ 13", "3p + 2l = 13"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Qual método usar?",
    pista: "Se uma variável já está isolada → substituição. Se coef são fáceis de zerar → adição.",
    revelacao: "Escolha o mais simples.",
  },
  momento04_explicacao: {
    titulo: "Resolvendo o modelo",
    etapas: [
      {
        texto: "Adição.",
        exemploReal: {
          contexto: "I) 2p + l = 8. II) 3p + 2l = 13",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["I × (−2)", "−4p − 2l = −16"] },
              { rotulo: "2", valores: ["soma II", "−p = −3 → p = 3"] },
              { rotulo: "3", valores: ["volta I", "6 + l = 8 → l = 2"] },
            ],
          },
          destaque: "Pão R$ 3, Leite R$ 2.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Ana e Bruno têm juntos R$ 100. Ana tem R$ 20 a mais que Bruno.",
    resposta: "Bruno R$ 40, Ana R$ 60",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["a+b", "100"] },
        { rotulo: "2", valores: ["a−b", "20"] },
        { rotulo: "3", valores: ["soma", "2a = 120 → a=60"] },
        { rotulo: "4", valores: ["b", "40"] },
      ],
    },
    passos: ["a+b=100.", "a−b=20.", "a=60, b=40."],
  },
  momento06_praticaGuiada: {
    enunciado: "2 refris + 1 salg = R$ 15. 1 refri + 2 salg = R$ 12.",
    dica: "Adição.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Refri =",
      opcoes: [{ nome: "R$ 6" }, { nome: "R$ 3" }, { nome: "R$ 4" }],
      respostaCerta: "R$ 6",
      feedbackAcerto: "🎯",
      feedbackErro: "Multiplique II por −2.",
    },
  },
  momento07_praticaIndependente: {
    enunciado:
      "Numa fazenda há galinhas e coelhos. Total 30 cabeças e 80 pés.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Coelhos =",
      opcoes: [{ nome: "10" }, { nome: "20" }, { nome: "15" }],
      respostaCerta: "10",
      feedbackAcerto: "🎯 g+c=30, 2g+4c=80.",
      feedbackErro: "Pés: galinha 2, coelho 4.",
    },
  },
  momento08_aplicacao: {
    contexto: "2 ingressos + 1 pipoca = R$ 55. 1 ingresso + 2 pipocas = R$ 35.",
    problema: "Pipoca =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 5" }, { nome: "R$ 10" }, { nome: "R$ 15" }],
      respostaCerta: "R$ 5",
      feedbackAcerto: "🎯",
      feedbackErro: "Adição, multiplicando I por 2.",
    },
  },
  momento09_revisao: {
    pontos: ["Traduza cada frase.", "Escolha o método.", "Verifique nas duas equações."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "x+y=10, x−y=4. x=", opcoes: ["7", "3", "5"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2x=14." },
      { pergunta: "Dobro + triplo = 30 (mesmo x): 5x=30. x=", opcoes: ["6", "5", "10"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "÷5." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Mercadinho",
    materiais: ["Papel"],
    passos: ["Escreva 2 problemas com preços/combos.", "Resolva por sistema."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 180, moedas: 90 },
};
